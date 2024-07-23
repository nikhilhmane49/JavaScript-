//Immediately Invoked Function Expressions (IIFE)


 // An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 


// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:


// 1)The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.


//2)The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function. 


//presentation of this IIFE---->()()

//implementation of IIFE

(function hello(){     //--->name IFFE
    console.log("hello ervery one");
})();



//Aroww function with IIFE

(()=>{                //----->unname IFFE
    console.log("hello ervery one");
})();


((name)=>{
    console.log(`hello ervery one {name}`);
})(name);