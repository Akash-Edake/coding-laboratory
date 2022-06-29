function add (a,b){
    console.log(`Total addtion is: ${a+b} `);
    console.log('This is with parameter function definition')
}
add(10,20);
add(30,40);
add(50,60);
console.log('----------------------------------------')


function myIntro() {                
   console.log('This is witout parameter function definition');
};
myIntro();
myIntro();
myIntro();
console.log('----------------------------------------')


//arrow function
 add = (a,b) =>{
    console.log(`Total addtion is: ${a+b}`);
}
add(10,20);
add(30,40);
add(50,60);