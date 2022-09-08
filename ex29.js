var prompt = require("prompt-sync")();

var number1 = parseInt( prompt("give me the first number > ") )
var number2 = parseInt( prompt("give me the second number > ") )

if(number1>number2){
    console.log("larger number is", number1)
}else if(number2>number1){
    console.log("larger number is", number2)
}else if(number1===number2){
console.log ("theyre equal")
}