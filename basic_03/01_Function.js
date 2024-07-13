//Function


//declration of Function

function AddTwoNumber(number1, number2) {   //this (value1,value2) is called as parameters
    const reslut = number1 + number2;
    return reslut;
}

const Newreslut = AddTwoNumber(3, 4); //this (value1,value2) is called as argument

console.log(Newreslut); //output---->7---->because the function is returing the value


 
function SubTwoNumber(number1, number2) { 
    console.log(number1 - number2);
   
}; 

const reslut2 = SubTwoNumber(7, 5); //outpout--->2---->because it is only printing

console.log(reslut2); //the output is undefined----->Because the function is not returing the value it is only printing the value



function UserLoogedIn(username) {
    return `${username} is looged In `
};

const res = UserLoogedIn("Nikhil"); //output--->Nikhil is looged In

console.log(res);  

const res2 = UserLoogedIn(); //output----->undefined is looged In

console.log(res2);
