const arraylist = ['A','B','C','D','E','F']
const arraylist2 = ['Apple','Ball','Cat','Dog','Elephant','Foot']

let arraylist3 = arraylist.concat(arraylist2)

console.log('concat 1st & 2nd array' , arraylist3)


let shallowCopy = [...arraylist]
console.log('shallowCopy => ', shallowCopy)

let deepCopy = JSON.parse (JSON.stringify (arraylist))
console.log("deepCopy => ",deepCopy)