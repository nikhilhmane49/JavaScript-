

// for of loop

const arr=[1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}

const greetings="hello World!";

for (const grret of greetings) {
    console.log(`Each char is ${grret}`);
}


//Maps

//It give only unique value 
//the Duplicate value is not their in map
//it store the value in key and value 

//map cannot be iteratorable in For in loop
const map = new Map()

map.set('IN',"India");
map.set('USA',"America");
map.set('Fr',"France");

console.log(map);

for (const key of map) {
    console.log(key);
}//this will give the value in the form of array


for (const [key,value] of map) {
    console.log(key , ':-' , value);
} //This will give you a value in the form of key and value


// const myObj={
//     'game1':'NFS',
//     'game2':'Spiderman'
// }

// for (const [key,value] of myObj) {
//     console.log(myObj);
// } //the Object can not be iterator in this for of loop rather than using this loop it will work in for in loop


//for in loop


myObject2={
    js:"javasript",
    cPP:'c++',
    c : 'c'
}

for (const key in myObject2) {
  
        console.log(key);
    
}//This will only give you a key of the iteam of the object


for (const key in myObject2) {
  
    console.log(myObject2[key]);

}//This will only give you a value of the iteam of the object


for (const key in myObject2) {
  
    console.log(`${key} shortcut is for ${myObject2[key]}`);

}//this will print key and value both


const programing =["js","rb" , "py" ,"c++"]

for (const key in programing) {
  console.log(programing[key]);
}//This means that array can be run using for in loop


//For each loop

const coding =["js","c++","java","python"]

coding.forEach( function (iteam){
    console.log(iteam);
})

function printMe(iteam){
    console.log(iteam);
}

coding.forEach(printMe); //only give the refrences of the function



coding.forEach((iteam , index ,arr)=>{
    console.log(iteam, index , arr);
})

const mycoding=[
    {
        langname:"python",
        langshort:"py"
    },
    {
        langname:"java",
        langshort:"java"
    },
    {
        langname:"python",
        langshort:"py"
    }
]