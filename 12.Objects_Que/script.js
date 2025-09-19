// 1. Create an object for a student with name, age, and isEnrolled.
// The values are now using their correct data types (number and boolean).
let student = {
    name: "Himanshu",
    age: 22,
    isEnrolled: true,
};

// You can access values using dot notation.
console.log(student.name); 

// You can also access values using bracket notation.
console.log(student['age']); 

// 2. An object key can be a number or a boolean.
// JavaScript will automatically convert these keys to strings.
const obj1 = {
    true: "yes",
    42: "answer",
};

// To access these values, you must use bracket notation.
console.log(obj1[true]); // This will print "yes"
console.log(obj1[42]);   // This will print "answer"

// 3. Access the value of a key with a special character.
// Keys with hyphens or other special characters must be accessed using bracket notation.
const user = {
    "first-name": "Harsh",
};

// Using bracket notation to access the "first-name" key.
console.log(user["first-name"]); // This will print "Harsh"

//given a dynamic key let key = "age" how will u access user[key]
let key = "age";    
const user1 = {
    age: "26",
}

//From the object below print value of lattitude
const location1 ={
    city:"Pune",
    coordinates:{
        lat:23.2,
        lng:77.4
    }
}

//Use Object.entries() to print all key value
const course ={
    title:"JavaScript",
    duration:"4 weeks",
};
Object.entries(course).forEach(function(val){
    console.log(val[0]+": "+val[1]);
});