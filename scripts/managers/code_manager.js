// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description class to manage the execution of the user code scripts and error handling
 * @example run 'Code().add(() => { ... })' to add user code to be executed
 */

class CodeManager {
    constructor() {
        this.code_lst = [];
    }

    add(fn) {
        this.code_lst.push(fn);
    }

    run() {
        for (let i = 0; i < this.code_lst.length; i++) {
            try {
                this.code_lst[i]();
            } catch (e) {
                const error_element = document.createElement('div');
                error_element.style.width = '100%';
                error_element.style.height = '100%';
                error_element.style.padding = '30px';
                error_element.style.boxSizing = 'border-box';
                error_element.style.overflow = 'auto';
                error_element.style.fontSize = '35px';
                error_element.style.color = '#bb0000';
                error_element.innerText = `Error: ${e.message}`;

                const app_element = document.getElementById('id.app');
                app_element.innerHTML = '';
                app_element.appendChild(error_element);

                return;
            }
        }

        render_manager.render();
    }
}

const code_manager = new CodeManager();

const Code = () => {
    return code_manager;
}