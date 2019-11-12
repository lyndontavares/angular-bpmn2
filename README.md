# Api Facturación Eletrónica

## Build de produção

```bash
ng build --prod=true --sourceMap=false --optimization --lazy-modules --base-href /apidfe/
```

## Salvar usuário git

```bash
git config credential.helper store
git pull
```

## Start tomcat server

```bash
ssh root@172.27.1.40 
pass: gKYqe71MJfb
cd /opt/tomcat/bin
./shutdown.sh 
./startup.sh 
```

## start tomcaet local

```bash
cd opt/tomcat/bin
sudo ./startup.sh
```

## Acesso sistema de arquivo como root

```bash
sudo nautilus
```


## Useful Javascript Array and Object Methods


There is some useful JavaScript array and object methods. These methods help developers write clean and readable code. A lot of these methods reduce the need to reach for utility libraries like Lodash.

All the methods in this article are chainable, meaning they can be used in combination with one another and they also don’t mutate data, which is especially important when working with React. With all these array and object methods you’ll find you never have to reach for a for or while loop ever again.

### .filter()
Creates a new array based on whether the items of an array pass a certain condition.

Example

Create an array of student ages that meet the legal drinking age.
```JAVASCRIPT
const studentsAge = [17, 16, 18, 19, 21, 17];
const ableToDrink = studentsAge.filter( age => age > 18 );
 ableToDrink will be equal to [19, 21]
```
### .map()

Creates a new array by manipulating the values in another array. Great for data manipulation and it is often used in React because it is an immutable method.

Example

Create an array that adds a $ to the beginning of each number.
```JAVASCRIPT
const numbers = [2, 3, 4, 5];
const dollars = numbers.map( number => '$' + number);
 dollars will be equal to ['$2', '$3', '$4', '$5']
```

### .reduce()

This often overlooked method uses an accumulator to reduce all items in an array to a single value. Great for calculating totals. The returned value can be of any type (i.e. object, array, string, integer).

Example

Add up the integers in an array.
```JAVASCRIPT
const numbers = [5, 10, 15];
const total = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue);
 total will be equal to 30
```

There are some really cool use cases for .reduce() outlined in the MDN docs that provide examples on how to do things likes flattening an array of arrays, grouping objects by a property, and removing duplicate items in array.

### .forEach()
Applies a

function on each item in an array.
Example

Log each array item to the console
```javascript
const emotions = ['happy', 'sad', 'angry'];
emotions.forEach( emotion => console.log(emotion) );
 Will log the following:
 'happy'
 'sad'
 'angry'
```
### .some()
Checks if any item in an array passes the condition. A good use case would be checking for user privileges. It can also be used similarly to a .forEach() where you would perform an action on each array item and break out of the loop once a truthy value is returned.

Example

Check if there is at least one 'admin' in an array.
```javascript
const userPrivileges = ['user', 'user', 'user', 'admin'];
const containsAdmin = userPrivileges.some( element => element === 'admin');
 containsAdmin will be equal to true
```
### .every()
Similar to .some(), but checks if all items in an array pass a condition.

Example

Check if all ratings are equal to or greater than 3 stars.

```javascript
const ratings = [3, 5, 4, 3, 5];
const goodOverallRating = ratings.every( rating => rating >= 3 );
 goodOverallRating will be equal to true
``` 
### .includes()
Checks if an array contains a certain value. It’s similar to .some(),but instead of looking for a condition to pass, it looks if the array contains a specific value.

Example

Check if the array includes an item with the string ‘waldo’.
```javascript
const names = ['sophie', 'george', 'waldo', 'stephen', 'henry'];
const includesWaldo = names.includes('waldo');
 includesWaldo will be equal to true
```
### Array.from()
This is a static method that creates an array based on another array or string. You can also pass a map callback function as an argument to further shape the data in the new array. Honestly, I’m not too sure why someone would use this over the .map() method.

Example

Create an array from a string.

```javascript
const newArray = Array.from('hello');
 newArray will be equal to ['h', 'e', 'l', 'l', 'o']
```
Create an array that has double the value for each item in another array.

```javascript
const doubledValues = Array.from([2, 4, 6], number => number * 2);
 doubleValues will be equal to [4, 8, 12]
```
### Object.values()
Return an array of the values of an object.

Example
```javascript
const icecreamColors = {
    chocolate: 'brown',
    vanilla: 'white',
    strawberry: 'red',
}

const colors = Object.values(icecreamColors);
 colors will be equal to ["brown", "white", "red"]
```

### Object.keys()
Return an array of the keys of an object.

Example

