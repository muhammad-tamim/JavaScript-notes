<h1 align="center">JavaScript Notes</h1>

<h2>Table of Contents</h2>

<ul>
  <li><a href="#part-1-the-javascript-language">Part 1: The JavaScript Language</a></li>
   <ul>
    <li><a href="#chapter-1-an-introduction">Chapter 1: An Introduction</a></li>
    <ul >
        <li><a href="#1-an-introduction-to-javaScript">1.1 An Introduction to JavaScript</a></li>
        <ul>
            <li><a href="#what-is-javascript">What Is JavaScript</a></li>
            <li><a href="#javascript-history">JavaScript History</a></li>
            <li><a href="#why-did-javascript-need-a-standard-version">Why Did JavaScript Need a Standard Version</a></li>
            <li><a href="#javascript-engines">JavaScript Engines</a></li>
        </ul>
    </ul>
   <li><a href="#chapter-2-javascript-fundamentals">Chapter 2: JavaScript Fundamentals</a></li>
   <ul >
        <li><a href="#2.1-hello-world">2.1 Hello, world!</a></li>
        <ul>
            <li><a href="#whats-happened-behind-the-code">What’s happened behind the code</a></li>
        </ul>
        <li><a href="#2.2-code-structure">2.2: Code structure</a></li>
        <ul>
            <li><a href="#what-is-the-difference-between-statement-program-and-code">What is the difference between statement, program and code</a></li>
            <li><a href="#semicolons">Semicolons</a></li>
        </ul>
         <li><a href="#2-3-variables">2.3: variables</a></li>
         <ul>
            <li><a href="#difference-between-var-and-let">Difference between var and let</a></li>
            <li><a href="#var-hoisting-issue">var hoisting issue</a></li>
        </ul>
    </ul>
  </ul>
  <li><a href="#part-2-browser-document-events-interfaces">Part 2: Browser: Document, Events, Interfaces</a></li>
  <li><a href="#part-3-additional-articles">Additional articles</a></li>
</ul>
<hr>

<!-- part 1: -->
<h1 id="#part-1-the-javascript-language" align="center">Part 1: The JavaScript Language</h1>

<!-- chapter 1: -->
<h2 id="chapter-1-an-introduction" align="center">Chapter 1: An Introduction</h2>

<!-- 1. -->
<h3 id="1-an-introduction-to-javaScript" align="center">1.1 An Introduction to JavaScript</h3>

<h3 id="what-is-javascript">What is JavaScript:</h3>
<p>JavaScript is a programming language for the web. The programs in JavaScript are called scripts because they are small, dynamic, and interpreted pieces of code designed to run in the browser without compiling the entire program.</p>
<p>JavaScript code is written and send to the browser as plain text, not compiled machine code. Unlike some other programming languages (such as C, C++, or Java) that require compilation of the whole program before running, JavaScript is interpreted and just-in-time compiled in the browser at runtime. In this way, JavaScript is fundamentally different from compiled languages like C, C++, and Java, which need to be processed by a compiler before running.</p>

<h3 id="javascript-history">JavaScript History:</h3>
<p>In 1995, Brendan Eich, a developer at Netscape Communications Corporation, created JavaScript. Eich initially joined Netscape with the intention of implementing the Scheme programming language in the browser. However, Netscape’s management wanted the Scheme language syntax resemble and look similar to Java. As a result, Eich decided to designed a new language that combined:</p>
<ul>
  <li>The functionality of Scheme programming language</li>
  <li>The object-orientation of Self programming language</li>
  <li>And The syntax of Java programming language</li>
</ul>
<p>He completed the first version of the language called Mocha (the internal name during early development by Brendan Eich at Netscape; it was never officially released under this name) in just 10 days in May 1995.</p>
<ul>
  <li><strong>LiveScript (September 1995)</strong> – The first version of the language released to the public was called LiveScript, included with the beta version of Netscape Navigator 2.0 Browser.</li>
  <p><strong>Note:</strong> Alongside the language, Eich also built the first JavaScript engine, called SpiderMonkey, written in C, to run LiveScript in the Navigator browser.</p>
</ul>
<ul>
  <li><strong>JavaScript (December 1995)</strong> – The final name, officially announced in collaboration with Sun Microsystems</li>
  <li><strong>ES1 (1997)</strong> - First official standardized version of JavaScript</li>
</ul>
<p><strong>Note:</strong><br>
In June 1997 JavaScript was submitted to ECMA (European Computer Manufacturers Association) International to create a standard version of the language, so all browsers could implement it consistently.<br>
So, ECMAScript is the official name of the JavaScript standard and ES1, ES2, ES6 etc. are its version numbers.</p>

