var ps = require("prompt-sync");
var prompt = ps();
var number1 = parseInt(prompt("Give the first number!"))
var number2 = parseInt(prompt("give the second number"))
console.log("The sum is", number1 + number2)