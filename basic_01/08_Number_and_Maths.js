//######################Number


//*************declaration of Number variable */

const Number1=400;

console.log(Number1); // the output is 400

const NewNumber=new Number(900);

console.log(NewNumber);//the output is [Number:900]




//*****************Number convert to string */

const Number2=300;

const NumbertoString=Number2.toString(); //convert Number to String

console.log(typeof NumbertoString); //the output will be String

console.log(NumbertoString);




//******************Fix */

const Number3=100;

console.log(Number3.toFixed(2)); // the output will be 100.00


//**************Precision */

const Number4=12.897;

console.log(Number4.toPrecision(2)) //the out will be 13

const Number5=123.4785;

console.log(Number5.toPrecision(3)); //the output will be 123

console.log(Number5.toPrecision(4)); //the output will be 123.5



//****************LocaleString */

const otherNumber=1000000;

console.log(otherNumber.toLocaleString());// the output will be 1,000,000 this is as per US

console.log(otherNumber.toLocaleString('en-IN'));//the output will be 10,00,000 this is as per INDIA


//####################Math


console.log(Math); //this math is a object ----->the output of this line is object [maths]{}

console.log(Math.abs(-5));//the output will be 5 -->all the negative is converted into positive 

console.log(Math.round(4.5));//the output of this is 5--->it rounds the number

console.log(Math.round(4.4));//the output will be 4 --->it rounds the number

console.log(Math.ceil(4.1));//the output will be 5------it will take value 5 because we have 4.1 that's why ,if it is greater than 4 in point it will take 5

console.log(Math.floor(4.9));//the output will be 4------it take the value which is befor the point

console.log(Math.random());//the output will be between 0 to 1--->the output will be in point

console.log((Math.random())*10+1)//the output will be between 1 to 9--->the output will be in point

console.log(Math.floor(Math.random())*10+1)//the output will be between 1 to 9--->the output will not in point


//****the Random number between min and max */

const min=10;
const max=20;


console.log(Math.floor(Math.random()*(max-min+1))+min); //the output will allways will be between 10 to 20







