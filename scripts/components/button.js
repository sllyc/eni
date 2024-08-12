// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description Button component
 * @example run 'Button("Click Me").click( ... )' to create a button component and add a click event
 * @returns {ButtonClass} A new ButtonClass instance
 */

class ButtonClass extends ComponentClass {
    constructor() {
        super();

        this._set_html('text', (html_element, val) => { html_element.innerText = val; }, 'Button');
        this._set_html('size', (html_element, val) => { html_element.style.fontSize = `${Math.round(SCREEN_WIDTH * val / 100)}px`; }, 2);
    }

    text(val) {
        return super._process_attr('text', Words, val);
    }

    size(val) {
        return super._process_attr('size', Num, val);
    }

    create_html() {
        const html_element = document.createElement('div');

        html_element.style.backgroundColor = '#f30000';
        html_element.style.padding = `${Math.round(SCREEN_WIDTH * 1 / 100)}px`;
        html_element.style.boxSizing = 'border-box';
        html_element.style.borderRadius = `${Math.round(SCREEN_WIDTH * 1 / 100)}px`;

        super._create_html(html_element);

        return html_element;
    }

    click(fn) {
        return super._set_click(fn);
    }
}

const Button = (text) => {
    const new_button = new ButtonClass();
    if (text !== undefined) {
        new_button.text(text);
    }
    return new_button;
}