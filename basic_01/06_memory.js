//Heap and stack memeory

//**********************stack memory 

//premitive datatype stores in stack memory 

//It works as a call by value(copy is their in the memory stack not a orignal value)

//example

let firstvar="nikhil";

let secondvar=firstvar;

 secondvar="nishant";

 console.log(firstvar); // here the output is "nikhil"

 console.log(secondvar);//here the output is "nishant"

 //so the copy is store in the stack not the orignal value


 //**********************Heap */


//non-premitive datatype stores in stack memory 

//It works as a call by reference (the original value is store in the heap memory)

//example 


let user={
    email:"nikhil234@gmail.com",
    age:22
};

let user2=user;

user2.email="nishant123@gmail.com";

console.log(user); //here the value is chnage in user also means( if me change anything in the user2 it will Reflect in the original value)


//so the original value is store in the heap 