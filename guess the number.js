var prompt = require("prompt-sync") ();
console.log("Guess a number from 1 to 100 or type Cheat to find the answer");
var answer = Math.floor((Math.random() * 100) + 1);
var i = 1;
var c = 1;




while (guess != answer){
    if (i > 10) { console.log("you have used up all your guesses")
        break
    }

        var guess = prompt();
    
    if (guess > 100){
        console.log("Error, Cannot be bigger than 100");
    }
    else if (guess < 0){
        console.log("Error, Cannot be smaller than 0");
    }
    else if (guess == answer){
        console.log("You are correct, the answer is " + answer);
        console.log("It took you " + i +" tries");
        }
   
    
    else if (guess < answer){
        console.log("too low");
    }
    else if (guess > answer){
        console.log("too high");
    }
    else if (guess == "Cheat"){
        guessNum(answer);
    }
    i++;
}