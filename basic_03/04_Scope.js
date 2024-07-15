//Scope


function one() {
    const username = "Nikhil";

    function two() {
        const website = "YouTube";
        console.log(username);     //This will  run ---output-->Nikhil
    }
    // console.log(website);      //This will give you error because it's Out of Scope
    two();
}

one();


if (true) {
    const username = "nikhil";

    if (true) {
        const website = " youtube";
        console.log(username + website);   //This will  run ---output-->nikhil youtube
    }

    //@@@ console.log(website);   //This will give you error because it's Out of Scope
}

//@@@ console.log(username);     //This will give you error because it's Out of Scope




// ++++++++++++++++++++++++++interesting++++++++++++++++

//simple Function

console.log(addone(5)); //This will Run and Output will be--6---(can acess befor declreation)

function addone(num) {
    return num + 1;
}



//Expression   / Varibale-Function

//@@@@ addtwo(5); //This will give error -->In this Expression/ Varibale-Function 
                // , the function is hold in Variable..so we can not acess this like this(can't acess befor declreation)


const addtwo=function (num) {
    return num + 2;
}

