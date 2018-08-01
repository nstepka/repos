// In this exercise, we have an array of numbers
var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
//lets get the some of all these elements
var sum=0
for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++) {
  // We'll use the unary additional operatior
  // To add the current element's value to the rolling sumOfRange
  sum += testArray[arrayPosition];
}
console.log("The sum of " + testArray + "is:" + sum);
