
//#####String

const name="Nkhil-mane"; //declaration of string

const age="21";

console.log(name+age); // don't use this method,it is not good

//use Stringinterpolation mathod

console.log(`hello my name is ${name} and my age is ${age}`);
//this is the best way to acces the string



const gamename=new String('nikhil'); //another way to declared the string (it's a object formation also)


//***methods of string */




//******acess by index */

console.log(gamename[0])// access the frist index of the string




//****length */

console.log(gamename.length); // length of the string






//*****uppercase */

console.log(gamename.toUpperCase());//convert the string into uppercase






//************acesss the indexs and characters */
console.log(gamename.charAt(2)); //this give you at which index  which character is present 

console.log(gamename.indexOf('n'));//this give you at which character  which  index is present






//*******sub-string */

const newstring=gamename.substring(0 ,4) // the string into substring ,but in this the end index (i.e 4) is not included in this substring and we can not use negative index in it

console.log(newstring);





//*********slice */

const anotherstring=gamename.slice(-8 ,4) // it is the same as substring but we can give the index in negative also
console.log(anotherstring);

 const anotherstring2=gamename.slice(); // this will print your entire string 

console.log(anotherstring2);

const anotherstring3=gamename.slice(-2); // this will print form -2 to the end of the string

console.log(anotherstring3);

// In the slicing the index of the string   is negative when we acess the form the laste element of the string(-1,-2,-3,-4....so on)

 





//*****trim */
const trimstring="    Nikhil    ";

console.log(trimstring.trim()); //use to remove the spaces

//trim as the argument start and end

//trim is use on white spaces and for   line terminators.






 //*********replace */

 const url="htps://nikhilmane.com/nikhil%20mane"

 console.log(url.replace('%20','-')); //replace the element in the string

 console.log(url.includes('nikhilmane')); //check Weather the element is prent or not








//*********split */

const splitstring="nikhil-mane";

console.log(splitstring.split('-')); // split the string on the bases of '-' but it is converted into array 








//********************call */


//**1) */

let username={
    fristname:"nikhil",
    lastename:"mane",
    fullname:function(){
        console.log(this.fristname+" "+this.lastename);
    }
};



let username2={
    fristname:"nishant",
    lastename:"name"
};


//function borrowing

//borrowing the function form other object1 and use this in other object2 using that object data is called as function borrowing and this is achieve using call( ) function

username.fullname.call(username2);


//****2) */

let personInf={
    personname:"prasad",
    Id:"123"
}

let Information=function(age){
 console.log(`the name of the person is${this.personname}and it Id is ${this.Id} and it's age is ${age}`);


}

Information.call(personInf,"21");







//*************apply */

Information.apply(personInf,["24"]); // the only different between call and apply function is that ..in apply function we pass the argument in the form of array list









//************bind */


let myInfor=Information.bind(personInf,"30"); //it will create the copy of Information and bind it to personInf and it wil;l return the function (it does not call like a call function)
 
//it returns the function which can be call later

console.log(myInfor);

myInfor();//acess the return function

//it is only make a copy of the function and we can use it later