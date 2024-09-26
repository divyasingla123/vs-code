//method used to create a file:fs.appendFile()
//syntax-fs.appendFile(path,data,[utf8],callback);
//example1
// var fs=require('fs');
// var data="\nadd this line to the file.";
// fs.appendFile('sample.txt',data,'utf8',function(err){
//     if(err)
//         throw err;
//     else
//     console.log("data is appended successfully")
// });
// PS D:\vs code> node 33_append_node.js
// data is appended successfully

//ask a no from user and append its table into new file
var fs=require("fs");
const prompt=require('prompt-sync')();
const n=prompt('enter no');
var data=' ';
function table(n)
{
    for(i=1;i<=10;i++){
    prod=n*i;
    data+=(`${n}*${i}=${prod}\n`);
    }
    data+='================\n'
}
table(n);
fs.appendFile('sample.txt',data,'utf8',function(err){
    if(err)
        throw err;
    else
    console.log('table of ${num} added to file');
});
