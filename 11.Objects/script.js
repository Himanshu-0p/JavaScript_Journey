let obj = {
    name:"Himanshu",
    age:"26",
    gender:"Male"
};

obj.name;

const user = {
    name : "Himanshu",
    address:{
        city:"Pune",
        pin:462001,
        location:{
            lat:23.2,
            lng:77.4,
        },
    },
};

// user.address.location.lng;
// let {lat,lang} = user.address.locations;


let obj1 = {
    name:"Himanshu",
    age:26,
    email:"test@gmail.com"
}

for(let key in obj1){ 
    console.log(key);
    console.log(key,obj1[key]);
}

//Typing Object.keys(obj1) on creates the array of the obj1 and returns its key
//Object.entries(obj) array of arrays


let obj2 = {...obj1}; //creating clone of obj1

let obj3 = Object.assign({},obj1);  //Object Assign


//Deep Cloning (Very Imp)
//Problem with normal cloning 
/**let obj4 = {
    name:"Himanshu",
    address:{
        city:"Pune",
        area:"Bibwewadi"
    },
    college:"VIT"
}
 let obj5 = {...obj4};
 obj5.address.area = "Kothrud";**/
//the problem in the above code is whenever we change anything in the obj5 that will also reflect in obj4
let obj4 = {
    name:"Himanshu",
    address:{
        city:"Pune",
        area:"Bibwewadi"
    },
    college:"VIT"
}
let obj5 = JSON.parse(JSON.stringify(obj)); //deep cloning


//Optional chaining and computational properties
let role = "admin";

let obj9 = {
    name: "Harsh",
    age : "26",
    email :"test@test.com",
    addresses:{
        city:"Pune"
    },
    [role]:"xyc",
};   
