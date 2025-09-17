//Arithmetic, comparison, logical operators, assignment operators

// == Not strict 
// === Strict
// // !=  Not Strict
// // !== Strict
// // >= Greater than or equal to
// // <= Less than or equal to 
// // >
// // <
// // && And
// // || Or
// // ! Not

// //Ternary Operator
// condition ? valueIfTrue :valueIfFalse

let x = 10;
let y = 5;

if(x > 5 && y <12){
    console.log("Hello");
}else{
    console.log("Bye");
}

let temp  = 35;

if(!(temp < 30)){
    console.log("ACC chala bc");
}else{
    console.log("Heater chala bc");
}

let a = 0;

if(a){
    console.log("True");
}else{
    console.log("False");
}


let score = 78;

let grade = score > 90 ? 'A': score >= 75 ? 'B' : score >= 60 ? 'C' : 'D';
console.log(grade);


let points = 10;

let status = points > 100 ? 'Gold' : points > 80 ? 'Silver':'Bronze';
console.log(status); 

let loggedIn = true;
let verified = false;

let payement = loggedIn && verified ? "Allow":"Deny";
console.log(payement);


let xas= 3;
let yui = xas++;
console.log(xas,yui);

let p = 3;
let q = ++p;
console.log(p,q);

let m = 10;
console.log(m--);
console.log(m);

let result = 5;
let ans = ++result + result++;
let ans1 = result++ + ++result;
console.log(ans);
console.log(ans1);


let likes = 100;

function likepost(){
    ++likes;
}

console.log(likepost());
console.log(likes);

let count = 5;
if( count-- === 5){
    console.log("Its a match");
}else{
    console.log("Its not a match")
}