// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description if the condition is true, results in the first variable, else results in the second variable
 * @param {BoolClass} condition_bool or a boolean value
 * @param {*} true_val 
 * @param {*} false_val 
 * @returns {*} the result variable
 */

const If = (condition_bool, true_val, false_val) => {
    if (!(condition_bool instanceof BoolClass)) {
        throw new Error(`argument ${condition_bool} must be a Bool object`);
    }

    const true_var = Variable(true_val);
    const false_var = Variable(false_val);

    if (true_var.constructor !== false_var.constructor) {
        throw new Error(`arguments ${true_val} and ${false_val} must be the same type`);
    }

    const result_var = new true_var.constructor();
    result_var.value(true_var.value());

    var_manager.add_dep(condition_bool.var_idx, result_var.var_idx);
    var_manager.add_dep(true_var.var_idx, result_var.var_idx);
    var_manager.add_dep(false_var.var_idx, result_var.var_idx);
    var_manager.add_update_fn(result_var.var_idx, (var_lst) => {
        if (var_lst[condition_bool.var_idx]) {
            var_lst[result_var.var_idx] = var_lst[true_var.var_idx];
        }
        else {
            var_lst[result_var.var_idx] = var_lst[false_var.var_idx];
        }
    });

    return result_var;
}