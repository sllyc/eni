Code().add(() => {

Layout().name('layout_content').width(100).height(100).color('white').verticle(true).start(true).crossstart(true).padding(3).gap(2).scrollable(true)
App('content').add(App('layout_content'), Equals(App('sidebar_selected'), 0))

App('layout_content').add(Text('Layout').size(3))

Layout().name('layout_0').width(100).height(50).horizontal(true).color('lightgray')
App('layout_content').add(App('layout_0'))

Layout().name('layout_demo')
.add(Layout().width(19).height(20).color('lightblue'))
.add(Layout().width(27).height(16).color('lightpink'))
.add(Layout().width(22).height(25).color('lightyellow'))
.add(Layout().width(16).height(18).color('#e39ff6'))
App('layout_0').add(App('layout_demo'))

Layout().name('layout_1').width(100).horizontal(true).gap(1).wrap(true)
App('layout_content').add(App('layout_1'))

// width

Layout().name('layout_width_option').padding(1).round(1).add(Text('.width(60)'))
App('layout_1').add(App('layout_width_option'))

// height

Layout().name('layout_height_option').padding(1).round(1).add(Text('.height(90)'))
App('layout_1').add(App('layout_height_option'))

// color

Bool(true).name('layout_color')
Layout().name('layout_color_option').padding(1).round(1).add(Text('.color("lightgreen")')).color(If(App('layout_color'), '#f30000', '#dddddd')).click(() => {App('layout_color').value(!App('layout_color').value())})
App('layout_1').add(App('layout_color_option'))

// round

Bool(false).name('layout_round')
Layout().name('layout_round_option').padding(1).round(1).add(Text('.round(2)')).color(If(App('layout_round'), '#f30000', '#dddddd')).click(() => {App('layout_round').value(!App('layout_round').value())})
App('layout_1').add(App('layout_round_option'))

// padding

Bool(false).name('layout_padding')
Layout().name('layout_padding_option').padding(1).round(1).add(Text('.padding(2)')).color(If(App('layout_padding'), '#f30000', '#dddddd')).click(() => {App('layout_padding').value(!App('layout_padding').value())})
App('layout_1').add(App('layout_padding_option'))

// verticle

Bool(false).name('layout_verticle')
Layout().name('layout_verticle_option').padding(1).round(1).add(Text('.verticle(true)')).color(If(App('layout_verticle'), '#f30000', '#dddddd')).click(() => {App('layout_verticle').value(!App('layout_verticle').value())})
App('layout_1').add(App('layout_verticle_option'))

// horizontal

Bool(false).name('layout_horizontal')
Layout().name('layout_horizontal_option').padding(1).round(1).add(Text('.horizontal(true)')).color(If(App('layout_horizontal'), '#f30000', '#dddddd')).click(() => {App('layout_horizontal').value(!App('layout_horizontal').value())})
App('layout_1').add(App('layout_horizontal_option'))

// start

Bool(false).name('layout_start')
Layout().name('layout_start_option').padding(1).round(1).add(Text('.start(true)')).color(If(App('layout_start'), '#f30000', '#dddddd')).click(() => {App('layout_start').value(!App('layout_start').value())})
App('layout_1').add(App('layout_start_option'))

// center

Bool(false).name('layout_center')
Layout().name('layout_center_option').padding(1).round(1).add(Text('.center(true)')).color(If(App('layout_center'), '#f30000', '#dddddd')).click(() => {App('layout_center').value(!App('layout_center').value())})
App('layout_1').add(App('layout_center_option'))

// end

Bool(false).name('layout_end')
Layout().name('layout_end_option').padding(1).round(1).add(Text('.end(true)')).color(If(App('layout_end'), '#f30000', '#dddddd')).click(() => {App('layout_end').value(!App('layout_end').value())})
App('layout_1').add(App('layout_end_option'))

// spacebetween

Bool(false).name('layout_spacebetween')
Layout().name('layout_spacebetween_option').padding(1).round(1).add(Text('.spacebetween(true)')).color(If(App('layout_spacebetween'), '#f30000', '#dddddd')).click(() => {App('layout_spacebetween').value(!App('layout_spacebetween').value())})
App('layout_1').add(App('layout_spacebetween_option'))

// spacearound

Bool(false).name('layout_spacearound')
Layout().name('layout_spacearound_option').padding(1).round(1).add(Text('.spacearound(true)')).color(If(App('layout_spacearound'), '#f30000', '#dddddd')).click(() => {App('layout_spacearound').value(!App('layout_spacearound').value())})
App('layout_1').add(App('layout_spacearound_option'))

// spaceevenly

Bool(false).name('layout_spaceevenly')
Layout().name('layout_spaceevenly_option').padding(1).round(1).add(Text('.spaceevenly(true)')).color(If(App('layout_spaceevenly'), '#f30000', '#dddddd')).click(() => {App('layout_spaceevenly').value(!App('layout_spaceevenly').value())})
App('layout_1').add(App('layout_spaceevenly_option'))

// crossstart

Bool(false).name('layout_crossstart')
Layout().name('layout_crossstart_option').padding(1).round(1).add(Text('.crossstart(true)')).color(If(App('layout_crossstart'), '#f30000', '#dddddd')).click(() => {App('layout_crossstart').value(!App('layout_crossstart').value())})
App('layout_1').add(App('layout_crossstart_option'))

// crosscenter

Bool(false).name('layout_crosscenter')
Layout().name('layout_crosscenter_option').padding(1).round(1).add(Text('.crosscenter(true)')).color(If(App('layout_crosscenter'), '#f30000', '#dddddd')).click(() => {App('layout_crosscenter').value(!App('layout_crosscenter').value())})
App('layout_1').add(App('layout_crosscenter_option'))

// crossend

Bool(false).name('layout_crossend')
Layout().name('layout_crossend_option').padding(1).round(1).add(Text('.crossend(true)')).color(If(App('layout_crossend'), '#f30000', '#dddddd')).click(() => {App('layout_crossend').value(!App('layout_crossend').value())})
App('layout_1').add(App('layout_crossend_option'))

// gap

Bool(false).name('layout_gap')
Layout().name('layout_gap_option').padding(1).round(1).add(Text('.gap(2)')).color(If(App('layout_gap'), '#f30000', '#dddddd')).click(() => {App('layout_gap').value(!App('layout_gap').value())})
App('layout_1').add(App('layout_gap_option'))

// wrap

Bool(false).name('layout_wrap')
Layout().name('layout_wrap_option').padding(1).round(1).add(Text('.wrap(true)')).color(If(App('layout_wrap'), '#f30000', '#dddddd')).click(() => {App('layout_wrap').value(!App('layout_wrap').value())})
App('layout_1').add(App('layout_wrap_option'))

// scrollable

Bool(false).name('layout_scrollable')
Layout().name('layout_scrollable_option').padding(1).round(1).add(Text('.scrollable(true)')).color(If(App('layout_scrollable'), '#f30000', '#dddddd')).click(() => {App('layout_scrollable').value(!App('layout_scrollable').value())})
App('layout_1').add(App('layout_scrollable_option'))

// display demo accordingly

App('layout_demo').width(60)
App('layout_demo').height(90)
App('layout_demo').color(If(App('layout_color'), 'lightgreen', ''))
App('layout_demo').round(If(App('layout_round'), 2, 0))
App('layout_demo').padding(If(App('layout_padding'), 2, 0))

App('layout_demo').verticle(App('layout_verticle'))
App('layout_demo').horizontal(App('layout_horizontal'))
App('layout_demo').start(App('layout_start'))
App('layout_demo').center(App('layout_center'))
App('layout_demo').end(App('layout_end'))
App('layout_demo').spacebetween(App('layout_spacebetween'))
App('layout_demo').spacearound(App('layout_spacearound'))
App('layout_demo').spaceevenly(App('layout_spaceevenly'))
App('layout_demo').crossstart(App('layout_crossstart'))
App('layout_demo').crosscenter(App('layout_crosscenter'))
App('layout_demo').crossend(App('layout_crossend'))
App('layout_demo').gap(If(App('layout_gap'), 2, 0))
App('layout_demo').wrap(App('layout_wrap'))
App('layout_demo').scrollable(App('layout_scrollable'))

})