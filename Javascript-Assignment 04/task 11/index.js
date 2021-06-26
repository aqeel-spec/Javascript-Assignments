var b1 = "42";
var b2 = "12345";
var b3 = "666";

var c1 = b1.length;
var c2 = b2.length;
var c3 = b3.length;

var a1 = 4 + 2;
var a2 = 1+2+3+4+5;
var a3 = 6+6+6;

var sum1 = a1 / c1;
var sum2 = a2 / c2;
var sum3 = a3 / c3;

console.log(b1 + " = Mean of value is: "+sum1);
console.log(b2 + " = Mean of value is: " + sum2);
console.log(b3 + " = Mean of value is: " + sum3);

//2nd method
//An array of numbers that we want to get
//the average of.
var nums = [2, 10, 9, 6, 12, 3];

//Work out the sum of the numbers in
//our array
var totalSum = 0;
for(var i in nums) {
    totalSum += nums[i];
}

//Work out how many numbers are
//in our array.
var numsCnt = nums.length;

//Finally, get the average.
var average = totalSum / numsCnt;

//Print the median / average to the console.
//In this case, the average is 7.
console.log('Average is: ' + average);