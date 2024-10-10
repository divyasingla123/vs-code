//this method  returns an array of all the contents of directory
const fs=require('fs');
const dirname = 'D:/vsc/about';
const fileList = fs.readdirSync(dirname);
console.log('files and folders in the directory: \n',fileList);
