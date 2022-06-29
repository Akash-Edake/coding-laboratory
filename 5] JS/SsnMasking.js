// const number = "9876543210";
// if (number) {
//   masking = "";
//   for (let i = 0; i < number.length - 4; i++) {
//     masking += "x";
//   }
// }
// console.log(masking.concat(number.slice(6, 10)));

var a = [
  { name: "sonali", designation: "software Engg.", rollno: "9876543210" },
  { name: "sonali222", designation: "software Engg.22", rollno: "9876543210" },
  { name: "sonali111", designation: "software Engg.11", rollno: "9876543210" },
  { name: "sonali333", designation: "software Engg.33", rollno: "9876543210" },
];
var b = [
  { name: "sonali", designation: "software Engg.", rollno: "9876543223" },
  { name: "sonali222", designation: "software Engg.22", rollno: "9876543234" },
  { name: "sonali111", designation: "software Engg.11", rollno: "9876543210" },
  { name: "sonali333", designation: "software Engg.33", rollno: "9876543210" },
];


const maskin=(para)=>{
  para.map((item)=>{
    let masking = "";
    let masking1 = "";
    if (item.rollno) {
        for (let i = 0; i < item.rollno.length - 7; i++) {
          masking += "x";
        }
        for (let i = 0; i < item.rollno.length - 7; i++) {
          masking1 += "x";
        }
      }
      console.log(masking,'-',masking1,'-',(item.rollno.slice(6, 10)));
})
}
maskin(a)
maskin(b)