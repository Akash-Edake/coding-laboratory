function f1() {
    var first = document.getElementById("value1").value;
    var second = document.getElementById("value2").value;
    var third = document.getElementById("value3").value;

    a = parseFloat(first);
    b = parseFloat(second);
    c = parseFloat(third);

    var rootPart = eval(b * b - 4 * a * c);
    var denom = 2 * a;

    var root1 = (-b + rootPart) / denom;
    var root2 = (-b - rootPart) / denom;

    // var root1 = eval(-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    // var root2 = eval(-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);


    document.getElementById("root1").value = root1;
    document.getElementById("root2").value = root2;

}