```javascript
const icecreamColors = {
  chocolate: 'brown',
  vanilla: 'white',
  strawberry: 'red',
}

const types = Object.keys(icecreamColors);
 types will be equal to ["chocolate", "vanilla", "strawberry"]
```
### Object.entries()
Creates an array which contains arrays of key/value pairs of an object.

Example
```javascript
const weather = {
  rain: 0,
  temperature: 24,
  humidity: 33,
}

const entries = Object.entries(weather);
 entries will be equal to
 [['rain', 0], ['temperature', 24], ['humidity', 33]]
```
### Array spread
Spreading arrays using the spread operator (…) allows you to expand the elements in an array. It’s useful when concatenating a bunch of arrays together. It’s also a good way to avoid using the splice() method when looking to remove certain elements from an array because it can be combined with the slice() method to prevent direct mutation of an array.

Example

Combine two arrays.
```javascript
const spreadableOne = [1, 2, 3, 4];
const spreadableTwo = [5, 6, 7, 8];

const combined = [...spreadableOne, ...spreadableTwo];
 combined will be equal to [1, 2, 3, 4, 5, 6, 7, 8]
``` 
Remove an array element without mutating the original array.

```javascript 
const animals = ['squirrel', 'bear', 'deer', 'salmon', 'rat'];
const mammals = [...animals.slice(0,3), ...animals.slice(4)];
 mammals will be equal to ['squirrel', 'bear', 'deer', 'rat'] 
```
### Object spread
Spreading an object allows for the addition of new properties and values to an object without mutations (i.e. a new object is created) and it can also be used to combine multiple objects together. It should be noted that spreading objects does not do nested copying.

Example

Add a new object property and value without mutating the original object.
```javascript
const spreadableObject = {
  name: 'Robert',
  phone: 'iPhone'
};

const newObject = {
  ...spreadableObject,
  carModel: 'Volkswagen'
}
 newObject will be equal to
 { carModel: 'Volkswagen', name: 'Robert', phone: 'iPhone' }
```

### Function Rest
Functions can use the rest parameter syntax to accept any number of arguments as an array.

Example

Display the array of passed arguments.
```javascript
function displayArgumentsArray(...theArguments) {
  console.log(theArguments);
}

displayArgumentsArray('hi', 'there', 'bud');
 Will print ['hi', 'there', 'bud']
```
### Object.freeze()
Prevents you from modifying existing object properties or adding new properties and values to an object. It’s often what people think const does, however const allows you to modify an object.

Example

Freeze an object to prevent the name property from being changed.
```javascript
const frozenObject = {
  name: 'Robert'
}

Object.freeze(frozenObject);

frozenObject.name = 'Henry';
 frozenObject will be equal to { name: 'Robert' }
```

### Object.seal()
Stops any new properties from being added to an object, but still allows for existing properties to be changed.

Example
Seal an object to prevent the wearsWatch property from being added.

```javascript
const sealedObject = {
  name: 'Robert'
}

Object.seal(sealedObject);

sealedObject.name = 'Bob';
sealedObject.wearsWatch = true;
 sealedObject will be equal to { name: 'Bob' }
```
### Object.assign()
Allows for objects to be combined together. This method is not really needed because you can use the object spread syntax instead. Like the object spread operator, Object.assign() does not do deep cloning. Lodash is your best friend when it comes to deep cloning objects.

Example

Combine two objects into one.

```javascript
const firstObject = {
  firstName: 'Robert'
}

const secondObject = {
  lastName: 'Cooper'
}

const combinedObject = Object.assign(firstObject, secondObject);
 combinedObject will be equal to { firstName: 'Robert', lastName: 'Cooper' }
```

### Capturando evento 

```javascript

  // Exemplo de captura de evento
  @HostListener('keydown.esc')
  public onEsc(): void {
    this.router.navigate(['/dashboard']);
  }

  // keydown or keypress
  @HostListener('keydown', ['$event'])
  public onInput(e: any) {
    if (e.which < 48 || e.which > 57) {
        e.preventDefault();
    }
  }

  // Mostrar botão pressionado
  pressedButton: string = '';

  @HostListener('document:keydown', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent): void {
    console.log(event.key);
    event.stopPropagation();
    this.pressedButton = event.key;
  }

  // nivel document
  @HostListener('document:keydown.control.z') undo(event: KeyboardEvent) {
  // responds to control+z
  }

  // nivel window
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
  console.log(event);
  
      if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
        this.increment();
      }

      if (event.keyCode === KEY_CODE.LEFT_ARROW) {
        this.decrement();
      }
  }

  /* <input (keydown)="onKeydown($event)"> */
  onKeydown(event) {
    if (event.key === "Enter") {
      console.log(event);
    }
  }

  /* <input (keydown.enter)="onKeydown($event)"> */
  onKeydown(event) {
    console.log(event);
  }


```

