//  object is an unordered collection of key-value pairs. Each key-value pair is called a property. The key of a property can be a string. And the value of a property can be any value, e.g., a string, a number, an array, and even a function.

const object = {
    string:'string',
    number:10,
    boolean: true,
    array:['string',120,false]
};
console.log(`all object: ${object}`) //o/p=> all object: [object Object]
console.log('all object:',object)
console.log('--------------------')


console.log('This is Dot Notation',object.number)   
console.log('This is Bracket Notation',object['number'])




console.log('-----------------------------------')
//Extra

const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1.firstname);
// expected output: "Mario"

const person2 = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(person2['lastname']);
// expected output: "Doe"