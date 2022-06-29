//Arithmetic Operation from user input using form input elements
function add() {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    addition = a + b;
    sub = a - b;
    multi = a * b;
    div = a / b;
    mod = a % b;
    document.getElementById("addition").innerHTML = addition;
    document.getElementById("sub").innerHTML = sub;
    document.getElementById("multi").innerHTML = multi;
    document.getElementById("div").innerHTML = div;
    document.getElementById("mod").innerHTML = mod;
}