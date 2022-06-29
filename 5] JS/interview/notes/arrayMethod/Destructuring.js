//Destructuring assignment

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]


//********************************************** */
let array = {
    obj1: {
        name: "akash",
        work: "React",
    },
    obj2: {
        name: "akash-2",
        work: "back-end",
    },
    obj3: {
        name: "akash-3",
        work: "full-stack",
    },
}

let {obj1,obj2,obj3} = array
console.log(obj1)