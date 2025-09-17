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