### Key Combinations

This feature works for special and modifier keys like
enter, escape (esc), shift, alt, tab, backspace and command (meta), 
but it also works for letters, numbers, arrows and f keys (f1 though f12).

```html
  <input (keydown.-)='...responds to minus...'/>
  <input (keydown.space)='...won't respond at all...'/>
  <input (keydown.dot)='...responds to dot...'/>
  <input (keyup.control.1)="onKeydown($event)">
  <input (keydown.enter)="...">
  <input (keydown.a)="...">
  <input (keydown.esc)="...">
  <input (keydown.shift.esc)="...">
  <input (keydown.control)="...">
  <input (keydown.alt)="...">
  <input (keydown.meta)="...">
  <input (keydown.9)="...">
  <input (keydown.tab)="...">
  <input (keydown.backspace)="...">
  <input (keydown.arrowup)="...">
  <input (keyup.arrowright)='...responds to arrowright...' />
  <input (keydown.shift.arrowdown)="...">
  <input (keydown.shift.control.z)="...">
  <input (keydown.f4)="...">
  <input (keyup.f12)='...responds to F12...' />
  <input (keyup.a.z)='...respond to a+z...' />
  <input (keydown.shift.control.z)='...responds to shift+control+z...' /> ordem não importa
  <input (keydown.control.shift.z)='...responds to control+shift+z...' />
```

### Lista de referência de eventos

### Network events

```bash
online  The browser has gained access to the network.
offline The browser has lost access to the network.
```

### Focus events

```bash
focus An element has received focus (does not bubble).
blur  An element has lost focus (does not bubble).
``` 

### Form events

```bash
reset   The reset button is pressed
submit  The submit button is pressed
```

### Printing events

```bash
beforeprint The print dialog is opened
afterprint  The print dialog is closed
```

### View events

```bash
fullscreenchange  An element was turned to fullscreen mode or back to normal mode.
fullscreenerror   It was impossible to switch to fullscreen mode for technical reasons or because the permission was denied.
resize            The document view has been resized.
scroll            The document view or an element has been scrolled.
```

### Clipboard events

```bash
cut   The selection has been cut and copied to the clipboard
copy  The selection has been copied to the clipboard
paste The item from the clipboard has been pasted
```

### Keyboard events

```bash
keydown   ANY key is pressed
keypress  ANY key except Shift, Fn, CapsLock is in pressed position. (Fired continously.)
keyup     ANY key is released
```

### Mouse events

```bash
auxclick    A pointing device button (ANY non-primary button) has been pressed and released on an element.
click       A pointing device button (ANY button; soon to be primary button only) has been pressed and released on an element.
contextmenu The right button of the mouse is clicked (before the context menu is displayed).
dblclick    A pointing device button is clicked twice on an element.
mousedown   A pointing device button is pressed on an element.
mouseenter  A pointing device is moved onto the element that has the listener attached.
mouseleave  A pointing device is moved off the element that has the listener attached.
mousemove   A pointing device is moved over an element. (Fired continously as the mouse moves.)
mouseover   A pointing device is moved onto the element that has the listener attached or onto one of its children.
mouseout    A pointing device is moved off the element that has the listener attached or off one of its children.
mouseup     A pointing device button is released over an element.
pointerlockchange The pointer was locked or released.
pointerlockerror  It was impossible to lock the pointer for technical reasons or because the permission was denied.
```

### Drag & Drop events

```bash
drag      An element or text selection is being dragged (Fired continuously every 350ms).
dragend   A drag operation is being ended (by releasing a mouse button or hitting the escape key).
dragenter A dragged element or text selection enters a valid drop target.
dragstart The user starts dragging an element or text selection.
dragleave A dragged element or text selection leaves a valid drop target.
dragover  An element or text selection is being dragged over a valid drop target. (Fired continuously every 350ms.)
drop      An element is dropped on a valid drop target.
```

### Storage events

```bash
change (see Non-standard events)
storage
```

### Value change events

```bash
broadcast
CheckboxStateChange
hashchange
input
RadioStateChange
readystatechange
ValueChange
```

### Uncategorized events

```bash
invalid
localized
message
message
message
open
show
```

### Document events

```bash
DOMLinkAdded
DOMLinkRemoved
DOMMetaAdded
DOMMetaRemoved
DOMModalDialogClosed
DOMWillOpenModalDialog
Battery eventsSection
chargingchange
chargingtimechange
dischargingtimechange
levelchange
```

### F1..F12

```bash
f1	112
f2	113
f3	114
f4	115
f5	116
f6	117
f7	118
f8	119
f9	120
f10	121
f11	122
f12	123
```
### Teclas de controle

