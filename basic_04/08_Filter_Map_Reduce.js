//Filter_Map_Reduce


//Filter

//Filter loop retrun the value


const myNums=[1,2,3,4,5,6,7,8,9,10];


const newNum=myNums.filter((num)=> num>4);

console.log(newNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let  userBooks=books.filter((bk)=>bk.genre==='History');

 console.log(userBooks);


   userBooks=books.filter((bk)=>bk.publish>=2000)

  console.log(userBooks);


  userBooks=books.filter((bk)=>bk.publish>=2000 && bk.genre==='Science');

  console.log(userBooks);





  //*****map
  //map loop retrun the value

  const myNumers=[1,2,3,4,5,6,7,8,9];

  
  const varNewnum = myNumers.map((num)=>{return num + 10 });

  console.log(varNewnum);
  

    //chaining map


    const newnums=myNumers
                .map((num)=>num*10) //it will store this ans in array and than pass to next one.
                .map((num)=>num+1) //it will take the value of the above and than perform the opretion and after that store into array 
                .filter((num)=>num>=40); //it will take the value form the above and perform the operation and retrun the output

console.log(newnums);



///Reduce

const mynewnum=[1,2,3,4,5,6,7,8,9];

// const Mytotal = mynewnum.reduce(function (acc , currval){
//     console.log(`acc:${acc} and currval ${currval}`);
    
//     return acc + currval
// },0);
               //OR

const Mytotal = mynewnum.reduce( (acc , currval)=>{
    console.log(`acc:${acc} and currval ${currval}`);
    
    return acc + currval
},0);

console.log(Mytotal);


                
const course =[
    {
        iteamcour:'js',
        price: 1234
    },
    {
        iteamcour:'Py',
        price: 4534
    },
    {
        iteamcour:'java',
        price: 6234
    },
    {
        iteamcour:'react',
        price: 1034
    }
];

const newiteam = course.reduce((acc,iteam)=> acc + iteam.price ,0);

console.log(newiteam);
