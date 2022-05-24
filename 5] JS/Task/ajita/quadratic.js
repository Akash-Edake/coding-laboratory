
function f1(){
    var first= document.getElementById("value1").value;

var second =document.getElementById("value2").value; 

var third=document.getElementById("value3").value; 
a= parseInt(first);
b= parseInt(second);
c= parseInt( third); 

    var part = Math.sqrt(b*b-4*a*c);
var den =2*a;
var root1= (-b+part)/den;
var root2= (-b-part)/den;

document.getElementById("root1").value=root1;
 document.getElementById("root2").value=root2;

// document.write(" first root:" + root1 )

// document.write(" second root: "+ root2 )

}

// console.log(root1)

 