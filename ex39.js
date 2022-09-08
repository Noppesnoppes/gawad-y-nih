var prompt = require("prompt-sync")();
var sum =0

while(true){
    var number =  parseInt (prompt("give a number: "))

    if(number===0){
        break
     } else {
     sum+=number
     }
    }
console.log ("total sum of numbers", sum)