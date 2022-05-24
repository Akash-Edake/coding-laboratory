class class_name {  
    abc() {
        console.log(`${this.name}`)
    }
}
let a = new class_name();

a.name = "akash"
a.abc()
