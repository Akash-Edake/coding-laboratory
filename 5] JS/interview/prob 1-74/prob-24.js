// abcz = "abc_100_pqr_50_10_xyz" solve it for getting output 160

let str = "abc_100_pqr_50_10_xyz" ;
let res = str.replace(/\D/g, ","); // Get only number
let f1 = res.split(",") //conver in array
f2 = f1.filter(ele=>ele>0) //only choose number in array

sum =0;
f2.forEach(element => {
   return (
    sum+=parseFloat(element)  //convert string into number
   )
});
console.log(sum)