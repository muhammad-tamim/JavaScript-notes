function secretCounter() {
    let count = 0;

    return function () {
        count++;
        console.log("Count is: " + count);
    };
}

secretCounter();
secretCounter();
secretCounter();

// counter(); // Count is: 1
// counter(); // Count is: 2
// counter(); // Count is: 3