
/*function showMessage(){
    console.log("Hello World");
}showMessage();*/

/*function multiply(num1,num2){
    var num3 = num1 * num2;
    console.log("Num3 = ",num3);
}
multiply(2,3);
multiply(8,9)
*/

/*function messsage(name){
    console.log("name = "+name)
}
messsage("Aqeel");
messsage("Shahzad");
*/

//function test(){
  //  return 45;
//}
//var a = test()
//console.log(a);

/*
function multiply (num1,num2){
    return num2;
    return num1 * num2;//it will not execute 
    //only one return statement execute at a time
}
var a = multiply(3,6);
console.log(a);
*/

//calculate student grade
/*
function findGrade(score){
    if (score>80 && score<=100){
        console.log("Your Grade A:", "Your marks = ",score);
    }
    else if (score>70 && score<=80){
        console.log("Your Grade B:", "Your marks = ",score);
    }
    else if (score>60 && score<=70){
        console.log("Your Grade C:", "Your marks = ",score);
    }
    else if (score>50 && score<=60){
        console.log("Your Grade D:", "Your marks = ",score);
    }
    else if (score>33 && score<=50){
        console.log("Your Grade E:", "Your marks = ",score);;
    }
    else {
        console.log("Not Graded try again","Your score is =",score);
    }
}

findGrade(parseInt(prompt("Input your 1st studeny marks to find grade")));
findGrade(parseInt(prompt("Input your 2nd student marks to find grade")));
findGrade(parseInt(prompt("Input your 3rd student marks to find grade")));
findGrade(parseInt(prompt("Input your 4th student marks to find grade")));
findGrade(parseInt(prompt("Input your 5th student marks to find grade")));
findGrade(parseInt(prompt("Input your 6th student marks to find grade")));*/
//findGrade(56);
//findGrade(43);
//findGrade(20);

/*function multiply(num1 , num2){
    return num1 * num2;
}
function sum(a , b){
    return multiply(a,b) + b;
}

var total = sum(3,4) + 6;
console.log("total is = ", total)*/
/*
function multiply(num1 , num2){
    return num1 * num2;
}
function sum(a , b){
    return a + b;
}

var total = sum(multiply(3,4), 2) + 6;
console.log(total);//result is 20
*/

//nested function to calculate percentage and grade of students
/*

function calcuScore(sub1, sub2, sub3){
    return (sub1 + sub2 + sub3) / 3;
}

function findGrade(score){
    if (score>80 && score<=100){
        console.log("Your Grade A:", "Your marks = ",score);
    }
    else if (score>70 && score<=80){
        console.log("Your Grade B:", "Your marks = ",score);
    }
    else if (score>60 && score<=70){
        console.log("Your Grade C:", "Your marks = ",score);
    }
    else if (score>50 && score<=60){
        console.log("Your Grade D:", "Your marks = ",score);
    }
    else if (score>33 && score<=50){
        console.log("Your Grade E:", "Your marks = ",score);;
    }
    else {
        console.log("Not Graded try again","Your score is =",score);
    }
}
findGrade(calcuScore(78,56,99));
findGrade(calcuScore(80,46,59));
*/

/*
var a = 8;
console.log("Now the value of a is = ",a);
function sum(){
    var b = 6;
     a = b + 5;
}

sum();
console.log("A = "+a);
*/

/*
a = 7;

function sum(){
     b = 6;
    a = b + 5;
    console.log("A ",a);

}
sum();
console.log("B ",b);
*/

//This is how to calculate square
/*
var square  = function (num){return num*num}
console.log(square(2));
*/


//FunctioN hoisting
/*var total = sum(4,5);
console.log("Num =",total);

function sum(a,b){
    return a + b;
}*/
/*
var num = 5;
function chaneValue(a){
    a = 7;
}
var b = chaneValue();
console.log(b);
console.log(num);*/

//Arguments passed by value
/*
var arr = [2,3,4,5];
function updateArray(val){
    val[1] = 57;
}
console.log(arr[1]);
updateArray(arr);
console.log(arr[1]);
console.log("Original arr = ",arr);
*/

//2nd example
//Object example
/*
var obj = { name: "John", age : 56 };

function updateObject(val){
    val.age = 40;
}

console.log(obj.age);
updateObject(obj);
console.log(obj.age);*/

//Permitive data types = string,boolean, number
//non-Permitive data types = object ,array 
//value passed through non permitive data types  === by reference
//example of non-permive data types are above and one below
/*

var arr = [2,3,4,5];

function updateArray(val){
    val[0] = 6;
}
console.log(arr);
updateArray(arr);
console.log(arr);*/

//Recursive function 
//A recursive function is a function that call itself
//simple example of recursive function is "factorial";

//Simple example
/*
function factorial(n){
    if ( n <= 1 ){
        return 1;
    }else {
        return n * factorial (n-1);
    }
}
var b = factorial(parseInt(prompt("Enter a number to factorial")));
console.log(b);*/


//switch statement
//Example ///similar    ('expression === value')
/*var day = 6;
switch (day){
    case 6:
        console.log("Today is Saturday");
        //break;
    case 0:
        console.log("TOday is sunday")
        break    
    default:
        console.log("Looking forward to the weekend");    
}*/


//No comparison will used in ("switch");e.g <,> ||, && etc
//But we can group them

/*var day = 6; //casse 0 will run if it is either case 6: or case 0:

switch (day){
    case 6:
        //console.log("Today is Saturday");
        //break;
    case 0:
        console.log("Yaaaa! It's a Weekend")
        break    
    default:
        console.log("Looking forward to the weekend");
}*/

//Switch : strict comparison
//Switch cases used strict comparison(===)
//(===) used to check the type of variable
//Both tha variable have to be similar data type

/*
var x = 1;
switch (x){
    case 0:
        console.log("off");
        break;
    case 1:
        console.log("on");
        break;
    default:
        console.log("No value found");    
}*/

//How to find vowel using switch case
/*
var a = prompt("Enter a character to check either vowel or not");

switch (a){
    case "A":
        console.log(a,"is vowel")
        break;
    case "E":
        console.log(a,"is vowel")
        break;
    case "I":
        console.log(a,"is vowel")
        break;
    case "O":
        console.log(a,"is vowel")
        break;
    case "U":
        console.log(a,"is vowel")
        break;
    default:
        console.log(a,"Not a vowel")           
}*/

// While loops

//     difference between for and while loop
//   for ( initilization : condition : expression ){
    //code block to be executed
//}

// while ( condition ){                //condition will be in true or false
    //code block to be executed
//}



//        Example
/*
var i = 0;
while ( i < 10 ){
    text = "The number is "+ i;
    i++;
    console.log(text);
}*/
//in while loop 
//1st condition check
//2nd then code execute

//             Do/While loop 
  // 1st code execute
  // 2nd condition check
//              Syntax
/*
do {

}
while  (condition);  
*/

/*
var i = 0;

do {
    console.log("I = " + i);
    i++;
}

while ( i < 10 );
*/

var docontinue = true;

while (docontinue){
    console.log("Hello");
    var input = prompt("Please enter y to run again or any other key to stop");
    if ( input.toLowerCase() !=="y" ){
        docontinue = false;
    }
}

