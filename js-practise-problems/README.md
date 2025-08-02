<h1 align="center">JavaScript Practice Problems</h1>

<h2>Table of Contents:</h2>

<ul>

<li><a href="#part-1-the-javascript-language">Part 1: The JavaScript Language</a></li>

<ul>
<li><a href="#variables-problems">Variables Problems</a></li>
</ul>

<li><a href="#part-2-DOM">Part 2: Document Object Model</a></li>

</ul>
<hr>

<h1 id="part-1-the-javascript-language" align="center">Part 1: The JavaScript Language</h1>


<h1 id="variables-problems" align="center">Variables Problems</h1>
<ol>

<li>
<h4 id="favorite-fruit">Favorite Fruit:</h4>
<p>You declared a variable using const, but now want to change its value. Can you?</p>

<h4>Task:</h4>
<p>Declare a constant variable named fruit with an initial value. Try to reassign a new fruit to it and return the final value.</p>

<h4>Input:</h4>

<pre><code>A fruit name</code></pre>

<h4>Output:</h4>

<pre><code>Print the value of the fruit variable.</code></pre>

<h4>Solution:</h4>

<pre><code>
const fruit = "apple";

fruit = "mango";

console.log(fruit) // TypeError: Assignment to constant variable.
</code></pre>
</li>

<li>
<h4>Block Mystery:</h4>

<h4>Problem:</h4>
<p>You declare variables inside a block. Can you access them outside?</p>

<h4>Task:</h4>
<p>Inside a block, declare:</p>

<pre><code>
let x = 10;
var y = 20;
const z = 30;
</code></pre>
<p>Try logging x, y, and z outside the block.</p>

<h4>Output:</h4>

<pre><code>
ReferenceError: x is not defined
20
ReferenceError: z is not defined
</code></pre>

<h4>Solution:</h4>

<pre><code>
{
    let x = 10;
    var y = 20;
    const z = 30;
}

console.log(x);
console.log(y);
console.log(z);
</code></pre>
</li>


<li>
<h4>The Hoisted Message:</h4>

<h4>Problem:</h4>
<p>Predict what gets printed.</p>

<h4>Code:</h4>

<pre><code>
function printMessage() {
  console.log(message);
  var message = "Hello, World!";
}
printMessage();
</code></pre>


<h4>Solution:</h4>

<pre><code>
undefined
</code></pre>
</li>

<li>
<h4>What's My Scope?</h4>

<h4>Problem:</h4>
<p>Can you guess what gets logged?</p>

<h4>Code:</h4>

<pre><code>
var greeting = "Hi";

function sayHi() {
  var greeting = "Hello";
  console.log(greeting);
}

sayHi();
console.log(greeting);
</code></pre>


<h4>Solution:</h4>

<pre><code>
Hello
Hi
</code></pre>
</li>

<li>
<h4>Variable Collision:</h4>

<h4>Problem:</h4>
<p>What happens when you redeclare a variable?</p>

<h4>Code:</h4>

<pre><code>
var name = "Tamim";
var name = "Muhammad";
console.log(name);

let user = "Tamim";
let user = "Muhammad";
console.log(user);
</code></pre>


<h4>Solution:</h4>

<pre><code>
SyntaxError: Identifier 'user' has already been declared
</code></pre>
</li>

<li>
<h4>Loop Trap:</h4>

<h4>Problem:</h4>
<p>What does this loop print?</p>

<h4>Code:</h4>

<pre><code>
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
</code></pre>

<h4>Output:</h4>

<pre><code>
3
3
3
</code></pre>

<p>Now fix it using let to make it log 0 1 2</p>

<h4>Solution:</h4>

<pre><code>
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

/*
0
1
2  
*/
</code></pre>
</li>

<li>
<h4>Lexical Treasure Hunt:</h4>

<h4>Problem:</h4>
<p>Explore lexical scope.</p>

<h4>Code:</h4>

<pre><code>
let outer = "treasure";

function search() {
  function deep() {
    console.log(outer);
  }
  deep();
}

search();
</code></pre>

<h4>Output:</h4>

<pre><code>
treasure
</code></pre>

<p>Now, move let outer = "treasure"; inside search() and try again.</p>

<h4>Solution:</h4>

<pre><code>
function search() {
    let outer = "treasure";
    function deep() {
        console.log(outer);
    }
    deep();
}

search(); 

// treasure
</code></pre>
</li>

<li>
<h4>Hoisting Mystery:</h4>

<h4>Problem:</h4>
<p>Guess the output.</p>

<h4>Code:</h4>

<pre><code>
console.log(myVar);
var myVar = "Hoisted";
</code></pre>

<h4>Output:</h4>

<pre><code>
undefined
</code></pre>

<h4>Now try:</h4>

<pre><code>
console.log(myLet);
let myLet = "Not Hoisted";
</code></pre>

<h4>Output:</h4>

<pre><code>
ReferenceError: Cannot access 'myLet' before initialization
</code></pre>
</li>

<li>
<h4> Block vs Function Scope Challenge:</h4>

<h4>Problem:</h4>
<p>Find the value of x.</p>

<h4>Code:</h4>

<pre><code>
function test() {
  if (true) {
    var x = 5;
  }
  console.log(x);
}

test();
</code></pre>

<h4>Output:</h4>

<pre><code>
5
</code></pre>

<p>Now change var to let and try again.</p>

<h4>Solution:</h4>

<pre><code>
function test() {
    if (true) {
        let x = 5;
    }
    console.log(x);
}

test();

// ReferenceError: x is not defined
</code></pre>
</li>


<li>
<h4> Global Confusion:</h4>

<h4>Problem:</h4>
<p>Check which variables are accessible globally.</p>

<h4>Code:</h4>

<pre><code>
if (true) {
  var status = "visible";
  let mode = "private";
}

console.log(status);
console.log(mode);
</code></pre>

<h4>Output:</h4>

<pre><code>
ReferenceError: mode is not defined
</code></pre>
</li>

<li>
<h4>Dynamic Variable Assignment:</h4>

<h4>Problem:</h4>
<p>What's printed?</p>

<h4>Code:</h4>

<pre><code>
let a;
console.log(a);
a = 10;
a = 20;
console.log(a);
</code></pre>

<h4>Output:</h4>

<pre><code>
undefined
20
</code></pre>
</li>

<li>
<h4>Scope Chain Adventure</h4>

<h4>Problem:</h4>
<p>Trace the scope.</p>

<h4>Code:</h4>

<pre><code>
let a = "Global";

function outer() {
  let b = "Outer";

  function inner() {
    let c = "Inner";
    console.log(a);
    console.log(b);
    console.log(c);
  }

  inner();
}
outer();
</code></pre>

<h4>Output:</h4>

<pre><code>
Global
Outer
Inner
</code></pre>
</li>

<li>
<h4>Constants Confusion:</h4>

<h4>Problem:</h4>
<p>Can we update the value inside a const object?</p>

<h4>Code:</h4>

<pre><code>
const person = {
  name: "Tamim"
};

person.name = "Muhammad Tamim";
console.log(person.name);
</code></pre>

<h4>Output:</h4>

<pre><code>
Muhammad Tamim
</code></pre>

<p>Note: You can't reassign person = {} but you can mutate its properties.</p>

</li>

</ol>
<hr>




<!-- <h1 id="part-2-DOM" align="center">Part 2: Document Object Model</h1> -->