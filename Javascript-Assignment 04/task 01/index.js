var a = "Hyderabad";
console.log("City: ",a);


//It will return == abad  at specified index
//Start and end index
//var b = a.substring(5,7);
//substr
//slice                all these are similar
//var b = a.slice(4,5)
//trim()        remove extra spaces
//var b = a.charAt(5)
//Returns the character at the specified index.
//var b = a.charCodeAt(5);
//Returns the Unicode value of the character at the specified location.
var b = a.replace("Hyder","Islam")

console.log("After replacement:", b);