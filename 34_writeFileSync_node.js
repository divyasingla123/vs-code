//create new file if the spcified file does not exist and write(or overwrites) the data
//syntax:fs.writeFileSync(file,data,{flag:'w'})
// const fs=require('fs');
// var filename='writesample.text';
// let data="this text is inserted via node.js";
// fs.writeFileSync(filename,data);
// console.log(`data written successfully in ${filename}\n`);
//flag is optional it overwrites


//write user1,user2,user3,user4,user5
const fs=require('fs');
var filename='writesample.text';
let data=" ";
const prompt=require('prompt-sync')();
for(i=1;i<prompt;i++){
    fs.writeFileSync("user"+i+"\n");
}
fs.writeFileSync(filename,data);
console.log(`data written successfully in ${filename}\n`);
