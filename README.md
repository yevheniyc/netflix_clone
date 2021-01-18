## React

Udemy React - Complete tutorial

#### Section 2: Refreshing Next Generation JavaScript

##### Module Introduction

```html
<div id="app"></div>
```

```js
function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age: {props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Max" age="28" />
    <Person name="Manu" age="29" />
  </div>
);

ReactDOM.render(app, document.querySelector("#app"));
```

---

##### let & const

With addtional keys were introduced to var:

- let -> variable values
- const -> constant values - this will never receive a new value will throw an error

```javascript
var myName = "Max";
console.log(myName);

const myName = "Maenu"; // will never change and will throw an error
```

##### Arrow Functions

```js
const printMyName = (name, age) => {
  consoel.log(name);
};

// some alternatives - only works with one args
const printMyName = (name) => {
  console.log(name);
};

const multiply = (number) => {
  return number * 2;
};
// same as above
const multiply = (number) => number * 2;
```

##### Exports and Imports (Modules) - Modularizing code

```js
// person.js
const person = {
  name: "Max",
};

// default export of this file
// so if we import something from person.js,
// it will be person!
export default person;
```

```js
// utility.js
export const clean = () => {...}
export const baseData = 10
```

```js
// app.js
import person from "./person.js";
import prs from "./person.js";
import { baseData } from "./utility.js"; // named exports -> explicity targetting exports
import { clean } from "./utility.js";
import { baseData, clean } from "./utility.js";
import { smth as Smth } from "./utility.js";
import * as bundled from "./utility.js"; // bundled.baseData, bundled.clean
```

You will need a utility to compile all new next-gen features to the currently supported features, such as Babel.

##### Classes

```js
class Person {
    name = 'Max'
    call = () => {}
}

const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)

class Person extends Master // inheritance
```

```js
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  // add properties -> similar to __init__
  constructor() {
    super(); // keyword that executes the parent constructor
    this.name = "Max";
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
preson.printGender();
```

##### Classes, Properties & Methods

The Next-Gen syntax allows for a bit different/simplified way of writing properties and methods

```js
class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Max";

  printMyName = () => {
    console.log(this.name);
  };
}
```

The above is only run with Babel!

##### Spread & Rest Operators: ...

Spread Operator -> Used to split up array elements or object properties

```js
const newArray = [...oldArray, 1, 2];
const newObject = { ...oldObject, newProp: 5 }; // newProp takes precedence and overwrites old one (if exists)
```

```js
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // [1, 2, 3, 4]

const person = {
  name: "Max",
};

const newPerson = {
  ...person,
  age: 28,
};
console.log(newPorson); // age: 28, name: 'Max'
```

Rest Operator -> Used to merge a list of function arguments into an array

```js
// all arguments will be merged into an array
function sortArgs(...args) {
  return args.sort();
}
```

```js
const filter = (...args) => {
  return args.filter((el) => el === 1); // available on arrays: check if el equals to 1, and if yes, return from filter
};

console.log(filter(1, 2, 3)); // [1]
```

##### Destructuring

Easily extract array elements or object properties and store them in variables

Array Destructuring

```js
[a, b] = ["Hello", "Max"]; // order determines
```

```js
const numbers = [1, 2, 3];
[num1, , num3] = numbers; // 1, 3
```

Object Destructuring

```js
{name} = {name: 'Max', age: 28} // property name determines
```

##### Reference and Primitive Types Refresher

Primitive types only copy the value:

- Variables => by copy

```js
const number = 1;
const num2 = number; // copies value 1 into num2
```

Reference types copy the pointer (reference) to that memory place where the object resides:

- Objects => by reference
- Arrays => by reference

```js
const person = {
  name: "Max",
};

const secondPerson = person;
person.name = "Manu";
console.log(secondPerson); // the name will change to Manu -> becuse the reference has changed
```

To copy reference types fully, and not just their reference:

```js
const person = {
  name: "Max",
};

const secondPerson = {
  ...person,
};

person.name = "Manu";
console.log(secondPerson); // is still 'Max'!!!!
```

##### Refreshing Array Functions

// filter, sort, map

```js
const numbers = [1, 2, 3];

// double each value in the array
const doubleNumArray = numbers.map((num) => {
  return num * 2;
});
console.log(doubleNumArray); // holds double the values
```

##### Summary

_index.html_

```html
<div id="app"></div>
```

_App.js_

```javascript
import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age: {props.age}</p>
      <p>Income: {props.income}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Max" age="28" income="25k" />
    <Person name="Manu" age="29" income="35k" />
  </div>
);

ReactDOM.render(app, document.querySelector("#app"));
```

---

#### Section 3: Understanding The Base Features and Syntax

##### The Build Workflow

General steps:

- When building the app, we want to **Optimize Code**
- We want to use **Next-Gen** JavaScript Features, and make sure it compiles and runs on as many browsers as possible
- Be more productive: CSS auto prefixing, JSX, Linting

Overview of tools:

- Dependency Management Tools (**npm** or yarn)
- Bundler (**webpack**) - also allows us to specify other steps
- Use Compiler (Next-Gen JS) - **Babel** + **Presets** - can be hooked into webpack configuration
- Use Development Server
- Note: service workers - precache our scripts files

##### Using Create React App

```
create-react-app my-app --scripts-version 1.1.5
```

or

```
npx create-react-app my-app
```

---

#### Firebase

1. Setup Firebase project and then `firebase login` with your google creds
2. Follow Firebase instructions to `firebase init`
3. Choose **Hosting** -> name `public` as **build** -> setup Github Actions
4. For build steps (when configuring GitHub Actions): `npm ci && npm run build`
5. `firebase deploy` or if configured with GitHub Actions, it will do this automatically upon merges!
