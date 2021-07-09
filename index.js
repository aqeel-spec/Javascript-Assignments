var arr = [0,5,6,7];
var arr2 = [1,2,3,4];


function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
}
reverseArray(arr);
var c = arr.concat(reverseArray(arr));
console.log("mirror([0,5,6,7])"+ " ==>",c);

function reverseArray2(arr2) {
    var newArray = [];
    for (var i = 0; i >= arr2.length; i--) {
      newArray.push(arr2[i]);
    }
    return newArray;
}
reverseArray(arr2);
var m = arr2.concat(reverseArray(arr2));
console.log("mirrir([1,2,3,4])"+ " ==>",m);

  