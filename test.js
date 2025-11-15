var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("hi, i am ".concat(this.name));
    };
    return Person;
}());
var p1 = new Person("tamim", 20);
p1.greet(); // hi, i am tamim
