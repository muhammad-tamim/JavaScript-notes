<h1 align="center">JS Practice Problems</h1>

<h2>Table of Contents:</h2>

<ul>

<li><a href="#part-1-the-javascript-language">Part 1: The JavaScript Language</a></li>

<ul>
<li><a href="#operator-problems">Operator Problems</a></li>
<li><a href="#loops-problems">Loop Problems</a></li>
<li><a href="#string-problems">String Problems</a></li>
<li><a href="#object-problems">Object Problems</a></li>
<li><a href="#function-problems">Function Problems</a></li>
<li><a href="#array-problems">Array Problems</a></li>
<li><a href="#map-problems">Map Problems</a></li>
<li><a href="#set-problems">Set Problems</a></li>
<li><a href="#class-problems">class Problems</a></li>
<li><a href="#error-handling-problems">Error Handling Problems</a></li>
<li><a href="#js-modules-problems">JS Modules Problems</a></li>
<li><a href="#regular-expression-problems">Regular Expression Problems</a></li>
<li><a href="#async-sync-problems">Asynchronous and Synchronous Problems</a></li> 
</ul>

<li><a href="#part-2-DOM">Part 2: Document Object Model</a></li>

</ul>
<hr>

<h1 id="part-1-the-javascript-language" align="center">Part 1: The JavaScript Language</h1>


<h1 id="operator-problems" align="center">Operator Problems</h1>

<!-- start -->
## Problem A: Basic Calculator
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
You are given two integers `a` and `b`, and a character `op` representing an arithmetic operation. Perform the operation and output the result.

The operations are:
- `+` for addition
- `-` for subtraction  
- `*` for multiplication
- `/` for division (output with 1 decimal place)
- `%` for modulo
- `**` for exponentiation

### Input
First line contains two integers `a` and `b` (-1000 ≤ a, b ≤ 1000).
Second line contains a single character `op`.

### Output
Output the result of `a op b`. For division, round to 1 decimal place.

### Sample Input
```
10 3
**
```

### Sample Output
```
1000
```

---

## Problem B: String Concatenation Mystery
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
JavaScript has peculiar behavior when mixing numbers and strings with the `+` operator. Given a sequence of operands (numbers or strings), calculate the final result when evaluated from left to right.

### Input
First line contains integer `n` (1 ≤ n ≤ 100) - number of operands.
Second line contains `n` space-separated operands. Each operand is either an integer or a string (enclosed in quotes).

### Output
Output the final result after all operations.

### Sample Input
```
4
2 2 "1" 3
```

### Sample Output
```
413
```

### Explanation
2 + 2 = 4, then 4 + "1" = "41", then "41" + 3 = "413"

---

## Problem C: Assignment Chain
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given an initial value `x` and a sequence of assignment operations, calculate the final value of `x`.

Operations are: `+=`, `-=`, `*=`, `/=`

### Input
First line contains integer `x` (1 ≤ x ≤ 1000).
Second line contains integer `n` (1 ≤ n ≤ 100) - number of operations.
Next `n` lines contain operation and value: `op val` where `op` is one of the assignment operators and `val` is an integer.

### Output
Output the final value of `x` (round to nearest integer if needed).

### Sample Input
```
10
3
+= 5
*= 2
/= 3
```

### Sample Output
```
10
```

### Explanation
x = 10, x += 5 → x = 15, x *= 2 → x = 30, x /= 3 → x = 10

---

## Problem D: Increment Predictor
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a variable `i` with initial value and a sequence of pre/post increment/decrement operations, predict the final values of both `i` and the assigned variables.

### Input
First line contains integer `i` (1 ≤ i ≤ 1000).
Second line contains integer `n` (1 ≤ n ≤ 100) - number of operations.
Next `n` lines contain operations in format: `var = operation` where `operation` is one of `++i`, `i++`, `--i`, `i--`.

### Output
Output `n+1` lines: first line contains final value of `i`, next `n` lines contain values of assigned variables in order.

### Sample Input
```
5
2
x = ++i
y = i++
```

### Sample Output
```
7
6
6
```

---

## Problem E: Comparison Judge
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
You are given two values and a comparison operator. Determine if the comparison is true or false.

Values can be numbers, strings, booleans, null, or undefined.

### Input
First line contains two values `a` and `b` (can be numbers, strings in quotes, `true`, `false`, `null`, `undefined`).
Second line contains comparison operator: `>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`.

### Output
Output `true` or `false`.

### Sample Input
```
5 "5"
===
```

### Sample Output
```
false
```

---

## Problem F: Lexicographical Battle
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given `n` strings, sort them according to JavaScript's lexicographical comparison rules and output the sorted list.

### Input
First line contains integer `n` (1 ≤ n ≤ 1000).
Next `n` lines contain strings (length ≤ 100 each).

### Output
Output the strings in lexicographically sorted order.

### Sample Input
```
4
Glow
Glee
apple
Apple
```

### Sample Output
```
Apple
Glee
Glow
apple
```

---

## Problem G: Null and Undefined Chaos
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
JavaScript has special rules for comparing `null` and `undefined`. Given a comparison involving these values, predict the result.

### Input
First line contains two values: each is either a number, `null`, or `undefined`.
Second line contains comparison operator.

### Output
Output `true` or `false`.

### Sample Input
```
null undefined
==
```

### Sample Output
```
true
```

---

## Problem H: Logical Circuit
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
You are given a logical expression with variables and operators `&&`, `||`, `!`. Evaluate the expression.

Variables can be any JavaScript value. Remember JavaScript's truthy/falsy rules.

### Input
First line contains integer `n` (1 ≤ n ≤ 26) - number of variables.
Next `n` lines contain variable assignments: `var = value`.
Last line contains the logical expression using these variables.

### Output
Output `true` or `false`.

### Sample Input
```
3
a = 0
b = "hello"
c = null
a || (b && !c)
```

### Sample Output
```
true
```

---

## Problem I: Double Negation Master
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a value, determine its boolean conversion using the double negation operator `!!`.

