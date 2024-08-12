/* Code to create the GitHub Pages hosted documentation, together with the scripts under the 'code_scripts' folder */

Code().add(() => {

App().horizontal(true)

Layout().name('sidebar').width(20).height(100).color('rgb(245,245,245)').verticle(true).start(true).crosscenter(true).padding(2)
App().add(App('sidebar'))

Num(0).name('sidebar_selected')

Layout().name('sidebar_layout').width(100).horizontal(true).center(true).padding(1).round(1).add(Text('Layout')).color(If(Equals(App('sidebar_selected'), 0), '#f30000', '')).click(() => { App('sidebar_selected').value(0) })
App('sidebar').add(App('sidebar_layout'))

Layout().name('sidebar_text').width(100).horizontal(true).center(true).padding(1).round(1).add(Text('Text')).color(If(Equals(App('sidebar_selected'), 1), '#f30000', '')).click(() => { App('sidebar_selected').value(1) })
App('sidebar').add(App('sidebar_text'))

Layout().name('sidebar_button').width(100).horizontal(true).center(true).padding(1).round(1).add(Text('Button')).color(If(Equals(App('sidebar_selected'), 2), '#f30000', '')).click(() => { App('sidebar_selected').value(2) })
App('sidebar').add(App('sidebar_button'))

Layout().name('content').width(80).height(100)
App().add(App('content'))

})