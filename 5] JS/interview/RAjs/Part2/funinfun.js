console.log("Is called closure")


function first(){
    console.log("this is first function")
}

function second(){
    console.log("this is second function")
    first()
    
}
second()