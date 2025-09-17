//var let const

// a = 10; //declare krna
// var a = 10; //declare and initialize krna

// let b = 10; 
// const c = 10; 

//Variable 
//window mein add hota hai
//function scoped hota hai
//app firse declare kr skte ho

const a = "himanshu";

//Scope

var c = 10; //global scope
{
    let b = 10; //block scope
}

//Temporal dead zone
console.log(b);
let b = 10; //block scope
