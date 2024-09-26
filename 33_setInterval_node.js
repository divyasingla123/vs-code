//global function-jinke liye required keyword nahi chahiye
//it is a global timer function
//executes callback function after every specified seconds
//setInterval chlta rhta hai jo time dete hai but setTimeout uss time k delay k baad chlta hai

//example1
// setInterval(function(){
//     console.log("hello,after every 1 second");
// },1000);

//example 2
var i=0;
console.log(i);
setInterval(function(){
    i++;
    console.log(i);
},1000);