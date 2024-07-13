//Object

const course={
    coursename: "js-hindi",
    price: "45687",
    courInstructor:"Nikhil"
}

//destructure

const { courInstructor } = course 

console.log(courInstructor);

const { coursename: name } = course

console.log(name);
