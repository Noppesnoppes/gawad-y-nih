var ps = require("prompt-sync");
var prompt = ps();

var string = prompt("give a string:")
var integer = prompt("give an integer:")
var double = prompt("give a double:")
var boolean = prompt("give a boolean:")
console.log("your string "+ string )
console.log("YOUR INTEGER "+ integer)
console.log("your double "+ double)
console.log("your boolean "+ boolean)