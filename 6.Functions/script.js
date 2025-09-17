//Function declaration in variable
// let fn = function(){
//     console.log("Hello u just have entered function");
// }

// fn();

//Normal function declaration
// function fnc(){
//     console.log();
// }

//Arrow Function
// let fnc = () =>{
//     console.log("Fat arrow function");
// }

// fnc();

//Paramters vs Agruments
function normal(name){               //name is the paramter
    console.log("Hello "+name);
}
normal("Himanshu");                  //Himanshu is the argument

function addition(num1,num2){
    let ans = num1 + num2;
    console.log(ans);
}
addition(7,9);

function add(num1 = 0,num2 =0){  //By default setting the value if arguments are not passed to avoid Nan.
    return num1+num2;
}

let total = add(9,2);
console.log(total);


//When arguments are too many then use simply the ...val(rest operator) this avoid using too many parameters
function abcd(...val){ 
    console.log(val);
}

abcd(1,2,3,4,5,6,7,8,9); 

//Return values
function ret(val){
    return 12;
}

let some = ret();
console.log(some);


//first class function -> functions ko values ki tarah treat kar skate hai
function abcd1(val){    //abcd1 is a high order function
    val();   
}
abcd1(function (){
    console.log("Hey function ke andar function");
})

//Another way is
function xyz(){
    return function(){
        console.log("hooo")
    };
}
xyz()();

//Pure vs Impure function
let a = 20;

function pure(val){
    console.log("Pure function");
}

function impure(val){
    console.log(++a);
}

pure(a);
impure(a);

//Closures-A function that remembers the variables from its outer function, even after the outer function has finished running.

function abcd(){
    let a = 12;
    return function(){
        console.log(a);
    }
}

function outer() {
  let count = 0; // variable in outer function

  function inner() {
    count++; // inner function uses outer variable
    return count;
  }

  return inner;
}