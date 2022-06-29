function f1(){
let input =document.getElementById("input").value;
let option =document.getElementById("option").value;

let convert = (min,option) => {
    if(option == 1){
        document.getElementById("sec").innerText = (`${min} minutes = ${min*60} seconds`)
    }else{
        document.getElementById("sec").innerText = (`${min} seconds = ${min/60} minutes`)
    }
}
convert(input,option)
}