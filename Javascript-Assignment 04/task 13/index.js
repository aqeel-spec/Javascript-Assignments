var date = new Date("Sat Dec 05 2015 22:32:23");
console.log("Current Date:",date);

var date2 = new Date(0);
//console.log(date2)
var c = date.getTime() / 1000;
//console.log("seconds = ",c)
var d  = c / 60;
//console.log("d = ",d)
var f = d / 60;


console.log("Elapsed milliseconds since January 1, 1970:", date.getTime());
console.log("Elapsed minutes since January 1, 1970:", f);