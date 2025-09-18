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

