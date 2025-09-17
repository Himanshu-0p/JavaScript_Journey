//first question difference between function declaration and expression in terms of hoisting 

greet();

function greet(){  //declaration which will work
    console.log("Hii everyone");
}

// let greet = function(){  //this will throw an error this is function exp.    
//     console.log("Hii everyone");
// }


//q2 we need to convert a function to arrow function
// function multiply(a,b){
//     return a*b;
// }

const multiply = (a,b) => {
    return a * b;
}

console.log(multiply(2,3))


//Q3 Use rest parameters to accept any number of scores and return the total
function getScore(...scores){
     let total = 0;
     scores.forEach(function(val){
        total = total + val;
     });
     return total;
}

console.log(getScore(10,21,23,24,45));

//Q3 Have to do some improvements in the code
function assign(age){
    if(age < 18) return "Not allowed";
    return "Allowed";
}

console.log(assign(78));

//Q4 can you store the function in variable and then call it
let a = function(){
    console.log("nothing");
}

a();

//Q5 Pass function in another function
function pass(val){   //function pass is higher order function
    val();
}
pass(function(){
    console.log("Hey there");
}) 

//Another way of the higher order function
function xyz(){         //higher order function which returns another       function
    return function(){
        console.log("Hiiiii");
    }
}

xyz();

//Higher oder function : Which returns a function or takes the input/val of another function