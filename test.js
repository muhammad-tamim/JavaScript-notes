let id = Symbol();
console.log(typeof id); // "symbol"

const name = "tamim";
let a = Symbol(name);
let b = Symbol(name);
console.log(a === b); // false
console.log(a, b); // Symbol(tamim) Symbol(tamim)