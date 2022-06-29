
if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}
function myFunction() {
var currentAge = document.getElementById("personAge").value; 
if(currentAge < 13){
var chargesMessage = "Rs.100 Should Be Charged.";
}else
{
var chargesMessage = "Rs.200 Should Be Charged.";
}
document.getElementById("sampleDemo").innerHTML = chargesMessage;
}

