# Javascript Basics & Roadmap

## Lets see the roadmap of Javascript 

[refer](https://roadmap.sh/javascript)

> refer to the above link to understand Javascript 

# What is Javascript ?
```
JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. It was introduced in the year 1995 for adding programs to the webpages in the Netscape Navigator browser.
```

## Features of Javascript ?

There are following features of JavaScript:

1. All popular web browsers support JavaScript as they provide built-in execution environments.
2. JavaScript follows the syntax and structure of the C programming language. Thus, it is a structured programming language.
3. JavaScript is a weakly typed language, where certain types are implicitly cast (depending on the operation).
4. JavaScript is an object-oriented programming language that uses prototypes rather than using classes for inheritance.
5. It is a light-weighted and interpreted language.
6. It is a case-sensitive language.
7. JavaScript is supportable in several operating systems including, Windows, macOS, etc.
8. It provides good control to the users over the web browsers.


## Basic Application of JS (Basic)

- Client-side validation,
- Dynamic drop-down menus,
- Displaying date and time,
- Displaying pop-up windows and dialog boxes (like an alert dialog box, confirm dialog box and prompt dialog box),
- Displaying clocks etc.
etc..


## Places to put JS Code in HTML
```
3 Places to put JavaScript code
1. Between the body tag of html
2. Between the head tag of html
3. In .js file (external javaScript)
```

## Pros/Cons of Using External JS file
```
Pros:
- reusability of code
- code readability
- time-efficient as web browsers can cache the external js
- devs can work with html and js files parallelly

Cons:
- the two files are dependent on each other if one goes wrong may affect another
- additional HTTP call to get js file
- code needs to be checked for code duplication 
- takes more time when debugging from multiple js files

```


## What is Hoisting in JS?

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and call functions before they are actually declared in your code.

For example, consider the following code:

```javascript
console.log(x); // Output: undefined
var x = 5;
```

In this code, even though the variable `x` is declared and assigned a value later in the code, the `console.log` statement does not throw an error. Instead, it prints `undefined`. This is because during hoisting, the variable declaration `var x` is moved to the top of its scope, but the assignment `x = 5` remains in its original position. So, when the `console.log` statement is executed, `x` exists but has not yet been assigned a value, resulting in `undefined` being printed.

It's important to note that only the declarations are hoisted, not the initializations. So, if you try to access a variable before it is declared, you will get a `ReferenceError`.

```javascript
console.log(y); // Output: ReferenceError: y is not defined
let y = 10;
```

In this code, the `console.log` statement throws a `ReferenceError` because the variable `y` is declared using `let`, which does not hoist the variable declaration to the top of its scope. Therefore, `y` is not defined before the `console.log` statement.

Hoisting also applies to function declarations. Consider the following code:

```javascript
sayHello(); // Output: Hello!

function sayHello() {
    console.log("Hello!");
}
```

In this code, the `sayHello` function is called before it is actually declared. However, due to hoisting, the function declaration is moved to the top of its scope, allowing the function to be called successfully.

In conclusion, hoisting is a JavaScript behavior that allows you to use variables and call functions before they are declared in your code. However, it's important to understand how hoisting works to avoid unexpected behavior and potential bugs in your code.


## JS Topics

- JS Comments
// this is a comment 
/* 
    multi line comment
*/
- JS Variable
var, let, const

var -> older way of writting varabiles (generally avoid it)
let -> block scope 
const -> but value should not change throughout 

- JS Global Variable
- JS Data Types
- JS Operator
- JS If else statement
- JS Switch Case
- JS Loop

### JS Objects

- Object
- Array
- String
- Date
- Math
- Number
- Boolean

## Basics of Javascript

Here's a comprehensive guide on JavaScript basics, complete with examples, targeting beginners:

### 1. Introduction to JavaScript
JavaScript is a versatile and powerful programming language primarily used for web development. It allows you to create dynamic content on websites, such as interactive forms, animations, and other dynamic elements.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Introduction</title>
</head>
<body>
    <h1 id="greeting">Hello, World!</h1>
    <script>
        document.getElementById("greeting").innerHTML = "Hello, JavaScript!";
    </script>
</body>
</html>
```

### 2. Variables, Data Types, and Operators
Variables in JavaScript store data that can be used and manipulated throughout your code. JavaScript supports several data types, including strings, numbers, booleans, objects, and arrays.

**Example:**
```javascript
// Variables
let name = "Ayush";
const age = 25;
var isDeveloper = true;

// Data Types
let stringType = "Hello";
let numberType = 123;
let booleanType = true;
let objectType = { firstName: "Ayush", lastName: "Raj" };
let arrayType = ["JavaScript", "Python", "Java"];

// Operators
let sum = 10 + 5;  // Addition
let difference = 10 - 5;  // Subtraction
let product = 10 * 5;  // Multiplication
let quotient = 10 / 5;  // Division
```

### 3. Functions and Control Structures
Functions in JavaScript allow you to group code together to perform a specific task. Control structures like if-else, switch, and loops help you control the flow of your code.

**Example:**
```javascript
// Functions
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Ayush"));

// Control Structures
let num = 10;
if (num > 0) {
    console.log("Positive number");
} else {
    console.log("Non-positive number");
}

let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Another day");
}

