function TodaysDate() {
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    document.getElementById("day").innerHTML = daylist[day];

    var dd = today.getDate();
    var dm = today.getMonth();
    dm = dm + 1;
    var dy = today.getFullYear();
    document.getElementById("date").innerHTML = dd + "/" + dm + "/" + dy;

    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var h = hour % 12;
    var prepand = (hour >= 12) ? "PM" : "AM";
    document.getElementById("time").innerHTML = h + ":" + minute + ":" + second + prepand;
    setTimeout(TodaysDate, 1000);
}
TodaysDate();