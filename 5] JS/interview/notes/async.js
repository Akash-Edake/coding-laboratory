f1 = async () => {
    console.log('A');
    console.log('B');
    await console.log('C');
    console.log('D');
}
f1()
console.log('E');
console.log('F');