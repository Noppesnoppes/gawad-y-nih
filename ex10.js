var ps = require("prompt-sync");
var prompt = ps();

let name = prompt("I will tell a story, but I need some information. Give a name for main character: ");
// Write your code here:
var work = prompt(" Give the character a profession: ")

var story = "Once upon a time there was a " + work + " named bob. " + 
"On his way to work, " + name + " often wondered what being a " + work + " meant to them." + 
" When you work as a " + work + " you meet different people." + 
name + " enjoys his work as a " + work + " , The end."

console.log(" Here is the story:")
console.log(story)