<h3 id="why-did-javascript-need-a-standard-version">Why Did JavaScript Need a Standard Version:</h3>
<p>When JavaScript was first created in 1995 by Netscape, it was only implemented in their browser Netscape Navigator. Shortly, Microsoft launched its own browser, Internet Explorer, and included its own version of JavaScript called JScript. As a result, two distinct versions of JavaScript were emerged in the market:</p>
<ul>
  <li>JavaScript in Netscape Navigator</li>
  <li>JScript in Internet Explorer</li>
</ul>
<p><strong>The Problems:</strong></p>
<ul>
  <li>Different browsers had slightly different implementations of JavaScript.</li>
  <li>Some features worked in one browser but not in another.</li>
  <li>This caused a lot of bugs and confusion for web developers.</li>
  <li>Developers had to write browser-specific code, which made websites harder to build and maintain.</li>
</ul>
<p><strong>The Solution:</strong><br>
To solve this problem, Netscape submitted JavaScript to ECMA International in June 1997, so they could create a standardized specification of the language. This standard was named ECMAScript.</p>
<p><strong>Purpose of ECMAScript:</strong></p>
<ul>
  <li>Make sure all browsers follow the same rules for JavaScript.</li>
  <li>Allow developers to write code that works consistently across all browsers.</li>
  <li>Ensure the future growth and evolution of the language.</li>
</ul>

<h3 id="javascript-engines">JavaScript Engines:</h3>
<p>A JavaScript engine is a program built into web browsers (and platforms like Node.js) that is responsible for executing JavaScript code.</p>
<p>It takes the JavaScript you write, then:</p>
<ol>
  <li>Parse (JavaScript engine turns your code into an AST)</li>
  <li>Compile to Bytecode (The AST is compiled into bytecode, an intermediate form between your original JavaScript code and the machine code your computer’s CPU understands.)</li>
  <li>Interpret (The engine executes the bytecode step-by-step using an interpreter.)</li>
  <li>JIT Compilation (The engine detects frequently executed “hot” code and compiles it into machine code. On subsequent runs, it skips parsing and interpreting these parts, running the machine code directly for much faster execution.)</li>
</ol>

<p><strong>Key Concepts:</strong></p>
<ul>
  <li><strong>Abstract Syntax Tree (AST):</strong><br>
  An AST is a tree-like structure that represents the syntax and structure of your code.<br>
  Each part of your code becomes a node, and all nodes are connected to each other in a hierarchy — just like branches in a tree.</li>
</ul>

<p><strong>Example:</strong></p>
<p><strong>JS Code:</strong><br>
<code>let x = 5 + 3;</code></p>

<p><strong>Abstract Syntax Tree (AST):</strong></p>
<pre>
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
</pre>

<p>Here, every "type" in the AST (e.g., "Program", "VariableDeclaration", "Literal") is a node.</p>
<hr>

<!-- chapter 2 -->
<h2 id="chapter-2-javascript-fundamentals" align="center">Chapter 2: JavaScript Fundamentals</h2>

<!-- 2.1 -->
<h3 id="2.1-hello-world" align="center">2.1: Hello, world!</h3>

<pre><code>console.log("Hello World");
</code></pre>

<h3 id="whats-happened-behind-the-code">What’s happed behind the code:</h3>
<ol>
  <li>The statement sends to the JavaScript Engine</li>
  <li>Parsing</li>
  <li>Compiling AST to Bytecode</li>
  <li>Interpretation (The engine executes the bytecode step-by-step using an interpreter.)</li>
  <li>JIT Compilation</li>
  <li>Calling the <code>log()</code> function:
    <ul>
      <li><code>console</code> is a global object</li>
      <li><code>log</code> is a property of the <code>console</code> object, and its value is a function.</li>
    </ul>
  </li>
</ol>

<p>So, <code>console.log("Hello World")</code> is a function call with the string <code>"Hello World"</code> as an argument.</p>

<p>The <code>log()</code> function takes the argument and tells the engine to print it to the DevTools console or the Node.js terminal.</p>

<hr>


<!-- 2.2 -->
<h3 id="2.2-code-structure" align="center">2.2: Code structure</h3>

<h3 id="what-is-the-difference-between-statement-program-and-code">What is the difference between statement, program and code:</h3>

<ul>
  <li><strong>statement:</strong> A single instruction in a programming language that performs an action.</li>
  <li><strong>code:</strong> Any written instructions in a programming language, from one line to many.</li>
  <li><strong>program:</strong> A complete set of code written in a programming language to solve a problem or perform a task.</li>
</ul>

<h3 id="semicolons">Semicolons:</h3>
<p>In most cases, semicolons are optional in JavaScript because the language uses a feature called Automatic Semicolon Insertion (ASI) to handle missing semicolons.</p>

<p>For example, this code works perfectly fine without them:</p>

<pre><code>console.log('Hello')
console.log('World')
</code></pre>

<p>But there are cases where ASI fails, which can lead to unexpected behavior or even errors.<br>
Take this example:</p>

