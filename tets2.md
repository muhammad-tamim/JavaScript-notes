









##  1.15. OPP in js

Object-Oriented Programming is a programming paradigm based on the concept of "objects" that contain properties and methods. JavaScript supports OOP through prototypes and, since ES6, through classes.

### 1.15.1. Object and properties
#### 1.15.1.1. creating objects
##### 1.15.1.1.1. using general object literal syntax

```jss
const person = {
    name: "John",
    age: 30,
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

console.log(person.name); // "John"
console.log(person.greet()); // "Hello, I'm John"
```
##### 1.15.1.1.2. Using Object Constructor

```js
const person = new Object();
person.name = "John";
person.age = 30;
person.greet = function() {
    return `Hello, I'm ${this.name}`;
};

console.log(person.name); // "John"
console.log(person.greet()); // "Hello, I'm John"
```

##### 1.15.1.1.3. Using Object.create()

```js
const personPrototype = {
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

const person = Object.create(personPrototype);
person.name = "John";
person.age = 30;

console.log(person.name); // "John"
console.log(person.greet()); // "Hello, I'm John"
```
#### 1.15.1.2. Properties
##### 1.15.1.2.1. Property Access

```js
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

// Dot notation
console.log(car.brand); // "Toyota"

// Bracket notation
console.log(car["model"]); // "Corolla"

// Dynamic property access
const property = "year";
console.log(car[property]); // 2020
```

##### 1.15.1.2.2. Property Descriptors

```js
const obj = {};

Object.defineProperty(obj, 'name', {
    value: 'John',
    writable: true,      // Can be changed
    enumerable: true,    // Shows up in for...in loops
    configurable: true   // Can be deleted or reconfigured
});

// Check property descriptor
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
```

### 1.15.2. Constructor Functions
Constructor functions are the traditional way to create objects in JavaScript before ES6 classes.

#### 1.15.2.1. Basic Constructor Function

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.greet()); // "Hello, I'm Alice"
console.log(person2.greet()); // "Hello, I'm Bob"
```

#### 1.15.2.2. Adding Methods to Prototype

```js
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Add methods to prototype (more memory efficient)
Car.prototype.getInfo = function() {
    return `${this.year} ${this.brand} ${this.model}`;
};

Car.prototype.start = function() {
    return `${this.brand} ${this.model} is starting...`;
};

const myCar = new Car("Honda", "Civic", 2021);
console.log(myCar.getInfo()); // "2021 Honda Civic"
console.log(myCar.start()); // "Honda Civic is starting..."
```

#### 1.15.2.3. Constructor Function vs Regular Function

```js
function Person(name) {
    this.name = name;
}

// Called as constructor
const person = new Person("John");
console.log(person.name); // "John"

// Called as regular function (problematic)
const result = Person("Jane");
console.log(result); // undefined
console.log(window.name); // "Jane" (in browser) - pollutes global scope
```

### 1.15.3. ES6 Classes
ES6 introduced class syntax, which is syntactic sugar over prototype-based inheritance.

#### 1.15.3.1. Basic Class Syntax

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    getAge() {
        return this.age;
    }
    
    // Static method
    static species() {
        return "Homo sapiens";
    }
}

const person = new Person("Alice", 25);
console.log(person.greet()); // "Hello, I'm Alice"
console.log(Person.species()); // "Homo sapiens"
```

#### 1.15.3.2. Class Expressions

```js
// Named class expression
const Person = class PersonClass {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

// Anonymous class expression
const Animal = class {
    constructor(species) {
        this.species = species;
    }
};
```

#### 1.15.3.3. Getters and Setters

```js
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    
    get width() {
        return this._width;
    }
    
    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            throw new Error("Width must be positive");
        }
    }
    
    get area() {
        return this._width * this._height;
    }
}

const rect = new Rectangle(5, 3);
console.log(rect.area); // 15
rect.width = 10;
console.log(rect.area); // 30
```


### 1.15.4. The Four Pillars of OOP

####  1.15.4.1. Encapsulation
Encapsulation is about bundling data and methods together and restricting access to internal details.

##### 1.15.4.1.1. Private Fields (ES2022)

```js
class BankAccount {
    #balance = 0; // Private field
    #accountNumber; // Private field
    
