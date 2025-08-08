<h1 align="center">Js Exercise</h1>


<h1>Table of Contents:</h1>
<ul>
    <li><a href="#problem-1-inch-to-feet">Problem 1: Inch to Feet</a></li>
</ul>
<hr>

<h1 align="center" id="problem-1-inch-to-feet">Problem 1: Inch to Feet</h1>

**Description:**  
You are given a person height in inches. Convert it into **feet and inches** format.  
1 foot = 12 inches.  

**note:** 

- Foot → singular (used when talking about exactly 1 unit)

- Feet → plural (used when talking about more than 1 unit)

Examples:

1 foot ✅ (singular)

2 feet ✅ (plural)

0 feet ✅ (plural — yes, “zero” takes the plural form)

**Input:**  
- A single integer `n` (1 ≤ n ≤ 10⁶) — the length in inches.

**Output:**  
- Two integers: the number of feet and the remaining inches.

**Example:**

```
Input:
24
Output:
2 foot 0 inch
```

```
Input:
50
Output:
4 foot 2 inch
```

### Solution:

```js
const heightInInch = 50;

const inchToFoot = parseInt(heightInInch / 12);
const inchToFootRemainder = heightInInch % 12;

console.log(`${inchToFoot} foot ${inchToFootRemainder} inch`) // 4 foot 2 inch
```