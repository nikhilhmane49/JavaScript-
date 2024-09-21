//#########Date

let myDate=new Date();

console.log(myDate); //ouput will be 2024-06-24T10:21:27.093Z

console.log(typeof myDate);//the Date is an object


let dateNow = new Date();

console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());
console.log(dateNow.getDate());
console.log(dateNow.getHours());


//convert this date to string and see the output

console.log(myDate.toString()); //the output is easy and can be esayly read before covert the date was not readable //2024-06-24T10:21:27.093Z

console.log(myDate.toISOString());//output is 2024-06-24T10:30:53.546Z---|
   //                                                                    |        //Output: Both methods produce the same string format.(ISO)--( International Organization for Standardization)
//                                                                       |---->>  //Purpose: toISOString() is for generating ISO strings, while toJSON() is for JSON serialization.
console.log(myDate.toJSON());//output is 2024-06-24T10:30:53.546Z--------|

console.log(myDate.toLocaleDateString()); //the output of this .toLocaledatestring--->6/24/2024

console.log(myDate.toLocaleString()); //the output of the .toLocaleString--->6/24/2024, 10:29:52 AM


//let create our own date my giving the input and let see the output

let myCreatedDate=new Date(2023,0,23);//--note that in this the counting of months start form 0----means 0---> January

console.log(myCreatedDate); //the out put will be 2023-01-23T00:00:00.000Z

//--now we covert mycreateddate into the  string for easy readable

console.log(myCreatedDate.toString());//the output will be Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

let myCreatedDate2=new Date(2023,0,23,5,3);

console.log(myCreatedDate2.toDateString());//the output will be Mon Jan 23 2023

let myCreatedDate3=new Date("2023-01-14"); // for this YY-MM-DD ---here note that in this the counting of months start form 1----means 1----> January


console.log(myCreatedDate3.toLocaleString()); //output will be 1/14/2023, 12:00:00 AM


let myCreatedDate4=new Date("01-14-2023");// for this MM-DD-YY ---here note that in this the counting of months start form 1----means 1----> January

console.log(myCreatedDate4.toLocaleString()); //output will be 1/14/2023, 12:00:00 AM


