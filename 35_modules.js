const mymodules = require('./Modules');

// var x = mymodules.add(20, 50);
// var y = mymodules.sub(50, 30);

var x = mymodules.addition(20, 50);
var y = mymodules.subtract(50, 30);

console.log(`sum: ${x}`);
console.log(`sub ${y}`);

// sum: 70
// sub 80


//link with Module.js