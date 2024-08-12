Code().add(() => {

Layout().name('text_content').width(100).height(100).color('white').verticle(true).start(true).crossstart(true).padding(3).gap(2).scrollable(true)
App('content').add(App('text_content'), Equals(App('sidebar_selected'), 1))

App('text_content').add(Text('Text').size(3))

Text().name('text_demo')
App('text_content').add(App('text_demo'))

Layout().name('text_0').width(100).horizontal(true).gap(1).wrap(true)
App('text_content').add(App('text_0'))

// text

Bool(false).name('text_text')
Layout().name('text_text_option').padding(1).round(1).add(Text('.text("This is [...] a long sentence ")')).color(If(App('text_text'), '#f30000', '#dddddd')).click(() => {App('text_text').value(!App('text_text').value())})
App('text_0').add(App('text_text_option'))

// size

Bool(false).name('text_size')
Layout().name('text_size_option').padding(1).round(1).add(Text('.size(3)')).color(If(App('text_size'), '#f30000', '#dddddd')).click(() => {App('text_size').value(!App('text_size').value())})
App('text_0').add(App('text_size_option'))

// bold

Bool(false).name('text_bold')
Layout().name('text_bold_option').padding(1).round(1).add(Text('.bold(true)')).color(If(App('text_bold'), '#f30000', '#dddddd')).click(() => {App('text_bold').value(!App('text_bold').value())})
App('text_0').add(App('text_bold_option'))

// italic

Bool(false).name('text_italic')
Layout().name('text_italic_option').padding(1).round(1).add(Text('.italic(true)')).color(If(App('text_italic'), '#f30000', '#dddddd')).click(() => {App('text_italic').value(!App('text_italic').value())})
App('text_0').add(App('text_italic_option'))

// underline

Bool(false).name('text_underline')
Layout().name('text_underline_option').padding(1).round(1).add(Text('.underline(true)')).color(If(App('text_underline'), '#f30000', '#dddddd')).click(() => {App('text_underline').value(!App('text_underline').value())})
App('text_0').add(App('text_underline_option'))

// color

Bool(false).name('text_color')
Layout().name('text_color_option').padding(1).round(1).add(Text('.color("lightblue")')).color(If(App('text_color'), '#f30000', '#dddddd')).click(() => {App('text_color').value(!App('text_color').value())})
App('text_0').add(App('text_color_option'))

// display demo accordingly

App('text_demo').text(If(App('text_text'), 'This is a long sentence This is a long sentence This is a long sentence This is a long sentence This is a long sentence This is a long sentence This is a long sentence This is a long sentence This is a long sentence This is a long sentence ', 'Text'))
App('text_demo').size(If(App('text_size'), 3, 2))
App('text_demo').bold(App('text_bold'))
App('text_demo').italic(App('text_italic'))
App('text_demo').underline(App('text_underline'))
App('text_demo').color(If(App('text_color'), 'lightblue', ''))

})