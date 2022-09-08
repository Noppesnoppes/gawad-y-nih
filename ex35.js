var prompt = require("prompt-sync")();

while(true){
    var answer =  parseInt (prompt("give me a number: "))

    if(answer===42){
        break
    }
}