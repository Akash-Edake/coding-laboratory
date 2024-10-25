
var test1 = ['Nitin', 'Mahesh', 'Shivani', 'Vishnu', 'Ashotosh', 'Nisha', 'Savita'];

// console.log(test1[0]); //Nitin

// console.log(typeof(test1[0])); /// string 

// console.log(typeof(test1));// object

// console.log(test1.length); // 7

// 1.Push
var test2 = test1.push('Rahul');
// console.log(test2);
// console.log(test1);
// Push is going to add new element at the end of an array 
//and this will return length of the new array.

// 2. pop
var test3 = test1.pop();
// console.log(test3);
// pop is will remove last element of array and will return that last/removed element.

// 3. unshift
var test4 = test1.unshift('vivek');
// console.log(test4);
// console.log(test1);
// Unshift is going to add new element at the start of an array 
//and this will retunr  length of the new array.

// 4.shift
var test5 = test1.shift();
// console.log(test5);
// console.log(test1);
// shift is will remove first element of array and will return that first/removed element.

// 5. slice

var test6 = test1.slice(2,7);
// console.log(test6);
// console.log(test1);
// slice(start index, end index -1);
// slice is going to return new array of given start index and end index

// 6. splice

// var test7 = test1.splice(0,6, 'Archana', 'Ashwini');
// var test7 = test1.splice(0,6);
var test7 = test1.splice(6);
// console.log(test7);
// console.log(test1);
// splice(start index, how many to remove, new elements to be added);
// splice is used to add or remove elements from an array. 
// this method will return removed elements 
//If no new added elements are there then also this will perform opration

// 7.join
// console.log(test1);
var test9 = test1.join();
// console.log(test9);
// console.log(test1);
// join ==> will convert array to string
// split ==> will convert string to array

// 8.concat

var test8 = ['Chemali', 'Komal', 'Kapil'];
var test10 = test1.concat(test8);
// console.log(test10);
// console.log(test1);
// concat will combine two arrays and return new array with all added elements.

// 9.reverse
// console.log(test1);
var test11 = test1.reverse();
// console.log(test11);

// 10. combination of split and reverse
var test12 = "ClariTech Solutions, Pune";
var test13 = test12.split('').reverse().join('');
// console.log(test13);

// 11. toString
test1.reverse();
// console.log(test1);
var test14 = test1.toString();
// console.log(test14);

// 12.map
var test15 = [1,2,3,4,5];
var test16 = test15.map(item => item + 5);
console.log(test16);
// map will perform operation on each element of array and return new array.

// 13. filter
// console.log(test15);
var test17 = test15.filter(item => item > 2 );
// console.log(test17);
// filter will perform operation on all elements and return elements who can satisfy the condition.

// 14. Reduce
// var test18 = test15.reduce(function(res, item){
//     return res +item
// }, 0);
// console.log(test18);