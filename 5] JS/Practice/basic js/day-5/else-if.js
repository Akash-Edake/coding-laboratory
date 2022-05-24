function f1(){
    let a = parseFloat (document.getElementById("no.1").value);
    let b = parseFloat (document.getElementById("no.2").value);
    if (a==b){
       
     document.getElementById("equal").innerHTML = "Equal value";
    }else if(a>b){
        document.getElementById("greater").innerHTML = a+ " is Greater than " +b;
    }
    else{
        document.getElementById("less").innerHTML = a+ " is less than " +b;
    }
}
function f2(){
    let a = parseFloat (document.getElementById("oddeven").value);
    let b= (a%2)
    if (b!=0){
        document.getElementById("odd").innerHTML = "Value is Odd";
    }else{
        document.getElementById("even").innerHTML = "Value is Even";
    }
}