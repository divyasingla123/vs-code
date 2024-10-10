// const fs= require('fs');
// var filename= 'sample.txt';
// fs.appendFileSync(filename,"hello techies! \n");
// console.log(`data appended done ${filename}\n`)


//enter filename and data to be entered
const fs= require('fs');
const prompt = require('prompt-sync')();
let filename =prompt('enter file name: ');
let data =prompt('enter data: ');
fs.appendFileSync(filename,data);



