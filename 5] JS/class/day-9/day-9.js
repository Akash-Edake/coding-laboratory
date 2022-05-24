
function errorMsg(elID, errorMsg){
    document.getElementById(elID).innerHTML = errorMsg;
}

function validateForm(){
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    // var name = document.contactForm.name.value;
    // var name = document.contactForm.name.value;
  if(name == ''){
    errorMsg("nameErr","Please Enter Valid Name");
    // document.getElementById("nameErr").innerHTML = "Please Enter Valid Name"
  }
  if(email == ''){
    errorMsg("nameErr","Please Enter Valid Name");
    // document.getElementById("nameErr").innerHTML = "Please Enter Valid Name"
  }
  if(name == ''){
    errorMsg("nameErr","Please Enter Valid Name");
    // document.getElementById("nameErr").innerHTML = "Please Enter Valid Name"
  }
  if(mobile == ''){
    errorMsg("nameErr","Please Enter Valid Name");
    // document.getElementById("nameErr").innerHTML = "Please Enter Valid Name"
  }
//   if(name == ''){
//     errorMsg("nameErr","Please Enter Valid Name");
//     // document.getElementById("nameErr").innerHTML = "Please Enter Valid Name"
//   }

}