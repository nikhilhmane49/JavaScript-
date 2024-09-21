//JSON


//***JSON.parse
//convert the string to a JSON object
let user = '{"name":"John","age":30,"city":"New York"}';
 
let userObject = JSON.parse(user);

console.log(userObject); //-->convert into JSON


//*****JSON.stringify */

//convert the JSON object to a string

let user2 = {
    name: "John",
    age: 30,
    city: "New York"
}

let userString = JSON.stringify(user2);

console.log(userString); //-->convert into string




