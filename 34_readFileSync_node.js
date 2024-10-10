//synchronous methos
//fs.readFileSync() method is used to read the files content synchronusly
//syntax:fs.readFileSync("filename",{encoding:value})
//if encoding is not specified then it will return binary data from a file


// const fs=require('fs');
// var filename='sample.txt';
// const data=fs.readFileSync(filename,{encoding:'utf8'});
// console.log(data);

// PS D:\vs code> node 34_readFileSync_node.js
// hi,this is sample file
// thankyou
// add this line to the file.
// add this line to the file. 9*1=9
// 9*2=18
// 9*3=27
// 9*4=36
// 9*5=45
// 9*6=54
// 9*7=63
// 9*8=72
// 9*9=81
// 9*10=90

//if we remove encoding
// PS D:\vs code> node 34_readFileSync_node.js
// <Buffer 68 69 2c 74 68 69 73 20 69 73 20 73 61 6d 70 6c 65 20 66 69 6c 65 0a 74 68 61 6e 6b 79 6f 75 0a 61 64 64 20 74 68 69 73 20 6c 69 6e 65 20 74 6f 20 74 ... 123 more bytes>


//tostring()-to convert binary file to string
const fs=require('fs');
var filename='sample.txt';
const data=fs.readFileSync(filename);
console.log(data.toString());