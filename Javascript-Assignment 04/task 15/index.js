//var user = parseInt(prompt("What is your age"));
//console.log("Your age is ",user);

var year = parseInt(prompt("Enter your birth year"));


var date = new Date();
var a = date.getFullYear();
var myAge = a - year;
console.log("Your age is:",myAge);
console.log("Your birth year is:",year);