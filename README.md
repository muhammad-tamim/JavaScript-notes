<h1 align="center">JavaScript Notes</h1>


- [Part 1: The JavaScript Language](#part-1-the-javascript-language)
  - [An Introduction to Javascript](#an-introduction-to-javascript)
    - [What is JavaScript:](#what-is-javascript)
    - [JavaScript History:](#javascript-history)
    - [Why Did JavaScript Need a Standard Version:](#why-did-javascript-need-a-standard-version)
    - [JavaScript Engines:](#javascript-engines)
    - [Hello World](#hello-world)
  - [Variables](#variables)
    - [Difference between var, let and const:](#difference-between-var-let-and-const)
    - [Hoisting](#hoisting)
    - [Scope](#scope)
    - [Scope Chain](#scope-chain)
    - [Variable naming conventions:](#variable-naming-conventions)
    - [How to write a long variable name](#how-to-write-a-long-variable-name)
  - [Data Types](#data-types)
    - [7 Primitive Data Types:](#7-primitive-data-types)
    - [1 Non-Primitive Data Types:](#1-non-primitive-data-types)
  - [Operator](#operator)
    - [Arithmetic Operators (+, -, \*, /, %, \*\*):](#arithmetic-operators-------)
    - [Assignment Operators (=, +=, -=, \*=, /=):](#assignment-operators------)
    - [Increment / Decrement Operators (--, ++):](#increment--decrement-operators----)
    - [Comparison Operator (\>, \<, \>=, \<=, ==, ===, !=, !==):](#comparison-operator--------)
    - [Logical Operators (\&\&, ||, ! ,, !!):](#logical-operators-----)
    - [Conditional Operators (if, else, else if, ? :, switch, case):](#conditional-operators-if-else-else-if---switch-case)
    - [Others Operators](#others-operators)
  - [Loops](#loops)
    - [for loop:](#for-loop)
    - [while loop:](#while-loop)
    - [do while loop:](#do-while-loop)
    - [for..of loop (for iterables):](#forof-loop-for-iterables)
    - [for..in loop (for objects):](#forin-loop-for-objects)
    - [forEach method (only for array):](#foreach-method-only-for-array)
  - [function](#function)
    - [What is the difference between return and no return in a function?](#what-is-the-difference-between-return-and-no-return-in-a-function)
    - [Default Parameter:](#default-parameter)
    - [CallBack Function](#callback-function)
    - [callback hell:](#callback-hell)
    - [Arrow Function:](#arrow-function)
    - [Difference between arrow function and normal function](#difference-between-arrow-function-and-normal-function)
    - [Recursion](#recursion)
    - [Closure](#closure)
  - [string](#string)
    - [autoBoxing](#autoboxing)
    - [why strings are iterable also?](#why-strings-are-iterable-also)
    - [Strings are immutable:](#strings-are-immutable)
    - [Quotes:](#quotes)
    - [String Property:](#string-property)
    - [String Methods:](#string-methods)
  - [Objects:](#objects)
    - [Different ways to declare an Object](#different-ways-to-declare-an-object)
    - [Dot Notation VS Bracket Notation:](#dot-notation-vs-bracket-notation)
    - [Object.keys(), Object.Values() and Object.entries() methods:](#objectkeys-objectvalues-and-objectentries-methods)
    - [Object.freeze() vs Object.seal()](#objectfreeze-vs-objectseal)
    - [Property existence test:](#property-existence-test)
    - [The "for..in" loop](#the-forin-loop)
    - [Objects References and Copying:](#objects-references-and-copying)
    - [Const objects can be modified?](#const-objects-can-be-modified)
    - [Cloning and merging, Object.assign and structuredClone():](#cloning-and-merging-objectassign-and-structuredclone)
    - [Nested cloning:](#nested-cloning)
    - [Object Methods](#object-methods)
    - [Optional Chaining (?.)](#optional-chaining-)
    - [Date:](#date)
  - [array](#array)
    - [for..of loop](#forof-loop)
    - [Array Methods](#array-methods)
  - [Destructuring](#destructuring)
    - [Array Destructuring](#array-destructuring)
    - [Object Destructuring](#object-destructuring)
    - [Destructuring in Function Parameters](#destructuring-in-function-parameters)
  - [set](#set)
    - [creating a set](#creating-a-set)
    - [Adding \& Removing Values](#adding--removing-values)
    - [Checking \& Size](#checking--size)
    - [Iterating Over a Set](#iterating-over-a-set)
    - [Convert Set ↔ Array](#convert-set--array)
  - [map](#map)
    - [Creating a Map](#creating-a-map)
    - [Adding \& Updating Values](#adding--updating-values)
    - [Getting \& Checking Values](#getting--checking-values)
    - [Deleting \& Clearing](#deleting--clearing)
    - [Iterating Over a Map](#iterating-over-a-map)
  - [OPP in js](#opp-in-js)
    - [Object and properties](#object-and-properties)
      - [creating objects](#creating-objects)
        - [using general object literal syntax](#using-general-object-literal-syntax)
        - [Using Object Constructor](#using-object-constructor)
        - [Using Object.create()](#using-objectcreate)
      - [Properties](#properties)
        - [Property Access](#property-access)
        - [Property Descriptors](#property-descriptors)
    - [Constructor Functions](#constructor-functions)
      - [Basic Constructor Function](#basic-constructor-function)
      - [Adding Methods to Prototype](#adding-methods-to-prototype)
      - [Constructor Function vs Regular Function](#constructor-function-vs-regular-function)
    - [ES6 Classes](#es6-classes)
      - [Basic Class Syntax](#basic-class-syntax)
      - [Class Expressions](#class-expressions)
      - [Getters and Setters](#getters-and-setters)
    - [The Four Pillars of OOP](#the-four-pillars-of-oop)
      - [Encapsulation](#encapsulation)
        - [Private Fields (ES2022)](#private-fields-es2022)
        - [Traditional Encapsulation (Using Closures)](#traditional-encapsulation-using-closures)
      - [Inheritance](#inheritance)
        - [Class Inheritance](#class-inheritance)
        - [Prototype-based Inheritance](#prototype-based-inheritance)
      - [Polymorphism](#polymorphism)
      - [Abstraction](#abstraction)
    - [Prototypes and Inheritance](#prototypes-and-inheritance)
      - [Understanding Prototypes](#understanding-prototypes)
      - [Prototype Chain](#prototype-chain)
      - [Modern Prototype Methods](#modern-prototype-methods)
    - [Advanced OOP Concepts](#advanced-oop-concepts)
      - [Composition over Inheritance](#composition-over-inheritance)
      - [Method Chaining](#method-chaining)
      - [Factory Pattern](#factory-pattern)
    - [Design Patterns](#design-patterns)
      - [Singleton Pattern](#singleton-pattern)
      - [Observer Pattern](#observer-pattern)
      - [Strategy Pattern](#strategy-pattern)
    - [Best Practices](#best-practices)
      - [Use Meaningful Names](#use-meaningful-names)
      - [Follow Single Responsibility Principle](#follow-single-responsibility-principle)
          - [Use Composition When Appropriate](#use-composition-when-appropriate)
      - [Use Private Members for Internal State](#use-private-members-for-internal-state)
    - [Examples](#examples)
      - [E-commerce System](#e-commerce-system)
    - [Task Management System](#task-management-system)
    - [Banking System](#banking-system)
  - [Iterables](#iterables)
  - [Strict Mode](#strict-mode)
  - [Error Handling](#error-handling)
    - [Common JS Errors:](#common-js-errors)
      - [SyntaxError:](#syntaxerror)
      - [ReferenceError](#referenceerror)
      - [TypeError](#typeerror)
  - [Js Modules: Import and export](#js-modules-import-and-export)
    - [Export:](#export)
    - [Import:](#import)
  - [Local Storage and Session Storage](#local-storage-and-session-storage)
    - [local storage methods:](#local-storage-methods)
    - [Update the Local Storage key and values:](#update-the-local-storage-key-and-values)
  - [Asynchronous and Synchronous JavaScript](#asynchronous-and-synchronous-javascript)
    - [Synchronous Javascript](#synchronous-javascript)
    - [Asynchronous JavaScript](#asynchronous-javascript)
    - [Web API:](#web-api)
    - [Event loop:](#event-loop)
    - [setTimeOut() and setInterval()](#settimeout-and-setinterval)
    - [JSON, promise, fetch, async/await](#json-promise-fetch-asyncawait)
      - [JSON](#json)
      - [promise](#promise)
      - [fetch](#fetch)
      - [async/await:](#asyncawait)
- [Part 2: DOM](#part-2-dom)
  - [An Introduction To the DOM](#an-introduction-to-the-dom)
  - [DOM Traversing](#dom-traversing)
  - [Elements selecting methods](#elements-selecting-methods)
  - [Content Manipulation](#content-manipulation)
  - [Element Attributes and Element Properties](#element-attributes-and-element-properties)
  - [CSS and Class Styling](#css-and-class-styling)
  - [Creating, Adding and Removing Element Methods](#creating-adding-and-removing-element-methods)
  - [Events](#events)
- [Part 3: JS Exercise](#part-3-js-exercise)
  - [Operator Problems](#operator-problems)
  - [Loop Problems](#loop-problems)
  - [String Problems](#string-problems)
  - [Array Problems](#array-problems)
  - [Object Problems](#object-problems)
  - [Function Problems](#function-problems)

---



# Part 1: The JavaScript Language

## An Introduction to Javascript

### What is JavaScript:

JavaScript is a: 
- scripting language 
  - A scripting language is a programming language that is executed by an interpreter, which translates the code into machine code and runs it line by line (or step by step) at runtime, instead of compiling the entire program into machine code beforehand.
    - Compile time → when the code is being converted into machine code (before execution start).
    - Runtime → when the  code is actually being executed.
    ![](./images/scripting-language)

- Single Threaded
  - meaning it executes one task at a time in sequence.

- Non-blocking 
  - doesn’t wait for asynchronous operation like (setTimeout() or fetch())

- Dynamically Typed
  - meaning variables in JS do not need a type declaration

- Event-Driven
  - JavaScript responds to events like clicks, key presses, key up etc.

- First-Class Functions
  - meaning they can be stored in variables, passed as arguments, or returned from other functions.

- Cross-Platform
  - JS can run in browsers, servers (Node.js), and mobile apps.

- Object-Oriented
  - Because it supports core OOP concepts such as:
    - Encapsulation, Inheritance, Polymorphism, Abstraction

### JavaScript History:
In 1995, Brendan Eich, a developer at Netscape Communications Corporation, created JavaScript. Eich initially joined Netscape with the intention of implementing the Scheme programming language in the browser. However, Netscape’s management wanted the Scheme language syntax resemble and look similar to Java. As a result, Eich decided to designed a new language that combined:

- The functionality of Scheme programming language
- The object-orientation of Self programming language
- And The syntax of Java programming language

He completed the first version of the language called Mocha in just 10 days in May 1995.

- LiveScript (September 1995) – The first version of the language released to the public was called LiveScript, included with the beta version of Netscape Navigator 2.0 Browser.  
  
    Note: Alongside the language, Eich also built the first JavaScript engine written in C, to run LiveScript in the Navigator browser.

- JavaScript (December 1995) – The final name, officially announced in collaboration with Sun Microsystems

  - Why netscape collaborate with Sun Microsystems?  
  
    The main reason is Marketing and Branding. Sun Microsystems was the creator of the Java programming language, which was very popular and highly hyped at the time. To take advantage of this popularity, Netscape wanted their new scripting language (originally called Mocha, later renamed LiveScript) to gain more attention. So, they partnered with Sun Microsystems and renamed their language to JavaScript, even though Java and JavaScript are completely different languages with different purposes and designs.

- ES1 (1997) - First official standardized version of JavaScript 
  
    In June 1997 JavaScript was submitted to ECMA (European Computer Manufacturers Association) International to create a standard version of the language, so all browsers could implement it consistently.
    So, ECMAScript is the official name of the JavaScript standard and ES1, ES2, ES6 etc. are its version numbers.


### Why Did JavaScript Need a Standard Version:
When JavaScript was first created in 1995 by Netscape, it was only implemented in their browser Netscape Navigator. Shortly, Microsoft launched its own browser, Internet Explorer, and included its own version of JavaScript called JScript. As a result, two distinct versions of JavaScript were emerged in the market:

- JavaScript in Netscape Navigator
- JScript in Internet Explorer

so, Different browsers had slightly different implementations of JavaScript. Some features worked in one browser but not in another. This caused a lot of bugs and confusion for web developers. Developers had to write browser-specific code, which made websites harder to build and maintain.

To solve this problem, Netscape submitted JavaScript to ECMA International in June 1997, so they could create a standardized specification of the language. This standard was named ECMAScript.

### JavaScript Engines:
A JavaScript engine is a program built into web browsers (and platforms like Node.js) that is responsible for executing JavaScript code.

It takes the JavaScript you write and processes it in the following steps:

1. Parsing
     - Parsing is the process where the JavaScript engine reads your code and breaks it down into a structured format (called an AST – Abstract Syntax Tree) so it can understand and execute it.
       -  **Abstract Syntax Tree (AST):** An AST is a tree-like structure that represents the syntax and structure of your code. Each part of your code becomes a node, and all nodes are connected to each other.
```bash
let x = 5 + 3;

Ast format:
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "x"
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Literal",
              "value": 5,
              "raw": "5"
            },
            "right": {
              "type": "Literal",
              "value": 3,
              "raw": "3"
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}        
```

2. Compiling the AST to Bytecode
   - **Bytecode:** Is an intermediate from between your original JavaScript code and the machine code.
3. Execution: Execution has two phase, interpreting and JIT compilation (if applicable)
   - Interpreting
     - Is a process where the interpreter convert bytecode into machine code, and then executes it line by line or step by step.
   - JIT Compilation (if applicable)
     - JIT(Just In Time) Compilation is a process where the JS engine detects frequently executed “hot” code and convert it into machine code using JIT compiler. On future executions, the engine can skip parsing, compiling to bytecode, and interpreting, and instead run the precompiled hot code directly for better performance.

### Hello World

```console.log("Hello World");```

**What’s happened behind the code:**
The statement sends to the JavaScript Engine
- Parsing
- Compiling AST to Bytecode
- executing (Interpreting or JIT compilation) 
  - After interpreting of JIT compilation the  engines execute `console.log("Hello World")`
    - here
      - console is a global object provided by the environment (browser or Node.js).
      - log is a method of the console object.
      - so, Calling console.log("Hello World") passes the string "Hello World" as an argument to that log method, which then prints it to the web browser console or terminal (in Node.js).

Q&A:
- statement: A single instruction in a programming language
  - ```console.log("Hello World");```
- code: Any written instructions in a programming language, from one line to many. 
  - ```console.log("Hello World");```
- program: A complete set of code written in a programming language to solve a problem or perform a task by (input → processing → output)..
  - Find the largest number in an array
- Method: when a function is stored as a property of an object, it’s called a method.


## Variables
A variable is a “named storage” for data. We can declare variables to store data by using keywords:

Note: A keyword is a reserved word that has a special meaning in the language. 

- var: the old way to declare variables 
- let: the modern way to declare variables 
- const: declares constant variables

**Variable Declaration:**

`let message;`

**Variable Initialization:**

`let message = 'Hello World';`

**Variable assignment:**

```js
let message = 'Hello World';
message = 'Hello Universe'
```
**Note:** initialization gives a variable its first value, while assignment gives a variable a new value after it has been initialized.

### Difference between var, let and const:

<table>
<tr>
<th>var</th>
<th>let</th>
<th>const</th>
</tr>
<tr>
<td>Function-scoped (global scope if not in a function)

```js
function testScope() {
    if (true) {
        var x = 10;
    }
    console.log(x); // output: 10 
}
testScope();
```

```js
if (true) {
    var test = true; 
}
console.log(test); // output: true
```

</td>
<td>Block-scoped

```js
function testScope() {
    if (true) {
        let x = 10;
    }
    console.log(x); // ReferenceError: x is not defined
}
testScope();
```

```js
if (true) {
    let test = true;
}
console.log(test); // ReferenceError: x is not defined
```

</td>
<td>block Block-scoped

```js
function testScope() {
    if (true) {
        const x = 10;
    }
    console.log(x); // // ReferenceError: x is not defined
}
testScope();
```

```js
if (true) {
    const test = true;
}
console.log(test); // ReferenceError: x is not defined
```

</td>
</tr>
<tr>
<td>
Hoisted and initialized with undefined.

```js
console.log(a); // undefine
var a = 10;
```

</td>
<td>
Hoisted but not initialized

```js
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

</td>
<td>
Hoisted but not initialized

```js
console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 20;
```

</td>
</tr>
<tr>
<td>
Can be re-declared and re-assign in the same scope.

```js
var a = 10;
var a = 20;  //  Allowed
a = 30;      //  Allowed
console.log(a); // 30
```

</td>
<td>
Cannot be re-declared but can re-assign in the same scope.

```js
let b = 10;
// let b = 20;  // Error: re-declaration not allowed
b = 20;        //  Re-assignment allowed
console.log(b); // 20
```

</td>
<td>
Cannot be re-declared and re-assign in the same scope.

```js
const c = 10;
// c = 20;      // Error: cannot reassign
// const c = 30; // Error: cannot re-declare
console.log(c); // 10
```

</td>
</tr>
<tr>
<td>
Declaring var globally adds it to window object as a property (in browsers).
<img src="./images/window.png">
</td>
<td>
Declaring let doesn't globally add it to window object as a property (in browsers).

```js
let a = 10;

console.log(window);
console.log(window.a); // undefined
```

</td>
<td>
Declaring const doesn't globally adds it to window object as a property (in browsers).

```js
const a = 10;

console.log(window);
console.log(window.a); // undefined
```

</td>
</tr>
</table>

### Hoisting
Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope during parsing and compiling the AST to Bytecode phase, before the code is executed by interpreter or JIT compiler(if applicable).

### Scope
Scope determines where variables can be accessed in your code. There are 4 types of scopes in js:

1. Block Scope:  
   
A variable has block scope if it is declared with let or const inside a block ({ }). It is accessible only within that block.

```js
if (true) {
    let age = 25;
    const city = "Dhaka";
    console.log(age, city); // 25 Dhaka
}

console.log(age);  //  ReferenceError: age is not defined
console.log(city); //  ReferenceError: city is not defined
```

2. Function Scope:  
   
A variable has function scope if it is declared inside a function. It is accessible only within that function.

```js
function sayHello() {
    let message = "Hello";
    console.log(message); // Hello    
}

sayHello();
console.log(message); // ReferenceError: message is not defined
```

3. Global Scope:  
   
A variable has global scope if it is declared outside of any function or block. It is accessible from anywhere in the code.

```js
let name = "Tamim";

function greet() {
    console.log("Hi", name); // Hi Tamim
}

greet();
console.log(name); // Tamim
```

4. Lexical Scope:  
    
Lexical scope means You can access variables from outer to inner scope, but not from inner to outer scope.

```js
let outerVar = "I am outer";

function outerFunction() {
    let innerVar1 = "I am inner1";

    function innerFunction() {
        let innerVar2 = "I am inner2"
        console.log(outerVar); // I am outer
        console.log(innerVar1); // I am inner1
    }

    innerFunction();

    console.log(innerVar2) // ReferenceError: innerVar2 is not defined
}

outerFunction();

console.log(innerVar1); // ReferenceError: innerVar1 is not defined
```

### Scope Chain
When you try to access a variable:
- JavaScript first looks in the current scope
- If not found, it goes to the outer scope
- This continues until it reaches the global scope

```js
let num = 1;

function outerFunction() {
    let num = 2;

    function innerFunction() {
        let num = 3;

        console.log(num);
    }

    innerFunction();
    console.log(num);
}

outerFunction();
console.log(num);

/*
3
2
1
*/
```

### Variable naming conventions:
- Names must start with a letter, underscore _, or dollar sign $
- Names can contain letters, digits, _, and $ — but no spaces or symbols
- Names are Case-sensitive
- Names Cannot contain JavaScript reserved keywords

### How to write a long variable name
- Snake Case = `let my_current_home_address = "Barisal";`
- Camel Case (recommended) = `let myCurrentHomeAddress = "Barisal";`
- Pascal Case = `let MyCurrentHomeAddress = "Barisal";`




## Data Types

A data type defines the kind of value a variable can hold (like a Number, String, Boolean, etc.)

JavaScript is a dynamically typed language, which means:
- You don’t have to declare the type of a variable.
- The type is determined automatically based on the value you assign.

```js
let message = "hello"; // string
message = 123456;      // number
```

There are 8 data types in JavaScript:

### 7 Primitive Data Types:

1. Number 
Represents both integers and floating-point numbers. 
    
```js
let age = 25;
let money = 25.5345;

console.log("Age:", age); // Outputs: Age: 25
console.log("Money:", money.toFixed(2)); // Outputs: Money: 25.53
```

**Math Properties:**

```js
console.log(Math.PI);       // 3.141592653589793
```

**Math Methods:**

```js
console.log(Math.round(4.5)); // 5 
/*
Rounds to the nearest integer:
if number >= 0.5, it rounds up to the next integer
if number < 0.5, it rounds down to the previous integer
*/
console.log(Math.floor(4.9));   // 4 → Rounds down
console.log(Math.ceil(4.1));    // 5 → Rounds up
console.log(Math.trunc(4.9));   // 4 → Removes decimal part (not supported IE)


console.log(Math.pow(2, 3));    // 8 → 2 to the power of 3
console.log(Math.sqrt(25));     // 5 → Square root of 25
console.log(Math.abs(-7));      // 7 → remove negative sign

console.log(Math.min(3, 1, 7)); // 1 → Smallest number
console.log(Math.max(3, 1, 7)); // 7 → Largest number

console.log(Math.random());     // Random decimal between 0 (inclusive) and 1 (exclusive) = 0.9424061987261064
console.log(Math.random() * 10); // Random decimal between 0 (inclusive) and 10 (exclusive) = 5.058496963060374
console.log(Math.random() * 100); // Random decimal between 0 (inclusive) and 100 (exclusive) = 65.20503567629157
console.log(Math.floor(Math.random() * 10)); // Random integer between 0 (inclusive) and 10 (exclusive) = 3
console.log(Math.floor(Math.random() * 100)); // Random integer between 0 (inclusive) and 100 (exclusive) = 28
```

**Type conversion with global functions:**

```js
console.log(parseInt("123"));       // 123
console.log(parseInt("12.34"));     // 12
console.log(parseInt("100px"));     // 100
console.log(parseInt("abc"));       // NaN
console.log(parseInt(true));       // NaN
console.log(parseInt(false));       // NaN

console.log(parseFloat("10"));         // 10
console.log(parseFloat("12.34"));     // 12.34
console.log(parseFloat("100px"));     // 100
console.log(parseFloat("3.14hello")); // 3.14
console.log(parseFloat("abc"));       // NaN
console.log(parseFloat(true));       // NaN
console.log(parseFloat(false));       // NaN

console.log(Number("5"));        // 5
console.log(Number("12.34"));    // 12.34
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(""));         // 0
console.log(Number("hello"));    // NaN

console.log(String(123));       // "123"
console.log(String(true));      // "true"
console.log(String(false));     // "false"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
console.log(String([1, 2, 3])); // "1,2,3"

console.log(Boolean(0));           // false
console.log(Boolean(1));           // true
console.log(Boolean(""));          // false
console.log(Boolean("Tamim"));     // true
console.log(Boolean(null));        // false
console.log(Boolean(undefined));   // false
console.log(Boolean([]));          // true (empty array is truthy)
console.log(Boolean({}));          // true (empty object is truthy)
```

**Type conversion with methods**

```js
console.log((123).toString());       // "123"
console.log(true.toString());      // "true"
console.log(false.toString());     // "false"
// console.log(null.toString());      // TypeError
// console.log(undefined.toString()); // TypeError
console.log([1, 2, 3].toString()); // "1,2,3"

console.log((12.3456).toFixed(2)); // "12.35"

console.log(12.3456.toPrecision(4)); // "12.35"
console.log(12.3456789.toPrecision(5)); // "12.346"

let date = new Date();
console.log(date) // 2025-09-13T05:25:33.523Z
console.log(date.toLocaleString()); // 9/13/2025, 11:26:02 AM
```


2. BigInt

Used for integers larger than <code>2<sup>53</sup> - 1</code>.

```let big = 12345678901234567890n;```

3. String

4. Boolean 
   
Represents true or false.

```js
let isMarried = false;
let isSingle = true;
```

5. Null  
   
Represents intentional "no value".

```js
let data = null;
console.log(data) // null
```

6. Undefined  
   
It is a primitive data type and default value given by JavaScript when JavaScript expects a value but doesn’t find one.:

**When we got undefined:**

a variable Declared but not initialized

```js
let a;
console.log(a); // undefined
```

Function without a return value

```js
function greet() {}
console.log(greet()); // undefined
```

Accessing a non-existing object property

```js
let obj = { name: "Alice" };
console.log(obj.age); // undefined
```

Accessing an array element that doesn’t exist

```js
let arr = [1, 2, 3];
console.log(arr[5]); // undefined
```

Function parameters not provided

```js
function sum(a, b) {
  console.log(b);
}
sum(5); // undefined
```

Explicit assignment

```js
let x = undefined;
console.log(x); // undefined
```

7. Symbol

Represents a unique and immutable value, mainly used to create unique identifiers for object properties.

```js
let id = Symbol();
console.log(typeof id); // "symbol"


let a = Symbol("id");
let b = Symbol("id");
console.log(a === b); // false
```

### 1 Non-Primitive Data Types:

8. Object  
   
In JavaScript, any data that is not a primitive type is considered an object type. The three most commonly used object types are:

- object
- array
- function 

## Operator

An Operator is a special symbol or keyword that performs an operation on one or more values.

### Arithmetic Operators (+, -, *, /, %, **):

```js

console.log(2 + 3); // 5
console.log(5 - 2); // 3
console.log(4 * 2); // 8

console.log(10 / 50); // 0.2
console.log(10 % 50) // 10
console.log(50 / 10) // 5
console.log(50 % 10) // 0
```
Note: For a perfect division, the dividend > divisor.

<h4>** (Exponentiation):</h4>
<p>a ** b = a<sup> b</sup></p>

```js
console.log(2 ** 2); // 2² = 4
console.log(2 ** 3); // 2³ = 8
console.log(2 ** 4); // 2⁴ = 16
console.log(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
console.log(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)
```

**String concatenation with +:**

```js
let s = "my" + "string";
console.log(s); // mystring
```

Note: If any of the operands is a string, then the other one is converted to a string too.

```js
console.log('1' + 2); // "12"
console.log(2 + '1'); // "21"
console.log(2 + 2 + '1'); // "41" and not "221"
console.log('1' + 2 + 2); // "122" and not "14"
```

Note: The + is the only operator that supports strings concatenation. Other arithmetic operators work only with numbers and always convert their operands to numbers.

```js
console.log(6 - '2'); // 4, converts '2' to a number
console.log('6' / '2'); // 3, converts both operands to numbers
```

### Assignment Operators (=, +=, -=, *=, /=):

```js
let x = 10;
x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2
```

### Increment / Decrement Operators (--, ++):

**Pre Increment / Decrement:**

```js
let i = 10;
let x = ++i;
console.log(i); // 11
console.log(x); // 11
```

**post Increment / Decrement:**

```js
let i = 10;
let x = i++;
console.log(i); // 11
console.log(x); // 10
```

Note: 

- Pre-increment (++i): First increments the value of i, then assigns it.
- Post-increment (i++): First assigns the value, then increments it.

### Comparison Operator (>, <, >=, <=, ==, ===, !=, !==):

```js
console.log(5 > 3);     // true
console.log(5 < 3);     // false
console.log(5 >= 5);    // true
console.log(3 <= 2);    // false
console.log(5 == '5');  // true
console.log(5 === '5'); // false
console.log(5 != '5');  // false
console.log(5 !== '5'); // true
```
**String comparison:**

To see whether a string is greater than another, JavaScript uses the so-called lexicographical algorithm.

How lexicographical algorithm works:
- Strings are compared character by character from left to right.
- Each character is compared based on its Unicode value.
- The first difference determines the result.
- If all characters are equal and lengths differ, the shorter string is considered smaller.

```js
console.log('B' > 'A'); // true
console.log('abcd' == 'abcd'); // true
console.log('abcd' > 'abcc'); // true
console.log('Bc' < 'Bce'); // true
```
<img src="images/ascii.png" alt="ascii vaues">

**How to see unicode or Ascii values in js:**

```js
console.log('a'.charCodeAt(0)); // Output: 97
console.log('a'.codePointAt(0)); // Output: 97
```

**Difference between == and === :**

```js
console.log(0 == false); // 0 == 0 true
console.log('' == false); // 0 == 0 true
```
In both cases, JavaScript uses type conversion to convert different data types (string/boolean) into numbers before comparing with ==.

=== strictly checks both value and data type. If one of them missing, it immediately returns false.

```js
console.log(0 === false); // false
console.log('' === false); // false
console.log(0 === 0); // true
console.log('' === ''); // true
```


### Logical Operators (&&, ||, ! ,, !!):

```js
let age = 25;
if (age > 18 && age < 30) {
    console.log("Young Adult");
}
// Young Adult

const isLoggedIn = true;
const userName = "Tamim";

isLoggedIn && console.log("Welcome, " + userName);
// Output: Welcome, Tamim

const isMingle = false;

isMingle || console.log("Sad for you!");
// Sad for you

let day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend");
}
// weekend

let loggedIn = false;
if (!loggedIn) {
    console.log("Please log in");
}
// Please log in

let username = "Tamim";

if (!!username) {
    console.log("Username is set");
} else {
    console.log("Please enter a username");
}
// Username is set

console.log(!!"hello"); // true
console.log(!!42); // true
console.log(!!{}); // true
console.log(!![]); // true

console.log(!!""); // false
console.log(!!0); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false
```

### Conditional Operators (if, else, else if, ? :, switch, case):

```js
let age = 20;

if (age < 18) {
  console.log("Minor");
} else if (age === 18) {
  console.log("Exactly 18");
} else {
  console.log("Adult");
}
```

**Ternary operator(? :):**

syntax:

```condition ? true part : false part```

```js

let age = 18;
let message;

if (age >= 18) {
    message = "You are an adult";
} else {
    message = "You are a minor";
}
console.log(message);
```

```js
// with ternary operator
let age = 18;
let message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(message);
```

**switch...case:**

```js

let color = "green";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "green":
    console.log("Go");
    break;
  case "yellow":
    console.log("Wait");
    break;
  default:
    console.log("Unknown color");
}
// switch checks one variable against multiple cases and runs the matched block.
```

**Truthy and Falsy values:**

In JavaScript, any value used in a conditional statement gets automatically converted to true or false.

There are 6 total falsy values in js, everything else is truthy:

- false
- 0
- ""
- null
- undefined
- NaN

```js
// None of the console.log() will run because all the values are falsy.

if (false) console.log('Falsy');
if (0) console.log('Falsy');
if (-0) console.log('Falsy');
if (0n) console.log('Falsy');
if ("") console.log('Falsy');
if (null) console.log('Falsy');
if (undefined) console.log('Falsy');
if (NaN) console.log('Falsy');
```

### Others Operators

**typeof operator:**

```js

console.log(typeof undefined); // "undefined"

console.log(typeof 0); // "number"

console.log(typeof 10n); // "bigint"

console.log(typeof true); // "boolean"

console.log(typeof "foo"); // "string"

console.log(typeof Symbol("id")); // "symbol"

console.log(typeof null); // "object"  
// typeof null return "object", but null is a primitive data type.

```


**rest operator:**

Rest operator gathers values into an array or object.

It is used defining things like Function parameters, array destructuring, object destructuring.

rest in function parameter:
```js

function multiply(multiplier, ...numbers) {
    console.log(multiplier);
    console.log(numbers);

}

multiply(2, 1, 2, 3);
multiply(3, 4, 5, 6);

/*
2
[ 1, 2, 3 ]
3
[ 4, 5, 6 ]
*/
```

rest in array destructuring:

```js
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]
```

rest in object destructuring:

```js
const user = { name: "Tamim", age: 21, country: "BD" };
const { name, ...rest } = user;

console.log(name); // Tamim
console.log(rest); // { age: 21, country: "BD" }
```

**spread operator:**
Spreads operator breaks an array or object into individual values. 

It is Used in Function calls, array literals and object literals.
  - A literal means a fixed value written directly in the code.

in function call:

```js
function greet(a, b, c) {
    console.log(a, b, c);
}

const args = [1, 2, 3];
greet(args); // [ 1, 2, 3 ] undefined undefined
greet(...args); // 1 2 3
console.log(...args) // 1 2 3
```

In Arrays

```js
const num1 = [1, 2];
const num2 = [3, 4];
const all = [...num1, ...num2];
console.log(all); // [1, 2, 3, 4]

console.log(...all) // 1 2 3 4
console.log(Math.max(...all)) // 4
console.log(Math.min(...all)) // 1
```

In Objects:

```js
const user1 = { name: "Tamim" };
const user2 = { age: 21 };
const merged = { ...user1, ...user2 };
console.log(merged); // { name: "Tamim", age: 21 }
```


**Nullish Coalescing operator (??):**  

The nullish coalescing operator (??) is used to provide a default value when a variable is null or undefined.

```js
function greet(name) {
  let user = name ?? "Guest";
  console.log("Hello, " + user);
}

greet(null);   // Hello, Guest
greet("John"); // Hello, John
```

```js

let user = {
    age: 0,
    name: ""
};

console.log(user?.name ?? "Anonymous"); // "" (not nullish)
console.log(user?.email ?? "No email"); // "No email"

const user2 = {
    name: 'Rahim',
    address: { city: 'Dhaka' }
};

const city = user2?.address?.city ?? "City not available";
console.log(city); // Dhaka


const postalCode = user?.address?.postalCode ?? "Postal code not available";
console.log(postalCode); // Postal code not available
```

```js

let a;
let b = null;
let c = undefined;
let d = "Hello";

let result = a ?? b ?? c ?? d ?? "Fallback";
console.log(result); // "Hello"

// It returns the first non-nullish value.
```

|| vs ??:

```js
let value1 = 0;
let result1 = value1 || 100;
let result2 = value1 ?? 100;

console.log(result1); // 100 (because 0 is falsy)
console.log(result2); // 0   (because 0 is NOT null or undefined)
```

You cannot mix ?? with || or && without parentheses:

```js

// SyntaxError:
let result = null || undefined ?? "Default";

// Fix:
let result = (null || undefined) ?? "Default";
```

## Loops

### for loop:

```js
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

// With break and continue

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // skip even numbers
  }

  if (i === 7) {
    break; // stop the loop when i is 7
  }

  console.log(i);
}
/*
1
3
5
*/
```

### while loop:

```js
let i = 0;
while (i < 5) {
    console.log(i); // 0 1 2 3 4
    i++;
}
```

### do while loop:

```js
let i = 0;
do {
    console.log(i); // 0 1 2 3 4
    i++;
} while (i < 5);
```

### for..of loop (for iterables):

```js
// with array
const arr = ['a', 'b', 'c'];

for (const element of arr) {
    console.log(element); //  a b c
}

// with string
const str = 'hello';

for (const value of str) {
    console.log(value); // h e l l o
}
```

### for..in loop (for objects):

```js
const obj = {
    a: 1,
    b: 2
};

for (const key in obj) {
    console.log(key, obj[key]);
}
/*
a 1
b 2

key = a
key = b

obj[key] = obj[a] = 1
obj[key] = obj[b] = 2
*/
```

### forEach method (only for array):

forEach is an array method in JavaScript that loops through each element of an array and calls a callback function for each element.

```js
const numbers = [1, 2, 3];
numbers.forEach(function (num) {
    console.log(num); // 1 2 3
});

// or

const num2 = [4, 5, 6];
num2.forEach(num2 => console.log(num2)) // 4 5 6
```

```js
const arr = [4, 5, 6];

function myCallback(value, index, array) {
  console.log(value, index, array);
}

arr.forEach(myCallback);

/*
Output:
4 0 [4, 5, 6]
5 1 [4, 5, 6]
6 2 [4, 5, 6]
*/
```

**Behind the scenes:**

```js
Array.prototype.forEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    // Call the callback function for each element
    callback(this[i], i, this);
  }
};
```
Here, 
- Array = This is the built-in JavaScript constructor for creating arrays.

```js
const arr = [1, 2, 3];  // shorthand way to create an array
const arr2 = new Array(1, 2, 3); // create array using constructor
```

- prototype = Every constructor function in JavaScript has a prototype object to share methods. This is where shared methods (like forEach, map, filter, etc.) are stored. That way, these methods are not recreated for every array but instead reused.

- forEach = This is one of those reusable prototype methods. Any array can use it because arrays inherit it from Array.prototype.

- this = Inside the forEach method, this refers to the array that called the method.

**Manual forEach Simulation**

```js
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

const arr = [4, 5, 6];

function myCallback(value, index, array) {
  console.log(value, index, array);
}

myForEach(arr, myCallback);

/*
Output:
4 0 [4, 5, 6]
5 1 [4, 5, 6]
6 2 [4, 5, 6]
*/

```

## function

A Function is a block of reusable code that perform a specific task when it is called.

```js
function calcSum(a, b) {
    console.log(a + b);
}

calcSum(1, 2); // 3
```

**Note:**

*   1, 2 are arguments
*   a, b are parameters

### What is the difference between return and no return in a function?

```js
function calcSum(a, b) {
    const result = a + b;
}

console.log(calcSum(1, 2)); // undefined
```

In this example, the function calculates something, but it doesn't return anything. So when we call sum(1, 2), the calculation happens inside the function, but we can’t access or use the result outside. we just call the function, and that’s all — no control or output comes back.

```js
function calcSum(a, b) {
    const result = a + b;
    return result;
}

console.log(calcSum(1, 2)); // 3
const functionResult = calcSum(3, 4);
console.log(functionResult + 5); // 12

```

In this example, the function not only does the work, but it also returns the result to us. This means we can store it, reuse it, or do more operations with it.

You can think of it like this:

We order a coffee from a robot. The robot’s job is to make the coffee. But the robot’s owner teaches it something special, When someone orders coffee, don’t just make it — also serve it on the table.

That’s how `return` works in a function.

*   Without `return`, the robot just makes the coffee — but you don’t get it.
*   With `return`, the robot makes the coffee and gives it to you.

so,

If a function returns a value, you can store it in a variable and use it for further operations. If a function does not return anything, you just call the function, but you can’t use its output for further operations.

### Default Parameter:

In JavaScript, default parameters allow you to set default values for function parameters. If no arguments is passed when the function is called, the default parameter will be used.

```
function showGreet(name = "Guest") {
  console.log("Hello, " + name + "!");
}
showGreet("Tamim"); // Output: Hello, Tamim!
showGreet();        // Output: Hello, Guest!
```

### CallBack Function

A callback function is a function that is passed as an argument to another function and is executed by that function at a later time.

```js
// A function that takes another function as a callback
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); 
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Tamim", sayGoodbye); // passing sayGoodbye function as a callback function

// Output:
// Hello Tamim
// Goodbye!
```
here, SayGoodbye is a callback function, because we pass it into another function and them executed in that function.

### callback hell:

When we write too many nested callback functions that are hard to read and maintain, it is called callback hell.

```js
// Example: Simulating steps with nested callbacks
setTimeout(() => {
  console.log("Step 1: Start project");
  
  setTimeout(() => {
    console.log("Step 2: Do research");
    
    setTimeout(() => {
      console.log("Step 3: Build features");
      
      setTimeout(() => {
        console.log("Step 4: Test project");
        
        setTimeout(() => {
          console.log("Step 5: Deploy project");
        }, 1000);
        
      }, 1000);
      
    }, 1000);
    
  }, 1000);
  
}, 1000);
```

### Arrow Function:

Arrow functions are a shorter way to write functions in JavaScript. They were introduced in ES6.

Examples:

```
const greet = () => console.log("Hello!");
greet(); // Output: Hello!



const greet2 = () => {
    console.log("Hello!");
};
greet2(); // Output: Hello!



const square = x => x * x;
console.log(square(5)); // Output: 25



const multiply = (a, b) => {
    const result = a * b;
    return result;
};
console.log(multiply(3, 4)); // Output: 12
```

### Difference between arrow function and normal function

- Normal function: Must use return.
- Arrow function: Can omit {} and return for single-expression functions.

```js
// Normal function
function multiply(a, b) {
  return a * b;
}

// Arrow function with implicit return
const multiplyArrow = (a, b) => a * b;
```

- Normal functions: this depends on how the function is called.
- Arrow functions: this depends on where the function is defined (lexical scope).

```js
const person = {
  name: "Alice",
  greetNormal: function() {
    setTimeout(function() {
      console.log("Normal: " + this.name); // undefined, because setTimeout fuciton dont have name property
    }, 1000);
  },
  greetArrow: function() {
    setTimeout(() => {
      console.log("Arrow: " + this.name); // Alice
    }, 1000);
  }
};

person.greetNormal();
person.greetArrow();
```

- Normal function: arguments is available.
- Arrow function: arguments is not available.

```js
function normalFunc(a, b) {
  console.log(arguments); // [1, 2]
}
normalFunc(1, 2);

const arrowFunc = (a, b) => console.log(arguments); // ReferenceError
arrowFunc(1, 2);
```

- Normal function: Can be used as a constructor
- Arrow function: Cannot be used as a constructor.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Alice", 25);
console.log(p1.name); // Alice
console.log(p1.age);  // 25
```

```js
const PersonArrow = (name, age) => {
  this.name = name;
  this.age = age;
};

const p2 = new PersonArrow("Bob", 30); // ❌ TypeError: PersonArrow is not a constructor
console.log(p2.name); 
console.log(p2.age);  
```

- normal function are not ideal for callback
- Arrow functions are ideal for callbacks, especially with array methods like map, filter, forEach.

```js
const numbers = [1, 2, 3, 4, 5];

const squaredNormal = numbers.map(function(num) {
  return num * num;
});

console.log(squaredNormal); // [1, 4, 9, 16, 25]
```

```js
const numbers = [1, 2, 3, 4, 5];

const squaredArrow = numbers.map(num => num * num);

console.log(squaredArrow); // [1, 4, 9, 16, 25]
```


### Recursion

Recursion is a technique where a function calls itself.

```js
function a() {
    const a = 10;
    console.log('inside a', a);
}
function b() {
    const b = 20;
    a();
    console.log('inside b', b);
}

function c() {
    const c = 30;
    b();
    console.log('inside c', c);
}
c();

/*
inside a 10
inside b 20
inside c 30
*/
```

**what is Call Stack:**

A call stack is a data structure that keeps track of function calls in a Last-In-First-Out (LIFO) manner. When a recursive function calls itself, here's what happens:

*   New Frame Creation: Each function call creates a new "stack frame" containing the function's parameters, local variables, and return address
*   Stack Growth: These frames pile up on top of each other as the recursion goes deeper
*   Base Case Reached: When the base case is hit, the recursion stops adding new frames
*   Stack Unwinding: Functions start returning values and their frames are removed from the stack in reverse order

![callstack](images/callStack.png)  

**How the recursion Works:**

A recursive function typically has two main components:

1.  **Base Case:** The part where the recursive function stops the recursion based on a condition. It ensures that the function does not call itself indefinitely, which prevents a stack overflow.
    - **Stack OverFlow:** A stack overflow is an error that happens when the call stack gets too full.
    
    ```js
    function greeting() {
        console.log("Hello, world!");
        greeting();
    }
    greeting(); // RangeError: Maximum call stack size exceeded
    ```
2.  **Recursive Case:** The part where the recursive function calls itself.
    

**Find Factorial Using Recursion:**

```

function factorial(n) {
  if (n === 0) { // base case
    return 1; 
  }
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // 120
```

call stack:

![call-stack-2](./images/Call%20Stack2.png.png)

    
### Closure

A closure is a function technique where an inner function remembers the variables from its outer scope, even after that outer function has finished executing.


```js
function secretCounter() {
    let count = 0;

    return function () {
        count++;
        console.log("Count is: " + count);
    };
}

const counter = secretCounter();

counter(); // Count is: 1
counter(); // Count is: 2
counter(); // Count is: 3
```

```js
function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function(amount) {
      balance += amount;
      console.log("Deposited: " + amount + " | Balance: " + balance);
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log("Withdrew: " + amount + " | Balance: " + balance);
      } else {
        console.log("Insufficient funds!");
      }
    }
  };
}

const account = bankAccount(100);
account.deposit(50);   // Deposited: 50 | Balance: 150
account.withdraw(70);  // Withdrew: 70 | Balance: 80
account.withdraw(200); // Insufficient funds!
```

```js
function makeMultiplier(multiplier) {
  return function(num) {
    return num * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

explanation: 

When we call

```const double = makeMultiplier(2);```

it returns:

```js
function(num) {
    return num * multiplier;
};
```
Now double holds this function, and it also remembers that multiplier = 2 (because of closure).
So when we call double(5), it returns: ```return 5 * 2;```

## string

A string in JavaScript is a primitive data type that represents text, enclosed in single quotes, double quotes, or backticks. Strings are iterable but immutable, meaning you cannot modify them directly. 

Strings are not objects by default, but when you use object-like features (such as accessing values by index like an array, or calling methods and properties), JavaScript automatically converts them behind the scenes into a temporary String object using autoBoxing.

### autoBoxing

Autoboxing is the process in JavaScript where a primitive value (like a string, number, or boolean) is temporarily converted into an object so that you can use properties or methods on it. Once the operation is done, the temporary object is discarded.

```js
const str = "hello";

console.log(str.length);       // 5
console.log(str.toUpperCase()); // "HELLO"
console.log(str[0]) // h
```

Behind the scenes:

```js
let temp = new String(str); // temporary object
temp.length;               // 5
temp.toUpperCase();        // "HELLO"
temp[0] // h
```
- Here, a temporary string object is created using the new String() keyword. This keyword converts the primitive string into an object so that we can access properties and methods or index.

### why strings are iterable also?

- In JavaScript, an iterable is any object that has a Symbol.iterator method.
- Arrays have Array.prototype[Symbol.iterator].
- Strings also implement String.prototype[Symbol.iterator].

This means you can use for...of, spread syntax, destructuring, etc. directly on strings, just like arrays.

```js
for (const ch of "Hi") {
  console.log(ch);
}
// H
// i
```


### Strings are immutable:

That's mean you can't change characters directly:

```js
let str = "Hello";
str[0] = "Y";
console.log(str); // "Hello" (not "Yello")
```

You must create a new string instead:

```js
let str = "Hello";
let newStr = "Y" + str.slice(1);
console.log(newStr); // "Yello"
```



### Quotes:

JavaScript supports three types of quotes for working with strings.

1.  Single Quotes (''):

```js
const name = 'Tamim';
console.log(name); // Tamim
```

1.  Double Quotes (""):

```js
const language = "JavaScript";
console.log(language); // JavaScript
```

3.  Backticks (``):

Backticks are more powerful than single/double quotes. They were introduced in ES6 (2015) and allow for:

-  Multiline Strings (No need for \n):

```js
const multiline = `This is line 1
This is line 2
This is line 3`;
console.log(multiline);
```

-  Insert Variables Directly:

```js
const name = "Tamim";
const age = 20;

const info = `My name is ${name} and I am ${age} years old.`;
console.log(info);
// My name is Tamim and I am 20 years old.
```

-  Expression Evaluation:

```js
console.log(`5 + 7 = ${5 + 7}`); // 5 + 7 = 12
```

### String Property:

.length is the only string property, and it’s very commonly used.

```js
const str = "JavaScript";
console.log(str.length); // 10
```

### String Methods:

- **Case Conversion:**
    
    ```js
    console.log("hello".toUpperCase()); // "HELLO"
    console.log("WORLD".toLowerCase()); // "world"
    console.log('Interface'[0].toLowerCase()); // 'i'
    ```
    
- **Searching in Strings:**
    
    ```js
    console.log("JavaScript".includes("Script")); // true
    console.log("JavaScript".startsWith("Java")); // true
    console.log("JavaScript".endsWith("Script")); // true
    console.log("hello world".indexOf("world")); // 6
    ```
    
    Note: indexOf() method searches a string for a specific substring and returns the index (position) of the first match of found and -1 if nothing can be found.
    
    syntax:
    
    ```js
    string.indexOf(searchValue, startIndex);
    ```
    
    -  searchValue – the substring to find
    -  startIndex (optional) – where to start the search (default is 0)
    
    ```js
    console.log("banana".indexOf("a"));      // 1 → first "a"
    console.log("banana".indexOf("a", 2));   // 3 → next "a" after index 2
    console.log("banana".indexOf("z"));      // -1 → not found
    ```
    
- **Extracting Part of a String:**
    
    slice(start, end):
    
    The slice() method returns a part of the string, starting from the given start index and ending just before the end index. If the second argument is not provided, the method extracts characters from the start index to the end of the string. Additionally, slice() supports negative values, which count from the end of the string instead of the beginning.
    
    ```js
    const text = "JavaScript";
    
    console.log(text.slice(0, 4));    // "Java" (from index 0 to 3)
    console.log(text.slice(4))        // "Script" (from index 4 to the end)
    console.log(text.slice(-4, -1));  // "rip" (start at the 4th position from the right, end at the 2nd position from the right)
    ```
    
- **Joining and Splitting:**
    
    ```js
    const sentence = "I love JavaScript";
    const words = sentence.split(" "); // ["I", "love", "JavaScript"]
    console.log(words.join("-"));      // "I-love-JavaScript"
    ```
    
- **trim() - for removing white space before and after:**
    
    ```js
    const str = " hello world! ";
    const trimmedStr = str.trim();
    console.log(trimmedStr); // Output: "hello world!"
    ```
    
- **trimStart()/trimEnd() or trimLeft()/trimRight()- for removing white space from specific side:**
    
    ```js
    const str = "          hello world! ";
    console.log(str) // Output: "          hello world! "
    
    const trimmedStr = str.trimStart();
    const trimmedEndStr = str.trimEnd();
    console.log(trimmedStr); // Output: "hello world! "
    console.log(trimmedEndStr); // Output: "          hello world!"
    ```
    
- **Replacing and Repeating:**
    
    ```js
    let str = "purple-color";
    let result = str.replace("-color", "");
    console.log(result); // "purple"
    
    /*
    We replaced "-color" with an empty string"" →  An empty string "" is not " " (a space), or any characters. empty string means nothing.
    
    So we’re left with only "purple".
    */
        
    console.log("I like cats. cats are sweet".replace("cats", "dogs")); // I like dogs. cats are sweet
    console.log("I like cats. cats are sweet".replaceAll('cats', "dogs")); // "I like dogs. dogs are sweet"
    console.log("ha".repeat(3)); // "hahaha"
    ```
    
- **includes, startsWith, endsWith:**
    
    ```js
    const message = "Hello, Tamim!";
    console.log(message.includes("Tamim")); // true
    console.log(message.includes("hello")); // false (case-sensitive)
    
    const greeting = "JavaScript is fun!";
    console.log(greeting.startsWith("Java"));   // true
    console.log(greeting.startsWith("Script")); // false
    console.log(greeting.startsWith("Script", 4)); // true (starts checking from index 4)
    
    const fileName = "report.pdf";
    console.log(fileName.endsWith(".pdf"));  // true
    console.log(fileName.endsWith(".txt"));  // false
    console.log("JavaScript".endsWith("Script", 10)); // true
    console.log("JavaScript".endsWith("Java", 4));    // true
    ```
    
- **concat:**
    
    ```js
    const str1 = "Hello";
    const str2 = "World";
    const result = str1.concat(" ", str2);
    console.log(result); // "Hello World"
    
    const result2 = "I".concat(" love", " JavaScript");
    console.log(result2); // "I love JavaScript"
    ```
    
- **String Reverse:**
    
    ```js
    const sentence = 'hello';
    let reverse = '';
    for (const letter of sentence) {
        reverse = letter + reverse;
    }
    console.log(reverse); // olleh
    
    
    // or using build in methods
    const str = "hello";
    const reversed = str.split("").reverse().join("");
    console.log(reversed); // Output: "olleh"
    
    const split = str.split("");
    console.log(split); // Output: ['h', 'e', 'l', 'l', 'o']
    
    const reversedArray = split.reverse();
    console.log(reversedArray); // Output: ['o', 'l', 'l', 'e', 'h']
    
    const joined = reversedArray.join("");
    console.log(joined); // Output: "olleh"
    ```
    
- **padStart**   
  
    padStart is a string method that ensures a string reaches a certain length by adding characters to the start of the string.
    
    syntax:

    ```js
    str.padStart(targetLength, padString)
    ```

    - targetLength → the final desired length of the string.
    - padString → the character(s) to add at the start (default is space " " if not specified).

    ```js
        let num = "5";
        console.log(num.padStart(3, "0")); // "005"
    ```

    - Original string: "5" (length 1)
    - Target length: 3
    - Pad with "0" at the start until length becomes 3 → "005"

## Objects:

An object is a collection of key-value pairs called properties. where key is a string (also called a “property name”), and value can be anything.

```js
let user = {   
  name: "John",  
  age: 30        
}
```

In the user object, there are two properties:

1.  The first property has the key "name" and the value "John".
2.  The second one has the key "age" and the value 30.

The user object can be imagined as a cabinet with two signed files labeled “name” and “age”:

![object image](images/image4.png)

We can add, remove and read files from it at any time by the using of dot or bracket notation:

```js
let user = {
    name: "John",
    age: 30
}

console.log(user.name); // John
console.log(user.age); // 30
user.location = "USA";
console.log(user.location); // USA
delete user.location;
console.log(user.location); // undefined
```

We can also use multi-word property names, but then they must be quoted and when read the peppery value we need to use bracket notation.

```js
let user = {
    name: "John",
    age: 30,
    "like birds": true,
}
console.log(user["like birds"]); // true
```

In real code, we often use existing variables as values for property names:

```js
function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

let user = makeUser("John", 30);
console.log(user.name); // John
```

In the example above, properties have the same names as variables. so in this case we can use shorthand technique:

```js
function makeUser(name, age) {
    return {
        name,
        age
    };
}

let user = makeUser("John", 30);
console.log(user.name); // John
```

### Different ways to declare an Object

```js
const pen = {
    brand: "Parker",
    color: "blue",
    type: "ballpoint",
    price: 10,
}
console.log(pen);

const pen2 = new Object();
pen2.brand = "Pilot";
pen2.color = "black";
pen2.type = "gel";
pen2.price = 12;
console.log(pen2);

const pen3 = Object.create({});
pen3.brand = "Bic";
pen3.color = "red";
pen3.type = "fountain";
pen3.price = 8;
console.log(pen3);
```

### Dot Notation VS Bracket Notation:

| Situation                                | Dot Notation | Bracket Notation |
| ---------------------------------------- | ------------ | ---------------- |
| Property name has **spaces**             | ❌            | ✅                |
| Property name has **special characters** | ❌            | ✅                |
| Property name starts with a **number**   | ❌            | ✅                |
| Property accessed via **variable**       | ❌            | ✅                |
| Used in a **loop**                       | ❌            | ✅                |
| Key is from **JSON**                     | ❌            | ✅                |
| Nested **dynamic access**                | ❌            | ✅                |

example:

- Property Name Has Spaces:
    
    ```js
    const user = {
      "first name": "Tamim",
      "last name": "Hossain"
    };
    
    console.log(user["first name"]);  //  "Tamim"
    // console.log(user.first name);  //  SyntaxError
    ```
    
- Property Name Starts with a Number:
    
    ```js  
    const errorCodes = {
      "404": "Not Found",
      "500": "Internal Server Error"
    };
    
    console.log(errorCodes["404"]); //  "Not Found"
    // console.log(errorCodes.404); //  SyntaxError
    ```
    
- Property Name Has Special Characters:
    
    ```js
    const config = {
      "api-key": "123abc",
      "user@domain": "admin"
    };
    
    console.log(config["api-key"]);       //  "123abc"
    console.log(config["user@domain"]);   //  "admin"
    // console.log(config.api-key);       //  Error: undefined - interpreted as subtraction
    ```
    
- Accessing Property Using a Variable:
    
    ```js
    const key = "username";
    const user = {
      username: "Tamim"
    };
    
    console.log(user[key]);     //  "Tamim"
    // console.log(user.key);   //  undefined (literally looks for 'key' property)
    ```
    
- Looping Through Object Keys:
    
    ```js
    const scores = {
      Alice: 90,
      Bob: 80,
      Charlie: 85
    };
    
    for (let name in scores) {
      console.log(`${name}: ${scores[name]}`);
    }
    ```
    Note: You must use bracket notation in loops for keys because keys are dynamic.
    
- Working with JSON Data:
    
    ```js
    const jsonData = {
      "user-info": {
        "first name": "Tamim",
        "last name": "Hossain"
      }
    };
    
    console.log(jsonData["user-info"]["first name"]); 
    console.log(user-info.first name) // error
    ```
    
- Nested Dynamic Access:
    
    ```js
    const data = {
      settings: {
        theme: "dark",
        layout: "grid"
      }
    };
    
    const section = "settings";
    const prop = "theme";
    
    console.log(data[section][prop]); //  "dark"
    ```
    

### Object.keys(), Object.Values() and Object.entries() methods:

```js
const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    ssd: '512gb'
};

const keys = Object.keys(computer);
console.log(keys); // [ 'brand', 'price', 'processor', 'ssd' ]

const values = Object.values(computer);
console.log(values); // [ 'lenovo', 35000, 'intel', '512gb' ]

const entries = Object.entries(computer);
console.log(entries);

/*
[
  [ 'brand', 'lenovo' ],
  [ 'price', 35000 ],
  [ 'processor', 'intel' ],
  [ 'ssd', '512gb' ]
]
*/
```

### Object.freeze() vs Object.seal()

**Object.freeze():**

Object.freeze() freezes an object. This means:

-   You cannot add new properties.
-   You cannot delete existing properties.
-   You cannot modify existing property values.
-   The object becomes immutable.

```js
const person = {
    name: "Alice",
    age: 25
};

Object.freeze(person);

person.age = 30;
person.city = "NY";
delete person.name;

console.log(person);
// Output: { name: "Alice", age: 25 }
```

Note:

Object.freeze() only freezes the immediate properties. If object properties are objects themselves, those nested objects can still be mutated unless they are frozen separately.

```js
const user = {
    name: "Bob",
    address: {
        city: "Paris"
    }
};

Object.freeze(user);
user.address.city = "London";

console.log(user.address.city); // "London"

// with deep Freeze
function deepFreeze(obj) {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            deepFreeze(obj[key]);
        }
    });
    return Object.freeze(obj);
}

const deepObj = {
    level1: {
        level2: {
            value: 42
        }
    }
};

deepFreeze(deepObj);
deepObj.level1.level2.value = 100;
console.log(deepObj.level1.level2.value); // 42
```

**Object.seal():**

Object.seal() freezes an object. This means:

-   You cannot add new properties.
-   You cannot delete existing properties.
-   **But you can modify existing property values.**

```js
const car = {
    brand: "Toyota",
    year: 2020
};

Object.seal(car);

car.year = 2022;
car.color = "red";
delete car.brand;

console.log(car);
// { brand: "Toyota", year: 2022 }
```

Note:

Object.seal also doesn’t affect nested objects.

**How to Check if Object is Frozen or Sealed:**

```js
const obj = { a: 1 };

Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true
console.log(Object.isSealed(obj)); // true, because frozen objects are also sealed

const obj2 = { b: 2 };
Object.seal(obj2);
console.log(Object.isFrozen(obj2)); // false
console.log(Object.isSealed(obj2)); // true
```

### Property existence test:

**With in operator:**

```js
let user = {
    name: "John",
    age: 30,
}

console.log("age" in user); // true, user.age exists
console.log("location" in user); // false, user.location doesn't exist
```

**With includes() method:**

```js
const profile = {
    name: "Rahim",
    age: 28,
    city: "Dhaka",
};

const profileKeys = Object.keys(profile);
const hasName = profileKeys.includes("name");
console.log(hasName); // Output: true
```

**With hasOwnProperty() method:**

```js
const profile = {
    name: "Rahim",
    age: 28,
    city: "Dhaka",
};

const hasName = profile.hasOwnProperty("name");
console.log(hasName); // Output: true
```

### The "for..in" loop

```js
let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    console.log(key);  // name, age, isAdmin
    console.log(user[key]); // John, 30, true
}
```

### Objects References and Copying:

One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

That’s easy to understand if we look a bit under the hood of what happens when we copy a value. Let’s start with a primitive, such as a string.  
Here we put a copy of message into phrase:

```js
let message = "Hello!";
let phrase = message;
```

As a result we have two independent variables, each one storing the string "Hello!".

![string copy image](images/image5.png)

A variable doesn’t hold the object directly. It just holds a reference (or pointer) to where the object is stored in memory.

Let’s look at an example of such a variable:

```js
let user = {
  name: "John"
};
```

![object image](images/image6.png)

The object is stored somewhere in memory (at the right of the picture), while the user variable (at the left) has a “reference” to it.

**When an object variable is copied, the reference is copied, but the object itself is not duplicated:**

```js
let user = { name: "John" };

let admin = user; // copy the reference
```

Now we have two variables, each storing a reference to the same object:

![object image](images/image7.png)

As you can see, there’s still one object, but now with two variables that reference it.  
We can use either variable to access the object and modify its contents:

```js
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

console.log(user.name); // 'Pete', 
console.log(admin.name); // 'Pete', 
```

### Const objects can be modified?

An important side effect of storing objects as references is that an object declared as const can be modified.

```js
const user = {
    name: "John"
};

user.name = "Pete";

console.log(user.name); // Pete
```

### Cloning and merging, Object.assign and structuredClone():

So, copying an object variable creates one more reference to the same object.  
But what if we need to duplicate an object?  
We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.  
Like this:

```js
let user = {
    name: "John",
    age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let property in user) {
    clone[property] = user[property];
}

console.log(clone); // { name: "John", age: 30 }
console.log(user); // { name: "John", age: 30 } 

clone.name = "Pete"; // changed the data in it

console.log(user.name); // still John in the original object
console.log(clone.name); // but Pete in the clone

console.log(clone); // { name: "Pete", age: 30 }
console.log(user); // { name: "John", age: 30 }
```

We can also use the method **Object.assign**:

The syntax is:

```js
Object.assign(dest, ...sources)
```

-   The first argument dest is a target object.
-   Further arguments is a list of source objects.

It copies the properties of all source objects into the target dest, and then returns it as the result.

```js
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
console.log(user.name); // John
console.log(user.canView); // true
console.log(user.canEdit); // true
```

We also can use Object.assign to perform a simple object cloning:

```js
let user = {
    name: "John",
    age: 30
};

let clone = Object.assign({}, user);

console.log(clone.name); // John
console.log(clone.age); // 30
```

### Nested cloning:

```js
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);

console.log(user.sizes === clone.sizes); // true, same object

user.sizes.width = 60;   // Modify the original object
console.log(clone.sizes.width); // 60, get the result from the other one
```

To fix that and make user and clone truly separate objects, we should use a cloning loop that examines each value of user [key] and, if it’s an object, then replicate its structure as well. That is called a “structured cloning”.The call **structuredClone(object)** clones the object with all nested properties:

```js
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = structuredClone(user);

console.log(user.sizes === clone.sizes); // false, different objects

user.sizes.width = 60;    // change a property from one place
console.log(clone.sizes.width); // 50, not related
```

### Object Methods

A method is a function that is defined as a property of an object. It represents an action that the object can perform and can access the object’s data using the this keyword.

Example:

```js
let user = {
    name: "Tamim",
    // Method shorthand (recommended)
    sayHello() {
        console.log("Hello, I'm " + this.name);
    },
    // method without shorthand
    sayHi: function () {
        console.log("Hi, I'm " + this.name);
    }
};
user.sayHello(); // Output: Hello, I'm Tamim
user.sayHi(); // Output: Hi, I'm Tamim
```
-   sayHello ia a method of user object
-   It uses this.name to access the object’s own data.

Technically, it’s also possible to access the object without this:

```js
let user = {
    name: "Tamim",
    sayHello() {
        console.log("Hello, I'm " + user.name);
    },

};
user.sayHello(); // Output: Hello, I'm Tamim
```

But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object:

```js
let user = {
    name: "Tamim",
    sayHello() {
        console.log(user.name);
    },
};

let admin = user;
user = null;
admin.sayHello(); // Cannot read properties of null (reading 'sayHello')
```

If we used this.name instead of user.name inside the console, then the code would work:

```js
let user = {
    name: "Tamim",
    sayHello() {
        console.log(this.name);
    },
};

let admin = user;
user = null;
admin.sayHello(); // Tamim
```

### Optional Chaining (?.)

Optional Chaining(?.) is a safe way to access deeply nested properties without getting an error if something is undefined or null.

Without Optional Chaining:

```js
const user = {};
console.log(user.address.city); // error: Cannot read properties of undefined (reading 'city')
```

With Optional Chaining:

```js
const user = {};
console.log(user.address?.city); // undefined
```

if address is undefined or null optional chaining stops accessing .city and returns undefined instead of throwing an error.

we can also use optional chaining for calling method:

```js
const user = {
    sayHi() {
        console.log("Hi!");
    }
};

user.sayHi?.();     // Hi!
user.sayBye?.();    // Nothing happens, no error or undefined
```

### Date:

Date is a built-in object in JavaScript that represents a single moment in time — down to the millisecond. Under the hood, it stores time as the number of milliseconds since January 1, 1970 (UTC) (called the Unix Epoch).

- Current Date & Time:

```js
const now = new Date();
console.log(now); // 2025-07-22T05:57:06.058Z
```

- Get Parts of a Date:

```js
const date = new Date();

console.log(date.getFullYear()); // 2025
console.log(date.getMonth());    // 6 (July) → Month is 0-based
console.log(date.getDate());     // 21
console.log(date.getDay());      // 1 (Monday) → 0 = Sunday
console.log(date.getHours());    // 23
console.log(date.getMinutes());  // 5
console.log(date.getSeconds());  // 30
console.log(date.getMilliseconds()); // 123
```

- Date Formatting (Readable Strings):

```js
const date = new Date();
console.log(date.toString());      // Mon Aug 04 2025 01:14:18 GMT+0600 (Bangladesh Standard Time)
console.log(date.toDateString());  // Mon Aug 04 2025
console.log(date.toTimeString());  // 01:14:18 GMT+0600 (Bangladesh Standard Time)
console.log(date.toISOString());   // ISO format (for JSON, API)
console.log(date.toUTCString());   // 2025-08-03T19:14:18.638Z
console.log(date.toLocaleDateString()); // 8/4/2025
console.log(date.toLocaleTimeString()); // 1:15:24 AM
```



## array 
An array is a special type of object used to store multiple values of different data types in a single variable, organized as an ordered and indexed collection. That’s why arrays use square bracket notation like `arr[0]` to access elements — this syntax actually comes from object property access: `obj[key]`. In arrays, the variable `arr` is the object, and the index numbers are keys.

**Array Declaration:**

```js
let fruits = []
```

**Array Initialization:**

```js
let fruits = ['apple', 'orange', 'plum']
```

**Array Assignment:**

```js
let fruits = ['apple', 'orange', 'plum'];
fruits[2] = 'mango';
console.log(fruits); // [ 'apple', 'orange', 'mango' ]
```

**Get the length of an array using length property:**

```js
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits.length); // 3
```

Since, array are object so it copied by reference, means Assigning an array to another variable does not create a new array. They both point to the same memory address:

```js
let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

console.log(arr === fruits); // true

arr.push("Pear"); // modify the array by reference

console.log(fruits); // [ 'Banana', 'Pear' ] - 2 items now
```

### for..of loop

One of the oldest ways to cycle array items is the for loop over indexes:

```js
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

```js
let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
    console.log(fruit);
}
```

Technically, because arrays are objects, it is also possible to use for..in, but it gives you the keys (like "0", "1", or even custom properties) instead of the actual values.

```js
const fruits = ["apple", "banana", "mango"];
fruits.custom = "extra"; // adding a property to the array

for (const key in fruits) {
    console.log(key); // 0, 1, 2, custom
}
```

### Array Methods

1.  Adding / Removing Elements

    - push/pop and unshift/shift:
    
    | Operation                                        | Method    |
    | ------------------------------------------------ | --------- |
    | Adds element to end and returns the new length   | push()    |
    | Remove the last element and returns the element  | pop()     |
    | Adds element to start and returns the new length | unshift() |
    | Remove the first element and returns the element | shift()   |
    
    ```js
    let fruits = ["Apple", "Orange", "Plum"];
    
    console.log(fruits.push('Mango')) // 4
    console.log(fruits); // [ 'Apple', 'Orange', 'Plum', 'Mango' ]
    console.log(fruits.pop()); // Mango
    console.log(fruits); // [ 'Apple', 'Orange', 'Plum' ]
    
    console.log(fruits.unshift('Mango')) // 4
    console.log(fruits); // [ 'Mango', 'Apple', 'Orange', 'Plum' ]
    console.log(fruits.shift()); // Mango
    console.log(fruits); // [ 'Apple', 'Orange', 'Plum' ]
    ```
    
    #### Why push/pop run fast and unshift/shift are slow?
    
    ![push/pop/unshift/shift](images/image8.png)
    
    push() and pop() are fast because they work at the end of an array, where JavaScript can simply add or remove an item without affecting the positions of other elements.
    
    On the other hand, shift() and unshift() are slow because they work at the beginning of the array. When you remove the first item with shift(), JavaScript has to move every remaining element one position to the left. Similarly, when you use unshift() to add an item to the beginning, all existing elements must shift one position to the right. These shifts take more time and processing, especially when the array is large.
    
    - splice(start, deleteCount, ...items) – Modify array by remove, add, or replace elements and returns removed items:
    
    ```js
    let arr = ["I", "study", "JavaScript"];
    // from index 1 remove 1 element
    console.log(arr.splice(1, 1));  // [ 'study' ]
    console.log(arr); // [ 'I', 'JavaScript' ]
    
    
    let arr2 = ["I", "study", "JavaScript", "right", "now"];
    // remove 3 first elements and replace them with another
    console.log(arr2.splice(0, 3, "Let's", "dance")); // [ 'I', 'study', 'JavaScript' ]
    console.log(arr2) // ["Let's", "dance", "right", "now"]
    
    
    let arr3 = ["I", "study", "JavaScript"];
    // from index 2, delete 0, then insert "complex" and "language"
    console.log(arr3.splice(2, 0, "complex", "language")); // []
    console.log(arr3); // [ 'I', 'study', 'complex', 'language', 'JavaScript' ]
    
    
    let arr4 = [1, 2, 5];
    // from index -1 (one step from the end) delete 0 elements, then insert 3 and 4
    console.log(arr4.splice(-1, 0, 3, 4));[]
    console.log(arr4); // [ 1, 2, 3, 4, 5 ]
    ```
    
    - slice(start, end) – Returns a shallow copy from start to before end, doesn't change original:
    
    ```js
    let arr = ["t", "e", "s", "t"];
    
    console.log(arr.slice(1, 3)); // [ 'e', 's' ]
    console.log(arr); // [ 't', 'e', 's', 't' ]
    console.log(arr.slice(-2)); // [ 's', 't' ]
    console.log(arr.slice()) // [ 't', 'e', 's', 't' ]
    ```
    
    Note:
    - Use splice() when you want to change the original array (remove/insert/replace).
    - Use slice() when you want a copy of part of the array, without changing the original.

2. Searching / Location

   - indexOf(item) – Returns the index of the first match, or -1:
    
    ```js
    let arr = [1, 2, 3];
    
    console.log(arr.indexOf(2)); // 1
    console.log(arr.indexOf(4)); // -1
    ```
    
   - lastIndexOf(item) – Returns the index of the last match, or -1:
    
    ```js
    let arr = [1, 2, 2, 3];
    
    console.log(arr.lastIndexOf(2)); // 2
    console.log(arr.lastIndexOf(5)); // -1
    ```
    
   - includes(item) – Returns true if array contains item, or false:
    
    ```js
    let arr = [1, 2, 3];
    
    console.log(arr.includes(2)); // true
    console.log(arr.includes(5)) // false
    ```
    

3.  Iteration / Transformation

    | Method      | Purpose                                                    | Returns                         | Modifies Original Array |
    | ----------- | ---------------------------------------------------------- | ------------------------------- | ----------------------- |
    | `map()`     | Returns a new array by applying a function to each element | ✅ New array                     | ❌ No                    |
    | `forEach()` | Executes a function for each element; no return value      | ❌ No return                     | ❌ No                    |
    | `filter()`  | Filters elements based on a condition                      | ✅ New filtered array            | ❌ No                    |
    | `find()`    | Finds the **first** element that matches a condition       | ✅ Single element or `undefined` | ❌ No                    |

    - forEach(callback) – Executes a function for each element; no return value:
    
    ```js
    let arr = [1, 2, 3]
    arr.forEach(n => console.log(n * 2)); // 2 4 6       
    ```
    
    ```js
    const products = [
        { id: 1, name: "iPhone", color: "golden", price: 1200, brand: "apple" },
        { id: 2, name: "Galaxy S23", color: "black", price: 1000, brand: "samsung" },
        { id: 3, name: "Pixel 8", color: "white", price: 900, brand: "google" },
        { id: 4, name: "OnePlus 11", color: "green", price: 800, brand: "oneplus" },
        { id: 5, name: "Xperia 5", color: "blue", price: 950, brand: "sony" }
    ]
    
    products.forEach(product => console.log(product))
    
    /*
        { id: 1, name: "iPhone", color: "golden", price: 1200, brand: "apple" },
        { id: 2, name: "Galaxy S23", color: "black", price: 1000, brand: "samsung" },
        { id: 3, name: "Pixel 8", color: "white", price: 900, brand: "google" },
        { id: 4, name: "OnePlus 11", color: "green", price: 800, brand: "oneplus" },
        { id: 5, name: "Xperia 5", color: "blue", price: 950, brand: "sony" }
    */
    ```
    
    - map(callback) – return a new array by applying function to each element:
    
    ```js
    let arr = [1, 2, 3]
    let arr2 = arr.map(n => n * 2);
    console.log(arr) // [ 1, 2, 3 ]
    console.log(arr2) // [ 2, 4, 6 ]
    ```
    
    ```js
    // using map for just printf (not recommended)
    const numbers = [1, 2, 3, 4, 5];
    
    const newNumber = numbers.map(number => console.log(number))
    
    console.log(newNumber) // [ undefined, undefined, undefined, undefined, undefined ]
    ```
    
    ```js
    // using map for both element and index
    const names = ["tamim", "nasrin", "maria"];
    
    const newNames = names.map((element, index) => console.log(element, index))
    
    /*
    tamim 0
    nasrin 1
    maria 2
     */
    ```
    
    ```js
    const products = [
        { id: 1, name: "iPhone", color: "golden", price: 1200, brand: "apple" },
        { id: 2, name: "Galaxy S23", color: "black", price: 1000, brand: "samsung" },
        { id: 3, name: "Pixel 8", color: "white", price: 900, brand: "google" },
        { id: 4, name: "OnePlus 11", color: "green", price: 800, brand: "oneplus" },
        { id: 5, name: "Xperia 5", color: "blue", price: 950, brand: "sony" }
    ]
    
    const productNames = products.map(product => product.name);
    console.log(productNames)
    
    // [ 'iPhone', 'Galaxy S23', 'Pixel 8', 'OnePlus 11', 'Xperia 5' ]
    ```
    
    - filter(callback) – return a new array with elements that pass the test:
    
    ```js
    let arr = [1, 2, 3, 4]
    let arr2 = arr.filter(n => n % 2 === 0);
    console.log(arr) // [ 1, 2, 3, 4 ]
    console.log(arr2) // [ 2, 4 ]
    ```
    
    ```js
    const products = [
        { id: 1, name: "iPhone", color: "golden", price: 1200, brand: "apple" },
        { id: 2, name: "Galaxy S23", color: "black", price: 1000, brand: "samsung" },
        { id: 3, name: "Pixel 8", color: "white", price: 900, brand: "google" },
        { id: 4, name: "OnePlus 11", color: "green", price: 800, brand: "oneplus" },
        { id: 5, name: "Xperia 5", color: "blue", price: 950, brand: "sony" }
    ]
    
    const filterProducts = products.filter(product => product.price >= 1000)
    console.log(filterProducts);
    
    /*
        { id: 1, name: "iPhone", color: "golden", price: 1200, brand: "apple" },
        { id: 2, name: "Galaxy S23", color: "black", price: 1000, brand: "samsung" },
    */
    
    const expensiveProducts = products.filter(product => product.price >= 5000);
    console.log(expensiveProducts); // []
    ```
    
    - find(callback) – Returns the first element that matches:
    
    ```js
    
    let arr = [1, 2, 3, 4, 5];
    const result = arr.find(n => n > 2);
    console.log(result); // 3
    ```
    
    ```js
    const products = [
        { id: 1, name: "iPhone", color: "golden", price: 1200, brand: "apple" },
        { id: 2, name: "Galaxy S23", color: "black", price: 1000, brand: "samsung" },
        { id: 3, name: "Pixel 8", color: "white", price: 900, brand: "google" },
        { id: 4, name: "OnePlus 11", color: "green", price: 800, brand: "oneplus" },
        { id: 5, name: "Xperia 5", color: "blue", price: 950, brand: "sony" }
    ]
    
    const foundProduct = products.find(product => product.brand === "apple");
    console.log(foundProduct)
    
    /*
        { id: 1, name: "iPhone", color: "golden", price: 1200, brand: "apple" },
    */
    
    const foundColor = products.find(product => product.color === "pink");
    console.log(foundColor) // undefined
    ```
    
    - findIndex(callback) – Returns the index of the first element that matches:
    
    ```js
    let arr = [1, 2, 3, 4, 5];
    const result = arr.findIndex(n => n > 2);
    console.log(result); // 2
    ```
    
    - reduce()– Reduces array to a single value:
    
    Syntax:
    
    ```js
    reduce((accumulator, currentValue) => ..., initialValue);
    ```
    
    ```js
    const numbers = [1, 2, 3, 4];
    
    // without reduce method
    
    let acc = 0;
    for (let i = 0; i < numbers.length; i++) {
        acc = acc + numbers[i];
    }
    console.log(acc); // Output: 10
    
    // with reduce method
    
    const result = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(result); // Output: 10
    ```
    
    Here,
    
    -   accumulator = keeps the result
    -   0 = The staring value of accumulator
    -   currentValue = the current element of the array
    
    ![reduce](images/reduce.png)

4.  Reordering / Combining

    - concat(...arrays) – Returns a new array by merging arrays/values:
    
    ```js
    let arr = [1, 2];
    const arr2 = arr.concat([3, 4], 5);
    console.log(arr); // [ 1, 2 ]
    console.log(arr2); // [ 1, 2, 3, 4, 5 ]
    ```
    
    - join(separator) – Returns a string by joining array elements using the given separator:
    
    ```js
    let arr = ["a", "b", "c"];
    let arr2 = arr.join("-");
    console.log(arr); // [ 'a', 'b', 'c' ]
    console.log(arr2); // a-b-c
    
    const arr = ['Hello', 'World'];
    let arr3 = arr.join(" ");
    console.log(arr); // ['Hello', 'World']
    console.log(arr3); // Hello World
    ```
    
    - split(separator) – Splits a string into an array using the given separator:
    
    ```js
    let str = "a-b-c";
    let result = str.split("-");
    console.log(str);    // "a-b-c"
    console.log(result); // [ 'a', 'b', 'c' ]
    
    const str = 'Hello World';
    let arr2 = str.split(" ");
    console.log(str); // Hello World
    console.log(arr2); // ['Hello', 'World']
    ```
    
    **Note:** join used on arrays to convert them into a string and split used on strings to convert them a array.
    
    - reverse() – Reverses the array:
    
    ```js
    let arr = [1, 2, 3];
    console.log(arr.reverse()) // [ 3, 2, 1 ]
    ```
    
    - sort – return a new sorted array:
    
    ```js
    let arr = [3, 1, 2];
    console.log(arr.sort())  // default lexicographic: [1,2,3]
    
    // but in this case default sort fails:
    let arr2 = [1, 2, 15];
    console.log(arr2.sort()) // [ 1, 15, 2 ]
    ```
    
    The order became 1, 15, 2. Incorrect. But why?
    
    In JavaScript, the default behavior of sort() is lexicographic (dictionary-like) sorting. This means:
    
    -   It converts elements to strings.
    -   Then it compares those strings using Unicode (UTF-16) code unit values.
    thats why, "1" vs "2" → "1" comes first "2" vs "15" → "1" comes before "2" so "15" comes before "2" So the result becomes: [1, 15, 2]
    
    To fix it, we need to use a custom compare function to sort it by js sort() method. js sort() method used this custom function internally to determine the correct sorting.
    
    ```js
    let arr2 = [1, 2, 15];
    console.log(arr2.sort((a, b) => a - b)); // [1, 2, 15]
    ```
    
    How it works:
    
    `(a, b) => a - b this function returns:`
    -   Negative number (a - b < 0) → keep a before b
    -   Positive number (a - b > 0) → place b before a
    -   Zero (a - b === 0) → leave a and b unchanged

5.   Others

     - some() –Return true if any element passes the test, else false:
    
    ```js
    let arr = [1, 2, 3];
    const arr2 = arr.some(n => n > 2);
    console.log(arr2) // true
    ```
    
     - every() –Return true if all element passes the test, else false:
    
    ```js
    let arr = [1, 2, 3];
    const arr2 = arr.every(n => n > 2);
    console.log(arr2) // false
    ```
    

     - at(index) – Returns element at index; supports negative indexing:
    
    ```js
    // With at method
    let fruits = ["Apple", "Orange", "Plum"];
    
    console.log(fruits.at(-1)); // Plum
    
    // without at method
    let fruits = ["Apple", "Orange", "Plum"];
    console.log(fruits[fruits.length - 1]); // Plum
    ```
    

    - Array.isArray(value) – Return true if value is an array, else false:
    
    ```js
    
    const arr = [1, 2]
    const result = Array.isArray(arr);
    console.log(result) // true       
    ```
    
    - fill(value, start?, end?) – Fills array with value:
    
    ```js
    const arr = [1, 2, 3]
    arr.fill(0, 1);
    console.log(arr) // [ 1, 0, 0 ]
    ```
    
    - flat(depth): Returns a new array after concatenating all the nested arrays up to the given depth:
    
    ```js
    // Default depth (1)
    
    const arr = [1, 2, [3, 4]];
    const flatArr = arr.flat();
    console.log(flatArr); // Output: [1, 2, 3, 4]
    
    // Deeper nesting with depth = 2
    
    const arr = [1, 2, [3, 4, [5, 6]]];
    const flatArr = arr.flat(2);
    console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6]
    
    // Infinite depth (Infinity)
    
    const arr = [1, [2, [3, [4]]]];
    const flatArr = arr.flat(Infinity);
    console.log(flatArr); // Output: [1, 2, 3, 4]
    ```

## Destructuring

Destructuring means breaking apart arrays or objects and assigning their values to variables in a clean and short way.

### Array Destructuring
    
Basic Syntax:

```js
const arr = [1, 2, 3];

const [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

Skip Items:

```js
const colors = ["red", "green", "blue"];

const [first, , third] = colors;

console.log(first); // red
console.log(third); // blue
```

Default Values:

```js
const arr = [10];

const [x, y = 100] = arr;

console.log(x); // 10
console.log(y); // 100
```Swap Variables :

```js
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
```

rest Operator (...):

```js
const nums = [1, 2, 3, 4];

const [first, ...rest] = nums;

console.log(first); // 1
console.log(rest);  // [2, 3, 4]
```

### Object Destructuring
    

Basic Syntax:

```js
const person = {
  name: "Tamim",
  age: 21
};

const { name, age } = person;

console.log(name); // Tamim
console.log(age);  // 21
```

Rename Variables:

```js
const person = {
  name: "Tamim",
  age: 21
};

const { name: fullName, age: years } = person;

console.log(fullName); // Tamim
console.log(years);    // 21
```

Default Values:

```js
const person = {
  name: "Tamim"
};

const { name, age = 20 } = person;

console.log(name); // Tamim
console.log(age);  // 20
```

Nested Destructuring:

```js
const user = {
  id: 1,
  profile: {
    username: "tamim",
    email: "tamim@example.com"
  }
};

const {
  profile: { username, email }
} = user;

console.log(username); // tamim
```

Rest Operator in Object:

```js
const user = {
  name: "Tamim",
  age: 21,
  country: "BD"
};

const { name, ...others } = user;

console.log(name);   // Tamim
console.log(others); // { age: 21, country: "BD" }
```

### Destructuring in Function Parameters
    

Array Parameters:

```js
function greet([first, second]) {
    console.log("Hello", first, second);
}
greet(["Tamim", "Ahmed"]); // Hello Tamim Ahmed
```

Object Parameters:

```js
function displayUser({ name, age }) {
    console.log(`${name} is ${age} years old.`);
}

displayUser({ name: "Tamim", age: 21 }); // Tamim is 21 years old.
```

## set
A Set in JavaScript is a collection of unique values (no duplicates allowed).

- Stores unique values
- Methods: add, delete, has, clear
- Iteration: for...of, forEach
- Use cases: remove duplicates, track unique items

### creating a set

```js
// Create an empty Set
const mySet = new Set();

// Create a Set with initial values
const numbers = new Set([1, 2, 3, 4, 4, 5]); // duplicates ignored

console.log(numbers); // Set(5) {1, 2, 3, 4, 5}
```

### Adding & Removing Values

```js
const fruits = new Set();

fruits.add("Apple");
fruits.add("Banana");
fruits.add("Apple"); // ignored, already exists

console.log(fruits); // Set(2) {"Apple", "Banana"}

// Remove a value
fruits.delete("Banana");
console.log(fruits); // Set(1) {"Apple"}

// Clear all values
fruits.clear();
console.log(fruits); // Set(0) {}
```

### Checking & Size

```js
const letters = new Set(["a", "b", "c"]);

console.log(letters.has("b")); // true
console.log(letters.has("z")); // false

console.log(letters.size); // 3
```

### Iterating Over a Set

```js
const colors = new Set(["red", "green", "blue"]);

// Using for...of
for (let color of colors) {
  console.log(color);
}

// Using forEach
colors.forEach((value) => {
  console.log(value);
});
```

### Convert Set ↔ Array

```js
const nums = [1, 2, 2, 3, 4, 4];
const uniqueNums = new Set(nums); // remove duplicates
console.log(uniqueNums); // Set {1, 2, 3, 4}

// Convert back to array
const uniqueArray = [...uniqueNums];
console.log(uniqueArray); // [1, 2, 3, 4]
```



## map
A Map in JavaScript is a collection of key-value pairs.

- Stores key-value pairs
- Unlike objects(keys must be Strings or Symbols only), her keys can be any type.
- Methods: set, get, delete, has, clear
- Iteration: for...of, forEach
- Use cases: frequency count, caching, dictionary-like storage

### Creating a Map

```js
// Empty Map
const myMap = new Map();

// Map with initial key-value pairs
const user = new Map([
  ["name", "Alice"],
  ["age", 25]
]);

console.log(user); // Map(2) {"name" => "Alice", "age" => 25}
```

### Adding & Updating Values

```js
const student = new Map();

student.set("name", "Bob");
student.set("age", 21);

// Update existing key
student.set("age", 22);

console.log(student);
// Map(2) {"name" => "Bob", "age" => 22}
```

### Getting & Checking Values

```js
console.log(student.get("name")); // Bob
console.log(student.has("age"));  // true
console.log(student.has("roll")); // false

console.log(student.size); // 2
```

### Deleting & Clearing

```js
student.delete("age");
console.log(student); // Map(1) {"name" => "Bob"}

student.clear();
console.log(student); // Map(0) {}
```

### Iterating Over a Map

```js
const person = new Map([
  ["name", "Alice"],
  ["age", 25],
  ["city", "New York"]
]);

// for...of
for (let [key, value] of person) {
  console.log(`${key}: ${value}`);
}

// forEach
person.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```













##  OPP in js

Object-Oriented Programming is a programming paradigm based on the concept of "objects" that contain properties and methods. JavaScript supports OOP through prototypes and, since ES6, through classes.

### Object and properties
#### creating objects
##### using general object literal syntax

```jss
const person = {
    name: "John",
    age: 30,
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

console.log(person.name); // "John"
console.log(person.greet()); // "Hello, I'm John"
```
##### Using Object Constructor

```js
const person = new Object();
person.name = "John";
person.age = 30;
person.greet = function() {
    return `Hello, I'm ${this.name}`;
};

console.log(person.name); // "John"
console.log(person.greet()); // "Hello, I'm John"
```

##### Using Object.create()

```js
const personPrototype = {
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

const person = Object.create(personPrototype);
person.name = "John";
person.age = 30;

console.log(person.name); // "John"
console.log(person.greet()); // "Hello, I'm John"
```
#### Properties
##### Property Access

```js
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

// Dot notation
console.log(car.brand); // "Toyota"

// Bracket notation
console.log(car["model"]); // "Corolla"

// Dynamic property access
const property = "year";
console.log(car[property]); // 2020
```

##### Property Descriptors

```js
const obj = {};

Object.defineProperty(obj, 'name', {
    value: 'John',
    writable: true,      // Can be changed
    enumerable: true,    // Shows up in for...in loops
    configurable: true   // Can be deleted or reconfigured
});

// Check property descriptor
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
```

### Constructor Functions
Constructor functions are the traditional way to create objects in JavaScript before ES6 classes.

#### Basic Constructor Function

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.greet()); // "Hello, I'm Alice"
console.log(person2.greet()); // "Hello, I'm Bob"
```

#### Adding Methods to Prototype

```js
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Add methods to prototype (more memory efficient)
Car.prototype.getInfo = function() {
    return `${this.year} ${this.brand} ${this.model}`;
};

Car.prototype.start = function() {
    return `${this.brand} ${this.model} is starting...`;
};

const myCar = new Car("Honda", "Civic", 2021);
console.log(myCar.getInfo()); // "2021 Honda Civic"
console.log(myCar.start()); // "Honda Civic is starting..."
```

#### Constructor Function vs Regular Function

```js
function Person(name) {
    this.name = name;
}

// Called as constructor
const person = new Person("John");
console.log(person.name); // "John"

// Called as regular function (problematic)
const result = Person("Jane");
console.log(result); // undefined
console.log(window.name); // "Jane" (in browser) - pollutes global scope
```

### ES6 Classes
ES6 introduced class syntax, which is syntactic sugar over prototype-based inheritance.

#### Basic Class Syntax

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    getAge() {
        return this.age;
    }
    
    // Static method
    static species() {
        return "Homo sapiens";
    }
}

const person = new Person("Alice", 25);
console.log(person.greet()); // "Hello, I'm Alice"
console.log(Person.species()); // "Homo sapiens"
```

#### Class Expressions

```js
// Named class expression
const Person = class PersonClass {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

// Anonymous class expression
const Animal = class {
    constructor(species) {
        this.species = species;
    }
};
```

#### Getters and Setters

```js
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    
    get width() {
        return this._width;
    }
    
    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            throw new Error("Width must be positive");
        }
    }
    
    get area() {
        return this._width * this._height;
    }
}

const rect = new Rectangle(5, 3);
console.log(rect.area); // 15
rect.width = 10;
console.log(rect.area); // 30
```


### The Four Pillars of OOP

####  Encapsulation
Encapsulation is about bundling data and methods together and restricting access to internal details.

##### Private Fields (ES2022)

```js
class BankAccount {
    #balance = 0; // Private field
    #accountNumber; // Private field
    
    constructor(accountNumber, initialBalance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return this.#balance;
        }
        throw new Error("Amount must be positive");
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return this.#balance;
        }
        throw new Error("Invalid withdrawal amount");
    }
    
    getBalance() {
        return this.#balance;
    }
    
    // Private method
    #validateAmount(amount) {
        return amount > 0;
    }
}

const account = new BankAccount("123456", 1000);
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
```

##### Traditional Encapsulation (Using Closures)

```js
function createBankAccount(initialBalance = 0) {
    let balance = initialBalance;
    
    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return balance;
            }
            throw new Error("Amount must be positive");
        },
        
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return balance;
            }
            throw new Error("Invalid withdrawal amount");
        },
        
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);
console.log(account.getBalance()); // 1000
```

####  Inheritance
Inheritance allows classes to inherit properties and methods from other classes.

##### Class Inheritance

```js
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    makeSound() {
        return "Some generic animal sound";
    }
    
    getInfo() {
        return `${this.name} is a ${this.species}`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog"); // Call parent constructor
        this.breed = breed;
    }
    
    makeSound() {
        return "Woof! Woof!";
    }
    
    fetch() {
        return `${this.name} is fetching the ball!`;
    }
}

class Cat extends Animal {
    constructor(name, breed) {
        super(name, "Cat");
        this.breed = breed;
    }
    
    makeSound() {
        return "Meow!";
    }
    
    climb() {
        return `${this.name} is climbing a tree!`;
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers", "Persian");

console.log(dog.getInfo()); // "Buddy is a Dog"
console.log(dog.makeSound()); // "Woof! Woof!"
console.log(dog.fetch()); // "Buddy is fetching the ball!"

console.log(cat.makeSound()); // "Meow!"
console.log(cat.climb()); // "Whiskers is climbing a tree!"
```

##### Prototype-based Inheritance

```js
function Animal(name, species) {
    this.name = name;
    this.species = species;
}

Animal.prototype.makeSound = function() {
    return "Some generic animal sound";
};

Animal.prototype.getInfo = function() {
    return `${this.name} is a ${this.species}`;
};

function Dog(name, breed) {
    Animal.call(this, name, "Dog"); // Call parent constructor
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function() {
    return "Woof! Woof!";
};

Dog.prototype.fetch = function() {
    return `${this.name} is fetching the ball!`;
};

const dog = new Dog("Max", "Labrador");
console.log(dog.getInfo()); // "Max is a Dog"
console.log(dog.makeSound()); // "Woof! Woof!"
```

####  Polymorphism
Polymorphism allows objects of different types to be treated as instances of the same type.

```js
class Shape {
    constructor(name) {
        this.name = name;
    }
    
    area() {
        throw new Error("Area method must be implemented");
    }
    
    perimeter() {
        throw new Error("Perimeter method must be implemented");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius ** 2;
    }
    
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
    
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super("Triangle");
        this.a = a;
        this.b = b;
        this.c = c;
    }
    
    area() {
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    
    perimeter() {
        return this.a + this.b + this.c;
    }
}

// Polymorphism in action
const shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
];

shapes.forEach(shape => {
    console.log(`${shape.name}: Area = ${shape.area().toFixed(2)}, Perimeter = ${shape.perimeter().toFixed(2)}`);
});
```

####  Abstraction
Abstraction hides complex implementation details and shows only essential features.

```js
// Abstract class (by convention - JS doesn't have true abstract classes)
class Vehicle {
    constructor(make, model) {
        if (this.constructor === Vehicle) {
            throw new Error("Cannot instantiate abstract class Vehicle");
        }
        this.make = make;
        this.model = model;
    }
    
    // Abstract methods (must be implemented by subclasses)
    start() {
        throw new Error("start() method must be implemented");
    }
    
    stop() {
        throw new Error("stop() method must be implemented");
    }
    
    // Concrete method
    getInfo() {
        return `${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, doors) {
        super(make, model);
        this.doors = doors;
    }
    
    start() {
        return `${this.getInfo()} car is starting with ignition`;
    }
    
    stop() {
        return `${this.getInfo()} car is stopping`;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, engineSize) {
        super(make, model);
        this.engineSize = engineSize;
    }
    
    start() {
        return `${this.getInfo()} motorcycle is starting with kick/button`;
    }
    
    stop() {
        return `${this.getInfo()} motorcycle is stopping`;
    }
}

const car = new Car("Honda", "Civic", 4);
const bike = new Motorcycle("Yamaha", "R1", "1000cc");

console.log(car.start()); // "Honda Civic car is starting with ignition"
console.log(bike.start()); // "Yamaha R1 motorcycle is starting with kick/button"
```

### Prototypes and Inheritance

#### Understanding Prototypes

```js
// Every function has a prototype property
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

console.log(person1.greet()); // "Hello, I'm Alice"
console.log(person1.__proto__ === Person.prototype); // true
console.log(person1.constructor === Person); // true
```

#### Prototype Chain

```js
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    return `${this.name} is eating`;
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

// Create prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    return `${this.name} is barking`;
};

const dog = new Dog("Buddy", "Golden Retriever");

console.log(dog.eat()); // "Buddy is eating" (inherited from Animal)
console.log(dog.bark()); // "Buddy is barking" (own method)

// Prototype chain: dog -> Dog.prototype -> Animal.prototype -> Object.prototype -> null
```

#### Modern Prototype Methods

```js
// Object.create()
const animalPrototype = {
    eat() {
        return `${this.name} is eating`;
    },
    sleep() {
        return `${this.name} is sleeping`;
    }
};

const dog = Object.create(animalPrototype);
dog.name = "Buddy";
dog.bark = function() {
    return `${this.name} is barking`;
};

// Object.setPrototypeOf() (not recommended for performance)
const cat = { name: "Whiskers" };
Object.setPrototypeOf(cat, animalPrototype);

// Object.getPrototypeOf()
console.log(Object.getPrototypeOf(dog) === animalPrototype); // true
```


### Advanced OOP Concepts

```js
// Mixin pattern - adding functionality to classes
const Flyable = {
    fly() {
        return `${this.name} is flying`;
    },
    land() {
        return `${this.name} is landing`;
    }
};

const Swimmable = {
    swim() {
        return `${this.name} is swimming`;
    },
    dive() {
        return `${this.name} is diving`;
    }
};

class Bird {
    constructor(name) {
        this.name = name;
    }
}

class Fish {
    constructor(name) {
        this.name = name;
    }
}

class Duck {
    constructor(name) {
        this.name = name;
    }
}

// Apply mixins
Object.assign(Bird.prototype, Flyable);
Object.assign(Fish.prototype, Swimmable);
Object.assign(Duck.prototype, Flyable, Swimmable);

const eagle = new Bird("Eagle");
const shark = new Fish("Shark");
const duck = new Duck("Donald");

console.log(eagle.fly()); // "Eagle is flying"
console.log(shark.swim()); // "Shark is swimming"
console.log(duck.fly()); // "Donald is flying"
console.log(duck.swim()); // "Donald is swimming"
```

#### Composition over Inheritance

```js
// Composition approach
class Engine {
    constructor(horsepower) {
        this.horsepower = horsepower;
    }
    
    start() {
        return "Engine started";
    }
    
    stop() {
        return "Engine stopped";
    }
}

class GPS {
    navigate(destination) {
        return `Navigating to ${destination}`;
    }
}

class Car {
    constructor(make, model, horsepower) {
        this.make = make;
        this.model = model;
        this.engine = new Engine(horsepower); // Composition
        this.gps = new GPS(); // Composition
    }
    
    start() {
        return this.engine.start();
    }
    
    navigateTo(destination) {
        return this.gps.navigate(destination);
    }
    
    getInfo() {
        return `${this.make} ${this.model} with ${this.engine.horsepower}HP engine`;
    }
}

const car = new Car("Toyota", "Camry", 200);
console.log(car.start()); // "Engine started"
console.log(car.navigateTo("Home")); // "Navigating to Home"
```

#### Method Chaining

```js
class Calculator {
    constructor(value = 0) {
        this.value = value;
    }
    
    add(num) {
        this.value += num;
        return this; // Return this for chaining
    }
    
    subtract(num) {
        this.value -= num;
        return this;
    }
    
    multiply(num) {
        this.value *= num;
        return this;
    }
    
    divide(num) {
        if (num !== 0) {
            this.value /= num;
        }
        return this;
    }
    
    result() {
        return this.value;
    }
    
    reset() {
        this.value = 0;
        return this;
    }
}

const calc = new Calculator(10);
const result = calc
    .add(5)      // 15
    .multiply(2) // 30
    .subtract(5) // 25
    .divide(5)   // 5
    .result();   // 5

console.log(result); // 5
```

#### Factory Pattern

```js
class Car {
    constructor(make, model, type) {
        this.make = make;
        this.model = model;
        this.type = type;
    }
    
    getInfo() {
        return `${this.make} ${this.model} (${this.type})`;
    }
}

class CarFactory {
    static createCar(type, make, model) {
        switch (type.toLowerCase()) {
            case 'sedan':
                return new Car(make, model, 'Sedan');
            case 'suv':
                return new Car(make, model, 'SUV');
            case 'hatchback':
                return new Car(make, model, 'Hatchback');
            default:
                throw new Error(`Unknown car type: ${type}`);
        }
    }
}

const sedan = CarFactory.createCar('sedan', 'Honda', 'Civic');
const suv = CarFactory.createCar('suv', 'Toyota', 'RAV4');

console.log(sedan.getInfo()); // "Honda Civic (Sedan)"
console.log(suv.getInfo()); // "Toyota RAV4 (SUV)"
```

### Design Patterns

#### Singleton Pattern

```js
class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        
        this.connection = "Connected to database";
        Database.instance = this;
    }
    
    query(sql) {
        return `Executing: ${sql}`;
    }
    
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const db1 = new Database();
const db2 = new Database();
const db3 = Database.getInstance();

console.log(db1 === db2); // true
console.log(db1 === db3); // true
```

#### Observer Pattern

```js
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    
    off(event, listenerToRemove) {
        if (!this.events[event]) return;
        
        this.events[event] = this.events[event].filter(
            listener => listener !== listenerToRemove
        );
    }
    
    emit(event, data) {
        if (!this.events[event]) return;
        
        this.events[event].forEach(listener => listener(data));
    }
}

class NewsAgency extends EventEmitter {
    constructor() {
        super();
        this.news = "";
    }
    
    setNews(news) {
        this.news = news;
        this.emit('news', news);
    }
}

class NewsChannel {
    constructor(name) {
        this.name = name;
    }
    
    update(news) {
        console.log(`${this.name} received news: ${news}`);
    }
}

const agency = new NewsAgency();
const cnn = new NewsChannel("CNN");
const bbc = new NewsChannel("BBC");

agency.on('news', (news) => cnn.update(news));
agency.on('news', (news) => bbc.update(news));

agency.setNews("Breaking: Major scientific discovery!");
```

#### Strategy Pattern

```js
class PaymentStrategy {
    pay(amount) {
        throw new Error("pay method must be implemented");
    }
}

class CreditCardPayment extends PaymentStrategy {
    constructor(cardNumber, cvv) {
        super();
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }
    
    pay(amount) {
        return `Paid $${amount} using Credit Card ending in ${this.cardNumber.slice(-4)}`;
    }
}

class PayPalPayment extends PaymentStrategy {
    constructor(email) {
        super();
        this.email = email;
    }
    
    pay(amount) {
        return `Paid $${amount} using PayPal account ${this.email}`;
    }
}

class CryptoPayment extends PaymentStrategy {
    constructor(walletAddress) {
        super();
        this.walletAddress = walletAddress;
    }
    
    pay(amount) {
        return `Paid $${amount} using Crypto wallet ${this.walletAddress.slice(0, 10)}...`;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
        this.paymentStrategy = null;
    }
    
    addItem(item, price) {
        this.items.push({ item, price });
    }
    
    setPaymentStrategy(strategy) {
        this.paymentStrategy = strategy;
    }
    
    checkout() {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        return this.paymentStrategy.pay(total);
    }
}

const cart = new ShoppingCart();
cart.addItem("Laptop", 999);
cart.addItem("Mouse", 25);

// Pay with credit card
cart.setPaymentStrategy(new CreditCardPayment("1234567890123456", "123"));
console.log(cart.checkout()); // "Paid $1024 using Credit Card ending in 3456"

// Pay with PayPal
cart.setPaymentStrategy(new PayPalPayment("user@example.com"));
console.log(cart.checkout()); // "Paid $1024 using PayPal account user@example.com"
```

### Best Practices

#### Use Meaningful Names

```js
// Bad
class P {
    constructor(n, a) {
        this.n = n;
        this.a = a;
    }
    
    g() {
        return `${this.n} is ${this.a} years old`;
    }
}

// Good
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}
```

####  Follow Single Responsibility Principle

```js
// Bad - Class doing too many things
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    save() {
        // Save user to database
        console.log("Saving user to database");
    }
    
    sendEmail() {
        // Send email to user
        console.log("Sending email");
    }
    
    validateEmail() {
        // Validate email format
        return /\S+@\S+\.\S+/.test(this.email);
    }
    
    hashPassword(password) {
        // Hash password
        return "hashed_" + password;
    }
}

// Good - Separated responsibilities
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    getInfo() {
        return `${this.name} (${this.email})`;
    }
}

class UserRepository {
    save(user) {
        console.log("Saving user to database");
    }
    
    findByEmail(email) {
        // Find user by email
    }
}

class EmailService {
    send(user, message) {
        console.log(`Sending email to ${user.email}`);
    }
}

class EmailValidator {
    static validate(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
}

class PasswordService {
    static hash(password) {
        return "hashed_" + password;
    }
}
```

###### Use Composition When Appropriate

```js
// Instead of deep inheritance hierarchies, use composition
class Engine {
    constructor(type, horsepower) {
        this.type = type;
        this.horsepower = horsepower;
    }
    
    start() {
        return `${this.type} engine started`;
    }
}

class Transmission {
    constructor(type) {
        this.type = type;
    }
    
    shift(gear) {
        return `Shifted to ${gear} gear`;
    }
}

class Vehicle {
    constructor(make, model, engine, transmission) {
        this.make = make;
        this.model = model;
        this.engine = engine;
        this.transmission = transmission;
    }
    
    start() {
        return this.engine.start();
    }
    
    shift(gear) {
        return this.transmission.shift(gear);
    }
}

const v6Engine = new Engine("V6", 280);
const automaticTrans = new Transmission("Automatic");
const car = new Vehicle("Honda", "Accord", v6Engine, automaticTrans);
```

#### Use Private Members for Internal State

```js
class Counter {
    #count = 0; // Private field
    #maxCount; // Private field
    
    constructor(maxCount = 100) {
        this.#maxCount = maxCount;
    }
    
    increment() {
        if (this.#count < this.#maxCount) {
            this.#count++;
        }
        return this;
    }
    
    decrement() {
        if (this.#count > 0) {
            this.#count--;
        }
        return this;
    }
    
    get value() {
        return this.#count;
    }
    
    // Private method
    #validate() {
        return this.#count >= 0 && this.#count <= this.#maxCount;
    }
}
```

###  Examples

#### E-commerce System

```js
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    
    getInfo() {
        return `${this.name} - $${this.price} (${this.category})`;
    }
}

class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new CartItem(product, quantity));
        }
    }
    
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }
    
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.product.id === productId);
        if (item) {
            item.quantity = quantity;
        }
    }
    
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
    
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }
    
    clear() {
        this.items = [];
    }
    
    getItems() {
        return [...this.items]; // Return copy to prevent external modification
    }
}

class Customer {
    constructor(id, name, email, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.orderHistory = [];
    }
    
    addOrder(order) {
        this.orderHistory.push(order);
    }
    
    getOrderHistory() {
        return [...this.orderHistory];
    }
}

class Order {
    constructor(customer, cart) {
        this.id = Date.now(); // Simple ID generation
        this.customer = customer;
        this.items = cart.getItems();
        this.totalAmount = cart.getTotalPrice();
        this.status = 'pending';
        this.orderDate = new Date();
    }
    
    updateStatus(status) {
        this.status = status;
    }
    
    getOrderSummary() {
        return {
            id: this.id,
            customer: this.customer.name,
            items: this.items.length,
            total: this.totalAmount,
            status: this.status,
            date: this.orderDate
        };
    }
}

// Usage Example
const laptop = new Product(1, "Gaming Laptop", 1299, "Electronics");
const mouse = new Product(2, "Wireless Mouse", 29, "Electronics");
const book = new Product(3, "JavaScript Guide", 45, "Books");

const customer = new Customer(1, "John Doe", "john@example.com", "123 Main St");
const cart = new ShoppingCart();

cart.addItem(laptop, 1);
cart.addItem(mouse, 2);
cart.addItem(book, 1);

console.log(`Cart total: ${cart.getTotalPrice()}`); // Cart total: $1402
console.log(`Items in cart: ${cart.getItemCount()}`); // Items in cart: 4

const order = new Order(customer, cart);
customer.addOrder(order);

console.log(order.getOrderSummary());
```

### Task Management System

```js
class Task {
    constructor(id, title, description, priority = 'medium') {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = 'pending';
        this.createdAt = new Date();
        this.completedAt = null;
        this.assignee = null;
    }
    
    assignTo(user) {
        this.assignee = user;
    }
    
    markComplete() {
        this.status = 'completed';
        this.completedAt = new Date();
    }
    
    markInProgress() {
        this.status = 'in-progress';
    }
    
    updatePriority(priority) {
        const validPriorities = ['low', 'medium', 'high', 'urgent'];
        if (validPriorities.includes(priority)) {
            this.priority = priority;
        }
    }
    
    getTimeToComplete() {
        if (this.completedAt && this.createdAt) {
            return this.completedAt.getTime() - this.createdAt.getTime();
        }
        return null;
    }
}

class User {
    constructor(id, name, email, role = 'member') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.assignedTasks = [];
    }
    
    assignTask(task) {
        this.assignedTasks.push(task);
        task.assignTo(this);
    }
    
    getTasksByStatus(status) {
        return this.assignedTasks.filter(task => task.status === status);
    }
    
    completeTask(taskId) {
        const task = this.assignedTasks.find(task => task.id === taskId);
        if (task) {
            task.markComplete();
        }
    }
}

class Project {
    constructor(id, name, description, manager) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.manager = manager;
        this.tasks = [];
        this.members = [manager];
        this.createdAt = new Date();
    }
    
    addMember(user) {
        if (!this.members.includes(user)) {
            this.members.push(user);
        }
    }
    
    removeMember(user) {
        this.members = this.members.filter(member => member.id !== user.id);
    }
    
    addTask(task) {
        this.tasks.push(task);
    }
    
    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
    
    getTasksByPriority(priority) {
        return this.tasks.filter(task => task.priority === priority);
    }
    
    getTasksByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }
    
    getCompletionRate() {
        if (this.tasks.length === 0) return 0;
        const completedTasks = this.getTasksByStatus('completed').length;
        return (completedTasks / this.tasks.length) * 100;
    }
    
    getProjectStats() {
        return {
            totalTasks: this.tasks.length,
            completed: this.getTasksByStatus('completed').length,
            inProgress: this.getTasksByStatus('in-progress').length,
            pending: this.getTasksByStatus('pending').length,
            completionRate: this.getCompletionRate()
        };
    }
}

class TaskManager {
    constructor() {
        this.projects = [];
        this.users = [];
        this.nextTaskId = 1;
        this.nextProjectId = 1;
        this.nextUserId = 1;
    }
    
    createUser(name, email, role) {
        const user = new User(this.nextUserId++, name, email, role);
        this.users.push(user);
        return user;
    }
    
    createProject(name, description, manager) {
        const project = new Project(this.nextProjectId++, name, description, manager);
        this.projects.push(project);
        return project;
    }
    
    createTask(title, description, priority) {
        return new Task(this.nextTaskId++, title, description, priority);
    }
    
    getUserById(id) {
        return this.users.find(user => user.id === id);
    }
    
    getProjectById(id) {
        return this.projects.find(project => project.id === id);
    }
    
    getOverallStats() {
        const totalTasks = this.projects.reduce((sum, project) => sum + project.tasks.length, 0);
        const totalCompleted = this.projects.reduce((sum, project) => 
            sum + project.getTasksByStatus('completed').length, 0);
        
        return {
            totalProjects: this.projects.length,
            totalUsers: this.users.length,
            totalTasks,
            totalCompleted,
            overallCompletionRate: totalTasks > 0 ? (totalCompleted / totalTasks) * 100 : 0
        };
    }
}

// Usage Example
const taskManager = new TaskManager();

// Create users
const alice = taskManager.createUser("Alice Johnson", "alice@company.com", "manager");
const bob = taskManager.createUser("Bob Smith", "bob@company.com", "developer");
const charlie = taskManager.createUser("Charlie Brown", "charlie@company.com", "designer");

// Create project
const webProject = taskManager.createProject(
    "Website Redesign", 
    "Complete redesign of company website", 
    alice
);

webProject.addMember(bob);
webProject.addMember(charlie);

// Create and assign tasks
const task1 = taskManager.createTask("Design mockups", "Create initial design mockups", "high");
const task2 = taskManager.createTask("Setup development environment", "Configure dev tools", "medium");
const task3 = taskManager.createTask("Implement homepage", "Code the new homepage", "high");

webProject.addTask(task1);
webProject.addTask(task2);
webProject.addTask(task3);

charlie.assignTask(task1);
bob.assignTask(task2);
bob.assignTask(task3);

// Update task statuses
task1.markInProgress();
task2.markComplete();

console.log("Project Stats:", webProject.getProjectStats());
console.log("Overall Stats:", taskManager.getOverallStats());
```

### Banking System

```js
// Abstract Account class
class Account {
    constructor(accountNumber, accountHolder, initialBalance = 0) {
        if (this.constructor === Account) {
            throw new Error("Cannot instantiate abstract Account class");
        }
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.transactions = [];
        this.createdAt = new Date();
        this.isActive = true;
    }
    
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        if (!this.isActive) {
            throw new Error("Account is not active");
        }
        
        this.balance += amount;
        this.addTransaction('deposit', amount);
        return this.balance;
    }
    
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (!this.isActive) {
            throw new Error("Account is not active");
        }
        if (amount > this.getAvailableBalance()) {
            throw new Error("Insufficient funds");
        }
        
        this.balance -= amount;
        this.addTransaction('withdrawal', amount);
        return this.balance;
    }
    
    addTransaction(type, amount, description = '') {
        this.transactions.push({
            id: Date.now(),
            type,
            amount,
            description,
            balance: this.balance,
            timestamp: new Date()
        });
    }
    
    getBalance() {
        return this.balance;
    }
    
    // Abstract method - must be implemented by subclasses
    getAvailableBalance() {
        throw new Error("getAvailableBalance() must be implemented");
    }
    
    getTransactionHistory() {
        return [...this.transactions];
    }
    
    closeAccount() {
        this.isActive = false;
    }
    
    getAccountInfo() {
        return {
            accountNumber: this.accountNumber,
            accountHolder: this.accountHolder,
            balance: this.balance,
            type: this.constructor.name,
            isActive: this.isActive,
            createdAt: this.createdAt
        };
    }
}

class SavingsAccount extends Account {
    constructor(accountNumber, accountHolder, initialBalance = 0, interestRate = 0.02) {
        super(accountNumber, accountHolder, initialBalance);
        this.interestRate = interestRate;
        this.minimumBalance = 100;
    }
    
    getAvailableBalance() {
        return Math.max(0, this.balance - this.minimumBalance);
    }
    
    addInterest() {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        this.addTransaction('interest', interest, 'Monthly interest');
        return interest;
    }
    
    withdraw(amount) {
        if (this.balance - amount < this.minimumBalance) {
            throw new Error(`Withdrawal would violate minimum balance of ${this.minimumBalance}`);
        }
        return super.withdraw(amount);
    }
}

class CheckingAccount extends Account {
    constructor(accountNumber, accountHolder, initialBalance = 0, overdraftLimit = 500) {
        super(accountNumber, accountHolder, initialBalance);
        this.overdraftLimit = overdraftLimit;
        this.monthlyFee = 12;
    }
    
    getAvailableBalance() {
        return this.balance + this.overdraftLimit;
    }
    
    withdraw(amount) {
        if (amount > this.getAvailableBalance()) {
            throw new Error(`Withdrawal exceeds overdraft limit of ${this.overdraftLimit}`);
        }
        
        this.balance -= amount;
        this.addTransaction('withdrawal', amount);
        
        // Apply overdraft fee if balance goes negative
        if (this.balance < 0) {
            const overdraftFee = 35;
            this.balance -= overdraftFee;
            this.addTransaction('fee', overdraftFee, 'Overdraft fee');
        }
        
        return this.balance;
    }
    
    applyMonthlyFee() {
        this.balance -= this.monthlyFee;
        this.addTransaction('fee', this.monthlyFee, 'Monthly maintenance fee');
    }
}

class BusinessAccount extends Account {
    constructor(accountNumber, businessName, initialBalance = 0) {
        super(accountNumber, businessName, initialBalance);
        this.transactionLimit = 100; // transactions per month
        this.monthlyTransactionCount = 0;
        this.transactionFee = 0.50;
    }
    
    getAvailableBalance() {
        return this.balance;
    }
    
    deposit(amount) {
        const result = super.deposit(amount);
        this.incrementTransactionCount();
        return result;
    }
    
    withdraw(amount) {
        const result = super.withdraw(amount);
        this.incrementTransactionCount();
        return result;
    }
    
    incrementTransactionCount() {
        this.monthlyTransactionCount++;
        if (this.monthlyTransactionCount > this.transactionLimit) {
            this.balance -= this.transactionFee;
            this.addTransaction('fee', this.transactionFee, 'Excess transaction fee');
        }
    }
    
    resetMonthlyTransactionCount() {
        this.monthlyTransactionCount = 0;
    }
}

class Bank {
    constructor(name) {
        this.name = name;
        this.accounts = [];
        this.nextAccountNumber = 1000;
    }
    
    createSavingsAccount(accountHolder, initialBalance, interestRate) {
        const account = new SavingsAccount(
            this.generateAccountNumber(),
            accountHolder,
            initialBalance,
            interestRate
        );
        this.accounts.push(account);
        return account;
    }
    
    createCheckingAccount(accountHolder, initialBalance, overdraftLimit) {
        const account = new CheckingAccount(
            this.generateAccountNumber(),
            accountHolder,
            initialBalance,
            overdraftLimit
        );
        this.accounts.push(account);
        return account;
    }
    
    createBusinessAccount(businessName, initialBalance) {
        const account = new BusinessAccount(
            this.generateAccountNumber(),
            businessName,
            initialBalance
        );
        this.accounts.push(account);
        return account;
    }
    
    generateAccountNumber() {
        return `ACC${this.nextAccountNumber++}`;
    }
    
    findAccount(accountNumber) {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }
    
    transfer(fromAccountNumber, toAccountNumber, amount) {
        const fromAccount = this.findAccount(fromAccountNumber);
        const toAccount = this.findAccount(toAccountNumber);
        
        if (!fromAccount || !toAccount) {
            throw new Error("One or both accounts not found");
        }
        
        fromAccount.withdraw(amount);
        toAccount.deposit(amount);
        
        fromAccount.addTransaction('transfer_out', amount, `Transfer to ${toAccountNumber}`);
        toAccount.addTransaction('transfer_in', amount, `Transfer from ${fromAccountNumber}`);
        
        return true;
    }
    
    getTotalAssets() {
        return this.accounts.reduce((total, account) => total + account.getBalance(), 0);
    }
    
    getAccountsByType(accountType) {
        return this.accounts.filter(account => account instanceof accountType);
    }
    
    applyMonthlyInterest() {
        this.getAccountsByType(SavingsAccount).forEach(account => {
            if (account.isActive) {
                account.addInterest();
            }
        });
    }
    
    applyMonthlyFees() {
        this.getAccountsByType(CheckingAccount).forEach(account => {
            if (account.isActive) {
                account.applyMonthlyFee();
            }
        });
        
        this.getAccountsByType(BusinessAccount).forEach(account => {
            if (account.isActive) {
                account.resetMonthlyTransactionCount();
            }
        });
    }
}

// Usage Example
const myBank = new Bank("First National Bank");

// Create accounts
const johnSavings = myBank.createSavingsAccount("John Doe", 1000, 0.025);
const johnChecking = myBank.createCheckingAccount("John Doe", 500, 1000);
const acmeBusinessAccount = myBank.createBusinessAccount("Acme Corp", 10000);

console.log("John's Savings:", johnSavings.getAccountInfo());
console.log("John's Checking:", johnChecking.getAccountInfo());

// Perform transactions
johnSavings.deposit(200);
johnChecking.withdraw(100);
myBank.transfer(johnSavings.accountNumber, johnChecking.accountNumber, 300);

console.log("After transactions:");
console.log("Savings Balance:", johnSavings.getBalance());
console.log("Checking Balance:", johnChecking.getBalance());
console.log("Bank Total Assets:", myBank.getTotalAssets());

// Apply monthly operations
myBank.applyMonthlyInterest();
myBank.applyMonthlyFees();

console.log("After monthly operations:");
console.log("Savings Balance:", johnSavings.getBalance());
console.log("Checking Balance:", johnChecking.getBalance());
```







## Iterables 

An iterable is any object (like Array, String, Set, Map, NodeList, HTMLCollection, etc.) that has a special method Symbol.iterator.

- When this method is called, it returns an iterator.
  - Iterator = An object that provides a way to access iterable items one by one using a next() method.
    - Each call to next() returns a result object:
      - value → the current element
      - done → false if there are more elements, true when iteration is finished

JavaScript features like for...of loop, spread operator (...), and destructuring automatically use this Symbol.iterator under the hood.

for quick preview: 
- Iterable an object with Symbol.iterator
- Iterator an object returned by calling Symbol.iterator

```js
let str = "Hi";

let iterator = str[Symbol.iterator](); // get iterator object
console.log(iterator.next()); // { value: 'H', done: false }
console.log(iterator.next()); // { value: 'i', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Used automatically by for...of
for (let ch of str) {
  console.log(ch); 
}
// H
// i
```

```js
let str = "ABC";
console.log([...str]);  
// [ 'A', 'B', 'C' ]
```

```js
let arr = [1, 2, 3];
let [a, b] = arr;

console.log(a, b); // 1 2
```

```js
let mySet = new Set([1, 2, 2, 3]);

for (let val of mySet) {
    console.log(val); // 1 2 3
}
```

```js
let myMap = new Map([
    ["name", "Alice"],
    ["age", 22]
]);

for (let [key, value] of myMap) {
    console.log(key, ":", value);
}
/*
name : Alice
age : 22
*/
```

Note:
Even though Array, Set, and Map have a .forEach() method that lets you iterate over their elements, it is not part of the iterable protocol.

- .forEach() is a separate method that executes a callback for each element.
- It works differently from for...of and does not rely on Symbol.iterator.
- It is only available on Array, Set, and Map.













## Strict Mode

In JavaScript, "use strict"; is a directive that activates Strict Mode, which is a stricter set of rules for executing your JavaScript code.

It helps you

-  Catch common mistakes earlier
-  Prevent silent errors
-  Write cleaner, safer code

**Key Effects of Strict Mode:**

- No undeclared variables
    
    ```js
    // without strict mode
    x = 5;
    console.log(x); // 5
    ```
    
    ```js
    // with strict mode
    "use strict"
    
    x = 5;
    console.log(x); // ReferenceError: x is not defined
    ```
    
- No duplicate parameter names
    
    ```js
    
    // without strict mode
    
    function sum(a, a) {
        return a + a;
    }
    
    console.log(sum(2, 2)); // 4
    ```
    
    ```js
    // with strict mode
    
    "use strict";
    function sum(a, a) { // SyntaxError: Duplicate parameter name not allowed in this context
        return a + a;
    }
    console.log(sum(2, 2));
    ```

## Error Handling

try...catch is used to handle errors in JavaScript so your code doesn't crash. Instead of stopping the program when an error happens, you can catch the error and respond gracefully.

**Without try...catch :**

```js
let x = y + 10; // Error: y is not defined
console.log("This line will not run");
```

**With try...catch:**

```js
try {
    let x = y + 10; // Error here
} catch (err) {
    console.log("Something went wrong!");
}
console.log("This line will run");
```

**err vs err.message vs err.name:**

```js
try {
    let x = y + 10; // Error here
} catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // y is not defined
    console.log(err); // full error message
    console.log(err.stack); // full error message
}
console.log("This line will run");
```

**Finally block:**

finally runs after try and catch, no matter what.

```js
try {
    let result = 10 / 2;
    console.log(result);
} catch (err) {
    console.log("Error:", err.message);
} finally {
    console.log("Cleanup: This runs no matter what.");
}
/*
5
Cleanup: This runs no matter what.
*/
```

```js
try {
    let result = 10 / y;
    console.log(result);
} catch (err) {
    console.log("Error:", err.message);
} finally {
    console.log("Cleanup: This runs no matter what.");
}
/*
Error: y is not defined
Cleanup: This runs no matter what.
*/
```

### Common JS Errors:

#### SyntaxError: 
Syntax error happens when JavaScript code is not written correctly.

```js

// Missing parenthesis:
console.log("Hello world"

// Unexpected token:
let a = 10
let b = 20;
console.log(a + b)

// Using reserved keywords for variable names:
let let = 5;

// not using quotes properly for string:
let greeting = "Hello;

// Invalid object literal:
let obj = { name: "Tamim", age: }; 
```

#### ReferenceError
Reference Error happens when you use a variable that hasn’t been declared.

```js

// Undeclared variable:
console.log(x); // ReferenceError: x is not defined

// Misspelled variable name:
let username = "Tamim";
console.log(usernme);

// Variable used outside its block:
{
    let a = 5;
}
console.log(a);

// Accessing variable before declaration: 
console.log(y);
let y = 10;

// Function-scoped variable not declared:
function test() {
    console.log(nonExistent);
}
test();
```

#### TypeError
Type Error happens when a value is used in an invalid way (e.g., calling non-function, accessing property of undefined, etc.)

```js

// Calling something that's not a function:
let num = 10;
num();

// Accessing property of undefined:
let user;
console.log(user.name);

// Using string like an object:
let str = "hello";
str.push("!");

// Invalid assignment:
const age = 25;
age = 30;

// Accessing array index of null:
let arr = null;
arr[0];

// Incorrect method on type:
let number = 123;
number.toUpperCase();

// Using array as object incorrectly:
let nums = [1, 2, 3];
console.log(nums.name.first);
```


## Js Modules: Import and export

### Export:

There are Three main ways to export from a file:

1. Named Export: You export multiple values by name

```js
// math.js
export const PI = 3.14;
export function add(x, y) {
  return x + y;
}
export const multiply = (x, y) => x * y;
```

2. Default Export: You export only one default value form a file. A file can have only one default export

```js
// greet.js
export default function greet(name) {
  return `Hello, ${name}`;
}
```

3.  Name export and default export in a same file:

```js
// utils.js
export const sayHi = () => console.log("Hi!");

export default function sayHello(name) {
  console.log(`Hello, ${name}`);
}
```

### Import:

```js
import { PI, add, multiply } from './math.js';
import greet from './greet.js';
import sayHello, { sayHi } from './utils.js';

console.log(PI);          // 3.14
console.log(add(2, 3));   // 5
console.log(multiply(2, 3)); // 6
console.log(greet('Tamim')); // Hello, Tamim

sayHi(); // Hi!
sayHello('Tamim'); // Hello, Tamim
```

You can Rename imported file name with as:

```js
import {add as sum} from './math.js';

console.log(sum(2, 3));   // 5
```

## Local Storage and Session Storage

localStorage is a Web Storage API feature that allows you to store key-value pairs in the browser with no expiration date. Data stored in localStorage persists even after the browser is closed.

Note: LocalStorage stores strings only

So, If you want to store objects, arrays, or any other non-string data types, you need to convert them into strings using JSON.stringify() before storing.

Similarly, when retrieving the data, use JSON.parse() to convert the string back into its original format.

**Note:** 
localStorage and sessionStorage use the same methods and approach. The only difference is data lifespan:
- localStorage → persists until manually cleared
- sessionStorage → cleared when the tab or browser is closed

### local storage methods:

- setItem(key, value): 
Stores a key-value pair (as string) in local storage.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        const user = {
            username: "Tamim",
            country: "Bangladesh"
        };
        localStorage.setItem("user", JSON.stringify(user));
    </script>
</body>

</html>
```

![](images/local-storage/local-storage-output-1.png)

- getItem(key):
Retrieves the value associated with a key.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        const user = {
            username: "Tamim",
            country: "Bangladesh"
        };
        localStorage.setItem("user", JSON.stringify(user));


        const userData = localStorage.getItem("user");
        console.log(userData);

        const userObj = JSON.parse(userData);
        console.log(userObj);
    </script>
</body>

</html>
```
![](images/local-storage/local-storage-output-2.png)

- removeItem(key):
Removes a specific key-value pair from local storage.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        const user = {
            username: "Tamim",
            country: "Bangladesh"
        };
        const user2 = {
            username: "Nasrin",
            country: "Canada"
        }
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("user2", JSON.stringify(user2));

        console.log(localStorage.getItem("user")) // {"username":"Tamim","country":"Bangladesh"}
        console.log(localStorage.getItem("user2")) // {"username":"Nasrin","country":"Canada"}

        localStorage.removeItem("user"); 

        console.log(localStorage.getItem("user")) // null
        console.log(localStorage.getItem("user2")) // {"username":"Nasrin","country":"Canada"}

    </script>
</body>

</html>
```

- clear():
Deletes all data from local storage.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        const user = {
            username: "Tamim",
            country: "Bangladesh"
        };
        const user2 = {
            username: "Nasrin",
            country: "Canada"
        }
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("user2", JSON.stringify(user2));

        console.log(localStorage.getItem("user")) // {"username":"Tamim","country":"Bangladesh"}
        console.log(localStorage.getItem("user2")) // {"username":"Nasrin","country":"Canada"}

        localStorage.clear("user");

        console.log(localStorage.getItem("user")) // null
        console.log(localStorage.getItem("user2")) // null
    </script>
</body>

</html>
```

- length:
Returns the number of key-value pairs in storage.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        const user = {
            username: "Tamim",
            country: "Bangladesh"
        };
        const user2 = {
            username: "Nasrin",
            country: "Canada"
        }
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("user2", JSON.stringify(user2));

        console.log(localStorage.length) // 2
    </script>
</body>

</html>
```

- key(index):
Returns the key name at the specified index.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        const user = {
            username: "Tamim",
            country: "Bangladesh"
        };
        const user2 = {
            username: "Nasrin",
            country: "Canada"
        }
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("user2", JSON.stringify(user2));

        console.log(localStorage.key(0)) // user
        console.log(localStorage.key(1)) // user2
    </script>
</body>

</html>
```

### Update the Local Storage key and values:

In localStorage, key name are immutable and values are mutable, thats means, you can't change the key name directly. If you want to change the key name, you must:
- Get the value of the old name
- Save it under the new name
- Remove the old name

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        const user = {
            userName: "Tamim",
            country: "Bangladesh"
        };

        localStorage.setItem("user", JSON.stringify(user));
        console.log(JSON.parse(localStorage.getItem("user"))) // {username: 'Tamim', country: 'Bangladesh'}

        // Change key name
        const oldValue = localStorage.getItem("user")
        localStorage.setItem("userData", oldValue);
        localStorage.removeItem("user");

        console.log(localStorage.getItem("user")) // null
        console.log(JSON.parse(localStorage.getItem("userData"))) // {username: 'Tamim', country: 'Bangladesh'}


        // change value
        const value = JSON.parse(localStorage.getItem("userData"));
        value.userName = "Muhammad Tamim";
        localStorage.setItem("userData", JSON.stringify(value))

        console.log(JSON.parse(localStorage.getItem("userData"))) // {userName: 'Muhammad Tamim', country: 'Bangladesh'}
    </script>
</body>

</html>
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <input type="text" id="productName" placeholder="write you product name">
    <input type="number" id="productQuantity" placeholder="write you product quantity">
    <input type="submit" id="btn" value="Add to local storage">

    <ul id="listContainer">

    </ul>

    <script>
        document.getElementById("btn").addEventListener("click", () => {
            // get the the input fields
            const productName = document.getElementById("productName");
            const productQuantity = document.getElementById("productQuantity");

            // get the input field value
            const name = productName.value;
            const quantity = productQuantity.value;

            // clear the input fields
            productName.value = "";
            productQuantity.value = "";

            // Initialize an empty cart object
            let cart = {};

            // check if the cart are already exists in the localStorage or not
            const checkChart = localStorage.getItem("cart");
            if (checkChart) {
                // if the cart value exist to the localStorage replace the cart = {} empty object to the local storage new value 
                cart = JSON.parse(checkChart);
            }

            // add/update chart object
            cart[name] = quantity;
            /*
            If the product name already exists, its quantity is updated.
            If the product name is new, it’s added alongside the old ones.
            */

            // convert the cart object into JSON String and store it in localStorage
            const convertObjToJsonString = JSON.stringify(cart);
            localStorage.setItem("cart", convertObjToJsonString);

            // get the cart ul list container
            const listContainer = document.getElementById("listContainer");
            listContainer.innerHTML = ""; // clear the list before re-render to avoid duplicate

            // add li to ul
            for (const product in cart) {
                const li = document.createElement("li");
                li.innerText = `${product}: ${cart[product]}`;
                listContainer.appendChild(li);
            }
        })
    </script>
</body>

</html>
```

![](images/local-storage/local-storage-output-3.png)


## Asynchronous and Synchronous JavaScript

### Synchronous Javascript

**Single Threaded:**
JavaScript is a single-threaded, synchronous language, which means it executes one task at a time, in a specific order from top to bottom.

```js

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

/*
Task 1
Task 2
Task 3
*/

console.log(1);
console.log(2);
doSomething();
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
    console.log(3);
}

/*
1
2
3
4
5
6
*/
```

### Asynchronous JavaScript
By default, JavaScript runs code in a synchronous way — meaning it executes one task at a time, in the order they appear.

However, JavaScript can also perform asynchronous tasks like setTimeout(), setInterval(), promise, async/await etc.

Behind the scenes, when an asynchronous method is called:

- JavaScript hands it off to the browser (Web API)
- Then continues to run other code without waiting. Once all synchronous tasks are done, the Event Loop picks up the asynchronous callback and adds it to the call stack to execute.

So, asynchronous methods like setTimeout() and setInterval() do not change the single-threaded, synchronous nature of JavaScript — they just work alongside it, using the event loop to manage timing and order.


### Web API:

A Web API is a feature provided by the browser (or the environment like Node.js) that JavaScript can use to do extra things, like:

- setTimeout(), setInterval()
- Make HTTP requests (fetch)
- Handle user events (clicks, input)
- Work with the DOM
- Use browser storage (localStorage, sessionStorage)

### Event loop:

The event loop checks if JavaScript is done with all synchronous tasks, and if so, it moves asynchronous tasks (like timers or API calls) back into the code to be run.

**Why Do We Need the Event Loop?**

JavaScript is:

- Single-threaded: can do only one thing at a time
- Non-blocking: doesn’t wait for slow tasks (setTimeout() or fetch())

so, After parsing, compiling, and interpreting the code, the JavaScript engine uses these key parts:
- Call Stack - runs your js code synchronously with FIFO structure
- Web Apis - Handles async tasks
- Callback Queue - When async tasks are ready, they’re added here
- Event Loop - Constantly checks, is the call stack empty? If yes → moves tasks from callback queue into the stack to be run

```js
console.log("Start");

setTimeout(() => {
    console.log("Timer done");
}, 2000);

console.log("End");

/*
Start
End
Timer done
*/
```

Behind the Scenes:
- Start → Call Stack → runs
- setTimeout() → Web API → starts timer
- End → Call Stack → runs
- After 2 sec, callback goes to Callback Queue
- Event Loop sees the stack, if empty it moves callback to Call Stack → runs "Timer done"


### setTimeOut() and setInterval()

**setTimeOut():**

setTimeout() runs a function once after a specified delay (in milliseconds).

```js

console.log(1);

console.log(2);
setTimeout(() => {
    console.log(3)
});
console.log(4);
console.log(5);
console.log(6);

/*
1
2
4
5
6
3 - runs 0 second delay
*/
```

```js

console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3)
}, 4000);
console.log(4);
console.log(5);
console.log(6);

/*
1
2
4
5
6
3 - runs 4 second delay
*/
```

```js
// With Parameters
function greet(name) {
    console.log("Hello, " + name);
}

setTimeout(greet, 3000, "Tamim"); // After 3 seconds
```

**setInterval():**
setInterval() runs a function again and again, with a fixed time delay between each call.

```js
// runs infinitely with one seconde delay
setInterval(() => {
    console.log("I print every 1 second");
}, 1000);
```

```js
// Count every second
let count = 1;
const id = setInterval(() => {
    console.log("Count:", count);
    count++;
}, 1000);
```

```js

// Stop setInterval() with clearInterval(id)
let i = 1;
const id = setInterval(() => {
    console.log("i =", i);
    i++;
    if (i > 5) {
        clearInterval(id); // Stop after 5 times
    }
}, 1000);
```

### JSON, promise, fetch, async/await

Before learning about Promises, fetch(), and async/await, it’s important to understand the format of data that APIs usually return. Most APIs return data in JSON format:

#### JSON
JSON stands for JavaScript Object Notation — it's a lightweight data format used to store and exchange data, especially in APIs. JSON looks like JavaScript objects, but it's always a string With double quotes only ("").

**JSON.stringify() — Convert JS → JSON string:**

```js

const user = {
    name: "Tamim",
    age: 21
};

const jsonString = JSON.stringify(user);
console.log(jsonString); // {"name":"Tamim","age":21}
console.log(typeof jsonString); // string 
```

**JSON.parse() — Convert JSON string → JS object:**

```js
const jsonStr = '{"name":"Tamim","age":21}';

const obj = JSON.parse(jsonStr);
console.log(obj); // { name: 'Tamim', age: 21 }
console.log(typeof obj); // object 
```

#### promise
A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.

Promise States:
- Pending - operation initial stage
- Resolved(fulfilled) - if the operation is successful
- Rejected - if the operation fails

Basic Syntax:

```js
let promise = new Promise(function (resolve, reject) {
  // async task
});
```

You can use below methods to work with the result of a promise:

.then() - Called when the promise is resolved (fulfilled)
.catch() - Called when the promise is rejected (error)
.finally() - must Called, no matter whatever the promise was fulfilled or rejected 

```js
let promise = new Promise(function (resolve, reject) {
    let success = true;

    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed.");
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise is settled (fulfilled or rejected).");
    });
```

```js
// Promise.all([]) --> Waits for all promises to resolve

const moneyRequest = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Request submitted!"), 1000);
});

const transferMoney = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Money transferred!"), 2000);
});

const payFee = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Fee paid!"), 1500);
});

Promise.all([moneyRequest, transferMoney, payFee])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });

// [ 'Request submitted!', 'Money transferred!', 'Fee paid!' ]
```

#### fetch

The fetch() method is used to make HTTP requests (like GET, POST, PUT, PATCH, DElETE etc.) to servers and APIs.It returns a Promise that resolves to the Response object.

**Basic GET Request:**
```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => console.log(response))
    .catch(err => console.log(err))

/*
 Response {
  status: 200,
  statusText: 'OK',
  headers: Headers {
    date: 'Wed, 30 Jul 2025 17:07:22 GMT',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    'access-control-allow-credentials': 'true',
    'cache-control': 'max-age=43200',
    etag: 'W/"124-yiKdLzqO5gfBrJFrcdJ8Yq0LGnU"',
    expires: '-1',
    nel: '{"report_to":"heroku-nel","response_headers":["Via"],"max_age":3600,"success_fraction":0.01,"failure_fraction":0.1}',
    pragma: 'no-cache',
    'report-to': '{"group":"heroku-nel","endpoints":[{"url":"https://nel.heroku.com/reports?s=kHphepdcLXRPrx%2BR4ZbooXWDa6BR1Tm0fJq5WhSVlp4%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1753671479"}],"max_age":3600}',
    'reporting-endpoints': 'heroku-nel="https://nel.heroku.com/reports?s=kHphepdcLXRPrx%2BR4ZbooXWDa6BR1Tm0fJq5WhSVlp4%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1753671479"',
    server: 'cloudflare',
    vary: 'Origin, Accept-Encoding',
    via: '2.0 heroku-router',
    'x-content-type-options': 'nosniff',
    'x-powered-by': 'Express',
    'x-ratelimit-limit': '1000',
    'x-ratelimit-remaining': '999',
    'x-ratelimit-reset': '1753671494',
    age: '22154',
    'cf-cache-status': 'HIT',
    'content-encoding': 'br',
    'cf-ray': '967673b27a628801-SIN',
    'alt-svc': 'h3=":443"; ma=86400'
  },
  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
  bodyUsed: false,
  ok: true,
  redirected: false,
  type: 'basic',
  url: 'https://jsonplaceholder.typicode.com/posts/1'
}
*/
```

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.text()) // See the raw JSON text
    .then(txt => console.log("Raw JSON string:", txt));
/*
Raw JSON string: {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/
```
convert response JSON into a JavaScript object using response.json()

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json()) // convert response JSON into object
    .then(data => console.log(data));

/*
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
*/
```
Dynamically Display data:

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="btn">Click me for load user</button>

    <div>
        <ul id="users">

        </ul>
    </div>

    <script>
        document.getElementById("btn").addEventListener("click", () => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(data => showUser(data));
        })

        const showUser = (users) => {
            const userContainer = document.getElementById("users")

            for (const user of users) {
                const li = document.createElement("li");
                li.innerText = user.name;
                userContainer.appendChild(li)
            }
        }
    </script>
</body>

</html>
```

![](images/Asynchronous-and-Synchronous-JavaScript-images/fetch-output-2.png)

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .card {
            border: 2px solid red;
            margin: 5px;
            padding: 10px;
            text-align: center;
            background-color: aqua;
        }
    </style>
</head>

<body>

    <h1>Load All Post:</h1>

    <div id="postContainer">

    </div>

    <script>
        const handlePost = () => {
            // Making a fetch request to get the posts form the JSONPlaceholder API
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(data => displayPost(data));
        }


        const displayPost = (posts) => {
            const postContainer = document.getElementById("postContainer")

            for (const post of posts) {
                const div = document.createElement("div");
                div.classList.add("card")
                div.innerHTML = `
                <h1>${post.title}</h1>
                <p>${post.body}</p>
                `
                postContainer.appendChild(div);
            }
        }
        handlePost()
    </script>
</body>

</html>
```

![](images/Asynchronous-and-Synchronous-JavaScript-images/fetch-ouput-3.png)

#### async/await:

async and await are modern JavaScript keywords that allow you to write asynchronous code that looks like synchronous code. They are used to work with Promises more cleanly.

- async - Used to declare an async function that returns a Promise if the promise resolved.
- await - Used inside an async function to pause execution until a Promise resolves.If the Promise is rejected, it throws an error that you can catch with try...catch.

Note: Normally, try...catch only works for synchronous code. However, when you use await, JavaScript pauses execution like it does for synchronous code — that allowing try...catch to catch async errors just like sync ones. This is why try...catch works with await, even though the operation is asynchronous.

```js
// Without arrow function
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
```

```js
// With arrow function
const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
```



# Part 2: DOM
## An Introduction To the DOM
## DOM Traversing
## Elements selecting methods
## Content Manipulation
## Element Attributes and Element Properties
## CSS and Class Styling
## Creating, Adding and Removing Element Methods
## Events

# Part 3: JS Exercise
## Operator Problems
## Loop Problems
## String Problems
## Array Problems
## Object Problems
## Function Problems



























