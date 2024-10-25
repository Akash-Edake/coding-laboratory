// number, String,boolean,null ,undefined
//object,array
// var arr = [1,2,3];
// array is special case

// what is object?
//data structure : key value pair

//object creation methods : properties and methods
// var person = {};
// //age.name,gender,qualification
// //eating,walkin,reading,talking 
// person.name ="Akshay";
// person.age = 15;
// person.eat = function(){
//     console.log("person is eating")
// }

// console.log(person)
// console.log(person.eat())
// var obj = {};
// var person = new Object();
// person.name ="someone";
// person.age = 10;
// console.log(typeof(person));
//2 motation : 1.dot 2.bracket
//unique : roll number 
// var person2 = {
//     name : "someone",
//     age:15,
//     qualification:"BE",
//     "12car" :"123,0000",
//     age:25
// }
// person2.name ="Priyanka savita"
// person2.name1 ="Savita"
// // person2.height = "180cm"
// // person2["gender"]="female";
// // person2.name ="Priyanka"

// // // console.log(person2["12car"]);
// console.log(person2)
// var person3 = person2;
// person3.name ="Rahul";
// console.log(person2)
// person4 = person3;
// person4.name ="Ram"
// console.log(person3)


// for(var key in person2){
//    console.log(key +" "+ person2[key]);
// }

// creating object using function constructor

// function(name,age,height){
//   this.name = name;
//   this.age = age;
//   this.height = height
// }


//object reference data type + array

var car = {
    model :"maruti",
    price:45852
}

var car1 = Object.create(car);
var car2 = Object.create(car1);
// console.log(car1);
car1.color ="gray";
car1.varient ="ZTI",
car1.avg = "50km"
// console.log(car1)
// console.log(car2.__proto__);
// car2.price = 50000;
// console.log(car2.price)

var stud ={};
stud.eat = function(){
        console.log("person is eating")
    }

var student ={
    name: 'Vivek',
    rollNo: 15,
    last5YearPer: function last2Yr(currMarks, lastYearMarks){
        var res = (currMarks +lastYearMarks)/2;
        return res;
    }
}


// console.log(student.name);
// console.log(student);
// console.log(student.last5YearPer(89,91));

// 1.Normal object
var stud ={};
stud.name ="Alex";
// 2. new keyword
//  var person = new Object();
// person.name ="someone";

// 3. Object. create
var car3 = Object.create({compony:'Mahindra', name:'XUV', color:'red'});
// car3.model='TUV 700';
// console.log(car3['model']);
// console.log(car3.__proto__);

// 4. object.assign
let per1 ={fname:'Alex'};
let per2 = {lname: 'Simi'};
let person = Object.assign(per1, per2);
// let person = Object.assign({fullName:'xyz'} ,per1, per2);
console.log(person);


