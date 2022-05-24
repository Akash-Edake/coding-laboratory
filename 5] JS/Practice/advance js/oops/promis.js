let prom = (number) => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{ 
        if ((number%2 ) == 0){
            console.log("\n\n this number is even \n\n")
        }else {
            console.log("\n\n this number is odd \n\n")
        }
      },2000)
})
}
prom(13).then(prom).catch(prom)