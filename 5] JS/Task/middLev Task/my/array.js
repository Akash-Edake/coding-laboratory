
function f1() {
    var b = document.getElementById("input").value;
var a =b.toLowerCase();
    let array = [
        {
            name: "abc",
            age: "n",
            add: "PT-0"
        },
        {
            name: "pqr",
            age: "n+1",
            add: "PT-1"
        },
        {
            name: "xyz",
            age: "n+2",
            add: "PT-2"
        },
        {
            name: "ryb",
            age: "n+3",
            add: "PT-3"
        },
    ]
    let sr="";
    let text = "";
    if ("name" == a) {
        
        
        for (let i = 0; i <= array.length; i++) {
            text += JSON.stringify(array[i].name) + "<br> "+ "<br> ";
            var name = text.replace(/"/g, '')
            document.getElementById("name").innerHTML = name;
              sr+=(i+1)+ "<br> "+ "<br> ";
             document.getElementById("sr.no").innerHTML = sr;
        }
    } else if ('age' == a) {
       
        for (let i = 0; i <= array.length; i++) {
            text += JSON.stringify(array[i].age) + "<br> " + "<br> ";
            var age = text.replace(/"/g, '')
            document.getElementById("age").innerHTML = age;
            sr+=(i+1)+ "<br> "+ "<br> ";
            document.getElementById("sr.no").innerHTML = sr;
        }
    } else if ('add' == a) {
        for (let i = 0; i <= array.length; i++) {
            text += JSON.stringify(array[i].add) + "<br> " + "<br> ";
            var address = text.replace(/"/g, '')
            document.getElementById("add").innerHTML = address;
            sr+=(i+1)+ "<br> "+ "<br> ";
            document.getElementById("sr.no").innerHTML = sr;
        }
    } else {
         
       
}
}
