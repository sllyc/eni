Code().add(() => {

Layout().name('button_content').width(100).height(100).color('white').verticle(true).start(true).crossstart(true).padding(3).gap(2).scrollable(true)
App('content').add(App('button_content'), Equals(App('sidebar_selected'), 2))

App('button_content').add(Text('Button').size(3))

Button().name('button_demo')
App('button_content').add(App('button_demo'))

Layout().name('button_0').width(100).horizontal(true).gap(1).wrap(true)
App('button_content').add(App('button_0'))

// text

Bool(false).name('button_text')
Layout().name('button_text_option').padding(1).round(1).add(Text('.text("My button demo")')).color(If(App('button_text'), '#f30000', '#dddddd')).click(() => {App('button_text').value(!App('button_text').value())})
App('button_0').add(App('button_text_option'))

// size

Bool(false).name('button_size')
Layout().name('button_size_option').padding(1).round(1).add(Text('.size(3)')).color(If(App('button_size'), '#f30000', '#dddddd')).click(() => {App('button_size').value(!App('button_size').value())})
App('button_0').add(App('button_size_option'))

// display demo accordingly

App('button_demo').text(If(App('button_text'), 'My button demo', 'Button'))
App('button_demo').size(If(App('button_size'), 3, 2))

})