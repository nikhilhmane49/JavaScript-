//For loop

for (let i = 0; i < 10; i++) {
    console.log(i); 
};


for (let i = 0; i < 10; i++) {

    if(i==5){
        console.log("the best ans is 5");
    }
    console.log(i); 
};


for (let i = 0; i < 10; i++) {
    console.log(`Outer loop and the value is ${i}`); 
    for(let j = 0; j < 10; j++){
        console.log(`Inner loop and the value is ${j}`);  
    }
};




let myarray=[1,2,3,4,5];

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}



//Break and Continue


for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log("5 is  best value");
        break;
    }
console.log(`the value of index is ${index}`);



    
}
for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log("5 is  best value");
    continue;
    }
console.log(`the value of index is ${index}`);



    
}




//****for in loop


//It is typically used when you want to iterate over the keys of an object.

const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}



//*******for of loop


//It is typically used when you want to iterate over the values of an array or any iterable.


const numbers = [10, 20, 30];

for (let value of numbers) {
    console.log(value);
}
