var prompt = require("prompt-sync")();

while(true){
    var number =  parseInt (prompt("give me a number: "))

    if(number===0){
        break
    } else if(number<0){
        console.log("that is negative")
    }else if(number>=0){
        console.log(number**2)
    }
}