var data = 0;
pluse = () => {
    data += 1
    document.getElementById('output').innerHTML = data;
    if(data>0){
        document.getElementById('output').style.color='green'
    }else if(data<0){
        document.getElementById('output').style.color='red'
    }else{
        document.getElementById('output').style.color='black'
    }
}
minus = () => {
    data -= 1;
    document.getElementById('output').innerHTML = data;
    
    if(data>0){
        document.getElementById('output').style.color='green'
    }else if(data<0){
        document.getElementById('output').style.color='red'
    }else{
        document.getElementById('output').style.color='black'
    }


}
