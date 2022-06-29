// General loops: for, while, do-while

    // 	For Loop: Loops through a block of code a number of times.
    // for(let i=0; i<10;i++)
    // {
    //     console.log(i);
    // }

    // OR

// for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }

// For-in Loop: Loops through the properties of an object. 

// let obj = {
//     name: "Rupali",
//     Age: 26,
//     type: "Programmer",
// }
// for(let key in obj)
// {
//     console.log(`Ṭhe ${key} of Object is ${obj[key]}`)
// }

let arr = [2,5,6,4,2,3];
    // arr.forEach(function(element){      // it gives the arr lenght  as it is
    //     console.log(element);
    // })
    // // OR
    // for(let i = 0; i < arr.length; i++){
    //     const element = arr[i];
    //     console.log(element)
    // }
    arr.forEach(function(element, index, array){      
        console.log(element, index, array);         // we got array with index
    })