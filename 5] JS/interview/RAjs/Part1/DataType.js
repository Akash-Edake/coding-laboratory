// premative data type - symbole, number,string, Bigint, undifend, boolean,null
// non-premative(relative Datatype) -object


let b;
console.log(typeof(b))

let c =BigInt(1);
console.log(typeof(c))

let d= true;
console.log(typeof(d))

let e=null
console.log(typeof(e))

let sym2 = Symbol('foo')
let sym3 = Symbol('foo')
if(sym2==sym3){
    console.log("both are same")
}else{
    console.log("both are not same")
}



// object
let obj={
    name: "Rupali",
    age:"5"
}
console.log(typeof obj)


let array=['a','b','c','d']
console.log(typeof array)