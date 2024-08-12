// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description class to manage the global App() instance, as well as using it to get existing element instances by name
 * @example run 'App().add( ... )' to add components to the app
 * @example run 'App("name-of-elements")' to get an existing element by name
 */

const app_instance = Layout().width(100).height(100);

const App = (name = null) => {
    if (name === null) {
        return app_instance;
    }
    return name_manager.get_name(name);
}