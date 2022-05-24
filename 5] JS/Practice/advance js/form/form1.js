function error_msg(ermsg,ermsg1){
    document.getElementById(ermsg).innerHTML = ermsg1;

}
function validation(){
    var username = document.getElementById("username").value;
    var Password = document.getElementById("Password").value;
    var conform_Password = document.getElementById("conform-Password").value;
    var mobile = document.getElementById("mobile").value;
    if (username ==""){
        ermsg1("user","**only characters are allowed**");

    }
}