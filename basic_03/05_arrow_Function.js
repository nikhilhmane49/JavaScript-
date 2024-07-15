// This and arrow function




//******This

//This----->Refer the current context 

const user={
    username:"Nikhil",
    price:546,

    wellcomeMsg:function(){
        console.log(`${this.username},wellcome to website`); 
    }

}

user.wellcomeMsg(); // output-->Nikhil,wellcome to website

user.username="sam";

user.wellcomeMsg(); //output--->sam,wellcome to website



const user2={
    username2:"Nikhil",
    price2:546,

    wellcomeMsg2:function(){
    
        console.log(this); //------>The output of this is 
    }

}

user2.wellcomeMsg2(); // output-->{
                                //     username2: 'Nikhil',
                                //     price2: 546,
                                //     wellcomeMsg2: [Function: wellcomeMsg2]
                                //   }

user2.username2="sam";

user2.wellcomeMsg2(); //output--->{
                            //     username2: 'sam',
                            //     price2: 546,
                            //     wellcomeMsg2: [Function: wellcomeMsg2]
                            //   }




console.log(this); //The output--------> {}
//-----Note (for console.log(this))
//When we will be in node environment then the output is {}
//when we will be in bowser then the output--->Window Object(global object)



function one(){
    console.log(this) //output----> Object [global] {........so..much....}
};

one();




function two(){
    let username="nikhil"
    console.log(this.username); //the output--->undefined ---(so we can not acess (this.) or this method in the function)

}

two();


const three = function (){
    let username="nikhil"
    console.log(this.username); //the output--->undefined ---(so we can not acess (this.) or this method in the function)
}


three();


//**arrow Function

const arro = () =>{
    let username="nikhil"
    console.log(this.username); //The output---->undefined---(so we can not acess (this.) or this method in the arrow function)
    console.log(this) //The output ----->{}
}

arro();

//****Explicit-arrow Funtion

//This Function have a retrun word 

const addtwo=(num1 , num2)=>{
return num1 + num2;
}

console.log(addtwo(3 ,4));

//****implicit-arrow Funtion

//This Function does not required to write retrun ---it automatically retrun the value--but it should be one line code
const addtwo2=(num1 , num2)=> (num1 + num2) ;

console.log(addtwo2(3 ,4));


//Who to retrun the Object in Arrow Function

const fun =()=>({username:"nikhil"});

console.log(fun()); //output--->{ username: 'nikhil' }
