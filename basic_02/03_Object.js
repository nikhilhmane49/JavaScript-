//****Object */

//Object literals


//****declreaction of Object */

const User = {} //-----this is non-singleton object

console.log(User);//output is {}---that is empty object

//declreactio of object

const mysy = Symbol("key1"); //declreation of the symbol

const jsUer = {
    "name": "nikhil",
    [mysy]: "mykey1", //this is a way to declrea symbol in object and //-----output of this---->>>[Symbol(key1)]: 'mykey1'
    age: 20,
    location: "Navi-mumbai",
    email: "nikhil@345gmail.com", 
    isLoggedIn: false,
    lastLoginDays:["monday","sunday"]
   
} 

//acess the value form the object

console.log(jsUer.email); //this we use when the key of the vlaue is not in " " for example---email

console.log(jsUer["name"]); //This we can use when the key is given in " " for example-----"name"




console.log(jsUer[mysy]); //acess the value of symbol form Object

jsUer.email = "nishantgbt.com"; //this to change the value form the Object

//Object.freeze(jsUer) //this is user to freeze the all value of the Object means we can not change the value of Object

console.log(jsUer);


// use Funaction in Object

jsUer.greeting = function () {
    console.log("hello everyone");
};

console.log(jsUer.greeting()); //this a function to call-----output---->hello everyone

console.log(jsUer.greeting); //this is a method to call---output-->[Function (anonymous)]----beacuse it will give you the refrences of the function it is not returning the function 

jsUer.greetingTwo = function () {
    console.log(`hello everyone ${this.email}`); //output---->hello everyone nishantgbt.com
};

console.log(jsUer.greetingTwo()); 
