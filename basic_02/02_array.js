//array


//*******push one array into other */

const array1=['A','B','c','D'];

const array2=[1,2,3,4,5];

array1.push(array2); //push to array ---->and merge in single array

console.log(array1);//output [ 'A', 'B', 'c', 'D', [ 1, 2, 3, 4, 5 ] ]
console.log(array1[4][2]); //the ouput is 3

//But rather than using this ..we should use concat operation


//********concat */


const arrayc1= ['a', 'b', 'c'];
const arrayc2= [1,2,3,4,5];


const arrayc3 = arrayc1.concat(arrayc2); //this will use to merge two arrays in single array
                                         //But after this concat opertation the ans is stores in another array
                                         //it is different form push opertaion ---(look the output of push and concat)

console.log(arrayc3);//[ 'a', 'b', 'c', 1, 2,   3,   4,   5]



//******* Spread */

const anotherarray=[...arrayc1,...arrayc2];//it is similar to concat opertion
                                           //But it can spread multiple array at one time ...but in concat only two array can concat

console.log(anotherarray);//[ 'a', 'b', 'c', 1, 2,   3,   4,   5]


//******flat */

const somearray=[1,2,3,[4,3,5],[7,8,9,[0,11,32,45]]];

const somenewarr=somearray.flat(Infinity); //The flat() method of Array instances creates a new array 
                                           //with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(somenewarr);


//********** */

console.log(Array.isArray("nikhil")); //It  tells you that the given ("nikhil") is a array or not //Output--false

console.log(Array.from("nikhil"));  //It convert the given string into array //output--[ 'n', 'i', 'k', 'h', 'i', 'l' ]

console.log(Array.from({name:"nikhil"}))//output is []----//It will give you empty array


//******* */

let score1=100;

let score2=100;

let score3=100;

console.log(Array.of(score1,score2,score3)); //output---[ 100, 100, 100 ]
