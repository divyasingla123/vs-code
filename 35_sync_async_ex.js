//Synchronous Example
const fs = require('fs');
const data = fs.readFileSync("new_sample.txt", "utf8");
console.log(data);
console.log("Prints after reading data!");

//Asynchronous Example
// const fs = require('fs');
// function readFile(err, data) {
//     console.log(data);
// }
// fs.readFile("sample.txt", "utf8", readFile);
// console.log("Prints before reading data!");