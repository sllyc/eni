// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description this script is used to test all the features of the components inherited from the master ComponentClass
 */

test_tasks.push(() => {
    set_test('test_component.js', 'init');

    // create a component when not in event mode

    assert_no_error(() => Layout());
    assert_no_error(() => Layout(true));
    assert_no_error(() => Layout(true, 1));
    assert_no_error(() => Layout(null));

    assert_no_error(() => Text());
    assert_error(() => Text(1), 'argument must be JavaScript string object or Words object');
    assert_error(() => Text(null), 'argument must be JavaScript string object or Words object');
    assert_error(() => Text(1, 'a'), 'argument must be JavaScript string object or Words object');
    assert_no_error(() => Text('a', 2));

    // create a component when in event mode

    var_manager.event_mode = true;
    
    assert_error(() => Layout(), 'cannot create Layout in event');
    assert_error(() => Layout(true), 'cannot create Layout in event');
    assert_error(() => Layout(true, 1), 'cannot create Layout in event');
    assert_error(() => Layout(null), 'cannot create Layout in event');
    assert_error(() => Layout().verticle(true), 'cannot create Layout in event');

    assert_error(() => Text(), 'cannot create Text in event');
    assert_error(() => Text(1), 'cannot create Text in event');
    assert_error(() => Text(null), 'cannot create Text in event');
    assert_error(() => Text(1, 'a'), 'cannot create Text in event');
    assert_error(() => Text('a', 2), 'cannot create Text in event');
    assert_error(() => Text('a').size(2), 'cannot create Text in event');

    var_manager.event_mode = false;
});

test_tasks.push(() => {
    set_test('test_component.js', 'get and set attributes');

    // Get attributes when not in event mode

    assert_error(() => Layout().verticle(), `attribute 'verticle' has not been set`);
    assert_error(() => Text('a').size(), `attribute 'size' has not been set`);

    assert(() => Layout().verticle(true).verticle().value(), true);
    assert(() => Layout().verticle(true).verticle().js_type, 'boolean');
    assert(() => Layout().verticle(true).verticle().variable_class.name, 'BoolClass');

    assert(() => Text('a').size(55.3).size().value(), 55.3);
    assert(() => Text('a').size(55.3).size().js_type, 'number');
    assert(() => Text('a').size(55.3).size().variable_class.name, 'NumClass');

    // Get attributes when in event mode

    const layout_0 = Layout().width(1);
    const text_0 = Text('asfdaf');

    var_manager.event_mode = true;

    assert_error(() => Layout(), 'cannot create Layout in event');
    assert_error(() => Layout().verticle(), `cannot create Layout in event`);
    assert_error(() => Text('aas'), `cannot create Text in event`);

    assert(() => layout_0.width().value(), 1);
    assert(() => layout_0.width().js_type, 'number');
    assert(() => layout_0.width().variable_class.name, 'NumClass');

    assert(() => text_0.text().value(), 'asfdaf');
    assert(() => text_0.text().js_type, 'string');
    assert(() => text_0.text().variable_class.name, 'WordsClass');

    var_manager.event_mode = false;

    // set attributes when not in event mode

    assert_no_error(() => Layout().verticle(true));

    assert_error(() => Layout().verticle(1), 'argument must be JavaScript boolean object or Bool object');
    assert_error(() => Layout().verticle(null), 'argument must be JavaScript boolean object or Bool object');
    assert_no_error(() => Layout().verticle(false, 1));
    assert_error(() => Layout().verticle(1, false), 'argument must be JavaScript boolean object or Bool object');

    const bool_0 = Bool(true);
    assert_no_error(() => Layout().verticle(Bool(true)));
    assert(() => Layout().verticle(bool_0).var_idx === bool_0.var_idx, false);

    assert_error(() => Layout().verticle(Words('asda')), 'argument must be JavaScript boolean object or Bool object');
    assert_no_error(() => Layout().verticle(Bool(false), 1));
    assert_error(() => Layout().verticle(Bool(true), false).verticle(Bool(false)), `attribute 'verticle' has already been set`);
    assert_no_error(() => Layout().verticle(Variable(false)));

    assert_error(() => Layout().verticle(true).verticle(false), `attribute 'verticle' has already been set`);
    assert_error(() => Layout().verticle(false).verticle(null), `attribute 'verticle' has already been set`);
    assert_error(() => Layout().verticle(true).verticle(true, false), `attribute 'verticle' has already been set`);

    // set attributes when in event mode

    const layout_1 = Layout();
    const layout_2 = Layout().verticle(false);
    const bool_1 = Bool(true);
    const words_0 = Words('asfd');
    const variable_0 = Variable(false);

    var_manager.event_mode = true;

    assert_error(() => layout_1.verticle(true), `attribute 'verticle' has not been set`);
    assert_error(() => layout_1.verticle(1), `attribute 'verticle' has not been set`);
    assert_error(() => layout_1.verticle(null), `attribute 'verticle' has not been set`);

    assert_no_error(() => layout_2.verticle(true));
    assert_error(() => layout_2.verticle(1), 'argument must be JavaScript boolean object or Bool object');
    assert_error(() => layout_2.verticle(null), 'argument must be JavaScript boolean object or Bool object');
    assert_no_error(() => layout_2.verticle(false, 1));
    assert_error(() => layout_2.verticle(1, false), 'argument must be JavaScript boolean object or Bool object');

    assert_no_error(() => layout_2.verticle(bool_1));
    assert(() => layout_2.verticle().value().var_idx === bool_1.var_idx, false);

    assert_error(() => layout_2.verticle(words_0), 'argument must be JavaScript boolean object or Bool object');
    assert_no_error(() => layout_2.verticle(bool_1, 1));
    assert_no_error(() => layout_2.verticle(bool_1, false).verticle(bool_1));
    assert_no_error(() => layout_2.verticle(variable_0));

    assert_no_error(() => layout_2.verticle(true).verticle(false).verticle(true));
    assert_error(() => layout_2.verticle(false).verticle(true).verticle(null), `argument must be JavaScript boolean object or Bool object`);
    assert_error(() => layout_2.verticle(false).verticle(null).verticle(true), `argument must be JavaScript boolean object or Bool object`);
    assert_error(() => layout_2.verticle(words_0).verticle(true).verticle(true), `argument must be JavaScript boolean object or Bool object`);
    assert_no_error(() => layout_2.verticle(true).verticle(true, false).verticle(true, 1, 1));

    var_manager.event_mode = false;
});