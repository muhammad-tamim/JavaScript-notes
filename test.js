const fs = require("fs");
const number = parseInt(fs.readFileSync(0, "utf8").trim());

function findDivisibleOrNot(num) {
    const firstNum = Math.floor(num / 10);
    const secondNum = num % 10;
    if (firstNum % secondNum === 0 || secondNum % firstNum === 0) {
        console.log("YES")
    }
    else {
        console.log("NO")
    }
}

findDivisibleOrNot(number); 
