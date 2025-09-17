//Loops-
//When u know the starting and ending point then use [for] loop
//When u know ya ha tak jana hai use [while] loop

//1-40 use [for]
//20-40 use [for]
//hello na aajaye - while

//for loop
for(let i = 1 ; i < 5 ; i++){
    console.log("hello");
}

//while loop
let j = 0;
while(j<5){
    console.log("Yoo");
    j++;
}

//do while loop
let p = 0;
do{
    console.log(p);
    p++;
}while(p < 5);

//break and continue loop
for(let a=0 ; a <10 ; a++){
    console.log(a);
    if(a === 8) break;
}

for(let b=0 ; b <10 ; b++){
    if(b === 8) continue;
    console.log(b);    
}