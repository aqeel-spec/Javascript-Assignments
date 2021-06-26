var date = new Date("May 15 2019");

var c = date.getDate();
console.log("Today date is = ",c)

if ( c > 16){
    console.log("Last days of the month");
}else if ( c < 16 ) {
    console.log("First fifteen days of the month");
}

