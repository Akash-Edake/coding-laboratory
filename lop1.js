let array = ["A", "B", "C", "D"];

for (let i = 0; i < array.length; i++) {
    //   console.log(array[i]);
}

for (let i in array) {
    //   console.log(array[i], '==>' , i);
    //   console.log(i,' is ==> ',typeof i)
}

for (let i of array) {
//   console.log(i);
}


array.forEach((item,index)=>{
    console.log(item, '==>' ,index)
    console.log(index,'is ==>',typeof index)
})

array.map((item,index)=>{
    // console.log(item , ' ',index)
})

