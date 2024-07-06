//array

//declreation of array

//First way of declreation

const myArr=[0,1,3,5,4,5,6,7]; //Thier is a const but we can make a change in the array

console.log(myArr);

console.log(typeof myArr); //typeof of array is allways a object

//secound way to declreation

const myArr2=new Array(1,2,3,4,5);

console.log(myArr2);



//acess the array element using index

console.log(myArr[3]); //output is 5


//Methods in array


//****push method */
myArr2.push(6); //This method push (add) the element at the last index of the  array
myArr2.push(7);

console.log(myArr2);

//******pop method */
myArr2.pop(); //This method pop the element form the last index of the array

console.log(myArr2);


//****unshift and shift */

//----unshift */
myArr2.unshift(9);//This method is used to add the given element(9) at the starting postion and it shift the other element ahead 


console.log(myArr2);

//----shift
myArr2.shift();//This method is used to remove the starting element form the array

console.log(myArr2);

//****includes */
console.log(myArr2.includes(2)); //This method is used to check whether this element is present in the array or not
                                 //The output of this is in boolean(true,false)

//*****indexof */
console.log(myArr2.indexOf(3));//This method will give you a value at that given index


//******join */
const newArr=myArr2.join(); //this is use to covert all the element of the array into the string;

console.log(newArr);

console.log(typeof newArr); //Now the typeof of the array after apllaying join( ) it becomes string



//*****slice , splice */

console.log("A",myArr);

const myArr3=myArr.slice(1,4);//This method is used to take a element form (1 to 3 --4 is not included) it will not change the orignal array

console.log(myArr3);

console.log("B",myArr);

const myArr4=myArr.splice(1,4);//This method is used to take a element form (1 to 4)
                               //(imp)This splice will remove the splice part form the array  and remain all the elemnt in that array will remain same but it will not inclued splice element

console.log(myArr4);

console.log("C",myArr);





// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

//A shallow copy of an object is a copy whose properties share the same references

//A deep copy of an object is a copy whose properties do not share the same references 