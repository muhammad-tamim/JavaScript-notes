<h1 align="center">JavaScript Notes</h1>


- [1. Part 1: The JavaScript Language](#1-part-1-the-javascript-language)
  - [1.1. An Introduction to Javascript](#11-an-introduction-to-javascript)
    - [1.1.1. What is JavaScript:](#111-what-is-javascript)
    - [1.1.2. JavaScript History:](#112-javascript-history)
    - [1.1.3. Why Did JavaScript Need a Standard Version:](#113-why-did-javascript-need-a-standard-version)
    - [1.1.4. JavaScript Engines:](#114-javascript-engines)
    - [1.1.5. Hello World](#115-hello-world)
  - [1.2. Variables](#12-variables)
    - [1.2.1. Difference between var, let and const:](#121-difference-between-var-let-and-const)
    - [1.2.2. Hoisting](#122-hoisting)
    - [1.2.3. Scope](#123-scope)
    - [1.2.4. Scope Chain](#124-scope-chain)
    - [1.2.5. Variable naming conventions:](#125-variable-naming-conventions)
    - [1.2.6. How to write a long variable name](#126-how-to-write-a-long-variable-name)
  - [1.3. Data Types](#13-data-types)
    - [1.3.1. 7 Primitive Data Types:](#131-7-primitive-data-types)
    - [1.3.2. 1 Non-Primitive Data Types:](#132-1-non-primitive-data-types)
  - [1.4. Operator](#14-operator)
    - [1.4.1. Arithmetic Operators (+, -, \*, /, %, \*\*):](#141-arithmetic-operators-------)
      - [1.4.1.1. String concatenation with +:](#1411-string-concatenation-with-)
    - [1.4.2. Assignment Operators (=, +=, -=, \*=, /=):](#142-assignment-operators------)
    - [1.4.3. Increment / Decrement Operators (--, ++):](#143-increment--decrement-operators----)
      - [1.4.3.1. Pre Increment / Decrement:](#1431-pre-increment--decrement)
      - [1.4.3.2. post Increment / Decrement:](#1432-post-increment--decrement)
    - [1.4.4. Comparison Operator (\>, \<, \>=, \<=, ==, ===, !=, !==):](#144-comparison-operator--------)
      - [1.4.4.1. String comparison:](#1441-string-comparison)
      - [1.4.4.2. Difference between == and === :](#1442-difference-between--and--)
      - [1.4.4.3. Comparison with null and undefined:](#1443-comparison-with-null-and-undefined)
      - [1.4.4.4. null vs 0:](#1444-null-vs-0)
      - [1.4.4.5. undefined vs 0:](#1445-undefined-vs-0)
    - [1.4.5. Logical Operators (\&\&, ||, ! ,, !!):](#145-logical-operators-----)
    - [1.4.6. Conditional Operators (if, else, else if, ? :, switch, case):](#146-conditional-operators-if-else-else-if---switch-case)
      - [1.4.6.1. Ternary operator(? :):](#1461-ternary-operator-)
      - [1.4.6.2. switch...case:](#1462-switchcase)
      - [1.4.6.3. Truthy and Falsy values:](#1463-truthy-and-falsy-values)
    - [1.4.7. Others Operators](#147-others-operators)
      - [1.4.7.1. typeof operator:](#1471-typeof-operator)
      - [1.4.7.2. rest operator:](#1472-rest-operator)
      - [1.4.7.3. spread operator](#1473-spread-operator)
      - [1.4.7.4. Nullish Coalescing operator (??)](#1474-nullish-coalescing-operator-)
  - [1.5. Loops](#15-loops)
    - [1.5.1. for loop:](#151-for-loop)
    - [1.5.2. while loop:](#152-while-loop)
    - [1.5.3. do while loop:](#153-do-while-loop)
    - [1.5.4. for..of loop (for iterables):](#154-forof-loop-for-iterables)
    - [1.5.5. for..in loop (for objects):](#155-forin-loop-for-objects)
    - [1.5.6. forEach method (only for array):](#156-foreach-method-only-for-array)
  - [1.7. function](#17-function)
    - [1.7.1. What is the difference between return and no return in a function?](#171-what-is-the-difference-between-return-and-no-return-in-a-function)
    - [1.7.2. Default Parameter:](#172-default-parameter)
    - [1.7.3. CallBack Function](#173-callback-function)
    - [1.7.4. Arrow Function:](#174-arrow-function)
    - [1.7.5. Difference between arrow function and normal function](#175-difference-between-arrow-function-and-normal-function)
    - [1.7.6. Recursion](#176-recursion)
      - [1.7.6.1. what is Call Stack:](#1761-what-is-call-stack)
      - [1.7.6.2. How the recursion Works:](#1762-how-the-recursion-works)
      - [1.7.6.3. Find Factorial Using Recursion:](#1763-find-factorial-using-recursion)
    - [1.7.7. Closure](#177-closure)
      - [1.7.7.1. Closure Features](#1771-closure-features)
  - [1.8. string](#18-string)
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
      - [Object.freeze():](#objectfreeze)
      - [Object.seal():](#objectseal)
    - [Property existence test:](#property-existence-test)
      - [With in operator:](#with-in-operator)
      - [With includes() method:](#with-includes-method)
      - [With hasOwnProperty() method:](#with-hasownproperty-method)
    - [The "for..in" loop](#the-forin-loop)
    - [Objects References and Copying:](#objects-references-and-copying)
    - [Const objects can be modified?](#const-objects-can-be-modified)
    - [Cloning and merging, Object.assign and structuredClone():](#cloning-and-merging-objectassign-and-structuredclone)
    - [Nested cloning:](#nested-cloning)
    - [Object Methods](#object-methods)
    - [Optional Chaining (?.)](#optional-chaining-)
    - [Date:](#date)
  - [array](#array)
    - [Get the length of an array using length property:](#get-the-length-of-an-array-using-length-property)
    - [for..of loop](#forof-loop)
    - [Array Methods](#array-methods)
      - [Note:](#note)
  - [1.11. set](#111-set)
    - [1.11.1. creating a set](#1111-creating-a-set)
    - [1.11.2. Adding \& Removing Values](#1112-adding--removing-values)
    - [1.11.3. Checking \& Size](#1113-checking--size)
    - [1.11.4. Iterating Over a Set](#1114-iterating-over-a-set)
    - [1.11.5. Convert Set ↔ Array](#1115-convert-set--array)
  - [1.12. map](#112-map)
    - [1.12.1. Creating a Map](#1121-creating-a-map)
    - [1.12.2. Adding \& Updating Values](#1122-adding--updating-values)
    - [1.12.3. Getting \& Checking Values](#1123-getting--checking-values)
    - [1.12.4. Deleting \& Clearing](#1124-deleting--clearing)
    - [1.12.5. Iterating Over a Map](#1125-iterating-over-a-map)
  - [1.5. Iterables](#15-iterables)
  - [1.16. Destructuring](#116-destructuring)
  - [1.17. Strict Mode](#117-strict-mode)
  - [1.18. Error Handling](#118-error-handling)
  - [1.19. Js Modules: Import and export](#119-js-modules-import-and-export)
  - [1.20. Regular Expression](#120-regular-expression)
  - [1.21. Local Storage and Session Storage](#121-local-storage-and-session-storage)
  - [1.22. Asynchronous and Synchronous JavaScript --\>](#122-asynchronous-and-synchronous-javascript---)
- [2. Part 3: DOM](#2-part-3-dom)
  - [2.1. An Introduction To the DOM](#21-an-introduction-to-the-dom)
  - [2.2. DOM Traversing](#22-dom-traversing)
  - [2.3. Elements selecting methods](#23-elements-selecting-methods)
  - [2.4. Content Manipulation](#24-content-manipulation)
  - [2.5. Element Attributes and Element Properties](#25-element-attributes-and-element-properties)
  - [2.6. CSS and Class Styling](#26-css-and-class-styling)
  - [2.7. Creating, Adding and Removing Element Methods](#27-creating-adding-and-removing-element-methods)
  - [2.8. Events](#28-events)
- [3. Part 3: JS Exercise](#3-part-3-js-exercise)
  - [3.1. Operator Problems](#31-operator-problems)
  - [3.2. Loop Problems](#32-loop-problems)
  - [3.3. String Problems](#33-string-problems)
  - [3.4. Array Problems](#34-array-problems)
  - [3.5. Object Problems](#35-object-problems)
  - [3.6. Function Problems](#36-function-problems)

---



# 1. Part 1: The JavaScript Language

## 1.1. An Introduction to Javascript

### 1.1.1. What is JavaScript:

JavaScript is a: 
- scripting language 
  - A scripting language is a programming language that is executed by an interpreter, which translates and runs the code line by line (or step by step) at runtime, instead compiling the whole program into machine code beforehand.
    - Compile time → when the code is being converted into machine code (before execution start).
    - Runtime → when the  code is actually being executed.
    ![](./images/scripting-language)

- Single Threaded
  - meaning it executes one task at a time in sequence.

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

### 1.1.2. JavaScript History:
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


### 1.1.3. Why Did JavaScript Need a Standard Version:
When JavaScript was first created in 1995 by Netscape, it was only implemented in their browser Netscape Navigator. Shortly, Microsoft launched its own browser, Internet Explorer, and included its own version of JavaScript called JScript. As a result, two distinct versions of JavaScript were emerged in the market:

- JavaScript in Netscape Navigator
- JScript in Internet Explorer

so, Different browsers had slightly different implementations of JavaScript. Some features worked in one browser but not in another. This caused a lot of bugs and confusion for web developers. Developers had to write browser-specific code, which made websites harder to build and maintain.

To solve this problem, Netscape submitted JavaScript to ECMA International in June 1997, so they could create a standardized specification of the language. This standard was named ECMAScript.

### 1.1.4. JavaScript Engines:
A JavaScript engine is a program built into web browsers (and platforms like Node.js) that is responsible for executing JavaScript code.

It takes the JavaScript you write, then:

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
3. Interpreting
   - Is a process where the JS engine executes the bytecode step-by-step using an interpreter.
4. JIT Compilation (if applicable)
   - JIT(Just In Time) Compilation is a process where the JS engine detects frequently executed “hot” code and compiles it into machine code. On the future runs, the engines skips parsing, compiling AST to Bytecode and interpreting instead it running the machine code directly for faster execution.     


### 1.1.5. Hello World

```console.log("Hello World");```

**What’s happened behind the code:**
- The statement sends to the JavaScript Engine
- Parsing
- Compiling AST to Bytecode
- Interpretation
- JIT Compilation (if applicable)
- Execution of console.log
  - console is a global object provided by the environment (browser or Node.js).
  - log is a method of the console object.
  - so, Calling console.log("Hello World") passes the string "Hello World" as an argument to that log method.

Q&A:
- statement: A single instruction in a programming language
  - ```console.log("Hello World");```
- code: Any written instructions in a programming language, from one line to many. 
  - ```console.log("Hello World");```
- program: A complete set of code written in a programming language to solve a problem or perform a task by (input → processing → output)..
  - Find the largest number in an array
- Method: when a function is stored as a property of an object, it’s called a method.


## 1.2. Variables
A variable is a “named storage” for data. We can declare variables to store data by using the keywords:

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

### 1.2.1. Difference between var, let and const:

<table>
<tr>
<th>var</th>
<th>let</th>
<th>const</th>
</tr>
<tr>
<td>Function-scoped (global scope if not in a function)
<pre><code>
function testScope() {
    if (true) {
        var x = 10;
    }
    console.log(x); // output: 10 
}
testScope();
</code></pre>
<pre><code>
if (true) {
    var test = true; 
}
console.log(test); // output: true
</code></pre>
</td>
<td>Block-scoped
<pre><code>
function testScope() {
    if (true) {
        let x = 10;
    }
    console.log(x); // ReferenceError: x is not defined
}
testScope();
</code></pre>
<pre><code>
if (true) {
    let test = true;
}
console.log(test); // ReferenceError: x is not defined
</code></pre>
</td>
<td>block Block-scoped
<pre><code>
function testScope() {
    if (true) {
        const x = 10;
    }
    console.log(x); // // ReferenceError: x is not defined
}
testScope();
</code></pre>
<pre><code>
if (true) {
    const test = true;
}
console.log(test); // ReferenceError: x is not defined
</code></pre>
</td>
</tr>
<tr>
<td>
Hoisted and initialized with undefined.
<pre><code>
console.log(a); // undefine
var a = 10;
</code></pre>
</td>
<td>
Hoisted but not initialized
<pre><code>
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
</code></pre>
</td>
<td>
Hoisted but not initialized
<pre><code>
console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 20;
</code></pre>
</td>
</tr>
<tr>
<td>
Can be re-declared and re-assign in the same scope.
<pre><code>
var a = 10;
var a = 20;  //  Allowed
a = 30;      //  Allowed
console.log(a); // 30
</code></pre>
</td>
<td>
Cannot be re-declared but can re-assign in the same scope.
<pre><code>
let b = 10;
// let b = 20;  // Error: re-declaration not allowed
b = 20;        //  Re-assignment allowed
console.log(b); // 20
</code></pre>
</td>
<td>
Cannot be re-declared and re-assign in the same scope.
<pre><code>
const c = 10;
// c = 20;      // Error: cannot reassign
// const c = 30; // Error: cannot re-declare
console.log(c); // 10
</code></pre>
</td>
</tr>
<tr>
<td>
Declaring var globally adds it to window object as a property (in browsers).
<img src="./images/window.png">
</td>
<td>
Declaring let doesn't globally add it to window object as a property (in browsers).
<pre><code>
let a = 10;

console.log(window);
console.log(window.a); // undefined
</code></pre>
</td>
<td>
Declaring const doesn't globally adds it to window object as a property (in browsers).
<pre><code>
const a = 10;

console.log(window);
console.log(window.a); // undefined
</code></pre>
</td>
</tr>
</table>

### 1.2.2. Hoisting

In JavaScript, code execution happens in two phases for each scope:

1.  Creation Phase 
    - The JavaScript engine scans the scope before execution begins and allocates memory for all declarations:
      - var → allocated and initialized with undefined
      - let / const → allocated but not initialized.They remain in the Temporal Dead Zone (TDZ) until the line of code where they are declared is executed.
      - Function declarations → fully allocated and initialized (can be called before declaration)

2. Execution Phase 
   - The engine executes the code line by line.

**Note:** Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope during the creation phase.


### 1.2.3. Scope
Scope determines where variables can be accessed in your code. There are 4 types of scopes in js:

1. Block Scope
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

2. Function Scope
A variable has function scope if it is declared inside a function. It is accessible only within that function.


function sayHello() {
    let message = "Hello";
    console.log(message); // Hello    
}

sayHello();
console.log(message); // ReferenceError: message is not defined

3. Global Scope
A variable has global scope if it is declared outside of any function or block. It is accessible from anywhere in the code.


let name = "Tamim";

function greet() {
    console.log("Hi", name); // Hi Tamim
}

greet();
console.log(name); // Tamim

1. Lexical Scope 
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

### 1.2.4. Scope Chain
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

### 1.2.5. Variable naming conventions:
- Names must start with a letter, underscore _, or dollar sign $
- Names can contain letters, digits, _, and $ — but no spaces or symbols
- Names are Case-sensitive
- Names Cannot contain JavaScript reserved keywords

### 1.2.6. How to write a long variable name
- Snake Case - let my_current_home_address = "Barisal";
- Camel Case (recommended) - let myCurrentHomeAddress = "Barisal";
- Pascal Case - let MyCurrentHomeAddress = "Barisal";




## 1.3. Data Types

A data type defines the kind of value a variable can hold (like a Number, String, Boolean, etc.)

JavaScript is a dynamically typed language, which means:
- You don’t have to declare the type of a variable.
- The type is determined automatically based on the value you assign.

```js
let message = "hello"; // string
message = 123456;      // number
```

There are 8 data types in JavaScript:

### 1.3.1. 7 Primitive Data Types:

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

console.log(Math.random());     // Random decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 10); // Random decimal between 0 (inclusive) and 10 (exclusive)
console.log(Math.random() * 100); // Random decimal between 0 (inclusive) and 100 (exclusive)
console.log(Math.floor(Math.random() * 10)); // Random integer between 0 (inclusive) and 10 (exclusive)
console.log(Math.floor(Math.random() * 100)); // Random integer between 0 (inclusive) and 100 (exclusive)
```

**Type conversion global functions:**

```js
console.log(parseInt("123"));       // 123
console.log(parseInt("12.34"));     // 12
console.log(parseInt("100px"));     // 100
console.log(parseInt("abc"));       // NaN
console.log(parseInt(true));       // NaN

console.log(parseFloat("10"));         // 10
console.log(parseFloat("12.34"));     // 12.34
console.log(parseFloat("100px"));     // 100
console.log(parseFloat("3.14hello")); // 3.14
console.log(parseFloat("abc"));       // NaN

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

**Type conversion methods**

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

### 1.3.2. 1 Non-Primitive Data Types:

8. Object
In JavaScript, any data that is not a primitive is as an object. There are 3 commonly used objects in JavaScript (object, function, array)
- function 
- array
- object

## 1.4. Operator

An Operator is a special symbol or keyword that performs an operation on one or more values.

### 1.4.1. Arithmetic Operators (+, -, *, /, %, **):

```js

console.log(2 + 3); // 5
console.log(5 - 2); // 3
console.log(4 * 2); // 8

console.log(10 / 50); // 0.2
console.log(10 % 50) // 10
console.log(50 / 10) // 5
console.log(50 % 10) // 0
// Note: For a perfect division, the dividend > divisor.
```

<h4>** (Exponentiation):</h4>
<p>a ** b = a<sup> b</sup></p>

```js
console.log(2 ** 2); // 2² = 4
console.log(2 ** 3); // 2³ = 8
console.log(2 ** 4); // 2⁴ = 16
console.log(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
console.log(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)
```

#### 1.4.1.1. String concatenation with +:

```js
let s = "my" + "string";
console.log(s); // mystring
```

**Note:** If any of the operands is a string, then the other one is converted to a string too.

```js
console.log('1' + 2); // "12"
console.log(2 + '1'); // "21"
console.log(2 + 2 + '1'); // "41" and not "221"
console.log('1' + 2 + 2); // "122" and not "14"
```

**Note:** The + is the only operator that supports strings concatenation. Other arithmetic operators work only with numbers and always convert their operands to numbers.

```js
console.log(6 - '2'); // 4, converts '2' to a number
console.log('6' / '2'); // 3, converts both operands to numbers
```

### 1.4.2. Assignment Operators (=, +=, -=, *=, /=):

```js
let x = 10;
x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2
```

### 1.4.3. Increment / Decrement Operators (--, ++):

#### 1.4.3.1. Pre Increment / Decrement:

```js
let i = 10;
let x = ++i;
console.log(i); // 11
console.log(x); // 11
```
Explanation: : Here, i is incremented to 11 first, and then this new value is assigned to x. Both i and x are 11 after this operation.

#### 1.4.3.2. post Increment / Decrement:

```js
let i = 10;
let x = i++;
console.log(i); // 11
console.log(x); // 10
```
Explanation: here, First, the value of i (which is 10) is assigned to the variable x. After that, i is incremented, so i becomes 11.

Note: 

- Pre-increment (++i): First increments the value of i, then assigns it.
- Post-increment (i++): First assigns the value, then increments it.

### 1.4.4. Comparison Operator (>, <, >=, <=, ==, ===, !=, !==):

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
#### 1.4.4.1. String comparison:

To see whether a string is greater than another, JavaScript uses the so-called lexicographical algorithm.

How lexicographical algorithm works:
- Strings are compared character by character from left to right.
- Each character is compared based on its Unicode value.
- The first difference determines the result.
- If all characters are equal and lengths differ, the shorter string is considered smaller.

```js
console.log('Z' > 'A'); // true
console.log('hello' == 'hello'); // true
console.log('Glow' > 'Glee'); // true
console.log('Be' < 'Bee'); // true
```
<img src="images/ascii.png" alt="ascii vaues">

**How to see unicode or Ascii values in js:**

```js
console.log('a'.charCodeAt(0)); // Output: 97
console.log('a'.codePointAt(0)); // Output: 97
```

#### 1.4.4.2. Difference between == and === :

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

#### 1.4.4.3. Comparison with null and undefined:

```js
console.log(null === undefined); // false
console.log(null >= undefined); // false
console.log(null < undefined); // false
console.log(null == undefined); // true
// this is a special rule. If you use ==, null and undefined are considered equal.
```

#### 1.4.4.4. null vs 0:

```js
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true 
```

#### 1.4.4.5. undefined vs 0:

```js
console.log(undefined > 0); // false 
console.log(undefined < 0); // false 
console.log(undefined == 0); // false
// undefined is converted to NaN in numeric comparisons
```


### 1.4.5. Logical Operators (&&, ||, ! ,, !!):

```js
let age = 25;
if (age > 18 && age < 30) {
  console.log("Young Adult");
}

const isLoggedIn = true;
const userName = "Tamim";

isLoggedIn && console.log("Welcome, " + userName);
// Output: Welcome, Tamim

const isMingle = false;

isMingle || console.log("Sad for you!");

let day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend");
}

let loggedIn = false;
if (!loggedIn) {
  console.log("Please log in");
}

let username = "Tamim";

if (!!username) {
    console.log("Username is set"); // Username is set
} else {
    console.log("Please enter a username");
}

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

### 1.4.6. Conditional Operators (if, else, else if, ? :, switch, case):

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

#### 1.4.6.1. Ternary operator(? :):

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

#### 1.4.6.2. switch...case:

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

#### 1.4.6.3. Truthy and Falsy values:

In JavaScript, any value used in a conditional statement gets automatically converted to true or false.

There are 8 total falsy values in js, everything else is truthy:

- false
- 0
- -0
- 0n (BigInt)
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

### 1.4.7. Others Operators

#### 1.4.7.1. typeof operator:

```js

console.log(typeof undefined); // "undefined"

console.log(typeof 0); // "number"

console.log(typeof 10n); // "bigint"

console.log(typeof true); // "boolean"

console.log(typeof "foo"); // "string"

console.log(typeof Symbol("id")); // "symbol"

console.log(typeof Math); // "object"  

console.log(typeof null); // "object"  

console.log(typeof alert); 
/*
you will get "function" as output 
if you use browser console, in node 
you will get "undefined"
*/  
```

Note:
- typeof null return "object", but null is a primitive data type.
- typeof alert returns "function", but functions are technically objects.

#### 1.4.7.2. rest operator:

Rest operator gathers values into an array or object. It is used defining things like Function parameters, array destructuring, object destructuring.

In function parameter:
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

In array destructuring:

```js
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]
```

In object destructuring:

```js
const user = { name: "Tamim", age: 21, country: "BD" };
const { name, ...rest } = user;

console.log(name); // Tamim
console.log(rest); // { age: 21, country: "BD" }
```

#### 1.4.7.3. spread operator
Spreads operator breaks an array or object into individual values. It is Used in Function calls, array literals and object literals.

In function call:

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


#### 1.4.7.4. Nullish Coalescing operator (??)
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

## 1.5. Loops

### 1.5.1. for loop:

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

### 1.5.2. while loop:

```js
let i = 0;
while (i < 5) {
    console.log(i); // 0 1 2 3 4
    i++;
}
```

### 1.5.3. do while loop:

```js
let i = 0;
do {
    console.log(i); // 0 1 2 3 4
    i++;
} while (i < 5);
```

### 1.5.4. for..of loop (for iterables):

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

### 1.5.5. for..in loop (for objects):

```
const obj = {
    a: 1,
    b: 2
};

for (const key in obj) {
    console.log(key, obj[key]);
}
/*
key = a
key = b

obj[key] = obj[a] = 1
obj[key] = obj[b] = 2
*/
```

### 1.5.6. forEach method (only for array):

```js
const numbers = [1, 2, 3];
numbers.forEach(function (num) {
    console.log(num); // 1 2 3
});

// or

const num2 = [4, 5, 6];
num2.forEach(num2 => console.log(num2)) // 4 5 6
```
Note: It does not support break or continue.


## 1.7. function

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

### 1.7.1. What is the difference between return and no return in a function?

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

### 1.7.2. Default Parameter:

In JavaScript, default parameters allow you to set default values for function parameters. If no arguments is passed when the function is called, the default parameter will be used.

```
function showGreet(name = "Guest") {
  console.log("Hello, " + name + "!");
}
showGreet("Tamim"); // Output: Hello, Tamim!
showGreet();        // Output: Hello, Guest!
```

### 1.7.3. CallBack Function

A callback is a function passed as an argument to another function, to be called later.

```js
// A function that takes another function as a callback
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling the callback
}

// Passing a function as a callback
function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Tamim", sayGoodbye);

// Output:
// Hello Tamim
// Goodbye!
```


### 1.7.4. Arrow Function:

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

### 1.7.5. Difference between arrow function and normal function

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

- Arrow functions are ideal for callbacks, especially with array methods like map, filter, forEach.
- normal function are not ideal for callback

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


### 1.7.6. Recursion

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

#### 1.7.6.1. what is Call Stack:

A call stack is a data structure that keeps track of function calls in a Last-In-First-Out (LIFO) manner. When a recursive function calls itself, here's what happens:

*   New Frame Creation: Each function call creates a new "stack frame" containing the function's parameters, local variables, and return address
*   Stack Growth: These frames pile up on top of each other as the recursion goes deeper
*   Base Case Reached: When the base case is hit, the recursion stops adding new frames
*   Stack Unwinding: Functions start returning values and their frames are removed from the stack in reverse order

![callstack](images/callStack.png)  

#### 1.7.6.2. How the recursion Works:

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
    

#### 1.7.6.3. Find Factorial Using Recursion:

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

![call-stack-2](images/Call Stack2.png.png)


    

### 1.7.7. Closure

A closure is a function technique that remembers the variables from its outer scope, even after that outer function has finished executing.

#### 1.7.7.1. Closure Features

*   Keeps scope alive - Inner function remembers variables from outer scope
*   Useful in data hiding - Helps in making private variables
*   Doesn’t lose data - Keeps values even after outer is gone

```js
function outer() {
    let name = "Tamim"; // outer variable

    function inner() {
        console.log("Hello " + name); // inner uses outer variable
    }

    return inner; // return inner function
}

const greet = outer(); // outer() is called, inner() is returned

greet(); // Hello Tamim 
```

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

## 1.8. string

String represents text, enclosed in single quotes, double quotes, or backticks. Strings are iterable, array-like objects, and immutable. They are not actual objects, but they appear like objects because JavaScript automatically convert them into a temporary String object whenever you use properties or methods on it.

When you access a property or method on a string, JavaScript creates a temporary string object behind the scenes:

```js
let obj = new String("hello"); 
console.log(typeof obj); // "object"
```

For Example:

```js
let str = "hello";
let upper = str.toUpperCase();
console.log(upper); // "HELLO"
```
Behind the scenes:

str.toUpperCase() → engine makes new String("hello") → calls .toUpperCase() on the temporary object → returns "HELLO" → discards the temporary object.

This mechanism allows string primitives to behave like objects, giving them methods and properties, while remaining immutable and primitive.

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

#### Object.freeze():

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

#### Object.seal():

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

#### With in operator:

```js
let user = {
    name: "John",
    age: 30,
}

console.log("age" in user); // true, user.age exists
console.log("location" in user); // false, user.location doesn't exist
```

#### With includes() method:

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

#### With hasOwnProperty() method:

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

### Get the length of an array using length property:

```js
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits.length); // 3
```

Since, array are object so it copied by reference, means Assigning an array to another variable does not create a new array. They both point to the same memory address:

```

let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

console.log(arr === fruits); // true

arr.push("Pear"); // modify the array by reference

console.log(fruits); // [ 'Banana', 'Pear' ] - 2 items now
```

### for..of loop

One of the oldest ways to cycle array items is the for loop over indexes:

```

let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

**With for..of loop**

```

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
    console.log(fruit);
}
```

Technically, because arrays are objects, it is also possible to use for..in, but it gives you the keys (like "0", "1", or even custom properties) instead of the actual values.

```

const fruits = ["apple", "banana", "mango"];
fruits.custom = "extra"; // adding a property to the array

for (const key in fruits) {
    console.log(key); // 0, 1, 2, custom
}
```

### Array Methods

1.  Adding / Removing Elements

-   #### push/pop and unshift/shift:
    
    | Operation                                        | Method    |
    | ------------------------------------------------ | --------- |
    | Adds element to end and returns the new length   | push()    |
    | Remove the last element and returns the element  | pop()     |
    | Adds element to start and returns the new length | unshift() |
    | Remove the first element and returns the element | shift()   |
    
    ```
    
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
    
-   #### splice(start, deleteCount, ...items) – Modify array by remove, add, or replace elements and returns removed items:
    
    ```
    
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
    
-   #### slice(start, end) – Returns a shallow copy from start to before end, doesn't change original:
    
    ```
    
    let arr = ["t", "e", "s", "t"];
    
    console.log(arr.slice(1, 3)); // [ 'e', 's' ]
    console.log(arr); // [ 't', 'e', 's', 't' ]
    console.log(arr.slice(-2)); // [ 's', 't' ]
    console.log(arr.slice()) // [ 't', 'e', 's', 't' ]
    ```
    

#### Note:

-   Use splice() when you want to change the original array (remove/insert/replace).
-   Use slice() when you want a copy of part of the array, without changing the original.

5.  Searching / Location

-   #### indexOf(item) – Returns the index of the first match, or -1:
    
    ```
    
    let arr = [1, 2, 3];
    
    console.log(arr.indexOf(2)); // 1
    console.log(arr.indexOf(4)); // -1
    ```
    
-   #### lastIndexOf(item) – Returns the index of the last match, or -1:
    
    ```
    
    let arr = [1, 2, 2, 3];
    
    console.log(arr.lastIndexOf(2)); // 2
    console.log(arr.lastIndexOf(5)); // -1
    ```
    
-   #### includes(item) – Returns true if array contains item, or false:
    
    ```
    
    let arr = [1, 2, 3];
    
    console.log(arr.includes(2)); // true
    console.log(arr.includes(5)) // false
    ```
    

7.  Iteration / Transformation
| Method | Purpose | Returns | Modifies Original Array | | | ----------- | ------------------------------------------------------- | ------------------------------- | ----------------------- | --- | | \`map()\` | return a new array by applying function to each element | ✅ New array | ❌ No | | \`forEach()\` | Executes a function for each element; no return value | ❌ No Return | ❌ No | | \`filter()\` | Filters elements based on a condition | ✅ New filtered array | ❌ No | | \`find()\` | Finds the \*\*first\*\* element that matches a condition | ✅ Single element or \`undefined\` | ❌ No |

-   #### forEach(callback) – Executes a function for each element; no return value:
    
    ```
    
    let arr = [1, 2, 3]
    arr.forEach(n => console.log(n * 2)); // 2 4 6       
    ```
    
    ```
    
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
    
-   #### map(callback) – return a new array by applying function to each element:
    
    ```
    
    let arr = [1, 2, 3]
    let arr2 = arr.map(n => n * 2);
    console.log(arr) // [ 1, 2, 3 ]
    console.log(arr2) // [ 2, 4, 6 ]
    ```
    
    ```
    
    // using map for just printf (not recommended)
    const numbers = [1, 2, 3, 4, 5];
    
    const newNumber = numbers.map(number => console.log(number))
    
    console.log(newNumber) // [ undefined, undefined, undefined, undefined, undefined ]
    ```
    
    ```
    
    // using map for both element and index
    const names = ["tamim", "nasrin", "maria"];
    
    const newNames = names.map((element, index) => console.log(element, index))
    
    /*
    tamim 0
    nasrin 1
    maria 2
     */
    ```
    
    ```
    
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
    
-   #### filter(callback) – return a new array with elements that pass the test:
    
    ```
    
    let arr = [1, 2, 3, 4]
    let arr2 = arr.filter(n => n % 2 === 0);
    console.log(arr) // [ 1, 2, 3, 4 ]
    console.log(arr2) // [ 2, 4 ]
    ```
    
    ```
    
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
    
-   #### find(callback) – Returns the first element that matches:
    
    ```
    
    let arr = [1, 2, 3, 4, 5];
    const result = arr.find(n => n > 2);
    console.log(result); // 3
    ```
    
    ```
    
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
    
-   #### findIndex(callback) – Returns the index of the first element that matches:
    
    ```
    
    let arr = [1, 2, 3, 4, 5];
    const result = arr.findIndex(n => n > 2);
    console.log(result); // 2
    ```
    
-   #### reduce()– Reduces array to a single value:
    
    Syntax:
    
    ```
    reduce((accumulator, currentValue) => ..., initialValue);
    ```
    
    ```
    
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

9.  Reordering / Combining

-   #### concat(...arrays) – Returns a new array by merging arrays/values:
    
    ```
    
    let arr = [1, 2];
    const arr2 = arr.concat([3, 4], 5);
    console.log(arr); // [ 1, 2 ]
    console.log(arr2); // [ 1, 2, 3, 4, 5 ]
    ```
    
-   #### join(separator) – Returns a string by joining array elements using the given separator:
    
    ```
    
    let arr = ["a", "b", "c"];
    let arr2 = arr.join("-");
    console.log(arr); // [ 'a', 'b', 'c' ]
    console.log(arr2); // a-b-c
    
    const arr = ['Hello', 'World'];
    let arr3 = arr.join(" ");
    console.log(arr); // ['Hello', 'World']
    console.log(arr3); // Hello World
    ```
    
-   #### split(separator) – Splits a string into an array using the given separator:
    
    ```
    
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
    
-   #### reverse() – Reverses the array:
    
    ```
    
    let arr = [1, 2, 3];
    console.log(arr.reverse()) // [ 3, 2, 1 ]
    ```
    
-   #### sort – return a new sorted array:
    
    ```
    
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
    thats why, "1" vs "2" → "1" comes first "2" vs "15" → "1" comes before "2" so "15" comes before "2" So the result becomes: \[1, 15, 2\]
    
    To fix it, we need to use a custom compare function to sort it by js sort() method. js sort() method used this custom function internally to determine the correct sorting.
    
    ```
    let arr2 = [1, 2, 15];
    console.log(arr2.sort((a, b) => a - b)); // [1, 2, 15]
    ```
    
    How it works:
    
    `(a, b) => a - b this function returns:`
    -   Negative number (a - b < 0) → keep a before b
    -   Positive number (a - b > 0) → place b before a
    -   Zero (a - b === 0) → leave a and b unchanged

11.  Others

-   #### some() –Return true if any element passes the test, else false:
    
    ```
    
    let arr = [1, 2, 3];
    const arr2 = arr.some(n => n > 2);
    console.log(arr2) // true
    ```
    
-   #### every() –Return true if all element passes the test, else false:
    
    ```
    
    let arr = [1, 2, 3];
    const arr2 = arr.every(n => n > 2);
    console.log(arr2) // false
    ```
    

-   #### at(index) – Returns element at index; supports negative indexing:
    
    ```
    // With at method
    let fruits = ["Apple", "Orange", "Plum"];
    
    console.log(fruits.at(-1)); // Plum
    
    // without at method
    let fruits = ["Apple", "Orange", "Plum"];
    console.log(fruits[fruits.length - 1]); // Plum
    ```
    

-   #### Array.isArray(value) – Return true if value is an array, else false:
    
    ```
    
    const arr = [1, 2]
    const result = Array.isArray(arr);
    console.log(result) // true       
    ```
    
-   #### fill(value, start?, end?) – Fills array with value:
    
    ```
    
    const arr = [1, 2, 3]
    arr.fill(0, 1);
    console.log(arr) // [ 1, 0, 0 ]
    ```
    
-   #### flat(depth): Returns a new array after concatenating all the nested arrays up to the given depth:
    
    ```
    
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

## 1.11. set
A Set in JavaScript is a collection of unique values (no duplicates allowed).

- Stores unique values
- Methods: add, delete, has, clear
- Iteration: for...of, forEach
- Use cases: remove duplicates, track unique items

### 1.11.1. creating a set

```js
// Create an empty Set
const mySet = new Set();

// Create a Set with initial values
const numbers = new Set([1, 2, 3, 4, 4, 5]); // duplicates ignored

console.log(numbers); // Set(5) {1, 2, 3, 4, 5}
```

### 1.11.2. Adding & Removing Values

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

### 1.11.3. Checking & Size

```js
const letters = new Set(["a", "b", "c"]);

console.log(letters.has("b")); // true
console.log(letters.has("z")); // false

console.log(letters.size); // 3
```

### 1.11.4. Iterating Over a Set

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

### 1.11.5. Convert Set ↔ Array

```js
const nums = [1, 2, 2, 3, 4, 4];
const uniqueNums = new Set(nums); // remove duplicates
console.log(uniqueNums); // Set {1, 2, 3, 4}

// Convert back to array
const uniqueArray = [...uniqueNums];
console.log(uniqueArray); // [1, 2, 3, 4]
```



## 1.12. map
A Map in JavaScript is a collection of key-value pairs.

- Stores key-value pairs
- Unlike objects(keys must be Strings or Symbols only), her keys can be any type.
- Methods: set, get, delete, has, clear
- Iteration: for...of, forEach
- Use cases: frequency count, caching, dictionary-like storage

### 1.12.1. Creating a Map

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

### 1.12.2. Adding & Updating Values

```js
const student = new Map();

student.set("name", "Bob");
student.set("age", 21);

// Update existing key
student.set("age", 22);

console.log(student);
// Map(2) {"name" => "Bob", "age" => 22}
```

### 1.12.3. Getting & Checking Values

```js
console.log(student.get("name")); // Bob
console.log(student.has("age"));  // true
console.log(student.has("roll")); // false

console.log(student.size); // 2
```

### 1.12.4. Deleting & Clearing

```js
student.delete("age");
console.log(student); // Map(1) {"name" => "Bob"}

student.clear();
console.log(student); // Map(0) {}
```

### 1.12.5. Iterating Over a Map

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





## 1.5. Iterables 

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











## 1.16. Destructuring

## 1.17. Strict Mode

## 1.18. Error Handling

## 1.19. Js Modules: Import and export

## 1.20. Regular Expression

## 1.21. Local Storage and Session Storage

## 1.22. Asynchronous and Synchronous JavaScript -->



# 2. Part 3: DOM
## 2.1. An Introduction To the DOM
## 2.2. DOM Traversing
## 2.3. Elements selecting methods
## 2.4. Content Manipulation
## 2.5. Element Attributes and Element Properties
## 2.6. CSS and Class Styling
## 2.7. Creating, Adding and Removing Element Methods
## 2.8. Events

# 3. Part 3: JS Exercise
## 3.1. Operator Problems
## 3.2. Loop Problems
## 3.3. String Problems
## 3.4. Array Problems
## 3.5. Object Problems
## 3.6. Function Problems



























