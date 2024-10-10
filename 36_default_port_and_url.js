const http = require("http");
//creating server
const server = http.createServer((req,res)=>{
    //sending the response
    res.write("listening on default port 80!");
    res.end();
    console.log(req.url);
});
//server listening to port 3000
server.listen(80,"127.0.0.1",()=>
{
    console.log("server is running...");
});