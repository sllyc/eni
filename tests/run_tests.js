// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * This script is used to run the unit tests after all the tests scripts are loaded
 */

for (let i = 0; i < test_tasks.length; i++) {
    try {
        test_tasks[i]();
    }
    catch (e) {
        break;
    }
    document.body.innerHTML = '<div style="font-size: 50px;">All tests passed!</div>';
}