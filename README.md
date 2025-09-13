<h1 align="center">JavaScript Notes</h1>


- [1. Part 1: The JavaScript Language](#1-part-1-the-javascript-language)
  - [1.1. An Introduction to Javascript](#11-an-introduction-to-javascript)
    - [1.1.1. What is JavaScript:](#111-what-is-javascript)
    - [1.1.2. JavaScript History:](#112-javascript-history)
    - [1.1.3. Why Did JavaScript Need a Standard Version:](#113-why-did-javascript-need-a-standard-version)
    - [1.1.4. JavaScript Engines:](#114-javascript-engines)
    - [1.1.5. Hello World](#115-hello-world)

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






