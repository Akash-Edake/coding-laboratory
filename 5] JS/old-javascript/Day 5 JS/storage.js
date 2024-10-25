// 1. Cookies:
// document.cookie = "username=CTS Pune; expires:Wed, 05 Sep  2021 09:45:39 UTC";

// data =[1,2,3];
// var myCookie = document.cookie;

// console.log(myCookie);

// 2. Local storage:

data ="CTS Pune";
localStorage.setItem('companyName', data);



var res = localStorage.getItem('companyName');

// localStorage.removeItem('companyName');

console.log(res);


data2= "Angular";
sessionStorage.setItem('className', data2);
var res2 = sessionStorage.getItem('className');
console.log(res2);

sessionStorage.setItem('demo', 'CTS');

console.log(sessionStorage.getItem('demo'));

// sessionStorage.removeItem('demo');
