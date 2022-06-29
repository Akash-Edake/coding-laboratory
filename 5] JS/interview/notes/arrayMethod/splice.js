
/*
splice =>  1] Remove / Delete  single also multiple item
            2] Replayce Also add single also multiple item
            
*/
const arraylist = ['A','B','C','D','E','F']
array = arraylist.splice(0,2 ,"akash",'React')  // .slice(startIndex 0 , counting start - startIndex (from 1) )
console.log("item Replayce from list => " ,arraylist)  // output => [ 'akash', 'React', 'C', 'D', 'E', 'F' ]
console.log("this item removed from list => ",array)   // output => [ 'A', 'B' ]  