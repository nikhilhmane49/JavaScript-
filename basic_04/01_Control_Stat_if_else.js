//Control Statement 

//if statement 

if(true){
    console.log("hello every even");
}


//comparison opretor

// < , > , <= , >= , == , === , !=

if(2=="2"){
    console.log("the code is runing");   //This code will Run --->in the condition only the value is check---->so it will execute

}

if(2==="2"){
    console.log("the code is runing");  //This code will not Run --->in the condition  the value as well as type  is check---->so it will not execute
}

//******/ if else

let num =10;

if(num<5){
    console.log("it is less then 5");
}
else{
    console.log("It is greater than 5");
};
 

const bal=1000;

if(bal>600)console.log("hello ") // this called as implicit scope --->which does not have { }-->this scope


//we can write if statement in multiple lines using ( ,) without { } (scope)---but we should not use this 
if(bal>500) console.log("test"),       
console.log("hello");


//********if , else if , else */


let bal2=500;

if(bal2 < 300){
    console.log("less than 300")
}
else if(bal2 < 400){
    console.log("less than 400")
}

else{
    console.log("grater than 400")
}

//**************&& */

const LoogedIn=true;
const user =true;

if(LoogedIn && user){
    console.log("allowed the user");
}

//**************** || */
const user1=true;
const id=false;

if(user1 || id){
    console.log("user allowed");
}
