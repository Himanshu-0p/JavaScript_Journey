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