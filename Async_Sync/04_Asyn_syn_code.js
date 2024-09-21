//**********Asyn-function */

//Async function---->because it take time to get the file and read the data in it. 
Read the file

let fs = require('fs');

fs.readFile('a.tx', 'utf8', function (err, data) { //a.tx is a file we can create and in this we can put the data in it 

    console.log(data);
    
});


//*******Some Good thing to know

console.log("hiii 1");

setTimeout(function() {
    console.log("hiii 2");
}, 1000);

console.log("hiii 3");

for (let i = 0; i < 100000000; i++){
    i++;
    return i;
}



// when the while Async functions time out and it is ready to be executed but it wait for completion of the 
//    on going function after execution of on going function then only Asyn function will be executed
//    --->means it wait for completion of the on going function even if the async function time is out and it is ready to be executed