<pre><code>console.log("Hello")
[1, 2].map(n => console.log(n));
</code></pre>

<p>This code shows an error like this: </p>
<img src="images/image1.png" alt="semicolons missing error image">

<p>The reason we got an error because without a semicolon after <code>console.log("Hello")</code> statement, JavaScript merges the next line into the same statement, like this:</p>

<pre><code>console.log("Hello")[1, 2].map(n => console.log(n));
</code></pre>

<p>and this is not a valid statement in JavaScript, but if you used proper semicolon after <code>console.log("hello")</code>, it will work completely fine as expected:</p>

<pre><code>console.log("Hello");
[1, 2].map(n => console.log(n));
</code></pre>
<img src="images/image2.png" alt="output image">

<hr>

<!-- 2.3 -->
<h3 id="2-3-variables" align="center">2.3: Variables</h3>

<p>A variable is a “named storage” for data. We can declare variables to store data by using the keywords (A keyword is a reserved word that has a special meaning in the language):</p>

<ul>
  <li>var: the old way to declare variables (function-scoped or global-scoped if not function-scoped, can be redeclared and updated in the same scope).</li>
  <li>let: the modern way to declare variables (block-scoped, can be updated but not redeclared in the same scope).</li>
  <li>const: declares constant variables (block-scoped, cannot be reassigned or redeclared; must be initialized at the time of declaration).</li>
</ul>

<p><strong>Variable Declaration:</strong></p>
<pre><code>let message;
</code></pre>

<p><strong>Variable Initialization:</strong></p>
<pre><code>let message = 'Hello World';
</code></pre>

<p><strong>Variable assignment:</strong></p>
<pre><code>let message = 'Hello World';
message = 'Hello Universe'
</code></pre>

<p><strong>Note:</strong> initialization gives a variable its first value, while assignment gives a variable a new value after it has been initialized.</p>

<h3 id="difference-between-var-and-let">Difference between <code>var</code> and <code>let</code>:</h3>

<table>
  <thead>
    <tr>
      <th><code>var</code></th>
      <th><code>let</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        var is function scope:<br><br>
        It means a variable declared with var is accessible anywhere inside the same function, no matter which block it was declared in.
        <pre><code>function testScope() {
    if (true) {
        var x = 10;
    }
    console.log(x); // output: 10 
}
testScope();</code></pre>
      </td>
      <td>
        let is block-scoped:<br><br>
        It means a variable declared with let is accessible only inside the block {} where it is declared.
        <pre><code>function testScope() {
    if (true) {
        let x = 10;
    }
    console.log(x); // output: Error
}
testScope();</code></pre>
      </td>
    </tr>
    <tr>
      <td>
        Global-scoped (if not in a function):<br><br>
        If you declare a variable using var outside any function, even inside a block (like if, for), it becomes globally scoped.
        <pre><code>if (true) {
    var test = true; 
}
console.log(test); // output: true</code></pre>
      </td>
      <td>
        Still block-scoped:<br><br>
        let remains limited to the block, even when declared outside any function.
        <pre><code>if (true) {
    let test = true;
}
console.log(test); // output: error</code></pre>
      </td>
    </tr>
    <tr>
      <td>
        Allows redeclaration:
        <pre><code>var user = 'tamim';
var user;
user = 'Muhammad Tamim'
console.log(user) // Output: Muhammad Tamim</code></pre>
      </td>
      <td>
        Does not allow redeclaration:
        <pre><code>let user;
let user; // SyntaxError:</code></pre>
      </td>
    </tr>
  </tbody>
</table>

<h3 id="var-hoisting-issue">var hoisting issue:</h3>

<p>In JavaScript, var declarations are hoisted — this means the declaration is moved to the top of the function (or top of the global scope if outside a function) during the JavaScript parsing phase.</p>

<h4>Example 1:</h4>

<pre><code>function sayHi() {
    phrase = "Hello";
    console.log(phrase);

    var phrase;
}
sayHi(); // Output: "Hello"
</code></pre>

<pre><code>/**
 * Behind the scene:
 function sayHi() {
  var phrase;         // Declaration is hoisted
  phrase = "Hello";   // Assignment stays in place
  console.log(phrase);
}
 */</code></pre>

<h4>Example 2:</h4>

<pre><code>function sayHi() {
    phrase = "Hello"; 

    if (false) {
        var phrase; 
    }

    console.log(phrase);
}
sayHi(); // ✅ Output: "Hello"
</code></pre>

<h4>Example 3:</h4>

<pre><code>function sayHi() {
    console.log(phrase);

    var phrase = "Hello";
}
sayHi(); // Output: undefined
</code></pre>

<pre><code>/**
 *Behind the scene:
 function sayHi() {
  var phrase;           // Hoisted declaration
  console.log(phrase);  //  undefined (no value yet)
  phrase = "Hello";     // Assignment happens here
} 
 */</code></pre>
