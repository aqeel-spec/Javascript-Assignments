var str = "<p><strong><em>Only print this</em></strong></p>";
console.log(str);
var b =  str.replace( /(<([^>]+)>)/ig, '');
console.log("Output : ", b);

//remove html tages from above string