// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * This script contains methods to run assertions for unit tests and handle errors
 */

const test_tasks = [];

let test_file = null;
let test_name = null;

const set_test = (file, name) => {
    test_file = file;
    test_name = name;
};

const assert = (fn, expected) => {
    try {
        actual = fn();
    }
    catch (e) {
        document.body.innerHTML = `<div style="font-size: 50px;">Test failed in [${test_file}] for task [${test_name}]</div><div style="font-size: 50px;">Error thrown: ${e.message}</div><div style="font-size: 50px;">Expected: ${expected}</div>`;
        throw new Error('assertion error');
    }

    if (actual !== expected) {
        document.body.innerHTML = `<div style="font-size: 50px;">Test failed in [${test_file}] for task [${test_name}]</div><div style="font-size: 50px;">Actual: ${actual}</div><div style="font-size: 50px;">Expected: ${expected}</div>`;
        throw new Error('assertion error');
    }
};

const assert_error = (fn, msg = null) => {
    let no_error_thrown = false;
    try {
        fn();
        document.body.innerHTML = `<div style="font-size: 50px;">Test failed in [${test_file}] for task [${test_name}]</div><div style="font-size: 50px;">No error thrown</div>`;
        no_error_thrown = true;
    }
    catch (e) {
        if (msg && e.message !== msg) {
            document.body.innerHTML = `<div style="font-size: 50px;">Test failed in [${test_file}] for task [${test_name}]</div><div style="font-size: 50px;">Actual error message: ${e.message}</div><div style="font-size: 50px;">Expected error message: ${msg}</div>`;
            throw new Error('assertion error');
        }
    }
    if (no_error_thrown) {
        throw new Error('assertion error');
    }
};

const assert_no_error = (fn) => {
    try {
        fn();
    }
    catch (e) {
        document.body.innerHTML = `<div style="font-size: 50px;">Test failed in [${test_file}] for task [${test_name}]</div><div style="font-size: 50px;">Error thrown: ${e.message}</div><div style="font-size: 50px;">Expected no error</div>`;
        throw new Error('assertion error');
    }
};