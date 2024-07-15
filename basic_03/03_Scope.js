//Scope


if (true) {

    let a = 10;
    const b = 20;
    var c = 90;

};

console.log(a); //This will give error because it's value is in that scope only
console.log(b); //This will give error because it's value is in that scope only
console.log(c); //This will not give you error------(**THIS IS A WORNG WAY***)

//This var is not remaing in that scope but it can be acess Global-----(**THIS IS WRONG)

//Block Scope-----which remain in that scope only----{ }

//Global Scope----Which can acess Globaly(In whole code)



//Note that

//Gobal Scope is diffrent in Bowser and is diffrent in Node--(where we write a code and then run with Node)






