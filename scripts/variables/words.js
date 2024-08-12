// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description Words variable
 * @example run 'Words("hello")' to create a Words object with value "hello"
 * @returns {WordsClass} the WordsClass object
 */

class WordsClass extends VariableClass {
    constructor() {
        super();
    }
}

const Words = (val) => {
    return create_variable(val, 'string', WordsClass);
}