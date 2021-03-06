/*

The Geometrizer
Create 2 functions that calculate properties of a circle, using the definitions here.
Create a function called calcCircumference:
a. Pass the radius to the function.
b. Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
a. Pass the radius to the function.
b. Calculate the area based on the radius, and output "The area is NN".
Circumference of circle = 2πr
Area of circle = πr​^2

*/
function calcGeometry(radius) {
    var circumference = Math.PI * 2*radius;
    console.log("The circumference is " + circumference);
    var area = Math.PI * radius*radius;
    console.log("The area is " + area);
  }
  calcGeometry(parseInt(prompt("Enter the radius of circle")));