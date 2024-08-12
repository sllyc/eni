// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description the master class for all variable classes, managing variable creation, value getting and setting
 */

class VariableClass {
    constructor() {
        this.var_idx = null;
        this.js_type = null;
        this.variable_class = null;
    }

    name(name) {
        if (name === undefined) {
            throw new Error('1 argument is required');
        }
        name_manager.set_name(this, name);
        return this;
    }

    value(val) {
        if (val === undefined) {
            return var_manager.get_var(this.var_idx);
        }

        if (var_manager.event_mode) {
            let var_val;
            if (typeof val === this.js_type) {
                var_val = val;
            }
            else if (val instanceof this.variable_class) {
                var_val = var_manager.get_var(val.var_idx);
            }
            else {
                throw new Error(`argument must be JavaScript ${this.js_type} object or ${this.variable_class.name.substring(0, this.variable_class.name.length - 5)} object`);
            }
            var_manager.update_var(this.var_idx, var_val);
            return this;
        }

        if (this.var_idx !== null) {
            throw new Error('variable has already been set');
        }

        if (val instanceof VariableClass) {
            this.var_idx = val.var_idx;
            return this;
        }

        this.var_idx = var_manager.add_var(val);
        return this;
    }
}

const create_variable = function(val, js_type, variable_class) {
    if (var_manager.event_mode) {
        throw new Error('cannot create variable in event');
    }
    if (val === undefined) {
        throw new Error('exactly 1 argument is required');
    }
    if (typeof val !== js_type && !(val instanceof variable_class)) {
        throw new Error(`argument must be JavaScript ${js_type} object or ${variable_class.name.substring(0, variable_class.name.length - 5)} object`);
    }

    const new_variable = new variable_class();
    new_variable.js_type = js_type;
    new_variable.variable_class = variable_class;
    new_variable.value(val);
    return new_variable;
}