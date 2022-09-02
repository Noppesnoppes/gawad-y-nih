var prompt = require("prompt-sync")();

/*
var number1 = parseInt(prompt("Give the first number!"))
var number2 = parseInt(prompt("give the second number"))
var number3 = parseInt(promp("give the THIRD number"))
console.log("The sum is", number1 + number2 + number3)
*/

var number1 = parseInt( prompt("give me first number> ") )
var number2 = parseInt( prompt("give me second number> ") )

console.log(number1 + number2)
console.log(typeof(number1))