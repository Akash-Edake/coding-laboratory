//+ button click function increment 
     //- button click function increment 
     // output bind with output div


     var data = 0;
    //   var test = document.getElementById("output").innerHTML;
    //   console.log(test);  
      document.getElementById("output").innerText= data;
     //document.write(data);
 
     function pluseOne(){
         data = data + 1;
         var inText = document.getElementById("output").innerText = data;

         // alert("add one");
        // console.log(inText);
     }
     function minusOne(){
         // alert("minus-1");
         data = data - 1;
         var inHtml = document.getElementById("output").innerHTML = data;
        //  console.log(inHtml)

     }
 
