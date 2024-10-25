
console.log(new Date().getDay());
var day;
switch(new Date().getDay()){

    case 0:
    day ='Sunday';
    break;
    
    case 1:
    day ='Monday Hello Nice day';
    break;

    case 2:
    day ='Tuesday';
    break;

    case 3:
    day ='Wednseday';
    break;

    case 4:
    day ='Thrusday';
    break;

    case 5:
    day ='Friday';
    break;

    default:
    day ='Saturday';
    break;
}

console.log(day);