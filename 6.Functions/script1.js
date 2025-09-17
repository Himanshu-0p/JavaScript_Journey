//first question difference between function declaration and expression in terms of hoisting 

greet();

function greet(){  //declaration which will work
    console.log("Hii everyone");
}

// let greet = function(){  //this will throw an error
//     console.log("Hii everyone");
// }