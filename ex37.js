var prompt = require("prompt-sync")();
var numberCount =0

while(true){
    var number =  parseInt (prompt("give a number: "))

    if(number===0){
        break
     } else {
     numberCount++
     }
    }
console.log ("total amount of numbers", numberCount)