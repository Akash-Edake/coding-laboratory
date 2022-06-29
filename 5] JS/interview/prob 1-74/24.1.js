


function f1() {
    var str = document.getElementById("input").value;
   
    var res = str.replace(/\D/g, ","); // Get only number
    let f1 = res.split(",") //conver in array
    f2 = f1.filter(ele => ele > 0) //only choose number in array

    sum = 0;
    f2.forEach(element => {
        return (
            sum += parseFloat(element)  //convert string into number
        )
    });
    console.log(sum)
    document.getElementById("output").innerHTML =  sum

}