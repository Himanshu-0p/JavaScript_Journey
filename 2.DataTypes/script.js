//primitives - aisa sari values jinko copy karne pr tumhe real copy mil jaye
//string,number,boolean,undefined,null,symbol,bigint

//reference - aisa sari values jinko copy karne pr tumhe uska reference milta hai
//array,object,function
//[],{}.()

let a = 12;
let b = a;

a = a + 2;

let c = [1,2,3];
let d = c;
c.pop(); 


//Symbol
let id = Symbol("abc");
let id2 = Symbol("abc");

let obj ={
    uid : 1,
    name : "himanshu",
}
let u1 = Symbol("uid");
obj[u1]= 2;

//Dynamic Typing: Js mein static typing nahi hota , yaha pr dynamic typing jiska matlab hai app data ko change kr skte ho kyuki yaha par dynamic data types hota hai

// typeof quirks (eg typeof null == 'object')

//Tye corericon( == vs ===)

let z;
console.log(z);

let f = null;
console.log(f);