    constructor(accountNumber, initialBalance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return this.#balance;
        }
        throw new Error("Amount must be positive");
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return this.#balance;
        }
        throw new Error("Invalid withdrawal amount");
    }
    
    getBalance() {
        return this.#balance;
    }
    
    // Private method
    #validateAmount(amount) {
        return amount > 0;
    }
}

const account = new BankAccount("123456", 1000);
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
```

##### 1.15.4.1.2. Traditional Encapsulation (Using Closures)

```js
function createBankAccount(initialBalance = 0) {
    let balance = initialBalance;
    
    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return balance;
            }
            throw new Error("Amount must be positive");
        },
        
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return balance;
            }
            throw new Error("Invalid withdrawal amount");
        },
        
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);
console.log(account.getBalance()); // 1000
```

####  1.15.4.2. Inheritance
Inheritance allows classes to inherit properties and methods from other classes.

##### 1.15.4.2.1. Class Inheritance

```js
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    makeSound() {
        return "Some generic animal sound";
    }
    
    getInfo() {
        return `${this.name} is a ${this.species}`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog"); // Call parent constructor
        this.breed = breed;
    }
    
    makeSound() {
        return "Woof! Woof!";
    }
    
    fetch() {
        return `${this.name} is fetching the ball!`;
    }
}

class Cat extends Animal {
    constructor(name, breed) {
        super(name, "Cat");
        this.breed = breed;
    }
    
    makeSound() {
        return "Meow!";
    }
    
