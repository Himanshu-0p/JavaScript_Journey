const marks = [1, 2, 4, 3, 5, 6];
console.log(marks[2]); // accessing number in an array

let arr1 =  new Array();
let arr3 = [];

marks[2] = 7; //modifying values in the array
marks.push(89);//add value to the end
marks.pop(); //remove the value fom the end
marks.shift(); //remove the value from the start
marks.unshift(0) //add to the start
marks.splice(2,1) // Remove value from i=2 from which index and j=1 how many u want to remove
marks.reverse();    

//Example of slice
let income = [1,2,3,4,5,6];
let incomecut = income.slice(2,2);


//sortting an array
let arr = [11,63,3,8,9,0];
let sortarr = arr.sort(function(a,b){
    return a-b;
});

//foreach
let arrz = [11,62,3,4,25];
arrz.forEach(function(val){
    console.log(val+3);
})

//Map is used only when u want to make a new array on basis of previous array's data
let newarrz = arrz.map(function(val){
    return 12;
})
let newarrz1 = arrz.map(function(val){
    if(val > 10) return 12;
})


//filter
let arrq = [1,2,3,4,5,6,7];

let newarrq = arrq.filter(function(val){
    if(val > 3) return true;
});


//reduce
let arr4 = [1,2,3,4,5,6];

let newarr4 = arr4.reduce(function(accumulator,val){ //accumulator value ko yaad rakhe ga
    return accumulator+val;
},0);

//some
let arr5 = [12,45,23,56,89,100];
let newarr5 = arr5.some(function(val){
    return val>90;
});

//destructuring 
let arr6 = [1,2,3,4,5];
let [a,b,c, ,e] = arr6;

//Arrays are reference value so if u want to make a primitive type then
let arr7 = [1,2,3,4,5,6];
let newarr7 = [...arr7];    