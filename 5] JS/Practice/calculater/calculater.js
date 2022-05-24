function display(result) {
    document.getElementById("reset").value += result
}

function solve() {
    var x = document.getElementById("reset").value
    var y = eval(x) 
    document.getElementById("reset").value = y
}

function clr() {
    document.getElementById("reset").value = ""
}