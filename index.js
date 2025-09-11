const person = {
    name: "Alice",
    greetNormal: function () {
        console.log("Normal: " + this.name); // undefined
    },
    greetArrow: function () {
        console.log("Arrow: " + this.name); // Alice
    }
};

person.greetNormal();
person.greetArrow();