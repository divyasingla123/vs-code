//PS D:\vsc> node
//PS D:\vsc> node 32_node1.js
//PS D:\vsc> npm install prompt-sync
// PS D:\vsc> node 32_node1.js
// 16
// what is ur name?gunn khurana
// welcome gunn khurana
// PS D:\vsc> node 32_node1.js
// 16
// what is ur name?vg
// welcome vg
// enter number : 7
// 7* 1 = 7
// 7* 2 = 14
// 7* 3 = 21
// 7* 4 = 28
// 7* 5 = 35
// 7* 6 = 42
// 7* 7 = 49
// 7* 8 = 56
// 7* 9 = 63
// 7* 10 = 70

//********************************************************************************************* */
//display ans by node 32_node1.js   isse ye function chl jega

// function square(n){
//     return n*n;
// }
// console.log(square(4));




//user input in node.js
// const prompt = require('prompt-sync')();
// const name = prompt('what is ur name?');
// console.log(`welcome ${name}`);


//print table of a number
// const prompt1 = require('prompt-sync')();
// const name1 = prompt('enter number : ');
// for(var i=1;i<=10;i++){
// console.log(`${name1}* ${i} = ${i*name1}`);
// }


//print table using function
// function table(n){
//     for(var i=1;i<=10;i++){
//         console.log(`${n}* ${i} = ${i*n}`);
//     }
// }
// table(4);


//reading a file use module fs
//method used to read is : fs.readFile('filename','utf8',function)
//it returns err if error occured
//data to hold the var
//  var fs= require("fs");
//  function readData(arr,data){
//     console.log(data);
//  }
//  fs.readFile('31_node.js','utf8',readData);          //readfile is the function to read a file



 //writing to a text file using write method 
 //method used to create a file: createWriteStream()

//  var fs=require("fs");
//  var writeStream = fs.createWriteStream("writesample.txt");
//  writeStream.write("hi , this is the sample file. \n");
//  writeStream.write("thankyouuu. \n");
//  writeStream.end();


//ask a number and write its table into new file
var fs= require("fs");
const prompt = require('prompt-sync')();
const name1 = prompt('enter number : ');
var writeStream = fs.createWriteStream("writesample.txt");
for(var i=1;i<=10;i++){  
  writeStream.write(`${name1}* ${i} = ${i*name1}\n`);
    
}
writeStream.end();



