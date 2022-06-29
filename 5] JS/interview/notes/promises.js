// let aka =(num)=> new Promise((resolve, reject)=>{
//     if (num==12) {
//         resolve('then')
//     } else {
//         reject('catch')
//     }
// })
// aka(12).then(first => console.log(first)).catch(second => console.log(second));



let promiseAll = (data1,data2)=>{
    return ((resolve,reject)=>{
        console.log(data1)
        resolve (data2)
    })
}

let p1 = new Promise(promiseAll(213,12))
Promise.all([p1]).then(first => console.log(first)).catch(second => console.log(second));