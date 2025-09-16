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