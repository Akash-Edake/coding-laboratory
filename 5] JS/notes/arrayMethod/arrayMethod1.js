
// every 
const arraylist = ['A', 'B', 'C', 'D', 'E', 'F']
let condition = () => arraylist.length > 1

console.log("every() output is boolen ==> ", arraylist.every(condition))

//filter
console.log(arraylist.filter(condition))

//join
console.log(arraylist.join(' & '))

//map
const numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt));

console.log(numbers.indexOf(25))
