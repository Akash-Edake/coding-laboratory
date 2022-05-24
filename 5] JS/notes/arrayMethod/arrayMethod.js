

/*
//unshift / shift  => add / remove first

const arraylist = ['A','B','C','D','E','F']
array = arraylist.unshift('hi')
console.log(arraylist)
console.log(array)  // output= 7 (display total index)


array1 = arraylist.shift()
console.log(arraylist) // output= ['B', 'C', 'D', 'E', 'F']
console.log(array1)    // output= A
*/



/*
// push / pop => add / remove last

const arraylist = ['A','B','C','D','E','F']
array = arraylist.push('hi')
console.log(arraylist)
console.log(array)  // output= 7 (display total index)


array1 = arraylist.pop()
console.log(arraylist) // output= ['A', B', 'C', 'D', 'E']
console.log(array1)    // output= F
*/


/*
// slice =>  1] Remove / Delete  single also multiple item
const arraylist = ['A','B','C','D','E','F']

array = arraylist.slice(0,2)  // .slice(startIndex 0 , startIndex 1 )
// console.log(arraylist)  // output => no change
console.log(array)  //output => [ 'A', 'B' ]
*/



/*
splice =>  1] Remove / Delete  single also multiple item
            2] Replayce Also add single also multiple item
            
*/
const arraylist = ['A','B','C','D','E','F']
array = arraylist.splice(0,2 ,"akash",'React')  // .slice(startIndex 0 , counting start - startIndex (from 1) )
console.log("item Replayce from list => " ,arraylist)  // output => [ 'akash', 'React', 'C', 'D', 'E', 'F' ]
console.log("this item removed from list => ",array)   // output => [ 'A', 'B' ]  