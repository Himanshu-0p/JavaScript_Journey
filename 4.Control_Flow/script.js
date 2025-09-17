// switch(3){
//     case 1:
//         break;
//     case 2:
//         break;
//     case 3:
//         console.log("Switch Case");
//         break;
//     default:
// }

//Early Return Pattern

function getVal(value){
    if(value < 100) return "accepted";
    return "Not Accepted";
}

console.log(getVal(122));


//Rock Paper Scissors

// function rps(user,computer){
//     if(user === "rock" && computer === "scissor") return "user";
//     else if(user === "scissor" && computer === "paper") return "user";
//     else if(user === "paper" && computer === "rock") return "user";
//     else if(user === "scissor" && computer === "rock") return "computer";
//     else if(user === "paper" && computer === "scissor") return "computer";
//     else if(user === "rock" && computer === "paper") return "computer";
// }

// console.log(rps("rock","scissor"));

//Another way to write this code
function rps(user,computer){
    if( user === computer) return "draw";

    else if(user === "rock" && computer === "scissor") return "user";
    else if(user === "scissor" && computer === "paper") return "user";
    else if(user === "paper" && computer === "rock") return "user";

    return "computer";
}

console.log(rps("paper","rock"));
