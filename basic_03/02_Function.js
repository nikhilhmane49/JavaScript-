//Function


//***Rest opertator

function calculateCartPrice(...num1) {
    return num1; 
}

console.log(calculateCartPrice(1, 2, 3, 4, 5, 6, 7)); //output---->[1,2,3,4,5,6,7]

function othercalculateCartPrice(val1,val2,...num1) {
    return num1;
}

console.log(othercalculateCartPrice(1, 2, 3, 4, 5, 6, 7)); //output is---->[ 3, 4, 5, 6, 7 ]

//***who to use object in Function

const user = {
    username: "nikhil",
    email: "nikhil345@gmail.com"
};

function handelObject(anyobject) {
    console.log(`The user name is ${anyobject.username}and the email is ${anyobject.email}`);

} //output --->The user name is nikhiland the email is nikhil345@gmail.com 

handelObject(user);



//***who to use array in Function

const myarray = [200, 300, 500, 400];

function returnSecoundValue(getarray) {
    return getarray[1];
}; //output---->300

console.log(returnSecoundValue(myarray));

 
