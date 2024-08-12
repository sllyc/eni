// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description calculate the logical AND of two variables and create reactive dependencies
 * @param {BoolClass} val_1 or a boolean value
 * @param {BoolClass} val_2 or a boolean value
 * @returns {BoolClass} the result BoolClass object
 */

const And = (val_1, val_2) => {
    const bool_1 = Bool(val_1);
    const bool_2 = Bool(val_2);
    const result_bool = Bool(true);

    var_manager.add_dep(bool_1.var_idx, result_bool.var_idx);
    var_manager.add_dep(bool_2.var_idx, result_bool.var_idx);
    var_manager.add_update_fn(result_bool.var_idx, (var_lst) => {
        var_lst[result_bool.var_idx] = var_lst[bool_1.var_idx] && var_lst[bool_2.var_idx];
    });
    
    return result_bool;
}