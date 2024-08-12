// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description Bool variable
 * @example run 'Bool(true)' to create a Bool object with value true
 * @returns {BoolClass} the BoolClass object
 */

class BoolClass extends VariableClass {
    constructor() {
        super();
    }
}

const Bool = function(val) {
    return create_variable(val, 'boolean', BoolClass);
}