// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description calculate whether two variables are equal in value and create reactive dependencies
 * @param {*} val_1 
 * @param {*} val_2 
 * @returns {BoolClass} the result BoolClass object
 */

const Equals = (val_1, val_2) => {
    const var_1 = Variable(val_1);
    const var_2 = Variable(val_2);
    const result_bool = Bool(true);

    var_manager.add_dep(var_1.var_idx, result_bool.var_idx);
    var_manager.add_dep(var_2.var_idx, result_bool.var_idx);
    var_manager.add_update_fn(result_bool.var_idx, (var_lst) => {
        var_lst[result_bool.var_idx] = var_lst[var_1.var_idx] === var_lst[var_2.var_idx];
    });

    return result_bool;
}