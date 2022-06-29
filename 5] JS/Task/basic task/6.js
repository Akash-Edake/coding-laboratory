f1=()=>{
    let select = document.getElementById('select').value;
switch (select) {
    case 'Russia':
        document.getElementById('output').innerHTML = " <b>Total in km² = </b> 17,098,246 <br> <b>Percentage of Earth's Surface = </b>3.352%"
        break;
    case 'Antarctica':
        document.getElementById('output').innerHTML = " <b>Total in km² = </b> 14,000,000 <br> <b>Percentage of Earth's Surface = </b>2.745%"
        break;
    case 'Canada':
        document.getElementById('output').innerHTML = " <b>Total in km² = </b> 9,984,670 <br> <b>Percentage of Earth's Surface = </b> 1.958% "
        break;
    case 'China':
        document.getElementById('output').innerHTML = " <b>Total in km² = </b> 9,596,961 <br> <b>Percentage of Earth's Surface = </b> 1.881% "
        break;
    case 'United States':
        document.getElementById('output').innerHTML = " <b>Total in km² = </b> 9,525,067 <br> <b>Percentage of Earth's Surface = </b> 1.867% "
        break;
    case 'Brazil':
        document.getElementById('output').innerHTML = " <b>Total in km² = </b> 8,515,767 <br> <b>Percentage of Earth's Surface = </b> 1.670% "
        break;
    case 'Australia':
        document.getElementById('output').innerHTML = " <b>Total in km² = </b> 7,692,024 <br> <b>Percentage of Earth's Surface = </b> 1.508% "
        break;
    case 'India':
        document.getElementById('output').innerHTML = " <b>Total in km² = </b> 3,287,263 <br> <b>Percentage of Earth's Surface = </b> 0.644% "
        break;
    case 'Argentina':
        document.getElementById('output').innerHTML = " <b>Total in km² = </b> 2,780,400 <br> <b>Percentage of Earth's Surface = </b> 0.545% "
        break;
    case 'Kazakhstan':
        document.getElementById('output').innerHTML = " <b>Total in km² = </b> 2,724,900 <br> <b>Percentage of Earth's Surface = </b> 0.534% "
        break;
    case value:
        document.getElementById('output').innerHTML = " <b>Total in km² = </b> AAShsdg <br> <b>Percentage of Earth's Surface = </b> ### "
        break;

    default:
        break;
}
}