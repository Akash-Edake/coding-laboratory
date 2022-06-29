const arraylist = ['A','B','C','D','E','F']
let deepCopy = JSON.parse (JSON.stringify (arraylist))
console.log("deepCopy => ",deepCopy)