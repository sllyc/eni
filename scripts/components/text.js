// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description Text component
 * @example run 'Text("Hello World").size(10).bold(true).color("red")' to create a new Text component with customized text, size, boldness, and color
 * @returns {TextClass} A new TextClass instance
 */

class TextClass extends ComponentClass {
    constructor() {
        super();

        this._set_html('text', (html_element, val) => { html_element.textContent = val; }, 'Text');

        this._set_html('size', (html_element, val) => { html_element.style.fontSize = `${Math.round(SCREEN_WIDTH * val / 100)}px`; }, 2);

        this._set_bool_html('bold', (html_element) => { html_element.style.fontWeight = 'bold'; });

        this._set_bool_html('italic', (html_element) => { html_element.style.fontStyle = 'italic'; });

        this._set_bool_html('underline', (html_element) => { html_element.style.textDecoration = 'underline'; });

        this._set_html('color', (html_element, val) => { html_element.style.color = val; }, 'black');
    }

    text(val) {
        return super._process_attr('text', Words, val);
    }

    size(val) {
        return super._process_attr('size', Num, val);
    }

    bold(val) {
        return super._process_attr('bold', Bool, val);
    }

    italic(val) {
        return super._process_attr('italic', Bool, val);
    }

    underline(val) {
        return super._process_attr('underline', Bool, val);
    }

    color(val) {
        return super._process_attr('color', Words, val);
    }

    create_html() {
        const html_element = document.createElement('div');

        // automatic line change, max width and overflow wrap
        html_element.style.width = 'max-content';
        html_element.style.maxWidth = '100%';
        html_element.style.overflowWrap = 'break-word';

        super._create_html(html_element);

        return html_element;
    }
}

function Text(text) {
    const new_text = create_component(TextClass);
    if (text !== undefined) {
        new_text.text(text);
    }
    return new_text;
}