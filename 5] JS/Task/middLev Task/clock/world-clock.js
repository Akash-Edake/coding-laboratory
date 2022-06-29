function startTime() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    // let s = date.getSeconds();

    let day = date.getDay();
    let d = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let H = (h % 12)
    amPm = (h >= 12) ? "PM" : "AM"
    arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    document.getElementById('india').innerHTML = H + ":" + m + " " + amPm;
    setTimeout(startTime, 1000); //1sec=1000miniSec

    document.getElementById('india1').innerHTML = arr[day];
    document.getElementById('india2').innerHTML = d + "/" + month + "/" + year;


    let hourUS =(h-9);
    let ush = (hourUS%12 )

    document.getElementById('us').innerHTML = ush + ":" + m + " " + amPm;
    setTimeout(startTime, 1000); //1sec=1000miniSec

    document.getElementById('us1').innerHTML = arr[day-1];
    document.getElementById('us2').innerHTML = (d-1) + "/" + month + "/" + year;



}