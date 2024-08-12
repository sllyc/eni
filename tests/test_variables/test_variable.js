// Licensed under the Apache License: http://www.apache.org/licenses/LICENSE-2.0
// For details: https://github.com/sllyc/eni/blob/main/NOTICE.txt


/**
 * @description this script is used to test all the features of the variables inherited from the master VariableClass
 */

test_tasks.push(() => {
    set_test('test_variable.js', 'init');
    
    // incorrect number of arguments

    assert_error(() => Bool(), 'exactly 1 argument is required');
    assert_error(() => Num(), 'exactly 1 argument is required');
    assert_no_error(() => Words('123', 123));
    assert_no_error(() => Variable(0, 'a', true));
    assert_no_error(() => Words(Words('123'), 123));

    // incorrect argument type

    assert_error(() => Bool(1), 'argument must be JavaScript boolean object or Bool object');
    assert_error(() => Num('123'), 'argument must be JavaScript number object or Num object');
    assert_error(() => Words(true), 'argument must be JavaScript string object or Words object');
    assert_error(() => Num(null), 'argument must be JavaScript number object or Num object');
    assert_error(() => Variable([]), 'invalid argument type');
    assert_error(() => Variable(null), 'invalid argument type');

    assert_error(() => Bool(Num(1)), 'argument must be JavaScript boolean object or Bool object');
    assert_error(() => Num(Words('123')), 'argument must be JavaScript number object or Num object');
    assert_error(() => Words(Bool(true)), 'argument must be JavaScript string object or Words object');
    assert_error(() => Num(Num('')), 'argument must be JavaScript number object or Num object');
    assert_error(() => Num(Bool('')), 'argument must be JavaScript boolean object or Bool object');
    assert_error(() => Variable(Variable([])), 'invalid argument type');

    // correct var value in var_manager

    assert(() => var_manager.get_var(Bool(true).var_idx), true);
    assert(() => var_manager.get_var(Words('').var_idx), '');
    assert(() => var_manager.get_var(Num(-1).var_idx), -1);
    assert(() => var_manager.get_var(Num(-0.0).var_idx), 0);
    assert(() => var_manager.get_var(Variable(-0).var_idx), 0);
    assert(() => var_manager.get_var(Variable('a').var_idx), 'a');
    assert(() => var_manager.get_var(Variable(false).var_idx), false);

    assert(() => var_manager.get_var(Bool(Bool(true)).var_idx), true);
    assert(() => var_manager.get_var(Words(Words('')).var_idx), '');
    assert(() => var_manager.get_var(Num(Num(-1)).var_idx), -1);
    assert(() => var_manager.get_var(Num(Num(0.0)).var_idx), 0);
    assert(() => var_manager.get_var(Num(Variable(-0)).var_idx), 0.0);
    assert(() => var_manager.get_var(Variable(Words('a')).var_idx), 'a');
    assert(() => var_manager.get_var(Bool(Variable(false)).var_idx), false);

    // correct js_type and variable_class

    const bool_var = Bool(true);
    assert(() => bool_var.js_type, 'boolean');
    assert(() => bool_var.variable_class, BoolClass);

    const bool_var_2 = Bool(Bool(false));
    assert(() => bool_var_2.js_type, 'boolean');
    assert(() => bool_var_2.variable_class, BoolClass);
    
    const num_var = Num(456);
    assert(() => num_var.js_type, 'number');
    assert(() => num_var.variable_class, NumClass);

    const num_var_2 = Num(Num(-123));
    assert(() => num_var_2.js_type, 'number');
    assert(() => num_var_2.variable_class, NumClass);

    const words_var = Words('hello');
    assert(() => words_var.js_type, 'string');
    assert(() => words_var.variable_class, WordsClass);

    const words_var_2 = Words(Words('@aw'));
    assert(() => words_var_2.js_type, 'string');
    assert(() => words_var_2.variable_class, WordsClass);

    const variable_var = Variable(3e5);
    assert(() => variable_var.js_type, 'number');
    assert(() => variable_var.variable_class, NumClass);

    const variable_var_2 = Num(Variable(3e5));
    assert(() => variable_var_2.js_type, 'number');
    assert(() => variable_var_2.variable_class, NumClass);

    const variable_var_3 = Variable(true);
    assert(() => variable_var_3.js_type, 'boolean');
    assert(() => variable_var_3.variable_class, BoolClass);

    const variable_var_4 = Variable(Bool(true));
    assert(() => variable_var_4.js_type, 'boolean');
    assert(() => variable_var_4.variable_class, BoolClass);

    const variable_var_5 = Variable('true');
    assert(() => variable_var_5.js_type, 'string');
    assert(() => variable_var_5.variable_class, WordsClass);

    const variable_var_6 = Words(Variable('true'));
    assert(() => variable_var_6.js_type, 'string');
    assert(() => variable_var_6.variable_class, WordsClass);

    // when creating variable with variable argument,
    // var_idx should be the same

    const bool_var_5 = Bool(true);
    assert(() => Bool(bool_var_5).var_idx - bool_var_5.var_idx, 0);

    const num_var_3 = Num(-51);
    assert(() => Variable(num_var_3).var_idx - num_var_3.var_idx, 0);

    const variable_var_7 = Variable("241");
    assert(() => Words(variable_var_7).var_idx - variable_var_7.var_idx, 0);

    // create variable in event

    var_manager.event_mode = true;

    assert_error(() => Bool(false), 'cannot create variable in event');
    assert_error(() => Num(true), 'cannot create variable in event');
    assert_error(() => Words('111'), 'cannot create variable in event');
    assert_error(() => Variable(null), 'cannot create variable in event');

    assert_error(() => Num(), 'cannot create variable in event');
    assert_error(() => Variable(), 'cannot create variable in event');
    assert_error(() => Num(Words('111')), 'cannot create variable in event');
    assert_error(() => Words(Bool(41)), 'cannot create variable in event');
    assert_error(() => Variable(Variable('111')), 'cannot create variable in event');
    assert_error(() => Bool(Num(41), 'a'), 'cannot create variable in event');

    var_manager.event_mode = false;
});

