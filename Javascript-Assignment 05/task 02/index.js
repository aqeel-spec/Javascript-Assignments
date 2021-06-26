
//function passed by value
/*
var length = parseInt(prompt("Enter the length of rectangle"));

var width = parseInt(prompt("Enter the width of rectangle"));

function area(length,width){
    ar =  length * width;
    console.log("The area of rectangle is = "+ar);
}
area(length,width);
//console.log("The area of rectangle is "+area());
*/



var length = parseInt(prompt("Enter the length of rectangle"));

var width = parseInt(prompt("Enter the width of rectangle"));
//var obj = { len:length, wed:width }

function area(val){
    ar =  length * width;
    val.ar = 80;
    console.log("The area of rectangle is = "+ar);
}
area(length,width);
//console.log("The area of rectangle is "+area());