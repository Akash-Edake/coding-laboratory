var add;
function add(){
    var a = Number(document.getElementById("firstvalue").value);
    var b = Number(document.getElementById("secondvalue").value);
    var addition = a+b;
     var subtraction=a-b;
     var mutiplication=a*b;
     var divsion=a/b;
     var modulas=a%b;
   document.getElementById("addition").value=addition;
   document.getElementById("subtraction").value=subtraction;
   document.getElementById("mutiplication").value=mutiplication;
   document.getElementById("divsion").value=divsion;
   document.getElementById("modulas").value=modulas;
    }
