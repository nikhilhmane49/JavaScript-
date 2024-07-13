//Object



//Another way to declread Object----that is singleton object

const user = new Object();

console.log(user); //output is {}

//adding the value in the created Object 
user.id = "14589abc"
user.name = "nikhil"
user.age = 45;

console.log(user)



const regularUser = {
    email: "XYZ@gamil.com",
    fullname: {
        fristName: "nikhil",
        lastName:"mane"
    }
}

//acess the value form Object

console.log(regularUser.fullname); //output---{ fristName: 'nikhil', lastName: 'mane' }

//acess the value form Object in object
console.log(regularUser.fullname.fristName) //output-----nikhil


//Merge the two or more Object

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "c", 6: "d" };


//****1st way */

const obj3 = { obj1, obj2, obj4 }; //output---->    {
                                                    // obj1: { '1': 'a', '2': 'b' },
                                                    // obj2: { '3': 'c', '4': 'd' },
                                                    // obj4: { '5': 'c', '6': 'd' }
                                                    // }
                                                    
//this is a problem in this we have Object inside Object
console.log(obj3);



//****2nd  way */
const obj5 = Object.assign({}, obj1, obj2, obj4); //output is---{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'd' }

console.log(obj5); 




//****3rd way */
const obj6 = { ...obj1, ...obj2, ...obj4 } //output is----{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'd' }

console.log(obj6);



//Array ka Object

const NewUser = [
    {
        id: 1,
        name: "nikhil"
    },
    {
        id: 2,
        name: "prasad"
    }

];

//acess of this array ka object

console.log(NewUser[1].name); //output is----prasad


//methods of the Object

const createUser = {
    name: "nikhil",
    age: 45,
    location:"Navi-Mumbai"
}

console.log(Object.keys(createUser)); //use to acess the key of the Object---->output----[ 'name', 'age', 'location' ] 
                                      //Note that ..the Output is given in the form of array  

console.log(Object.values(createUser)); //use to acess the values of the Object---->output----[ 'nikhil', 45, 'Navi-Mumbai' ]
//Note that ..the Output is given in the form of array


console.log(Object.entries(createUser)); //Use to acess both key and value ----->output-----[ [ 'name', 'nikhil' ], [ 'age', 45 ], [ 'location', 'Navi-Mumbai' ] ]
      //note that ..the output is given in the form of array


console.log(createUser.hasOwnProperty('name')); //it checks wheather the value is their in This object or not----output---true---->It give the value in bollean




