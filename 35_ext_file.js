/*
extname() method returns the extension of a file
Module requires: 'path'
Syntax: path.extname(filename)
*/

const path = require('path');
ext = path.extname("append.txt");
console.log(ext); // Output: .txt
// give with dot and followed by extension