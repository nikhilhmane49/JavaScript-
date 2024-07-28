// truthy and falsy value



//falsy value

//1) false
// 2) 0
// 3) -0
// 4) BigInt
// 5) ""
// 6) 0n
// 7) null
// 8) undefined
// 9) NaN

//truthy value

// 1) " 0 "
// 2) "false"
// 3) "  "
// 4) []
// 5) { }
// 6) function(){}


//Hwo to ckech the array and object is empty or not

//**array */
const user=[];

if(user.length === 0){
    console.log("the array is empty");
}

//****Object */

const user2={};

if(Object.keys(user2).length ===0){    //Object.keys(user2)--->This will give me a array
    console.log("the Object is empty");
}

//******* */

if(false==0){
    console.log("execute"); //output--->execute
}

if(false==""){
    console.log("execute"); //output--->execute
}

if(0 == ""){
    console.log("execute"); //output--->execute
}