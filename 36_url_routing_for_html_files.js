const fs = require("fs");
const http= require("http");
const about= fs.readFileSync('./9_list.html');
const contact = fs.readFileSync('./7_eg.html');
const login = fs.readFileSync('./6_div_tag.html');

const server = http.createServer((req,res)=>{
    if(req.url == "/" ||req.url == "/about")
        res.write(about);
    else if(req.url == "/login"){
        res.write(login);
    }
    else if(req.url == "/contact"){
        res.write(contact);
    }
    else
    res.write("OOPS! page not found....!");
res.end();

});



//url routing by creating links
/*
eg: 1*******************
index.html
<body>
    <a href = "/home"</a> 
    <a href= "/about">about</a> 
    <a href= "/contact">contact </a>
    <br>
    <h1>this is <u> home</u> page! </h1>
</body>

eg: 2*********************
about.html
    <a href = "/home"</a> 
    <a href= "/about">about</a> 
    <a href= "/contact">contact </a>
    <br>
    <h1>this is <u> about</u> page! </h1>
</body> */