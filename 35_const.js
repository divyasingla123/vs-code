const os = require('os');

// returns OS CPU architecture type x32 or x86
console.log(os.arch());

// returns hostname of OS
console.log(os.hostname());

// returns platform of OS
console.log(os.platform());

// returns default directory for temporary file
console.log(os.tmpdir());

// returns OS name
console.log(os.type());

// returns current user's home directory
console.log(os.homedir());

//Output:
// x64
// LAPTOP-8BL26RC1
// win32
// C:\Users\GUNJAN~1\AppData\Local\Temp
// Windows_NT
// C:\Users\GUNJAN GARG