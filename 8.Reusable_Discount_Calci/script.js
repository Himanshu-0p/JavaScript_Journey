function discountCalculator(discount){
    return function(price){
        return price-price*(discount/100);
    }
}

let discounter = discountCalculator(10);
console.log(discounter(200));

//Simple example
function counter(){
    let count = 0;
    return function(){    //This whole function is c
        count++;
        return count;
    }
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());

//Create a pure function to transform a value
function transform(val){
    return val*2;
}

console.log(transform(3));

//IIFE to restrict the variable
(function (){
    const password = "secret password";
    console.log(password);
})();

console.log(password);