### Input
One line containing a value (can be number, string in quotes, `true`, `false`, `null`, `undefined`, `NaN`, empty string `""`, or `0`).

### Output
Output `true` or `false`.

### Sample Input
```
""
```

### Sample Output
```
false
```

---

## Problem J: Conditional Maze
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
You are given a nested if-else structure with conditions and need to determine which branch executes.

### Input
First line contains integer `age`.
The program logic is:
```
if (age < 13) return "child"
else if (age < 20) return "teenager"  
else if (age < 60) return "adult"
else return "senior"
```

### Output
Output the corresponding category.

### Sample Input
```
25
```

### Sample Output
```
adult
```

---

## Problem K: Ternary Chain
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Evaluate a chain of ternary operators. Given three integers `a`, `b`, `c`, evaluate:
`a > b ? (b > c ? a : c) : (a > c ? b : c)`

### Input
One line with three integers `a`, `b`, `c` (-1000 ≤ a,b,c ≤ 1000).

### Output
Output the result of the ternary expression.

### Sample Input
```
5 3 8
```

### Sample Output
```
8
```

---

## Problem L: Switch Case Router
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
You have a switch statement that routes commands. Given a command and its cases, determine the output.

### Input
First line contains a string `command`.
The switch logic is:
- "start" → "Starting system"
- "stop" → "Stopping system"  
- "restart" → "Restarting system"
- "status" → "System running"
- default → "Unknown command"

### Output
Output the corresponding message.

### Sample Input
```
pause
```

### Sample Output
```
Unknown command
```

---

## Problem M: Falsy Counter
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given an array of values, count how many are falsy according to JavaScript rules.

Falsy values: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

### Input
First line contains integer `n` (1 ≤ n ≤ 1000).
Next `n` lines contain values (numbers, strings in quotes, booleans, `null`, `undefined`, `NaN`).

### Output
Output the count of falsy values.

### Sample Input
```
5
0
"hello"
null
false
42
```

### Sample Output
```
3
```

---

## Problem N: Type Detective
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a value, determine its type using the `typeof` operator.

### Input
One line containing a value.

### Output
Output the typeof result.

### Sample Input
```
null
```

### Sample Output
```
object
```

---

## Problem O: Rest Parameter Collector
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Simulate a function with rest parameters. Given a list of arguments, the first argument is special, and the rest should be collected into an array.

### Input
First line contains integer `n` (1 ≤ n ≤ 100) - total arguments.
Next line contains `n` space-separated integers.

### Output
First line: the first argument.
Second line: remaining arguments as comma-separated values (or "empty" if none).

### Sample Input
```
4
2 1 3 5
```

### Sample Output
```
2
1,3,5
```

---

## Problem P: Spread Operator Magic
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
You have two arrays and need to merge them using spread operator logic.

### Input
First line contains integer `n` (1 ≤ n ≤ 100) - size of first array.
Second line contains `n` integers.
Third line contains integer `m` (1 ≤ m ≤ 100) - size of second array.
Fourth line contains `m` integers.

### Output
Output the merged array as comma-separated values.

### Sample Input
```
3
1 2 3
2
4 5
```

### Sample Output
```
1,2,3,4,5
```

---

## Problem Q: Nullish Coalescing Champion
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a chain of values separated by `??` operators, find the first non-nullish value.

### Input
First line contains integer `n` (1 ≤ n ≤ 100) - number of values.
Next `n` lines contain values (can be numbers, strings in quotes, `null`, `undefined`).

### Output
Output the first non-nullish value, or "all nullish" if all are null/undefined.

### Sample Input
```
4
null
undefined
0
"hello"
```

### Sample Output
```
0
```

---

## Problem R: OR vs Nullish Coalescing
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Compare the results of `||` and `??` operators with the same operands.

### Input
Two lines, each containing a value (number, string in quotes, `null`, `undefined`, boolean).

### Output
Two lines:
- Result of `value1 || value2`
- Result of `value1 ?? value2`

### Sample Input
```
0
"default"
```

### Sample Output
```
default
0
```

---

## Problem S: Mixed Operators Challenge
**Time Limit:** 2 seconds  
**Memory Limit:** 256 MB

### Problem Statement
You are given a complex expression involving multiple operator types. Evaluate it step by step.

Given: `a`, `b`, `c` (integers), and a string `s`.
Evaluate: `(a++ * ++b) + (s || "default").length + (c ?? 100)`

### Input
First line contains three integers `a`, `b`, `c`.
Second line contains string `s` (in quotes, or "null" for null value).

### Output
Three lines:
- Final values of `a` and `b` after increment operations
- Result of the entire expression

### Sample Input
```
5 2 0
"test"
```

### Sample Output
```
6 3
19
```

### Explanation
- a++ * ++b = 5 * 3 = 15 (a becomes 6, b becomes 3)
- (s || "default").length = "test".length = 4
- c ?? 100 = 0 ?? 100 = 0 (since 0 is not nullish)
- Total: 15 + 4 + 0 = 19
<!-- end -->

<hr>


<h1 id="loops-problems" align="center">Loops Problems</h1>

<!-- start -->
## Problem A: Basic For Loop Counter
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
You are given two integers `start` and `end`. Print all integers from `start` to `end` (inclusive) using a for loop.

### Input
One line containing two integers `start` and `end` (-100 ≤ start ≤ end ≤ 100).

### Output
Print all integers from `start` to `end`, each on a new line.

### Sample Input
```
3 7
```

### Sample Output
```
3
4
5
6
7
```

---

## Problem B: Skip and Break Challenge
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given three integers `n`, `skip`, and `stop`, print numbers from 1 to `n` but:
- Skip (continue) all numbers divisible by `skip`
- Stop (break) when you encounter the number `stop`

### Input
One line containing three integers `n`, `skip`, `stop` (1 ≤ n ≤ 1000, 1 ≤ skip ≤ 10, 1 ≤ stop ≤ n).

### Output
Print the numbers according to the rules, each on a new line.

### Sample Input
```
15 3 12
```