for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
}
```

### 4. Debugging Tools and Techniques
Debugging is essential for finding and fixing errors in your code. The browser's developer tools provide features like breakpoints and step-through debugging to help you.

**Example:**
```javascript
// Example with a breakpoint
let x = 5;
let y = 10;
let result = x + y;  // Set a breakpoint here to inspect variables
console.log(result);
```
Use `console.log()` to print variables and check their values at different points in your code.

### 5. DOM Manipulation with JavaScript
The Document Object Model (DOM) represents the structure of a webpage. JavaScript allows you to manipulate the DOM to change the content, style, and structure of a webpage dynamically.

**Example:**
```javascript
// DOM Manipulation
document.getElementById("greeting").innerHTML = "Hello, JavaScript!";
document.getElementById("greeting").style.color = "blue";
```

### 6. Events and Event Listeners
Events in JavaScript are actions that occur on the webpage, such as clicks, mouse movements, or form submissions. Event listeners allow you to execute code in response to these events.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Listeners</title>
</head>
<body>
    <button id="myButton">Click Me</button>
    <p id="message"></p>

    <script>
        document.getElementById("myButton").addEventListener("click", function() {
            document.getElementById("message").innerHTML = "Button was clicked!";
        });
    </script>
</body>
</html>
```

### Additional Topics for Beginners

#### 7. Arrays and Objects
Arrays and objects are fundamental data structures in JavaScript.

**Example:**
```javascript
// Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]);  // Output: Banana

// Objects
let person = {
    firstName: "Ayush",
    lastName: "Raj",
    age: 25
};
console.log(person.firstName);  // Output: Ayush
```

#### 8. String Methods
Strings in JavaScript come with various methods to manipulate and work with text.

**Example:**
```javascript
let text = "JavaScript is fun!";
console.log(text.length);  // Output: 18
console.log(text.toUpperCase());  // Output: JAVASCRIPT IS FUN!
console.log(text.substring(0, 10));  // Output: JavaScript
```

#### 9. ES6 Features
ES6 introduced several new features to JavaScript, including let and const, arrow functions, template literals, and more.

**Example:**
```javascript
// Arrow Functions
const add = (a, b) => a + b;
console.log(add(5, 3));  // Output: 8

// Template Literals
let name = "Ayush";
let greeting = `Hello, ${name}!`;
console.log(greeting);  // Output: Hello, Ayush!
```

#### 10. Fetch API
The Fetch API provides a way to make network requests to retrieve resources from the server.

