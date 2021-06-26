var str = "The quick brown fox jumps over the lazy dog";
console.log("Text:",str);
document.write("Text: ",str,'<br /><br/>')

var c = str.match(/the/ig);

console.log("There are",c.length,"occurence(s) of word 'the'");
document.write("There are ",c.length," occurence(s) of word 'the'");