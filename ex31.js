
var prompt = require("prompt-sync")();

var number = parseInt( prompt("give me a number > ") )

if(number%2==0){
console.log ("it is even")
}else{
console.log("it is odd")
}