let promiseFun = (data1, data2) => {
    return (resolve, reject)=>{
        console.log(data2)
        resolve(data1)
    }
}
let p1 = new Promise(promiseFun(10, "akash"));
let p2 = new Promise(promiseFun(20, "abc"));
let p3 = new Promise(promiseFun(30, "xyz"));

Promise.all([p1,p2,p3]).then((star)=>{console.log(star)}).catch((end)=>{console.log(end)})