### Sample Output
```
1
2
4
5
7
8
10
11
```

### Explanation
Skip multiples of 3 (3, 6, 9), and break when reaching 12.

---

## Problem C: While Loop Countdown
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
You are given a positive integer `n`. Create a countdown from `n` to 1 using a while loop, but only print numbers that are either odd or divisible by 4.

### Input
One line containing integer `n` (1 ≤ n ≤ 100).

### Output
Print the valid numbers in descending order, each on a new line.

### Sample Input
```
12
```

### Sample Output
```
12
11
9
8
7
5
4
3
1
```

---

## Problem D: Do-While Validation
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
You have a number `x`. Keep doubling it using a do-while loop until it becomes greater than or equal to a target value `target`. Count how many doublings were needed.

### Input
One line containing two integers `x` and `target` (1 ≤ x < target ≤ 10^6).

### Output
Print two lines:
- First line: the final value of `x`
- Second line: number of doublings performed

### Sample Input
```
3 50
```

### Sample Output
```
96
6
```

### Explanation
3 → 6 → 12 → 24 → 48 → 96 (6 doublings)

---

## Problem E: Array Iterator
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given an array of integers, use a for...of loop to find:
1. Sum of all positive numbers
2. Count of negative numbers
3. Product of all numbers with absolute value ≤ 5

### Input
First line contains integer `n` (1 ≤ n ≤ 1000).
Second line contains `n` integers (-100 ≤ each integer ≤ 100).

### Output
Three lines containing the sum, count, and product respectively.

### Sample Input
```
6
-2 3 -7 1 4 -1
```

### Sample Output
```
8
3
24
```

### Explanation
- Positive sum: 3 + 1 + 4 = 8
- Negative count: -2, -7, -1 = 3 numbers
- Product of |value| ≤ 5: (-2) × 3 × 1 × 4 × (-1) = 24

---

## Problem F: String Character Analysis
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a string, use for...of loop to analyze its characters:
- Count vowels (a, e, i, o, u - case insensitive)
- Count consonants (letters that are not vowels)
- Count digits
- Count special characters (everything else)

### Input
One line containing a string (length ≤ 1000).

### Output
Four lines containing counts of vowels, consonants, digits, and special characters respectively.

### Sample Input
```
Hello123!
```

### Sample Output
```
2
6
3
1
```

---

## Problem G: Array Processing with forEach
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given an array of integers, use forEach method to:
1. Double all even numbers
2. Square all odd numbers
3. Return the modified array

### Input
First line contains integer `n` (1 ≤ n ≤ 1000).
Second line contains `n` integers (1 ≤ each integer ≤ 100).

### Output
Print the modified array elements, space-separated.

### Sample Input
```
5
1 2 3 4 5
```

### Sample Output
```
1 4 9 8 25
```

### Explanation
1 (odd) → 1², 2 (even) → 2×2, 3 (odd) → 3², 4 (even) → 4×2, 5 (odd) → 5²

---

## Problem H: Object Property Iterator
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
You are given information about a student's grades in different subjects. Use for...in loop to:
1. Calculate the average grade
2. Find the subject with the highest grade
3. Count subjects with grade ≥ 80

### Input
First line contains integer `n` (1 ≤ n ≤ 20) - number of subjects.
Next `n` lines contain subject name and grade: `subject grade` (grade is integer 0-100).

### Output
Three lines:
- Average grade (rounded to 2 decimal places)
- Subject with highest grade
- Count of subjects with grade ≥ 80

### Sample Input
```
4
Math 85
English 92
Science 78
History 88
```

### Sample Output
```
85.75
English
3
```

---

## Problem I: Nested Loop Pattern
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Create a multiplication table pattern using nested for loops. Given `n`, create an `n×n` multiplication table.

### Input
One integer `n` (1 ≤ n ≤ 12).

### Output
Print the multiplication table in `n` rows, with each row containing `n` space-separated values.

### Sample Input
```
4
```

### Sample Output
```
1 2 3 4
2 4 6 8
3 6 9 12
4 8 12 16
```

---

## Problem J: Loop Performance Comparison
**Time Limit:** 2 seconds  
**Memory Limit:** 256 MB

### Problem Statement
Given an array of integers, find the sum using different loop methods and compare results:
1. Using traditional for loop
2. Using for...of loop  
3. Using while loop
4. Using forEach method

All methods should produce the same result. Output the sum.

### Input
First line contains integer `n` (1 ≤ n ≤ 10^5).
Second line contains `n` integers (-1000 ≤ each integer ≤ 1000).

### Output
One line containing the sum.

### Sample Input
```
5
1 -2 3 4 -1
```

### Sample Output
```
5
```

---

## Problem K: Prime Number Generator
**Time Limit:** 2 seconds  
**Memory Limit:** 256 MB

### Problem Statement
Find all prime numbers up to `n` using the Sieve of Eratosthenes algorithm with nested loops.

### Input
One integer `n` (2 ≤ n ≤ 1000).

### Output
Print all prime numbers up to `n`, space-separated on one line.

### Sample Input
```
20
```

### Sample Output
```
2 3 5 7 11 13 17 19
```

---

## Problem L: Matrix Traversal
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a 2D matrix, traverse it using nested for loops and find:
1. Sum of main diagonal elements
2. Sum of anti-diagonal elements  
3. Sum of border elements

### Input
First line contains integer `n` (1 ≤ n ≤ 100) - size of square matrix.
Next `n` lines contain `n` integers each (1 ≤ each integer ≤ 1000).

### Output
Three lines containing the three sums.

### Sample Input
```
3
1 2 3
4 5 6
7 8 9
```

### Sample Output
```
15
15
40
```

### Explanation
- Main diagonal: 1 + 5 + 9 = 15
- Anti-diagonal: 3 + 5 + 7 = 15  
- Border: 1+2+3+6+9+8+7+4 = 40

---

## Problem M: String Pattern Matching
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a text and a pattern, find all occurrences of the pattern in the text using nested loops. Return the starting positions (0-indexed).

