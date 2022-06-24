// let a=20;

// if(a>20){
//     console.log("a is greater than 20 ")
// }else if(a==20){
//     console.log("a is qual to 20 ")
// }else{
//     console.log("a is less than 20 ")
// }

// let b= (a>19)? "a is greater than 19 " : "a is less than 19 "
// console.log(b)

let add = (a) => {
  if (a > 20) {
    return ("a is greater than 20 ");
  } else {
    if (a == 20) {
      return ("a is equal  to 20 ");
    } else {
      return ("a is less than 20 ");
    }
  }
};
console.log(add(21));
console.log("hi " +(add(17)));
console.log(add(20));
