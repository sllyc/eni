// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description Layout component
 * @example run 'Layout().width(50).height(50).color("red").verticle(true).start(true).add( ... )' to create a Layout component with customized appearances, flexbox arrangements and add a child component
 * @returns {LayoutClass} A new LayoutClass instance
 */

class LayoutClass extends ComponentClass {
    constructor() {
        super();

        this._set_html('width', (html_element, val) => { html_element.style.width = `${val}%`; }, null);

        this._set_html('height', (html_element, val) => { html_element.style.height = `${val}%`; }, null);

        this._set_html('color', (html_element, val) => { html_element.style.backgroundColor = val; }, null);

        this._set_html('round', (html_element, val) => { html_element.style.borderRadius = `${Math.round(SCREEN_WIDTH * val / 100)}px`; }, null);

        this._set_html('padding', (html_element, val) => { html_element.style.padding = `${Math.round(SCREEN_WIDTH * val / 100)}px`; html_element.style.boxSizing = 'border-box'; }, null);

        this._set_bool_html('verticle', (html_element) => { html_element.style.flexDirection = 'column'; });

        this._set_bool_html('horizontal', (html_element) => { html_element.style.flexDirection = 'row'; });

        this._set_bool_html('start', (html_element) => { html_element.style.justifyContent = 'flex-start'; });

        this._set_bool_html('center', (html_element) => { html_element.style.justifyContent = 'center'; });

        this._set_bool_html('end', (html_element) => { html_element.style.justifyContent = 'flex-end'; });

        this._set_bool_html('spacebetween', (html_element) => { html_element.style.justifyContent = 'space-between'; });

        this._set_bool_html('spacearound', (html_element) => { html_element.style.justifyContent = 'space-around'; });

        this._set_bool_html('spaceevenly', (html_element) => { html_element.style.justifyContent = 'space-evenly'; });

        this._set_bool_html('crossstart', (html_element) => { html_element.style.alignItems = 'flex-start'; });

        this._set_bool_html('crosscenter', (html_element) => { html_element.style.alignItems = 'center'; });

        this._set_bool_html('crossend', (html_element) => { html_element.style.alignItems = 'flex-end'; });

        this._set_html('gap', (html_element, val) => { html_element.style.gap = `${Math.round(SCREEN_WIDTH * val / 100)}px`; }, null);

        this._set_bool_html('wrap', (html_element) => { html_element.style.flexWrap = 'wrap'; });

        this._set_bool_html('scrollable', (html_element) => { html_element.style.overflow = 'auto'; });
    }

    width(val) {
        return super._process_attr('width', Num, val);
    }

    height(val) {
        return super._process_attr('height', Num, val);
    }

    color(val) {
        return super._process_attr('color', Words, val);
    }

    round(val) {
        return super._process_attr('round', Num, val);
    }

    padding(val) {
        return super._process_attr('padding', Num, val);
    }

    verticle(val) {
        return super._process_attr('verticle', Bool, val);
    }

    horizontal(val) {
        return super._process_attr('horizontal', Bool, val);
    }

    start(val) {
        return super._process_attr('start', Bool, val);
    }

    center(val) {
        return super._process_attr('center', Bool, val);
    }

    end(val) {
        return super._process_attr('end', Bool, val);
    }

    spacebetween(val) {
        return super._process_attr('spacebetween', Bool, val);
    }

    spacearound(val) {
        return super._process_attr('spacearound', Bool, val);
    }

    spaceevenly(val) {
        return super._process_attr('spaceevenly', Bool, val);
    }

    crossstart(val) {
        return super._process_attr('crossstart', Bool, val);
    }

    crosscenter(val) {
        return super._process_attr('crosscenter', Bool, val);
    }

    crossend(val) {
        return super._process_attr('crossend', Bool, val);
    }

    gap(val) {
        return super._process_attr('gap', Num, val);
    }

    wrap(val) {
        return super._process_attr('wrap', Bool, val);
    }

    scrollable(val) {
        return super._process_attr('scrollable', Bool, val);
    }

    create_html() {
        const html_element = document.createElement('div');

        html_element.style.display = 'flex';
        html_element.style.flexShrink = '0';

        super._create_html(html_element);

        return html_element;
    }

    add(child_component, condition_bool = null) {
        return super._add(child_component, condition_bool);
    }

    click(fn) {
        return super._set_click(fn);
    }
}

const Layout = function() {
    return create_component(LayoutClass);
}