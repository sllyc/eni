// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description master class of all components, handles the creation of components, attributes, rendering, click events, etc.
 */

class ComponentClass {
    constructor() {
        this.attr_dict = {};
        this.attr_html_dict = {};
        this._click = null;
    }

    name(name) {
        name_manager.set_name(this, name);
        return this;
    }

    _set_html(attr_name, fn, default_val) {
        this.attr_html_dict[attr_name] = [fn, default_val];
    }

    _set_bool_html(attr_name, fn) {
        this.attr_html_dict[attr_name] = [fn];
    }

    _process_attr(attr_name, attr_variable, attr) {
        if (attr === undefined) {
            if (attr_name in this.attr_dict) {
                return this.attr_dict[attr_name];
            }
            throw new Error(`attribute '${attr_name}' has not been set`);
        }

        if (var_manager.event_mode) {
            if (!(attr_name in this.attr_dict)) {
                throw new Error(`attribute '${attr_name}' has not been set`);
            }
            this.attr_dict[attr_name].value(attr);
            return this;
        }

        if (attr_name in this.attr_dict) {
            throw new Error(`attribute '${attr_name}' has already been set`);
        }

        this.attr_dict[attr_name] = attr_variable(attr);
        return this;
    }

    _add(child_component, condition_bool = null) {
        render_manager.add_render_dep(this, child_component, condition_bool);
        return this;
    }

    _set_click(fn) {
        if (var_manager.event_mode) {
            throw new Error('cannot set click event in event');
        }
        if (this._click !== null) {
            throw new Error('click event has been set');
        }
        if (typeof fn !== 'function') {
            throw new Error('click event must be a function');
        }
        this._click = fn;
        return this;
    }

    _create_html(html_element) {
        for (const [attr_name, lst] of Object.entries(this.attr_html_dict)) {
            if (lst.length === 1) {
                if (attr_name in this.attr_dict && this.attr_dict[attr_name].value()) {
                    lst[0](html_element);
                }
            }
            else {
                const val = attr_name in this.attr_dict ? this.attr_dict[attr_name].value() : lst[1];
                if (val !== null) {
                    lst[0](html_element, val);
                }
            }
        }

        // click event

        if (this._click !== null) {
            html_element.onclick = () => {
                var_manager.event_mode = true;
                this._click();
                var_manager.event_mode = false;
                render_manager.render();
            };
        }
    }
}

const create_component = function(component_class) {
    if (var_manager.event_mode) {
        throw new Error(`cannot create ${component_class.name.substring(0, component_class.name.length - 5)} in event`);
    }
    return new component_class();
};