class class_name {
    constructor() {
        console.log("this is constructor method from main origin ")
    }
    prototype(a,b) {
        console.log("this is prototype method from main origin"+a +b)
    }
    static msg() { //this key not access variabes
        console.log("this is static method from main origin")
    }
}
class inherit_class extends class_name{
    // constructor() {
    //     console.log("this is constructor method from inherit class")
    // }
    prototype_inherit(a,b) {
         super.prototype()
        console.log("this is prototype method from inherit class" +a+b)
    }
    static msg_inherit() {
        // super.msg()
        console.log("this is static method from inherit class")
    }
}
let a = new inherit_class()
a.prototype_inherit(12,11)
a.prototype(1,11)
inherit_class.msg_inherit()