```
backspace   8
tab         9
enter       13
shift       16
ctrl        17
alt         18
pause/break 19
caps lock   20
escape      27
(space)     32
page up     33
page down   34
end         35
home        36
left arrow  37
up arrow    38<input (keydown.shift.control.z)='...responds to shift+control+z...' />
<input (keydown.control.shift.z)='...responds to control+shift+z...' />
right arrow 39
down arrow  40
insert      45
delete      46
```

## Native script

``` 

sudo npm i -g nativescript

$ tns
# NativeScript CLI

┌─────────┬─────────────────────────────────────────────────────────────────────┐
│ Usage   │ Synopsis                                                            │
│ General │ $ tns <Command> [Command Parameters] [--command <Options>]          │
│ Alias   │ $ nativescript <Command> [Command Parameters] [--command <Options>] │
└─────────┴─────────────────────────────────────────────────────────────────────┘

## General Commands

┌─────────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Command         │ Description                                                                                                   │
│ help <Command>  │ Shows additional information about the commands in this list in the browser.                                  │
│ autocomplete    │ Configures your current command-line completion settings.                                                     │
│ usage-reporting │ Configures anonymous usage reporting for the NativeScript CLI.                                                │
│ error-reporting │ Configures anonymous error reporting for the NativeScript CLI.                                                │
│ doctor          │ Checks your system for configuration problems which might prevent the NativeScript CLI from working properly. │
│ info            │ Displays version information about the NativeScript CLI, core modules, and runtimes.                          │
│ proxy           │ Displays proxy settings.                                                                                      │
│ update          │ Updates the project with the latest versions of iOS/Android runtimes and cross-platform modules.              │
└─────────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

## Project Development Commands

┌─────────────────────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Command                     │ Description                                                                                                                                                                   │
│ create                      │ Creates a new project for native development with NativeScript.                                                                                                               │
│ preview                     │ Generates a QR code that can be scanned by the NativeScript PlayGround app.                                                                                                   │
│ init                        │ Initializes an existing project for native development with NativeScript.                                                                                                     │
│ platform add <Platform>     │ Configures the current project to target the selected platform.                                                                                                               │
│ platform list               │ Lists all platforms that the project currently targets.                                                                                                                       │
│ platform remove <Platform>  │ Removes the selected platform from the platforms that the project currently targets. This operation deletes all platform-specific files and subdirectories from your project. │
│ platform update <Platform>  │ Updates the NativeScript runtime for the specified platform.                                                                                                                  │
│ resources update            │ Updates the App_Resources/<platform>'s internal folder structure to conform to that of an Android Studio project.                                                             │
│ resources generate splashes │ Generates all splashscreens for Android and iOS platforms and places the generated images in the correct directories under App_Resources/<platform> directory.                │
│ resources generate icons    │ Generates all icons for Android and iOS platforms and places the generated images in the correct directories under App_Resources/<platform> directory.                        │
│ prepare <Platform>          │ Copies relevant content from the app directory to the subdirectory for the selected target platform to let you build the project.                                             │
│ build <Platform>            │ Builds the project for the selected target platform and produces an application package or an emulator package.                                                               │
│ deploy <Platform>           │ Deploys the project to a connected physical or virtual device.                                                                                                                │
│ run                         │ Runs your project on a connected device or in the native emulator, if configured.                                                                                             │
│ run <Platform>              │ Runs your project on a connected device or in the native emulator for the specified platform, if configured.                                                                  │
│ debug <Platform>            │ Debugs your project on a connected physical or virtual device.                                                                                                                │
│ test init                   │ Configures your project for unit testing with a selected framework.                                                                                                           │
│ test <Platform>             │ Runs the unit tests in your project on a connected physical or virtual device.                                                                                                │
│ install                     │ Installs all platforms and dependencies described in the package.json file in the current directory.                                                                          │
│ plugin                      │ Lets you manage the plugins for your project.                                                                                                                                 │
└─────────────────────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

## Publishing Commands

┌─────────────────┬──────────────────────────────────────────────────┐
│ Command         │ Description                                      │
│ appstore        │ Lists applications registered in iTunes Connect. │
│ appstore upload │ Uploads project to iTunes Connect.               │
└─────────────────┴──────────────────────────────────────────────────┘

## Device Commands

┌──────────────────────────┬─────────────────────────────────────────────────────────────┐
│ Command                  │ Description                                                 │
│ device                   │ Lists all recognized connected physical or virtual devices. │
│ device log               │ Opens the log stream for the selected device.               │
│ device run               │ Runs the selected application on a connected device.        │
│ device list-applications │ Lists the installed applications on all connected devices.  │
└──────────────────────────┴─────────────────────────────────────────────────────────────┘

## Environment Configuration Commands

┌─────────────┬───────────────────────────────────────────────────────────────────────────────────────────┐
│ Command     │ Description                                                                               │
│ setup       │ Run the setup script to try to automatically configure your environment for local builds. │
│ setup cloud │ Install the nativescript-cloud extension to configure your environment for cloud builds.  │
└─────────────┴───────────────────────────────────────────────────────────────────────────────────────────┘

## Global Options

┌────────────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Option             │ Description                                                                                                                                       │
│ --help, -h, /?     │ Prints help about the selected command in the console.                                                                                            │
│ --path <Directory> │ Specifies the directory that contains the project. If not set, the project is searched for in the current directory and all directories above it. │
│ --version          │ Prints the client version.                                                                                                                        │
│ --log trace        │ Prints a detailed diagnostic log for the execution of the current command.                                                                        │
└────────────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘


tns create HelloWorld --template tns-template-blank-ng

tns create my-blank-ng --template tns-template-blank-ng
```

