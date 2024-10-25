console.log('Hello fist line of execution');

console.log('Hello second line of execution');

// syntax
// setTimeout(function, time in milisecond);
setTimeout(() => {
    console.log('This message will be printed after 5 sec');
}, 2000);

console.log('Hello third line of execution');

function addData(num1, num2){
    res = num1 + num2;
    return res;
    // console.log('this function is for addition');
}
// addData(12, 15);

var stud ={fname:'Alex', lname:'Simi'};
console.log(stud);

console.log('Hello fourth line of execution');

console.log('Hello fifth line of execution');

function add(){
    var result  = addData(15, 30);
    console.log(result);
}
add();