<h1 align="center">Js Exercise</h1>


<h1>Table of Contents:</h1>
<ul>
    <li><a href="#problem-1-inch-to-feet">Problem 1: Inch to Feet</a></li>
    <li><a href="#problem-2-miles-to-kilometers">Problem 2: Miles to Kilometers</a></li>
    <li><a href="#problem-3-centimeters-to-inches">Problem 3: Centimeters to Inches</a></li>
    <li><a href="#problem-4-leap-year-checker">Problem 4: Leap Year Checker</a></li>
    <li><a href="#problem-5-average-of-odd-numbers-in-an-array">Problem 5: Average of odd numbers in an array</a></li>
    <li><a href="#problem-6-remove-duplicate-items-from-an-array">Problem 6: Remove duplicate items from an array</a></li>
    <li><a href="#problem-7-find-the-maximum-number-in-an-array">Problem 7: Find the maximum number in an array</a></li>
    <li><a href="#problem-8-find-the-cheapest-phone">Problem 8: Find the cheapest phone</a></li>
</ul>
<hr>

<h2 align="center" id="problem-1-inch-to-feet">Problem 1: Inch to Feet</h2>

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


<h2 align="center" id="problem-2-miles-to-kilometers">Problem 2: Miles to Kilometers</h2>

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


<h2 align="center" id="problem-3-centimeters-to-inches">Problem 3: Centimeters to Inches</h2>

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


<h2 align="center" id="problem-4-leap-year-checker">Problem 4: Leap Year Checker</h2>

**Description:**  
You are given a year. Determine whether it is a **Leap Year** or **Not a Leap Year**.  

A year is a **Leap Year** if:  
1. It is divisible by 400, OR  
2. It is divisible by 4 **and not** divisible by 100.  

Otherwise, it is **Not a Leap Year**.

**Input:**  
- A single integer `y` (1 ≤ y ≤ 10⁶) — the year to check.

**Output:**  
- Print `"Leap Year"` if the year is a leap year.  
- Otherwise, print `"Not a Leap Year"`.

**Example 1:**

```
Input:
2020
Output:
Leap Year
```
**Example 2:**

```
Input:
1900
Output:
Not a Leap Year
```
**Example 2:**

```
Input:
2000
Output:
Leap Year
```

### Solution: 

```js
const year = 1900;

const checkLeapYear = (year % 4 === 0 && year % 400 === 0 && year % 100 !== 0) ? "Leap Year" : "Not Leap Year";

console.log(checkLeapYear); // Not Leap Year
```
---


<h2 align="center" id="problem-5-average-of-odd-numbers-in-an-array">Problem 5: Average of Odd Numbers in an Array</h2>

**Description:**  
You are given an array of integers. Calculate the **average** of all the odd numbers in the array.  
If there are **no odd numbers**, output `0`.

**Input:**  
- The first line contains an integer `n` (1 ≤ n ≤ 10⁵) — the number of elements in the array.  
- The second line contains `n` space-separated integers `a[i]` (−10⁹ ≤ a[i] ≤ 10⁹).

**Output:**  
- A floating-point number representing the average of the odd numbers.  
- If there are no odd numbers, print `0`.

**Example 1:**

```
Input:
5
1 2 3 4 5
Output:
3
```

### Solution:

```html
const numbers = [1, 2, 3, 4, 5];

const oddNumbers = []

for (const number of numbers) {
    if (number % 2 !== 0) {
        oddNumbers.push(number);
    }
    if (oddNumbers.length === 0) {
        oddNumbers.push(0)
    }
}

const oddNumbersLength = oddNumbers.length;

let sumOfOddNumbers = 0;
for (const number of oddNumbers) {
    sumOfOddNumbers += number;
}

const averageOfOddNumbers = sumOfOddNumbers / oddNumbersLength;

console.log(averageOfOddNumbers); // 3
```
---


<h2 align="center" id="problem-6-remove-duplicate-items-from-an-array">Problem 6: Remove Duplicate Items from an Array</h2>

**Description:**  
You are given an array. Remove all **duplicate values** and print the resulting array in the **same order** as their first occurrence.

**Example:**
```
Input:
1 2 2 3 4 1 5 2
Output:
1 2 3 4 5

Input: 
tamim tamim nasrin nasrin tamim ammu
Output: 
tamim nasrin ammu
```

### Solution:

```js
const array = ["tamim", "tamim", "nasrin", "tamim", "ammu"];

const newArray = [];

for (const arr of array) {
    if (newArray.includes(arr) !== array.includes(arr)) {
        newArray.push(arr)
    }
}

console.log(newArray); 
```
---


<h2 align="center" id="problem-7-find-the-maximum-number-in-an-array">Problem 7: Find the maximum number in an array</h2>

**Description:**  
You are given an array of numbers representing the heights of people.  
Your task is to determine the **tallest height** (the maximum number in the array).

**Input:**  
- The first line contains an integer `n` (1 ≤ n ≤ 10⁵) — the number of elements in the array.  
- The second line contains `n` space-separated integers `h[i]` (−10⁹ ≤ h[i] ≤ 10⁹) representing the heights.

**Output:**  
- Print the maximum number in the array.

**Example:**

```
Input:
160 172 185 178 169
Output:
185
```

### Solution: 

```js
const numbers = [160, 172, 185, 178, 169];

console.log(Math.max(...numbers)) // 185

// or
let largest = 0;

for (const number of numbers) {
    if (number >= largest) {
        largest = number;
    }
}
console.log(largest) // 185
```
---


<h2 align="center" id="problem-8-find-the-cheapest-phone">Problem 8: Find the Cheapest Phone</h2>

**Description:**  
You are given an array of phone objects. Your task is to determine the **cheapest phone** and print its name and price.

**Example:**

```
Input
[
    { name: "iPhone14", brand: "Apple", price: 999 },
    { name: "SamsungS23", brand: "Samsung", price: 899 },
    { name: "Pixel7", brand: "Google", price: 799 }
]
output:
Pixel7 = 799
```

### Solution: 

```js
const phones = [
    { name: "iPhone14", brand: "Apple", price: 999 },
    { name: "SamsungS23", brand: "Samsung", price: 899 },
    { name: "Pixel7", brand: "Google", price: 799 }
]

let cheapestPhone = phones[0];
for (const phone of phones) {
    if (phone.price <= cheapestPhone.price) {
        cheapestPhone = phone;
    }
}

console.log(cheapestPhone.name, "=", cheapestPhone.price)
```
---