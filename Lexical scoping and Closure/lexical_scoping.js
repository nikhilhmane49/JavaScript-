

//*****************Lexical Scoping */

function outerFunction() {
    let outerVariable = "I am from outer function";

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from outerFunction
    }

    return innerFunction;
}

const inner = outerFunction(); // outerFunction returns innerFunction
inner(); // Calling innerFunction, which has access to outerVariable
// Output: "I am from outer function"
