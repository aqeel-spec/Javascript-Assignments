
function calFatorial(n){
    if ( n <=1 ){
        return 1;
    }else {
        return n * calFatorial(n-1);
    }
}


var d = parseInt(prompt("Enter a number to caculate factorial"));
var e = parseInt(prompt("Enter a number to caculate factorial"));
var f = parseInt(prompt("Enter a number to caculate factorial"));

var a = calFatorial(d);
var b = calFatorial(e);
var c = calFatorial(f);

console.log("factorial of "+d + " = ",a);
console.log("factorial of ",+ e + " = ", b);
console.log("factorial of ", + f + " = " ,c);

