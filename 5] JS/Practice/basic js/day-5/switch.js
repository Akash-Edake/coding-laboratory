function f1() {
    let a = parseFloat(document.getElementById("no.1").value);
    let b = parseFloat(document.getElementById("no.2").value);
    let select = document.getElementById("select").value;
    
    switch (select) {
        case 'addition':
            document.getElementById("equal").innerHTML = (a+b);
            break;
        case 'subtractioan':
            document.getElementById("equal").innerHTML = (a-b);
            break;
        case 'multiplication':
            document.getElementById("equal").innerHTML = (a*b);
            break;
        case 'division':
            document.getElementById("equal").innerHTML = (a/b);
            break;
    }

}