**Example:**
```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

This guide covers the essential basics of JavaScript, providing a solid foundation for beginners. Each section includes examples to help you understand and apply the concepts in your own projects.

> This is just the beginning....


## DOM Manipulations and Event & Event Listeners


## Javascript DOM
```
check app.js
```


## Javascript Form Validation
```
Check the form.html
```


## Javascript Events
```
check app.js 
```

## Javascript Cookies
```
A cookie is an amount of information that persists between a server-side and a client-side. A web browser stores this information at the time of browsing.

A cookie contains the information as a string generally in the form of a name-value pair separated by semi-colons. It maintains the state of a user and remembers the user's information among all the web pages.


- When a user sends a request to the server, then each of that request is treated as a new request sent by the different user.
- So, to recognize the old user, we need to add the cookie with the response from the server.
- browser at the client-side.
- Now, whenever a user sends a request to the server, the cookie is added with that request automatically. Due to the cookie, the server recognizes the users.
```

## Javascript Events
```
check app.js
```

`start in next session`

### JS closures


### JS Async
- JS Callback
- Promises
- Async Await

### JS Async programming

`Javascript Callbacks`

"I will call back later!"

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

e.g.:

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}


`Asynchronous JavaScript`

"I will finish later!"

Functions running in parallel with other functions are called asynchronous

*FYI,refer `Event Loop`*

A good example is JavaScript setTimeout()

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}


`JavaScript Promises`

"I Promise a Result!"

"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result

A Promise is an Object that links Producing code and Consuming code



Promise Object Properties
A JavaScript Promise object can be:

- Pending
- Fulfilled
- Rejected


myPromise.state	        myPromise.result
"pending"	                undefined
"fulfilled"	                a result value
"rejected"	                an error object

e.g:

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(resolve, reject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    resolve("OK");
  } else {
    reject("Error");
  }
});

// how to consume it ?

myPromise
  .then((value) => {
    myDisplayer(value)
    return 'another-value';
    }
  )
  .then((value) => {
    console.log('Another value', value);
  })
  .catch((error) => {
    myDisplayer(error)
  }
);


`JavaScript Async Await`

"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise


e.g.:

async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();


## Interative TODO List Project 

### Summary of the To-Do List Project

**Project Overview:**
This project involves creating an interactive to-do list web application using HTML, CSS, and JavaScript. The application allows users to add tasks, mark them as complete, and delete tasks. The design is modern and clean, providing a user-friendly interface.

**Components:**

1. **HTML**:
   - **Structure**: The HTML file defines the structure of the to-do list, including an input field for adding tasks, a button to add tasks, and an unordered list to display tasks.
   - **Elements**:
     - A container div to hold the entire to-do list.
     - An input group for the task input and add button.
     - An unordered list to display the tasks.

2. **CSS**:
   - **Styling**: The CSS file provides the styling for the to-do list, making it visually appealing and modern.
   - **Styles**:
     - Centered container with a white background, padding, and shadow.
     - Input field and button styling for better user interaction.
     - List items styled with padding, borders, and a delete button.

3. **JavaScript**:
   - **Functionality**: The JavaScript file handles the interactivity of the to-do list, including adding tasks, marking tasks as complete, and deleting tasks.
   - **Features**:
     - Event listeners for adding tasks when the button is clicked or the Enter key is pressed.
     - Function to add tasks to the list, create new list items with delete buttons, and clear the input field.
     - Event listeners on delete buttons to remove tasks and on task text to mark them as complete.

**How It Works:**
- **Adding Tasks**: Users can type a task in the input field and click the "Add Task" button or press Enter to add the task to the list.
- **Marking Tasks as Complete**: Users can click on a task to toggle its completion status, which strikes through the task text.
- **Deleting Tasks**: Users can click the "Delete" button next to a task to remove it from the list.

This project demonstrates basic web development skills, including HTML structuring, CSS styling, and JavaScript for interactivity. It provides a solid foundation for building more complex web applications.0


-----