//question 1: creating Array Object
//method 1
var arr = ['apple', 'pinapple', 'banana', 'chikoo'];
console.log(arr);

//method 2
var arr1 = [];
arr1[0] = 'heelo';

console.log(arr1);

//method 3
var arr1 = new Array('number : [1,2,3]', 'str:[a,b,c,d,e]', 'str1:[1,d,k,o,9]');
console.log(arr1);

//method 4

var arr4 = Array.of(1, 2, 3, 'hello', 'dhanu');
console.log(arr4);

//method 5
var b = [1, 'hello', 3, 34, 87];

console.log((b.slice(0, 2))); // slice method return the data betwn index 0 and 2..original array does not modified

//convert array into string
const fruits = ['apple', 'banana'];
const devpos = ['react', 'java'];

console.log(typeof(fruits.toString()));
console.log(devpos.join('~')); //join array values and make array as string 

//question 2 :Array copying methods
//method 1
var result = b.slice(); // copy the arry to another array
console.log(result);

//method 2 using for loop

for (let i = 0; i < b.length; i++) {
    var res1 = '';
    console.log(res1[i] = b[i]);

}

//Question3: Empty the Array

//Method 1 
var ar = [1, 2, 3, 4, 5];
ar = [];
console.log(ar); //return []

//method 2
ar.length = 0;
console.log(ar); //return []
// if array refernce to another array
var ar1 = ['hello', 'dhanu', 'mane', 'mattiwade', 'belgaum'];
var ar2 = ar1;
console.log(ar1.splice(0, ar1.lenth = 0)); //returns [] remove element from array
var ar3 = ['hello', 'dhanu', 'mane', 'mattiwade', 'belgaum'];
console.log(ar3.splice(1, 3)); //return the element index [1] to index [3] 

// method 4 
var array6 = [1, 2, 3, 4, 5];
console.log(array6); // [1,2,3,4,5]
console.log(array6.pop()); //remove the last element of array
console.log(array6); //returns [1,2,3,4]

function emptyArray(array) {
    while (array.length) {
        array6.pop(); //
    }
}
emptyArray(array6); // call function
console.log(array6); // [ ] ; now empty

//Question 5: How can you check if something is an Array?

//method 1
var check = [1, 2, 3];
var p = Array.isArray([1, 2, 3]);
var r = Array.isArray({
    name: '123'
});
var s = Array.isArray(['hello']);
var t = Array.isArray('undefined');
var u = Array.isArray(check);

console.log(p); //true
console.log(r); //false
console.log(s); //true
console.log(t); //false
console.log(u); //true

//method 2
function checkArray(array) {
    if (Object.prototype.toString.call(array) === '[object Array]')
        console.log("array it is");
    else
        console.log('array it is not');
}
var array2 = 'test';
checkArray(array2); //returns array it is not
var array3 = [1, 2, 3, 3];
checkArray(array3); //returns array it is

//Method 3 

var array = [1, 2, 3, 4];
var array1 = 'hello';
console.log(typeof(array[0]));
console.log(typeof(array1[0]));

function checkIfArray(object) {
    if (typeof object === 'string') {
        console.log('array it is NOT ');
    } else {
        console.log('array it is ');
    }
}

checkIfArray(array); //array it is
checkIfArray(array1); //array it is not

//Question 6: Add an item to the end of an array.

//method : 1
array.push(5);
console.log(array);
//method 2
array[array.length] = 6;
console.log(array);
//find index of 
console.log(array.indexOf(3));
console.log(array.indexOf(7)); //if index doesnt exist in array it returns -1

//Question :Write a function to check if milk exists in your array var items = ['milk', 'bread', 'sugar'];

var items = ['milk', 'bread', 'sugar'];

function checkForProduct(item) {

    if (items.indexOf(item) === -1) {

        console.log('item does not exist');
    } else {

        console.log('item is in your list');

    }
}

checkForProduct('socks'); //item does not exist
checkForProduct('milk'); //item is in your list

// Question 10 : Now you've found milk exists add some code to find the index of milk and remove that item.

var a = items.indexOf('milk');
console.log(a); // 0

//remove that index from array 
items.splice(0, 1);
console.log(items); // [ 'bread', 'sugar']

//Qusetion : sort the number

var num1 = [1, 3, 64, 2, 34, 78, 22, 12, 4, 221, 67, 54];
num2 = num1.sort((a, b) => { //sort the number in ascending order
    return a - b;
});
console.log(num2);

var alp = ['aim', 'hello', 'slice', 'cat', 'road', 'sort', 'board', 'car', 'ear'];
console.log(alp.sort()); //sort alphabetically

//Question : What are the results of these splice and slice methods
var a1 = ['zero', 'one', 'two', 'three'];
var names = ['jason', 'john', 'peter', 'karen'];

var sliced = a1.slice(1, 3);
var spliced = names.splice(1, 3);


//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

console.log(sliced); // creates a new array ['one', 'two'] 
console.log(a1); // main array remains untouched 

//The splice() method changes the content of an array by removing existing elements and/or adding new elements.

console.log(spliced); // it returns  [ 'john', 'peter', 'karen' ] 
console.log(names); // however the array only contains jason now

// Question : What are the console logs of these shift and unshift methods
var x = [];
x.unshift(1);
var number1 = console.log(x)
x.unshift(22); //add the element in front
var number2 = console.log(x)
x.shift(); //remove the 1st element
var number3 = console.log(x)
x.unshift(3, [4, 5]);
var number4 = console.log(x)
x.shift();
var number5 = console.log(x)
x.shift();
var number6 = console.log(x)
x.shift();
var number7 = console.log(x)
x.shift();

//Question : Using reduce add all these numbers var numbers = [1, 2, 3, 4, 5, 6];

var add = [1, 2, 3, 4, 56, 6, 65];
var total = add.reduce((a, b) => { //reurns +, -, /, * of array elements    
    return a + b;
});
console.log(total);

//map reduce concat
var animals = [
        { name: "Jason", species: "rabbit" },
        { name: "Jessica", species: "dog" },
        { name: "Jacky", species: "owl" },
        { name: "Luke", species: "dog" },
        { name: "Junior", species: "rat" },
        { name: "Thomas", species: "cat" }
    ]
    //   filter method with callback function
var dogs = animals.filter(function(animals) {
    return animals.species === 'dog';
});
console.log(dogs);
//Using array in question 19 use map function to return all the species
var nams = animals.map(function(animals) {
    return animals.name;
});
console.log(nams);