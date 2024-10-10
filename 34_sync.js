// fs.existsSync() check if file exits and if directory not specifiesd then it check in curreent directory
// fs.renameSync() used to rename existing file


const fs = require('fs');
var filename= 'sample.txt';
const exist = fs.existsSync(filename);
if(exist){
    fs.renameSync(filename,"new_sample.txt");
    console.log("file renamed successfully");
}
else{
    console.log("file doses nt exist");
}