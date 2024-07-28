//Nullish coalescing Operator (??) : null undefined 

//it is use only for null and undefined 

let val1;

val1 =5 ?? 10; //output is 5

console.log(val1);

val1= null ?? 10; //output is 10

console.log(val1)

val1 = undefined ?? 15; //output is 15

console.log(val1);


//***********Terniary Opertator

// condition ? true : false

const icePrice =100;

icePrice >= 80 ? console.log("greater than 80") : console.log("less than 80");