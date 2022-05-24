const arraylist = ["windows xp", "windows 7", "windows 8.1", "windows 10"];

/*============ remove last index item ================*/

/*remove karun dakhav sampurn array tay */
// arraylist.pop();
// console.log(arraylist)

/*remove kay kelay fakt te dakhav tay */
// console.log(arraylist.pop())


/*=========== remove first index item ===============*/
// arraylist.shift()
// console.log(arraylist)


/*===== Remove multiple items from the end of an array - SPLICE ======= */
//console.log(arraylist.slice(1))    // te index delet krun dakhvtay.
// console.log(arraylist.slice(-3)) // fkt maghun display krtay
// console.log(arraylist.slice(1,-1)) // check this

const startElement = 3;
const deleteCount = 2;
console.log("display element between (start,end) -->", arraylist.splice(startElement, deleteCount))
