let find=(arraylist)=> {
    if (arraylist.includes(7)) {
       return "Boom!"
    } else{
        return "there is no 7 in the array"
    }
 }
 console.log( `\n first array --> ${find([4,5,6,7])}`)
 console.log(` second array -->  ${find([1,2,3,4,5])} \n`)