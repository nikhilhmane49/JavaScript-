//###########***comparison opertor*******



//****comparison with same datatype
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

//****comparison with diifrent datatype

console.log("2">1); //output is true

console.log("02">1); //output is true


//*****null */

console.log(null>0); //output is false

console.log(null<0);//output is false

console.log(null==0);//output is false

console.log(null>=0);//output is true

console.log(null<=0);//output is true

console.log(null >= 1) //output is  false

console.log(null <= 1) // output is  true


//----->the reason is that an equality cheeck == and comaparisons <,>,<=,>=work diffrently
// comparisons convert null to a number,trating it as 0.
//That's why null>=0 ,null<=0 give you true and null<0,null>0 give you a false output





//****undefined */


console.log(undefined>0); //output is false

console.log(undefined<0);//output is false

console.log(undefined==0);//output is false

console.log(undefined>=0);//output is false

console.log(undefined<=0);//output is false



//****=== */

//stric cheek------(in this this will check the datatype also but in == it will only check the comaparsion)

console.log("2"===2); // the output will be false
