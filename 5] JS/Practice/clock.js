function startTime() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
// Includeing my coding
    let day = date.getDay();
    let d = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
d+ parseInt
    let H = (h % 12)
    amPm = (h >= 12) ? "PM" : "AM"
    arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    document.getElementById('txt').innerHTML = H + ":" + m + ":" + s + " " + amPm;
    setTimeout(startTime, 1000); //1sec=1000miniSec

    document.getElementById('day').innerHTML = arr[day];
    document.getElementById('date').innerHTML = d + "/" + month + "/" + year;
    document.ge
}

//   