console.log("function defined using function expression")

wish()  //error: wish is not a function
const wish =function(){
    console.log("we can call function ONLY after the function definition");
}
wish()



console.log('----------------------------------------------------')



console.log("function defined using function Declaration");
wish2()  //no error
function wish2(){
    console.log("we can call function before and after the function definition");
}
wish2()