//******************promisesFive---->Async and await */

//Create a promise
const promisesFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if(error){
            reject("An error occurred");
        } else{
            resolve({username:"javascript",password:"12345"})
        }

    }, 2000);
})//handel the promises--->(by async-await promise)

async function comsumepromisefive() {
    try {
        const response = await promisesFive;
        console.log(response);
    } catch (err) {
        console.log(err);
        
    }
}
    
comsumepromisefive(); // this function will wait for promisesFive to complete and then print the response.
    


//*********fetch--->handel the promises */

async function getAllUserData() {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // Use resp.json() to extract JSON data from the response
    const newUserData = await resp.json();
    
    console.log(newUserData);
  } catch (error) {
    console.log(error);
  }
}


getAllUserData(); // this function will wait for the fetch to complete and then print the response.