### Input
First line contains the text string (length ≤ 1000).
Second line contains the pattern string (length ≤ 100).

### Output
Print all starting positions of pattern occurrences, space-separated. If no matches, print -1.

### Sample Input
```
abababab
aba
```

### Sample Output
```
0 2 4
```

---

## Problem N: Fibonacci with Different Loops
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Generate the first `n` Fibonacci numbers using a while loop, but with a twist: skip any Fibonacci number that contains the digit 4.

### Input
One integer `n` (1 ≤ n ≤ 50).

### Output
Print the first `n` valid Fibonacci numbers, space-separated.

### Sample Input
```
10
```

### Sample Output
```
0 1 1 2 3 5 8 55 89 233
```

### Explanation
Skip 13 (contains 4), 21, 34 (contains 4), 144 (contains 4), continue until we have 10 valid numbers.

---

## Problem O: Advanced Array Manipulation
**Time Limit:** 2 seconds  
**Memory Limit:** 256 MB

### Problem Statement
Given an array of integers, perform the following operations using different loop types:
1. Use for...of to find maximum element
2. Use forEach to create a new array where each element is the original element plus the maximum
3. Use for...in on the resulting array to find indices where value > 2 × maximum

### Input
First line contains integer `n` (1 ≤ n ≤ 1000).
Second line contains `n` integers (1 ≤ each integer ≤ 1000).

### Output
First line: maximum element
Second line: modified array elements, space-separated  
Third line: indices where value > 2 × maximum, space-separated (or -1 if none)

### Sample Input
```
4
3 7 2 5
```

### Sample Output
```
7
10 14 9 12
1
```

### Explanation
- Max = 7
- Modified array: [3+7, 7+7, 2+7, 5+7] = [10, 14, 9, 12]
- 2×max = 14, only index 1 has value 14 ≥ 14

---

## Problem P: Complex Object Processing
**Time Limit:** 2 seconds  
**Memory Limit:** 256 MB

### Problem Statement
You have a nested object representing a company's departments and employee salaries. Use for...in loops to:
1. Calculate total salary expense
2. Find department with highest average salary
3. Count employees earning above company average

### Input
First line contains integer `d` (1 ≤ d ≤ 10) - number of departments.
For each department:
- First line: department name
- Second line: number of employees `e` (1 ≤ e ≤ 20)
- Next `e` lines: employee_name salary

### Output
Three lines:
- Total salary expense
- Department with highest average salary
- Count of employees above company average

### Sample Input
```
2
Engineering
3
Alice 80000
Bob 90000
Charlie 70000
Marketing  
2
David 60000
Eve 65000
```

### Sample Output
```
365000
Engineering
2
```

### Explanation
- Total: 240000 + 125000 = 365000
- Engineering avg: 80000, Marketing avg: 62500
- Company avg: 73000, Alice(80000) and Bob(90000) are above average

---

## Problem Q: Ultimate Loop Challenge
**Time Limit:** 3 seconds  
**Memory Limit:** 512 MB

### Problem Statement
You are given a 2D grid and need to perform multiple operations using different loop types:

1. Use nested for loops to find all local maxima (elements greater than all 8 neighbors)
2. Use for...of on each row to find the longest increasing subsequence length
3. Use while loop to simulate a "water flow" from top-left to bottom-right (can only move right or down, always choose the path with smaller values)

### Input
First line contains integers `m` and `n` (2 ≤ m,n ≤ 50) - grid dimensions.
Next `m` lines contain `n` integers each (1 ≤ each integer ≤ 1000).

### Output
Three lines:
- Coordinates of all local maxima as "row,col" space-separated (or "none")
- Maximum LIS length among all rows
- Sum of all values in the water flow path

### Sample Input
```
3 4
5 3 8 2
1 9 4 6
7 2 1 3
```

### Sample Output
```
1,1
3
19
```

### Explanation
- Local maxima: 9 at (1,1) is greater than all its neighbors  
- LIS lengths: row 0=[5,3,8,2]→2, row 1=[1,9,4,6]→3, row 2=[7,2,1,3]→2. Max=3
- Water flow path choosing smaller values: (0,0)→(1,0)→(2,0)→(2,1)→(2,2)→(2,3) = 5+1+7+2+1+3 = 19
<!-- end -->
<hr>

<h1 id="string-problems" align="center">String Problems</h1>
<!-- start -->

## Problem A: Quote Type Counter
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
You are given a JavaScript code snippet as a string. Count how many string literals use single quotes, double quotes, and backticks respectively.

### Input
One line containing a JavaScript code snippet (length ≤ 1000).

### Output
Three integers: count of single quotes, double quotes, and backticks.

### Sample Input
```
let name = 'John'; let msg = "Hello"; let template = `Hi ${name}`;
```

### Sample Output
```
1 1 1
```

---

## Problem B: Template String Builder
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
You are given a name, age, and city. Create a multiline template string that introduces the person in exactly this format:
```
Hello, my name is [name].
I am [age] years old.
I live in [city].
```

### Input
Three lines containing name, age, and city respectively.

### Output
The formatted multiline string.

### Sample Input
```
Alice
25
New York
```

### Sample Output
```
Hello, my name is Alice.
I am 25 years old.
I live in New York.
```

---

## Problem C: Expression Evaluator
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given two numbers `a` and `b`, create a template string that shows the result of all basic arithmetic operations: addition, subtraction, multiplication, and division (rounded to 2 decimal places).

### Input
One line with two integers `a` and `b` (-1000 ≤ a,b ≤ 1000, b ≠ 0).

### Output
Four lines showing the operations in template string format.

### Sample Input
```
15 4
```

### Sample Output
```
15 + 4 = 19
15 - 4 = 11
15 * 4 = 60
15 / 4 = 3.75
```

---

## Problem D: String Length Analyzer
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given `n` strings, find:
1. The longest string(s) and their length
2. The shortest string(s) and their length
3. The average length (rounded to 2 decimal places)

### Input
First line contains integer `n` (1 ≤ n ≤ 100).
Next `n` lines contain strings (each length ≤ 1000).

