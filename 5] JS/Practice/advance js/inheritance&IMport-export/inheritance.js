class mech{
    constructor(a,b){
this.a=a;
this.b=b;
    }
    te1(){
console.log(`My name is ${this.a} & branch ${this.b}`)
    }
}

class soft extends mech{
   
    te(c){
        super.te1()
        /* super vaparletar te1 ch data bind hotay nahitar,
         class chya baher a.te1() ghayv lagel */

        this.c =c;
        console.log(`${this.a} but im working in ${this.c}`)
        // this.a access hou shaktay ---------
            }
}
// let a=new soft("akash","mech")
// a.te('softwear') 
let ak="akash"

export{soft}