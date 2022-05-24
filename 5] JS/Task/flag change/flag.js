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

    let H = (h % 12)
    amPm = (h >= 12) ? "PM" : "AM"
    arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    document.getElementById('txt').innerHTML = H + ":" + m + ":" + s + " " + amPm;
    setTimeout(startTime, 1000); //1sec=1000miniSec

    document.getElementById('mmonth').innerHTML = arr[month];
    document.getElementById('date').innerHTML = d + ", "+ year;

    team = (s%6)
    Arr2 = ['Chennai Super Kings VS Delhi Capitals', 'Gujarat Titans VS Kolkata Knight Riders', 'Lucknow Super Giants VS Mumbai Indians', 'Punjab Kings VS Rajasthan Royals','Royal Challengers Bangalore VS Sunrisers Hyderabad'];
    document.getElementById('team').innerHTML = Arr2[team];
    
   


}

  