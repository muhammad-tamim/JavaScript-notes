<h1 align="center">JS Practice Problems</h1>

<h2>Table of Contents:</h2>

<ul>

<li><a href="#part-1-the-javascript-language">Part 1: The JavaScript Language</a></li>

<ul>
<li><a href="#Operator-problems">Operator Problems</a></li>
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




<!-- <h1 id="part-2-DOM" align="center">Part 2: Document Object Model</h1> -->