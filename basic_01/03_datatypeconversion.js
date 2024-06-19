//conversion of datatype


//######convert to number

let score=33;
let score1="33"

console.log(typeof score); //number
console.log(typeof score1); //string

let NumberIn=Number(score1); //conversion

console.log(typeof NumberIn); //score1 is converted into Number





let score3="33abc"

console.log(typeof score3); //string

let NumberIn1=Number(score3); //conversion to number

console.log(typeof NumberIn1); // number

console.log(NumberIn1);// the output will be NaN(not a number)




//*******null

let score4=null
console.log(typeof score4); //object

let NumberIn2=Number(score4);//conversion to number

console.log(score4); //output will be null

console.log(NumberIn2);//output will  be 0




//*****undefined

let score5=undefined;

console.log(typeof score5); //undefined

let NumberIn3=Number(score5); //conversion to number

console.log(typeof NumberIn3); //number

console.log(NumberIn3);// the output will be NaN(not a number)


//******boolean

let score6=true;

console.log(typeof score6); //boolean

let NumberIn4=Number(score6); //conversion to number

console.log(typeof NumberIn4); //number

console.log(NumberIn4);// the output will be 1


//*****string

let score7="Nikhil";

console.log(typeof score7); //string

let NumberIn5=Number(score7); //conversion to number

console.log(typeof NumberIn5); //number

console.log(NumberIn5);// the output will be NaN(not a number)



//#####convert to boolean




//******for 1

let bool1=1;

let boolcon1=Boolean(bool1) // convert to boolean

console.log(boolcon1); //output will be true





//*****for empty string

let bool2="";

let boolcon2=Boolean(bool2) //convert to boolean

console.log(boolcon2); //output will be false




//*****for string

let bool3="Nikhil";

let boolcon3=Boolean(bool3); //convert to boolean

console.log(boolcon3); // the output will be true



//######convert to string


let stringnum=33;

let converstring=String(stringnum); // convert to string

console.log(converstring);// output will be 33 ---but the typeof will be string






//********************************## opertion*****************