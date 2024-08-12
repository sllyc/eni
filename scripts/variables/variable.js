// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description create a variable object based on the type of the input
 */

const Variable = (obj) => {
    if (var_manager.event_mode) {
        throw new Error('cannot create variable in event');
    }
    if (typeof obj === 'boolean' || obj instanceof BoolClass) {
        return Bool(obj);
    }
    if (typeof obj === 'string' || obj instanceof WordsClass) {
        return Words(obj);
    }
    if (typeof obj === 'number' || obj instanceof NumClass) {
        return Num(obj);
    }
    throw new Error('invalid argument type');
}