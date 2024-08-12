# eni

***Please note this project is still under early-stage development!***

Eni is a standalone HTML/JavaScript application that allows users to create interactive user interface in a reactive manner with lightweight code. 

## Install

Download and unzip the latest release.

## Usage

Write your code in the `code.js` file.

Open the `index.html` file in your browser to run.

## Samples

Display a simple `Text` component.

```js
Code().add(() => {

App().add(Text("Hello!"))

})
```

Add multiple components and set app's flex properties to arrange the components better.

```js
Code().add(() => {

App().verticle(true).start(true).crossstart(true).padding(2).gap(2)
.add(Text("Hello!"))
.add(Text("World!"))
.add(Button("Click me!"))

})
```

Create a `Layout` component, assign it with a name and refer back to it globally by name using `App("<name>")`.

```js
Code().add(() => {

Layout().name("my_layout").width(50).height(30).color("lightgreen")

App().add(App("my_layout"))

})
```

Display a `Text` component dynamically based on the `click` event of a `Button` component.

```js
Code().add(() => {

Bool(false).name("my_bool")
Button("Display").name("my_button").click(() => {
    App("my_bool").value(true)
})
Text(If(App("my_bool"), "Here is some text", "")).name("my_text")

App().verticle(true).start(true).crossstart(true).padding(2).gap(2)
.add(App("my_button"))
.add(App("my_text"))

})
```