var prompt = require("prompt-sync")();
var sum =0
var numberCount =0

while(true){
    var number =  parseInt (prompt("give a number: "))

    if(number===0){
        break
     } else {
         numberCount++
        sum+=number
     }
    }
console.log ("total sum of numbers", sum)
console.log ("total amount of numbers", numberCount)