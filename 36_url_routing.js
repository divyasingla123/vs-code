// const http = require("http");

// // creating Server
// const server = http.createServer((req, res) => {
//   if (req.url == "/") res.write("This is home page!");          //                  127.0.0.1/
//   else if (req.url == "/about") {
//     res.write("This is About Page!");   //             127.0.0.1/about
//   } else res.write("OOPS! Page not found...!");
//   res.end();
// });
// server.listen(80, "127.0.0.1", () => {
//   console.log("Server is Running...");
// });



//json data on brower
const fs=require('fs');
const http=require('http');

const students = fs.readFileSync("./31_data.json");
const server = http.createServer((req, res) => {
  if (req.url == "/" || req.url == "/home") res.write(home);
  else if (req.url=="/about"){
    res.write(about);
  }
  else if(req.url=="/students"){
    res.write(students);
  }
  else res.write("OOPS! Page Not Found...");
  res.end()
});