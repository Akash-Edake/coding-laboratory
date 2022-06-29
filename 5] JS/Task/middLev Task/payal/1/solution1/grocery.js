function myFunction() {
     var grocery = document.getElementById("myInput").value;
    switch (grocery) {
      case "milk":
      var result = ("Milk-1-liter-Price-50rs.");
      document.getElementById("answer").value = result;
      break;

      case "bread":
      var result = ("Bread-1-quantity-Price-35rs.");
      document.getElementById("answer").value = result;
      break;

      case "apple":
      var result = ("Apple-1-Kg-Price-220rs.");
      document.getElementById("answer").value = result;
      break;

      case "rice":
      var result = ("Rice-1-kg-Price-54rs.");
      document.getElementById("answer").value = result;
      break;
      case "egg":
        var result = ("Dusrya Dukanat jaa.");
        document.getElementById("answer").value = result;
        break;
      default:
        //document.write("Selected input is not correct");
        var text = ("Please select available grocery items only");
        document.getElementById("answer").value = text;
    }
  }

  function checkTotal() {
      var a = document.listForm.choice;
      var b = document.listForm.total;
      //document.listForm.total.value = '';
      var sum = 0;
      for (i=0;i<a.length;i++) {
      if (a[i].checked) {
          sum = sum + parseInt(a[i].value);
          
      }
      }
        b.value = sum;
  }