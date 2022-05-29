// Factorialize a Number
function factorialize(num) {
    let nu = 1
    for (let i = 1; i <= num; i++) {
        nu *= i 
    }
    return nu;
}

console.log(factorialize(5));