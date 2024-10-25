var test1 = "ClariTech Solutions, Pune Pune";

console.log(test1);
// 1. typeof
console.log(typeof(test1));

// 2.valueOf
console.log(test1.valueOf());

// 3.charAt
var test2 = test1.charAt(50);
console.log(test2);
// will return 5 th position character from above string.
// will return empty if lenght and index not match 

// 4. lenght
console.log(test1.length);
// will retunr length of the string.

// 5. charCodeAt
test3 = test1.charCodeAt(10);
console.log(test3);
// will return the ASCII value of that charter

// 6.concatination
var test4 =test1 + " Software Company";
console.log(test4);

// 7.indexOf
var test5 = test1.indexOf('Mumbai');
console.log(test5);
// will return start index of char or string 
//if its available in the string otherwise this will return -1

// 8. replace
var test6 = test1.replace('Pune', 'Solapur');
console.log(test6);
// will replace the char or word if found inside series of string 
//otherwise it will return the original string.

// 9. search
console.log('xxxxxxxx');
console.log(test1);
var test7 = test1.search('Pune');
console.log(test7);
// will return strart index of search string 
//if found in original string otherwise it will retun -1.

// 10.slice
// slice(start index, end index)
var test8 =test1.slice(3,5);
console.log(test8);
// will return new string depending upon start index and end index minus 1

// 11. spilt
var test9 = test1.split(' ');
console.log(test9);
// will return new array depending on provided condition 
//and that condition will be removed from  new array.

// 12. substr
var test10 = test1.substr(3,5);
console.log(test10);
// sybstr(start index, legnth)

// 13.uppercase
var test11 = test1.toLocaleUpperCase();
console.log(test11);

var test12 = test1.substr(3,9).toLowerCase();
console.log(test12);