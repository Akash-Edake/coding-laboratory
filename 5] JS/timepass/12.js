let date1, date2;
date1 = new Date("4/17/2022");
date2 = new Date("5/17/2022");

let timeDifference = date2 - date1;
let oneDay = (1000 * 60 * 60 * 24)
let TotaldaysDifference = timeDifference / oneDay;

firstdate = (`${date1.getDate()}/${date1.getMonth()}/${date1.getFullYear()}`)
seconddate = (`${date2.getDate()}/${date2.getMonth()}/${date2.getFullYear()}`)

console.log(`\n number of days between the ${firstdate} to ${seconddate} is --> ', ${TotaldaysDifference} \n`);  