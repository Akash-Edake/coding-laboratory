var a = 10;
var b = 20;

var add = a + b;
var sub = a - b;
var mult = a * b;
var div = a / b;
var mod = a % b; //gives remainder

console.log(add, sub, mult, div, mod);

//increment decrement
var num1 = 12;
num2 = 14;
var inc = num1++; //post incre
var inc1 = num2--; //post decre
console.log(inc, inc1);

var inc = ++num1; //pre incre
var inc1 = --num2; //pre decre
console.log(inc, inc1);

//assignment operators
var test1 = 10;
var test2 = 20;
test1 += test2; // test1 = test1 + test2;
console.log(test1);