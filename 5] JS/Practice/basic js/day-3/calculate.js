function f1() {
    var first = document.getElementById("value1").value;
    var second = document.getElementById("value2").value;

    a = parseFloat(first);
    b = parseFloat(second);

    Addition = a + b;
    Subtraction = a - b;
    Multiplication = a * b;
    Division = a / b;
    Remainder = a % b;

    document.write("total value of Addition =>" + Addition);
    document.write("<br/> total value of Subtraction => " + Subtraction);
    document.write("<br/> total value of Multiplication => " + Multiplication);
    document.write("<br/> total value of Division => " + Division);
    document.write("<br/> total value of Remainder => " + Remainder);
   

}
