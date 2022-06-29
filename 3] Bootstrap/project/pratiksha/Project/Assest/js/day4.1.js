function calculator() {
    var x = document.getElementById('fnum').value;
    var y = document.getElementById('snum').value;
    var op = document.getElementById('op').value;
    switch(op) {
        case '+':
            result = parseInt(x)+parseInt(y);
            document.getElementById('cvalue').innerHTML = result;
            break;
            
        case '/':
            result = parseInt(x)/parseInt(y);
            document.getElementById('cvalue').innerHTML = result;
            break;
            
        case '-':
            result = parseInt(x)-parseInt(y);
            document.getElementById('cvalue').innerHTML = result;
            break;
            
        case '*':
            result = parseInt(x)*parseInt(y);
            document.getElementById('cvalue').innerHTML = result;
            break;
            
        default:
            document.getElementById('cvalue').innerHTML = result;
            break;
    }
}