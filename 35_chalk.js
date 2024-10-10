/*
Chalk Module in Node.js is the third-party module that is used for styling the format of text.
It helps to customize the color of the output of the command-line output
To install give command: npm install chalk@4.0.0 OR npm i chalk@4.0.0
usual statement: npm install package_name
npm install package_name@version
major, minor, patch
major(bhout saare changes kiye hai, kuch hata diya, kuch add karr diya, new version nikala hai)
minor(bhout minor sa changes, ek do function add sub kiye hai)
patch(sirf bugs fix kiye hai, kuch add sub nahi kiya)
*/

// const chalk = require("chalk");

// // Printing the text
// console.log(chalk.red("Red Text"));
// console.log(chalk.green.underline("Green Underline Text"));
// console.log(chalk.yellow.bold("Yellow Bold Text"));





const chalk = require("chalk");

const error = chalk.bold.red;
const success = chalk.green;
const flag = true;

console.log(flag ? success('Great! Code executed successfully!') : error('Some error occurs!'));

/*
Usual if-else syntax:
if(flag)
    console.log(success('Great! Code executed successfully!'));
else
    console.log(error('Some error occurs!'));
*/