### Output
Three lines:
- Longest length and the longest string(s) (comma-separated if multiple)
- Shortest length and the shortest string(s) (comma-separated if multiple)  
- Average length

### Sample Input
```
4
hello
hi
programming
code
```

### Sample Output
```
11: programming
2: hi
5.50
```

---

## Problem E: Case Conversion Challenge
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a string, perform the following transformations:
1. Convert to uppercase
2. Convert to lowercase  
3. Convert first character of each word to lowercase, rest to uppercase
4. Alternate case starting with uppercase

### Input
One line containing a string (length ≤ 1000).

### Output
Four lines showing the different transformations.

### Sample Input
```
Hello World
```

### Sample Output
```
HELLO WORLD
hello world
hELLO wORLD
HeLlO WoRlD
```

---

## Problem F: String Search Master
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a text and a search term, find:
1. Whether the text includes the search term (case-sensitive)
2. Whether the text starts with the search term
3. Whether the text ends with the search term
4. The first index where the search term appears (-1 if not found)
5. All indices where the search term appears

### Input
Two lines: the text and the search term.

### Output
Five lines with the results.

### Sample Input
```
JavaScript is a JavaScript language
Java
```

### Sample Output
```
true
true
false
0
0,16
```

---

## Problem G: Advanced indexOf Operations
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a string and a character, find all occurrences of that character using indexOf with different starting positions.

### Input
Two lines: a string and a single character.

### Output
All indices where the character appears, space-separated. If not found, output -1.

### Sample Input
```
banana
a
```

### Sample Output
```
1 3 5
```

---

## Problem H: String Slicer
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a string and multiple slice operations, perform each slice and output the results.

### Input
First line contains a string (length ≤ 1000).
Second line contains integer `n` (1 ≤ n ≤ 100) - number of operations.
Next `n` lines contain slice operations in format: `start end` (where end can be omitted, and values can be negative).

### Output
`n` lines with slice results.

### Sample Input
```
JavaScript
4
0 4
4
-4 -1
2 8
```

### Sample Output
```
Java
Script
rip
vaScri
```

---

## Problem I: Word Processor
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a sentence, perform the following operations:
1. Split into words
2. Join words with different separators
3. Count total words
4. Find the longest word

### Input
First line contains a sentence.
Second line contains a separator character for joining.

### Output
Four lines:
- Words separated by commas
- Words joined with the given separator
- Total word count
- Longest word

### Sample Input
```
I love programming in JavaScript
-
```

### Sample Output
```
I,love,programming,in,JavaScript
I-love-programming-in-JavaScript
5
programming
```

---

## Problem J: Whitespace Warrior
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given strings with various whitespace issues, clean them up:
1. Remove leading and trailing whitespace
2. Remove only leading whitespace
3. Remove only trailing whitespace
4. Replace multiple consecutive spaces with single spaces

### Input
Integer `n` (1 ≤ n ≤ 100).
Next `n` lines contain strings with whitespace issues.

### Output
For each string, output 4 lines showing the different cleaning operations.

### Sample Input
```
2
  hello   world  
    JavaScript    
```

### Sample Output
```
hello   world
hello   world  
  hello   world
hello world
JavaScript
JavaScript    
    JavaScript
JavaScript
```

---

## Problem K: Find and Replace Expert
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a text and replacement operations, perform:
1. Replace first occurrence only
2. Replace all occurrences
3. Case-insensitive replacement of all occurrences

### Input
First line contains the original text.
Second line contains the word to find.
Third line contains the replacement word.

### Output
Three lines showing the different replacement results.

### Sample Input
```
I like cats. Cats are sweet animals. cats are cute.
cats
dogs
```

### Sample Output
```
I like dogs. Cats are sweet animals. cats are cute.
I like dogs. Cats are sweet animals. dogs are cute.
I like dogs. dogs are sweet animals. dogs are cute.
```

---

## Problem L: String Repeater
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a string and a number, create patterns using the repeat method:
1. Simple repetition
2. Repetition with separator
3. Create a "staircase" pattern (1 copy, then 2 copies, then 3 copies, etc.)

### Input
First line contains a string (length ≤ 100).
Second line contains integer `n` (1 ≤ n ≤ 20).
Third line contains a separator character.

### Output
Three sections:
- Simple repetition
- Repetition with separator  
- Staircase pattern (n lines)

### Sample Input
```
ha
3
-
```

### Sample Output
```
hahaha
ha-ha-ha
ha
haha
hahaha
```

---

## Problem M: String Boundary Checker
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given multiple strings and patterns, check startsWith and endsWith with different starting positions.

### Input
First line contains integer `t` (1 ≤ t ≤ 100) - number of test cases.
For each test case:
- Line 1: main string
- Line 2: pattern to check
- Line 3: start position for startsWith check
- Line 4: end position for endsWith check

### Output
For each test case, output two lines:
- Result of startsWith with given position
- Result of endsWith with given position

### Sample Input
```
2
JavaScript
Script
4
10
programming
gram
3
7
```

### Sample Output
```
true
true
true
true
```

---

## Problem N: String Concatenation Olympics
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given multiple strings, concatenate them using different methods and compare performance:
1. Using concat method
2. Using + operator
3. Using template literals
4. Using array join

All methods should produce the same result.

### Input
First line contains integer `n` (1 ≤ n ≤ 1000).
Next `n` lines contain strings to concatenate.

### Output
The concatenated result (all methods should give the same output).

### Sample Input
```
4
Hello
 
World
!
```

### Sample Output
```
Hello World!
```

---

## Problem O: Substring Extractor
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a string and multiple substring operations, extract substrings using the substring method.

### Input
First line contains a string (length ≤ 1000).
Second line contains integer `n` (1 ≤ n ≤ 100).
Next `n` lines contain two integers `start` and `end` for substring(start, end).

### Output
`n` lines with extracted substrings.

### Sample Input
```
JavaScript Programming
3
0 4
11 22
4 10
```

### Sample Output
```
Java
Programming
Script
```

