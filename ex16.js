var ps = require("prompt-sync");
var prompt = ps();

var days = prompt ("how many days")
console.log (days * 24 * 60 * 60)