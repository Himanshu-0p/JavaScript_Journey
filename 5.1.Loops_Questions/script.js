//question 1
// for(let i=1 ; i < 11 ; i++){
//     console.log(i);
// }

//question 2
// let i = 10;
// while(i > 0){
//     console.log(i);
//     i--;
// }

//question 3
// for(let i=1 ; i < 21 ; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }


//question 4
// let i = 1;
// while(i<16){
//     if(i%2 === 1){
//         console.log(i);
//     }
//     i++;
// }

//question 5
// for(let i=1 ; i < 11 ; i++){
//     let ans = i*5;
//     console.log(ans);
// }

//question 6
// let ans = 0;
// for(let i=1 ; i < 101 ; i++){
//     ans += i;
// }
// console.log(ans);

//question 7
// for(let i = 1 ; i < 51 ; i++){
//     if( i % 3 === 0){
//         console.log(i);
//     }
// }   

//question 8
// let val = prompt("give a number");

// for(let i = 1; i <= val ; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is even`)
//     }else{
//         console.log(`${i} is odd`)
//     }
// }

//question 9
let count = 0;
for(let i = 1 ; i < 100 ; i++){
    if(i % 2 === 1){
        count++;
        console.log(i);
    }
    if(count > 10) break;
}