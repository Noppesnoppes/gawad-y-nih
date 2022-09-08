var prompt = require("prompt-sync")();

var year = parseInt( prompt("give your age> ") )
if (year<1900) {
console.log("you're old"); 
}