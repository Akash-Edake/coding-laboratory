// what is the closure concept
function Addition(x) {
    function add(y) { //its uses x so it has clouser over x
        return y + x;
    };
    return add;

}
var a = Addition(1);
var b = Addition(10)
console.log(a);
console.log(b);
a(3);
b(13);