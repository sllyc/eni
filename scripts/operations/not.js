// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description calculate the logical NOT of a variable and create reactive dependencies
 * @param {BoolClass} val or a boolean value
 * @returns {BoolClass} the result BoolClass object
 */

const Not = (val) => {
    const bool_var = Bool(val);
    const result_bool = Bool(true);

    var_manager.add_dep(bool_var.var_idx, result_bool.var_idx);
    var_manager.add_update_fn(result_bool.var_idx, (var_lst) => {
        var_lst[result_bool.var_idx] = !var_lst[bool_var.var_idx];
    });
    
    return result_bool;
}