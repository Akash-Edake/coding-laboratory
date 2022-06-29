const dataList = [
    "Dhanashri",
    "Sanubar",
    "pratiksha",
    "Archana",
    "Akash"
]
document.getElementById("demo").innerHTML = dataList;
// console.log("Array is: " + dataList);
const dataList2 = [{
        name: "Dhanashri",
        age: "26",
        branch: "cs"
    },
    {
        name: "sanu",
        age: "26",
        branch: "cs"
    },
    {
        name: "akash",
        age: "26",
        branch: "mech"
    },
    {
        name: "ganesh",
        age: "25",
        branch: "electrical"
    },
    {
        name: {
            name: "vaibhav",
            age: "26",
            branch: "mech"
        }
    }
];

const dataList3 = [
    { fname: "dhanashri", lname: "mane" },
    { fname: "sanubar", lname: "mujawar" },
    { fname: "akash", lname: "desai" }
];
var a = document.querySelector("#demo3");
for (var i = 0; i < dataList3.length; i++) {

    a.innerHTML += dataList3[i].fname + " " + dataList3[i].lname + "<br>";
}
// console.log(dataList2);
// console.log(dataList3);

document.getElementById("demo1").innerHTML = dataList2[0].name;
document.getElementById("demo2").innerHTML = dataList2[0].age = 28;