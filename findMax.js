// In this exercise, we have an array of numbers
var findMax = [17, 42, 311, 5, 9, 10, 28, 7, 6];
//lets get the some of all these elements
var maxNumber = 0;
for (var arrayPosition = 0; arrayPosition < findMax.length; arrayPosition++) {
  if (maxNumber < findMax[arrayPosition]) {
    maxNumber = findMax[arrayPosition];
  }
}
console.log("The max number is: " + maxNumber);