## DICAS

Nao pode injetar módulos dos Angular 2 vezes... perde refencia
Ex: HttpClientModule injetado em módulos diferentes....

##  How to integrate third party libraries and widgets into Angular

```
author: Johannes Hoppe
mail: johannes.hoppe@haushoppe-its.de
published: 2019-02-27
keywords:
  - Angular
  - jQuery
  - library
  - libraries
language: en
thumbnail: pixabay-books-1655783.jpg
```

**
For an upcoming workshop we were asked how to integrate third-party libraries into an Angular application.
In this blog post we want to have a closer look at this question.
We will discuss a few possible strategies that depend on which technology to integrate.**

> Note: The whole article is based on the assumption that you are using the [Angular Cli](https://cli.angular.io/).

<hr>

Table of contents:

* [General Considerations](/blog/2019-02-third-party-libraries-and-widgets#general-considerations)
* [Integrating a pure ES6 JavaScript Library](/blog/2019-02-third-party-libraries-and-widgets#integrating-a-pure-es6-javascript-library) (lodash)
* [Integrating JavaScript Widgets](/blog/2019-02-third-party-libraries-and-widgets#integrating-javascript-widgets) (plotly.js)
* [Integrating old jQuery Widgets](/blog/2019-02-third-party-libraries-and-widgets#integrating-old-jquery-widgets) (jquery-datetimepicker)
* [Integrating modern jQuery Widgets](/blog/2019-02-third-party-libraries-and-widgets#integrating-modern-jquery-widgets) (Kendo UI for jQuery)
* [Improving performance](/blog/2019-02-third-party-libraries-and-widgets#improving-performance) (NgZone)
* [Don't reinvent the wheel](/blog/2019-02-third-party-libraries-and-widgets#don-t-reinvent-the-wheel)
* [Conclusion](/blog/2019-02-third-party-libraries-and-widgets#conclusion)


## General Considerations
   
First of all, we would like to state that it is basically a better idea to use native Angular modules.
This is the only way to profit from an optimal bundle size.
However, it is often simply necessary to fall back on existing solutions that already meet all technical requirements and thus save a lot of time and money.

Usually the following questions should be answered in advance in order to keep the effort as low as possible:

- Are there alternatives that are already based on Angular and how much effort would there be to use this alternative?
- Is the library / widget compatible with ES2015 (ES6) Modules or do we have to use the global object (`window`)? 
- How big is the foreign code? Will it slow down the build process significantly? Can we use a CDN if necessary?
- Is jQuery a dependency? (jQuery itself can be quite large, see [jQuery file size](https://mathiasbynens.be/demo/jquery-size))



## Integrating a pure ES6 JavaScript Library

As an example of a perfect third party library we would like to introduce lodash.
Lodash is the Swiss Army Knife for all kinds of programming tasks.
It is well organized and supports ES2015 modules.

For example, if we want to make a deep copy of an object, we are very well served with Lodash.
First, we have to install it:

```bash
npm install lodash
npm install @types/lodash --save-dev
``` 

Now we are able to import the method as usual.
The required command looks like this:

```ts
import { cloneDeep } from 'lodash';

const nestedObject = {
  nested: {
     hello: 'world'
  }
}
const deepCopy = cloneDeep(nestedObject);

nestedObject === deepCopy // false
nestedObject.nested === deepCopy.nested // false (it's a deep copy)
```

Since clean tree shaking [can be tricky](https://medium.com/@martin_hotell/tree-shake-lodash-with-webpack-jest-and-typescript-2734fa13b5cd), we can also try a separate package.
So we don't install the whole codebase but only the necessary parts and its types.

```bash
npm install lodash.clonedeep
npm install @types/lodash.clonedeep --save-dev
```

```ts
import cloneDeep from 'lodash.clonedeep';
```

This doesn't just apply to lodash.
We should always check how big the bundles will be by our new dependencies.
In fact, if we work with 3rd party libraries, the bundle sizes will become one of the biggest showstoppers.

You might get the following error, when using the Angular CLI with `lodash.clonedeep`:
> lodash-example.component.ts(7,8): error TS1192: Module '"xxx/node_modules/@types/lodash.clonedeep/index"' has no default export.

No worries, there is compiler option to fix the typechecking.
The option `allowSyntheticDefaultImports` allows default imports from modules with no explicit default export.
So we want to open the file `tsconfig.json` and add the following value:

```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true
  }
}
``` 

**[👉 Code on Stackblitz](https://stackblitz.com/edit/angular-3rd-party-libraries-and-widgets?file=src%2Fapp%2Flodash-example%2Flodash-example.component.ts)**


## Integrating JavaScript Widgets

Lets take a look at [plotly.js](https://plot.ly/javascript/).
It is a high-level, declarative charting library, which is built on top of [d3.js](http://d3js.org/) and [stack.gl](http://stack.gl/),
The library ships with many preconfigured chart types, including scientific charts, 3D graphs, statistical charts, SVG maps, financial charts, and more.


We can again start by installing it via npm

```bash
npm install plotly.js-dist
```

and import plotly.js as

```ts
import Plotly from 'plotly.js-dist'; 
```

But beware, plotly.js with all its depedencies (including D3.js) is huge!
Again, we can save a lot of bundle size if we choose the right package.
Please refer to the official [bundle information](https://github.com/plotly/plotly.js/blob/master/dist/README.md#bundle-information) to choose the right partial bundle.

The main plotly.js bundle weighs in at:

| plotly.js | plotly.min.js | plotly.min.js + gzip |
|-----------|---------------|----------------------|
| 6.1 MB    | 2.8 MB        | 849.5 kB             |

That's a hell of a lot of code to draw a pie chart, for example.
If we just want to draw a pie chart we can choose the `basic` partial bundle instead.
It contains trace modules `scatter`, `bar` and `pie`:

| Raw size | Minified size | Minified + gzip size |
|----------|---------------|----------------------|
| 2.3 MB   | 810.9 kB      | 264.8 kB             |

At least that's a little better.
<!--
There are also CDN links available, which can be used, too.
We will take a look at them later on.
https://cdn.plot.ly/plotly-basic-1.44.4.min.js
-->

So we are going to install [`plotly.js-basic-dist`](https://www.npmjs.com/package/plotly.js-basic-dist) via

```bash
npm install plotly.js-basic-dist
```

and import it like this:

```ts
import Plotly from 'plotly.js-basic-dist'
```

The plotly.js packages with the `-dist` suffix contain a ready-to-use plotly.js distributed bundle.
It is not minified, but we don't want it to be minified here.
Instead, we will minify the code from plotly.js along with the other code in the productive build of Angular (`ng build --prod`).

Ok. Let's start.

The idea behind plotly.js is quite simple.
We have a `<div>` element, get a reference to it and draw a "plot" into it. 
In a world without Angular our code would look like this:

```ts
const myDiv = document.getElementById('id_of_the_div')

const data = [{
  values: [66, 22, 12],
  labels: ['Angular', 'React', 'Vue'],
  type: 'pie'
}];

const layout = {
  title: 'Top 3 Most Popular SPA Frameworks in 2019*',
  height: 400,
  width: 500
};

Plotly.newPlot(myDiv, data, layout);
``` 

<small>(&ast;Note: exactly one person was interviewed for this ranking.)</small>

The question is, where do we get a reference to the DOM element from?

The simplest way provided by angular is the wrapper `ElementRef`.
It's the return type of the `@ViewChild()` decorator, if there is no component applied (otherwise it will return a component instance instead). 
The decorator accepts various selectors, as described [here](https://angular.io/api/core/ViewChild). 
We will use a template reference variable as a string, so `@ViewChild('myDiv')` will query against `<div #myDiv></div>`.
The `ElementRef` will be ready when `ngAfterViewInit()` is called:

```ts
import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import Plotly from 'plotly.js-basic-dist'

@Component({
  selector: 'app-plotlyjs-example',
  template: `<div #myDiv></div>`
})
export class PlotlyjsExampleComponent implements AfterViewInit {

  @ViewChild('myDiv')
  myDiv: ElementRef;

  ngAfterViewInit() {

    const myDivEl = this.myDiv.nativeElement;

    const data = [{
      values: [66, 22, 12],
      labels: ['Angular', 'React', 'Vue'],
      type: 'pie'
    }];

    const layout = {
      title: 'Top 3 Most Popular SPA Frameworks in 2019*',
      height: 400,
      width: 500
    };

    Plotly.newPlot(myDivEl, data, layout);
  }
}
```

There are multiple other ways to get a reference to a DOM element.
We recommend the following article if you are interested in other ways to get a reference to a DOM element: [Angular in Depth: Exploring Angular DOM manipulation techniques](https://blog.angularindepth.com/exploring-angular-dom-abstractions-80b3ebcfc02)

**[👉 Code on Stackblitz](https://stackblitz.com/edit/angular-3rd-party-libraries-and-widgets?file=src%2Fapp%2Fplotlyjs-example%2Fplotlyjs-example.component.ts)**


## Integrating old jQuery Widgets

As we have seen, ES2015 modules are an ideal way to use third-party libraries.
However, not all third-party libraries support this modern way.
These libraries often assume that jQuery is available in the global scope and very old ones don't utilize modules at all.

Here it is important to pay attention to the version of jQuery.
Not all libraries support jQuery v3, because it has a some of breaking changes.
For this example I have chosen the plugin `jquery-datetimepicker` since it requires "classic" jQuery.
So let's install jQuery from the outdated v1 branch and the library with the help of npm.

```bash
npm install jquery@1.12.4
npm install @types/jquery@1.10.35 --save-dev
npm install jquery-datetimepicker@2.5.20
```
Fortunately, the Angular CLI provides a declarative way to provide these libraries/widgets via the `angular.json` file.
Locate the build configuration of your project and search for the `scripts` property.
It accepts an array of JavaScript files that are added to the global scope of the project.
This is especially useful for legacy libraries or analytic snippets.    

```json
{
  "projects": {
    "app": {
      "architect": {
        "build": {
          "options": {
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/jquery-datetimepicker/build/jquery.datetimepicker.full.js"
            ],
            "styles": [
              "src/styles.css",
              "node_modules/jquery-datetimepicker/jquery.datetimepicker.css"
            ]
          }
        }
      }
    }
  }
}
```

First we have to load jQuery, then the plugins.
Next to the `scripts` property we see the `styles` property. 
It allows us to add global stylesheets.
Angular CLI supports CSS imports and all major CSS preprocessors.

To satisfy the type checking we create an interface with the name `JQuery` in your local typings declaration file `typings.d.ts` and introduce the plugin function.

```ts
interface JQuery {
  datetimepicker(options?: any): any;
}
```

Now we are ready to do all that dirty jQuery stuff we used to love for so many years:

```ts
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-jquery-old-example',
  template: `<input id="datetimepicker" type="text">`
})
export class JqueryOldExampleComponent implements AfterViewInit {

  public ngAfterViewInit()
  {
    jQuery('#datetimepicker').datetimepicker();
  }
}
```

Note that this is not clean code.
We use an object in the global scope (`jQuery`) and select directly against an element by ID.
If we include the component twice and thus have two IDs, the result is not deterministic.
The next example shows a better approach.

**[👉 Code on Stackblitz](
https://stackblitz.com/edit/angular-3rd-party-libraries-and-widgets?file=src%2Fapp%2Fjquery-old-example%2Fjquery-old-example.component.ts)**


## Integrating modern jQuery Widgets

Of course, also jQuery as well as modern jQuery plugins support all kind of module formats and can be imported via `import` statements.
As an example, we want to try out the Scheduler of Kendo UI for jQuery (which hasn't been ported to Kendo UI for Angular until now!)

```bash
npm install jquery@3.3.1
npm install @types/jquery@3.3.29 --save-dev
```

Here we will install the full version of Kendo UI for jQuery.
Please keep in mind that the vendor provides customized versions, too.

```bash
npm install @progress/kendo-ui
```

Since we are able to use modules, we can import jQuery and the plugin directly from the typescript code.
There is no need to add an entry to `angular.json`:

```ts
import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import options from './options';
import jQuery from 'jquery';
import '@progress/kendo-ui';

@Component({
  selector: 'app-kendo-ui-jquery-example',
  template: `<div #myDiv></div>`
})
export class KendoUiJqueryExampleComponent implements AfterViewInit {

  @ViewChild('myDiv')
  myDiv: ElementRef;

  public ngAfterViewInit()
  {
    const myDivEl = this.myDiv.nativeElement;
    jQuery(myDivEl).kendoScheduler(options);
  }
}
```

We also see again the use of `ElementRef`.
It's a better approach to ask Angular for reference to a DOM element instead of grabbing it directly.

**[👉 Code on Stackblitz](https://stackblitz.com/edit/angular-3rd-party-libraries-and-widgets?file=src%2Fapp%2Fkendo-ui-jquery-example%2Fkendo-ui-jquery-example.component.ts
)**


## Improving performance

We can improve the performance of all shown solutions.
The default change detection from Angular is triggered on every event that our code is subscribed to.
This can have a huge impact to the overall performance of our Angular app.
A lot of old code listens actively to the mouse movements or scroll events.
As a result, change detection is called multiple times and makes everything slow.

To omit that problem, we can make use of the `NgZone` class.
By default, Angular works together with [zone.js](https://github.com/angular/zone.js/) that introduces a concept of zones.
Within a zone, all async APIs are patched and therefore it is possible to run code whenever the asynchronous code finishes.
As long as we use the default change detection strategy (`ChangeDetectionStrategy.Default`), everything that happens within the zone of Angular triggers a change detection run.
If we are not interested in triggering CD, because our third party library does not interact at all with Angular, we can move our code execution into our own zone.

```ts
import { Component, ViewChild, AfterViewInit, ElementRef, NgZone
} from '@angular/core';

@Component({
  // [...]
})
export class KendoUiJqueryExampleComponent implements AfterViewInit {

  // [...]

  constructor(private ngZone: NgZone) { }

  public ngAfterViewInit()
  {
    this.ngZone.runOutsideAngular(() => { 
      const myDivEl = this.myDiv.nativeElement;
      jQuery(myDivEl).kendoScheduler(options);
    });
  }
}
```

 We can return back to the angular zone anytime via `this.ngZone.run(() => { })`.

## Don't reinvent the wheel

It happens to us developers quite often that we reinvent the wheel.
In the case of plotly.js, there is already a wrapper that has the same technical foundation as described in our article (see [here](https://github.com/plotly/angular-plotly.js/blob/78b9385da1a9a56fe2c9b3b914fce1e63707ae02/src/app/shared/plot/plot.component.ts#L37)):

```bash
npm install angular-plotly.js
npm install plotly.js
```

A large number of inputs and outputs have already been implemented, so it is better to have a look at this solution twice.

So we should add the `PlotlyModule` into the main app module of your project:

```typescript
import { PlotlyModule } from 'angular-plotly.js';

@NgModule({
    imports: [
      // ...
      PlotlyModule
    ],  
    // ...
})
export class AppModule { }
```

Then use the `<plotly-plot>` component to display the same chart as before:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-plotlyjs-example',
  template: `<plotly-plot [data]="data" [layout]="layout"></plotly-plot>`,
})
export class AngularPlotlyjsExampleComponent {

  public data = [{
    values: [66, 22, 12],
    labels: ['Angular', 'React', 'Vue'],
    type: 'pie'
  }];

  public layout = {
    title: 'Top 3 Most Popular SPA Frameworks in 2019*',
    height: 400,
    width: 500
  }
}
```

But note: it's still just a wrapper around that large library!

**[👉 Code on Stackblitz](
https://stackblitz.com/edit/angular-3rd-party-libraries-and-widgets?file=src%2Fapp%2Fangular-plotlyjs-example%2Fangular-plotlyjs-example.component.ts)**


## Delcare *.json

```javascript
declare module '*.json' {
  const value: any;
  export default value;
}
```

## spinner 1

```
<div class="fulfilling-square-spinner">
  <div class="spinner-inner"></div>
</div>

.fulfilling-square-spinner , .fulfilling-square-spinner * {
        box-sizing: border-box;
      }

      .fulfilling-square-spinner {
        height: 50px;
        width: 50px;
        position: relative;
        border: 4px solid #ff1d5e;
        animation: fulfilling-square-spinner-animation 4s infinite ease;
      }

      .fulfilling-square-spinner .spinner-inner {
        vertical-align: top;
        display: inline-block;
        background-color: #ff1d5e;
        width: 100%;
        opacity: 1;
        animation: fulfilling-square-spinner-inner-animation 4s infinite ease-in;
      }

      @keyframes fulfilling-square-spinner-animation {
        0% {
          transform: rotate(0deg);
        }

        25% {
          transform: rotate(180deg);
        }

        50% {
          transform: rotate(180deg);
        }

        75% {
          transform: rotate(360deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes fulfilling-square-spinner-inner-animation {
        0% {
          height: 0%;
        }

        25% {
          height: 0%;
        }

        50% {
          height: 100%;
        }

        75% {
          height: 100%;
        }

        100% {
          height: 0%;
        }
      }

```


## Referẽncias

https:css-tricks.com/snippets/javascript/javascript-keycodes/

https:developer.mozilla.org/en-US/docs/Web/Events

https://medium.com/claritydesignsystem/angular-pseudo-events-d4e7f89247ee

https://docs.nativescript.org/angular/start/quick-setup

## This project was generated with [Angular CLI](https:github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http:localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https:karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http:www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https:github.com/angular/angular-cli/blob/master/README.md).
