// function square(n)
// {
// return n*n;
// }
// console.log(square(4));
// PS D:\vs code> node node.js
// 16

//prompt
// PS D:\vs code> npm install prompt-sync
// up to date, audited 4 packages in 3s
// found 0 vulnerabilities

// const prompt=require('prompt-sync')();
// const name=prompt('your name?');
// console.log(`welcome ${name}`);

// PS D:\vs code> node node.js
// your name?divya
// welcome divya


//print table
// const prompt=require('prompt-sync')();
// const no=prompt('enter no');
// for(i=1;i<=10;i++){
//    prod=no*i;
//    console.log(`${no}*${i}=${prod}`);
// }
// PS D:\vs code> node node.js
// enter no7
// 7*1=7
// 7*2=14
// 7*3=21
// 7*4=28
// 7*5=35
// 7*6=42
// 7*7=49
// 7*8=56
// 7*9=63

//print table using function
// const prompt=require('prompt-sync')();
// const n=prompt('enter no');
// function table(n)
// {
//     for(i=1;i<=10;i++){
//     prod=n*i;
//     console.log(`${n}*${i}=${prod}`);
//     }
// }
// table(n);
// PS D:\vs code> node node.js
// enter no5
// 5*1=5
// 5*2=10
// 5*3=15
// 5*4=20
// 5*5=25
// 5*6=30
// 5*7=35
// 5*8=40
// 5*9=45
// 5*10=50


//reading a text file
//module used:'fs'
//method used to read content of a file:fs.readfile('filename','utf8,function)
//err return error if error
//data:variable to hold data
// var fs=require("fs");
// function readata(err,data){
//     console.log(data);
// }
// fs.readFile('data.json','utf8',readata); //yaha se uper function call krega
// PS D:\vs code> node node.js
// {
//     "maths": 97,
//     "chemistry": 78,
//     "language": 92
// }

//writing to a text file
//method to create a file:createWriteStream()
//method to write:write()
var fs=require("fs");
var writestream=fs.createWriteStream("sample.txt");
writestream.write("hi,this is sample file\n");
writestream.write("thankyou");
writestream.end();
//new file is made


//ask a number from user and write its table int a new file
var fs=require("fs");
const prompt=require('prompt-sync')();
const n=prompt('enter no');
var writestream=fs.createWriteStream("table_node.txt");
function table(n)
{
    for(i=1;i<=10;i++){
    prod=n*i;
    writestream.write(`${n}*${i}=${prod}\n`);
    }
    writestream.end();
}
table(n);