---

## Problem P: String Reversal Tournament
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given multiple strings, reverse each one using two different methods:
1. Using built-in methods (split, reverse, join)
2. Using manual loop approach

Both methods should produce the same result.

### Input
First line contains integer `n` (1 ≤ n ≤ 100).
Next `n` lines contain strings to reverse (each length ≤ 1000).

### Output
`n` lines with reversed strings.

### Sample Input
```
3
hello
world
JavaScript
```

### Sample Output
```
olleh
dlrow
tpircSavaJ
```

---

## Problem Q: Immutability Demonstrator
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given a string and a list of "attempted modifications", show that strings are immutable by demonstrating that direct character assignment doesn't work, then show the correct way to modify strings.

### Input
First line contains original string.
Second line contains integer `n` (1 ≤ n ≤ 100).
Next `n` lines contain: `index newChar` for attempted modifications.

### Output
First line: original string (unchanged after attempted direct modifications).
Second line: correctly modified string using slice and concatenation.

### Sample Input
```
Hello
2
0 Y
4 p
```

### Sample Output
```
Hello
Yellp
```

---

## Problem R: Text Analytics Engine
**Time Limit:** 2 seconds  
**Memory Limit:** 256 MB

### Problem Statement
Given a large text, perform comprehensive analysis:
1. Count total characters (including spaces)
2. Count words
3. Count sentences (ending with ., !, or ?)
4. Find most frequent character (case-insensitive)
5. Find longest word
6. Calculate average word length

### Input
One line containing text (length ≤ 10000).

### Output
Six lines with the analysis results.

### Sample Input
```
Hello world! This is a test. Programming is fun!
```

### Sample Output
```
48
8
3
i
Programming
5.38
```

---

