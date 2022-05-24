
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    var temp = "";
          data.forEach((itemData) => {
            temp += "<tr >";
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td>" + itemData.email + "</td>";
            temp += "<td>" + itemData.address.zipcode+ "</td>";
          });
         
          document.getElementById('data').innerHTML = temp;

  })