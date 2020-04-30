# <center>Declarativly</center>
---
### A Flutter like web framework

## Advantages

* Declarativly takes care of state management
* Easy declarative UI creation
* Flutter like
* No dependencies
* Written in Typescript

## Getting started

Getting started is easy, just try it out! Here is a basic example with all boilerplate code included.

```typescript
import { Button, Declarativly, HTMLWidget, State, Text } from 'declarativly';

Declarativly.init(
    //@ts-ignore
    document.getElementById('main'),
    { counter: 0 },
    (state: State) => {
        return new HTMLWidget('div', {
            children: [
                new Button(new Text('-'), {
                    onClick: () => { Declarativly.updateState((state: State) => { state.counter--; if(state.counter < 0) state.counter = 0; }); }
                }),
                new Text(state.counter),
                new Button(new Text('+'), {
                    onClick: () => { Declarativly.updateState((state: State) => { state.counter++; }); }
                }),
            ],
            style: { display: 'flex' }
        });
    }
); 
```

Seems complicated? Don't worry, here is an explanation:

```typescript
document.getElementById('main'),
```
Give the standard element for the component to bind to

```typescript
{ counter: 0 },
```
Init the default state. This can include any data that changes over the lifetime of the component

```typescript
(state: State) => {
```
The build function. This function is called everytime the state changes and differences ar applied to the DOM, you don't have to worry about anything!

```typescript
return new HTMLWidget('div', {
            children: [
                ...
            ],
            style: { display: 'flex' }
        });
```
A new div element is created with some children and a style applied to make the children align horizontally

```typescript
new Button(new Text('-'), {
    onClick: () => { 
        Declarativly.updateState((state: State) => {
            state.counter--;
            if(state.counter < 0) state.counter = 0;
        }); 
    }
}),
```
A button is created with the click event being bind to a function that decreases the counter. Here it is important to call Declarativly.updateState as the framework needs to detect the state change!

This is all! Easy, right? If you have any questions visit the documentation and don't hesitate to ask me :)

## Keep in mind
Keep in mind, that this framework is still in early development! Feedback is appreciated. And it is also done just by one person, me(Elias). If you want to help, feel free to contribute! - Thanks!
