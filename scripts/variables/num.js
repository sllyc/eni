// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description Num variable
 * @example run 'Num(1)' to create a Num object with value 1
 * @returns {NumClass} the NumClass object
 */

class NumClass extends VariableClass {
    constructor() {
        super();
    }
}

const Num = (val) => {
    return create_variable(val, 'number', NumClass);
}