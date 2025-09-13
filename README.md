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























<!-- ## 1.9. array -->

<!-- ## 1.10. object -->




<!-- ## 1.16. Destructuring

## 1.17. Strict Mode

## 1.18. Error Handling

## 1.19. Js Modules: Import and export

## 1.20. Regular Expression

## 1.21. Local Storage and Session Storage

## 1.22. Asynchronous and Synchronous JavaScript -->


<!-- 
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




 -->








