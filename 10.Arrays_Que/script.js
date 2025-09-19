// create an array with 3 fruits and return one
let fruits = ["apple","mango","banana"];
console.log(fruits[2]); // Correct: prints "banana"

// add one value in end and at the start
fruits.push("10"); // Correct: fruits is now ["apple", "mango", "banana", "10"]
fruits.unshift("11"); // Correct: fruits is now ["11", "apple", "mango", "banana", "10"]

// Remove the last item from the array using the method
let numbers = [1,2,3,4,5];
numbers.pop(); // Correct: numbers is now [1, 2, 3, 4]

// Inster Red and Blue at index 1 in this array
let colors = ["Green","Yellow"];
colors.splice(1,0,"Red","Blue"); // Correct: colors is now ["Green", "Red", "Blue", "Yellow"]

// Extract only middle 3 elements from this array
let item = [1,2,3,4,5,6];
let newitem = item.slice(1,4); // Correct: newitem is [2, 3, 4]
console.log(newitem);

// sort array alphabatically and reverse it;
let names = ["himanshu","pranav","yash","neeraj"];
names.sort().reverse(); // Correct: names is now ["yash", "pranav", "neeraj", "himanshu"]

// Use .map() to square each number
let sq = [1,2,3,4];
let newsq = sq.map(function(val){
    return val*val;
}) // Correct: newsq is [1, 4, 9, 16]

// Use .filter to keep values greater than 5
let filterarr = [1,2,3,4,5,6,7,8,9];
let newfilterarr = filterarr.filter(function(val){
    return val > 5; // Simplified the logic, but your 'if' statement was also correct
}) // Correct: newfilterarr is [6, 7, 8, 9]

// Use .reduce() to find the sum of this array
let sumarr = [10,20,30];
let newsumarr = sumarr.reduce(function(acc,val){
    return acc+val;
}) // Correct: newsumarr is 60

// Use .some() to check any student has scored less than 35;
let arrmarks = [69,57,30,42];
let newarrmarks = arrmarks.some(function(val){
    return val < 35;
}) // Correct: newarrmarks is true

// Use .every() to check all numbers are even
let arr2 = [2,4,6,8,10];
let newarr2 = arr2.every(function(val){
    return val%2 === 0;
}) // Correct: newarr2 is true

//Destructure to get the first name and last name
let fullName = ["Himanshu","Patil"];
let [firstName,lastName] = fullName;

//Merge two arrays using the spread operator
let a = [1,2];
let b = [3,4];
let c = [...a,...b]; //merged two arrays

//Add India in the starts in the array of countries
let countries = ['USA',"UK","China"];
let newcountries = ['India',...countries];

//Clone an array properly with taking reference
let orgarr = [1,2,3,4,5];
let clonearr = [...orgarr];