    climb() {
        return `${this.name} is climbing a tree!`;
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers", "Persian");

console.log(dog.getInfo()); // "Buddy is a Dog"
console.log(dog.makeSound()); // "Woof! Woof!"
console.log(dog.fetch()); // "Buddy is fetching the ball!"

console.log(cat.makeSound()); // "Meow!"
console.log(cat.climb()); // "Whiskers is climbing a tree!"
```

##### 1.15.4.2.2. Prototype-based Inheritance

```js
function Animal(name, species) {
    this.name = name;
    this.species = species;
}

Animal.prototype.makeSound = function() {
    return "Some generic animal sound";
};

Animal.prototype.getInfo = function() {
    return `${this.name} is a ${this.species}`;
};

function Dog(name, breed) {
    Animal.call(this, name, "Dog"); // Call parent constructor
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function() {
    return "Woof! Woof!";
};

Dog.prototype.fetch = function() {
    return `${this.name} is fetching the ball!`;
};

const dog = new Dog("Max", "Labrador");
console.log(dog.getInfo()); // "Max is a Dog"
console.log(dog.makeSound()); // "Woof! Woof!"
```

####  1.15.4.3. Polymorphism
Polymorphism allows objects of different types to be treated as instances of the same type.

```js
class Shape {
    constructor(name) {
        this.name = name;
    }
    
    area() {
        throw new Error("Area method must be implemented");
    }
    
    perimeter() {
        throw new Error("Perimeter method must be implemented");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius ** 2;
    }
    
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
    
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super("Triangle");
        this.a = a;
        this.b = b;
        this.c = c;
    }
    
    area() {
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    
    perimeter() {
        return this.a + this.b + this.c;
    }
}

// Polymorphism in action
const shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
];

shapes.forEach(shape => {
    console.log(`${shape.name}: Area = ${shape.area().toFixed(2)}, Perimeter = ${shape.perimeter().toFixed(2)}`);
});
```

####  1.15.4.4. Abstraction
Abstraction hides complex implementation details and shows only essential features.

```js
// Abstract class (by convention - JS doesn't have true abstract classes)
class Vehicle {
    constructor(make, model) {
        if (this.constructor === Vehicle) {
            throw new Error("Cannot instantiate abstract class Vehicle");
        }
        this.make = make;
        this.model = model;
    }
    
    // Abstract methods (must be implemented by subclasses)
    start() {
        throw new Error("start() method must be implemented");
    }
    
    stop() {
        throw new Error("stop() method must be implemented");
    }
    
    // Concrete method
    getInfo() {
        return `${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, doors) {
        super(make, model);
        this.doors = doors;
    }
    
    start() {
        return `${this.getInfo()} car is starting with ignition`;
    }
    
    stop() {
        return `${this.getInfo()} car is stopping`;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, engineSize) {
        super(make, model);
        this.engineSize = engineSize;
    }
    
    start() {
        return `${this.getInfo()} motorcycle is starting with kick/button`;
    }
    
    stop() {
        return `${this.getInfo()} motorcycle is stopping`;
    }
}

const car = new Car("Honda", "Civic", 4);
const bike = new Motorcycle("Yamaha", "R1", "1000cc");

console.log(car.start()); // "Honda Civic car is starting with ignition"
console.log(bike.start()); // "Yamaha R1 motorcycle is starting with kick/button"
```

### 1.15.5. Prototypes and Inheritance

#### 1.15.5.1. Understanding Prototypes

```js
// Every function has a prototype property
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

console.log(person1.greet()); // "Hello, I'm Alice"
console.log(person1.__proto__ === Person.prototype); // true
console.log(person1.constructor === Person); // true
```

#### 1.15.5.2. Prototype Chain

```js
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    return `${this.name} is eating`;
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

// Create prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    return `${this.name} is barking`;
};

const dog = new Dog("Buddy", "Golden Retriever");

console.log(dog.eat()); // "Buddy is eating" (inherited from Animal)
console.log(dog.bark()); // "Buddy is barking" (own method)

// Prototype chain: dog -> Dog.prototype -> Animal.prototype -> Object.prototype -> null
```

#### 1.15.5.3. Modern Prototype Methods

```js
// Object.create()
const animalPrototype = {
    eat() {
        return `${this.name} is eating`;
    },
    sleep() {
        return `${this.name} is sleeping`;
    }
};

const dog = Object.create(animalPrototype);
dog.name = "Buddy";
dog.bark = function() {
    return `${this.name} is barking`;
};

// Object.setPrototypeOf() (not recommended for performance)
const cat = { name: "Whiskers" };
Object.setPrototypeOf(cat, animalPrototype);

// Object.getPrototypeOf()
console.log(Object.getPrototypeOf(dog) === animalPrototype); // true
```


### 1.15.6. Advanced OOP Concepts

```js
// Mixin pattern - adding functionality to classes
const Flyable = {
    fly() {
        return `${this.name} is flying`;
    },
    land() {
        return `${this.name} is landing`;
    }
};

const Swimmable = {
    swim() {
        return `${this.name} is swimming`;
    },
    dive() {
        return `${this.name} is diving`;
    }
};

class Bird {
    constructor(name) {
        this.name = name;
    }
}

class Fish {
    constructor(name) {
        this.name = name;
    }
}

class Duck {
    constructor(name) {
        this.name = name;
    }
}

// Apply mixins
Object.assign(Bird.prototype, Flyable);
Object.assign(Fish.prototype, Swimmable);
Object.assign(Duck.prototype, Flyable, Swimmable);

const eagle = new Bird("Eagle");
const shark = new Fish("Shark");
const duck = new Duck("Donald");

console.log(eagle.fly()); // "Eagle is flying"
console.log(shark.swim()); // "Shark is swimming"
console.log(duck.fly()); // "Donald is flying"
console.log(duck.swim()); // "Donald is swimming"
```

#### 1.15.6.1. Composition over Inheritance

```js
// Composition approach
class Engine {
    constructor(horsepower) {
        this.horsepower = horsepower;
    }
    
    start() {
        return "Engine started";
    }
    
    stop() {
        return "Engine stopped";
    }
}

class GPS {
    navigate(destination) {
        return `Navigating to ${destination}`;
    }
}

class Car {
    constructor(make, model, horsepower) {
        this.make = make;
        this.model = model;
        this.engine = new Engine(horsepower); // Composition
        this.gps = new GPS(); // Composition
    }
    
    start() {
        return this.engine.start();
    }
    
    navigateTo(destination) {
        return this.gps.navigate(destination);
    }
    
    getInfo() {
        return `${this.make} ${this.model} with ${this.engine.horsepower}HP engine`;
    }
}

const car = new Car("Toyota", "Camry", 200);
console.log(car.start()); // "Engine started"
console.log(car.navigateTo("Home")); // "Navigating to Home"
```

#### 1.15.6.2. Method Chaining

```js
class Calculator {
    constructor(value = 0) {
        this.value = value;
    }
    
    add(num) {
        this.value += num;
        return this; // Return this for chaining
    }
    
    subtract(num) {
        this.value -= num;
        return this;
    }
    
    multiply(num) {
        this.value *= num;
        return this;
    }
    
    divide(num) {
        if (num !== 0) {
            this.value /= num;
        }
        return this;
    }
    
    result() {
        return this.value;
    }
    
    reset() {
        this.value = 0;
        return this;
    }
}

const calc = new Calculator(10);
const result = calc
    .add(5)      // 15
    .multiply(2) // 30
    .subtract(5) // 25
    .divide(5)   // 5
    .result();   // 5

console.log(result); // 5
```

#### 1.15.6.3. Factory Pattern

```js
class Car {
    constructor(make, model, type) {
        this.make = make;
        this.model = model;
        this.type = type;
    }
    
    getInfo() {
        return `${this.make} ${this.model} (${this.type})`;
    }
}

class CarFactory {
    static createCar(type, make, model) {
        switch (type.toLowerCase()) {
            case 'sedan':
                return new Car(make, model, 'Sedan');
            case 'suv':
                return new Car(make, model, 'SUV');
            case 'hatchback':
                return new Car(make, model, 'Hatchback');
            default:
                throw new Error(`Unknown car type: ${type}`);
        }
    }
}

const sedan = CarFactory.createCar('sedan', 'Honda', 'Civic');
const suv = CarFactory.createCar('suv', 'Toyota', 'RAV4');

console.log(sedan.getInfo()); // "Honda Civic (Sedan)"
console.log(suv.getInfo()); // "Toyota RAV4 (SUV)"
```

### 1.15.7. Design Patterns

#### 1.15.7.1. Singleton Pattern

```js
class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        
        this.connection = "Connected to database";
        Database.instance = this;
    }
    
    query(sql) {
        return `Executing: ${sql}`;
    }
    
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const db1 = new Database();
const db2 = new Database();
const db3 = Database.getInstance();

console.log(db1 === db2); // true
console.log(db1 === db3); // true
```

#### 1.15.7.2. Observer Pattern

```js
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    
    off(event, listenerToRemove) {
        if (!this.events[event]) return;
        
        this.events[event] = this.events[event].filter(
            listener => listener !== listenerToRemove
        );
    }
    
    emit(event, data) {
        if (!this.events[event]) return;
        
        this.events[event].forEach(listener => listener(data));
    }
}

class NewsAgency extends EventEmitter {
    constructor() {
        super();
        this.news = "";
    }
    
    setNews(news) {
        this.news = news;
        this.emit('news', news);
    }
}

class NewsChannel {
    constructor(name) {
        this.name = name;
    }
    
    update(news) {
        console.log(`${this.name} received news: ${news}`);
    }
}

const agency = new NewsAgency();
const cnn = new NewsChannel("CNN");
const bbc = new NewsChannel("BBC");

agency.on('news', (news) => cnn.update(news));
agency.on('news', (news) => bbc.update(news));

agency.setNews("Breaking: Major scientific discovery!");
```

#### 1.15.7.3. Strategy Pattern

```js
class PaymentStrategy {
    pay(amount) {
        throw new Error("pay method must be implemented");
    }
}

class CreditCardPayment extends PaymentStrategy {
    constructor(cardNumber, cvv) {
        super();
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }
    
    pay(amount) {
        return `Paid $${amount} using Credit Card ending in ${this.cardNumber.slice(-4)}`;
    }
}

class PayPalPayment extends PaymentStrategy {
    constructor(email) {
        super();
        this.email = email;
    }
    
    pay(amount) {
        return `Paid $${amount} using PayPal account ${this.email}`;
    }
}

class CryptoPayment extends PaymentStrategy {
    constructor(walletAddress) {
        super();
        this.walletAddress = walletAddress;
    }
    
    pay(amount) {
        return `Paid $${amount} using Crypto wallet ${this.walletAddress.slice(0, 10)}...`;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
        this.paymentStrategy = null;
    }
    
    addItem(item, price) {
        this.items.push({ item, price });
    }
    
    setPaymentStrategy(strategy) {
        this.paymentStrategy = strategy;
    }
    
    checkout() {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        return this.paymentStrategy.pay(total);
    }
}

const cart = new ShoppingCart();
cart.addItem("Laptop", 999);
cart.addItem("Mouse", 25);

// Pay with credit card
cart.setPaymentStrategy(new CreditCardPayment("1234567890123456", "123"));
console.log(cart.checkout()); // "Paid $1024 using Credit Card ending in 3456"

// Pay with PayPal
cart.setPaymentStrategy(new PayPalPayment("user@example.com"));
console.log(cart.checkout()); // "Paid $1024 using PayPal account user@example.com"
```

### 1.15.8. Best Practices

#### 1.15.8.1. Use Meaningful Names

```js
// Bad
class P {
    constructor(n, a) {
        this.n = n;
        this.a = a;
    }
    
    g() {
        return `${this.n} is ${this.a} years old`;
    }
}

// Good
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}
```

####  1.15.8.2. Follow Single Responsibility Principle

```js
// Bad - Class doing too many things
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    save() {
        // Save user to database
        console.log("Saving user to database");
    }
    
    sendEmail() {
        // Send email to user
        console.log("Sending email");
    }
    
    validateEmail() {
        // Validate email format
        return /\S+@\S+\.\S+/.test(this.email);
    }
    
    hashPassword(password) {
        // Hash password
        return "hashed_" + password;
    }
}

// Good - Separated responsibilities
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    getInfo() {
        return `${this.name} (${this.email})`;
    }
}

class UserRepository {
    save(user) {
        console.log("Saving user to database");
    }
    
    findByEmail(email) {
        // Find user by email
    }
}

class EmailService {
    send(user, message) {
        console.log(`Sending email to ${user.email}`);
    }
}

class EmailValidator {
    static validate(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
}

class PasswordService {
    static hash(password) {
        return "hashed_" + password;
    }
}
```

###### 1.15.8.2.0.1. Use Composition When Appropriate

```js
// Instead of deep inheritance hierarchies, use composition
class Engine {
    constructor(type, horsepower) {
        this.type = type;
        this.horsepower = horsepower;
    }
    
    start() {
        return `${this.type} engine started`;
    }
}

class Transmission {
    constructor(type) {
        this.type = type;
    }
    
    shift(gear) {
        return `Shifted to ${gear} gear`;
    }
}

class Vehicle {
    constructor(make, model, engine, transmission) {
        this.make = make;
        this.model = model;
        this.engine = engine;
        this.transmission = transmission;
    }
    
    start() {
        return this.engine.start();
    }
    
    shift(gear) {
        return this.transmission.shift(gear);
    }
}

const v6Engine = new Engine("V6", 280);
const automaticTrans = new Transmission("Automatic");
const car = new Vehicle("Honda", "Accord", v6Engine, automaticTrans);
```

#### 1.15.8.3. Use Private Members for Internal State

```js
class Counter {
    #count = 0; // Private field
    #maxCount; // Private field
    
    constructor(maxCount = 100) {
        this.#maxCount = maxCount;
    }
    
    increment() {
        if (this.#count < this.#maxCount) {
            this.#count++;
        }
        return this;
    }
    
    decrement() {
        if (this.#count > 0) {
            this.#count--;
        }
        return this;
    }
    
    get value() {
        return this.#count;
    }
    
    // Private method
    #validate() {
        return this.#count >= 0 && this.#count <= this.#maxCount;
    }
}
```

###  1.15.9. Examples

#### 1.15.9.1. E-commerce System

```js
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    
    getInfo() {
        return `${this.name} - $${this.price} (${this.category})`;
    }
}

class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new CartItem(product, quantity));
        }
    }
    
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }
    
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.product.id === productId);
        if (item) {
            item.quantity = quantity;
        }
    }
    
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
    
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }
    
    clear() {
        this.items = [];
    }
    
    getItems() {
        return [...this.items]; // Return copy to prevent external modification
    }
}

class Customer {
    constructor(id, name, email, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.orderHistory = [];
    }
    
    addOrder(order) {
        this.orderHistory.push(order);
    }
    
    getOrderHistory() {
        return [...this.orderHistory];
    }
}

class Order {
    constructor(customer, cart) {
        this.id = Date.now(); // Simple ID generation
        this.customer = customer;
        this.items = cart.getItems();
        this.totalAmount = cart.getTotalPrice();
        this.status = 'pending';
        this.orderDate = new Date();
    }
    
    updateStatus(status) {
        this.status = status;
    }
    
    getOrderSummary() {
        return {
            id: this.id,
            customer: this.customer.name,
            items: this.items.length,
            total: this.totalAmount,
            status: this.status,
            date: this.orderDate
        };
    }
}

// Usage Example
const laptop = new Product(1, "Gaming Laptop", 1299, "Electronics");
const mouse = new Product(2, "Wireless Mouse", 29, "Electronics");
const book = new Product(3, "JavaScript Guide", 45, "Books");

const customer = new Customer(1, "John Doe", "john@example.com", "123 Main St");
const cart = new ShoppingCart();

cart.addItem(laptop, 1);
cart.addItem(mouse, 2);
cart.addItem(book, 1);

console.log(`Cart total: ${cart.getTotalPrice()}`); // Cart total: $1402
console.log(`Items in cart: ${cart.getItemCount()}`); // Items in cart: 4

const order = new Order(customer, cart);
customer.addOrder(order);

console.log(order.getOrderSummary());
```

### 1.15.10. Task Management System

```js
class Task {
    constructor(id, title, description, priority = 'medium') {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = 'pending';
        this.createdAt = new Date();
        this.completedAt = null;
        this.assignee = null;
    }
    
    assignTo(user) {
        this.assignee = user;
    }
    
    markComplete() {
        this.status = 'completed';
        this.completedAt = new Date();
    }
    
    markInProgress() {
        this.status = 'in-progress';
    }
    
    updatePriority(priority) {
        const validPriorities = ['low', 'medium', 'high', 'urgent'];
        if (validPriorities.includes(priority)) {
            this.priority = priority;
        }
    }
    
    getTimeToComplete() {
        if (this.completedAt && this.createdAt) {
            return this.completedAt.getTime() - this.createdAt.getTime();
        }
        return null;
    }
}

class User {
    constructor(id, name, email, role = 'member') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.assignedTasks = [];
    }
    
    assignTask(task) {
        this.assignedTasks.push(task);
        task.assignTo(this);
    }
    
    getTasksByStatus(status) {
        return this.assignedTasks.filter(task => task.status === status);
    }
    
    completeTask(taskId) {
        const task = this.assignedTasks.find(task => task.id === taskId);
        if (task) {
            task.markComplete();
        }
    }
}

class Project {
    constructor(id, name, description, manager) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.manager = manager;
        this.tasks = [];
        this.members = [manager];
        this.createdAt = new Date();
    }
    
    addMember(user) {
        if (!this.members.includes(user)) {
            this.members.push(user);
        }
    }
    
    removeMember(user) {
        this.members = this.members.filter(member => member.id !== user.id);
    }
    
    addTask(task) {
        this.tasks.push(task);
    }
    
    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
    
    getTasksByPriority(priority) {
        return this.tasks.filter(task => task.priority === priority);
    }
    
    getTasksByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }
    
    getCompletionRate() {
        if (this.tasks.length === 0) return 0;
        const completedTasks = this.getTasksByStatus('completed').length;
        return (completedTasks / this.tasks.length) * 100;
    }
    
    getProjectStats() {
        return {
            totalTasks: this.tasks.length,
            completed: this.getTasksByStatus('completed').length,
            inProgress: this.getTasksByStatus('in-progress').length,
            pending: this.getTasksByStatus('pending').length,
            completionRate: this.getCompletionRate()
        };
    }
}

class TaskManager {
    constructor() {
        this.projects = [];
        this.users = [];
        this.nextTaskId = 1;
        this.nextProjectId = 1;
        this.nextUserId = 1;
    }
    
    createUser(name, email, role) {
        const user = new User(this.nextUserId++, name, email, role);
        this.users.push(user);
        return user;
    }
    
    createProject(name, description, manager) {
        const project = new Project(this.nextProjectId++, name, description, manager);
        this.projects.push(project);
        return project;
    }
    
    createTask(title, description, priority) {
        return new Task(this.nextTaskId++, title, description, priority);
    }
    
    getUserById(id) {
        return this.users.find(user => user.id === id);
    }
    
    getProjectById(id) {
        return this.projects.find(project => project.id === id);
    }
    
    getOverallStats() {
        const totalTasks = this.projects.reduce((sum, project) => sum + project.tasks.length, 0);
        const totalCompleted = this.projects.reduce((sum, project) => 
            sum + project.getTasksByStatus('completed').length, 0);
        
        return {
            totalProjects: this.projects.length,
            totalUsers: this.users.length,
            totalTasks,
            totalCompleted,
            overallCompletionRate: totalTasks > 0 ? (totalCompleted / totalTasks) * 100 : 0
        };
    }
}

// Usage Example
const taskManager = new TaskManager();

// Create users
const alice = taskManager.createUser("Alice Johnson", "alice@company.com", "manager");
const bob = taskManager.createUser("Bob Smith", "bob@company.com", "developer");
const charlie = taskManager.createUser("Charlie Brown", "charlie@company.com", "designer");

// Create project
const webProject = taskManager.createProject(
    "Website Redesign", 
    "Complete redesign of company website", 
    alice
);

webProject.addMember(bob);
webProject.addMember(charlie);

// Create and assign tasks
const task1 = taskManager.createTask("Design mockups", "Create initial design mockups", "high");
const task2 = taskManager.createTask("Setup development environment", "Configure dev tools", "medium");
const task3 = taskManager.createTask("Implement homepage", "Code the new homepage", "high");

webProject.addTask(task1);
webProject.addTask(task2);
webProject.addTask(task3);

charlie.assignTask(task1);
bob.assignTask(task2);
bob.assignTask(task3);

// Update task statuses
task1.markInProgress();
task2.markComplete();

console.log("Project Stats:", webProject.getProjectStats());
console.log("Overall Stats:", taskManager.getOverallStats());
```

### 1.15.11. Banking System

```js
// Abstract Account class
class Account {
    constructor(accountNumber, accountHolder, initialBalance = 0) {
        if (this.constructor === Account) {
            throw new Error("Cannot instantiate abstract Account class");
        }
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.transactions = [];
        this.createdAt = new Date();
        this.isActive = true;
    }
    
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        if (!this.isActive) {
            throw new Error("Account is not active");
        }
        
        this.balance += amount;
        this.addTransaction('deposit', amount);
        return this.balance;
    }
    
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (!this.isActive) {
            throw new Error("Account is not active");
        }
        if (amount > this.getAvailableBalance()) {
            throw new Error("Insufficient funds");
        }
        
        this.balance -= amount;
        this.addTransaction('withdrawal', amount);
        return this.balance;
    }
    
    addTransaction(type, amount, description = '') {
        this.transactions.push({
            id: Date.now(),
            type,
            amount,
            description,
            balance: this.balance,
            timestamp: new Date()
        });
    }
    
    getBalance() {
        return this.balance;
    }
    
    // Abstract method - must be implemented by subclasses
    getAvailableBalance() {
        throw new Error("getAvailableBalance() must be implemented");
    }
    
    getTransactionHistory() {
        return [...this.transactions];
    }
    
    closeAccount() {
        this.isActive = false;
    }
    
    getAccountInfo() {
        return {
            accountNumber: this.accountNumber,
            accountHolder: this.accountHolder,
            balance: this.balance,
            type: this.constructor.name,
            isActive: this.isActive,
            createdAt: this.createdAt
        };
    }
}

class SavingsAccount extends Account {
    constructor(accountNumber, accountHolder, initialBalance = 0, interestRate = 0.02) {
        super(accountNumber, accountHolder, initialBalance);
        this.interestRate = interestRate;
        this.minimumBalance = 100;
    }
    
    getAvailableBalance() {
        return Math.max(0, this.balance - this.minimumBalance);
    }
    
    addInterest() {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        this.addTransaction('interest', interest, 'Monthly interest');
        return interest;
    }
    
    withdraw(amount) {
        if (this.balance - amount < this.minimumBalance) {
            throw new Error(`Withdrawal would violate minimum balance of ${this.minimumBalance}`);
        }
        return super.withdraw(amount);
    }
}

class CheckingAccount extends Account {
    constructor(accountNumber, accountHolder, initialBalance = 0, overdraftLimit = 500) {
        super(accountNumber, accountHolder, initialBalance);
        this.overdraftLimit = overdraftLimit;
        this.monthlyFee = 12;
    }
    
    getAvailableBalance() {
        return this.balance + this.overdraftLimit;
    }
    
    withdraw(amount) {
        if (amount > this.getAvailableBalance()) {
            throw new Error(`Withdrawal exceeds overdraft limit of ${this.overdraftLimit}`);
        }
        
        this.balance -= amount;
        this.addTransaction('withdrawal', amount);
        
        // Apply overdraft fee if balance goes negative
        if (this.balance < 0) {
            const overdraftFee = 35;
            this.balance -= overdraftFee;
            this.addTransaction('fee', overdraftFee, 'Overdraft fee');
        }
        
        return this.balance;
    }
    
    applyMonthlyFee() {
        this.balance -= this.monthlyFee;
        this.addTransaction('fee', this.monthlyFee, 'Monthly maintenance fee');
    }
}

class BusinessAccount extends Account {
    constructor(accountNumber, businessName, initialBalance = 0) {
        super(accountNumber, businessName, initialBalance);
        this.transactionLimit = 100; // transactions per month
        this.monthlyTransactionCount = 0;
        this.transactionFee = 0.50;
    }
    
    getAvailableBalance() {
        return this.balance;
    }
    
    deposit(amount) {
        const result = super.deposit(amount);
        this.incrementTransactionCount();
        return result;
    }
    
    withdraw(amount) {
        const result = super.withdraw(amount);
        this.incrementTransactionCount();
        return result;
    }
    
    incrementTransactionCount() {
        this.monthlyTransactionCount++;
        if (this.monthlyTransactionCount > this.transactionLimit) {
            this.balance -= this.transactionFee;
            this.addTransaction('fee', this.transactionFee, 'Excess transaction fee');
        }
    }
    
    resetMonthlyTransactionCount() {
        this.monthlyTransactionCount = 0;
    }
}

class Bank {
    constructor(name) {
        this.name = name;
        this.accounts = [];
        this.nextAccountNumber = 1000;
    }
    
    createSavingsAccount(accountHolder, initialBalance, interestRate) {
        const account = new SavingsAccount(
            this.generateAccountNumber(),
            accountHolder,
            initialBalance,
            interestRate
        );
        this.accounts.push(account);
        return account;
    }
    
    createCheckingAccount(accountHolder, initialBalance, overdraftLimit) {
        const account = new CheckingAccount(
            this.generateAccountNumber(),
            accountHolder,
            initialBalance,
            overdraftLimit
        );
        this.accounts.push(account);
        return account;
    }
    
    createBusinessAccount(businessName, initialBalance) {
        const account = new BusinessAccount(
            this.generateAccountNumber(),
            businessName,
            initialBalance
        );
        this.accounts.push(account);
        return account;
    }
    
    generateAccountNumber() {
        return `ACC${this.nextAccountNumber++}`;
    }
    
    findAccount(accountNumber) {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }
    
    transfer(fromAccountNumber, toAccountNumber, amount) {
        const fromAccount = this.findAccount(fromAccountNumber);
        const toAccount = this.findAccount(toAccountNumber);
        
        if (!fromAccount || !toAccount) {
            throw new Error("One or both accounts not found");
        }
        
        fromAccount.withdraw(amount);
        toAccount.deposit(amount);
        
        fromAccount.addTransaction('transfer_out', amount, `Transfer to ${toAccountNumber}`);
        toAccount.addTransaction('transfer_in', amount, `Transfer from ${fromAccountNumber}`);
        
        return true;
    }
    
    getTotalAssets() {
        return this.accounts.reduce((total, account) => total + account.getBalance(), 0);
    }
    
    getAccountsByType(accountType) {
        return this.accounts.filter(account => account instanceof accountType);
    }
    
    applyMonthlyInterest() {
        this.getAccountsByType(SavingsAccount).forEach(account => {
            if (account.isActive) {
                account.addInterest();
            }
        });
    }
    
    applyMonthlyFees() {
        this.getAccountsByType(CheckingAccount).forEach(account => {
            if (account.isActive) {
                account.applyMonthlyFee();
            }
        });
        
        this.getAccountsByType(BusinessAccount).forEach(account => {
            if (account.isActive) {
                account.resetMonthlyTransactionCount();
            }
        });
    }
}

// Usage Example
const myBank = new Bank("First National Bank");

// Create accounts
const johnSavings = myBank.createSavingsAccount("John Doe", 1000, 0.025);
const johnChecking = myBank.createCheckingAccount("John Doe", 500, 1000);
const acmeBusinessAccount = myBank.createBusinessAccount("Acme Corp", 10000);

console.log("John's Savings:", johnSavings.getAccountInfo());
console.log("John's Checking:", johnChecking.getAccountInfo());

// Perform transactions
johnSavings.deposit(200);
johnChecking.withdraw(100);
myBank.transfer(johnSavings.accountNumber, johnChecking.accountNumber, 300);

console.log("After transactions:");
console.log("Savings Balance:", johnSavings.getBalance());
console.log("Checking Balance:", johnChecking.getBalance());
console.log("Bank Total Assets:", myBank.getTotalAssets());

// Apply monthly operations
myBank.applyMonthlyInterest();
myBank.applyMonthlyFees();

console.log("After monthly operations:");
console.log("Savings Balance:", johnSavings.getBalance());
console.log("Checking Balance:", johnChecking.getBalance());
```


