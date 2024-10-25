function onSubmit(fname, lname){
    console.log(fname.value);
    console.log(lname.value);
    result  = fname.value + lname.value;
    showResult();
    // return result;
    // var idValue = document.getElementById('fn');
    // console.log(idValue.value);
}

function showResult(){
  
   console.log(result);
}