test_tasks.push(() => {
    set_test('test_variable.js', '.name()');

    assert_error(() => Bool(true).name(), '1 argument is required');

    assert_no_error(() => Bool(true).name('a', 'b'));

    assert_error(() => Bool(true).name(false), 'argument must be JavaScript string object');

    assert_error(() => Bool(true).name(null), 'argument must be JavaScript string object');

    assert(() => Bool(true).name('damasad').var_idx - App('damasad').var_idx, 0);

    Bool(true).name('damad');
    assert_error(() => Bool(true).name('damad'), `Name 'damad' has already been used`);

    assert_error(() => Bool(true).name('aeoea').name('aeoea'), `Name 'aeoea' has already been used`);

    assert_error(() => App('afeoafg'), `Name 'afeoafg' does not exist`);
});

test_tasks.push(() => {
    set_test('test_variable.js', '.value()');

    // get var value not in event mode

    assert(() => Bool(false).value(), false);
    assert(() => Num(51).value(), 51);
    assert(() => Words('a').value(), 'a');
    assert(() => Words(Words('a')).value(), 'a');
    assert(() => Variable(Num(51)).value(), 51);
    assert(() => Bool(Variable(false)).value(), false);

    // get var value in event mode

    const bool_var = Bool(true);
    const bool_var_2 = Variable('afaofgawf');

    var_manager.event_mode = true;

    assert(() => bool_var.value(), true);
    assert(() => bool_var_2.value(), 'afaofgawf');

    var_manager.event_mode = false;

    // set var value not in event mode

    assert_error(() => Bool(true).value(true), 'variable has already been set');
    assert_error(() => Bool(true).value(null), 'variable has already been set');
    assert_error(() => Bool(true).value(false, true), 'variable has already been set');
    assert_error(() => Num(51).value(51, 52, 53), 'variable has already been set');
    assert_error(() => Words('a').value('a', 'b'), 'variable has already been set');
    assert_error(() => Variable(Num(51)).value(51), 'variable has already been set');
    assert_error(() => Words(Words('a')).value(null), 'variable has already been set');

    // set var value in event mode

    const var_0 = Num(-1);
    const var_1 = Words('afa');
    const var_2 = Variable(Words('asfaf'));

    var_manager.event_mode = true;

    assert_error(() => var_0.value(true, false), 'argument must be JavaScript number object or Num object');
    assert_error(() => var_0.value(null), 'argument must be JavaScript number object or Num object');
    assert(() => var_0.value(-2).value(), -2);

    assert(() => var_manager.get_var(var_1.value('b', 'a', 'a').var_idx), 'b');
    assert(() => var_1.value(var_2).value(), 'asfaf');
    assert(() => var_manager.get_var(var_1.value(var_2, var_0).var_idx), 'asfaf');

    var_manager.event_mode = false;
});