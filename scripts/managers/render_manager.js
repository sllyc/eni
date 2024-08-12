// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description class to manage the dynamic HTML rendering/re-rendering of components
 */

class RenderManager {
    constructor() {
        this.render_dep_lst = [];
        this.html_cache_map = null;
    }

    add_render_dep(parent_component, child_component, condition_bool = null) {
        if (condition_bool === null) {
            this.render_dep_lst.push([parent_component, child_component]);
            return;
        }

        this.render_dep_lst.push([parent_component, child_component, condition_bool]);
    }

    _get_html(component) {
        if (this.html_cache_map.has(component)) {
            return this.html_cache_map.get(component);
        }
        const html = component.create_html();
        this.html_cache_map.set(component, html);
        return html;
    }

    render() {
        this.html_cache_map = new Map();

        const app_html = this._get_html(app_instance);

        for (let i = 0; i < this.render_dep_lst.length; i++) {
            const render_dep = this.render_dep_lst[i];

            if (render_dep.length === 3) {
                if (!render_dep[2].value()) {
                    continue;
                }
            }

            const parent_html = this._get_html(render_dep[0]);
            const child_html = this._get_html(render_dep[1]);
            parent_html.appendChild(child_html);
        }

        const app_element = document.getElementById('id.app');
        app_element.innerHTML = '';
        app_element.appendChild(app_html);
    }
}

const render_manager = new RenderManager();