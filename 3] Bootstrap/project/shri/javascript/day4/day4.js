function result() {
    var a = document.getElementById("age").value;

    var b = (a >= 18) ? "You are Eligible for voting" : "you r not not eligible for voting";

    var c = document.getElementById("name").text;
    document.getElementById("name").innerHTML = c;
    document.write(b);
}