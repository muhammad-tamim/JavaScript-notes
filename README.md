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
      - [1.2.1.1. Hoisting](#1211-hoisting)
    - [1.2.2. Scope](#122-scope)
      - [1.2.2.1. Scope Chain](#1221-scope-chain)
    - [1.2.3. Variable naming conventions:](#123-variable-naming-conventions)
    - [1.2.4. How to write a long variable name](#124-how-to-write-a-long-variable-name)
  - [1.3. Operator](#13-operator)
    - [1.3.1. Arithmetic Operators (+, -, \*, /, %, \*\*):](#131-arithmetic-operators-------)
    - [1.3.2. Assignment Operators (=, +=, -=, \*=, /=):](#132-assignment-operators------)
    - [1.3.3. Increment / Decrement Operators (--, ++):](#133-increment--decrement-operators----)
      - [1.3.3.1. Pre Increment / Decrement:](#1331-pre-increment--decrement)
      - [1.3.3.2. post Increment / Decrement:](#1332-post-increment--decrement)
    - [1.3.4. Comparison Operator (\>, \<, \>=, \<=, ==, ===, !=, !==):](#134-comparison-operator--------)
      - [1.3.4.1. String comparison:](#1341-string-comparison)
      - [1.3.4.2. Difference between == and === :](#1342-difference-between--and--)
      - [1.3.4.3. Comparison with null and undefined:](#1343-comparison-with-null-and-undefined)
      - [1.3.4.4. null vs 0:](#1344-null-vs-0)
      - [1.3.4.5. undefined vs 0:](#1345-undefined-vs-0)
    - [1.3.5. Logical Operators (\&\&, ||, ! ,, !!):](#135-logical-operators-----)
    - [1.3.6. Conditional Operators (if, else, else if, ? :, switch, case):](#136-conditional-operators-if-else-else-if---switch-case)
      - [1.3.6.1. Ternary operator(? :):](#1361-ternary-operator-)
      - [1.3.6.2. switch...case:](#1362-switchcase)
      - [1.3.6.3. Truthy and Falsy values:](#1363-truthy-and-falsy-values)
    - [1.3.7. Others Operators](#137-others-operators)
      - [1.3.7.1. typeof operator:](#1371-typeof-operator)
      - [1.3.7.2. rest and spread operator:](#1372-rest-and-spread-operator)
        - [1.3.7.2.1. rest](#13721-rest)
          - [1.3.7.2.1.1. In function parameter:](#137211-in-function-parameter)
          - [1.3.7.2.1.2. In array destructuring:](#137212-in-array-destructuring)
          - [1.3.7.2.1.3. In object destructuring:](#137213-in-object-destructuring)
        - [1.3.7.2.2. spread](#13722-spread)
          - [1.3.7.2.2.1. In function call:](#137221-in-function-call)
          - [1.3.7.2.2.2. In Arrays](#137222-in-arrays)
          - [1.3.7.2.2.3. In Objects:](#137223-in-objects)
      - [1.3.7.3. Nullish Coalescing operator (??) :](#1373-nullish-coalescing-operator--)
        - [1.3.7.3.1. || vs ??:](#13731--vs-)
        - [1.3.7.3.2. You cannot mix ?? with || or \&\& without parentheses:](#13732-you-cannot-mix--with--or--without-parentheses)
  - [1.4. Loops](#14-loops)
    - [1.4.1. for loop:](#141-for-loop)
    - [1.4.2. while loop:](#142-while-loop)
    - [1.4.3. do while loop:](#143-do-while-loop)
    - [1.4.4. for..of loop ( for iterables) :](#144-forof-loop--for-iterables-)
    - [1.4.5. forEach method (only for array):](#145-foreach-method-only-for-array)
    - [1.4.6. for..in loop (for objects):](#146-forin-loop-for-objects)
  - [1.5. Iterables](#15-iterables)
  - [1.6. Data Types](#16-data-types)
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
    - [Quotes:](#quotes)
    - [String Property:](#string-property)
    - [String Methods:](#string-methods)
    - [Strings are immutable:](#strings-are-immutable)
  - [1.9. array](#19-array)

---



# 1. Part 1: The JavaScript Language

## 1.1. An Introduction to Javascript

### 1.1.1. What is JavaScript:

JavaScript is a: 
- scripting language 
  - A scripting language is a programming language that is executed by an interpreter, which translates and runs the code line by line (or step by step) at runtime, instead compiling the whole program into machine code beforehand.
    - Compile time → when the code is being converted into machine code (before execution start).
    - Runtime → when the  code is actually being executed line by line.
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
   - JIT(Just In Time) Compilation is a process where the JS engine detects frequently executed “hot” code and compiles it into machine code. On the future runs, the engines skips parsing, compiling AST to Bytecode and interpreting instead running the machine code directly for faster execution.     


### 1.1.5. Hello World

```console.log("Hello World");```

**What’s happened behind the code:**
- The statement sends to the JavaScript Engine
- Parsing
- Compiling AST to Bytecode
- Interpretation
- JIT Compilation (if applicable)
- Calling the log() method with "Hello World" as its argument inside the console object.
  - console is a global object provided by the environment (browser or Node.js)
  - log is a method of the console object.

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
    console.log(x); // output: Error
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
    console.log(x); // output: Error
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
console.log(b); // ReferenceError: Cannot access 'c' before initialization
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

#### 1.2.1.1. Hoisting

In JavaScript engines, interpreting happens in two main phases for each scope:

1.  Creation Phase (Memory/Hoisting Phase)

    - The engine scans the full code before execution starts and It registers all variable and function declarations in memory:
      - var → allocated and initialized with undefined
      - let / const → allocated but not initialized (TDZ)
      - Function declarations → fully allocated and initialized (can be called before declaration)

2. Execution Phase
The engine executes the code line by line, using the memory setup from the creation phase.

**Note:** Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope during the creation phase before execution.


### 1.2.2. Scope
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

4. Lexical Scope (Static Scope)
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

#### 1.2.2.1. Scope Chain
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

### 1.2.3. Variable naming conventions:
- Names must start with a letter, underscore _, or dollar sign $
- Names can contain letters, digits, _, and $ — but no spaces or symbols
- Names are Case-sensitive
- Names Cannot contain JavaScript reserved keywords

### 1.2.4. How to write a long variable name
- Snake Case - let my_current_home_address = "Barisal";
- Camel Case (recommended) - let myCurrentHomeAddress = "Barisal";
- Pascal Case - let MyCurrentHomeAddress = "Barisal";




## 1.3. Operator

An Operator is a special symbol or keyword that performs an operation on one or more values.

### 1.3.1. Arithmetic Operators (+, -, *, /, %, **):

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

**String concatenation with +:**

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

### 1.3.2. Assignment Operators (=, +=, -=, *=, /=):

```js
let x = 10;
x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2
```

### 1.3.3. Increment / Decrement Operators (--, ++):
#### 1.3.3.1. Pre Increment / Decrement:

```js
let i = 10;
let x = ++i;
console.log(i); // 11
console.log(x); // 11
```
Explanation: : Here, i is incremented to 11 first, and then this new value is assigned to x. Both i and x are 11 after this operation.

#### 1.3.3.2. post Increment / Decrement:

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

### 1.3.4. Comparison Operator (>, <, >=, <=, ==, ===, !=, !==):

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
#### 1.3.4.1. String comparison:

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

#### 1.3.4.2. Difference between == and === :

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

#### 1.3.4.3. Comparison with null and undefined:

```js
console.log(null === undefined); // false
console.log(null >= undefined); // false
console.log(null < undefined); // false
console.log(null == undefined); // true
// this is a special rule. If you use ==, null and undefined are considered equal.
```

#### 1.3.4.4. null vs 0:

```js
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true 
```

#### 1.3.4.5. undefined vs 0:

```js
console.log(undefined > 0); // false 
console.log(undefined < 0); // false 
console.log(undefined == 0); // false
// undefined is converted to NaN in numeric comparisons
```


### 1.3.5. Logical Operators (&&, ||, ! ,, !!):

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

### 1.3.6. Conditional Operators (if, else, else if, ? :, switch, case):

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

#### 1.3.6.1. Ternary operator(? :):

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

#### 1.3.6.2. switch...case:

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

#### 1.3.6.3. Truthy and Falsy values:

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

### 1.3.7. Others Operators

#### 1.3.7.1. typeof operator:

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

#### 1.3.7.2. rest and spread operator:

##### 1.3.7.2.1. rest
Rest gathers values into an array or object. It is used defining things like Function parameters, array destructuring, object destructuring.

###### 1.3.7.2.1.1. In function parameter:
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

###### 1.3.7.2.1.2. In array destructuring:

```js
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]
```

###### 1.3.7.2.1.3. In object destructuring:

```js
const user = { name: "Tamim", age: 21, country: "BD" };
const { name, ...rest } = user;

console.log(name); // Tamim
console.log(rest); // { age: 21, country: "BD" }
```

##### 1.3.7.2.2. spread
Spreads (breaks) an array or object into individual values. It is Used in Function calls, array literals and object literals.

###### 1.3.7.2.2.1. In function call:

```js
function greet(a, b, c) {
    console.log(a, b, c);
}

const args = [1, 2, 3];
greet(args); // [ 1, 2, 3 ] undefined undefined
greet(...args); // 1 2 3
console.log(...args) // 1 2 3
```

###### 1.3.7.2.2.2. In Arrays

```js
const num1 = [1, 2];
const num2 = [3, 4];
const all = [...num1, ...num2];
console.log(all); // [1, 2, 3, 4]

console.log(...all) // 1 2 3 4
console.log(Math.max(...all)) // 4
console.log(Math.min(...all)) // 1
```

###### 1.3.7.2.2.3. In Objects:

```js
const user1 = { name: "Tamim" };
const user2 = { age: 21 };
const merged = { ...user1, ...user2 };
console.log(merged); // { name: "Tamim", age: 21 }
```


#### 1.3.7.3. Nullish Coalescing operator (??) :
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

##### 1.3.7.3.1. || vs ??:

```js
let value1 = 0;
let result1 = value1 || 100;
let result2 = value1 ?? 100;

console.log(result1); // 100 (because 0 is falsy)
console.log(result2); // 0   (because 0 is NOT null or undefined)
```

##### 1.3.7.3.2. You cannot mix ?? with || or && without parentheses:

```js

// SyntaxError:
let result = null || undefined ?? "Default";

// Fix:
let result = (null || undefined) ?? "Default";
```







## 1.4. Loops

### 1.4.1. for loop:

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

### 1.4.2. while loop:

```js
let i = 0;
while (i < 5) {
    console.log(i); // 0 1 2 3 4
    i++;
}
```

### 1.4.3. do while loop:

```js
let i = 0;
do {
    console.log(i); // 0 1 2 3 4
    i++;
} while (i < 5);
```

### 1.4.4. for..of loop ( for iterables) :

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

### 1.4.5. forEach method (only for array):

```js
const nums = [1, 2, 3];
nums.forEach(function (num) {
    console.log(num); // 1 2 3
});

// or

const num2 = [4, 5, 6];
num2.forEach(num2 => console.log(num2)) // 4 5 6
Note: It does not support break or continue.
```

### 1.4.6. for..in loop (for objects):

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

**Iterable:** An iterable(array, string) is something that you can use in a for...of loop to get values one by one.

Or you can say:

If we use a for...of loop on arrays or strings, we get one value at a time — That’s because arrays and strings are iterables, and the act of looping one-by-one is called iteration.


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


## 1.6. Data Types

A data type defines the kind of value a variable can hold (like a Number, String, Boolean, etc.)

JavaScript is a dynamically typed language, which means:
- You don’t have to declare the type of a variable.
- The type is determined automatically based on the value you assign.

```js
let message = "hello"; // string
message = 123456;      // number
```

There are 8 data types in JavaScript:

7 Primitive Data Types:
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

**Type conversion methods:**

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

1 Non-Primitive(object) Data Types:

8. Object
    - function 
    - array
    - object

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

string Represents text, enclosed in single or double quotes.  

```js
let name = "Tamim";
let myName = 'tamim';
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

    ```str.padStart(targetLength, padString)```

    - targetLength → the final desired length of the string.
    - padString → the character(s) to add at the start (default is space " " if not specified).

    ```js
        let num = "5";
        console.log(num.padStart(3, "0")); // "005"
    ```

    - Original string: "5" (length 1)
    - Target length: 3
    - Pad with "0" at the start until length becomes 3 → "005"

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


## 1.9. array

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






