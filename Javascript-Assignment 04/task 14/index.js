var date = new Date();
console.log("current date: ", date);
var time = date.getTime();
//console.log(time);
var neg = time - 3600*1000;
//console.log(neg);
var date2 = new Date(neg);
console.log("1 hour ago, it was Dec", date2);

//var time = new Date().getTime(); // get your number
//console.log(time);
//var date = new Date(time); // create Date object

//console.log(date.toString());