class example {
    constructor() {
        console.log("this is constructor ")
        //console.log("constructor not requird callback")
    }
    akash() {   // prototype
        console.log("this is massage")
        //console.log("constructor requird callback (ex- a.msg())")
    }
    static ak(){
        a=10;
        console.log(a)
        console.log("this is static msg")
    }
}
let a = new example(); //obj
a.akash() 
example.ak() //class name

