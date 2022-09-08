var prompt = require("prompt-sync")();

var age = parseInt( prompt("how old are you? > ") )
if (age>=18){
    console.log("youre an adult")
}else if(age<18) {
    console.log("youre underage!")
}