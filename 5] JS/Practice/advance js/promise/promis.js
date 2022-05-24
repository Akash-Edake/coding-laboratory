
  let prom = (number) => {
    return new Promise((resolve, reject) => {
      //setTimeout(()=>{ 
        if ((number%2 ) == 0){
          resolve("\n\n this number is even \n\n")
        }else {
          reject("\n\n this number is odd \n\n")
        }
     // },2000)
})
}
prom(13).then((even)=>{console.log(even)}).catch((odd)=>{console.log(odd)})
