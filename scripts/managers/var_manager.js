// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description class to manage the variables, the dependencies between them and the reactive execution of the app
 */

class VarManager {
    constructor() {
        this.var_lst = [];
        this.var_fst_dep = [];
        this.var_update_fn = [];

        this.dep_to = [];
        this.dep_next = [];

        this.event_mode = false;
    }

    add_var(val) {
        if (typeof val !== 'boolean' && typeof val !== 'string' && typeof val !== 'number') {
            throw new Error('attribute must be a boolean, string, or number');
        }
        this.var_lst.push(val);
        this.var_fst_dep.push(-1);
        this.var_update_fn.push(null);
        return this.var_lst.length - 1;
    }

    get_var(idx) {
        return this.var_lst[idx];
    }

    add_dep(from_idx, to_idx) {
        this.dep_to.push(to_idx);
        this.dep_next.push(this.var_fst_dep[from_idx]);
        this.var_fst_dep[from_idx] = this.dep_to.length - 1;
    }

    add_update_fn(idx, update_fn) {
        if (this.var_update_fn[idx] !== null) {
            throw new Error(`attribute has already been set`);
        }
        this.var_update_fn[idx] = update_fn;
        update_fn(this.var_lst);
    }

    _update_var_rec(idx, val) {
        for (let dep_idx = this.var_fst_dep[idx]; dep_idx !== -1; dep_idx = this.dep_next[dep_idx]) {
            this.var_update_fn[this.dep_to[dep_idx]](this.var_lst);
            this._update_var_rec(this.dep_to[dep_idx], val);
        }
        return;
    }

    update_var(idx, val) {
        if (idx < 0 || idx >= this.var_lst.length) {
            throw new Error(`index out of range`);
        }
        this.var_lst[idx] = val;
        this._update_var_rec(idx, val);
    }
}

const var_manager = new VarManager();