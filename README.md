<h1 align="center">JavaScript Notes</h1>


- [Part 1: JS Fundamental](#part-1-js-fundamental)
  - [An Introduction to Javascript](#an-introduction-to-javascript)
    - [What is JavaScript:](#what-is-javascript)
    - [JavaScript History:](#javascript-history)
    - [Why Did JavaScript Need a Standard Version:](#why-did-javascript-need-a-standard-version)
    - [JavaScript Engines:](#javascript-engines)
    - [Hello World](#hello-world)
    - [Why JavaScript is one of the most hated language:](#why-javascript-is-one-of-the-most-hated-language)
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
    - [Immutable and Mutable:](#immutable-and-mutable)
    - [AutoBoxing](#autoboxing)
      - [Autoboxing with string:](#autoboxing-with-string)
      - [Autoboxing with Numbers:](#autoboxing-with-numbers)
    - [Type Conversion:](#type-conversion)
  - [Operator](#operator)
    - [Arithmetic Operators (+, -, \*, /, %, \*\*):](#arithmetic-operators-------)
    - [Assignment Operators (=, +=, -=, \*=, /=):](#assignment-operators------)
    - [Increment / Decrement Operators (--, ++):](#increment--decrement-operators----)
    - [Comparison Operator (\>, \<, \>=, \<=, ==, ===, !=, !==):](#comparison-operator--------)
      - [String comparison:](#string-comparison)
        - [How to convert letter to unicode or Ascii values:](#how-to-convert-letter-to-unicode-or-ascii-values)
        - [How to convert Ascii values to letter:](#how-to-convert-ascii-values-to-letter)
      - [Difference between == and ===:](#difference-between--and-)
    - [Logical Operators (\&\&, ||, ! ,, !!):](#logical-operators-----)
    - [Conditional Operators (if, else, else if, ? :, switch case):](#conditional-operators-if-else-else-if---switch-case)
      - [Truthy and Falsy values:](#truthy-and-falsy-values)
    - [Others Operators](#others-operators)
      - [typeof operator:](#typeof-operator)
      - [rest and spread operator:](#rest-and-spread-operator)
        - [Rest Operator](#rest-operator)
        - [spread operator:](#spread-operator)
      - [Nullish Coalescing operator (??):](#nullish-coalescing-operator-)
      - [|| vs ??:](#-vs-)
    - [Operator Precedence:](#operator-precedence)
  - [Problem solving: Variables, Data Types and Operators:](#problem-solving-variables-data-types-and-operators)
  - [Loops](#loops)
    - [for loop:](#for-loop)
    - [while loop:](#while-loop)
    - [do while loop:](#do-while-loop)
    - [for..of loop (for iterables: string, array, set, map):](#forof-loop-for-iterables-string-array-set-map)
      - [Iterables (string, array, set, map):](#iterables-string-array-set-map)
        - [behind the scene of for..of:](#behind-the-scene-of-forof)
          - [On array:](#on-array)
          - [On String:](#on-string)
          - [On Set:](#on-set)
          - [On Map:](#on-map)
        - [behind the scene of spread operator:](#behind-the-scene-of-spread-operator)
        - [Behind the scene of destructuring:](#behind-the-scene-of-destructuring)
    - [for...in loop (for objects):](#forin-loop-for-objects)
      - [Enumeration:](#enumeration)
        - [Behind the scenes of for...in loop:](#behind-the-scenes-of-forin-loop)
      - [Why for...in is not recommended for arrays:](#why-forin-is-not-recommended-for-arrays)
  - [Problem Solving: Loops](#problem-solving-loops)
  - [function](#function)
    - [What is the difference between return and no return in a function?](#what-is-the-difference-between-return-and-no-return-in-a-function)
    - [Default Parameter:](#default-parameter)
    - [CallBack Function](#callback-function)
      - [callback hell:](#callback-hell)
    - [Arrow Function:](#arrow-function)
    - [Difference between arrow function and normal function](#difference-between-arrow-function-and-normal-function)
    - [Anonymous function](#anonymous-function)
      - [Common Use Cases for Anonymous Functions:](#common-use-cases-for-anonymous-functions)
    - [Recursion](#recursion)
      - [Call Stack:](#call-stack)
    - [Closure](#closure)
    - [Difference between callback function, recursion and closure](#difference-between-callback-function-recursion-and-closure)
    - [Pure and Impure functions:](#pure-and-impure-functions)
  - [Problem Soling: Function](#problem-soling-function)
  - [Problem Soling: Recursion](#problem-soling-recursion)
  - [string](#string)
    - [Strings are immutable:](#strings-are-immutable)
    - [Quotes:](#quotes)
    - [String Methods:](#string-methods)
    - [Common Property / Methods for string / array:](#common-property--methods-for-string--array)
  - [Problem Solving: String](#problem-solving-string)
  - [array](#array)
    - [Array Methods:](#array-methods)
      - [Adding / Removing Elements:](#adding--removing-elements)
      - [Iteration / Transformation (Higher-order functions):](#iteration--transformation-higher-order-functions)
      - [Others:](#others)
    - [Common Property / Methods for string / array:](#common-property--methods-for-string--array-1)
  - [Problem Solving: Array](#problem-solving-array)
  - [Objects:](#objects)
    - [Dot Notation VS Bracket Notation:](#dot-notation-vs-bracket-notation)
    - [Objects References and cloning and marging:](#objects-references-and-cloning-and-marging)
      - [Cloning and merging:](#cloning-and-merging)
    - [Object.keys(), Object.Values() and Object.entries():](#objectkeys-objectvalues-and-objectentries)
    - [Object.freeze() vs Object.seal():](#objectfreeze-vs-objectseal)
    - [Check Property existence:](#check-property-existence)
    - [Create an Object Method:](#create-an-object-method)
    - [Optional Chaining (?)](#optional-chaining-)
    - [Date Object:](#date-object)
    - [Math Object:](#math-object)
  - [Problem Solving: Object](#problem-solving-object)
  - [Destructuring](#destructuring)
  - [Error Handling:](#error-handling)
    - [Common JS Errors:](#common-js-errors)
      - [ReferenceError](#referenceerror)
      - [TypeError](#typeerror)
  - [Js Modules: Import and export](#js-modules-import-and-export)
    - [Export:](#export)
    - [Import:](#import)
  - [Local Storage and Session Storage](#local-storage-and-session-storage)
    - [local storage methods:](#local-storage-methods)
    - [Update the Local Storage key and values:](#update-the-local-storage-key-and-values)
  - [Asynchronous and Synchronous JavaScript](#asynchronous-and-synchronous-javascript)
    - [Web API:](#web-api)
    - [Event loop:](#event-loop)
    - [setTimeOut() and setInterval()](#settimeout-and-setinterval)
    - [JSON, fetch, async/await](#json-fetch-asyncawait)
      - [JSON](#json)
      - [fetch](#fetch)
      - [async/await:](#asyncawait)
- [Part 2: DOM](#part-2-dom)
  - [Introduction To the DOM](#introduction-to-the-dom)
    - [What is DOM:](#what-is-dom)
    - [DOM Tree Structure:](#dom-tree-structure)
    - [Parent, Child, and Sibling Relationships:](#parent-child-and-sibling-relationships)
    - [DOM Collection:](#dom-collection)
    - [Document Object:](#document-object)
    - [DOM VS BOM:](#dom-vs-bom)
    - [Q\&A](#qa)
  - [DOM Traversing](#dom-traversing)
    - [parentNode vs parentElement:](#parentnode-vs-parentelement)
    - [childNodes vs children:](#childnodes-vs-children)
    - [firstChild vs firstElementChild:](#firstchild-vs-firstelementchild)
    - [lastChild vs lastElementChild:](#lastchild-vs-lastelementchild)
    - [nextSibling vs nextElementSibling:](#nextsibling-vs-nextelementsibling)
    - [previousSibling vs previousElementSibling:](#previoussibling-vs-previouselementsibling)
  - [Elements Selecting Methods](#elements-selecting-methods)
    - [getElementById():](#getelementbyid)
    - [getElementsByClassName():](#getelementsbyclassname)
    - [getElementsByTagName():](#getelementsbytagname)
    - [getElementsByName():](#getelementsbyname)
    - [querySelector():](#queryselector)
    - [querySelectorAll():](#queryselectorall)
    - [Examples:](#examples)
  - [Content Manipulation](#content-manipulation)
    - [innerHTML vs outerHTML vs textContent vs innerText:](#innerhtml-vs-outerhtml-vs-textcontent-vs-innertext)
  - [Element Attributes and Element Properties](#element-attributes-and-element-properties)
    - [Element Attributes:](#element-attributes)
      - [getAttribute(), setAttribute(), removeAttribute() and hasAttribute():](#getattribute-setattribute-removeattribute-and-hasattribute)
      - [attributes property:](#attributes-property)
    - [Element properties:](#element-properties)
      - [id, className, classList:](#id-classname-classlist)
    - [tagName vs nodeName:](#tagname-vs-nodename)
    - [nodeType and nodeValue:](#nodetype-and-nodevalue)
      - [Form Element Properties:](#form-element-properties)
  - [CSS and Class Styling](#css-and-class-styling)
    - [CSS Styling:](#css-styling)
    - [Style Property:](#style-property)
    - [cssText property:](#csstext-property)
    - [Class Styling:](#class-styling)
      - [className Property:](#classname-property)
      - [classList methods:](#classlist-methods)
  - [Creating, Adding and Removing Element Methods](#creating-adding-and-removing-element-methods)
    - [Creating Elements:](#creating-elements)
      - [createElement():](#createelement)
      - [createTextNode():](#createtextnode)
      - [createDocumentFragment():](#createdocumentfragment)
      - [cloneNode():](#clonenode)
    - [Adding Elements:](#adding-elements)
      - [appendChild():](#appendchild)
      - [insertBefore():](#insertbefore)
      - [insertAdjacentElement():](#insertadjacentelement)
      - [insertAdjacentHTML():](#insertadjacenthtml)
      - [insertAdjacentText():](#insertadjacenttext)
      - [before(), parpend(), append(), after():](#before-parpend-append-after)
    - [Removing Elements:](#removing-elements)
      - [removeChild():](#removechild)
      - [remove():](#remove)
      - [replaceChild():](#replacechild)
      - [replaceWith():](#replacewith)
  - [Events](#events)
    - [Event Basic:](#event-basic)
      - [What is events:](#what-is-events)
      - [Event Object:](#event-object)
      - [preventDefault():](#preventdefault)
    - [Adding Events:](#adding-events)
      - [addEventListener():](#addeventlistener)
      - [removeEventListener():](#removeeventlistener)
      - [onClick vs addEventListener():](#onclick-vs-addeventlistener)
    - [Common Events:](#common-events)
    - [Event Flow:](#event-flow)
      - [UseCapture paramenter:](#usecapture-paramenter)
      - [stopPropagation():](#stoppropagation)
      - [stopImmediatePropagation():](#stopimmediatepropagation)
      - [Event Delegation:](#event-delegation)
    - [Event Examples:](#event-examples)
- [Part 3: OOP](#part-3-oop)
  - [Static Keyword:](#static-keyword)
  - [The Four Pillars of OOP:](#the-four-pillars-of-oop)
    - [Encapsulation:](#encapsulation)
    - [Abstraction:](#abstraction)
      - [Difference Between Encapsulation and Abstraction:](#difference-between-encapsulation-and-abstraction)
    - [Inheritance:](#inheritance)
    - [Polymorphism:](#polymorphism)
      - [Using Methods Overriding:](#using-methods-overriding)
      - [Using Duck Typing:](#using-duck-typing)
- [Part 4: Data Structure](#part-4-data-structure)
  - [Array](#array-1)
  - [Object](#object)
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
  - [Stack](#stack)
  - [Queue](#queue)
  - [Linked List](#linked-list)
  - [Graph](#graph)
- [Part 5: Algorithms](#part-5-algorithms)
  - [Time and Space Complexity](#time-and-space-complexity)
  - [Searching](#searching)
  - [Sorting](#sorting)
- [Part 6: TypeScript](#part-6-typescript)
  - [TypeScript Introduction:](#typescript-introduction)
    - [What is TypeScript:](#what-is-typescript)
    - [TypeScript Features:](#typescript-features)
    - [How to run TypeScript:](#how-to-run-typescript)
    - [Explicit Typing and Type Inference:](#explicit-typing-and-type-inference)
  - [number, bigint, boolean, string, symbol, null, undefined:](#number-bigint-boolean-string-symbol-null-undefined)
  - [any, unknown](#any-unknown)
    - [any](#any)
    - [unknown](#unknown)
  - [literal, union, enum, and as const:](#literal-union-enum-and-as-const)
    - [Literal:](#literal)
    - [union:](#union)
    - [enum:](#enum)
    - [as const:](#as-const)
      - [Diference between as const and readonly:](#diference-between-as-const-and-readonly)
    - [Difference between literal, union, enum and as const:](#difference-between-literal-union-enum-and-as-const)
  - [Function:](#function-1)
    - [void:](#void)
    - [never:](#never)
  - [object:](#object-1)
  - [array and tuple](#array-and-tuple)
    - [array:](#array-2)
    - [tuple:](#tuple)
  - [type alias, interface and intersection:](#type-alias-interface-and-intersection)
    - [type alias](#type-alias)
    - [interface](#interface)
    - [intersection:](#intersection)
  - [Type Assertion:](#type-assertion)
  - [Type Guards](#type-guards)
    - [Typeof:](#typeof)
    - [in Operator:](#in-operator)
    - [Instanceof:](#instanceof)
    - [Equality Narrowing:](#equality-narrowing)
    - [Truthiness Narrowing:](#truthiness-narrowing)
    - [Array.isArray():](#arrayisarray)
  - [Generics](#generics)
    - [Constrain](#constrain)
      - [with keyof:](#with-keyof)
    - [conditional Types:](#conditional-types)
    - [Mpped Types:](#mpped-types)
  - [Utility Types:](#utility-types)
  - [OOP:](#oop)
    - [Classes:](#classes)
    - [Static Keyword:](#static-keyword-1)
    - [The Four Pillars of OOP:](#the-four-pillars-of-oop-1)
      - [Encapsulation:](#encapsulation-1)
      - [Abstraction:](#abstraction-1)
        - [Difference Between Encapsulation and Abstraction:](#difference-between-encapsulation-and-abstraction-1)
      - [Inheritance:](#inheritance-1)
      - [Polymorphism:](#polymorphism-1)
        - [Using Methods Overriding:](#using-methods-overriding-1)
        - [Using Duck Typing:](#using-duck-typing-1)

---


# Part 1: JS Fundamental

## An Introduction to Javascript

### What is JavaScript:

JavaScript is a: 
- scripting language 
  - A scripting language is a programming language that is executed by an interpreter, which translates the code into machine code and runs it line by line (or step by step) at runtime, instead of compiling the entire program into machine code beforehand.
    - Compile time → when the code is being converted into machine code (before execution start).
    - Runtime → when the  code is actually being executed.
    ![](./images/scripting-language)

- Single Threaded
  - Has only one thread (one call stack), meaning it can executes one task at a time.

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
**Note:**
- statement: A single instruction in a programming language
  - ```console.log("Hello World");```
- code: Any written instructions in a programming language, from one line to many. 
  - ```console.log("Hello World");```
- program: A complete set of code written in a programming language to solve a problem or perform a task by (input → processing → output)..
  - Find the largest number in an array
- Method: when a function is stored as a property of an object, it’s called a method.

### Why JavaScript is one of the most hated language:

1. Weird Type Conversions: 

```js
console.log(1 + "2");   // "12"  (number + string = string)
console.log("2" - 1);   // 1     (string - number = number)
console.log("2" + 1);   // "21"  (string + number = string)
```

```js
console.log(true + false); // 1
console.log(1 < 2 < 3);    // true
console.log(3 < 2 < 1);    // true but 3 < 2 → false, 2 < 1 → false
```

```js
console.log([] + []) // ''
console.log([] + {}) // [object Object]
console.log({} + []) // 0
console.log({} + {}) // NaN
```

2. The == Disaster: 

```jsx
console.log(0 == false);   // true
console.log('' == false);  // true
console.log(null == undefined); // true
console.log([] == false);  // true
console.log([] == 0);      // true
console.log([] == ![]);    // true 😵
```

```jsx
console.log(0 == "0") // true
console.log(0 == []) // true
console.log("0" == []) // true
```

3. null and undefined Confusion:

JavaScript has two different “nothing” values — null and undefined.

```jsx
console.log(typeof null); // "object" ❌ (bug from 1995!)
console.log(typeof undefined); // "undefined"
console.log(null === undefined) // false
```
Even the creator of JavaScript admitted this was a mistake, but it’s too late to fix now — it would break 
millions of websites.

Note: 
- Undefined = a variable has no value assigned 
- Null = a variable has been intentionally assigned empty

1. NaN Has an Identity Crisis

```js
typeof NaN; // "number" - Wait what? “Not-a-Number” is a number?!

console.log(NaN == NaN)
console.log(NaN === NaN)
```
Note: NaN is the only value in JavaScript that is not equal to itself.

5. The “this” Keyword Madness:

this loses its context when the method is called separately. That’s why people call it one of the most confusing parts of JavaScript.

```jsx
const user = {
    name: "Tamim",
    sayHi() {
        console.log("hi", this.name);
    },
    sayHey() {
        console.log("hey", user.name)
    }
};

user.sayHi(); // Tamim ✅
user.sayHey(); // hey Tamim ✅

const hi = user.sayHi;
hi();      // undefined ❌

const hey = user.sayHey
hey() // hey Tamim
```

Because this depends on how the function is called, not where it’s written. 😡 Many developers spend hours debugging “why this is undefined.”


That’s why developers say:
👉 Always use ===, not ==.

6. Too Many Ways to Say “Hi”: 

```jsx
function sayHi() {}
const sayHi = function() {}
const sayHi = () => {}
```

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
// console.log(x); // ReferenceError: x is not defined
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
<td>Block-scoped

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
   
A variable has block scope if it is declared with let or const inside a curly braces { }. It is accessible only within that block.

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

![image](./images/data-types/data_types_in_javascript.webp)

### 7 Primitive Data Types:

1. Number 
Represents both integers and floating-point numbers. 
    
```js
let age = 25;
let money = 25.5345;

console.log("Age:", age); // Outputs: Age: 25
console.log("Money:", money.toFixed(2)); // Outputs: Money: 25.53
```

2. BigInt

JavaScript Numbers are only accurate up to 15 digits, but BigInt can represent an integer of any size, limited only by available memory.

There are two ways to create a BigInt:

```js
// Using an integer literal with an n suffix:
let x = 12345123451234512345n
// Using the BigInt() constructor with a string:
let y = BigInt("12345123451234512345");

console.log(x, y) // 12345123451234512345n 12345123451234512345n
```

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
   
It is a primitive data type and default value given by JavaScript when JavaScript expects a value but doesn’t find one:

**When we got undefined:**

- a variable Declared but not initialized

```js
let a;
console.log(a); // undefined
```

- Function without a return value

```js
function greet() {}
console.log(greet()); // undefined
```

- Accessing a non-existing object property

```js
let obj = { name: "Alice" };
console.log(obj.age); // undefined
```

- Accessing an array element that doesn’t exist

```js
let arr = [1, 2, 3];
console.log(arr[5]); // undefined
```

- IF Function parameters are not provided

```js
function sum(a, b) {
  console.log(b);
}
sum(5); // undefined
```

- Explicit assignment

```js
let x = undefined;
console.log(x); // undefined
```

7. Symbol

Represents a unique and immutable value, mainly used to create unique identifiers for object properties.

```js
let id = Symbol();
console.log(typeof id); // "symbol"

const name = "tamim";
let a = Symbol(name);
let b = Symbol(name);
console.log(a === b); // false
```

### 1 Non-Primitive Data Types:

8. Object  
   
In JavaScript, any data that is not a primitive type is considered an object type. The three most commonly used object types are:

- object
- array
- function 
  
### Immutable and Mutable: 

- Immutable (primitive data types) → cannot be changed after creation (you can only replace it with a new value)

- Mutable (non-primitive data type) → can be changed after creation

```js
// string (Immutable)
let str = "hello";
str[0] = "H"; 
console.log(str); // "hello" (unchanged)

str = "Hola"; 
console.log(str); // "Hola"

// array (mutable)
const arr = [1, 2, 3];
arr[0] = 10;       // changed

console.log(arr); // [10, 2, 3]
```

### AutoBoxing

Autoboxing in JavaScript is the automatic conversion of primitive data types (like string, number, boolean) into temporary object so you can use object methods and properties on them. JavaScript automatically wraps the primitive value in its object temporarily, whenever you access a property or method. After the operation, the object is discarded.

#### Autoboxing with string:

```js
let str = "hello";
console.log(str.length); // 5
console.log(str.toUpperCase()); // "HELLO"
```

Behind the scenes, Autoboxing convert string to temporary object:

```js
let temp = new String(str); // temporary object
temp.length;               // 5
temp.toUpperCase();        // "HELLO"
```

#### Autoboxing with Numbers:

```js
let num = 42;

console.log(num.toString()); // "42"
console.log(num.toFixed(2)); // "42.00"
```
Behind the scenes:

```js
let tempNum = new Number(num); // temporary object
tempNum.toString();            // "42"
tempNum.toFixed(2);            // "42.00"
```

### Type Conversion:

With global functions:

```js
console.log(parseInt("123"));       // 123
console.log(parseInt("12.34"));     // 12
console.log(parseInt("100px"));     // 100
console.log(parseInt("abc"));       // NaN
console.log(parseInt(true));        // NaN
console.log(parseInt(false));       // NaN
console.log(parseInt(""));          // NaN

console.log(parseFloat("10"));         // 10
console.log(parseFloat("12.34"));     // 12.34
console.log(parseFloat("100px"));     // 100
console.log(parseFloat("3.14hello")); // 3.14
console.log(parseFloat("abc"));       // NaN
console.log(parseFloat(true));       // NaN
console.log(parseFloat(false));       // NaN
console.log(parseFloat(""));        // NaN

// For Number all the behavior are same like parseInt and parseFloat but 
// number can also convert true, false and emptyString "" to boolean number
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(""));         // 0


console.log(String(123));       // "123"
console.log(String(true));      // "true"
console.log(String(false));     // "false"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
console.log(String([1, 2, 3])); // "1,2,3"

// Boolean follows js truthy and falsy values
console.log(Boolean(0));           // false
console.log(Boolean(1));           // true
console.log(Boolean(""));          // false
console.log(Boolean("Tamim"));     // true
console.log(Boolean(null));        // false
console.log(Boolean(undefined));   // false
console.log(Boolean([]));          // true (empty array is truthy)
console.log(Boolean({}));          // true (empty object is truthy)
```

with methods:

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

```

## Operator

An Operator is a special symbol that tells the program to performs a specific operation on one or more values.

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
- Post-increment (i++): First assigns the value of i, then increments it.

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

#### String comparison:

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

##### How to convert letter to unicode or Ascii values:

```js
console.log('a'.charCodeAt(0)); // Output: 97
console.log('a'.codePointAt(0)); // Output: 97
```

##### How to convert Ascii values to letter:

```js
console.log(String.fromCharCode(97)); // Output: 'a'
console.log(String.fromCodePoint(97)); // Output: 'a'
```

#### Difference between == and ===:

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

### Conditional Operators (if, else, else if, ? :, switch case):

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

#### Truthy and Falsy values:

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

#### typeof operator:

```js
console.log(typeof 0); // "number"
console.log(typeof 10n); // "bigint"
console.log(typeof true); // "boolean"
console.log(typeof "foo"); // "string"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof null); // object
console.log(typeof undefined); // undefined


console.log(typeof NaN); // number
```


#### rest and spread operator:

- Rest collects values into an object or array.
- while Spread expands object or iterables into individual values.

##### Rest Operator

It is used in Function parameters, array destructuring, object destructuring.

- function parameter:
  
```js

function multiply(multiplier, ...numbers) {
    console.log(multiplier);
    console.log(numbers);

}

multiply(2, 1, 2, 3);

/*
2
[ 1, 2, 3 ]
*/
```

- array destructuring:

```js
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]
```

- object destructuring:

```js
const user = { name: "Tamim", age: 21, country: "BD" };
const { name, ...rest } = user;

console.log(name); // Tamim
console.log(rest); // { age: 21, country: "BD" }
```

##### spread operator:

It is Used in Function argument, arrays and objects.

- function argument:

```js
function greet(a, b, c) {
    console.log(a, b, c);
}

const args = [1, 2, 3];
greet(args); // [ 1, 2, 3 ] undefined undefined
greet(...args); // 1 2 3
console.log(...args) // 1 2 3
```

- In Arrays:

```js
const num1 = [1, 2];
const num2 = [3, 4];
const all = [...num1, ...num2];
console.log(all); // [1, 2, 3, 4]

console.log(...all) // 1 2 3 4
console.log(Math.max(...all)) // 4
console.log(Math.min(...all)) // 1


const str = "hello";
const chars = [...str];
console.log(chars); // ['h', 'e', 'l', 'l', 'o']
```

- In Objects:

```js
const user1 = { name: "Tamim" };
const user2 = { age: 21 };
const merged = { ...user1, ...user2 };
console.log(merged); // { name: "Tamim", age: 21 }
```

#### Nullish Coalescing operator (??):

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
```

#### || vs ??:

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


### Operator Precedence:

| Operator      | Precedence                | Associativity |
| ------------- | ------------------------- | ------------- |
| `*`, `/`, `%` | 21 (high)                 | Left to Right |
| `+`, `-`      | 20 (low, because 20 < 21) | Left to Right |

example: 

```js
console.log(4 + 2 - 2 * 4 / 2) //  2

/*
- 2 * 4 → 8
- 8 / 2 → 4
- 4 + 2 → 6
- 6 - 4 → 2
*/
```


## Problem solving: Variables, Data Types and Operators:

**1. Say Hello to JS:**

Given a name S. Print "Hello, (name)" without parentheses.

| Input      | Output            |
| ---------- | ----------------- |
| programmer | Hello, programmer |


My Solution: 

```js
const s = "programmer"
console.log("Hello,", s); // Hello, programmer
console.log(`hello, ${s}`); // Hello, programmer
```

**2. Basic Data Types:**

You are given four numbers and one string in a single line of input. Your task is to print each value on a new line, in the same order as the input.

However:
- The second number should be treated as a BigInt (because it’s very large).
- The last number (the fifth value) must be printed with exactly one digit after the decimal point.

| Input                                        | Output         |
| -------------------------------------------- | -------------- |
| 3 12345123451234512345n a 334.23 14049.30493 | 3              |
|                                              | 12345678912345 |
|                                              | a              |
|                                              | 334.23         |
|                                              | 14049.3        |



My Solution: 

```js
const input = "3 12345123451234512345n a 334.23 14049.30493";
const inputArray = input.split(" ");

const secondElement = inputArray[1]
const secondElementArray = secondElement.split("")
secondElementArray.pop(secondElementArray.length - 1)
const secondElementArrayToString = secondElementArray.join("")
inputArray[1] = secondElementArrayToString

inputArray[4] = Number(inputArray[4]).toFixed(1)

for (const singleInput of inputArray) {
    console.log(singleInput)
}

/*
3
12345123451234512345
a
334.23
14049.3
*/
```

Better Solution:

```js
const input = "3 12345123451234512345n a 334.23 14049.30493";
const inputArray = input.split(" ");

// Convert BigInt string to BigInt → then to string (removes "n")
inputArray[1] = BigInt(inputArray[1].replace("n", "")).toString();

// Format the last number to 1 decimal place
inputArray[4] = Number(inputArray[4]).toFixed(1);

// Print all
for (const value of inputArray) {
    console.log(value);
}

/*
3
12345123451234512345
a
334.23
14049.3
*/
```

```js
const input = "3 12345123451234512345n a 334.23 14049.30493";
const [intVal, bigIntVal, charVal, floatVal, doubleVal] = input.split(" ");

console.log(intVal);
console.log(BigInt(bigIntVal.replace("n", "")).toString());
console.log(charVal);
console.log(floatVal);
console.log(Number(doubleVal).toFixed(1));

/*
3
12345123451234512345
a
334.23
14049.3
*/
```

**3. Simple Calculator:**

Given two numbers X and Y. Print the summation and multiplication and subtraction of these 2 numbers.

| Input | Output      |
| ----- | ----------- |
| 5 10  | 5 + 10 = 15 |
|       | 5 * 10 = 50 |
|       | 5 - 10 = -5 |


My Solution: 

```jsx
const num1 = 5;
const num2 = 10;

console.log(`${num1} + ${num2} = ${num1 + num2}`)
console.log(`${num1} * ${num2} = ${num1 * num2}`)
console.log(`${num1} - ${num2} = ${num1 - num2}`)

/*
5 + 10 = 15
5 * 10 = 50
5 - 10 = -5
*/
```

**4. Difference:**

Given four numbers A, B, C and D. Print the result of the following equation:

X = (A * B) - (C * D).

| Input | Output           |
| ----- | ---------------- |
| 1234  | Difference = -10 |
| 2345  | Difference = -14 |
| 4523  | Difference = 14  |


My Solution: 

```js
function calculateEquation(a, b, c, d) {
    const equation = a * b - c * d
    return equation
}

const equationResult = calculateEquation(1, 2, 3, 4);
console.log(equationResult) // -10
```

**5. Area of a Circle:**

Given a number R calculate the area of a circle using the following formula:

Area = π * R²

Note: consider π = 3.141592653.

| Input | Output       |
| ----- | ------------ |
| 2.00  | 12.566370612 |


My Solution: 

```js
function AreaOfACircle(pi, R) {
    // return equation = pi * Math.pow(R, 2)
    return equation = pi * (R ** 2)
}

const result = AreaOfACircle(3.141592653, 2.00);
console.log(result) // 12.566370612
```



**6. Summation from 1 to N:**

Given a number N. Print the summation of the numbers that is between 1 and N (inclusive).

| Input | Output |
| ----- | ------ |
| 3     | 6      |
| 10    | 55     |

My Solution: 

```js
function summationFrom1toN(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;
}

console.log(summationFrom1toN(3)); // 6
```

Better Solution:

```js
function summationFrom1toN(N) {
  return (N * (N + 1)) / 2;
}

console.log(summationFrom1toN(3));  // 6

// Note: sum of all numbers from 1 to N using the formula: N*(N+1)/2
```

**7. Two Numbers**

Given 2 numbers A and B. Print floor, ceil and round of A/B

| Input | Output           |
| ----- | ---------------- |
| 10 3  | floor 10 / 3 = 3 |
|       | ceil 10 / 3 = 4  |
|       | round 10 / 3 = 3 |
| 10 4  | floor 10 / 4 = 2 |
|       | ceil 10 / 4 = 3  |
|       | round 10 / 4 = 3 |
| 10 6  | floor 10 / 6 = 1 |
|       | ceil 10 / 6 = 2  |
|       | round 10 / 6 = 2 |


My Solution: 

```js
function divisionOfAB(A, B) {

    console.log(`floor ${A} / ${B} = ${Math.floor(A / B)}`)
    console.log(`ceil ${A} / ${B} = ${Math.ceil(A / B)}`)
    console.log(`round ${A} / ${B} = ${Math.round(A / B)}`)

}

divisionOfAB(10, 3);

/*
floor 10 / 3 = 3
ceil 10 / 3 = 4
round 10 / 3 = 3
 */
```

**8. Welcome for you with conditions:**

Given two numbers A and B. Print "Yes" if A is greater than or equal to B. Otherwise print "No".

| Input | Output |
| ----- | ------ |
| 10 9  | Yes    |
| 5 5   | Yes    |
| 5 7   | No     |


My Solution: 

```js
function greaterThanOrEqual(A, B) {
    if (A >= B) {
        console.log("Yes")
    }
    else {
        console.log("No")
    }
}

greaterThanOrEqual(10, 9);
```

**9. Multiples:**

Given two numbers A and B. Print "Multiples" if A is multiple of B or vice versa. Otherwise print "No Multiples".

Note: 
- A is Multiple of B if: A % B == 0; 12 % 3 == 0  // true → 12 is a multiple of 3
- B is Multiple of A if: B % A == 0; 3 % 12 == 0  // false → 3 is NOT a multiple of 12


| Input | Output       |
| ----- | ------------ |
| 9 3   | Multiples    |
| 6 24  | Multiples    |
| 12 5  | No Multiples |

My Solution: 

```js
function findMultiplesOrNot(A, B) {
    if (A % B === 0 || B % A === 0) {
        console.log("Multiples")
    }
    else {
        console.log("No Multiples")
    }
}

findMultiplesOrNot(9, 3); // Multiples
```

**10. Max and Min:**

Given 3 numbers A, B and C, Print the minimum and the maximum numbers.

| Input    | Output |
| -------- | ------ |
| 1 2 3    | 1 3    |
| -1 -2 -3 | -3 -1  |
| 10 20 -5 | -5 20  |

My Solution: 

```js
function findMaxAndMin(A, B, C) {
    const max = findMax(A, B, C)
    const min = findMin(A, B, C)

    console.log(min, max)
}
function findMax(A, B, C) {
    if (A >= B && A >= C) {
        return A;
    }
    else if (B >= A && B >= C) {
        return B;
    }
    else {
        return C;
    }
}
function findMin(A, B, C) {
    if (A <= B && A <= C) {
        return A;
    }
    else if (B <= A && B <= C) {
        return B;
    }
    else {
        return C;
    }
}

findMaxAndMin(1, 2, 3); // 1 2 3
```

Better Solution: 

```js
function findMaxAndMin(A, B, C) {
  const max = Math.max(A, B, C);
  const min = Math.min(A, B, C);
  console.log(min, max);
}

findMaxAndMin(1, 2, 3);     // 1 3
```

**11. The Brothers:**

Given two person names. Each person has {"the first name" + "the second name"}. Determine whether they are brothers or not.

Note: The two persons are brothers if they share the same second name.

| Input          | Output       |
| -------------- | ------------ |
| bassam ramadan | ARE Brothers |
| ayman salah    |              |
| ali salah      | ARE Brothers |
| ahmed ramadan  |              |
| ali kamel      | NOT          |
| ali salah      |              |

My Solution: 

```js
function findBrothersOrNot(person1, person2) {
    const person1LastName = person1.split(" ").slice(-1).join("")
    const person2LastName = person2.split(" ").slice(-1).join("")
    /*
    const person1LastName = person1.split(" ").slice(-1)[0];
    const person2LastName = person2.split(" ").slice(-1)[0];
    */
    if (person1LastName === person2LastName) {
        console.log("ARE Brothers")
    }
    else {
        console.log("NOT")
    }
}

const person1 = "bassam ramadan";
const person2 = "ahmed ramadan";

findBrothersOrNot(person1, person2); // ARE Brothers
```

Better Solution: 

```js
function findBrothersOrNot(person1, person2) {
  const [, lastName1] = person1.split(" ");
  const [, lastName2] = person2.split(" ");
  
  console.log(lastName1 === lastName2 ? "ARE Brothers" : "NOT");
}

findBrothersOrNot("bassam ramadan", "ahmed ramadan"); // ARE Brothers
findBrothersOrNot("ali kamel", "ali salah");  // NOT
```

```jsx
function findBrothersOrNot(person1, person2) {
  const lastName1 = person1.split(" ").at(-1);
  const lastName2 = person2.split(" ").at(-1);
  
  console.log(lastName1 === lastName2 ? "ARE Brothers" : "NOT");
}

findBrothersOrNot("bassam ramadan", "ahmed ramadan"); // ARE Brothers
findBrothersOrNot("ali kamel", "ali salah");  // NOT

// Note: .at(-1) method can directly access the last element of an array.
```

**12. Capital or Small Or Digit:**

Given a letter X. Determine whether X is Digit or Alphabet and if it is Alphabet determine if it is Capital Case or Small Case.

Note:

Digits in ASCII '0' = 48,'9' = 57 
Capital letters in ASCII 'A' = 65, 'Z' = 90
Small letters in ASCII 'a' = 97,'z' = 122

| Input | Output     |
| ----- | ---------- |
| A     | ALPHA      |
|       | IS CAPITAL |
| 9     | IS DIGIT   |
| a     | ALPHA      |
|       | IS SMALL   |


My Solution: 

```js
function findCapitalSmallOrDigit(X) {

    let letter = X;

    if (X >= 1 && X <= 9) {
        letter = X.toString()
    }

    const asciiValue = letter.charCodeAt(0)

    if (asciiValue >= 48 && asciiValue <= 57) {
        console.log("IS DIGIT")
    }
    else if (asciiValue >= 65 && asciiValue <= 90) {
        console.log("ALPHA\nIS CAPITAL")
    }
    else if (asciiValue >= 97 && asciiValue <= 122) {
        console.log(`ALPHA
IS SMALL`)
    }
}

findCapitalSmallOrDigit("A");
findCapitalSmallOrDigit(9);
findCapitalSmallOrDigit("a");

/*
ALPHA
IS CAPITAL
IS DIGIT
ALPHA
IS SMALL
*/
```

Better Solutions: 

```js
function findCapitalSmallOrDigit(X) {
  const ascii = X.toString().charCodeAt(0);

  if (ascii >= 48 && ascii <= 57) {
    console.log("IS DIGIT");
  } 
  else if (ascii >= 65 && ascii <= 90) {
    console.log("ALPHA\nIS CAPITAL");
  } 
  else if (ascii >= 97 && ascii <= 122) {
    console.log("ALPHA\nIS SMALL");
  } 
}

findCapitalSmallOrDigit("A");
findCapitalSmallOrDigit(9);
findCapitalSmallOrDigit("a");
```

```js
function findCapitalSmallOrDigit(X) {

 const value = X.toString();

  if (/[0-9]/.test(value)) {
    console.log("IS DIGIT");
  } 
  else if (/[A-Z]/.test(value)) {
    console.log("ALPHA\nIS CAPITAL");
  } 
  else if (/[a-z]/.test(value)) {
    console.log("ALPHA\nIS SMALL");
  }
}

findCapitalSmallOrDigit("A");
findCapitalSmallOrDigit(9);
findCapitalSmallOrDigit("a");
```

```js
function findCapitalSmallOrDigit(X) {

 const value = X.toString();

  if (!isNaN(value)) {
    console.log("IS DIGIT");
  } 
  else if (value === value.toUpperCase()) {
    console.log("ALPHA\nIS CAPITAL");
  } 
  else {
    console.log("ALPHA\nIS SMALL");
  }
}
  
findCapitalSmallOrDigit("A");
findCapitalSmallOrDigit(9);
findCapitalSmallOrDigit("a");
```

**13. Char:**

Given a letter X. If the letter is lowercase print the letter after converting it from lowercase letter to uppercase letter. Otherwise print the letter after converting it from uppercase letter to lowercase letter

Note : difference between 'a' and 'A' in ASCII is 32 .

| Input | Output |
| ----- | ------ |
| a     | A      |
| A     | a      |

My Solution: 

```js
function convertingLowercaseOrUppercase(X) {
    const ascii = X.charCodeAt(0)

    if (/[A-Z]/.test(X)) {
        const sum = ascii + 32;
        const asciiToAlpha = String.fromCharCode(sum);
        console.log(asciiToAlpha)
    }
    else {
        const sub = ascii - 32;
        const asciiToAlpha = String.fromCharCode(sub);
        console.log(asciiToAlpha)
    }
}

convertingLowercaseOrUppercase("a"); // A
convertingLowercaseOrUppercase("A"); // a
```

Better Solutions: 

```js
function toggleCase(X) {
  if (X === X.toUpperCase()) {
    console.log(X.toLowerCase());
  } else {
    console.log(X.toUpperCase());
  }
}

toggleCase("a"); // A
toggleCase("A"); // a
```

```js
```

**14. Calculator:**

Given a mathematical expression. The expression will be one of the following expressions: A+B, A−B, A∗B and A/B. Print the result of the mathematical expression.

Note: For the dividing operation you should print the division without any fractions.

| Input | Output |
| ----- | ------ |
| 7+54  | 61     |
| 17*10 | 170    |

My Solution: 

```js
function calculateExpression(num1, operator, num2) {
    switch (operator) {
        case "+":
            console.log(num1 + num2)
            break
        case "-":
            console.log(num1 - num2)
            break
        case "*":
            console.log(num1 * num2)
            break
        case "/":
            console.log(Math.floor(num1 / num2))
            break
        default:
            console.log("Unknown operator")
    }
}

calculateExpression(7, '+', 54); // 61
calculateExpression(17, '*', 10); // 170
```

Better Solutions:

```js
function calculateExpression(num1, operator, num2) {
  const operations = {
    '+': num1 + num2,
    '-': num1 - num2,
    '*': num1 * num2,
    '/': Math.floor(num1 / num2),
  };

  console.log(operations[operator] ?? "Unknown operator");
}

calculateExpression(7, '+', 54);  // 61
calculateExpression(17, '*', 10); // 170
```

**15. Digits Summation:**

Given two numbers N and M. Print the summation of their last digits.

| Input | Output |
| ----- | ------ |
| 13 12 | 5      |

My Solution: 

```js
function digitsSummation(N, M) {
    const NLastDigit = parseInt(getLastDigit(N))
    const MLastDigit = parseInt(getLastDigit(M))
    return NLastDigit + MLastDigit
}

function getLastDigit(number) {
    // const stringNumber = String(number)
    const stringNumber = number.toString()
    if (stringNumber.length === 1) {
        return number;
    }
    else {
        const arrayNumber = stringNumber.split("")
        const lastIndex = arrayNumber.length - 1;
        const lastElement = arrayNumber[lastIndex]
        return lastElement
    }
}
const result = digitsSummation(13, 12);
console.log(result) // 5
```

Better Solution: 

```js
function digitsSummation(N, M) {
    const lastDigitN = N % 10;
    const lastDigitM = M % 10;
    return lastDigitN + lastDigitM;
}

console.log(digitsSummation(13, 12)); // 5

// Note: for any number, n % 10 gives its last digit. 
```

```js
function digitsSummation(N, M) {
  const lastDigitN = Number(N.toString().slice(-1));
  const lastDigitM = Number(M.toString().slice(-1));
  return lastDigitN + lastDigitM;
}

console.log(digitsSummation(13, 12)); // 5
```

**16. First Digit:**

Given a number X. Print "EVEN" if the first digit of X is even number. Otherwise print "ODD".

| Input | Output |
| ----- | ------ |
| 4569  | EVEN   |
| 3569  | ODD    |

My Solution: 

```js
function findFirstDigit(X) {
    const length = X.toString().length;

    let devisor = "1"
    for (let i = 1; i < length; i++) {
        devisor += "0"
    }

    const firstDigit = X / parseInt(devisor)
    const firstDigitWithOutFraction = Math.floor(firstDigit)

    if (firstDigitWithOutFraction % 2 === 0) {
        console.log("EVEN")
    }
    else {

        console.log("ODD")
    }

}

findFirstDigit(4569); // EVEN
findFirstDigit(3569); // ODD

// first digit formula = N/10^(number of digits - 1) --> n/10^(log10(n))
```

better Solutions: 

```js
function findFirstDigit(X) {
  const firstDigit = Number(X.toString()[0]);
  console.log(firstDigit % 2 === 0 ? "EVEN" : "ODD");
}

findFirstDigit(4569); // EVEN
findFirstDigit(3569); // ODD
```

```js
function findFirstDigit(X) {
  while (X >= 10) {
    X = Math.floor(X / 10);
  }
  console.log(X % 2 === 0 ? "EVEN" : "ODD");
}

findFirstDigit(4569); // EVEN
findFirstDigit(3569); // ODD
```

```js
function findFirstDigit(X) {
  const firstDigit = Math.floor(X / Math.pow(10, Math.floor(Math.log10(X))));
  console.log(firstDigit % 2 === 0 ? "EVEN" : "ODD");
}

findFirstDigit(4569); // EVEN
findFirstDigit(3569); // ODD
```

Note: 
- $\log_b(x) = y$
- $\log_{10}(280) = 2.447 = 2$
- $\log_{10}(100) = 2$
- $\displaystyle 10^2 = 100$



**17. The Last 2 Digits:**

Given 4 numbers A, B, C and D. Print the last 2 digits from their Multiplication.

Note: The Multiplication of 4 numbers is 5 * 7 * 2 * 4 = 280 so the answer will be the last 2 digits which are 80.

| Input   | Output |
| ------- | ------ |
| 5 7 2 4 | 80     |
| 3 9 9 9 | 87     |

My Solution: 

```js
function last2Digits(A, B, C, D) {
    const multiplication = A * B * C * D;
    const lastTwoDigits = multiplication % 100;

    console.log(lastTwoDigits)
}

last2Digits(5, 7, 2, 4); // 80
last2Digits(3, 9, 9, 9); // 87

// Note: for any number, n % 100 gives its last two digits.
```


**18. Coordinated of a Point:**

Given two numbers X, Y which donate coordinates of a point in 2D plan. Determine in which quarter does it belong.

![image](./images/problemSolving-variablesDataTypesAndOperators/Coordinate-System-1.png)

Note:
- Print Q1, Q2, Q3, Q4 according to the quarter in which the point belongs to.
- Print "Origem" (0, 0) If the point is at the origin.
- Print "Eixo X" (X, 0) If the point is over X axis.
- Print "Eixo Y" (0, Y) if the point is over Y axis.

| Input    | Output |
| -------- | ------ |
| 4.5 -2.2 | Q4     |
| 0.1 0.1  | Q1     |

My Solution: 

```js
function FindCoordinates(X, Y) {
    if (X > 0 && Y > 0) {
        console.log('Q1')
    }
    else if (X < 0 && Y > 0) {
        console.log('Q2')
    }
    else if (X < 0 && Y < 0) {
        console.log('Q3')
    }
    else if (X > 0 && Y < 0) {
        console.log('Q4')
    }
    else if (X > 0 && Y === 0) {
        console.log("Eixo X")
    }
    else if (X === 0 && Y > 0) {
        console.log("Eixo Y")
    }
    else if (X === 0 && Y === 0) {
        console.log('Origem')
    }

}

FindCoordinates(4.5, -2.2); // Q4
FindCoordinates(0.1, 0.1); // Q1
```

Better Solution: 

```js
function findCoordinates(X, Y) {
    if (X === 0 && Y === 0) {
        console.log("Origem");
    } 
    else if (Y === 0) {
        console.log("Eixo X");
    } 
    else if (X === 0) {
        console.log("Eixo Y");
    } 
    else if (X > 0 && Y > 0) {
        console.log("Q1");
    } 
    else if (X < 0 && Y > 0) {
        console.log("Q2");
    } 
    else if (X < 0 && Y < 0) {
        console.log("Q3");
    } 
    else {
        console.log("Q4");
    }
}

findCoordinates(4.5, -2.2); // Q4
findCoordinates(0.1, 0.1);  // Q1
```

**19. Age in Days:**

Given a Number N corresponding to a person's age (in days). Print his age in years, months and days, followed by its respective message "years", "months", "days".

Note: consider the whole year has 365 days and 30 days per month.

| Input | Output   |
| ----- | -------- |
| 400   | 1 years  |
|       | 1 months |
|       | 5 days   |
| 800   | 2 years  |
|       | 2 months |
|       | 10 days  |
| 30    | 0 years  |
|       | 1 months |
|       | 0 days   |

My Solution: 

```js
function findAgeInDays(N) {
    let years = 0
    let months = 0
    let days = 0;

    if (N >= 365) {
        years = Math.floor(N / 365);
        days = N % 365;
    }
    else {
        days = N
    }

    if (N >= 30) {
        months = Math.floor(days / 30);
        days = days % 30
    }

    console.log(`
${years} years
${months} months
${days} days
`)

}

findAgeInDays(400);

/*
1 years
1 months
5 days
*/
```

**20. Interval:**

Given a number X. Determine in which of the following intervals the number X belongs to:

[0,25], (25,50], (50,75], (75,100]

- if X belongs to any of the above intervals print "Interval " followed by the interval.
- if X does not belong to any of the above intervals print "Out of Intervals".

Note:
- The symbol '(' represents greater than.
- The symbol ')' represents smaller than.
- The symbol '[' represents greater than or equal.
- The symbol ']' represents smaller than or equal.

For example:

- [0,25] indicates numbers between 0 and 25.0000, including both.
- (25,50] indicates numbers greater than 25: (25.00001) up to 50.0000000.

| Input | Output            |
| ----- | ----------------- |
| 25.1  | Interval (25,50]  |
| 25.0  | Interval [0, 25]  |
| 100.0 | Interval (75,100] |
| -25.2 | Out of Intervals  |

My Solution: 

```js
function findInterval(X) {
    if (X >= 0 && X <= 25) {
        console.log("Interval [0,25]")
    }
    else if (X > 25 && X <= 50) {
        console.log("Interval (25,50]")
    }
    else if (X > 50 && X <= 75) {
        console.log("Interval (50,75]")
    }
    else if (X > 75 && X <= 100) {
        console.log("Interval (75,100]")
    }
    else {
        console.log("Out of Intervals")
    }
}

findInterval(25.1); // Interval (25,50]
findInterval(25.0); // Interval [0,25]
findInterval(100.0); // Interval (75,100]
findInterval(-25.2); // Out of Intervals
```

**21. Two Intervals:**

Given the boundaries of 2 intervals. Print the boundaries of their intersection.

Note: Boundaries mean the two ends of an interval which are the starting number and the ending number.

![image](./images/problemSolving-variablesDataTypesAndOperators/intersectionOfTwoFoundaries.png)

If there is an intersection between these 2 intervals print its boundaries , otherwise print -1.

| Input     | Output |
| --------- | ------ |
| 1 15 5 27 | 5 15   |
| 5 27 1 15 | 5 15   |
| 2 5 6 12  | -1     |

My Solution: 

```js
function findTwoInterval(l1, r1, l2, r2) {

    const interval1Difference = r1 - l1
    const interval2Difference = r2 - l2

    let highestInterval = []
    let lowestInterval = []

    if (interval1Difference > interval2Difference) {
        highestInterval = [l1, r1]
        lowestInterval = [l2, r2]
    }
    else {
        highestInterval = [l2, r2]
        lowestInterval = [l1, r1]
    }

    const highestIntervalLowestValue = highestInterval[0]
    const lowestIntervalHighestValue = lowestInterval[1]

    if (lowestIntervalHighestValue < highestIntervalLowestValue) {
        console.log(-1)
    }
    else {
        const boundariesOfTwoIntersections = [highestIntervalLowestValue, lowestIntervalHighestValue]
        console.log(...boundariesOfTwoIntersections)
    }
}


findTwoInterval(1, 15, 5, 27); // 5 15
findTwoInterval(5, 27, 1, 15); // 5 15
findTwoInterval(2, 5, 6, 12); // -1
```
Logic: 

![image](./images/problemSolving-variablesDataTypesAndOperators/twoIntervals.jpg)

Better Solution: 

```js
function findTwoIntervals(l1, r1, l2, r2) {
    const left = Math.max(l1, l2);
    const right = Math.min(r1, r2);

    if (left <= right) {
        console.log(left, right);
    } else {
        console.log(-1);
    }
}

findTwoIntervals(1, 15, 5, 27); // 5 15
findTwoIntervals(5, 27, 1, 15); // 5 15
findTwoIntervals(2, 5, 6, 12);  // -1
```

Logic: 

- Left boundary = max(l1, l2)
- Right boundary = min(r1, r2)

If the left boundary ≤ right boundary → intersection exists
Otherwise → no intersection (print -1)

**22. Sort Numbers:**

Given three numbers A, B, C. Print these numbers in ascending order followed by a blank line and then the values in the sequence as they were read.

| Input   | Output |
| ------- | ------ |
| 3 -2 1  | -2     |
|         | 1      |
|         | 3      |
|         |        |
|         | 3      |
|         | -2     |
|         | 1      |
| -2 10 0 |        |
|         | -2     |
|         | 0      |
|         | 10     |
|         |        |
|         | -2     |
|         | 10     |
|         | 0      |

My Solution: 

```js
function sortNumbers(A, B, C) {

    const numbers = [A, B, C];

    let sortedNumbers = [...numbers];

    for (let i = 0; i < sortedNumbers.length - 1; i++) {
        for (let j = i + 1; j < sortedNumbers.length; j++) {
            if (sortedNumbers[i] >= sortedNumbers[j]) {
                let temp = sortedNumbers[i]
                sortedNumbers[i] = sortedNumbers[j]
                sortedNumbers[j] = temp;
            }
        }
    }

    for (let number of sortedNumbers) {
        console.log(number)
    }

    console.log("")

    for (let number of numbers) {
        console.log(number)
    }

}

sortNumbers(3, -2, 1); 

/*
-2
1
3

3
-2
1
*/
```

Better Solution: 

```js
function sortNumbers(A, B, C) {
    const numbers = [A, B, C];
    const sorted = [...numbers].sort((a, b) => a - b);
    // a - b = ascending sort, b - a = descending sort

    for (let n of sorted) console.log(n);
    console.log("");
    for (let n of numbers) console.log(n);
}

sortNumbers(3, -2, 1);

/*
-2
1
3

3
-2
1
*/
```

```js
// Note: works only for 3 numbers

function sortNumbers(A, B, C) {
    const min = Math.min(A, B, C);
    const max = Math.max(A, B, C);
    const mid = A + B + C - min - max;

    console.log(`${min}\n${mid}\n${max}\n`);
    console.log(`${A}\n${B}\n${C}`);
}

sortNumbers(3, -2, 1);

```

**23. Float or Int:**

Given a number N. Determine whether N is float number or integer number.

- If N is integer number then print "int" followed by the integer part separated by space.
- If N is float number then print "float" followed by the integer part and decimal part separated by space.

| Input   | Output          |
| ------- | --------------- |
| 234.000 | int 234         |
| 534.958 | float 534 0.958 |

My Solution: 

```js
function FindFloatOrInt(N) {

    const floatValue = N - parseInt(N)

    if (floatValue === 0) {
        console.log("int", parseInt(N))
    }
    else {
        console.log("float", parseInt(N), parseFloat(floatValue.toFixed(3)))
    }

    /*
    Separate decimal(floating) part: 
    - (floating number - its integer part) 
    - or (floating number % 1)
    */
}

FindFloatOrInt(234.000); // int 234
FindFloatOrInt(534.958); // float 534 0.958
```

**24. Mathematical Expression:**

Given a mathematical expression. The expression will be one of the following expressions:

- A + B = C, A - B = C and A * B = C

where A, B, C are three numbers, S is the sign between A and B, and Q the '=' sign

Print "Yes" If the expression is Right , Otherwise print the right answer of the expression.

| Input       | Output |
| ----------- | ------ |
| 5 + 10 = 15 | Yes    |
| 3 - 1 = 2   | Yes    |
| 2 * 10 = 19 | 20     |

My Solution: 

```js
function findExpressionRightOrWrong(A, S, B, Q, C) {

    let expressionResult = 0;

    if (S === '+') {
        expressionResult = A + B
    }
    else if (S === '-') {
        expressionResult = A - B
    }
    else if (S === '*') {
        expressionResult = A * B
    }
    else if (S === '/') {
        expressionResult = A / B
    }

    if (expressionResult === C) {
        console.log("Yes")
    }
    else {
        console.log(expressionResult)
    }

}

findExpressionRightOrWrong(5, '+', 10, '=', 15); // Yes
findExpressionRightOrWrong(3, '-', 1, '=', 2); // Yes
findExpressionRightOrWrong(2, '*', 10, '=', 19); // 20
```

Better Solutions:

```js
function findExpressionRightOrWrong(A, S, B, Q, C) {
    let result;

    switch (S) {
        case '+':
            result = A + B;
            break;
        case '-':
            result = A - B;
            break;
        case '*':
            result = A * B;
            break;
        case '/':
            result = A / B;
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(result === C ? "Yes" : result);
}

findExpressionRightOrWrong(5, '+', 10, '=', 15); // Yes
findExpressionRightOrWrong(3, '-', 1, '=', 2);   // Yes
findExpressionRightOrWrong(2, '*', 10, '=', 19); // 20
```

**25. Comparison:**

Given a comparison symbol S between two numbers A and B. Determine whether it is Right or Wrong.

- The comparison is as follows: A < B, A > B, A = B.

Where A, B are two integer numbers and S refers to the sign between them.

| Input | Output |
| ----- | ------ |
| 5 > 4 | Right  |
| 9 < 1 | Wrong  |
| 4 = 4 | Right  |

My Solution: 

```js
function comparisonRightOrWrong(A, S, B) {

    if (S === ">") {
        if (A > B) {
            console.log("Right")
        }
        else {
            console.log("Wrong")
        }
    }
    else if (S === '<') {
        if (A < B) {
            console.log("Right")
        }
        else {
            console.log("Wrong")
        }
    }
    else if (S === '=') {
        if (A === B) {
            console.log("Right")
        }
        else {
            console.log("Wrong")
        }
    }

}

comparisonRightOrWrong(5, '>', 4); // Right
comparisonRightOrWrong(9, '<', 1); // Wrong
comparisonRightOrWrong(4, '=', 4); // Right
```

Better Solution: 

```js
function comparisonRightOrWrong(A, S, B) {

    let isRight;

    switch (S) {
        case '>':
            isRight = A > B;
            break
        case '<':
            isRight = A < B;
            break
        case '=':
            isRight = A === B;
            break
    }

    console.log(isRight ? "Right" : "Wrong")

}

comparisonRightOrWrong(5, '>', 4); // Right
comparisonRightOrWrong(9, '<', 1); // Wrong
comparisonRightOrWrong(4, '=', 4); // Right
```

**26. Hard Compare:**

Given 4 numbers A,B,C and D. If AB > CD print "YES" otherwise, print "NO".


| Input   | Output |
| ------- | ------ |
| 3 2 5 4 | NO     |
| 5 2 4 2 | YES    |
| 5 2 5 2 | NO     |


My Solution: 

```js
function comparison(A, B, C, D) {

    if (A ** B > C ** D) { // (Math.pow(A, B) > Math.pow(C, D))
        console.log("YES")
    }
    else {
        console.log("NO")
    }

}

comparison(3, 2, 5, 4); // NO
comparison(5, 2, 4, 2); // YES
comparison(5, 2, 5, 2); // NO
```
Note: if we calculate hug number using ** (exponentiation), it will overflow or lose precision (since JS numbers are float64, not arbitrary-precision).

Better Solution: 

```js
function comparison(A, B, C, D) {
    if (B * Math.log(A) > D * Math.log(C)) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

comparison(3, 2, 5, 4); // NO
comparison(5, 2, 4, 2); // YES
comparison(5, 2, 5, 2); // NO
```

Note: $\log(x^y)$ = y.log(x) = ** = Math.pow()

**27. Winter Sale:**

The winter sale began, and Mrs. Sarah wants to buy a T-shirt for her son. The T-shirt has a ticket that indicates a discount of X% and its price P after the discount. She now wants to know the price before the discount to know if the discount was worthy. Help her!

Print the price of the T-shirt before the discount rounded up to two decimal places.


Note: 

**Basic Discount Terminology:**
- Marked Price (MP): The original price before discount.
- Discount(%) (D%): The reduction rate applied to the marked price.
- Discount Amount (DA): The actual amount reduced from the marked price.
- Selling price (SP): The price after discount 


**Primary Formula:**
- SP = MP - DA 
- DA = (Discount% / 100) * MP
- Find Discount Percentage (D%):

we know, SP = MP - DA
        ==> SP = MP - (D% / 100) * MP
        ==> SP = MP * (1 - D% /100)
        ==> SP / MP = 1 - (D% / 100) [Device both sides by MP]
        ==> (SP / MP) - 1 =  - (D% / 100) 
        ==> ( -(SP / MP) + 1) * 100 = D%  [multiply both side by -100] 
        ==> ( 1 -(SP / MP)) * 100 = D%   
        ==>  D% = ( 1 -(SP / MP)) * 100 
        ==>  D% = ( (MP / MP) -(SP / MP)) * 100 [Any number ÷ itself = 1]
        ==>  D% =  ((MP - SP) / MP) * 100 

| Input | Output |
| ----- | ------ |
| 20 80 | 100.00 |
| 15 20 | 23.53  |

My Solution: 

```js
function getMarkedPrice(X, P) {

    const discountPercentage = X
    const SellingPrice = P
    const MarkedPrice = parseFloat((SellingPrice * (100 / (100 - discountPercentage))).toFixed(2))
    console.log(MarkedPrice)

}

getMarkedPrice(20, 80); // 100
getMarkedPrice(15, 20); // 23.53
```
![image](./images/problemSolving-variablesDataTypesAndOperators/MarkedPrice.jpg)

**28. Memo and Momo:**

Memo and Momo are playing a game. Memo will choose a positive number a, and Momo will choose a positive number b.

Your task is to tell them who will win according to the following rules:

- If both a and b are divisible by k, both of them win and you should print "Both".
- If a is divisible by k but b isn't, Memo wins and you should print "Memo".
- If b is divisible by k but a isn't, Momo wins and you should print "Momo".
- If both a and b are not divisible by k, no one wins and you should print "No One".

| Input   | Output |
| ------- | ------ |
| 15 7 3  | Memo   |
| 22 10 2 | Both   |

My Solution: 

```js
function findDivisible(a, b, k) {

    if (a % k === 0 && b % k === 0) {
        console.log("Both")
    }
    else if (a % k === 0) {
        console.log("Memo")
    }
    else if (b % k === 0) {
        console.log("Momo")
    }
    else {
        console.log("No One")
    }

}

findDivisible(15, 7, 3); // Memo
findDivisible(22, 10, 2); // Both
```

**29. Next Alphabet:**

Given a lowercase alphabet character C. You have to print the next character in the alphabet.

Note: The next letter to z is a.

| Input | Output |
| ----- | ------ |
| a     | b      |


My Solution:

```js
function findNextAlphabet(C) {

    let asciiValue = C.charCodeAt(0)


    if (asciiValue >= 97 && asciiValue < 122) {
        asciiValue += 1;
    }
    if (asciiValue === 122) {
        asciiValue = 97
    }

    const letter = String.fromCharCode(asciiValue)
    console.log(letter)
}

findNextAlphabet('a'); // b
```

**30. Ali Baba and Puzzles:**

One day, Ali Baba had an easy puzzle that he couldn't solve. The puzzle consisted of 4 numbers and his task was to check whether he could get the fourth number using arithmetic operators (+,−,×) between the other three numbers; so that each operator is used only once.

a □ b □ c = d

| Input    | Output |
| -------- | ------ |
| 3 4 5 23 | YES    |
| 9 5 3 7  | YES    |
| 1 2 3 1  | NO     |

My Solution: 

```js
function findArithmeticResult(a, b, c, d) {
    if (
        a + (b - c) === d || a + b - c === d ||
        (a + b) * c === d || a + b * c === d ||
        (a - b) + c === d || a - b + c === d ||
        (a - b) * c === d || a - b * c === d ||
        a * (b + c) === d || a * b + c === d ||
        a * (b - c) === d || a * b - c === d
    ) {
        console.log("Yes")
    }
    else {
        console.log("NO")
    }

}

findArithmeticResult(3, 4, 5, 23); // YES
findArithmeticResult(9, 5, 3, 7); // YES
findArithmeticResult(1, 2, 3, 1); // NO
```

Note: 
- Number of operator combination: For 3 numbers (a, b, c) and two slots (a_b_c): 
    - $3^2$ = 9
```
+ +, + -, + *
- +, - -, - *
* +, * -, * *
```
- Number of Parentheses: For 3 numbers, there are 2 unique ways to group them:
 
```
(a op b) op c
a op (b op c)
```

So , Total Unique Expression:
  - $3^2$ * 2 = 18  

In our case we just need:

```
+ -, + *
- +,  - *
* +, * -, 
```

  - $3^2$ * 2 = 18 - 6 (because we can't repeat operator) = 12 

Better Solutions: 

```js
function findArithmeticResult(a, b, c, d) {
    const expressions = [
        a + (b - c), a + b - c,
        (a + b) * c, a + b * c,
        (a - b) + c, a - b + c,
        (a - b) * c, a - b * c,
        a * (b + c), a * b + c,
        a * (b - c), a * b - c
    ]

    console.log(expressions.includes(d) ? "YES" : "NO")

}

findArithmeticResult(3, 4, 5, 23); // YES
findArithmeticResult(9, 5, 3, 7); // YES
findArithmeticResult(1, 2, 3, 1); // NO
```

**31. Interval Sweep:**

Given two numbers a and b. You have to answer with "YES" if there is a non-empty interval consisting of numbers from l to r
(l,l+1,l+2,...,r) with a odd numbers and b even numbers, or "NO" otherwise.

Input:

Only one line containing two numbers a and b (0≤a,b≤100)the number of odd numbers and the number of even numbers in the interval respectively.

| Input | Output |
| ----- | ------ |
| 2 3   | YES    |
| 3 1   | NO     |

Note: 

Example 1 :

some valid intervale's that contain 2 odd numbers and 3 even numbers can be:

l=6,r=10 contains numbers (6,7,8,9,10)

l=14,r=18 contains numbers (14,15,16,17,18)

My Solution:

```js
function findInterval(a, b) {
    if (a === 0 && b === 0) {
        console.log("NO");
        return;
    }

    if (Math.abs(a - b) <= 1) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

findInterval(2, 3); // YES
findInterval(3, 1); // NO

```

| Interval      | Evens | Odds | a-b |
| ------------- | ----- | ---- | --- |
| [1,2]         | 1     | 1    | 0   |
| [1,2,3]       | 1     | 2    | 1   |
| [1,2,3,4]     | 2     | 2    | 0   |
| [1,2,3,4,5]   | 2     | 3    | 1   |
| [2,3,4,5,6]   | 3     | 2    | 1   |
| [2,3,4,5,6,7] | 3     | 3    | 0   |

Since consecutive interval alternate between even and odd, the difference between their counts can never exceed 1.

**33. Katryoshka:**

The Egyptian football team will be in Russia for the World Cup. Of course, they all would like to buy souvenirs for their families. Luckily, they met the king of souvenirs Matryoshka who is famous for his masterpiece Katryoshka. He makes it using different wooden pieces: eyes, mouths and bodies. He can form a nice Katryoshka using one of the following combinations:

- Two eyes and one body.
- Two eyes, one mouth, and one body.
- One eye, one mouth, and one body.

If the king has n eyes, m mouths and k bodies, what is the largest number of Katryoshkas he can make?

| Input    | Output |
| -------- | ------ |
| 1 2 3    | 1      |
| 0 11 2   | 0      |
| 90 24 89 | 57     |

My Solution: 

```js
function findLargestNumberOfKatryoshkas(n, m, k) {

    let eyes = n
    let mouths = m
    let bodies = k
    let katryoshka = 0

    if (eyes > 0 && mouths > 0 && bodies > 0) {
        const minWoodenPieces = Math.min(eyes, mouths, bodies)
        eyes -= minWoodenPieces
        mouths -= minWoodenPieces
        bodies -= minWoodenPieces
        katryoshka += minWoodenPieces;
    }
    if (eyes >= 2 && bodies > 0) {
        eyes /= 2;
        bodies -= eyes;
        katryoshka += eyes;
    }
    if (eyes >= 2 && mouths > 0 && bodies > 0) {
        eyes /= 2;
        mouths -= eyes
        bodies -= eyes
        katryoshka += eyes
    }

    console.log(katryoshka)
}

findLargestNumberOfKatryoshkas(1, 2, 3); // 1
findLargestNumberOfKatryoshkas(0, 11, 2); // 0
findLargestNumberOfKatryoshkas(90, 24, 89); // 57
```

Better Solution: 

```js
function findLargestNumberOfKatryoshkas(n, m, k) {
  let count = 0;

  // Step 1: Make as many (2 eyes + 1 mouth + 1 body) as possible
  let type2 = Math.min(Math.floor(n / 2), m, k);
  count += type2;
  n -= type2 * 2;
  m -= type2;
  k -= type2;

  // Step 2: Make as many (1 eye + 1 mouth + 1 body) as possible
  let type3 = Math.min(n, m, k);
  count += type3;
  n -= type3;
  m -= type3;
  k -= type3;

  // Step 3: Make as many (2 eyes + 1 body) as possible
  let type1 = Math.min(Math.floor(n / 2), k);
  count += type1;
  n -= type1 * 2;
  k -= type1;

  console.log(count);
}

findLargestNumberOfKatryoshkas(1, 2, 3);   // 1
findLargestNumberOfKatryoshkas(0, 11, 2);  // 0
findLargestNumberOfKatryoshkas(90, 24, 89); // 57
```

**34. Lucky Numbers:**

A number of two digits is lucky if one of its digits is divisible by the other.

For example, 39, 82, and 55 are lucky, while 79 and 43 are not.

Given a number between 10 and 99, determine whether it is lucky or not.

| Input | Output |
| ----- | ------ |
| 39    | YES    |
| 64    | NO     |

My Solution: 

```
function findDivisibleOrNot(num) {
    const firstNum = Math.floor(num / 10);
    const secondNum = num % 10;
    if (firstNum % secondNum === 0 || secondNum % firstNum === 0) {
        console.log("YES")
    }
    else {
        console.log("NO")
    }
}

findDivisibleOrNot(39); // YES
findDivisibleOrNot(64); // NO
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

### for..of loop (for iterables: string, array, set, map):

```js
// with array
const arr = [1, 2, 3];

for (const element of arr) {
    console.log(element); // 1 2 3
}

// with string
const str = 'hello';

for (const value of str) {
    console.log(value); // h e l l o
}

// with Set
const mySet = new Set([10, 20, 30]);

for (const value of mySet) {
    console.log(value); // 10 20 30
}

// with Map
const myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

for (const [key, value] of myMap) {
    console.log(key, value); // a 1, b 2, c 3
}
```

#### Iterables (string, array, set, map): 

An object is called iterable if it has a Symbol.iterator method. When we call this arr[Symbol.iterator]() method, it returns an object, we commonly call this object an iterator. This iterator allows us to access the elements one by one using its next() method.

```js
const arr = [1, 2, 3];

const iterator = arr[Symbol.iterator](); // get iterator object

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

for...of loop, spread operator (...), and destructuring use this Symbol.iterator behind the scenes.

##### behind the scene of for..of:

###### On array:

```js
const arr = [1, 2, 3];

for (const element of arr) {
    console.log(element); //  1 2 3
}
```

```js
const arr = [1, 2, 3];

// Get the iterator object
const iterator = arr[Symbol.iterator]();

// Get the first result
let result = iterator.next();

while (!result.done) {
  // Extract the current value
  const value = result.value;
  
  console.log(value); // 1, 2, 3
  
  result = iterator.next();
}
```

###### On String:

```js
const str = "hello";

for (const value of str) {
    console.log(value); // hello 
}
```

```js
const str = "hello";

// Get the iterator object
const iterator = str[Symbol.iterator]();

// Get the first result
let result = iterator.next();

while (!result.done) {
  // Extract the current value
  const value = result.value;
  
  console.log(value); // hello
  
  result = iterator.next();
}
```

###### On Set: 

```js
let mySet = new Set([1, 2, 2, 3]);

for (let val of mySet) {
    console.log(val); // 1 2 3
}
```

```js
let iterable = new Set([1, 2, 2, 3]);

// Get the iterator object
const iterator = iterable[Symbol.iterator]();

// Get the first result
let result = iterator.next();

while (!result.done) {
  // Extract the current value
  const value = result.value;
  
  console.log(value); // 1 2 3
  
  result = iterator.next();
}
```

###### On Map:

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

```js
let iterable = new Map([
    ["name", "Alice"],
    ["age", 22]
]);

// Get the iterator object
const iterator = iterable[Symbol.iterator]();

// Get the first result
let result = iterator.next();

while (!result.done) {
  // Extract the current value
  const value = result.value;
  
  console.log(value); 
  
  result = iterator.next();
}

/*
name : Alice
age : 22
*/
```


##### behind the scene of spread operator:

```js
const str = "ABC";
console.log([...str]);  // [ 'A', 'B', 'C' ]
```

```js
let iterable = "ABC";

// Get the iterator object
const iterator = iterable[Symbol.iterator]();

// Get the first result
let result = iterator.next();

const spread = [];

while (!result.done) {
  // Extract the current value
  const value = result.value;
  
  spread.push(value)

  result = iterator.next();
}

console.log(spread) // [ 'A', 'B', 'C' ]

```

##### Behind the scene of destructuring:

```js
let arr = [1, 2, 3];
let [a, b] = arr;

console.log(a, b); // 1 2
```

Destructuring [a, b] = arr internally calls the iterator for each element.

```js
let iterator = [1, 2, 3];

// Get the iterator object
const iterator = arr[Symbol.iterator]();

const a = iterator.next().value;
const b = iterator.next().value;

console.log(a, b); // 1 2
```


### for...in loop (for objects):

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
*/
```


#### Enumeration:

Enumeration is the internal process in JavaScript where the engine collects the property names (keys) of an object. 

Later, loops or methods filtered those keys based on enumerable true and false and decide what to return (keys, values, or both) or iterate over based on their own rules.

Note:

| Method / Loop                     | Notes                                                            |
| --------------------------------- | ---------------------------------------------------------------- |
| `for...in`                        | Loops over all enumerable properties, including prototype chain. |
| `Object.keys(obj)`                | Returns own enumerable keys as an array.                         |
| `Object.values(obj)`              | Returns own enumerable values as an array.                       |
| `Object.entries(obj)`             | Returns own enumerable key-value pairs as an array.              |
| `Object.getOwnPropertyNames(obj)` | Returns all own properties, enumerable or not.                   |


By default, every property of an object has a property descriptor — a special internal object that defines how that property behaves.

```js
const obj = { name: "Alice" };

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/*
{
  value: "Alice",
  writable: true,
  enumerable: true,
  configurable: true
}
*/
```

Note: we can forcefully make a object property non-enumerable using Object.defineProperty():

```js
const obj = { name: "Tamim" };

Object.defineProperty(obj, "age", {
    value: 20,
    writable: true,      // can be changed
    enumerable: false,    // <--- makes it non-enumerable
    configurable: true  // can be deleted or changed later
});

console.log(obj.age);      // 20
console.log(Object.keys(obj)); // ["name"] → "age" is not included

// for...in loop will skip it
for (const key in obj) {
    console.log(key); // only "name"
}
```

##### Behind the scenes of for...in loop:

So, When you write a for...in loop,

```js
const obj = { name: 'John', age: 30, city: 'NYC' };

for (const key in obj) {
    console.log(key); // name age city
    console.log(obj[key]); // John 30 NYC
}
```

There are two main step happen: 

- Enumeration → the process of collecting all enumerable properties (properties with enumerable: true) from an object and its prototype chain (if available).
- for...in loop → uses those enumerated keys to iterate and execute the loop body.

#### Why for...in is not recommended for arrays:

Since arrays are also objects, you might wonder if we can use for...in with arrays. However, the key thing to remember is that for...in loops iterate over object keys, not the actual values.

Some unexpected behaviors happens if we use for...in for array:

- it Return string index as a key not the element

```js
const arr = [1, 2, 3];
arr.name = "myArray"; // Custom property

for (const key in arr) {
    console.log(key); // "0" "1" "2" "name"
}
```

- No Guaranteed Order 

```js
const arr = [1, 2, 3];
arr["10"] = "ten";
arr["5"] = "five";
arr["a"] = "letter a";
arr["1.5"] = "one point five";

for (const key in arr) {
    console.log(key);
    // Possible order: "0" "1" "2" "5" "10" "a" "1.5"
}
```

## Problem Solving: Loops

**1 to N:**

Given a number N. Print numbers from 1 to N in separate lines.

| Input | Output |
| ----- | ------ |
| 5     | 1      |
|       | 2      |
|       | 3      |
|       | 4      |
|       | 5      |

```js
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

/*
1
2
3
4
5
*/
```

**Even Numbers:**

Given a number N. Print all even numbers between 1 and N inclusive in separate lines.

| Input | Output |
| ----- | ------ |
| 10    | 2      |
|       | 4      |
|       | 6      |
|       | 8      |
|       | 10     |
| 5     | 2      |
|       | 4      |

My Solution: 

```js
const N = 10

for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

/*
2
4
6
8
10
*/
```

Better Solution: 

```js
const N = 10

for (let i = 2; i <= N; i += 2) {
    console.log(i)
}

/*
2
4
6
8
10
*/
```

**Even, Odd, Positive and Negative:**

Given some numbers. Count how many of these values are even, odd, positive and negative.

| Input | Output      |
| ----- | ----------- |
| -5    | Even: 3     |
| 0     | Even : 2    |
| -3    | Positive: 1 |
| -4    | Negative: 3 |
| 12    |             |

My Solution: 

```js
function countEvenOddPositiveNegative(...numbers) {
    let even = 0
    let odd = 0
    let positive = 0
    let negative = 0

    for (let number of numbers) {
        if (number % 2 === 0) {
            even++;
        }
        else {
            odd++
        }

        if (number > 0) {
            positive++
        }
        else if (number < 0) {
            negative++
        }
    }
    console.log("Even:", even)
    console.log("Odd:", odd)
    console.log("Positive:", positive)
    console.log("Negative:", negative)
}

countEvenOddPositiveNegative(-5, 0, -3, -4, 12)

/*
Even: 3
Odd: 2
Positive: 1
Negative: 3
*/
```

**Fixed Password:**

Given multiple lines each line contains a number X which is a password. Print "Wrong" if the password is incorrect otherwise, print "Correct" and terminate the program.

Note: The "Correct" password is the number 1999.

| Input | Output  |
| ----- | ------- |
| 2200  | Wrong   |
| 1020  | Wrong   |
| 1999  | Correct |
| 1000  |         |
| 9999  |         |

My Solution: 

```js
function checkPassword(...numbers) {
    for (let number of numbers) {
        if (number === 1999) {
            console.log("Correct")
            return;
        }
        else {
            console.log("Wrong")
        }
    }
}

checkPassword(2200, 1020, 1999, 1000, 9999)

/*
Wrong
Wrong
Correct
*/
```

**Max:**

Given N numbers, find maximum number in these N numbers.

| Input | Output |
| ----- | ------ |
| 1     | 8      |
| 8     |        |
| 5     |        |
| 7     |        |
| 5     |        |

My Solution: 

```js
function findMax(...numbers) {
    let max = numbers[0]
    for (let number of numbers) {
        if (number >= max) {
            max = number
        }
    }
    console.log(max)
}

findMax(1, 8, 5, 7, 5) // 8
```

Better Solution: 

```js
function findMax(...numbers) {
    console.log(Math.max(...numbers))
}

findMax(1, 8, 5, 7, 5) // 8
```

**Multiplication table:**

Given a number N. Print the multiplication table of the number from 1 to 12

Input/output: 

```
2

2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
2 * 10 = 20
2 * 11 = 22
2 * 12 = 24
```

My solution: 

```js
function generateMultiplicationTable(N) {
    for (let i = 1; i <= 12; i++) {
        console.log(`${N} * ${i} = ${N * i}`)
    }
}

generateMultiplicationTable(2)
```

**Factorial:**

Given some numbers. Print the factorial of that numbers.

Note: 

Factorial, in mathematics, the product of all positive integers less than or equal to a given positive integer and denoted by that integer and an exclamation point.

- Thus, factorial seven is written 7!, meaning 1 * 2 * 3 * 4 * 5 * 6 * 7 = 5040 .
- Factorial zero is defined as equal to 1.


| Input | Output |
| ----- | ------ |
| 5     | 120    |
| 3     | 6      |


My Solution: 

```js
function findFactorial(num) {

    let factorialResult = 1;

    for (let i = 1; i <= num; i++) {
        factorialResult *= i
    }

    console.log(factorialResult)
}

findFactorial(5) // 120
```


**One Prime:**

Given a number X. Determine if the number is prime or not.

Note:

A prime number is a number that is greater than 1 and has only two factors which are 1 and itself. Means prime number divisible only by 1 and itself.

Be careful that 1 is not prime

| Input | Output |
| ----- | ------ |
| 7     | YES    |
| 15    | NO     |

My Solution: 

```js
function findPrimeNumber(num) {

    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false
        }
    }

    console.log(isPrime ? "YES" : "NO")
}

findPrimeNumber(7) // YES
findPrimeNumber(15) // NO
```

Better Solution: 

```js
function findPrimeNumber(num) {
  if (num <= 1) return console.log("NO"); 

  for (let i = 2; i * i <= num; i++) { 
    if (num % i === 0) {
      console.log("NO");
      return; 
    }
  }

  console.log("YES");
}

findPrimeNumber(7);  // YES
findPrimeNumber(15); // NO
```

here, 
i * i <= num = checks only up to √num, because factors repeat after √num:

```
num = 36,

36 = 1 * 36
36 = 2 * 18
36 = 3 * 12
36 = 4 * 9
36 = 6 * 6 ---(middle point √36 = 6; Factors beyond 6 just repeat the earlier ones in reverse.)
36 = 9 * 4
36 = 12 * 3
36 = 18 * 2
36 = 36 * 1
```

**Primes from 1 to n:**

Given a number N. Print all prime numbers between 1 and N inclusive.

| Input | Output     |
| ----- | ---------- |
| 10    | 2, 3, 5, 7 |

My Solution: 

```js
function findPrimeNumbers(num) {

    const primeNumbers = []

    for (let i = 2; i <= num; i++) {

        let isPrime = true;

        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false
                break
            }
        }

        if (isPrime) {
            primeNumbers.push(i)
        }
    }

    console.log(...primeNumbers)
}

findPrimeNumbers(10); // 2 3 5 7
```

**Palindrome:**

Given a number N. Print 2 lines that contain the following respectively:

- Print N in a reversed order and not leading zeroes.
- If N is a palindrome number print "YES" otherwise, print "NO.

Note:

- A palindrome number is a number that reads the same forward or backward. For example: 12321, 101 are palindrome numbers, while 1201, 221 are not.

- A leading zero is any 0 digit that comes before the first nonzero digit in a number for example : numbers (005 , 01 , 0123 , 02 , 000250 ) are leading zeroes but ( 5 , 123 , 20 ,2500 ) not leading zeroes numbers .

| Input | Output |
| ----- | ------ |
| 12121 | 12121  |
|       | YES    |
| 160   | 61     |
|       | NO     |

My Solution: 

```js
function palindromeOrNot(N) {
    const originalNumbers = N
    const numbersArray = N.toString().split("")

    const reversedArray = []

    for (let number of numbersArray) {
        reversedArray.unshift(number)
    }

    const reversedNumber = parseInt(reversedArray.join(""))

    if (originalNumbers === reversedNumber) {
        console.log(reversedNumber, "\nYES")
    }
    else {
        console.log(reversedNumber, "\nNO")
    }

}

palindromeOrNot(12121);
palindromeOrNot(160);

/*
12121 
YES
61 
NO
*/
```

Better Solutions: 

```js
function palindromeOrNot(N) {
    const str = N.toString();
    const reversed = str.split("").reverse().join("");
    const reversedNum = parseInt(reversed);

    console.log(reversedNum);
    console.log(str === reversed ? "YES" : "NO");
}

palindromeOrNot(12121);
palindromeOrNot(160);
```

```js
function palindromeOrNot(N) {
    let original = N;
    let reversed = 0;

    while (N > 0) {
        reversed = reversed * 10 + (N % 10);
        N = Math.floor(N / 10);
    }

    console.log(reversed);
    console.log(original === reversed ? "YES" : "NO");
}

palindromeOrNot(12121);
palindromeOrNot(160);
```

**Divisors:**

Given a number N. Print all the divisors of N in ascending order.

Note: 

Divisor of Number is A number that divides the integer exactly (no remainder).

Examples:
- 3 is a divisor of 12, because 12 ÷ 3 = 4 exactly
- 4 is a divisor of 12, because 12 ÷ 4 = 3 exactly.
- 5 is not a divisor of 12, because 12 ÷ 5 = 2 with a remainder of 2.

| Input | Output |
| ----- | ------ |
| 6     | 1      |
|       | 2      |
|       | 3      |
|       | 4      |
|       | 5      |
|       | 6      |
| 7     | 1      |
|       | 7      |
| 4     | 1      |
|       | 2      |
|       | 4      |

My Solution: 

```js
function findDivisors(N) {
    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            console.log(i)
        }
    }
}

findDivisors(6);

/*
1
2
3
6
*/
```

Better Solution: 

```js
function findDivisors(N) {
    const divisors = [];

    for (let i = 1; i * i <= N; i++) {
        if (N % i === 0) {
            divisors.push(i);

            if (i !== N / i) {
                divisors.push(N / i);
            }
        }
    }

    divisors.sort((a, b) => a - b);

    for (const d of divisors) {
        console.log(d);
    }
}

findDivisors(6);
```

**GCD and LCM:**

Given two numbers A and B. Print the greatest common divisor and least common multiple between (A, B).

Example: 

GCD(6, 9):
- divisors of 6 = {1, 2, 3, 6}
- divisors of 9 = {1, 3, 9}
common = {1, 3}, largest = 3 ✅

LCM(6, 9): 
- Multiples of 6 = {6, 12, 18, 24, 30, 36, 42, 48, 54, 60 ....}
- Multiples of 9 = {9, 18, 27, 36, 45, 54, 63....}
→ common = {18, 36, 54}, Lowest = 18 ✅

| Input | Output |
| ----- | ------ |
| 6 9   | 3 36   |
| 54 24 |        |


My Solution: 

```js
function findGCDAndLCM(A, B) {
    const gcd = GCD(A, B)
    const lcm = LCM(A, B)
    console.log(gcd, lcm)
}

function GCD(A, B) {

    const divisorsOfA = []
    const divisorsOfB = []

    for (let i = 1; i <= A; i++) {
        if (A % i === 0) {
            divisorsOfA.push(i)
        }
    }
    for (let i = 1; i <= B; i++) {
        if (B % i === 0) {
            divisorsOfB.push(i)
        }
    }

    const common = []

    for (let i = 0; i < divisorsOfA.length; i++) {
        for (let j = 0; j < divisorsOfB.length; j++) {
            if (divisorsOfA[i] === divisorsOfB[j]) {
                common.push(divisorsOfA[i])
            }
        }
    }

    const largest = Math.max(...common)

    return largest
}
function LCM(A, B) {

    const multiplesOfA = []
    const multiplesOfB = []

    for (let i = 1; i <= A; i++) {
        multiplesOfA.push(i * A)
    }
    for (let i = 1; i <= B; i++) {
        multiplesOfB.push(i * B)
    }

    const common = []

    for (let i = 0; i < multiplesOfA.length; i++) {
        for (let j = 0; j < multiplesOfB.length; j++) {
            if (multiplesOfA[i] === multiplesOfB[j]) {
                common.push(multiplesOfA[i])
            }
        }
    }

    const lowest = Math.min(...common)

    return lowest
}

findGCDAndLCM(6, 9); // 3 18
findGCDAndLCM(54, 24); // 6 216
```

Better Solution: 

Relationship between GCD and LCM:

```
GCD(a, b) × LCM(a, b) = a × b
```

```js
function findGCDAndLCM(A, B) {
  const gcd = GCD(A, B);
  const lcm = (A * B) / gcd;
  console.log(gcd, lcm);
}

// Euclidean algorithm for GCD
function GCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

findGCDAndLCM(6, 9);   // 3 18
findGCDAndLCM(54, 24); // 6 216
```

**Lucky Numbers:**

Given two numbers A and B. Print all lucky numbers between A and B inclusive.

Note: 
A lucky number is a number that, contains only the digits 4 and 7

example: 4, 7, 44, 47, 74, 77, 444, 474, 777, 744, ...

| Input | Output |
| ----- | ------ |
| 4 20  | 4 7    |
| 8 15  | -1     |

Solutions: 

```js
function findLuckyNumber(A, B) {
    let found = false
    for (let i = A; i <= B; i++) {
        const str = i.toString()

        const isLucky = [...str].every(ch => ch === '4' || ch === '7')

        if (isLucky) {
            console.log(i)
            found = true
        }
    }
    if (!found) {
        console.log(-1)
    }
}

findLuckyNumber(4, 20); // 4 7
findLuckyNumber(8, 15); // -1
```

```jsx
function findLuckyNumber(A, B) {
    
    let found = false
    
    for (let i = A; i <= B; i++) {
        let n = i;
        let isLucky = true

        while (n > 0) {
            const digit = n % 10;

            if (digit !== 4 && digit !== 7) {
                isLucky = false
                break
            }

            n = Math.floor(n / 10)
        }

        if (isLucky) {
            console.log(i)
            found = true;
        }
    }

    if (!found) {
        console.log(-1)
    }
}

findLuckyNumber(4, 20); // 4 7
findLuckyNumber(8, 15); // -1
```

```js
function findLuckyNumber(A, B) {

    let found = false
    const luckyPattern = /^[47]+$/; // the entire string must be made up of only 4 and 7

    for (let i = A; i <= B; i++) {
        if (luckyPattern.test(i.toString())) {
            console.log(i)
            found = true
        }
    }

    if (!found) {
        console.log(-1)
    }
}

findLuckyNumber(4, 20); // 4 7
findLuckyNumber(8, 15); // -1
```

**Numbers Histogram:**

Given 2 lines of input described as follow:

- The first line contains a symbol S can be (+,−,∗,/).
- The second line contains N numbers.

| Input     | Output  |
| --------- | ------- |
| +         | +++++   |
| 5 2 4 3 7 | ++      |
|           | ++++    |
|           | +++     |
|           | +++++++ |

My Solution: 

```
function printHistogram(S, N) {
    for (let i = 0; i < N.length; i++) {
        let sign = ''
        for (let j = 1; j <= N[i]; j++) {
            sign += S
        }
        console.log(sign)
    }
}

printHistogram('+', [5, 2, 4, 3, 7]);

/*
+++++
++
++++
+++
+++++++
 */
```

Better Solution: 

```js
function printHistogram(S, N) {
    for (const num of N) {
        console.log(S.repeat(num));
    }
}

printHistogram('+', [5, 2, 4, 3, 7]);
```

**Shape 1:**

```
4

*
**
***
****
```

My Solution: 

```js
function printPyramid(N) {

    for (let i = 1; i <= N; i++) {
        let star = ''
        for (let j = 1; j <= i; j++) {
            star += "*"
        }
        console.log(star)
    }
}

printPyramid(4);
```

Better Solutions: 

```js
function printPyramid(N) {
  for (let i = 1; i <= N; i++) {
    console.log('*'.repeat(i));
  }
}

printPyramid(4);
```

```
4

****
***
**
*
```

My Solutions: 

```js
function printPyramid(N) {

    for (let i = 1; i <= N; i++) {
        let star = ""
        for (let j = N; j >= i; j--) {
            star += "*"
        }
        console.log(star)
    }
}

printPyramid(4);
```

Better Solution: 

```js
function printPyramid(N) {

    for (let i = N; i >= 1; i--) {
        console.log("*".repeat(i))
    }
}

printPyramid(4);
```

```
4

1
12
123
1234
```

My Solution: 

```js
function printNumbersShapes(N) {

    for (let i = 1; i <= N; i++) {
        const numbers = []
        for (let j = 1; j <= i; j++) {
            numbers.push(j)
        }
        console.log(...numbers)
    }
}

printNumbersShapes(4);

```

Better Solutions: 

```js
function printNumbersShapes(N) {
    for (let i = 1; i <= N; i++) {
        let line = ''
        for (let j = 1; j <= i; j++) {
            line += j
        }
        console.log(line)
    }
}

printNumbersShapes(4);

```

```js
function printNumbersShapes(N) {
    const base = '123456789';
    for (let i = 1; i <= N; i++) {
        console.log(base.slice(0, i));
    }
}

printNumbersShapes(4);

```


```
4

1234
123
12
1
```

My Solution: 

```js
function printNumbersShapes(N) {

    for (let i = N; i >= 1; i--) {
        const numbers = []
        for (let j = 1; j <= i; j++) {
            numbers.push(j)
        }
        console.log(...numbers)
    }
}

printNumbersShapes(4);
```

Better Solutions:

```js
function printReverseNumbers(N) {
    for (let i = N; i >= 1; i--) {
        let line = ''
        for (let j = 1; j <= i; j++) {
            line += j
        }
        console.log(line)
    }
}

printReverseNumbers(4);
```

```js
function printReverseNumbers(N) {
    const base = '123456789';
    for (let i = N; i >= 1; i--) {
        console.log(base.slice(0, i));
    }
}

printReverseNumbers(4);
```

```js
const printReverseNumbers = N =>
  Array.from({ length: N }, (_, i) => console.log('123456789'.slice(0, N - i)));

printReverseNumbers(4);

/*
for (let i = 0; i < N; i++) {
  console.log('123456789'.slice(0, N - i))
}

Same as: 

 Array.from({ length: N }, (_, i) => console.log('123456789'.slice(0, N - i)));

*/
```

**Shape2:**

```
4

   *
  ***
 *****
*******
```

![image](./images/problem-solving-loops/shape2-pattern1.png)

My Solution: 

```js
function printShapes(N) {
    for (let i = 1; i <= N; i++) {

        let sign = ''
        let star = ''

        for (let j = i; j <= N - 1; j++) {
            sign += ' '
        }
        for (let j = 1; j <= i * 2 - 1; j++) {
            star += '*'
        }
        console.log(sign + star)

    }
}

printShapes(4);
```

Better Solutions: 

```js
function printShapes(N) {
  for (let i = 1; i <= N; i++) {
    const spaces = ' '.repeat(N - i);
    const stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

printShapes(4);
```

```js
function printShapes(N) {
  Array.from({ length: N }, (_, i) =>
    console.log(' '.repeat(N - i - 1) + '*'.repeat(2 * i + 1))
  );
}

printShapes(4);
```


```
4

*******
 *****
  ***
   *
```

![image](./images/problem-solving-loops/shape2-pattern2.png)

My Solution: 

```js
function printShapes(N) {
    for (let i = N; i >= 1; i--) {

        let sign = ''
        let star = ''

        for (let j = i; j <= N - 1; j++) {
            sign += ' '
        }
        for (let j = i * 2 - 1; j >= 1; j--) {
            star += '*'
        }
        console.log(sign + star)

    }
}

printShapes(4);
```

Better Solutions: 

```js
function printShapes(N) {
  for (let i = N; i >= 1; i--) {
    console.log(' '.repeat(N - i) + '*'.repeat(2 * i - 1));
  }
}

printShapes(4);

```

```js
function printShapes(N) {
  Array.from({ length: N }, (_, i) =>
    console.log(' '.repeat(i) + '*'.repeat(2 * (N - i) - 1))
  );
}

printShapes(4);
```


```
4

   *
  ***
 *****
*******
 *****
  ***
   *
```

![image](./images/problem-solving-loops/shape2-pattern3.png)

My Solution: 

```js
function printShapes(N) {
    for (let i = 1; i <= N; i++) {

        let sign = ''
        let star = ''

        for (let j = i; j <= N - 1; j++) {
            sign += ' '
        }
        for (let j = 1; j <= i * 2 - 1; j++) {
            star += '*'
        }
        console.log(sign + star)
    }

    for (let i = N - 1; i >= 1; i--) {

        let sign = ''
        let star = ''

        for (let j = i; j <= N - 1; j++) {
            sign += ' '
        }
        for (let j = i * 2 - 1; j >= 1; j--) {
            star += '*'
        }
        console.log(sign + star)

    }
}

printShapes(4);
```

Better Solutions:

```js
function printShapes(N) {
    // 🔹 Upper half
    for (let i = 1; i <= N; i++) {
        console.log(' '.repeat(N - i) + '*'.repeat(i * 2 - 1));
    }

    // 🔹 Lower half
    for (let i = N - 1; i >= 1; i--) {
        console.log(' '.repeat(N - i) + '*'.repeat(i * 2 - 1));
    }
}

printShapes(4);
```

```js
function printShapes(N) {
    for (let row = 1; row <= 2 * N - 1; row++) {
        let i = row <= N ? row : 2 * N - row; // mirror row number
        console.log(' '.repeat(N - i) + '*'.repeat(i * 2 - 1));
    }
}

printShapes(4);
```

```js
function printDiamond(N) {
  // Top half
  Array.from({ length: N }, (_, i) =>
    console.log(' '.repeat(N - i - 1) + '*'.repeat(2 * (i + 1) - 1))
  );

  // Bottom half
  Array.from({ length: N - 1 }, (_, i) =>
    console.log(' '.repeat(i + 1) + '*'.repeat(2 * (N - i - 2) + 1))
  );
}

printDiamond(4);
```
**Shape 3:**

Some day, an artist wanted to draw an X mark on the wall in a fashionable way. He wanted to do so by grouping snippets of slashes /, backslashes \, asterisks * and a capital X letter in an N×N square as shown in the sample. Can you help him?

Input/Output:

```
5

\***/
*\*/*
**X**
*/*\*
/***\
```

Explanation: 

|       | j = 0 | j = 1 | j = 2 | j = 3 | j = 4 |
| ----- | ----- | ----- | ----- | ----- | ----- |
| i = 0 | \     | *     | *     | *     | /     |
| i = 1 | *     | \     | *     | /     | *     |
| i = 2 | *     | *     | X     | *     | *     |
| i = 3 | *     | /     | *     | \     | *     |
| i = 4 | /     | *     | *     | *     | \     |

X = (i === center && j === center) = (2,2)  
\ = (i === j) = (0,0) (1,1), (3,3), (4, 4)
/ = (i + j === n - 1) = (0,4), (1, 3), (3, 1), (4, 0)  


Solution: 

```js
function printDiamondShape(n) {
    const center = Math.floor(n / 2)

    for (let i = 0; i < n; i++) {
        let shape = ""
        for (let j = 0; j < n; j++) {

            if (i === center && j === center) {
                shape += "X"
            }
            else if (i === j) {
                shape += "\\"
            }
            else if (i + j === n - 1) {
                shape += "/"
            }
            else {
                shape += "*"
            }

        }
        console.log(shape)
    }
}

printDiamondShape(5)
```

**Digits:**

Given some numbers. Print the digits of that number from right to left separated by space.

| Input  | Output      |
| ------ | ----------- |
| 4      |             |
| 121    | 1 2 1       |
| 39     | 9 3         |
| 123456 | 6 5 4 3 2 1 |
| 1200   | 0 0 2 1     |

My Solutions: 

```js
function printDigits(...N) {
    for (let i = 0; i < N.length; i++) {
        console.log(N[i].toString().split("").reverse().join(""))
    }
}

printDigits(121, 39, 123456, 1200);

/*
121
93
654321
0021
*/
```

```js
function printDigits(...N) {
    for (let num of N) {

        let numArray = []

        while (num !== 0) {
            const remainder = num % 10;
            numArray.push(remainder)
            num = Math.floor(num / 10)
        }

        console.log(numArray.join(" "))
    }

}

printDigits(121, 39, 123456, 1200);

/*
1 2 1
9 3
6 5 4 3 2 1
0 0 2 1
*/
```

**Sequence of Numbers and Sum:**

Given multiple lines each line contains two numbers N and M. For each line print a single line contains:

- The numbers between N and M inclusive separated by single space.
- The message " sum =".
- The summation of all numbers between N and M inclusive.

Note: The program should be TERMINATED as soon as any of these two numbers is less than or equal to zero and don't print any thing.

| Input | Output          |
| ----- | --------------- |
| 5 2   | 2 3 4 5 sum =14 |
| 5 7   | 5 6 7 sum =18   |
| 5 -1  |                 |
| 5 2   | 2 3 4 5 sum =14 |
| 6 3   | 3 4 5 6 sum =18 |
| 5 0   |                 |


My Solution: 

```js
function sumOfNumbers(numbers) {

    const pairNumbers = []

    for (let i = 0; i < numbers.length; i = i + 2) {
        if (!(numbers[i] <= 0) && !(numbers[i + 1] <= 0)) {
            pairNumbers.push([numbers[i], numbers[i + 1]])
        }
    }

    for (let pairNumber of pairNumbers) {
        const max = Math.max(...pairNumber)
        const min = Math.min(...pairNumber)

        let numberStr = ''
        let sum = 0
        for (let i = min; i <= max; i++) {
            numberStr += ` ${i}`
            sum += i;
        }
        console.log(`${numberStr} sum =${sum}`)
    }

}

sumOfNumbers([5, 2, 5, 7, 5, -1]);

/*
2 3 4 5 sum =14
5 6 7 sum =18
*/
```

Better Solutions: 

```js
function sumOfNumbers(numbers) {
  for (let i = 0; i < numbers.length; i += 2) {
    const N = numbers[i];
    const M = numbers[i + 1];

    if (N <= 0 || M <= 0) break;

    const start = Math.min(N, M);
    const end = Math.max(N, M);

    let sum = 0;
    const sequence = [];

    for (let j = start; j <= end; j++) {
      sequence.push(j);
      sum += j;
    }

    console.log(sequence.join(" ") + " sum =" + sum);
  }
}

// Test
sumOfNumbers([5, 2, 5, 7, 5, -1]);
```

```js
function sumOfNumbers(numbers) {
  for (let i = 0; i < numbers.length; i += 2) {
    const N = numbers[i];
    const M = numbers[i + 1];

    if (N <= 0 || M <= 0) break;

    const start = Math.min(N, M);
    const end = Math.max(N, M);
    const len = end - start + 1;

    const sequence = Array.from({ length: len }, (_, idx) => start + idx);
    const sum = sequence.reduce((acc, val) => acc + val, 0);

    console.log(sequence.join(" ") + " sum =" + sum);
  }
}
```

**Sum of Consecutive Odd Numbers:**

Given two numbers X and Y. Print the sum of all odd numbers between them, excluding X and Y.

| Input | Output |
| ----- | ------ |
| 3     |        |
| 5 6   | 0      |
| 10 4  | 21     |
| 4 9   | 12     |

My Solution: 

```js
function sumOfOddNumbers(N, ...numbers) {

    for (let i = 0; i < N * 2 - 1; i = i + 2) {
        let min = Math.min(numbers[i], numbers[i + 1])
        let max = Math.max(numbers[i], numbers[i + 1])
        let sum = 0

        for (let j = min + 1; j <= max - 1; j++) {
            if (j % 2 === 1) {
                sum += j
            }
        }
        console.log(sum)
    }

}

sumOfOddNumbers(3, 5, 6, 10, 4, 4, 9);

/*
0
21
12
*/
```

**Some Sums:**

Given three numbers N, A, B. Print the summation of the numbers between 1 and N whose sum of digits is between A and B inclusive.

| Input    | Output |
| -------- | ------ |
| 20 2 5   | 84     |
| 10 1 2   | 13     |
| 100 4 16 | 4554   |

My Solution: 

```js
function sumOfDigits(N, A, B) {

    let sum = 0

    for (let i = 1; i <= N; i++) {
        let sumOfDigits = 0;

        let t = i

        while (t !== 0) {
            sumOfDigits += t % 10
            t = Math.floor(t / 10)
        }


        for (let j = A; j <= B; j++) {
            if (sumOfDigits === j) {
                sum += i
                break
            }
        }

    }

    console.log(sum)

}

sumOfDigits(20, 2, 5); // 84
```

Better Solution: 

```js
function sumOfDigits(N, A, B) {
  let sum = 0;

  for (let i = 1; i <= N; i++) {
    let digitSum = 0;
    let t = i;

    while (t !== 0) {
      digitSum += t % 10;
      t = Math.floor(t / 10);
    }

    if (digitSum >= A && digitSum <= B) {
      sum += i;
    }
  }

  console.log(sum);
}

sumOfDigits(20, 2, 5); // 84
```

**PUM:**

Given a number N. Print N lines that describes PUM game.

But here’s the pattern:

- The numbers are consecutive.
- After every 3 numbers, you skip one number (that’s replaced by the word “PUM”).

| Input | Output       |
| ----- | ------------ |
| 7     | 1 2 3 PUM    |
|       | 5 6 7 PUM    |
|       | 9 10 11 PUM  |
|       | 13 14 15 PUM |
|       | 17 18 19 PUM |
|       | 21 22 23 PUM |
|       | 25 26 27 PUM |
| 3     | 1 2 3 PUM    |
|       | 5 6 7 PUM    |
|       | 9 10 11 PUM  |

My Solution: 

```js
function printPum(N) {

    let number = 0;

    for (let i = 0; i < N; i++) {

        const pumAry = []

        for (let j = 1; j <= 4; j++) {
            number++
            pumAry.push(number)
        }

        pumAry[pumAry.length - 1] = "PUM"

        console.log(pumAry.join(" "))
    }
}

printPum(7);

/*
1 2 3 PUM
5 6 7 PUM
9 10 11 PUM
13 14 15 PUM
17 18 19 PUM
21 22 23 PUM
25 26 27 PUM
*/
```

Better Solution: 

```js
function printPum(N) {
    let num = 1;

    for (let i = 0; i < N; i++) {
        console.log(`${num} ${num + 1} ${num + 2} PUM`);
        num += 4; // skip one number (3 printed + 1 skipped)
    }
}

printPum(7);
```

```js
function printPum(N) {
  let num = 1;

  for (let i = 0; i < N; i++) {
    const line = Array.from({ length: 3 }, (_, j) => num + j).join(" ");
    console.log(`${line} PUM`);
    num += 4;
  }
}
```

```js
const printPum = N => {
  Array.from({ length: N }, (_, i) => {
    const start = i * 4 + 1;
    console.log(`${start} ${start + 1} ${start + 2} PUM`);
  });
};
```

**Convert To Decimal 2:**

Given a number N. Print the result of doing the following operation on N:

- Convert N to its binary representation.
- Count number of ones in the above binary representation.
- Print the equivalent decimal number that its binary representation has only the number of ones that were counted above. 

For example: (10)decimal = (1010)binary has 2 ones "11", after converting "11" to decimal number it will become 3.

Note: 

Decimal to Binary: 29<sub>10</sub>

![image](./images/problem-solving-loops/decimal-to-binary.png)

Binary to Decimal: 11101<sub>2</sub>

![image](./images/problem-solving-loops/binary-to-decimal.png)


| Input | Output |
| ----- | ------ |
| 3     |        |
| 10    | 3      |
| 7     | 7      |
| 8     | 1      |


My Solution:

```js
function printDecimal(...numbers) {

    for (let num of numbers) {
        let temp = num;
        let binary = []
        while (temp !== 0) {
            const remainder = temp % 2;
            if (remainder === 1) {
                binary.push(remainder)
            }
            temp = Math.floor(temp / 2)
        }


        let power = binary.length - 1
        let sum = 0
        for (let b of binary) {
            sum += 2 ** power
            power--;
        }
        console.log(sum)
    }

}

printDecimal(10, 7, 8);

/*
3
7
1
*/
```

Better Solution: 

```js
function printDecimal(...numbers) {
  for (let num of numbers) {
    const count = num.toString(2).split('1').length - 1; // count '1's
    const result = parseInt('1'.repeat(count) || '0', 2); // convert back to decimal
    console.log(result);
  }
}

printDecimal(10, 7, 8);
/*
3
7
1
*/
```

| Expression        | Meaning                          | Example Output   |
| ----------------- | -------------------------------- | ---------------- |
| `num.toString(2)` | Convert to binary string         | `"1010"`         |
| `.split('1')`     | Split by `'1'` → removes `'1's`  | `["", "0", "0"]` |
| `.length - 1`     | Count how many `'1's` were found | `2`              |


**Easy Fibonacci:**

Given a number N. Print first N numbers of the Fibonacci sequence.

Note: In order to create the Fibonacci sequence use the following function:
- fib(1) = 0.
- fib(2) = 1.
- Then: fib(n) = fib(n - 1) + fib(n - 2). (fib(3) = fib(3 -1 ) + fib(3 - 2) = fib(2) + fib(1) = 1 + 0 = 1 )

| Input | Output |
| ----- | ------ |
| 7     | 0      |
|       | 1      |
|       | 1      |
|       | 2      |
|       | 3      |
|       | 5      |
|       | 8      |

My Solution: 

```js
function printFibonacci(N) {

    const fib = [0, 1]

    for (let i = 2; i < N; i++) {
        let fib1 = fib[fib.length - 2]
        let fib2 = fib[fib.length - 1]

        fib.push(fib2 + fib1)
    }
    console.log(fib.join(" "))
}

printFibonacci(7);

/*
0 1 1 2 3 5 8
*/

```
Better Solution: 

```js
function printFibonacci(N) {
  const fib = [0, 1];

  for (let i = 2; i < N; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  console.log(fib.join(" "));
}

printFibonacci(7);
```

```js
function printFibonacci(N) {
  let a = 0, b = 1;

  for (let i = 1; i <= N; i++) {
    console.log(a);
    const next = a + b;
    a = b;
    b = next;
  }
}

printFibonacci(7);
```

**Three Numbers:**

Given two numbers K and S. Determine how many different values of X,Y and Z such that (0 ≤ X,Y,Z ≤ K) and X+Y+Z=S.

| Input | Output |
| ----- | ------ |
| 2 1   | 3      |
| 9 4   | 15     |


Solutions: 

```js
function matchCombinator(k, s) {
    let count = 0;

    for (let x = 0; x <= k; x++) {
        for (let y = 0; y <= k; y++) {
            const z = s - (x + y)

            if (z >= 0 && z <= k) {
                count++;
            }
        }
    }
    console.log(count)

}

matchCombinator(2, 1) // 3
```

Explanation: 

| X (outer loop)    | Y (inner loop) | Z = 1 - (X + Y)  | z >= 0 && z <= k           | count = 0; |
| ----------------- | -------------- | ---------------- | -------------------------- | ---------- |
| 0 (1st iteration) | 0              | 1 = 1 - (0 + 0)  | (1 >= 0 && 1 <= 2) count++ | count = 1  |
|                   | 1              | 0 = 1 - (0 + 1)  | (0 >= 0 && 0 <= 2) count++ | count = 2  |
|                   | 2              | -1 = 1 - (0 + 2) | (-1 >= 0 && -1 <= 2)       |            |
|                   |                |                  |                            |            |
| 1 (2nd iteration) | 0              | 0 = 1 - (1 + 0)  | (0 >= 0 && 0 <= 2) count++ | count = 3  |
|                   | 1              | -1 = 1 - (1 + 1) | (-1 >= 0 && -1 <= 2)       |            |
|                   | 2              | -2 = 1 - (1 + 2) | (-2 >= 0 && -2 <= 2)       |            |
|                   |                |                  |                            |            |
| 2 (3rd iteration) | 0              | -1 = 1 - (2 + 0) | (-1 >= 0 && -1 <= 2)       |            |
|                   | 1              | -2 = 1 - (2 + 1) | (-2 >= 0 && -2 <= 2)       |            |
|                   | 2              | -3 = 1 - (2 + 2) | (-3 >= 0 && -3 <= 2)       |            |


```js
function matchCombinatorTripleLoop(K, S) {
    let count = 0;

    for (let x = 0; x <= K; x++) {
        for (let y = 0; y <= K; y++) {
            for (let z = 0; z <= K; z++) {
                if (x + y + z === S) count++;
            }
        }
    }

    console.log(count);
}

matchCombinatorTripleLoop(2, 1); // 3
```


## function

A Function is a block of reusable code that perform a specific task when it is called.

```js
function calcSum(a, b) { // -------- Parameter
    console.log(a + b);
}

calcSum(1, 2); // ------- Argument
```

**Note:**

- a, b are parameters
- 1, 2 are arguments

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

so, If a function returns a value, you can store it in a variable and use it for further operations. If a function does not return anything, you just call the function, but you can’t use its output for further operations.

### Default Parameter:

In JavaScript, default parameters allow you to set default values for function parameters. If no arguments is passed when the function is called, the default parameter will be used.

```js
function showGreet(name = "Guest") {
  console.log("Hello, " + name + "!");
}
showGreet("Tamim"); // Output: Hello, Tamim!
showGreet();        // Output: Hello, Guest!
```

### CallBack Function

A callback function is a function that is passed as an argument to another function to be executed later by that function.

Note: Any function that receives a function as a parameter or returns a function is called a ***higher-order function**.

Here, 
- great is a higher order function
- sayGoodbye is a callback function

```js
function greet(name, callback) { 
  console.log("Hello " + name);
  callback(); 
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Tamim", sayGoodbye); 

/* 
Output:
Hello Tamim
Goodbye!
*/
```

```js
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(5, 3, add)); // 8 -- here add is a callback function

```

We use callback functions in JavaScript every day — in methods like map(), filter(), find(), forEach(), .then(), and addEventListener(), etc.

```js
const numbers = [1, 2, 3];

numbers.forEach(element => {
    console.log(element)
});
```

Here, forEach is an array method (a function defined on an object), and the arrow function (element => …) is the callback function.


```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
```

Here, each .then() is a promise method that takes a callback function that runs after the previous asynchronous step is completed.

```js
document.addEventListener("click", function() {
  console.log("You clicked the page!");
});
```

here, AddEventListener() is a DOM Method that receives an anonymous callback function that executes when the click event occurs.

#### callback hell:

When we write too many nested callback functions that are hard to read and maintain, it is called callback hell.

```js
function first(number, callback) {
    const result = number + 2;
    callback(result);
}

function second(number, callback) {
    const result = number * 2;
    callback(result);
}

function third(number, callback) {
    const result = number - 1;
    callback(result);
}

// Callback Hell
first(1, function (res1) {
    second(res1, function (res2) {
        third(res2, function (res3) {
            console.log("Final Result:", res3); // Final Result: 5
        });
    });
});
```

### Arrow Function:

Arrow functions are a shorter way to write functions in JavaScript. They were introduced in ES6.


```js
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

- **Normal function:** If you want to use the result outside the function, you must return a value.
- **Arrow function:** Can omit {} and return for single-expression functions.

```js
function multiply(a, b) {
  return a * b;
}

const multiplyArrow = (a, b) => a * b;
```

- **Normal functions:** this depends on how the function is called.
- **Arrow functions:** this depends on where the function is defined (lexical scope - can access variables from outer to inner scope, but not from inner to outer scope).

```js
const person = {
    name: "Alice",
    greetNormal: function () {
        setTimeout(function () {
            console.log("Normal: " + this.name);
        }, 1000);
    },
    greetArrow: function () {
        setTimeout(() => {
            console.log("Arrow: " + this.name);
        }, 1000);
    }
};


person.greetNormal(); // undefined
person.greetArrow();  // Alice
```
here, 
- Normal function inside setTimeout → this is timer/global, not person.
- Arrow function inside setTimeout → inherits this from outer function (person) → "Alice"


```js
const person = {
    name: "Alice",

    // Normal function
    greetNormal: function () {
        console.log("Normal: " + this.name);
    },

    // Arrow function
    greetArrow: () => {
        console.log("Arrow: " + this.name);
    }
};

person.greetNormal(); // Alice
person.greetArrow();  // undefined
```
here, 
- Normal function → this is from person.
- Arrow function → inherits this from outer (global) scope → "undefined"

Note: Arrow functions do not have their own this; they inherit it from the surrounding context.

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


### Anonymous function

An anonymous function is a function without a name. You cannot call it by name or reuse it, unless you assign it to a variable, property, or pass it as a callback.

Note: array function are always anonymous function

```js
// Named function
function sayHello() {
    console.log("Hello!");
}

(function () {
    console.log("hola!");
})();

// Anonymous function (stored in a variable)
const sayHi = function() {
    console.log("Hi!");
};

// Arrow function (always anonymous)
const sayHey = () => {
    console.log("Hey!");
};
```

#### Common Use Cases for Anonymous Functions:

- Event Handlers: 
  
```js
const button = document.getElementById('myButton');

// Anonymous function as event handler
button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Arrow function event handler
button.addEventListener('click', () => {
    console.log('Button clicked with arrow function!');
});
```

- Array Methods (Higher-Order Functions)

```js
const numbers = [1, 2, 3, 4, 5];

// map with anonymous function
const doubled = numbers.map(function (num) {
    return num * 2;
});

// filter with arrow function
const evens = numbers.filter(num => num % 2 === 0);

// forEach with anonymous function
numbers.forEach(function (num, index) {
    console.log(`Index ${index}: ${num}`);
});


console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evens);   // [2, 4]

/*
Index 0: 1
Index 1: 2
Index 2: 3
Index 3: 4
Index 4: 5
[ 2, 4, 6, 8, 10 ]
[ 2, 4 ]
*/
```

- callbacks functions
  
```js
// Promise with anonymous functions
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })

/**
 * Here, we passed anonymous callback functions as arguments to .then().
 * When the Promise is resolved, JavaScript automatically calls these functions
 * and provides the resolved values (first the response, then the data).
 */


// Same with arrow functions
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))

/*
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
*/
```


### Recursion

Recursion is a technique where a function calls itself.

Note:
- Recursive function; The function that calls itself.
 

Two Main Components of Recursion:

1.  **Base Case:** The condition where the recursive function stops calling itself. It ensures that the function does not call itself infinitely, which prevents a stack overflow.
    - **Stack OverFlow:** happens when the call stack gets full.
    
    ```js
    function greeting() {
        console.log("Hello, world!");
        greeting();
    }
    greeting(); // RangeError: Maximum call stack size exceeded
    ```
2.  **Recursive Case:** The part where the recursive function calls itself.
    
**Example:** 

Find Factorial Using Recursion:

```js
function factorial(n) {
  if (n === 0) { // base case
    return 1; 
  }
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // 120

// stack growing
/**
 * Returns 5 * factorial(4)
 * Returns 4 * factorial(3)
 * Returns 3 * factorial(2)
 * Returns 2 * factorial(1)
 * Returns 1 * factorial(0)
*/

// base case: n === 0 → return 1

// Stack unwinding

/**
 * return  1 * 1 = 1
 * return  2 * 1 = 2
 * return  3 * 2 = 6
 * return  4 * 6 = 24
 * return  5 * 24 = 120
*/
```

call stack:

![call-stack-2](./images/call-stack-2)

#### Call Stack:

A call stack is a data structure that keeps track of function calls in a Last-In-First-Out (LIFO) manner. When a recursive function calls itself, here's what happens:

- new frame creation and stack growing
- Base case reached and stack un-winding
    
### Closure

A closure is a function technique where an inner function remembers the variables from its outer function, even after that outer function has finished executing. This means JavaScript keeps a reference to the outer variables in memory so the inner function can remember and access them.

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

### Difference between callback function, recursion and closure
- callback function: A function that is passed as an argument to another function and is executed by that function at a later time.
- recursion: A technique where a function calls itself.
- closure: A technique where an inner function remembers the variables from its outer function, even after that outer function has finished executing.

### Pure and Impure functions: 

- A pure function has no external variables and does not depend on them.
- An impure function uses or depends on external variables.

```js
// Pure Function
function add(a, b) {
  return a + b;
}

// Impure Function (changes external data)
let total = 0;
function addToTotal(num) {
  total += num;
}
```

## Problem Soling: Function
## Problem Soling: Recursion

## string

A string in JavaScript is a primitive data type that represents text, enclosed in single quotes (''), double quotes (""), or backticks (``). Strings are iterables, which means they can be iterated over because they have a Symbol.iterator method.

Wait, strings are primitive data types, which means they are not objects. So how is a string iterable and how we use methods on it?

Strings are not objects by default, but when we use object-like features (such as accessing values by index, or calling methods and properties), JavaScript automatically converts them behind the scenes into a temporary String object using autoBoxing. This is why strings also include the Symbol.iterator method thats makes it also an iterables.

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


### String Methods:

- toUpperCase() / toLowerCase() - Converts all letters to uppercase / lowercase.

```js
console.log("hello".toUpperCase()); // "HELLO"
console.log("WORLD".toLowerCase()); // "world"
console.log('Interface'[0].toLowerCase()); // 'i'
```

-  startsWith() / endsWith() / charAt()
- 
  - startsWith() - Returns true/false if string starts with substring.
  - endsWith() - Returns true/false if string ends with substring.
  - charAt() - Returns the character at the given index, if out of range returns "".

```js
console.log("JavaScript".startsWith("Java")); // true
console.log("JavaScript".endsWith("Script")); // true

const str = "JavaScript";
console.log(str.charAt(0));   // J  (1st character)
console.log(str.charAt(4));   // S  (5th character)
console.log(str.charAt(100)); // "" (out of range)
```
    
- trim() / trimStart() - trimEnd() / trimLeft() - trimRight():

  - trim() - for removing white space before and after
  - trimStart()/trimEnd() or trimLeft()/trimRight()- for removing white space from specific side

```js
const str = " hello world! ";
const trimmedStr = str.trim();
console.log(trimmedStr); // Output: "hello world!"


const str = "          hello world! ";
const trimmedStr = str.trimStart();
const trimmedEndStr = str.trimEnd();
console.log(trimmedStr); // Output: "hello world! "
console.log(trimmedEndStr); // Output: "          hello world!"
```
    
- replace(), replaceAll():

  - replace() → Replaces the first match of a substring with another string.
  - replaceAll() → Replaces all matches of a substring with another string.

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
```

- repeat() - Repeats the string a specified number of times. 

```js
console.log("ha".repeat(3)); // "hahaha"
```    

- localeCompare(compareString) - Compares two strings in current locale order (alphabetically and case-sensitive). it returns: 0 if equal, 1 if string > compareString, -1 if string < compareString 


```js
const a = "apple";
const b = "banana";
const c = "Apple";

console.log(a.localeCompare(b)); // -1 → "apple" comes before "banana"
console.log(b.localeCompare(a)); // 1  → "banana" comes after "apple"
console.log(a.localeCompare(c)); // 1  → lowercase > uppercase in ASCII order
```

- padStart(), padEnd():  
  
  - padStart() → Pads the start of a string until it reaches the target length.
  - padEnd() → Pads the end of a string until it reaches the target length.

```js
let num = "5";
console.log(num.padStart(3, "0")); // "005"

/*
- Original string: "5" (length 1)
- Target length: 3
- Pad with "0" at the start until length becomes 3 → "005"
*/

let word = "Hi";
console.log(word.padEnd(5, "*")); // "Hi***"
```
- charCodeAt() / codePointAt() → Returns the ASCII/Unicode number of a character.
 
 ```js
 console.log('a'.charCodeAt(0)); // Output: 97
console.log('a'.codePointAt(0)); // Output: 97
 ```
 
- String.fromCharCode() / String.fromCodePoint() → Converts an ASCII/Unicode number to a string.

```js
console.log(String.fromCharCode(97)); // Output: 'a'
console.log(String.fromCodePoint(97)); // Output: 'a'
```

### Common Property / Methods for string / array:

- .length (property): returns the length of an array or string:

```js
// String
const str = "JavaScript";
console.log(str.length); // 10 → total characters

// Array
const arr = [10, 20, 30, 40];
console.log(arr.length); // 4 → total items
```

- includes() - returns true or false if an element/string exist:

```js
// String
const text = "I love JavaScript";
console.log(text.includes("love")); // true
console.log(text.includes("Love")); // false (case-sensitive)

// Array
const numbers = [1, 2, 3, 4];
console.log(numbers.includes(3));  // true
console.log(numbers.includes(5));  // false
```

- indexOf() — Returns the index of the first occurrence, -1 if not found.

```js
// String
const msg = "banana";
console.log(msg.indexOf("a"));     // 1 → first "a"
console.log(msg.indexOf("a", 2));  // 3 → next "a" after index 2
console.log(msg.indexOf("z"));     // -1 → not found

// Array
const arr = [10, 20, 30, 10];
console.log(arr.indexOf(10));      // 0 → first occurrence
console.log(arr.indexOf(10, 1));   // 3 → next occurrence after index 1
console.log(arr.indexOf(50));      // -1 → not found
```

- lastIndexOf() — Returns the last occurrence index of a substring/element, -1 if not found.

```js
// String
const text = "banana";
console.log(text.lastIndexOf("a")); // 5 → last "a"
console.log(text.lastIndexOf("n")); // 4
console.log(text.lastIndexOf("z")); // -1 → not found

// Array
const nums = [10, 20, 30, 20, 10];
console.log(nums.lastIndexOf(20)); // 3 → last occurrence
console.log(nums.lastIndexOf(10)); // 4
console.log(nums.lastIndexOf(99)); // -1 → not found
```

- slice(start, end) — Extracts part of a string/array.

```js
// String
const str = "JavaScript";
console.log(str.slice(0, 4));    // "Java"
console.log(str.slice(-6));      // "Script"

// Array
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4));    // [2, 3, 4]
console.log(arr.slice(-2));      // [4, 5]
```

- split() and join()- 
  - split() → converts a string to array
  - join() → converts an array to string

```js
const str = "Hello";
const split = str.split("")
console.log(split) // [ 'H', 'e', 'l', 'l', 'o' ]

const join = split.join("");
console.log(join) // Hello
```

- concat() — Joins multiple strings or arrays together:

```js
// String
const s1 = "Hello";
const s2 = "World";
console.log(s1.concat(" ", s2)); // "Hello World"

// Array
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4]
```

- at(index) — Returns the element/character at the given index:

```js
// String
const text = "JavaScript";
console.log(text.at(0));   // "J"
console.log(text.at(-1));  // "t" (last character)

// Array
const numbers = [10, 20, 30, 40];
console.log(numbers.at(0));   // 10
console.log(numbers.at(-1));  // 40 (last item)
```


## Problem Solving: String

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

Since, array are object so it copied by reference, means Assigning an array to another variable does not create a new array. They both point to the same memory address:

```js
let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

console.log(arr === fruits); // true

arr.push("Pear"); // modify the array by reference

console.log(fruits); // [ 'Banana', 'Pear' ] - 2 items now
console.log(arr); // [ 'Banana', 'Pear' ] - 2 items now
```

### Array Methods:

#### Adding / Removing Elements:

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
    
**Why push/pop run fast and unshift/shift are slow?**
    
![push/pop/unshift/shift](images/image8.png)
    
push() and pop() are fast because they work at the end of an array, where JavaScript can simply add or remove an item without affecting the positions of other elements.
    
On the other hand, shift() and unshift() are slow because they work at the beginning of the array. When you remove the first item with shift(), JavaScript has to move every remaining element one position to the left. Similarly, when you use unshift() to add an item to the beginning, all existing elements must shift one position to the right. These shifts take more time and processing, especially when the array is large.
    
- splice(start, deleteCount, ...items) –modifies the original array by adding, removing, or replacing elements and returns removed items:
    
```js
let arr = ["I", "study", "JavaScript"];
// from index 1 remove 1 element
console.log(arr.splice(1, 1));  // [ 'study' ]
console.log(arr); // [ 'I', 'JavaScript' ]


let arr2 = ["I", "study", "JavaScript", "right", "now"];
// remove first 3 elements and replace them with another
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

Note: 
- splice(): modifies the original array by adding, removing, or replacing elements.
- slice(): doesn't modifies the original array, it returns a shallow copy of the original array after sliceing.


#### Iteration / Transformation (Higher-order functions):

| Method      | Purpose                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------ |
| map()       | Returns a new array by applying a callback function to each element of the original array. |
| forEach()   | Same as Map() but no return value                                                          |
| filter()    | Returns a new array of elements for which the callback function returns true               |
| find()      | Returns the first element for which the callback function returns true, or undefined.      |
| findIndex() | Returns the index of the first element for which the callback function returns true.       |
| reduce()    | Uses a callback function to combine all elements into a single value.                      |
| some()      | Returns true if the callback function returns true for any element.                        |
| every()     | Returns true if the callback function returns true for all elements.                       |


- map(callbackFunction):
    
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

- forEach(callbackFunction): 
    
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
    
- filter(callbackFunction):
    
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

- find(callbackFunction):
    
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
    
- findIndex(callbackFunction):
    
```js
const users = [
  { id: 1, name: "Tamim" },
  { id: 2, name: "Rafi" },
  { id: 3, name: "Amin" }
];

// Find index of user with id 2
const index = users.findIndex(user => user.id === 2);
console.log(index); // 1
```
    
- reduce(callbackFunction):
    
Syntax:
    
```js
reduce((accumulator, currentValue) => ..., initialValue);
```
    
here, 
- Accumulator: The running total or result so far
- CurrentValue: THe current element being processed
- InititalValue: The starting value of the accumulator (optional: because if we don’t provide an initialValue, JavaScript will automatically use the first element of the array as the starting accumulator.)

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
- accumulator = keeps the result
- 0 = The staring value of accumulator
- currentValue = the current element of the array
    
![reduce](images/reduce.png)

- some(callbackFunction): 
    
```js
const users = [
  { name: "Tamim", online: false },
  { name: "Rafi", online: true },
  { name: "Amin", online: false }
];

const anyOnline = users.some(user => user.online);

console.log(anyOnline); // true → because Rafi is online
```
    
- every(callbackFunction):
    
```js
const products = [
  { name: "Laptop", inStock: true },
  { name: "Mouse", inStock: true },
  { name: "Keyboard", inStock: true }
];

const allInStock = products.every(product => product.inStock);

console.log(allInStock); // true → all items are available
```

```js
function findLuckyNumber(A, B) {
    let found = false
    for (let i = A; i <= B; i++) {
        const str = i.toString()

        const isLucky = [...str].every(ch => ch === '4' || ch === '7')

        if (isLucky) {
            console.log(i)
            found = true
        }
    }
    if (!found) {
        console.log(-1)
    }
}

findLuckyNumber(4, 20); // 4 7
findLuckyNumber(8, 15); // -1
```

#### Others:

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
    
- It converts elements to strings.
- Then it compares those strings using Unicode (UTF-16) code unit values.
   
thats why, "1" vs "2" → "1" comes first "2" vs "15" → "1" comes before "2" so "15" comes before "2" So the result becomes: [1, 15, 2]
    
To fix it, we need to use a custom compare function to sort it by js sort() method. js sort() method used this custom function internally to determine the correct sorting.
    
```js
let arr2 = [1, 2, 15];
console.log(arr2.sort((a, b) => a - b)); // [1, 2, 15] --> ascending order
```
How it works:
    
`(a, b) => a - b this function returns:`
- Negative number (a - b < 0) → keep a before b
- Positive number (a - b > 0) → place b before a
- Zero (a - b === 0) → leave a and b unchanged

```js
let arr2 = [1, 2, 15];
console.log(arr2.sort((a, b) => b - a)); // [15, 2, 1] --> descending order
```


- fill(value, start, end) – Fills array with value:
    
```js
const arr = [1, 2, 3, 4, 5];

arr.fill(0, 1, 4);

console.log(arr); // [1, 0, 0, 0, 5]
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

- Array.isArray(value) – Return true if value is an array, else false:
    
```js
const arr = [1, 2]
const result = Array.isArray(arr);
console.log(result) // true       
```

- Array.form() - creates a new shallow-copied array from an array-like object (such as a NodeList, arguments, or { length: 5 }) or an iterable object (like a String, Array, Set, or Map).

Syntax: 

```
Array.from(arrayLike or iterables, mapLikeFunction, thisArg)
```

Examples: 

You can generate arrays without loops using Array.form() method:

```js
const numbers = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(numbers); // [1, 2, 3, 4, 5]
```
here, 
- Array.from({ length: 5 }) → Creates an array of length 5 filled with undefined values:
  - [undefined, undefined, undefined, undefined, undefined]
- (_, i) => i + 1 → Works like a map function, replacing each undefined with its index + 1.
 
```js
const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
console.log(alphabets); // ['A', 'B', 'C', ..., 'Z']
```

```js
const arr = Array.from([1, 2, 3], (x) => x * 2);
console.log(arr);  // [2, 4, 6]
```


```js
const arr = Array.from(['a', 'b', 'c'], (value, index) => `${index}: ${value}`);
console.log(arr); // ['0: a', '1: b', '2: c']

```

```js
const obj = { multiplier: 10 };

const arr = Array.from([1, 2, 3], function (x) {
  return x * this.multiplier;
}, obj);

console.log(arr); // [10, 20, 30]
```

### Common Property / Methods for string / array:

- .length (property): returns the length of an array or string:

```js
// String
const str = "JavaScript";
console.log(str.length); // 10 → total characters

// Array
const arr = [10, 20, 30, 40];
console.log(arr.length); // 4 → total items
```

- includes() - returns true or false if an element/string exist:

```js
// String
const text = "I love JavaScript";
console.log(text.includes("love")); // true
console.log(text.includes("Love")); // false (case-sensitive)

// Array
const numbers = [1, 2, 3, 4];
console.log(numbers.includes(3));  // true
console.log(numbers.includes(5));  // false
```

- indexOf() — Returns the index of the first occurrence, -1 if not found.

```js
// String
const msg = "banana";
console.log(msg.indexOf("a"));     // 1 → first "a"
console.log(msg.indexOf("a", 2));  // 3 → next "a" after index 2
console.log(msg.indexOf("z"));     // -1 → not found

// Array
const arr = [10, 20, 30, 10];
console.log(arr.indexOf(10));      // 0 → first occurrence
console.log(arr.indexOf(10, 1));   // 3 → next occurrence after index 1
console.log(arr.indexOf(50));      // -1 → not found
```

- lastIndexOf() — Returns the last occurrence index of a substring/element, -1 if not found.

```js
// String
const text = "banana";
console.log(text.lastIndexOf("a")); // 5 → last "a"
console.log(text.lastIndexOf("n")); // 4
console.log(text.lastIndexOf("z")); // -1 → not found

// Array
const nums = [10, 20, 30, 20, 10];
console.log(nums.lastIndexOf(20)); // 3 → last occurrence
console.log(nums.lastIndexOf(10)); // 4
console.log(nums.lastIndexOf(99)); // -1 → not found
```

- slice(start, end) — Extracts part of a string/array.

```js
// String
const str = "JavaScript";
console.log(str.slice(0, 4));    // "Java"
console.log(str.slice(-6));      // "Script"

// Array
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4));    // [2, 3, 4]
console.log(arr.slice(-2));      // [4, 5]
```

- split() and join()- 
  - split() → converts a string to array
  - join() → converts an array to string

```js
const str = "Hello";
const split = str.split("")
console.log(split) // [ 'H', 'e', 'l', 'l', 'o' ]

const join = split.join("");
console.log(join) // Hello
```

- concat() — Joins multiple strings or arrays together:

```js
// String
const s1 = "Hello";
const s2 = "World";
console.log(s1.concat(" ", s2)); // "Hello World"

// Array
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4]
```

- at(index) — Returns the element/character at the given index:

```js
// String
const text = "JavaScript";
console.log(text.at(0));   // "J"
console.log(text.at(-1));  // "t" (last character)

// Array
const numbers = [10, 20, 30, 40];
console.log(numbers.at(0));   // 10
console.log(numbers.at(-1));  // 40 (last item)
```

## Problem Solving: Array

## Objects:

An object is a collection of key-value pairs (property). where key is a string or symbol, and value can be anything.

- key + value = property


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

### Dot Notation VS Bracket Notation:

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
/*
Alice: 90
Bob: 80
Charlie: 85
*/

for (let name in scores) {
    console.log(`${name}: ${scores.name}`);
}

/*
Alice: undefined
Bob: undefined
Charlie: undefined
*/
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
console.log(data.section.prop) // TypeError: Cannot read properties of undefined
```


### Objects References and cloning and marging:

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

When an object variable is copied, the reference is copied, but the object itself is not duplicated:

```js
let user = { name: "John" };

let admin = user; // copy the reference
```

Now we have two variables, each storing a reference to the same object:

![object image](images/image7.png)

As you can see, there’s still one object, but now with two variables that reference it. We can use one of that  variables to access the object and modify its contents:

```js
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

console.log(user.name); // 'Pete', 
console.log(admin.name); // 'Pete', 
```

An important side effect of storing objects as references is that an object declared as const can be modified:

```js
const user = {
    name: "John"
};

user.name = "Pete";

console.log(user.name); // Pete
```

#### Cloning and merging:

So, copying an object variable creates one more reference to the same object. But what if we need to duplicate an object? 

```js
let user = {
    name: "John",
    age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];

}

console.log(clone); // { name: "John", age: 30 }
console.log(user); // { name: "John", age: 30 } 

clone.name = "Pete"; // changed the data in it

console.log(user.name); // still John in the original object
console.log(clone.name); // but Pete in the clone

console.log(clone); // { name: "Pete", age: 30 }
console.log(user); // { name: "John", age: 30 }
```

For the same cloneing thing we can use **structuredClone(object)** method:

```js
let user = {
    name: "John",
    age: 30
};

let clone = structuredClone(user)


console.log(clone); // { name: "John", age: 30 }
console.log(user); // { name: "John", age: 30 } 

clone.name = "Pete"; // changed the data in it

console.log(user.name); // still John in the original object
console.log(clone.name); // but Pete in the clone

console.log(clone); // { name: "Pete", age: 30 }
console.log(user); // { name: "John", age: 30 }
```

And for the marging purpuse we can also use an another method called **Object.assign(destination, source)**. It copies the properties of all source objects into the target destination, and then returns it as the result.


```js
let user = {
    name: "John",
    age: 30
};

let family = {
    member: 3,
    sister: true
}

let nationality = {
    country: "BD"
}

let clone = Object.assign(user, family, nationality)

console.log(user) // { name: 'John', age: 30, member: 3, sister: true, country: 'BD' }
console.log(clone) // { name: 'John', age: 30, member: 3, sister: true, country: 'BD' }

clone.member = "200"
clone.country = "Us"

console.log(user) // { name: 'John', age: 30, member: '200', sister: true, country: 'Us' }
console.log(clone) // { name: 'John', age: 30, member: '200', sister: true, country: 'Us' }
```

Note: Object.assign() holds references, means if you change a object in one place, it automatically affects the others.


### Object.keys(), Object.Values() and Object.entries():

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

### Object.freeze() vs Object.seal():

**Object.freeze():**

Object.freeze() freezes an object, so the object becomes immutable. This means:

-   You cannot add new properties.
-   You cannot delete existing properties.
-   You cannot modify existing property values.

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
// Normal freeze 
const user = {
    name: "Bob",
    address: {
        city: "Paris"
    }
};

Object.freeze(user);
user.address.city = "London"; // inner object is still mutable
console.log(user.address.city); // "London" ❌ not frozen deeply



// Manual Deep Freeze (without recursion)
const deepUser = {
    name: "Alice",
    address: {
        city: "Paris",
        country: {
            name: "France"
        }
    }
};

// Step 1: Freeze inner-most object first
Object.freeze(deepUser.address.country);

// Step 2: Then freeze the next level
Object.freeze(deepUser.address);

// Step 3: Finally freeze the top-level object
Object.freeze(deepUser);

// Now all levels are frozen
deepUser.address.city = "London";             // ❌ ignored
deepUser.address.country.name = "England";    // ❌ ignored

console.log(deepUser.address.city);           // "Paris"
console.log(deepUser.address.country.name);   // "France"



// Deep Freeze (with recursion)
function deepFreeze(obj) {
    Object.freeze(obj); // Freeze the current object

    for (const value of Object.values(obj)) {
        if (value && typeof value === "object") {
            deepFreeze(value); // recursively freeze nested objects
        }
    }

    return obj;
}

// Example
const recursiveUser = {
    name: "Charlie",
    address: {
        city: "Berlin",
        country: {
            name: "Germany"
        }
    }
};

deepFreeze(recursiveUser);

recursiveUser.address.city = "London";           // ❌ ignored
recursiveUser.address.country.name = "England";  // ❌ ignored

console.log(recursiveUser.address.city);         // "Berlin"
console.log(recursiveUser.address.country.name); // "Germany"
```

**Object.seal():**

Object.seal() seals an object. This means:

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



### Check Property existence:

With in operator:

```js
let user = {
    name: "John",
    age: 30,
}

console.log("age" in user); // true, user.age exists
console.log("location" in user); // false, user.location doesn't exist
```

With includes() method:

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

With hasOwnProperty() method:

```js
const profile = {
    name: "Rahim",
    age: 28,
    city: "Dhaka",
};

const hasName = profile.hasOwnProperty("name");
console.log(hasName); // Output: true
```

### Create an Object Method:

A method is a function that is defined as a property of an object. It represents an action that the object can perform and can access the object’s data using the this keyword.

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

If we used this.name instead of user.name, then the code work:

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

### Optional Chaining (?)

Optional Chaining(?) is a safe way to access deeply nested properties without getting an error if something is undefined or null.

Without Optional Chaining:

```js
const user = {};

console.log(user.address); // undefined

console.log(user.address.city); // error: Cannot read properties of undefined (reading 'city')
```

With Optional Chaining:

```js
const user = {};
console.log(user.address?.city); // undefined
```

if address is undefined or null optional chaining stops accessing .city, and since optinal chaing stop accessing city, so you didn't get an error here.

we can also use optional chaining for calling method:

```js
const user = {
    sayHi() {
        console.log("Hi!");
    }
};

user.sayHi?.();     // Hi!
user.sayHola?.();    // Nothing happens, no error or undefined
user.sayHola() // TypeError: user.sayHola is not a function
```

### Date Object:

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
console.log(date.getMonth());    // Returns month (0–11)
console.log(date.getDate());     // Day of the month (1–31)
console.log(date.getDay());      // Day of the week (0–6), 0 = sunday
console.log(date.getHours());    // Hours (0–23)
console.log(date.getMinutes());  // Minutes (0–59)
console.log(date.getSeconds());  // Seconds (0–59)
```

- Date Formatting (Readable Strings):

| Option                     | Description                                   | Example Output               |
| -------------------------- | --------------------------------------------- | ---------------------------- |
| `weekday`                  | `"long"`, `"short"`, `"narrow"`               | `Friday`, `Fri`, `F`         |
| `year`                     | `"numeric"`, `"2-digit"`                      | `2025`, `25`                 |
| `month`                    | `"numeric"`, `"2-digit"`, `"long"`, `"short"` | `1`, `01`, `Feb`, `February` |
| `day`                      | `"numeric"`, `"2-digit"`                      | `3`, `03`                    |
| `hour`, `minute`, `second` | `"numeric"`, `"2-digit"`                      | `2 PM`, `02 PM`              |
| `hour12`                   | `true` / `false` (12h or 24h)                 | `2:30 PM` / `14:30`          |
| `timeZone`                 | e.g. `"UTC"`, `"Asia/Dhaka"`                  | converts to that zone        |


```js
const date = new Date();
console.log(date.toString());      // Mon Aug 04 2025 01:14:18 GMT+0600 (Bangladesh Standard Time)
console.log(date.toDateString());  // Mon Aug 04 2025
console.log(date.toTimeString());  // 01:14:18 GMT+0600 (Bangladesh Standard Time)


console.log(date.toLocalString()) // 8/4/2025 1:15:24 AM
console.log(date.toLocaleDateString()); // 8/4/2025
console.log(date.toLocaleTimeString()); // 1:15:24 AM


console.log(date.toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
}));
// Friday, October 31, 2025, 02:45 PM


console.log(date.toLocaleDateString("bn-BD", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
}));
// শুক্রবার, ৩১ অক্টোবর, ২০২৫

```

Note: if you don't specify time zone, js Uses your system’s local time: 

```js
console.log(date.toLocaleString("en-US")); 
// 10/31/2025, 1:09:40 PM

console.log(date.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
// 10/31/2025, 1:09:40 PM (Bangladesh = UTC+6)

console.log(date.toLocaleString("en-US", { timeZone: "UTC" }));
// 10/31/2025, 7:09:40 AM

console.log(date.toLocaleString("en-US", { timeZone: "America/New_York" }));
// 10/31/2025, 3:09:40 AM (New York = UTC-4)
```

### Math Object:

Math Properties:

```js
console.log(Math.PI);       // 3.141592653589793
```

Math Methods:

```js
console.log(Math.round(4.5)); // 5 
/*
Rounds to the nearest integer:
if number >= .5, it rounds up to the next integer
if number < .5, it rounds down to the previous integer
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



## Problem Solving: Object

## Destructuring

Destructuring means breaking apart arrays or objects and assigning their values to variables in a clean and short way.


**Basic Syntax:**

```js
const arr = [1, 2, 3];

const [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


const person = {
  name: "Tamim",
  age: 21
};

const { name, age } = person;

console.log(name); // Tamim
console.log(age);  // 21
```

**Skip Items:** 

```jsx
const colors = ["red", "green", "blue"];

const [first, , third] = colors;

console.log(first); // red
console.log(third); // blue

const person = {
  name: "Tamim",
  age: 21,
  signle: true,
  marid: false,
  hasJob: false,
  hasMoney: false,
  hasBike: false,
};

const { name, age } = person;

console.log(name); // Tamim
console.log(age);  // 21
```

**Default Values:**

```js
const arr = [10];

const [x, y = 100] = arr;

console.log(x); // 10
console.log(y); // 100


const person = {
  name: "Tamim"
};

const { name, age = 20 } = person;

console.log(name); // Tamim
console.log(age);  // 20
```

**Rest Operator:**

```js
const nums = [1, 2, 3, 4];

const [first, ...rest] = nums;

console.log(first); // 1
console.log(rest);  // [2, 3, 4]


const user = {
  name: "Tamim",
  age: 21,
  country: "BD"
};

const { name, ...others } = user;

console.log(name);   // Tamim
console.log(others); // { age: 21, country: "BD" }
```

**Nested Destructruing:**

```js
// Nested destructuring example
const user = {
  id: 1,
  name: 'Alice',
  address: {
    city: 'Wonderland',
    zip: 12345
  },
  hobbies: ['reading', 'chess']
};

const { name, address: { city, zip }, hobbies: [firstHobby, secondHobby] } = user;

console.log(name);        // Alice
console.log(city);        // Wonderland
console.log(zip);         // 12345
console.log(firstHobby);  // reading
console.log(secondHobby); // chess
```

**Destructuring in Function Parameters:**
    
```js
function greet([first, second]) {
    console.log("Hello", first, second);
}
greet(["Tamim", "Ahmed"]); // Hello Tamim Ahmed


function displayUser({ name, age }) {
    console.log(`${name} is ${age} years old.`);
}

displayUser({ name: "Tamim", age: 21 }); // Tamim is 21 years old.
```


## Error Handling:

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
    let result = 10 / y; // err
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

**SyntaxError:**
 
Syntax error happens when JavaScript code is not written correctly.

```js
// Missing parenthesis:
console.log("Hello world" // SyntaxError: missing ) after argument list

// Using reserved keywords for variable names:
let let = 5; // SyntaxError: let is disallowed as a lexically bound name

// not using quotes properly for string:
let greeting = "Hello; 
// SyntaxError: Invalid or unexpected token

// Invalid object literal:
let obj = { name: "Tamim", age: }; // SyntaxError: Unexpected token '}'
```

#### ReferenceError
Reference Error happens when you use a variable that hasn’t been declared.

```js
// Undeclared variable:
console.log(x); // ReferenceError: x is not defined

// Misspelled variable name:
let username = "Tamim";
console.log(usernme); // ReferenceError: usernme is not defined

// Variable used outside its block:
{
    let a = 5;
}
console.log(a); // ReferenceError: a is not defined

// Accessing variable before declaration: 
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// Function-scoped variable not declared:
function test() {
    console.log(nonExistent);
}
test(); // ReferenceError: nonExistent is not defined
```

#### TypeError
Type Error happens when a value is used in an invalid way (e.g., calling non-function, accessing property of undefined, etc.)

```js
// Calling something that's not a function:
let num = 10;
num(); // TypeError: num is not a function


// Accessing property of undefined:
let user;
console.log(user.name); // TypeError: Cannot read properties of undefined (reading 'name')

// Using string like an array:
let str = "hello";
str.push("!"); // TypeError: str.push is not a function

// Invalid assignment:
const age = 25;
age = 30; // TypeError: Assignment to constant variable.

// Accessing array index of null:
let arr = null;
arr[0]; // TypeError: Cannot read properties of null (reading '0')

// Incorrect method on type:
let number = 123;
number.toUpperCase(); // TypeError: number.toUpperCase is not a function

// Using array as object incorrectly:
let nums = [1, 2, 3];
console.log(nums.name.first); // TypeError: Cannot read properties of undefined (reading 'first')
```


## Js Modules: Import and export

### Export:

There are Three main ways to export a file:

1. Named Export: export multiple values by name

```js
// math.js
export const PI = 3.14;

export function add(x, y) {
  return x + y;
}

export const multiply = (x, y) => x * y;
```

2. Default Export: export only one default value form a file. A file can have only one default export

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
import { PI, add, multiply } from './math.js'; // name export
import greet from './greet.js'; // default export
import sayHello, { sayHi } from './utils.js'; // default export + name export

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

local and session storage is a Web Storage API feature that allows you to store up to 10MB (5 + 5) key-value pairs in the browser.

They stores strings only. So, If you want to store objects, arrays, or any other non-string data types, you need to convert them into strings using JSON.stringify() before storing.

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

JavaScript, by default, is a synchronous programming language, which means it executes code line by line, waiting for each task to finish before moving to the next.

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

However, many operations in real life take time. If JS waited for them synchronously, it would block the browser or program.

To solve this, JS uses asynchronous operations managed by Web APIs, event loop, and callback queue. So, asynchronous methods like fetch(), async/await, setTimeout(), setInterval() etc do not change the synchronous nature of JavaScript — they just work alongside it.

```js
console.log("1"); // sync

setTimeout( () => {   
    console.log("2 (async)"); // async
}, 0)

console.log("3"); // sync


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))

console.log("4"); // sync

/*
Output:
1
3
4
2 (async)
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
*/
```

### Web API:

A Web API is a feature provided by the browser (or the environment like Node.js) that JavaScript can use to do extra things that is not part of the js itself, like:

- setTimeout(), setInterval()
- Make HTTP requests (fetch)
- Handle user events (clicks, input)
- Work with the DOM
- Use browser storage (localStorage, sessionStorage)

### Event loop:
The Event Loop is a mechanism that allows JavaScript to perform asynchronous operations even though it is single-threaded (has only one call stack).

so, After parsing, compiling, and interpreting the code, the JavaScript engine uses these key parts:
- Call Stack - Executes synchronous code line by line with FIFO structure.
- Web APIs – Handle asynchronous operations features (timers, fetch, events) and send completed callbacks to the callback Queues.
- Callback Queue - all pending async task added here by event loop
- Event Loop - Constantly checks, is the call stack empty? If yes → it moves asynchronous tasks from callback queue into the call stack to be run

Note: 
- Web APIs provide the environment and methods for async operations.
- Event Loop manages the execution order, ensuring async tasks run without blocking the single-threaded call stack.

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
// With Parameters
function greet(name) {
    console.log("Hello, " + name);
}

// Repeat every 2 seconds
const intervalId = setInterval(greet, 2000, "Tamim");
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

### JSON, fetch, async/await

#### JSON
JSON stands for JavaScript Object Notation — it's a lightweight data format used to store and exchange data, especially in APIs. JSON looks like JavaScript objects, but it's suppport double quotes only ("").

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


#### fetch
The fetch() method is used to make HTTP requests (GET, POST, PUT, PATCH, DELETE etc.). When we call fetch(), the browser’s Web API immediately returns a Promise.

A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.

Promise States:
- Pending - operation initial stage
- Resolved(fulfilled) - if the operation is successful
- Rejected - if the operation fails


we can use below methods to work with the result of a promise:

.then() - Called when the promise is resolved (fulfilled)
.catch() - Called when the promise is rejected (error)
.finally() - must Called, no matter whatever the promise was fulfilled or rejected 


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

here, 3 steps happed: 
1. fetch(url):
   - starts a network request and immediately returns a Promise (pending).
2. then(res ⇒ res.json()):
   - runs when the request is resolved and receives the Response object,
   - converts it into a JavaScript object, and returns another Promise.
3. then(data ⇒ console.log(data)):
   - receives the final object when the .json() Promise resolves logs it to the console.



```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => console.log(response))
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

async and await are modern JavaScript keywords that let you write asynchronous code in a way that looks like synchronous code. They make working with Promises cleaner and easier to read.

- async - Used to declare an async function that returns a Promise that resolves when the function is finished running.
- await - Used inside an async function to pause execution until a Promise resolves.If the Promise is rejected, it throws an error that you can catch with try...catch.
  - await fetch() --> fetch(url) returns a Promise --> await pauses the async function until that fetch Promise resolves --> Once resolved, the variable response becomes a Response object
  - await response.json(); --> response.json() also returns a Promise --> await waits until that Promise resolves --> Once resolved, data becomes a JavaScript object.

Note:

Normally, try...catch only catches synchronous errors. But when you use await, JavaScript temporarily pauses the function — so the asynchronous error behaves like a synchronous one. That’s why try...catch works perfectly with await even though the operation is asynchronous.

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
## Introduction To the DOM

### What is DOM:

DOM (Document Object Model) is a programming interface provided by the browser that represents an HTML as a hierarchical tree structure where each element is a node. It allows JavaScript to access, manipulate, and update the html elements, structure, and style of a web page dynamically.

### DOM Tree Structure:

The DOM represents your document as a tree structure. Every HTML element becomes a "node" in this tree.

![image](images/Example-of-DOM-Node-Tree.png) 

![image](images/image10-Parents_and_Children_Tree_Data_Structure.jpg) 

![image](images/js-tree1.png)

Note:
- Node: The generic term for any item in the DOM tree
- Element Node: A specific type of node that represents HTML tags

### Parent, Child, and Sibling Relationships:

| 🔢 Category  | 🏷️ Property               | 🔍 Description                                                         |
| ----------- | ------------------------ | --------------------------------------------------------------------- |
| **Parent**  | `parentNode`             | Returns the parent **node** of the current node                       |
|             | `parentElement`          | Returns the parent **element**, or `null` if parent is not an element |
| **Child**   | `children`               | Returns a list of child **elements only**                             |
|             | `childNodes`             | Returns all child **nodes** (elements, text, comments, etc.)          |
|             | `firstElementChild`      | Returns the **first child element**                                   |
|             | `firstChild`             | Returns the **first child node** (could be text)                      |
|             | `lastElementChild`       | Returns the **last child element**                                    |
|             | `lastChild`              | Returns the **last child node** (could be text)                       |
| **Sibling** | `nextElementSibling`     | Returns the **next sibling element**                                  |
|             | `nextSibling`            | Returns the **next sibling node** (can be text)                       |
|             | `previousElementSibling` | Returns the **previous sibling element**                              |
|             | `previousSibling`        | Returns the **previous sibling node** (can be text)                   |

Example 1: 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Object Model</title>
</head>

<body>
    <div id="parent">
        <p id="first-child">First paragraph</p>
        <p id="second-child">Second paragraph</p>
        <span id="last-child">Span element</span>
    </div>

    <script>
        const parent = document.getElementById('parent');
        const firstChild = document.getElementById('first-child');
        const secondChild = document.getElementById('second-child');
        const lastChild = document.getElementById('last-child');

        // Parent relationships
        console.log(firstChild.parentNode);        // The div element
        console.log(firstChild.parentElement);     // Also the div element

        // Child relationships
        console.log(parent.children);              // All child elements (gives a HTML Collections)
        console.log(parent.firstElementChild);     // First p element
        console.log(parent.lastElementChild);      // The span element

        // Sibling relationships
        console.log(firstChild.nextElementSibling);    // Second p element
        console.log(firstChild.previousElementSibling); // null (no previous sibling)
        console.log(secondChild.nextElementSibling);   // Span element
        console.log(secondChild.previousElementSibling); // First p element
    </script>
</body>

</html>
```

![image](images/parent-child-sibling-relationship.png)

In the above example:

- The div is the parent of all three elements inside it
- The p and span elements are children of the div
- The two p elements and the span are siblings to each other

Example 2: 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <header>
        <h1>Welcome to my DOM</h1>
        <p>Lorem ipsum dolor sit imamet consectetur adipisicing elit. Voluptatibus, natus! Dolorem voluptate provident rem
            eligendi eaque, odit fugiat sed tenetur corporis vel, laudantium veniam accusantium sunt adipisci blanditiis
            dolore vitae?</p>
    </header>
    <main id="main-container">
        <section>
            <h1>My Awesome DOM de baba</h1>
            <ul>
                <li>Jalali Set</li>
                <li>Shafayet</li>
                <li>bonobash</li>
                <li>DOM de re baba</li>
            </ul>
        </section>
        <section class="fruits-container">
            <h1 id="fruits-title" class="some-class random-class blue-bg">Fruits I like</h1>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Carrot</li>
            </ul>
        </section>
        <section id="places-container" class="large-text">
            <h1 id="places-title">Places I like to visit</h1>
            <ul id="places-list">
                <li class="important-places">Soondarban</li>
                <li class="important-places">bandorban</li>
                <li class="important-places">Kataban</li>
                <li class="other-place">shalbon</li>
            </ul>
        </section>
    </main>


    <script>
        const placesContainer = document.getElementById("places-container");
        console.log(placesContainer);
        console.log(placesContainer.childNodes);
        console.log(placesContainer.firstChild);
        console.log(placesContainer.childNodes[1]);
        console.log(placesContainer.childNodes[3]);
        console.log(placesContainer.childNodes[3].childNodes[5]);

        const placesUL = document.querySelector("#places-container");
        console.log(placesUL);
        const newLI = document.createElement("li");
        newLI.innerText = "Brand new place to go";
        placesUL.appendChild(newLI);
        const newLI2 = document.createElement("li");
        newLI2.innerText = "another dynamic li";
        placesUL.appendChild(newLI2);

        console.log(placesUL);
        console.log(placesUL.parentNode);
        console.log(placesUL.parentNode.parentNode);
    </script>
</body>

</html>
```

![image](images/differentTypeOfnodeOutput.png)

### DOM Collection: 
A DOM Collection is a special array-like object that holds a group of nodes or elements from the Document Object Model (DOM).

DOM collection is array like means you can access items with indexes, and can use .length properties but since it's not actually array so, you can't use map(), filter(), find() etc, unless converted.

Common DOM Collection Types:


| Collection       | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| `NodeList`       | Is a collection of nodes (can include elements, text nodes, comments, etc.). |
| `HTMLCollection` | An HTMLCollection contains only HTML elements (not text nodes or comments).  |
| `childNodes`     | NodeList of **all types** of child nodes                                     |
| `NamedNodeMap`   | Collection of attribute nodes of an element                                  |
| `DOMTokenList`   | Collection of classes                                                        |

![image](src="images/node-list.png)         
![image](images/html-collection.png)


### Document Object:
The document object is your entry point to the entire DOM. It represents the whole HTML document and provides methods to access and manipulate everything within it.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Object Model</title>
</head>

<body>
    <h1>Welcome to My Page</h1>
    <p>This is a simple HTML document.</p>

    <script>
        // Document object properties
        console.log(document);                  // Document object
        console.log(document.documentElement);  // <html> element
        console.log(document.head);             // <head> element  
        console.log(document.body);             // <body> element
        console.log(document.title);            // Page title
        console.log(document.URL);              // Current URL
        console.log(document.domain);           // Domain name
        console.log(document.forms);            // All forms in the document
        console.log(document.images);           // All images in the document
        console.log(document.links);            // All links in the document
        console.log(document.scripts);          // All scripts in the document
    </script>
</body>

</html>
```

![image](images/document object.png)




### DOM VS BOM:

| DOM                                          | BOM                                            |
| -------------------------------------------- | ---------------------------------------------- |
| Controls the document content                | Controls browser features outside the document |
| Standardized (don't varies between browsers) | Not standardized (varies between browsers)     |
| Accessed Using document object               | Accessed Using window object                   |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Object Model</title>
</head>

<body>
    <h1 id="myHeading"></h1>

    <script>
        // DOM
        const heading = document.getElementById("myHeading");
        heading.innerText = "Hello from DOM!";

        // BOM
        const url = window.location.href;
        console.log("Current URL:", url);

        window.alert("Welcome to BOM");
    </script>
</body>

</html>
```
<img src="images/welbome-to-BOM.png">
<img src="images/welcome-to-DOM.png">
      

### Q&A

- **hierarchical:** Hierarchical means things are arranged like a tree, where:
  - One item is at the top (called the root).
  - Other items are under it, like branches and sub-branches.
  - Each item can have children and a parent.  


## DOM Traversing
DOM traversing means navigating the DOM tree from one node to another using relationships like parent, child, and sibling.

It allows you to:

-   Find elements relative to a selected element
-   Move between nodes (parents, children, siblings)
-   Manipulate structure dynamically (add/remove/update nodes)

### parentNode vs parentElement:

Both parentNode and parentElement are used to access the parent of a node in the DOM, But:

-   parentNode returns any type of parent node.
-   parentElement returns only if the parent is an Element node

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Traversing</title>
</head>

<body>

    <div id="container">
        <p id="child">Hello</p>
    </div>


    <script>
        const child = document.getElementById("child");

        console.log(child.parentNode); // <div id="container">...</div>
        console.log(child.parentElement); // <div id="container">...</div>

        console.log(document.body.parentNode); // <html>...</html>
        console.log(document.body.parentElement); // <html>...</html>

        console.log(document.documentElement.parentNode); // #document (http://127.0.0.1:5500/index.html)
        console.log(document.documentElement.parentElement); // null
    </script>

</body>

</html>
```

![image](images/DOM Traversing/parentNode-vs-parentElement.png)

### childNodes vs children:

-   childNodes: Returns all types of nodes.
-   children: returns only element nodes.
   
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Traversing</title>
</head>

<body>

    <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <!-- A comment -->
        <li>Item 3</li>
    </ul>


    <script>
        const list = document.getElementById("list");

        console.log(list.childNodes);
        // NodeList(9) [text, li, text, li, text, li, text, comment, text]

        console.log(list.children);
        // HTMLCollection(3) [li, li, li]

    </script>

</body>

</html>
```

![image](images/DOM Traversing/childNodes-vs-children.png)

### firstChild vs firstElementChild:

-   firstChild: Returns the first child node, which may be: (text, element etc)
-   firstElementChild: Returns only the first element child.
   
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Traversing</title>
</head>

<body>

    <div id="wrapper">
        <!-- whitespace -->
        <h2>Heading</h2>
    </div>


    <script>
        const wrapper = document.getElementById("wrapper");

        console.log(wrapper.firstChild);         // #text
        console.log(wrapper.firstElementChild);  // <h2>Heading</h2>

    </script>

</body> 

</html>
```

![image](images/DOM Traversing/firstChild-vs-firstElementChild:.png)

### lastChild vs lastElementChild:
Same as above but accesses the last child node instead.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Traversing</title>
</head>

<body>

    <div id="wrapper">
        <!-- whitespace -->
        <h2>Heading</h2>
        <!-- comment -->
    </div>


    <script>
        const wrapper = document.getElementById("wrapper");

        console.log(wrapper.lastChild); // #text
        console.log(wrapper.lastElementChild); // <h2>Heading</h2>

    </script>

</body>

</html>
```

![image](images/DOM Traversing/lastChild-vs-lastElementChild.png)

### nextSibling vs nextElementSibling:

-   nextSibling: Returns the next sibling node.
-   nextElementSibling: return only next sibling element node
  
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Traversing</title>
</head>

<body>

    <div>
        <p id="p1">One</p>
        <!-- comment -->
        <p id="p2">Two</p>
    </div>


    <script>
        const firstP = document.getElementById("p1");

        console.log(firstP.nextSibling);         // #text
        console.log(firstP.nextElementSibling);  // <p id="p2">Two</p>

    </script>

</body>

</html>
```

![image](images/DOM Traversing/nextSibling-vs-nextElementSibling:.png)

### previousSibling vs previousElementSibling:
Same as above, but but accesses the previous sibling instead of next.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Traversing</title>
</head>

<body>

    <div>
        <p id="p1">One</p>
        <!-- comment -->
        <p id="p2">Two</p>
    </div>


    <script>
        const secondP = document.getElementById("p2");

        console.log(secondP.previousSibling);         // #text
        console.log(secondP.previousElementSibling);  // <p id="p1">One</p>

    </script>

</body>

</html>
```

![image](images/DOM Traversing/previousSibling-vs-previousElementSibling.png)

## Elements Selecting Methods

### getElementById():
Selects a single element by its id attribute:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Elements selecting methods</title>
</head>

<body>
    <h1 id="title">Hello World</h1>

    <script>
        const element = document.getElementById("title");
        console.log(element); // Output: <h1 id="title">Hello World</h1>
        console.log(element.tagName); // Output: H1
        console.log(element.id); // Output: title
        console.log(element.className); // Output: (empty string, since no class is assigned)
        console.log(element.innerText) // output: Hello World
        console.log(element.innerHTML); // Output: Hello World
        console.log(element.textContent); // Output: Hello World
        console.log(element.outerHTML); // Output: <h1 id="title">Hello World
    </script>
</body>

</html>
```
### getElementsByClassName():
Selects all elements with the given class name:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Elements selecting methods</title>
</head>

<body>
    <p class="note">Note 1</p>
    <p class="note">Note 2</p>

    <script>
        const elements = document.getElementsByClassName("note");
        console.log(elements); // Output: HTMLCollection(2) [p.note, p.note]
        for (let el of elements) {
            console.log(el.innerHTML); // Output: Note 1, Note 2
        }
    </script>

</body>

</html>
```

### getElementsByTagName():
Selects all elements with the specified tag name:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Elements selecting methods</title>
</head>

<body>
    <ul>
        <li>Apple</li>
        <li>Banana</li>
    </ul>

    <script>
        const items = document.getElementsByTagName("li");
        console.log(items) // HTMLCollection(2) [li, li]
        for (let item of items) {
            console.log(item.innerHTML); // Output: Apple, Banana
        }
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
    <header>
        <h1>Welcome to my DOM</h1>
    </header>

    <main>
        <h1>My Awesome DOM de baba</h1>
        <ul>
            <li>Jalali set</li>
            <li>Shafayet</li>
            <li>Bonobash</li>
        </ul>
    </main>

    <script>
        console.log(document.getElementsByTagName('h1'));

        const heading = document.getElementsByTagName('h1');
        console.log(heading);

        const liCollection = document.getElementsByTagName('li');
        for (const li of liCollection) {
            console.log(li);
        }
        for (const li of liCollection) {
            console.log(li.innerText);
        }
        const allHeadings = document.getElementsByTagName("h1");
        for (const h1 of allHeadings) {
            console.log(h1.innerText);
        }
    </script>
</body>

</html>
```

![image](images/getElementBYTagNameOutput.png)

### getElementsByName():
Selects elements with a specific name attribute. Mostly used with input, code, textarea, or select :

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Elements selecting methods</title>
</head>

<body>
    <input type="text" name="username" value="Muhammad">
    <input type="text" name="username" value="Tamim">

    <script>
        const inputs = document.getElementsByName("username");
        console.log(inputs); // NodeList(2) [input, input]
        console.log(inputs[0]); // This will log the first input element 
        console.log(inputs[1]); // This will log the second input element
        for (let input of inputs) {
            console.log(input); // This will log each input element 
        }
        inputs.forEach(input => input.value = "Tamim");
    </script>

</body>

</html>
```

### querySelector():
Selects the first element that matches a CSS selector:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Elements selecting methods</title>
</head>

<body>
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>

    <div>
        <p>One</p>
        <p>Two</p>
    </div>

    <input type="text" name="userName" value="Tamim">
    <input type="text" name="age">

    <script>
        const firstCard = document.querySelector(".card");
        console.log(firstCard.textContent); // Output: Card 1

        const paragraph = document.querySelector("div > p");
        console.log(paragraph.innerHTML) // Output: One

        const input = document.querySelector("input[name='userName']");
        console.log(input.value); // Output: Tamim

        const input2 = document.querySelector("input[name='age']");
        input2.value = "25"; // Set value to 25
    </script>

</body>

</html>
```

### querySelectorAll():
Selects all elements that match a CSS selector:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Elements selecting methods</title>
</head>

<body>
    <p class="note">Note A</p>
    <p class="note">Note B</p>

    <div>
        <p>One</p>
        <p>Two</p>
    </div>

    <script>
        const notes = document.querySelectorAll(".note");
        notes.forEach(note => console.log(note.innerHTML)); // Output: Note A, Note B

        const paragraphs = document.querySelectorAll("div > p");
        console.log(paragraphs); // NodeList(2) [p, p]
        for (const paragraph of paragraphs) {
            console.log(paragraph.innerHTML); // Output: One, Two
        }
    </script>

</body>

</html>
```



### Examples:

**All methods at a time:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <header>
        <h1>Welcome to my DOM</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, natus! Dolorem voluptate provident rem
            eligendi eaque, odit fugiat sed tenetur corporis vel, laudantium veniam accusantium sunt adipisci blanditiis
            dolore vitae?</p>
    </header>
    <main id="main-container">
        <section>
            <h1>My Awesome DOM de baba</h1>
            <ul>
                <li>Jalali Set</li>
                <li>Shafayet</li>
                <li>bonobash</li>
                <li>DOM de re baba</li>
            </ul>
        </section>
        <section class="fruits-container">
            <h1 id="fruits-title" class="some-class random-class blue-bg">Fruits I like</h1>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Carrot</li>
            </ul>
        </section>
        <section id="places-container" class="large-text">
            <h1 id="places-title">Places I like to visit</h1>
            <ul id="places-list">
                <li class="important-places">Soondarban</li>
                <li class="important-places">bandorban</li>
                <li class="important-places">Kataban</li>
                <li class="other-place">shalbon</li>
            </ul>
        </section>
    </main>


    <script>
        const liCollection = document.getElementsByTagName('li');
        console.log(liCollection);
        for (const li of liCollection) {
            console.log(li.innerText);
        }

        // option -1: getElementByTagName
        const allHeadings = document.getElementsByTagName('h1');
        for (const h1 of allHeadings) {
            console.log(h1.innerText);
        }

        // option -2: getElementById
        const fruitsTitle = document.getElementById('fruits-title');
        fruitsTitle.innerText = "Fruits changed by JS";

        // option -3: getElementsByClassName
        const places = document.getElementsByClassName('important-places');
        for (const place of places) {
            console.log(place.innerText);
        }

        // option -4: querySelector
        const placesContainer = document.querySelector('#places-container');
        console.log(placesContainer);

        // option -5: querySelectorAll
        const someLi = document.querySelectorAll('.fruits-container li');
        console.log(someLi);
        for (const li of someLi) {
            console.log(li.innerText);
        }
    </script>
</body>

</html>
```
    
![image](images/allElementSelectiongMethods.png)

**change all the HTML elements in the page:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Object Model</title>
</head>

<body>
    <p id="demo">This is the original text.</p>
    <button id="changeTextBtn">Click Me</button>

    <script>
        document.getElementById("changeTextBtn").addEventListener("click", function () {
            document.getElementById("demo").innerText = "The text has been changed by js";
            // or
            /* document.getElementById("demo").innerContent = "The text has been changed by js";
             Note: we basically use innerText more than the innerContent 
            */
        });
    </script>
</body>

</html>
```

![image](images/elementChanges.png)

**change the HTML attributes in the page:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Object Model</title>
</head>

<body>
    <img id="myImage" src="myImage.jpg" width="200px">
    <button id="btn">Click Me</button>


    <script>
        document.getElementById("btn").addEventListener("click", function () {
            // update the attributes
            document.getElementById("myImage").src = "hasuApa.jpg";
            document.getElementById("myImage").width = "400";

            // set a new attribute and value
            document.getElementById("myImage").setAttribute("height", "400");
        })
    </script>
</body>

</html>
```

![image](images/changeAttributeOutput.png)

**remove existing HTML elements:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Object Model</title>
</head>

<body>
    <div id="myDiv" style="width: 200px; height: 100px; background-color: lightblue;">
        <p>Click the button to change my color!</p>
    </div>

    <button id="btn">Click</button>

    <script>
        document.getElementById("btn").addEventListener("click", function () {
            document.getElementById("myDiv").remove();
        });
    </script>
</body>

</html>
```
![image](images/elements-selecting-methods/remove-attribute-1.png)
![image](images/elements-selecting-methods/remove-attribute-2.png)

**add new HTML elements and attributes:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Object Model</title>
</head>

<body>
    <div id="divContainer1">

    </div>

    <button id="btn1">Click</button>

    <div id="divContainer2">

    </div>

    <button id="btn2">Click</button>


    <script>
        document.getElementById("btn1").addEventListener("click", function () {
            const newParagraph = document.createElement("p");
            newParagraph.innerText = "this is a new paragraph created by JS";
            document.getElementById("divContainer1").appendChild(newParagraph);

        });
        // alternatively you can use temple literal (backticks ``)
        document.getElementById("btn2").addEventListener("click", function () {
            document.getElementById("divContainer2").innerHTML += `
        <p>This a new paragraph created by backticks</p>
        `;
        });
    </script>
</body>

</html>
```

![image](images/createNewElement.png)



**change all the CSS styles in the page:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Object Model</title>
</head>

<body>
    <div id="myDiv" style="width: 200px; height: 100px; background-color: lightblue;">
        <p>Click the button to change my color!</p>
    </div>

    <button id="btn">Click</button>

    <script>
        document.getElementById("btn").addEventListener("click", function () {
            document.getElementById("myDiv").style.backgroundColor = "yellow";
        });
    </script>
</body>

</html>
```

![image](images/changeCSS.png)

**add, remove, or toggle a CSS class on a DOM element:**

```html 
<!DOCTYPE html>
<html>

<head>
    <title>classList Example</title>
    <style>
        .active {
            color: green;
            font-weight: bold;
        }

        .hidden {
            display: none;
        }

        .highlight {
            background-color: yellow;
        }
    </style>
</head>

<body>
    <h1 id="title">Hello World</h1>
    <h1 class="hidden">This is hidden</h1>

    <button id="addBtn">Add Class</button>
    <button id="removeBtn">Remove Class</button>
    <button id="toggleBtn">Toggle Class</button>

    <script>
        const heading = document.getElementById("title");
        const hiddenHeading = document.querySelector("h1.hidden");

        // Add class
        document.getElementById("addBtn").addEventListener("click", () => {
            heading.classList.add("active"); // adds green + bold
        });

        // Remove class
        document.getElementById("removeBtn").addEventListener("click", () => {
            hiddenHeading.classList.remove("hidden"); // ensures it's visible
        });

        // Toggle class
        document.getElementById("toggleBtn").addEventListener("click", () => {
            heading.classList.toggle("highlight"); // yellow bg on/off
        });
    </script>
</body>

</html>
```

![image](images/add-remove-toggle.png)

## Content Manipulation

### innerHTML vs outerHTML vs textContent vs innerText:

| Property      | Returns...                                 | Includes Tags | Includes Hidden Text  | Editable |
| ------------- | ------------------------------------------ | ------------- | --------------------- | -------- |
| `innerHTML`   | HTML content **inside** the element        | ✅ Yes         | ✅ Yes                 | ✅ Yes    |
| `outerHTML`   | Full HTML **including the element itself** | ✅ Yes         | ✅ Yes                 | ✅ Yes    |
| `textContent` | All text (even hidden) without HTML        | ❌ No          | ✅ Yes                 | ✅ Yes    |
| `innerText`   | Only **visible** text (like in UI)         | ❌ No          | ❌ No (ignores hidden) | ✅ Yes    |


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Traversing</title>
</head>

<body>

    <div id="demo">
        Hello <span style="display:none">Hidden</span> World
    </div>

    <script>
        const el = document.getElementById("demo");

        console.log(el.innerHTML);   // "Hello <span style="display:none">Hidden</span> World"
        console.log(el.outerHTML); // "<div id="demo">Hello <span style="display:none">Hidden</span> World</div>"
        console.log(el.textContent); // "Hello Hidden World"
        console.log(el.innerText);   // "Hello World"
    </script>

</body>

</html>
```

## Element Attributes and Element Properties

### Element Attributes:

#### getAttribute(), setAttribute(), removeAttribute() and hasAttribute():

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Traversing</title>
</head>

<body>

    <a id="link" href="https://example.com">Visit</a>

    <input type="checkbox" checked>

    <script>
        const a = document.getElementById("link");

        console.log(a.getAttribute("href"));  // "https://example.com"
        a.setAttribute("target", "_blank");
        console.log(a.getAttribute("target")); // "_blank"

        a.removeAttribute("target");
        console.log(a.hasAttribute("target")); // false
        console.log(a.hasAttribute("href"));  // true


        const chk = document.querySelector("input");

        console.log(chk.hasAttribute("checked")); // true
        chk.removeAttribute("checked");

    </script>

</body>

</html>
```

#### attributes property:
Returns a NamedNodeMap of all attributes on the element.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Traversing</title>
</head>

<body>

    <a id="link" href="https://example.com">Visit</a>


    <script>
        const a = document.getElementById("link");

        console.log(a.attributes); // NamedNodeMap {0: id, 1: href, id: id, href: href, length: 2}

        for (let attr of a.attributes) {
            console.log(attr.name + " = " + attr.value);
        }

        /*
        id = link
        href = https://example.com
        */
    </script>

</body>

</html>
```




### Element properties:

#### id, className, classList:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    <title>Element Properties</title>
</head>

<body>

    <div id="box" class="text-red-500 bg-green-600 border-10 border-blue-500 p-6">Hello Worlds</div>

    <script>
        const box = document.getElementById("box");

        console.log(box.id); // box
        console.log(box.className); // text-red-500 bg-green-600 border-10 border-blue-500 p-6
        console.log(box.classList); 
        // DOMTokenList(5) ['text-red-500', 'bg-green-600', 'border-10', 'border-blue-500', 'p-6' value: 'text-red-500 bg-green-600 border-10 border-blue-500 p-6']

        // classList methods
        box.classList.add("text-6xl");
        box.classList.remove("text-red-500");
        console.log(box.classList.contains("text-6xl")); // true
        console.log(box.classList.contains("text-red-500")); // false
    </script>

</body>

</html>
```

### tagName vs nodeName:</h3>
Both give the tag name of an element, but nodeName works for any node, tagName only for elements node

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    <title>Element Properties</title>
</head>

<body>
    <div id="myDiv">
        Hello, <span>World!</span>
    </div>

    <script>
        const divElement = document.getElementById("myDiv");

        // tagName and nodeName of the element
        console.log(divElement.tagName);     // DIV
        console.log(divElement.nodeName);   // DIV

        // Let's look at a text node
        const textNode = divElement.firstChild;

        console.log(textNode.nodeName);       // #text
        console.log(textNode.tagName); // This will be undefined

        // Let's check the <span> tag inside the div
        const spanElement = divElement.querySelector("span");
        console.log(spanElement.tagName);   // SPAN
        console.log(spanElement.nodeName); // SPAN
    </script>
</body>

</html>
```

### nodeType and nodeValue:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    <title>Element Properties</title>
</head>

<body>
    <div id="box" class="text-red-500 bg-green-600 border-10 border-blue-500 p-6"></div>

    <script>
        console.log(box.nodeType);   // 1 (Element note)

        const textNode = document.createTextNode("Hello");
        console.log(textNode.nodeType);   // 3 (text node)
        console.log(textNode.nodeValue); // "Hello"
    </script>
</body>

</html>
```

```
1 → Element Node (<tag>)

3 → Text Node ("Text inside tag")

8 → Comment Node (<!-- comment -->)

9 → Document Node (document)
```

#### Form Element Properties:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    <title>Element Properties</title>
</head>

<body>
    <input id="nameInput" value="Tamim">
    <input type="checkbox" id="subscribe" checked>
    <select id="options">
        <option selected>One</option>
        <option>Two</option>
    </select>

    <script>
        const input = document.getElementById("nameInput");
        console.log(input.value); // "Tamim"

        const checkbox = document.getElementById("subscribe");
        console.log(checkbox.checked); // true

        const select = document.getElementById("options");
        console.log(select.value); // "One"
    </script>
</body>

</html>
```

## CSS and Class Styling
### CSS Styling:

### Style Property:
style property is used to get or set inline styles of an HTML element using JavaScript.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    <title>Element Properties</title>
</head>

<body>
    <div id="box" style="color: red;">Hello</div>

    <script>
        const box = document.getElementById("box");

        console.log(box.style.color); // "red"
        box.style.backgroundColor = "yellow";
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
    <header>
        <h1>Welcome to my DOM</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, natus! Dolorem voluptate provident rem
            eligendi eaque, odit fugiat sed tenetur corporis vel, laudantium veniam accusantium sunt adipisci blanditiis
            dolore vitae?</p>
    </header>
    <main id="main-container">
        <section>
            <h1>My Awesome DOM de baba</h1>
            <ul>
                <li>Jalali Set</li>
                <li>Shafayet</li>
                <li>bonobash</li>
                <li>DOM de re baba</li>
            </ul>
        </section>
        <section class="fruits-container">
            <h1 id="fruits-title" class="some-class random-class blue-bg">Fruits I like</h1>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Carrot</li>
            </ul>
        </section>
        <section id="places-container" class="large-text">
            <h1 id="places-title">Places I like to visit</h1>
            <ul id="places-list">
                <li class="important-places">Soondarban</li>
                <li class="important-places">bandorban</li>
                <li class="important-places">Kataban</li>
                <li class="other-place">shalbon</li>
            </ul>
        </section>
    </main>


    <script>
        const sections = document.querySelectorAll("section")
        /*
        if we need classes just write it document.querySelectorAll(.className)
        if we need ids just write it document.querySelectorAll(#idName)
        */
        console.log(sections);
        for (const section of sections) {
            console.log(section);
        }
        for (const section of sections) {
            section.style.border = "2px solid red";
            section.style.borderRadius = '8px';
            section.style.padding = "20px";
            section.style.margin = "10px";
            section.style.backgroundColor = "skyBlue";
        }
        const placesContainer = document.getElementById("places-container");
        placesContainer.style.backgroundColor = "yellow";

        // add and remove css class
        placesContainer.classList.add("text-center");
        placesContainer.classList.remove("large-text");

    </script>
</body>

</html>
```

![image](images/cssStyling.png")

Note: JS follow camelCase css names:

| CSS Name           | JavaScript Style Name |
| ------------------ | --------------------- |
| `background-color` | `backgroundColor`     |
| `font-size`        | `fontSize`            |
| `z-index`          | `zIndex`              |
| `border-radius`    | `borderRadius`        |


### cssText property:
-   Lets you set multiple styles at once as a string.
-   Overwrites all existing inline styles.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    <title>Element Properties</title>
</head>

<body>
    <div id="box" style="color: red;">Hello</div>

    <script>
        const box = document.getElementById("box");

        box.style.cssText = "color: white; background: black; padding: 10px;";
    </script>
</body>

</html>
```


### Class Styling:

#### className Property:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    <title>Element Properties</title>
</head>

<body>
    <div id="card" class="text-6xl bg-red-500">Hello</div>


    <script>
        const card = document.getElementById("card");

        // Accessing and modifying class
        console.log(card.className);      // "text-6xl bg-red-500"
        card.className = "text-2xl bg-green-500";     // Replaces all classes
    </script>
</body>

</html>
```

#### classList methods:
classList gives you a powerful interface to manage individual classes.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    <title>Element Properties</title>
</head>

<body>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

        <title>Element Properties</title>
    </head>

    <body>
        <div id="card" class="text-6xl bg-red-500">Hello</div>


        <script>
            const card = document.getElementById("card");

            // Add class
            card.classList.add("text-white");

            // Remove class
            card.classList.remove("text-6xl");

            // Check if a class exists
            console.log(card.classList.contains("text-white")); // true

            // replace class
            card.classList.replace("bg-red-500", "bg-blue-500");
        </script>
    </body>

    </html>
</body>

</html>
```

## Creating, Adding and Removing Element Methods

### Creating Elements:

#### createElement():

-   Creates a new element node.
-   Does not automatically add it to the DOM — you must insert it manually.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Properties</title>

    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>

    <script>
        const div = document.createElement("div");
        div.innerText = "Hello World";
        // div.textContent = "Hello WOrld"
        div.className = "bg-blue-500 text-white p-4 rounded-lg shadow-lg";
        document.body.appendChild(div); // Adds to the page
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
    <header>
        <h1>Welcome to my DOM</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, natus! Dolorem voluptate provident rem
            eligendi eaque, odit fugiat sed tenetur corporis vel, laudantium veniam accusantium sunt adipisci blanditiis
            dolore vitae?</p>
    </header>
    <main id="main-container">
        <section>
            <h1>My Awesome DOM de baba</h1>
            <ul>
                <li>Jalali Set</li>
                <li>Shafayet</li>
                <li>bonobash</li>
                <li>DOM de re baba</li>
            </ul>
        </section>
        <section class="fruits-container">
            <h1 id="fruits-title" class="some-class random-class blue-bg">Fruits I like</h1>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Carrot</li>
            </ul>
        </section>
        <section id="places-container" class="large-text">
            <h1 id="places-title">Places I like to visit</h1>
            <ul id="places-list">
                <li class="important-places">Soondarban</li>
                <li class="important-places">bandorban</li>
                <li class="important-places">Kataban</li>
                <li class="other-place">shalbon</li>
            </ul>
        </section>
    </main>


    <script>
        // where to add
        const placesList = document.getElementById("places-list");
        // what to add
        const li = document.createElement("li");
        li.innerText = "pahertoli";
        // add the child
        placesList.appendChild(li);
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
    <header>
        <h1>Welcome to my DOM</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, natus! Dolorem voluptate provident rem
            eligendi eaque, odit fugiat sed tenetur corporis vel, laudantium veniam accusantium sunt adipisci blanditiis
            dolore vitae?</p>
    </header>
    <main id="main-container">
        <section>
            <h1>My Awesome DOM de baba</h1>
            <ul>
                <li>Jalali Set</li>
                <li>Shafayet</li>
                <li>bonobash</li>
                <li>DOM de re baba</li>
            </ul>
        </section>
        <section class="fruits-container">
            <h1 id="fruits-title" class="some-class random-class blue-bg">Fruits I like</h1>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Carrot</li>
            </ul>
        </section>
        <section id="places-container" class="large-text">
            <h1 id="places-title">Places I like to visit</h1>
            <ul id="places-list">
                <li class="important-places">Soondarban</li>
                <li class="important-places">bandorban</li>
                <li class="important-places">Kataban</li>
                <li class="other-place">shalbon</li>
            </ul>
        </section>
    </main>



    <script>
        const mainContainer = document.getElementById("main-container");

        const section = document.createElement("section");
        const h1 = document.createElement("h1");
        h1.innerText = "Favorite Food list";
        section.appendChild(h1);

        const ul = document.createElement("ul");
        section.appendChild(ul);

        const li1 = document.createElement("li");
        li1.innerText = "biriyani";
        ul.appendChild(li1);

        const li2 = document.createElement("li");
        li2.innerText = "kaschi";
        ul.appendChild(li2);

        const li3 = document.createElement("li");
        li3.innerText = "morogPolaw";
        ul.appendChild(li3);

        mainContainer.appendChild(section);
        console.log(document.getElementsByTagName("section.innerHTML"));

        // Set Inner HTML Directly
        const sectionDress = document.createElement("section");
        sectionDress.innerHTML = `
        <h1>My Dress Section </h2>
            <ul>
                <li>T-shirt</li>    
                <li>longi</li>    
                <li>sendel genji</li>    
            </ul>
        `
        mainContainer.appendChild(sectionDress)
    </script>
</body>

</html>
```

#### createTextNode():
- Creates a text node (just text, no HTML).

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Properties</title>

    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>

    <script>
        const p = document.createElement("p");
        const text = document.createTextNode("This is a text node");
        p.appendChild(text);
        document.body.appendChild(p);
    </script>
</body>

</html>
```

#### createDocumentFragment():
- A lightweight container for temporary DOM storage.
- Useful for inserting many nodes at once.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Properties</title>
</head>

<body>
    <ul id="myList"></ul>

    <script>
        const fragment = document.createDocumentFragment();

        for (let i = 1; i <= 3; i++) {
            let li = document.createElement("li");
            li.innerText = `Item ${i}`;
            fragment.appendChild(li);
        }

        document.getElementById("myList").appendChild(fragment);

    </script>
</body>

</html>
```

#### cloneNode():
-   Creates a copy of an element.
-   cloneNode(true) → deep clone (includes children).
-   cloneNode(false) → shallow clone (element only).

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Properties</title>

    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>
    <div id="original">
        <h2>Hello</h2>
        <p>This is a paragraph.</p>
    </div>

    <script>
        const original = document.getElementById("original");

        // Shallow Clone (no children)
        const shallowClone = original.cloneNode(false);
        document.body.appendChild(shallowClone); // nothing show in the page
        console.log("Shallow Clone:", shallowClone.outerHTML);
        /*
        Shallow Clone: <div id="original"></div>
        */

        // Deep Clone (includes children)
        const deepClone = original.cloneNode(true);
        document.body.appendChild(deepClone);
        console.log("Deep Clone:", deepClone.outerHTML);
        /*
        Deep Clone: <div id="original">
            <h2>Hello</h2>
            <p>This is a paragraph.</p>
        </div>
        */
    </script>
</body>

</html>
```


### Adding Elements:

#### appendChild():
- Adds a node as the last child of a parent.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Properties</title>
</head>

<body>
    <ul>
        <li>Hello</li>
    </ul>

    <script>
        const li = document.createElement("li");
        li.innerText = "Hi";
        document.querySelector("ul").appendChild(li);
    </script>
</body>

</html>
```

#### insertBefore():
- Inserts a node before a reference node.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Properties</title>
</head>

<body>
    <ul>
        <li>Hello</li>
    </ul>

    <script>
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        li.innerText = "Hi";
        ul.insertBefore(li, ul.firstChild);
    </script>
</body>

</html>
```

#### insertAdjacentElement():
-   Inserts an element relative to another element.
-   Position Options:
    -   "beforebegin" → before element itself
    -   "afterbegin" → inside element, before first child
    -   "beforeend" → inside element, after last child
    -   "afterend" → after element itself

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Properties</title>

    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>
    <div id="target">
        <p>Target Element</p>
    </div>

    <script>
        const target = document.getElementById("target");

        // beforebegin
        const beforeBeginEl = document.createElement("div");
        beforeBeginEl.textContent = '1. beforebegin';
        target.insertAdjacentElement("beforebegin", beforeBeginEl);

        // afterbegin
        const afterBeginEl = document.createElement("div");
        afterBeginEl.textContent = '2. afterbegin';
        target.insertAdjacentElement("afterbegin", afterBeginEl);

        // beforeend
        const beforeEndEl = document.createElement("div");
        beforeEndEl.textContent = '3. beforeend';
        target.insertAdjacentElement("beforeend", beforeEndEl);

        // afterend
        const afterEndEl = document.createElement("div");
        afterEndEl.textContent = '4. afterend';
        target.insertAdjacentElement("afterend", afterEndEl);
    </script>
</body>

</html>
```

#### insertAdjacentHTML():
-   Same as insertAdjacentElement(), but here you can inset HTML directly at a position:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Properties</title>

    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>
    <div id="target">
        <p>Target Element</p>
    </div>

    <script>
        const target = document.getElementById("target");

        // beforebegin
        target.insertAdjacentHTML("beforebegin", "<div>1. beforebegin</div>");

        // afterbegin
        target.insertAdjacentHTML("afterbegin", "<div>2. afterbegin</div>");

        // beforeend
        target.insertAdjacentHTML("beforeend", "<div>3. beforeend</div>");

        // afterend
        target.insertAdjacentHTML("afterend", "<div>4. afterend</div>");
    </script>
</body>

</html>
```

#### insertAdjacentText():
-   Same as insertAdjacentElement() and insertAdjacentHTML(), but here you just inset plain text at a position:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Properties</title>

    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>
    <div id="target">
        <p>Target Element</p>
    </div>

    <script>
        const target = document.getElementById("target");

        // beforebegin
        target.insertAdjacentText("beforebegin", "1. beforebegin");

        // afterbegin
        target.insertAdjacentText("afterbegin", "2. afterbegin");

        // beforeend
        target.insertAdjacentText("beforeend", "3. beforeend");

        // afterend
        target.insertAdjacentText("afterend", "4. afterend");
    </script>
</body>

</html>
```
![image](images/image11-insertAdjancentText().png)

#### before(), parpend(), append(), after():
Can insert nodes or strings directly.

-   before() → before element itself
-   prepend() → inside element, before first child
-   append() → inside element, after last child
-   after() → after element itself

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Properties</title>
</head>

<body>
    <ul id="ul">
        <li>Item</li>
    </ul>
    <br><br>
    <br><br>
    <ol id="ol">
        <li>Item</li>
    </ol>

    <script>
        const UlList = document.querySelector("ul");

        // create string directly
        UlList.before("Before Item");
        UlList.prepend("First Item ");
        UlList.append("Last Item");
        UlList.after("After Item");


        const olList = document.querySelector("ol");

        // Create elements directly
        const beforeItem = document.createElement("li");
        beforeItem.textContent = "Before Item";
        olList.before(beforeItem);

        const firstItem = document.createElement("li");
        firstItem.textContent = "First Item";
        olList.prepend(firstItem);

        const lastItem = document.createElement("li");
        lastItem.textContent = "Last Item";
        olList.append(lastItem);

        const afterItem = document.createElement("li");
        afterItem.textContent = "After Item";
        olList.after(afterItem);


    </script>
</body>

</html>
```
![image](images/before()-after().png)




### Removing Elements:

#### removeChild():
-   Removes a child node from its parent.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Properties</title>

    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>
    <ul>
        <li>Hello</li>
        <li>World</li>
    </ul>

    <script>
        const list = document.querySelector("ul");
        const lastItem = list.lastElementChild;
        list.removeChild(lastItem);
    </script>
</body>

</html>
```

#### remove():   
- Removes the element directly.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Properties</title>

    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>
    <ul>
        <li>Hello</li>
        <li>World</li>
    </ul>

    <script>
        document.querySelector("ul").remove();
    </script>
</body>

</html>
```

#### replaceChild():
-  Replaces one child with another.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Properties</title>

    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>
    <ul>
        <li>Hello</li>
        <li>World</li>
    </ul>

    <script>
        const list = document.querySelector("ul");
        const oldItem = list.lastElementChild;
        const newItem = document.createElement("li");
        newItem.textContent = "New Item";
        list.replaceChild(newItem, oldItem);
    </script>
</body>

</html>
```
#### replaceWith():
- Replaces an element directly.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element Properties</title>

    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>

<body>
    <p>Hello World</p>

    <script>
        const p = document.querySelector("p");
        const h = document.createElement("h1");
        h.innerText = "Hello World 2";

        p.replaceWith(h);
    </script>
</body>

</html>
```

## Events

### Event Basic:

#### What is events:
Events are signals that something has happened — like a button click, key press, page load, etc. You can "listen" for these events and run code in response.

#### Event Object:
Every event has an associated event object that contains information about the event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>

<body>
    <button id="myBtn">Click Me</button>

    <script>
        document.getElementById('myBtn').addEventListener('click', function (event) {
            console.log(event); // Event object - PointerEvent {isTrusted: true, …}
            console.log(event.type); // click
            console.log(event.target); // Button element - <button id="myBtn">Click Me</button>
        });
    </script>
</body>

</html>
```

#### preventDefault():
Stops the browser’s default behavior.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>

<body>
    <a href="https://example.com" id="link">Click Me</a>

    <script>
        document.getElementById("link").addEventListener("click", (event) => {
            event.preventDefault(); // Prevents redirect
            alert("Default action prevented!");
        });
    </script>

</body>

</html>
```




### Adding Events:

#### addEventListener():

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>

<body>
    <button id="btns">Click Me</button>

    <script>
        document.getElementById("btns").addEventListener("click", function () {
            alert("Button clicked");
        });
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

<h1 id="heading-text">Event Handler</h1>
<button id="btn-update-heading">Update Heading</button> <br><br>

<h1 id="heading-text2">Event Handler</h1>
<button id="btn-update-heading2">Update Heading</button> <br><br>

<p id="no-name">No Name</p>
<input type="text" id="input-field">
<button id="btn">Update</button>

<script>
    document.getElementById("btn-update-heading").addEventListener("click", function () {
        const h1 = document.getElementsByTagName("h1");
        h1[0].innerText = "I am change by the event handler";
    })

    document.getElementById("btn-update-heading2").addEventListener("click", function () {
        const originalHeading = document.getElementById("heading-text2");
        originalHeading.innerText = "I am changed by the event handler";
    })

    document.getElementById("btn").addEventListener("click", () => {
        const getInputFieldValue = document.getElementById("input-field").value;
        const setName = document.getElementById("no-name");
        setName.innerText = getInputFieldValue;
    })
</script>
</body>

</html>
```

#### removeEventListener():
To remove the event listener, you need to use the same function reference for both addEventListener() and removeEventListener().

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>

<body>
    <button id="btns">Click Me</button>

    <script>
        /*
        document.getElementById("btns").addEventListener("click", function () {
            alert("Button clicked");
        });
        document.getElementById("btns").removeEventListener("click", function () {
            alert("Button clicked");
        });
        */
        // The above removeEventListener will not work because the function reference is different.
        // To remove the event listener, you need to use the same function reference for both cases.
        const alertFunction = () => {
            alert("Button clicked");
        };
        document.getElementById("btns").addEventListener("click", alertFunction);
        document.getElementById("btns").removeEventListener("click", alertFunction);
    </script>
</body>

</html>
```

#### onClick vs addEventListener():

With onclick perperty you can't add multiple event handler function. If you assign more than one evet handler to onclick, it overwrites the previous one.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>

<body>
    <button id="btn" onclick="alert('Inline clicked')">Click Me</button>

    <script>
        const btn = document.getElementById("btn");

        btn.onclick = function () {
            console.log("First handler");
        };

        btn.onclick = function () {
            console.log("Second handler"); // Only this one runs
        };
    </script>

</body>

</html>
```

But, with addEventListener() methods you can add multiple event handler function.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>

<body>
    <button id="btn">Click Me</button>

    <script>
        const btn = document.getElementById("btn");

        btn.addEventListener("click", function () {
            console.log("First handler");
        });

        btn.addEventListener("click", function () {
            console.log("Second handler");
        });
    </script>
</body>

</html>
```

Add a events on a button with onClick event handler and addEventListener() method:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- Option 1 -->
    <button onclick="console.log(3)">Click Me</button>
    <button onclick="console.log(7)">Click Me</button>
    <button onclick="console.log('I am Clicked')">Click Me</button>

    <!-- option 2 -->
    <button onclick="makeYellow()">Make Yellow</button>
    <button onclick="makeRed()">Make Red</button>

    <!-- option 3 -->
    <button id="btn-make-blue">Make Blue</button>
    <button id="btn-make-purple">Make Purple</button>

    <!-- option 4 -->
    <button id="btn-make-green">Make Green</button>
    <button id="btn-make-pink">Make Pink</button>

    <script>
        // option 2
        function makeYellow() {
            document.body.style.backgroundColor = "yellow";
        }
        function makeRed() {
            document.body.style.backgroundColor = "red";
        }

        // option 3
        const btnMakeBlue = document.getElementById("btn-make-blue");
        btnMakeBlue.onclick = function () {
            document.body.style.backgroundColor = "blue";
        }

        const btnMakePurple = document.getElementById("btn-make-purple");
        btnMakePurple.onclick = function () {
            document.body.style.backgroundColor = "purple";
        }

        // option 4 (best practice)
        document.getElementById("btn-make-green").addEventListener("click", function () {
            document.body.style.backgroundColor = "green";
        });

        document.getElementById("btn-make-pink").addEventListener("click", () => {
            document.body.style.backgroundColor = "pink";
        });
    </script>
</body>

</html>
```

### Common Events:

-   **Mouse Events**
    -   `click` – Single click on an element
    -   `dblclick` – Double click
    -   `mousedown` – Mouse button pressed
    -   `mouseup` – Mouse button released
    -   `mousemove` – Mouse moves over an element
    -   `mouseenter` – Mouse enters an element (no bubbling)
    -   `mouseleave` – Mouse leaves an element (no bubbling)
    -   `mouseover` – Mouse moves onto an element
    -   `mouseout` – Mouse moves off an element
    -   `contextmenu` – Right-click opens context menu
-   **Keyboard Events**
    -   `keydown` – Key is pressed
    -   `keypress` – Key is pressed (deprecated)
    -   `keyup` – Key is released
-   **Form Events**
    -   `submit` – Form is submitted
    -   `reset` – Form is reset
    -   `change` – Form element value changes
    -   `input` – User input changes (real-time)
    -   `focus` – Element gains focus
    -   `blur` – Element loses focus
    -   `focusin` – Focus enters a descendant (bubbles)
    -   `focusout` – Focus leaves a descendant (bubbles)
-   **Clipboard Events**
    -   `copy` – User copies content
    -   `cut` – User cuts content
    -   `paste` – User pastes content
-   **Drag and Drop Events**
    -   `drag` – Element is being dragged
    -   `dragstart` – Dragging starts
    -   `dragend` – Dragging ends
    -   `dragenter` – Dragged item enters drop target
    -   `dragleave` – Dragged item leaves drop target
    -   `dragover` – Dragged item is over drop target
    -   `drop` – Dragged item is dropped
-   **Touch Events (Mobile)**
    -   `touchstart` – Finger touches screen
    -   `touchend` – Finger is lifted off screen
    -   `touchmove` – Finger moves on screen
    -   `touchcancel` – Touch is canceled
-   **Pointer Events**
    -   `pointerdown` – Pointer is pressed
    -   `pointerup` – Pointer is released
    -   `pointermove` – Pointer moves
    -   `pointerover` – Pointer enters element
    -   `pointerout` – Pointer leaves element
    -   `pointerenter` – Pointer enters (no bubbling)
    -   `pointerleave` – Pointer leaves (no bubbling)
    -   `pointercancel` – Pointer action canceled
-   **Focus Events**
    -   `focus` – Element gets focus
    -   `blur` – Element loses focus
    -   `focusin` – Focus enters child (bubbles)
    -   `focusout` – Focus leaves child (bubbles)
-   **Window Events**
    -   `load` – Page or resource loaded
    -   `unload` – Page is unloading (deprecated)
    -   `beforeunload` – User tries to leave page
    -   `resize` – Window is resized
    -   `scroll` – User scrolls page or element
    -   `error` – Error loading resource
    -   `hashchange` – URL hash (#) changes
    -   `popstate` – History changes (back/forward)
-   **Media Events**
    -   `play` – Media playback starts
    -   `pause` – Media is paused
    -   `ended` – Media has finished playing
    -   `volumechange` – Volume is changed
    -   `timeupdate` – Current playback time updates
    -   `durationchange` – Media duration changes
    -   `loadeddata` – Media data loaded
    -   `loadedmetadata` – Media metadata loaded
    -   `seeking` – Seeking begins
    -   `seeked` – Seeking ends
    -   `stalled` – Media data stalled
    -   `suspend` – Loading is suspended
    -   `waiting` – Waiting for data
-   **Animation Events**
    -   `animationstart` – CSS animation starts
    -   `animationend` – CSS animation ends
    -   `animationiteration` – Animation repeats
-   **Transition Events**
    -   `transitionstart` – CSS transition starts
    -   `transitionend` – CSS transition ends
    -   `transitionrun` – Transition is running
    -   `transitioncancel` – Transition canceled
-   **Wheel Events**
    -   `wheel` – Mouse wheel is used
-   **Composition Events**
    -   `compositionstart` – Text input starts (IME)
    -   `compositionupdate` – Text input updates
    -   `compositionend` – Text input ends
-   **Other Events**
    -   `DOMContentLoaded` – HTML loaded and parsed
    -   `visibilitychange` – Tab becomes hidden or visible
    -   `online` – Browser goes online
    -   `offline` – Browser goes offline
    -   `message` – Message received (e.g., from iframe)
    -   `storage` – Local/session storage changed
    -   `animationcancel` – Animation is canceled
    -   `toggle` – \`details\` element is toggled


### Event Flow:
Event Flow describes how events travel through the DOM tree. When you click, type, or interact with a webpage, the event doesn’t go straight to the target element. It flows through three phases:

1.  Capturing: Event starts from the root and goes down.
2.  Target: The actual element that triggered the event.
3.  Bubbling: Event goes back up to the root.

```html
<!DOCTYPE html>
<html>

<body>
    <div id="outer">
        <div id="inner">
            <button id="button">Click me</button>
        </div>
    </div>
    <script>
        document.getElementById("outer").addEventListener("click", () => {
            console.log("Outer Div")
        })
        document.getElementById("inner").addEventListener("click", () => {
            console.log("Inner Div")
        })
        document.getElementById("button").addEventListener("click", () => {
            console.log("Button")
        })
    </script>
</body>

</html>
```
![image](images/eventFlowOutput.png)

When You click the button, the event flow would be:

1.  Capturing: document → outer div → inner div → button
2.  Target: button (the actual target)
3.  Bubbling: button → inner div → outer div → document

#### UseCapture paramenter:
In the event flow phase, the useCapture parameter controls when the event handler runs:
- If useCapture is set to true, the event listener executes during the capturing phase 
- If useCapture is set to false (default), the listener runs during the bubbling phase 

```html
<!DOCTYPE html>
<html>

<body>
    <div id="outer">
        <div id="inner">
            <button id="button">Click me</button>
        </div>
    </div>
    <script>
        document.getElementById("outer").addEventListener("click", () => {
            console.log("Outer Div")
        }, true)
        document.getElementById("inner").addEventListener("click", () => {
            console.log("Inner Div")
        })
        document.getElementById("button").addEventListener("click", () => {
            console.log("Button")
        })
        /*
        Outer Div
        Button
        Inner Div
        */
    </script>
</body>

</html>
```
```html
<!DOCTYPE html>
<html>

<body>
    <div id="outer">
        <div id="inner">
            <button id="button">Click me</button>
        </div>
    </div>
    <script>
        document.getElementById("outer").addEventListener("click", () => {
            console.log("Outer Div")
        })
        document.getElementById("inner").addEventListener("click", () => {
            console.log("Inner Div")
        }, true)
        document.getElementById("button").addEventListener("click", () => {
            console.log("Button")
        })
        /*
        Inner Div
        Button
        Outer Div
        */
    </script>
</body>

</html>
```

#### stopPropagation():
event.stopPropagation() method used to stop the event from bubbling up.

```html
<!DOCTYPE html>
<html>

<body>
    <div id="outer">
        <div id="inner">
            <button id="button">Click me</button>
        </div>
    </div>
    <script>
        document.getElementById("outer").addEventListener("click", () => {
            console.log("Outer Div")
        });

        document.getElementById("inner").addEventListener("click", () => {
            console.log("Inner Div")
        });

        document.getElementById("button").addEventListener("click", (event) => {
            console.log("Button");
            event.stopPropagation(); // Stop the event here
        });

        // output: Button
    </script>
</body>

</html>

```

#### stopImmediatePropagation():
Does everything stopPropagation() does, plus It also stops other listeners on the same element from executing.

with stopPropagation()

```html
<!DOCTYPE html>
<html>

<body>
    <div id="outer">
        <div id="inner">
            <button id="button">Click me</button>
        </div>
    </div>

    <script>
        document.getElementById("outer").addEventListener("click", () => {
            console.log("Outer Div");
        });

        document.getElementById("inner").addEventListener("click", () => {
            console.log("Inner Div");
        });

        // Two handlers on the same button
        document.getElementById("button").addEventListener("click", (event) => {
            console.log("Button Handler 1");
            event.stopPropagation();
        });

        document.getElementById("button").addEventListener("click", () => {
            console.log("Button Handler 2");
        });

        /*
        Button Handler 1
        Button Handler 2
        */
    </script>
</body>

</html>
```

With stopImmediatePropagation():

```html
<!DOCTYPE html>
<html>

<body>
    <div id="outer">
        <div id="inner">
            <button id="button">Click me</button>
        </div>
    </div>

    <script>
        document.getElementById("outer").addEventListener("click", () => {
            console.log("Outer Div");
        });

        document.getElementById("inner").addEventListener("click", () => {
            console.log("Inner Div");
        });

        // Two handlers on the same button
        document.getElementById("button").addEventListener("click", (event) => {
            console.log("Button Handler 1");
            event.stopImmediatePropagation();
        });

        document.getElementById("button").addEventListener("click", () => {
            console.log("Button Handler 2");
        });

        /*
        Button Handler 1
        */
    </script>
</body>

</html>
```


#### Event Delegation:
Event Delegation is a technique where you attach a single event listener to a parent element instead of attaching listeners to each child element individually. This takes advantage of event bubbling, where an event on a child element "bubbles up" to its parent.

Without Delegation:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>

<body>

    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <script>
        const items = document.querySelectorAll("li");
        // items.forEach(item => {
        //     item.addEventListener("click", function () {
        //         alert("You clicked " + item.textContent);
        //     });
        // });
        // or
        for (const item of items) {
            item.addEventListener("click", () => {
                alert(`You clicked ${item.innerText}`); 
            })
        }
    </script>
</body>

</html>
```
Problems:
- You must manually attach listeners to every li.
- Won’t work for new li that added dynamically.

With Delegation:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>

<body>

    <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <script>
        const list = document.getElementById("list");

        list.addEventListener("click", (e) => {
            console.log(e.target.tagName) // LI
            if (e.target.tagName === "LI") {
                alert("You Clicked " + event.target.innerText);
            }
        })

    </script>
</body>

</html>
```

- Capturing Phase : document → html → body → ul → li (clicked)
- Target Phase : li (Item 2)
- Bubbling Phase : li → ul → body → html → document


Witout Delegation (Won’t work for new li that added dynamically):

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>

<body>

    <ul id="todo-list">
        <li>Task 1</li>
    </ul>
    <button id="add-task">Add Task</button>

    <script>
        const list = document.getElementById("todo-list");
        const addTask = document.getElementById("add-task");

        addTask.addEventListener("click", function () {
            const li = document.createElement("li");
            li.textContent = "New Task";
            list.appendChild(li);
        });

        const items = document.querySelectorAll("li");
        items.forEach(item => {
            item.addEventListener("click", function () {
                alert("You clicked " + item.textContent);
            });
        });
    </script>

</body>

</html>
```

With Delegations:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>

<body>

    <ul id="todo-list">
        <li>Task 1</li>
    </ul>
    <button id="add-task">Add Task</button>

    <script>
        const list = document.getElementById("todo-list");
        const addTask = document.getElementById("add-task");

        addTask.addEventListener("click", function () {
            const li = document.createElement("li");
            li.innerText = "New Task";
            list.appendChild(li);
        });

        list.addEventListener("click", function (e) {
            if (e.target.tagName === "LI") {
                alert("Clicked: " + e.target.textContent);
            }
        });
    </script>

</body>

</html>
```




### Event Examples:

create a comment box and display comment:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .comment {
            border: 2px solid blue;
            background-color: lightcyan;
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
        }
    </style>
</head>

<body>
    <h1>My Awesome comment box. write What in you mind!!!</h1>

    <section>
        <h2>All comments Here:</h2>

        <div id="comment-container">
            <p class="comment">This is the first comment.</p>
            <p class="comment">This is the second comment.</p>
            <p class="comment">This is the third comment.</p>
        </div>

        <textarea name="" id="comment-text-box" cols="60" rows="5"></textarea>
        <br>
        <button id="btn-post-comment">Post Comment</button>
    </section>

    <script>
        // step 1: set a event handler to the button
        document.getElementById("btn-post-comment").addEventListener("click", () => {
            // step 2: get the text, written in the comment text area
            const commentTextBox = document.getElementById("comment-text-box");
            const newComment = commentTextBox.value;
            // step 3: get the parent node where to publish comment
            const commentContainer = document.getElementById("comment-container");
            //step 4: create a comment paragraph and add the "comment" class to it for style
            const commentElement = document.createElement('p');
            commentElement.classList.add("comment");
            // step 5: set the text get form the newComment
            commentElement.innerText = newComment;
            // step 6: append the new p tag to the parent node
            commentContainer.appendChild(commentElement);
            // step 7: clean the text area
            commentTextBox.value = "";
        })
    </script>
</body>

</html>
```
![image](images/comments.png)


Simple delete confirmation button:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .comment {
            border: 2px solid blue;
            background-color: lightcyan;
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
        }
    </style>
</head>

<body>
    <h1 id="secret-info">My Secret Info</h1>

    <input type="text" id="input-delete" placeholder="write delete">
    <button id="btn-delete" disabled>Delete</button>

    <script>
        document.getElementById("input-delete").addEventListener("keyup", (event) => {

            const text = event.target.value;
            console.log(text);
            const btnDelete = document.getElementById("btn-delete");

            if (text === "delete") {
                btnDelete.removeAttribute("disabled");
                const secretInfo = document.getElementById("secret-info");
                secretInfo.style.display = "none";
            }
            else {
                btnDelete.setAttribute("disabled", true);
            }
        })
    </script>
</body>

</html>
```
![image](images/deleteConfirmation.png)


# Part 3: OOP

Object-Oriented Programming is a programming paradigm(a way of structuring programs) based on the objects that contain properties and methods. JavaScript supports OOP through prototypes and, since ES6, through classes.

means OOP is the concept, and Classes, prototypes, objects are the tools used to implement that.

- In most languages → OOP is implemented using classes
- In older JavaScript → OOP was implemented using prototypes and constructor functions.
- In modern JavaScript (ES6+) → OOP is implemented using classes, which are actually cleaner syntax built on top of prototypes (the constructor function mechanism is still used under the hood).

Below i put two example of both old and new implemention: 

- Constructor Function + prototype:

```js
// Constructor function (old OOP style)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method using prototype
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

const p1 = new Person("John", 30);

console.log(p1.greet());
```

here, 

- Person(name, age) constructor function: creates a blueprint for all objects that will be created from it.
- Person.prototype.greet: adds a method to the constructor’s prototype, so all objects created from Person share this method.
- new Person("John", 30): Creates a new object, links it to the prototype, runs the constructor, and returns the object.

- Class:

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

const p1 = new Person("John", 30);

console.log(p1.greet());
```
Here, 

- class Person { ... }: creates a blueprint for all objects that will be created from it. Internally, JavaScript still uses a constructor function, but in classes the syntax is `constructor(name, age)` instead of `Person(name, age)`.

## Static Keyword: 
The static keyword in JavaScript is used to define class-level properties or methods that belong to the class itself, rather than to any instance of the class.
So, you have to access the static properties and methods only through the class name.

```js
class MathUtils {
    // Static property
    static PI = 3.1416;

    // Static method
    static square(x) {
        return x * x;
    }
}

console.log(MathUtils.PI);        // 3.1416
console.log(MathUtils.square(5)); // 25

const obj = new MathUtils();
console.log(obj.PI);              // undefined → cannot access via instance
console.log(obj.square);          // undefined → cannot access via instance
```

**Without Static:**
 
```js
class Counter {
    constructor() {
        this.count = 0; // instance property
    }

    increment() {
        return this.count += 1;
    }

    decrement() {
        return this.count -= 1;
    }
}

const instance1 = new Counter();
console.log(instance1.increment()); // 1
console.log(instance1.increment()); // 2
console.log(instance1.increment()); // 3

const instance2 = new Counter();
console.log(instance2.increment()); // 1
console.log(instance2.increment()); // 2
```
here, Each instance has its own separate count.

**With Static keyword:**

```js
class Counter {
    static count = 0; // static property
 
    static increment() { // static method
        return Counter.count += 1;
    }

    static decrement() {
        return Counter.count -= 1;
    }
}

console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
console.log(Counter.increment()); // 3
console.log(Counter.increment()); // 4
console.log(Counter.increment()); // 5
```
here, Static property count is shared by the class, not by instances.

## The Four Pillars of OOP:

We call Encapsulation, Abstraction, Inheritance, and Polymorphism the four pillars of OOP, because they form the structural foundation of the OOP paradigm.

Why each is a pillar:

- Encapsulation → Protects an object’s data and keeps it safe.
- Abstraction → Hides unnecessary details and exposes only what’s needed.
- Inheritance → Allows code reuse and hierarchy of classes.
- Polymorphism → Lets objects behave differently while sharing the same interface.

### Encapsulation: 
Encapsulation (in js) is the process of hiding the internal state (properties) of an object using private fields (#), and providing controlled access through methods or getters/setters. This protects the object’s data and prevents unintended modifications.

Note: 
- Private fileds Properties cannot be accessed outside the class and it Declared using #
- Getter and Setter allow accessing and modifying private fields like normal properties, instead of calling methods.

```js
class Person {
    #age; // private field

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    // Getter
    get age() {
        return this.#age;
    }

    // Setter
    set age(newAge) {
        this.#age = newAge;
    }
}

const p = new Person("John", 25);

console.log(p.name);  // John
console.log(p.age);   // 25 (uses getter)

p.age = 30;           // uses setter
console.log(p.age);   // 30

// console.log(p.#age); // ❌ Error
```

Without getter and setter: 

```js
class Person {
    #age; // private field

    constructor(name, age) {
        this.name = name; // public
        this.#age = age;  // private
    }

    // Method to access private field
    getAge() {
        return this.#age;
    }

    // Method to update private field
    setAge(newAge) {
        this.#age = newAge;
    }
}

const p = new Person("John", 25);

console.log(p.name);    // John (public)
console.log(p.getAge()); // 25 (private accessed via method)

p.setAge(30);
console.log(p.getAge()); // 30

console.log(p.name) // John
// console.log(p.#age); //  Error
```

### Abstraction:

Abstraction is the process of hiding implementation details using private field and showing only the necessary functionality to the user.

```js
class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) this.#balance -= amount;
        else console.log("Insufficient funds!");
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 1300
```
here, User doesn’t need to know how #balance is stored or updated internally. They just call deposit/withdraw.

#### Difference Between Encapsulation and Abstraction: 

| Encapsulation                     | Abstraction                                    |
| --------------------------------- | ---------------------------------------------- |
| Protect/hide object’s data        | Hide complexity, expose only necessary details |
| getters/setters or public methods | Public methods                                 |

### Inheritance: 

Inheritance is a process that allows a chaild class inherits properties and methods from a parent class using extends keyword and super() method.

here, 
- extends: Used to create a child class that inherits from a parent class. It sets up the prototype chain so the child class can access parent methods and properties.
- super(): Used inside the child class constructor to call the parent class constructor.
  
```js
class Animal {
    constructor(type) {
        this.type = type;
    }

    makeSound() {
        console.log(`${this.type} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(breed) {
        super("Dog"); // call parent constructor
        this.breed = breed;
    }

    describe() {
        console.log(`This is a ${this.breed} of type ${this.type}`);
    }
}

const dog = new Dog("Labrador");
dog.describe();    // This is a Labrador of type Dog
dog.makeSound();   // Dog makes a sound
```
here, Child class inherits properties and methods from parent and can add its own functionality.

### Polymorphism: 
Polymorphism is the process that allows a child class to inherit methods from a parent class using the extends keyword, and lets the same method behave differently depending on the child class.

We can do Polymorphism using two ways: 
1. Methods Overriding: Child class changes parent method behavior.
2. Duck Typing(Interfae-Based): Different objects implement the same method name.

#### Using Methods Overriding: 
Child class changes parent method behavior.

```js
class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}

const dog = new Dog()
const cat = new Cat()

dog.makeSound()
cat.makeSound()
```
Here, makeSound() is overridden in each child class. Same method name behaves differently.

#### Using Duck Typing:
Different objects implement the same method name, allowing them to be used interchangeably.

```js
class Car {
    start() {
        console.log("Car starts");
    }
}

class Bike {
    start() {
        console.log("Bike starts");
    }
}

function startVehicle(vehicle) {
    vehicle.start(); // works for any object with start()
}

const car = new Car();
const bike = new Bike();

startVehicle(car);  // Car starts
startVehicle(bike); // Bike starts
```
Here, any object with a start method can be passed to startVehicle, demonstrating polymorphism without inheritance.

# Part 4: Data Structure

## Array 

## Object 

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


## Stack 

## Queue

## Linked List

## Graph

# Part 5: Algorithms

## Time and Space Complexity

## Searching 
## Sorting

# Part 6: TypeScript

## TypeScript Introduction:

### What is TypeScript:

TypeScript is a superset of JavaScript means its includes everthing from javaScript plus add extra type featues on top of it.
![image](./images/typeScript/TypeScript-introduction/hello-world.webp)

Note: TypeScript is a compiled language, meaning TypeScript code is first converted into JavaScript before execution.

### TypeScript Features: 
- Static Typing: Allows you to define types for variables, functions, objects, etc.
- Static Type Checking: TypeScript detects type errors before runtime, both while writing code (through the editor) and during compilation with tsc.
- Code Suggestions & IntelliSense: TypeScript improves your editor experience with autocompletion and better hints.
- Type Inference: TypeScript can automatically understand (infer) types even when you don’t explicitly declare them.
  

### How to run TypeScript:

Step 1: Install Node.js for linux using NVM with NPM: 

![image](./images/typeScript/TypeScript-introduction/noode.js-installing.png)

Note: 

When we used js we don't need to worry about node version, but when we used typescript we need to control our version, because if we used node version 19.9.0 and anoter computer if we used node version 24.4.1 or another version the same typescript might not work, for this issue we have to contorl node vresion. for that there are two  some way available using NVM or Docker. For now Im using NVM

For installing a differnt node verison: 

```bash
nvm i 19.9.0
```

- For check all install Node Version:

```bash
nvm ls
```

- For switching a different install node version: 

```bash
nvm use 24.4.1
```

Step 2: Install TypeScript:

If you run this command, then you need to install the TypeScript for every porject:

```bash
npm install typescript --save-dev
```

If you run this command, then you need to install the TypeScript once for your computer.

```bash
npm install -g typescript
```

step 3: Convert your ts file to js:

test.ts:

```ts
const firstName: string = "Muhammad";
const lastName: string = "Tamim";

console.log(firstName + " " + lastName)

console.log(firstName)
```

```bash
tsc test.ts
```

Now you see a test.js file added with:

```js
var firstName = "Muhammad";
var lastName = "Tamim";
console.log(firstName + " " + lastName);

```


Now you can use `node test.js` to see the output: 

Note: we need to conver the ts file to js file because node dones't understand the TS code, it only understand the js code.

but when node relesed their 22.6.0  they experimentally intoduce typescript suppor using typeStripg. TypeStrping means node.js remove all ts to you code and then your code is gonna be js code, then node.js run this js code. and latyer they enable this experieceml feture to buidling feature for later versions. But still node.js not fully suppor this feture. for some typescipt that need transformation , we have to use a node.js flag for this. So the best practice using typectipt compiler to conver the ts code to js and then print the output.

so for now if we write a ts code we can direlty run this ts code by : 

```bash
node test.ts
```

### Explicit Typing and Type Inference: 

Explicit typing is when you tell TypeScript the type yourself.

```ts
let age: number = 20;
let name: string = "Tamim";
let isAdmin: boolean = false;
```

Type inference is when TypeScript assigns a type automatically based on the value.

```ts
let age = 20;   // TypeScript infers: number
let name = "Tamim"; // inferred: string
let active = true;  // inferred: boolean
```

## number, bigint, boolean, string, symbol, null, undefined: 

```ts
// 1. number
let age: number = 25;
let price: number = 99.99;


// 2. bigint
let bigNumber: bigint = 100n;
let anotherBig: bigint = BigInt(100); // same as 100n
let bigSum: bigint = bigNumber + anotherBig;
console.log(bigSum); // 200n

// 3. boolean
let isLoggedIn: boolean = true;
let hasPaid: boolean = false;

// 4. string
let username: string = "Tamim";
let greeting: string = `Hello, ${username}!`;
console.log(greeting); // Hello, Tamim!

// 5. symbol
let sym1: symbol = Symbol("id");
let sym2: symbol = Symbol("id");
console.log(sym1 === sym2); // false

// 6. null
let emptyValue: null = null;
console.log(emptyValue); // null

// 7. undefined
let notAssigned: undefined = undefined;
console.log(notAssigned); // undefined
```

## any, unknown

### any

any is disables the TypeScript type checking. Means we can assign any value to it, and TypeScript won’t give errors like a normal js.

```ts
let something: any;

something = 42;         // number
something = "Hello";    // string
something = true;       // boolean
something = [1, 2, 3]; // array

console.log(something);
```
### unknown
unknown is like any, but safer. here we can assign any value to an unknown variable, but you cannot use it directly without type checking. You must check the type first, using typeof, Array.isArray(), or other type guards.

```ts
let value: unknown;

value = "Hello";    // string
value = true;       // boolean
value = 10.23435;         // number

// console.log(value.toFixed(2)); // 'value' is of type 'unknown'.

console.log(typeof value === 'number' && value.toFixed(2)) // 10.23
```


## literal, union, enum, and as const:

### Literal:
Represent exact value a variable can hold.

Note: Works only on primitive values:

```ts
let direction: 'left';

// direction = 'right'; // Type '"right"' is not assignable to type '"left"'.

direction = 'left'
```

```ts
let dice: 1 | 2 | 3 | 4 | 5 | 6; // union numbers literal

dice = 3;
dice = 6;
dice = 7; // Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'.
```

### union: 
Combine multiple literal types or general types into one variable. It is written using the pipe (|) symbol.

```ts
let direction: "left" | "right"; // literal union
direction = "left";
direction = "right"
// direction = "UP" // Type '"UP"' is not assignable to type '"left" | "right"'.
```

```ts
let id: number | string; // general union

id = 234
id = 'id123'
// id = true // Type 'boolean' is not assignable to type 'string | number'.
```

### enum: 
Enum is a collection of named constants grouped under a single type, which can have numeric (default) or string values.

```ts
enum Days {
    saturday, // 0
    sunday, // 1
    monday // 2
}

let dayName: Days = Days.saturday
console.log(dayName) // 0

// Note: If you don’t assign values, TypeScript gives automatic numeric values starting from 0.
```

```ts
enum Direction {
    Left = "left",
    Right = "right",
    Up = "up",
    Down = "down"
}

let move: Direction = Direction.Left;
console.log(move) // left
```

### as const:
Automatically turns a value into literal type + readonly.

Note: as const works for primitives, arrays, and objects.

```ts
let direction: "left";
// direction = "right" // Type '"right"' is not assignable to type '"left"'.

let direction2 = "left" as const;
direction2 = "right"; // Type '"right"' is not assignable to type '"left"'.
```

```ts
const directions = ["left", "right", "up", "down"] as const;

// directions.push("forward"); // Property 'push' does not exist on type 'readonly ["left", "right", "up", "down"]'.
```

```ts
const person = {
    name: "Tamim",
    age: 20
} as const;

// person.name = "Alex"; // Cannot assign to 'name' because it is a read-only property.
```
#### Diference between as const and readonly:

| Feature       | `readonly`                 | `as const`                    |
| ------------- | -------------------------- | ----------------------------- |
| Scope         | Single property or element | Whole object, array, or tuple |
| Literal types | stays general types        | converts to literal types     |

```ts
let user: {
    readonly id: number;
    name: string
} = {
    id: 1,
    name: "Tamim"
};

// Hover over `user` in VS Code or use `typeof`
type UserType = typeof user;

/*
type UserType = {
    readonly id: number;
    name: string;
}
*/


let userConst = { id: 1, name: "Tamim" } as const;

type UserConstType = typeof userConst;

/*
type UserConstType = {
    readonly id: 1;
    readonly name: "Tamim";
}
*/
```

### Difference between literal, union, enum and as const:

- Literal: Restricts a variable to one exact value.
- Union: Allows a variable to be one of several specified types or values.
- Enum: A collection of named constants under a single type.
- as const: Converts a value (primitive, array, or object) into a literal type + readonly.

## Function: 

```ts
function add(a: number, b: number): number {
    return a + b;
}

let greet1 = (name: string): string => {
    return `Hello, ${name}`;
}
```

### void:
void is used for functions that do not return anything. You can’t return any value (except undefined optionally).

```ts
function sayHello(): void {
    console.log("Hello")
}

sayHello() // Hello
```

```ts
function optionalReturn(): void {
    // return undefined;
    return;
}

console.log(optionalReturn())
```

### never: 
Represents a function that cannot produce a value at all awalys throw an error or infinite loop:

```ts
function throwError(): never {
    throw new Error("Oops");
}

function infiniteLoop(): never {
    while(true) {}
}
```

## object:

```ts
let person: {
    name: string;
    age: number;
    isAdmin: boolean
} = {
    name: "Tamim",
    age: 20,
    isAdmin: true
}

// Optional Properties

let user: {
    name: string,
    age?: number
} = {
    name: "Tamim"
}

console.log(person)
console.log(user)

// Readonly Properties
let admin: {
    readonly id: number;
    name: string;
} = {
    id: 1,
    name: "Tamim"
};

// admin.id = 2; // Cannot assign to 'id' because it is a read-only property.

// as const
let userConst = {
    name: "Tamim",
    age: 20
} as const;

userConst.name = "Muhamamd" // Cannot assign to 'name' because it is a read-only property.
```

## array and tuple

### array: 

```ts
let numbers: number[] = [1, 2, 3]
let names: string[] = ['a', 'b']

let mix: (string | number)[] = [1, "Hello"] // union array
```

### tuple:

Tuples are fixed-length arrays with fixed types for each element.

```ts
let user: [string, number] = ['tamim', 20]
let user: [number, number] = [20, 20]

// let user2: number[] = [20, 20] --> just a normal array

// tuple with optional element
let user: [string, number?];

user = ["Tamim"];      
user = ["Tamim", 20];  

// tuple with readonly and as const
let coords: readonly [number, number] = [10, 20];

// coords[0] = 30; // Cannot assign to '0' because it is a read-only property.

let coords2: [number, number] = [10, 20] as const;
// coords[0] = 30; // Cannot assign to '0' because it is a read-only property.
```


## type alias, interface and intersection:

### type alias 
The type keyword is used to create an alias for any type—primitive, object, union, tuple, etc. Means a type alias allows you to define a custom type that can be reused throughout your code.

```ts
// Without type alias
const user1: {
    id: number;
    name: string;
    isAdmin?: boolean; 
} = {
    id: 1,
    name: "Tamim",
    isAdmin: true
}

// with type alias
type User = {
    id: number;
    name: string;
    isAdmin?: boolean; // optional property
};

const user2: User = {
    id: 2,
    name: "Nasrin"
};

const user3: User = {
    id: 3,
    name: "Kuddus"
};
```

```ts
// without type alias
const sum = (n1: number, n2: number): number => {
    return n1 + n2
}

// with type alias
type Add = (num1: number, num2: number) => number

const sum2: Add = (num1, num2) => {
    return num1 + num2
}

const sum3: Add = function (num1, num2) {
    return num1 + num2;
};
```

```ts
// Union type alias
type ID = string | number;

const userId1: ID = "abc123";
const userId2: ID = 101;
```

### interface 

Defines the shape of an object: 

```ts
// without interface
const user1: {
    name: string;
    age: number;
    isAdmin?: boolean
} = {
    name: "nasrin",
    age: 11,
    isAdmin: false
}

// with interface
interface User {
    name: string;
    age: number;
    isAdmin?: boolean; 
}
const user2: User = {
    name: "tamim",
    age: 20
}

// with type alias
type User = {
    name: string;
    age: number;
    isAdmin?: boolean; 
}
const user3: User = {
    name: "tamim",
    age: 20
}
```


```ts
// with type alias
type Friends = string[]
const friends: Friends = ["A", "B", "C"]

// with interface
interface iFriends {
    [i: number]: string 
}
const friends2: iFriends = ["D", "E", "F"]

interface INumberArray {
  [index: number]: number;
}

const nums: INumberArray = [1, 2, 3];
```

here, 
- [index: number] --> the key type
- :number --> the value type

Note: for array interface is little bit comple because interfaces do not have built-in syntax for arrays menas 
Interfaces describe objects, not arrays.


```ts
// with type alias
type Add = (num1: number, num2: number) => number
const add1: Add = (num1, num2) => num1 + num2

// with interface
interface iAdd {
    (number1: number, number2: number): number
}
const add2: iAdd = (number1, number2) => number1 + number2
```

Note: interface not suppoer intersection, so for intersection we must use extends keywords.
- extends keywords inherit all properties from another interface. 

```ts
type User = {
    name: string;
    age: number
}

type Role = {
    role: 'admin' | 'user'
}

type UserWithRole = User & Role

const user1: UserWithRole = {
    name: "x",
    age: 1,
    role: 'user'
}


interface User2 {
    name: string;
    age: number
}


interface IUserWithRole extends User2 {
    role: 'admin' | 'user'
}

const user2: IUserWithRole = {
    name: "x",
    age: 1,
    role: 'user'
}
```

**Tips:**
- Use interface → for object structure and class
- Use type alias → for everything else

### intersection: 
Combines multiple type alias. Unline union here the value must be satisfy all type alias that are combained by intersection.

```ts
type Name = { name: string }
type Age = { age: number }

type Person = Name & Age;

const p1: Person = {
    name: "tamim",
    age: 20
}

const p2: Person = {
    name: "Muhammad",
}

/*
Type '{ name: string; }' is not assignable to type 'Person'.
  Property 'age' is missing in type '{ name: string; }' but required in type 'Age'.
*/
```

## Type Assertion: 

Sometimes TypeScript doesn’t know the exact type and cannot infers type correctly. Type assertion lets you override TypeScript's type and force a value to be treated as a specific type. 

we used type assertion: 
- When we know more about the type than TypeScript
- for third party packages that dones support ts

We can perform type using using `as` keyword: 

```ts
let someValue: any = "Hello TypeScript";
let strLength: number = (someValue as string).length;

console.log(strLength); // 17
```

```ts
type User = {
    name: string;
    age: number;
};

let data = {} as User;
data.name = "Tamim";
data.age = 20;
```

## Type Guards
Type guards help TypeScript narrow a variable’s type at runtime.

When a variable can have multiple possible types (union type), TypeScript needs extra information to know what operations are safe. A type guard tells TypeScript At this point, the value is this type.

### Typeof:

```ts
function printValue(v: string | number) {
    if (typeof v === "string") {
        console.log(v.toUpperCase()); // string methods allowed
    } else {
        console.log(v.toFixed(2)); // number methods allowed
    }
}

printValue(20) // 20.00
```

```ts
type NumOrStr = number | string

const add = (num1: NumOrStr, num2: NumOrStr) => {

    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2
    }
    else {
        return num1.toString() + num2.toString()
    }

}

const result1 = add(2, 2)
const result2 = add("2", 2)

console.log(result1, result2) // 4 22
```

### in Operator:
Checks if a property exists in the object:

```ts
type Admin = { username: string; isAdmin: true };
type User = { username: string };

function checkRole(person: Admin | User) {
    if ("isAdmin" in person) {
        console.log("Admin user");
    } else {
        console.log("Normal user");
    }
}

checkRole({ username: "Tamim", isAdmin: true }) // Admin user
```
### Instanceof:

the instanceof operator is used to check whether an object is an instance of a specific class or not.

```js
object instanceof Class
```
- object → the variable you want to check
- Class → the constructor/class you are checking against
- Returns true if the object is created from that class or a subclass, otherwise false

```ts
class Dog {
  bark() { console.log("Woof!"); }
}

class Cat {
  meow() { console.log("Meow!"); }
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

speak(new Dog()); // Woof!
speak(new Cat()); // Meow!
```

```ts
class Person {
    name: string;

    constructor(name: string) {
        this.name = name
    }
    getSleep(hours: number) {
        console.log(`he sleep ${hours} daily`)
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name)
    }

    doStudy(hours: number) {
        console.log(`he study ${hours} daily`)
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name)
    }

    takeClass(hours: number) {
        console.log(`i take ${hours} of class`)
    }
}

const isStudent = (user: Person) => {
    return user instanceof Student
}
const isTeacher = (user: Person) => {
    return user instanceof Teacher
}

const getUserInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(10)
    }
    else if (isTeacher(user)) {
        user.takeClass(5)
    }
    else {
        user.getSleep(20)
    }
}

const person1 = new Person("x miya")
const student1 = new Student("student kamrul")
const Teacher1 = new Teacher("teacher lotip")

getUserInfo(person1) // he sleep 20 daily 
getUserInfo(student1) // he study 10 daily
getUserInfo(Teacher1) // i take 5 of class
```
  
### Equality Narrowing:

Using ===, !== to narrow types.

```ts
function compare(a: string | number, b: string | number) {
    if (a === b) {
        console.log("Same values");
    }
    else{
        console.log("Different values")
    }
}

compare('2', 2) // Different values
```

### Truthiness Narrowing:
TypeScript narrows based on truthy/falsy values.

```ts
function print(msg?: string) {
    if (msg) {
        console.log(msg.toUpperCase());
    }
    else {
        console.log("Please write something")
    }
}
print() // Please write something
```
### Array.isArray():

```ts
function process(x: string | string[]) {
    if (Array.isArray(x)) {
        console.log("Array");
    } else {
        console.log("String");
    }
}

process(['a', 'b']) // Array
```
  

## Generics
Generics allow you to write reusable code that works with multiple types while keeping strong type safety.

Instead of using any, which removes type checking, generics let you pass types as parameters.

```ts
// with any
function getFirstElement(arr: any[]) {
    return arr[0];
}

const num = getFirstElement([1, 2, 3]);   // Type is any
const str = getFirstElement(["a", "b"]);  // Type is any

console.log(num, str) // 1 a


// with generics
function getFirstElement2<T>(arr: T[]): T {
    return arr[0];
}

const num2 = getFirstElement([1, 2, 3]);   // Type is number
const str2 = getFirstElement(["a", "b"]);  // Type is string

console.log(num2, str2) // 1 a
```

```ts
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const result = merge({ name: "Tamim" }, { age: 20 });
console.log(result) // { name: 'Tamim', age: 20 }
```

```ts
// Generic in Interfaces

interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 123 };
const stringBox: Box<string> = { value: "Hello" };

console.log(numberBox) // { value: 123 }
console.log(stringBox) // { value: 'Hello' }
```

```ts
// Generic with type alias

type Coordinates<X, Y> = [X, Y]

const coordinates1: Coordinates<number, number> = [20, 30]
const coordinates2: Coordinates<string, string> = ['20', '30']

console.log(coordinates1) // [20, 30]
```

```ts
type GenericArray<T> = Array<T>


// const strArray: string[] = ['a', 'b', 'c']
const strArray: GenericArray<string> = ['a', 'b', 'c']

// const numArray: number[] = [1, 2, 3]
const numArray: GenericArray<number> = [1, 2, 3]

// const boolArray: boolean[] = [true, false, true]
const boolArray: GenericArray<boolean> = [true, false, true]
```
Note:  Array[T] === T[]

```ts
// type GenericArray<T> = Array<T>

// const userList: GenericArray<{ name: string, age: number }> = [
//     {
//         name: 'x',
//         age: 20
//     },
//     {
//         name: 'y',
//         age: 24,
//     },
//     {
//         name: 'z',
//         age: 30
//     }
// ]


type GenericArray<T> = Array<T>

type User = {
    name: string,
    age: number
}

const userList: GenericArray<User> = [
    {
        name: 'x',
        age: 20
    },
    {
        name: 'y',
        age: 24,
    },
    {
        name: 'z',
        age: 30
    }
]
```

```ts
interface Developer<T, X = null> { // X = null (Default value)
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string
    };
    smartWatch: T;
    bike?: X
}

interface PoorWatch {
    heartRate: string;
    stopWatch: boolean
}

const poorDeveloper: Developer<PoorWatch> = {
    name: 'x',
    salary: 20,
    device: {
        brand: 'oppo',
        model: "a5s",
        releasedYear: '2005'
    },
    smartWatch: {
        heartRate: '56',
        stopWatch: true
    },
    bike: null
}

const richDeveloper: Developer<{
    heartRate: string;
    stopWatch: boolean;
    calling: boolean;
    ai: boolean
}, { brand: "yamaha" }> = {
    name: 'x',
    salary: 20,
    device: {
        brand: 'oppo',
        model: "a5s",
        releasedYear: '2005'
    },
    smartWatch: {
        heartRate: '56',
        stopWatch: true,
        calling: true,
        ai: true
    }
}
```

```ts
// const createArrayWithString = (value: string) => [value]
// const createArrayWithNumber = (value: number) => [value]
// const createArrayWithUserObj = (value: { id: number, name: string }) => [value]

// const arrString = createArrayWithString('Apple')
// const arrNumber = createArrayWithNumber(10)
// const arrObj = createArrayWithUserObj({ id: 3, name: "x" })

const createArrayWithGeneric = <T>(value: T) => [value]

const arrString = createArrayWithGeneric('Apple')
const arrNumber = createArrayWithGeneric(10)
const arrObj = createArrayWithGeneric({ id: 3, name: "x" })


const createArrayWithTuple = (param1: string, param2: string) => [param1, param2]

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2]
const res1 = createArrayTupleWithGeneric("tamim", false)
const res2 = createArrayTupleWithGeneric(222, { name: "tamim" })


const addStudentToCourse = <T>(studentInfo: T) => {
    return { course: "Next Level", ...studentInfo }
};

const student1 = {
    id: 123,
    name: "tamim",
    hasPen: true
}

const student2 = {
    id: 32434,
    name: "zunker",
    hasCar: true,
    isMarried: true
}

const result = addStudentToCourse(student1)
```

### Constrain
Generic constraints allow you to restrict what types are allowed in a generic. we do this using extends keyword.

```ts
function printName<T extends { name: string }>(person: T) {
    console.log(person.name)
}

printName({ name: "tamim", age: 20 }) // Tamim
printName({ age: 20 }) // Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; }'.
```

```ts
function toArray<T extends string | number>(value: T): T[] {
    return [value]
}

toArray("Hello")
toArray(20)
toArray(true) //  Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
```

```ts
function getFirst<T extends any[]>(arr: T) {
    return arr[0]
}

getFirst([1, 2, 3])
getFirst(['1', '2'])
getFirst("Hello") // Argument of type 'string' is not assignable to parameter of type 'any[]'.
```

```ts
interface Person {
    name: string;
}

function greet<T extends Person>(value: T) {
    console.log("Hello", value.name);
}

greet({ name: "Tamim", id: 1 });   // ok
greet({ id: 1 });                  // ❌ error
```


```ts
type student = { id: number, name: string }

const addStudentToCourse = <T extends student>(studentInfo: T) => {
    return {
        course: "Next Lavel",
        ...studentInfo
    }
}

const student1 = {
    id: 123,
    name: "tamim",
    hasPen: true
}

const student2 = {
    name: "zunker",
    hasCar: true,
    isMarried: true
}

const result1 = addStudentToCourse(student1)
const result2 = addStudentToCourse(student2) // error
```

#### with keyof: 
keyof is an operator that extracts all keys of a type as a union of string literal types.

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const user = {
    name: "Tamim",
    age: 20
};

getProperty(user, "name"); // Tamim
getProperty(user, "age");  // 20
getProperty(user, "location");  // Argument of type '"location"' is not assignable to parameter of type '"name" | "age"'.
```

```ts
type User = {
    id: number,
    name: string,
    address: {
        city: string
    }
}

const user: User = {
    id: 222,
    name: "mezba",
    address: {
        city: "Barisal"
    }
}

// const myId = user["id"]
// const myName = user["name"]
// const address = user["address"]
// console.log(myId, myName, address) // 222 mezba { city: 'Barisal' }

const getPropertyFromObj = <X,>(obj: X, key: keyof X) => {
    return obj[key]
}

const result = getPropertyFromObj(user, "name")
console.log(result) // mezba

const product = {
    brand: "apple"
}
const student = {
    id: 123,
    class: 5
}

const result2 = getPropertyFromObj(product, "brand")
const result3 = getPropertyFromObj(student, "id")

console.log(result2, result3) // apple 123
```
### conditional Types:

Conditional types allow you to choose a type based on a condition, similar to an if/else, but inside the type system.

syntax: 

```
T extends U ? X : Y
```
- If T extends (matches) U, return X else Y

```ts
type A = null;
type B = undefined

type c = A extends number ? true : B extends undefined ? true : false
```
```ts
type RichPeopleVehicle = {
    bike: string;
    car: string;
    ship: string;
}

type CheckVehicle<T> = T extends keyof RichPeopleVehicle ? true : false

type HasBike = CheckVehicle<"bike">
```

```ts
type IsNumber<T> = T extends number ? "YES" : "NO";

type A = IsNumber<number>;   // "YES"
type B = IsNumber<string>;   // "NO"
```

### Mpped Types:

Mapped types allow you to create new types by transforming existing types. 

```ts
type Person = {
  name: string;
  age: number;
};

// Make all properties optional
type PartialPerson = {
  [K in keyof Person]?: Person[K];
};
```
here, 
- [K in keyof Person] → iterate over all keys of Person.
- Person[K] → type of that property.
- ? → make it optional.

```ts
type AreaOfNum = {
    height: number;
    width: number;
}

// type AreaOfString = {
//     height: string;
//     width: string;
// }

type Area<T> = {
    [key in keyof T]: T[key]
}

const area1: Area<{ height: string; width: number }> = {
    height: '50',
    width: 40
}
```

## Utility Types: 
TypeScript provides several built-in utility types that help you transform existing types and create new types from them.

Utility types are extremely important because they save you time, reduce code duplication, and let you write cleaner, more flexible TypeScript.

- Partial<> : Makes all Properties of a type optional: 

```ts
type User = {
    name: string;
    age: number;
}

type PartialUser = Partial<User>;

const user: PartialUser = {
    name: "Tamim" // age is optional
}
```

- Required<>: Opposite of Partial — makes all properties required.

```ts
type User = {
    name?: string;
    age?: number;
}

type RequiredUser = Required<User>;

const user: RequiredUser = {
    name: "Tamim",
    age: 20
}
```
- Readonly<>: Makes all properties immutable (cannot be changed):

```ts
type User = {
    name: string;
    age: number;
}

const user: Readonly<User> = {
    name: "Tamim",
    age: 20
};

// or
const user2 = Readonly<user>

user.age = 21; // ❌ Error: cannot modify readonly property
```

- Record <K, T>: Used to create an object with specific key type K and value type T:

```ts
type Scores = Record<string, number>;

const studentScores: Scores = {
    Tamim: 34,
    John: 40,
}

// manual version of recoard
type Scores = {
    [key: string]: number;
};

const studentScores: Scores = {
    Tamim: 34,
    John: 40,
    Math: 100,
};
```

- Pick<>: Selects specific properties from a type:

```ts
type User = {
    name: string;
    age: number;
    email: string;
}

type UserPreview = Pick<User, "name" | "email">;

const data: UserPreview = {
    name: "Tamim",
    email: "t@gmail.com"
}
```

- Omit<>: Opposite of Pick — removes specific properties:

```ts
type User = {
    name: string;
    age: number;
    email: string;
}

type WithoutEmail = Omit<User, "email">;

const user: WithoutEmail = {
    name: "Tamim",
    age: 20
}
```

- Exclude<>: Removes types from a union:

```ts
type Letters = "a" | "b" | "c";
type RemoveB = Exclude<Letters, "b">; 
// "a" | "c"
```

- Extract<>: Opposite of Exclude, keeps only matching types: 

```ts
type Letters = "a" | "b" | "c";
type OnlyB = Extract<Letters, "b" | "d">;
// "b"
```

- NonNullable<>: Removes null and undefined:

```ts
type Maybe = string | null | undefined;

type Clean = NonNullable<Maybe>;
// string
```

- ReadOnlyArray<>: Cereates a readonly array: 

```ts
const numbers: ReadonlyArray<number> = [1, 2, 3];

numbers.push(4); // ❌ Error
numbers[0] = 10; // ❌ Error
```

## OOP:

### Classes: 

```ts
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`hi, i am ${this.name}`)
    }
}


const p1 = new Person("tamim", 20)
p1.greet() // hi, i am tamim
console.log(new Person("nasrin", 2)) // Person { name: 'nasrin', age: 2 }
```

Note: In JavaScript, we don’t need to declare class properties because they are automatically created when assigned in the constructor. In TypeScript, however, we must declare class properties explicitly unless we use an access modifier like public, private, or protected in the constructor, which automatically declares and assigns them:

```ts
class Person {

    constructor(public name: string, public age: number) { }

    greet() {
        return `Hello, I'm ${this.name}`;
    }
}


const p1 = new Person("tamim", 20)

console.log(p1.greet()); // hello, I'm tamim
```

### Static Keyword:

```ts
class MathUtils {
    // Static property
    static PI: number = 3.1416;

    // Static method
    static square(x: number): number {
        return x * x;
    }
}

console.log(MathUtils.PI);        // 3.1416
console.log(MathUtils.square(5)); // 25

const obj = new MathUtils();
// console.log(obj.PI);
// Property 'PI' does not exist on type 'MathUtils'. Did you mean to access the static member 'MathUtils.PI' instead?
```

**Without Static:** 

```ts
class Counter {
    count: number = 0;

    increment() {
        return this.count += 1
    }
    decrement() {
        return this.count -= 1
    }
}

const instance1 = new Counter()
console.log(instance1.increment()) // 1 
console.log(instance1.increment()) // 2
console.log(instance1.increment()) // 3

const instance2 = new Counter()
console.log(instance2.increment()) // 1
console.log(instance2.increment()) // 2
```
here, Each instance has its own separate count.
 
**with static:**

```ts
class Counter {
    static count: number = 0;

    static increment() {
        return Counter.count += 1
    }
    static decrement() {
        return Counter.count -= 1
    }
}

console.log(Counter.increment()) // 1 
console.log(Counter.increment()) // 2
console.log(Counter.increment()) // 3
console.log(Counter.increment()) // 4
console.log(Counter.increment()) // 5
```
### The Four Pillars of OOP:


#### Encapsulation: 

Encapsulation (in js) is the process of hiding the internal state (properties) of an object using private fields (#), and providing controlled access through methods or getters/setters. This protects the object’s data and prevents unintended modifications.

Note:
- Private fileds Properties cannot be accessed outside the class and it Declared using #
- Getter and Setter allow accessing and modifying private fields like normal properties, instead of calling methods.

Encapsulation in js and ts are same, just change in js we have just public and private field. in ts the thoes field called access modifies. and here we have 3 access modifiers:
- Public: Accessible everywhere: inside class, subclasses, and outside
- private: Accessible only inside the class, Cannot be accessed outside or by subclasses
- protected(extra): Accessible inside the class and subclasses, Cannot be accessed outside the class

```ts
class Person {
  public name: string;     // public field
  private ageValue: number; // private field (TS private)
  protected country: string; // protected field (extra example)

  constructor(name: string, age: number, country: string) {
    this.name = name;
    this.ageValue = age;
    this.country = country;
  }

  // Getter
  get age(): number {
    return this.ageValue;
  }

  // Setter
  set age(newAge: number) {
    this.ageValue = newAge;
  }
}

const p = new Person("John", 25, "USA");

console.log(p.name);  // John (public)
console.log(p.age);   // 25 (via getter)

p.age = 30;           // via setter
console.log(p.age);   // 30

// console.log(p.ageValue);   ❌ Error: private
// console.log(p.country);    ❌ Error: protected
```

Without getter and setter:

```ts
class Person {
  public name: string;        // public field
  private ageValue: number;   // private field
  protected country: string;  // protected field

  constructor(name: string, age: number, country: string) {
    this.name = name;
    this.ageValue = age;
    this.country = country;
  }

  // Public method to get private age
  public getAge(): number {
    return this.ageValue;
  }

  // Public method to set private age
  public setAge(newAge: number): void {
    this.ageValue = newAge;
  }
}

const p = new Person("John", 25, "USA");

console.log(p.name);    // John (public)
console.log(p.getAge()); // 25

p.setAge(30);           // modify via method
console.log(p.getAge()); // 30

// console.log(p.ageValue);  ❌ Error: private
// console.log(p.country);   ❌ Error: protected
```

```ts
class BackAccount {
    readonly userId: number;
    protected userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    addBalance(balance: number) {
        this.userBalance += balance
    }
}

class StudentBankAccount extends BackAccount {
    test() {
        // console.log(this.balance) // Property 'balance' does not exist on type 'StydentBankAccount'.
        console.log(this.userName)
    }
}

const myAccount = new BackAccount(111, 'Tamim', 100);
myAccount.addBalance(100)
console.log(myAccount)
```

```ts
class BankAccount {
    private _balance: number = 0;

    deposit(amount: number) {
        if (amount <= 0) {
            throw new Error("Deposit must be positive");
        }
        this._balance += amount;
    }

    withdraw(amount: number) {
        if (amount > this._balance) {
            throw new Error("Insufficient balance");
        }
        this._balance -= amount;
    }

    get balance() {
        return this._balance; // getter
    }
}

const acc = new BankAccount();
acc.deposit(1000);
acc.withdraw(300);

console.log(acc.balance); // ✔ 700
// acc._balance = 5000;   // ❌ ERROR (private)
```

#### Abstraction: 
Abstraction is the process of hiding implementation details using private field and showing only the necessary functionality to the user.

```ts
class BankAccount {
  private balance: number;  // TS private field

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds!");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 1300
```
here, User doesn’t need to know how #balance is stored or updated internally. They just call deposit/withdraw.

```ts
// using interface
interface MediaPlayer {
    play(): void
    pause(): void
    stop(): void
}

class MusicPlayer implements MediaPlayer {
    play() {
        console.log("Playing Music....")
    }
    pause() {
        console.log("Music paused....")
    }
    stop() {
        console.log("Music Stopped...")
    }
}

const customPlayer = new MusicPlayer()
customPlayer.play()
```

```ts
// using abstract class and methods
abstract class MediaPlayer {
    abstract play(): void
    abstract pause(): void
    abstract stop(): void
}

class MusicPlayer extends MediaPlayer {
    play() {
        console.log("Playing Music....")
    }
    pause() {
        console.log("Music paused....")
    }
    stop() {
        console.log("Music Stopped...")
    }
}

const customPlayer = new MusicPlayer()
customPlayer.play()
```

```ts
abstract class Vehicle {
    abstract start(): void; // abstract method (no body)
    
    stop() {
        console.log("Vehicle stopped.");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Car engine started.");
    }
}

const c = new Car();
c.start(); // ✔
c.stop();  // ✔
```

##### Difference Between Encapsulation and Abstraction: 

| Encapsulation                     | Abstraction                                    |
| --------------------------------- | ---------------------------------------------- |
| Protect/hide object’s data        | Hide complexity, expose only necessary details |
| getters/setters or public methods | Public methods                                 |


#### Inheritance: 

Inheritance is a process that allows a chaild class inherits properties and methods from a parent class using extends keyword and super() method.

here, 
- extends: Used to create a child class that inherits from a parent class. It sets up the prototype chain so the child class can access parent methods and properties.
- super(): Used inside the child class constructor to call the parent class constructor.
  
```js
class Animal {
  public type: string;

  constructor(type: string) {
    this.type = type;
  }

  makeSound(): void {
    console.log(`${this.type} makes a sound`);
  }
}

class Dog extends Animal {
  public breed: string;

  constructor(breed: string) {
    super("Dog"); // call parent constructor
    this.breed = breed;
  }

  describe(): void {
    console.log(`This is a ${this.breed} of type ${this.type}`);
  }
}

const dog = new Dog("Labrador");
dog.describe();    // This is a Labrador of type Dog
dog.makeSound();   // Dog makes a sound
```
here, Child class inherits properties and methods from parent and can add its own functionality.

```ts
class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address
    }

    getSleep(hours: number) {
        console.log(`${this.name} sleep ${hours} a day`)
    }
}


class Student extends Parent { }

class Teacher extends Parent {
    designation: string; // own properties

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation
    }

    // own methods
    takeClass(numberOfClass: number) {
        console.log(`${this.name} ${numberOfClass} hours class nan`)
    }
}

const student1 = new Student("x", 20, "barisal")
student1.getSleep(15)

const teacher1 = new Teacher("y", 20, "dhaka", "Senior Teacher")
teacher1.takeClass(4)
```

#### Polymorphism: 
Polymorphism is the process that allows a child class to inherit methods from a parent class using the extends keyword, and lets the same method behave differently depending on the child class.

We can do Polymorphism using two ways: 
1. Methods Overriding: Child class changes parent method behavior.
2. Duck Typing(Interfae-Based): Different objects implement the same method name.

##### Using Methods Overriding: 
Child class changes parent method behavior.

```js
class Animal {
  makeSound(): void {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Cat meows");
  }
}

const dog: Dog = new Dog();
const cat: Cat = new Cat();

dog.makeSound(); // Dog barks
cat.makeSound(); // Cat meows
```
Here, makeSound() is overridden in each child class. Same method name behaves differently.

##### Using Duck Typing:
Different objects implement the same method name, allowing them to be used interchangeably.

```js
interface Vehicle {
  start(): void;
}

class Car implements Vehicle {
  start(): void {
    console.log("Car starts");
  }
}

class Bike implements Vehicle {
  start(): void {
    console.log("Bike starts");
  }
}

function startVehicle(vehicle: Vehicle): void {
  vehicle.start(); // works for any object with start()
}

const car = new Car();
const bike = new Bike();

startVehicle(car);  // Car starts
startVehicle(bike); // Bike starts
```
Here, any object with a start method can be passed to startVehicle, demonstrating polymorphism without inheritance.

```ts
class Person {
    getSleep() {
        console.log(`I am a normal person, I sleep for 8 hours`);
    }
}

class Student extends Person {
    getSleep() {
        console.log(`i am a student, i sleep 7 hours`);
    }
}

class NextLevelDeveloper extends Person {
    getSleep() {
        console.log(`I am a next level developer. I sleep for 6 hours`)
    }
}

const getSleepingHours = (param: Person) => {
    param.getSleep()
}

const person1 = new Person()
const person2 = new Student()
const person3 = new NextLevelDeveloper()

getSleepingHours(person1)
getSleepingHours(person2)
getSleepingHours(person3) 
```

```ts
class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        super()
        this.height = height
        this.width = width
    }
    getArea(): number {
        return this.height * this.width
    }
}

const getArea = (param: Shape) => {
    console.log(param.getArea())
}

const shape1 = new Shape()
const shape2 = new Circle(10)
const shape3 = new Rectangle(10, 20)

getArea(shape1)
getArea(shape2)
getArea(shape3)
```

```ts
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

function makeAnimalSpeak(a: Animal) {
    a.speak();
}

makeAnimalSpeak(new Dog()); // "Dog barks"
makeAnimalSpeak(new Cat()); // "Cat meows"
```