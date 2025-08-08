<h1 align="center">Js Exercise</h1>


<h1>Table of Contents:</h1>
<ul>
    <li><a href="#problem-1-inch-to-feet">Problem 1: Inch to Feet</a></li>
    <li><a href="#problem-2-miles-to-kilometers">Problem 2: Miles to Kilometers</a></li>
    <li><a href="#problem-3-centimeters-to-inches">Problem 3: Centimeters to Inches</a></li>
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
---


<h1 align="center" id="problem-2-miles-to-kilometers">Problem 2: Miles to Kilometers</h1>

**Description:**  
You are given a distance in miles. Convert it to kilometers.  
1 mile = 1.60934 kilometers.  
Output the distance in kilometers with **exactly 3 decimal places**.

**Input:**  
- A floating-point number `m` (0 < m ≤ 10⁶) — the distance in miles.

**Output:**  
- A floating-point number representing the distance in kilometers, formatted to 3 decimal places.

**Example:**

```
Input:
10
Output:
16.093
```

### Solution:

```js   
const distanceInMiles = 10;

const convertKilometer = (10 * 1.60934);

console.log(parseFloat(convertKilometer.toFixed(3))) // 16.093
```
---


<h1 align="center" id="problem-3-centimeters-to-inches">Problem 3: Centimeters to Inches</h1>

**Description:**  
You are given a length in centimeters. Convert it to inches.  
1 inch = 2.54 centimeters.  
Output the result with **exactly 4 decimal places**.

**Input:**  
- A floating-point number `cm` (0 < cm ≤ 10⁶) — the length in centimeters.

**Output:**  
- A floating-point number representing the length in inches.

**Example:**

```
Input:
10
Output:
3.9370
```

### Solution:

```js
const lengthInCm = 10;

const cmToInch = 10 / 2.54;

console.log(parseFloat((cmToInch).toFixed(4))); // 3.937 (0 not shown)
```
---