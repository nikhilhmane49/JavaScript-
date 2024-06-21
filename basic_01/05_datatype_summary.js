

//premitive and non-premitive

//############****premitive

//---->the premitive and non-premitive datatype is divided on the base of 1)how the data is store in memory
//                                                               2)And how it is acess
// ---->non-premitive is also called as reference type

//premitive----->>(call by value) //7 types

//1)String--->" "
//2)Number--->simple number
//3)Boolearn--->true and false
//4)null-->empty
//5)undefined-->variable is declared and memory space is declared but not the value
//6)symbol--->to make any value unique 
//7)BigInt--->value that is biger 


//****symbol */
let Id=Symbol("123");

let anotherId=Symbol("123");

console.log(Id==anotherId); // the output will be false

console.log(Id);
console.log(anotherId);

console.log(Id);//datatype of symbol is allways a symbol


//********BigInt */

let BigNumber=4156328794566n // representation of bigint using this small n

console.log(typeof BigNumber); //datatype of BigInt is allways a BigInt

//########*********

//javascript is a dynamic language.
//Here are some reasons why:

//1)Dynamic Typing: Variables in JavaScript can hold values of any data type, and the type can change at runtime.
//   For example, you can assign a number to a variable and later assign a string to the same variable without any type errors.


//2)Runtime Object Construction: You can add or remove properties 
//  from objects at runtime. This means the structure of objects is not fixed and can be modified dynamically.

//########*****non-premitive


//non-premitive---//(oR reference type)

//1)array
//2)Object
//3)function

//datatype of this non-premitive is allways a object, but for the function datatype is allways a object-function


//****array */

let arrayvar=["nikhil","prasad","diva","durvesh","pranav","sujata"];

console.log(typeof arrayvar); //output is object

console.log(arrayvar);


//*****object */

let objectvar={
    name:"nikhil",
    age:21

};

console.log(typeof objectvar);//output is object

console.log(objectvar);


//*********function */

const funcvar=function(){
    console.log("hello nikhil");
}


console.log(typeof funcvar);// output is function(object-function)

console.log(funcvar);