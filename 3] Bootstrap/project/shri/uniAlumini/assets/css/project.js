var countDownDate = new Date("june 15 2022, 15:37:25").getTime();

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;


    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("day").innerHTML = "";
        document.getElementById("hour").innerHTML = "";
        document.getElementById("minute").innerHTML = "";
        document.getElementById("second").innerHTML = "";
    }
}, 1000);