// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description class to manage the names of elements, so that they can be accessed by name globally in the app
 */

class NameManager {
    constructor() {
        this.name_dict = {};
    }

    get_name(name) {
        if (!(name in this.name_dict)) {
            throw new Error(`Name '${name}' does not exist`);
        }
        return this.name_dict[name];
    }
    
    set_name(element, name) {
        if ((typeof name !== 'string')) {
            throw new Error('argument must be JavaScript string object');
        }
        if (name in this.name_dict) {
            throw new Error(`Name '${name}' has already been used`);
        }
        this.name_dict[name] = element;
    }
}

const name_manager = new NameManager();