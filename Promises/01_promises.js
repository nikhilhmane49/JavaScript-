//****promises

// ---->The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


//Promise is an object


//A Promise object has three states: pending, fulfilled, and rejected.

//***Create the promise object-->by step by step


//*****************promisesOne */

// //Create a new promise--->
const promisesOne = new Promise(function (resolve, reject) {
    //Do an async task
    //Network call
    setTimeout(() => {
        //if the task is successful
        resolve('Task completed successfully');
    }, 2000); 
    
})//handel the promises--->
promisesOne.then((data) => {
    console.log("promises is complete")
    console.log(data);
    
 }
)



//*****************promisestwo */

//create a promise
const promisesTwo = new Promise(function (resolve, reject) {
    setTimeout(() => {
resolve({username:"nikhil",password:"12345"})
    }, 2000);
})//handel the promises--->
promisesTwo.then((data) => { 
    console.log("promises is complete")
    console.log(data);
})


/*****************promisesthree */

//create a promise
const promisesThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;

        if(error){
            reject("An error occurred");
        }else{
            resolve('Task completed successfully');
        }
    }, 2000);
})//handel the promises--->

promisesThree.then((data) => { 
    console.log(data);
    
}).catch((err) => { 
    console.log(err);
    
})




//******************promisesFour */

//---->chaining the then function--->acessing the deeper-value-functions


//create a promise
const promisesFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
resolve({username:"nikhil",password:"12345"})
    }, 2000);
})//handel the promises--->
promisesFour.then((data) => { 
    const myusername = data.username;
    return myusername;
  
    
}).then((myusername) => { 
    console.log(myusername);
    
}).catch((err) => {
    console.log(err)
}).finally(() => console.log("Done")); //this finally function allways run in any Situation



//***********Fetch ----->promises only */

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then(data => console.log(data))
    
    .catch((err) => {
        console.log("Error fetch" + err);

    });
        



