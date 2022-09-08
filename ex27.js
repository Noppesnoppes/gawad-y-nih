var prompt = require("prompt-sync")();

var number = parseInt( prompt("give me a number> ") )
if (number>=0){
    console.log("it is posetive")
}else if(number<0) {
    console.log("it is not positive")
}