// Here a date has been assigned
// while creating Date object
var dateobj =
    new Date();

// New year 1992 is being set in above Date
// Object with the help of setFullYear() method
dateobj.setDate(22);
dateobj.setMonth(3);
dateobj.setFullYear(1992);

// New year from above Date Object is
// being extracted using getFullYear()
var a = dateobj.getDate();
var b = dateobj.getMonth();
var c = dateobj.getFullYear();

// Printing new year
console.log(a + "/" + b + "/" + c);

// var arr = ['claritech', 'solution', 'llp', 'pune', 'mumbai', 'kolkata'];

// for (var i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//         console.log(arr[i]);
//     }

// }