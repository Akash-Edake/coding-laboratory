var test1 = 15;
var test2 = 15.5;
var test3 = 4 + 5 +(5*6);

// console.log(typeof(test1));
// console.log(typeof(test2));
// console.log(test3);
// console.log(typeof(test3));

// 1. valueOf
// console.log(test1.valueOf());
// return value of that variable.

// 2. to string
var test4 = test1.toString();
console.log(test4);
console.log(typeof(test4));
console.log(test1==test4); // true
console.log(test1===test4); // false
// var test5 = 1 + 2 + '2'; // 32 // string
// var test5 = 1 + '2' + 2; //122 // string
// var test5 = 5-6;
// var test5 = 5-6 +'4';
// var test5 = 'A' - 'B';
// var test5 = 'A' - 'B' + 2;
// var test5 = "e" + 5;
var test5 = '$'+ 5;
console.log(test5);
console.log(typeof(test5));