## Problem S: Password Validator
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Create a password validator that checks:
1. Length between 8-20 characters
2. Contains at least one uppercase letter
3. Contains at least one lowercase letter  
4. Contains at least one digit
5. Contains at least one special character (!@#$%^&*)
6. Doesn't start or end with whitespace

### Input
Integer `n` (1 ≤ n ≤ 100).
Next `n` lines contain passwords to validate.

### Output
For each password, output either "VALID" or list the requirements it fails (comma-separated).

### Sample Input
```
3
Password123!
weakpass
  Strong123!  
```

### Sample Output
```
VALID
length,uppercase,digits,special
whitespace
```

---

## Problem T: Ultimate String Challenge
**Time Limit:** 3 seconds  
**Memory Limit:** 512 MB

### Problem Statement
You are given a text document and need to perform multiple complex string operations:

1. Extract all email addresses (simple pattern: word@word.word)
2. Replace all URLs (starting with http:// or https://) with "[LINK]"
3. Count palindromic words (case-insensitive, length ≥ 3)
4. Create an acronym from the first letter of each word (uppercase)
5. Find the longest common substring between the first and last sentences

### Input
One line containing a text document (length ≤ 5000).

### Output
Five lines:
- Email addresses found (comma-separated, or "none")
- Text with URLs replaced
- Count of palindromic words
- Acronym formed
- Longest common substring

### Sample Input
```
Hello world! Visit https://example.com for info. Contact admin@site.com. This level is radar detection mom.
```

### Sample Output
```
admin@site.com
Hello world! Visit [LINK] for info. Contact admin@site.com. This level is radar detection mom.
3
HWVFICMTLIRDM
m
```

### Explanation
- Email: admin@site.com
- URL replaced: https://example.com → [LINK]
- Palindromes: level, radar, mom (3 words)
- Acronym: First letters of each word
- Common substring: "m" appears in both first ("Hello world!") and last ("This level is radar detection mom.") sentences

<!-- end -->
<hr>

<h1 id="object-problems" align="center">Object Problems</h1>
<!-- start -->

## Problem A: Object Property Manager
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
You are given an object with initial properties and a series of operations to perform. Operations can be:
- `ADD key value` - add a new property
- `DELETE key` - delete a property
- `READ key` - read a property value
- `UPDATE key value` - update existing property

### Input
First line contains integer `n` (1 ≤ n ≤ 1000) - number of operations.
Next `n` lines contain operations in the specified format.

### Output
For each READ operation, output the property value or "undefined" if it doesn't exist.

### Sample Input
```
6
ADD name John
ADD age 30
READ name
DELETE age
READ age
UPDATE name Jane
```

### Sample Output
```
John
undefined
```

---

## Problem B: Multi-word Property Handler
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Create an object with properties that may contain spaces or special characters. You need to handle both dot notation and bracket notation access.

### Input
First line contains integer `n` (1 ≤ n ≤ 100) - number of properties.
Next `n` lines contain property definitions: `key value` (key may contain spaces).
Last line contains a property key to retrieve.

### Output
Output the value of the requested property, or "undefined" if not found.

### Sample Input
```
3
name Alice
like birds true
favorite color blue
like birds
```

### Sample Output
```
true
```

---

## Problem C: Object Factory
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Implement a function that creates user objects using both regular syntax and shorthand property syntax when variable names match property names.

### Input
First line contains integer `n` (1 ≤ n ≤ 100) - number of users to create.
Next `n` lines contain: `name age city` for each user.

### Output
For each user, output their information in format: "Name: X, Age: Y, City: Z"

### Sample Input
```
2
John 25 NYC
Alice 30 LA
```

### Sample Output
```
Name: John, Age: 25, City: NYC
Name: Alice, Age: 30, City: LA
```

---

## Problem D: Object Declaration Methods
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Create objects using three different methods: object literal, `new Object()`, and `Object.create()`. All should have the same properties but demonstrate different creation approaches.

### Input
One line containing: `brand color type price` for a pen object.

### Output
Three lines showing the objects created using different methods (in JSON format).

### Sample Input
```
Parker blue ballpoint 10
```

### Sample Output
```
{"brand":"Parker","color":"blue","type":"ballpoint","price":10}
{"brand":"Parker","color":"blue","type":"ballpoint","price":10}
{"brand":"Parker","color":"blue","type":"ballpoint","price":10}
```

---

## Problem E: Object Analysis Tools
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given an object's properties, use `Object.keys()`, `Object.values()`, and `Object.entries()` to analyze it.

### Input
First line contains integer `n` (1 ≤ n ≤ 100) - number of properties.
Next `n` lines contain: `key value` pairs.

### Output
Three lines:
- All keys (space-separated)
- All values (space-separated)  
- All entries in format "key:value" (space-separated)

### Sample Input
```
3
brand lenovo
price 35000
processor intel
```

### Sample Output
```
brand price processor
lenovo 35000 intel
brand:lenovo price:35000 processor:intel
```

---

## Problem F: Object Freeze Challenge
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Create an object, freeze it using `Object.freeze()`, then attempt various modifications. Show the object state before and after attempted modifications.

### Input
First line contains initial object properties: `name age`.
Second line contains attempted modifications: `newAge newCity` (try to update age and add city).

### Output
Two lines:
- Object before freeze attempts
- Object after freeze attempts (should be unchanged)

### Sample Input
```
Alice 25
30 NYC
```

### Sample Output
```
{"name":"Alice","age":25}
{"name":"Alice","age":25}
```

---

## Problem G: Deep Freeze Implementation
**Time Limit:** 2 seconds  
**Memory Limit:** 256 MB

### Problem Statement
Implement a deep freeze function that freezes nested objects recursively. Test it on a multi-level nested object.

### Input
Nested object structure given as: `level1_key level2_key level3_value`
Then attempted modification: `new_level3_value`

### Output
Two lines:
- Value before deep freeze
- Value after attempted modification (should be unchanged)

### Sample Input
```
user profile name John
Jane
```

### Sample Output
```
John
John
```

---

## Problem H: Object Seal vs Freeze
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Compare the behavior of `Object.seal()` vs `Object.freeze()` by testing various operations on sealed and frozen objects.

### Input
First line: `brand year` for initial car object.
Second line: `newYear newColor` for attempted modifications.

### Output
Four lines:
- Sealed object after trying to modify year
- Sealed object after trying to add color  
- Frozen object after trying to modify year
- Frozen object after trying to add color

### Sample Input
```
Toyota 2020
2022 red
```

### Sample Output
```
{"brand":"Toyota","year":2022}
{"brand":"Toyota","year":2022}
{"brand":"Toyota","year":2020}
{"brand":"Toyota","year":2020}
```

---

## Problem I: Property Existence Detective
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Given an object and a list of properties to check, use three different methods to test property existence: `in` operator, `Object.keys().includes()`, and `hasOwnProperty()`.

### Input
First line contains object properties: `key1 value1 key2 value2 ...`
Second line contains properties to check (space-separated).

### Output
For each property to check, output three lines:
- Result using `in` operator
- Result using `includes()` method  
- Result using `hasOwnProperty()` method

### Sample Input
```
name John age 30
name location age
```

### Sample Output
```
true true true
false false false
true true true
```

---

## Problem J: Object Iterator
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Use `for...in` loop to iterate through an object and perform calculations on numeric properties.

### Input
First line contains integer `n` (1 ≤ n ≤ 100) - number of properties.
Next `n` lines contain: `key value` where value can be string or number.

### Output
Three lines:
- All property keys (space-separated)
- Sum of all numeric values
- Count of string properties

### Sample Input
```
4
name John
age 30
salary 5000
city NYC
```

### Sample Output
```
name age salary city
5030
2
```

---

## Problem K: Reference vs Value Demo
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Demonstrate object reference behavior by creating two variables pointing to the same object and showing how modifications affect both.

### Input
First line: `name` for initial object.
Second line: `newName` for modification.

### Output
Four lines showing the progression:
- user.name before modification
- admin.name before modification
- user.name after admin modifies it
- admin.name after admin modifies it

### Sample Input
```
John
Pete
```

### Sample Output
```
John
John
Pete
Pete
```

---

## Problem L: Const Object Modification
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Show that const objects can have their properties modified even though the object reference cannot be changed.

### Input
First line: `initialName`
Second line: `newName`

### Output
Two lines:
- Object name before modification
- Object name after modification

### Sample Input
```
John
Pete
```

### Sample Output
```
John
Pete
```

---

## Problem M: Object Cloning Master
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Implement object cloning using manual iteration and demonstrate that the clone is independent of the original.

### Input
First line: `name age` for original object.
Second line: `newName` to modify clone.

### Output
Four lines:
- Original object before clone modification
- Clone object before modification
- Original object after clone modification  
- Clone object after modification

### Sample Input
```
John 30
Pete
```

### Sample Output
```
{"name":"John","age":30}
{"name":"John","age":30}
{"name":"John","age":30}
{"name":"Pete","age":30}
```

---

## Problem N: Object.assign Merger
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Use `Object.assign()` to merge multiple objects into a target object and demonstrate the merging process.

### Input
First line: `name` for user object.
Second line: `canView` (true/false) for permissions1.
Third line: `canEdit` (true/false) for permissions2.

### Output
The merged object with all properties.

### Sample Input
```
John
true
false
```

### Sample Output
```
{"name":"John","canView":true,"canEdit":false}
```

---

## Problem O: Shallow vs Deep Cloning
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Demonstrate the difference between shallow cloning (Object.assign) and deep cloning (structuredClone) with nested objects.

### Input
First line: `name height width` where height and width are for nested sizes object.
Second line: `newWidth` for modification.

### Output
Four lines:
- Are sizes objects the same reference? (shallow clone)
- Shallow clone width after modification
- Are sizes objects the same reference? (deep clone)  
- Deep clone width after modification

### Sample Input
```
John 182 50
60
```

### Sample Output
```
true
60
false
50
```

---

## Problem P: Object Methods Implementation
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Create an object with methods using both shorthand and traditional syntax. Demonstrate the use of `this` keyword.

### Input
One line containing: `name`

### Output
Two lines:
- Output from shorthand method
- Output from traditional method

### Sample Input
```
Tamim
```

### Sample Output
```
Hello, I'm Tamim
Hi, I'm Tamim
```

---

## Problem Q: This Keyword Safety
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Demonstrate why using `this` is safer than direct object reference when objects are copied and original is nullified.

### Input
One line containing: `name`

### Output
Result of calling the method through the copied reference after original is nullified.

### Sample Input
```
Tamim
```

### Sample Output
```
Tamim
```

---

## Problem R: Constructor Function Factory
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Implement a constructor function to create multiple objects with the same structure.

### Input
First line contains integer `n` (1 ≤ n ≤ 100) - number of persons to create.
Next `n` lines contain: `name age` for each person.

### Output
For each person, output: "Person: name, age"

### Sample Input
```
3
Tamim 20
Asha 19
Bob 25
```

### Sample Output
```
Person: Tamim, 20
Person: Asha, 19
Person: Bob, 25
```

---

## Problem S: Optional Chaining Navigator
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Use optional chaining to safely access nested properties that may not exist, and call methods that may not be defined.

### Input
First line: `hasAddress` (true/false) - whether user has address property.
Second line: `hasCity` (true/false) - whether address has city property.  
Third line: `hasMethod` (true/false) - whether user has sayHi method.

### Output
Three lines:
- Result of accessing user.address?.city
- Result of calling user.sayHi?.()
- Result of calling user.sayBye?.()

### Sample Input
```
true
false
true
```

### Sample Output
```
undefined
Hi!
undefined
```

---

## Problem T: Date Analyzer
**Time Limit:** 1 second  
**Memory Limit:** 256 MB

### Problem Statement
Create a Date object and extract various components, then format it in different ways.

### Input
One line with date string in format: "YYYY-MM-DD HH:MM:SS"

### Output
Eight lines:
- Full year
- Month (0-based)
- Date
- Day of week (0=Sunday)
- Hours
- Minutes  
- Seconds
- ISO string format

### Sample Input
```
2025-07-22 15:30:45
```

### Sample Output
```
2025
6
22
2
15
30
45
2025-07-22T15:30:45.000Z
```

---

## Problem U: Advanced Object Operations
**Time Limit:** 2 seconds  
**Memory Limit:** 256 MB

### Problem Statement
Perform complex object operations including nested property manipulation, method chaining, and conditional property access.

### Input
First line: `userName userAge`
Second line: `companyName position`
Third line: `street city country` (address info)
Fourth line: operation type - "UPDATE", "DELETE", or "QUERY"
Fifth line: property path (e.g., "address.city" or "company.name")

### Output
Based on operation:
- UPDATE: Show object after update
- DELETE: Show object after deletion
- QUERY: Show the queried value

### Sample Input
```
John 30
TechCorp Engineer
123 Main St NYC USA
QUERY
address.city
```

### Sample Output
```
NYC
```

---

## Problem V: Object Inheritance Simulator
**Time Limit:** 2 seconds  
**Memory Limit:** 256 MB

### Problem Statement
Simulate object inheritance using `Object.create()` and demonstrate property lookup in the prototype chain.

### Input
First line: `parentName parentAge` for parent object.
Second line: `childName childAge` for child object.
Third line: property to query.

### Output
Two lines:
- Value from child object (or inherited from parent)
- Whether property exists directly on child (true/false)

### Sample Input
```
Parent 50
Child 20
age
```

### Sample Output
```
20
true
```

---

## Problem W: Ultimate Object Challenge
**Time Limit:** 3 seconds  
**Memory Limit:** 512 MB

### Problem Statement
Create a comprehensive object management system that handles:
1. Multiple users with nested properties (personal info, address, preferences)
2. Object freezing/sealing operations
3. Deep cloning with modification tracking
4. Method calls with proper `this` binding
5. Optional chaining for safe property access
6. Date operations for user registration/last login

### Input
First line: integer `n` (1 ≤ n ≤ 100) - number of users.
For each user:
- Line 1: `name age email`
- Line 2: `street city country`
- Line 3: `theme language notifications` (preferences)
- Line 4: registration date "YYYY-MM-DD"

Last line: operation - "CLONE_USER index", "FREEZE_USER index", "UPDATE_PREF index theme", or "STATS"

### Output
Based on operation:
- CLONE_USER: Show cloned user can be modified independently
- FREEZE_USER: Show user cannot be modified after freezing
- UPDATE_PREF: Show preference update with optional chaining
- STATS: Show total users, average age, most common city

### Sample Input
```
2
John 25 john@email.com
123 Main NYC USA
dark english true
2024-01-15
Alice 30 alice@email.com
456 Oak LA USA
light spanish false
2024-02-20
STATS
```

### Sample Output
```
Total users: 2
Average age: 27.50
Most common city: NYC,LA
Registration span: 36 days
```

<!-- end -->
<hr>

<h1 id="function-problems" align="center">Function Problems</h1>
<!-- start -->
<!-- end -->
<hr>

<h1 id="array-problems" align="center">Array Problems</h1>
<!-- start -->
<!-- end -->
<hr>

<h1 id="map-problems" align="center">Map Problems</h1>
<!-- start -->
<!-- end -->
<hr>

<h1 id="set-problems" align="center">Set Problems</h1>
<!-- start -->
<!-- end -->
<hr>

<h1 id="class-problems" align="center">Class Problems</h1>
<!-- start -->
<!-- end -->
<hr>


<h1 id="error-handling-problems" align="center">Error Handling Problems</h1>
<!-- start -->
<!-- end -->
<hr>

<h1 id="js-modules-problems" align="center">JS Modules Problems</h1>
<!-- start -->
<!-- end -->
<hr>

<h1 id="regular-expression-problems" align="center">Regular Expression Problems</h1>
<!-- start -->
<!-- end -->
<hr>

<h1 id="async-sync-problems" align="center">Asynchronous and Synchronous Problems</h1>
<!-- start -->
<!-- end -->
<hr>


<!-- <h1 id="part-2-DOM" align="center">Part 2: Document Object Model</h1> -->