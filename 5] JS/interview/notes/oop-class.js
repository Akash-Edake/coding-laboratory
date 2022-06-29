class class_name {
    constructor() {
        this.a= 12
        console.log('this is constructor')
    }
    msg() {
        
        console.log('this is prototype method', this.a)
    }
}

class second extends class_name{
constructor(){
    super()
    console.log('hi')
}
msg1(){
    super.msg()
    console.log('2nd prototype ')
}
}
let a = new second()
a.msg1()