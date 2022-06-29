var x = 5, y = 10;
		var z = x + y
		document.getElementById("p1").innerHTML += z; 
		z = y - x;
		document.getElementById("p2").innerHTML += z; 
		z = x * y;
		document.getElementById("p3").innerHTML += z; 

		z = y / x;
		document.getElementById("p4").innerHTML += z; 


		z = x % 2;
		document.getElementById("p5").innerHTML += z; 
        var a = 5, b = 10;

		document.getElementById("p6").innerHTML = (a != b) && (a < b); 
        
		document.getElementById("p7").innerHTML = (a > b) || (a == b);

		document.getElementById("p8").innerHTML = (a < b) || (a == b);

		document.getElementById("p9").innerHTML = !(a < b);

		document.getElementById("p0").innerHTML = !(a > b);
