// Exercise 2
//
// Write a function that accepts two integers and returns
// the greater integer.
//
//
// Edit only the code between the lines (below)
function getMax(num1, num2) {
  // your code here...
  //return Math.max(num1, num2); okay OR
  let newNum = 0;
  if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//
// Call the function to test your code.
console.log(getMax(12, 43));

// Create more test examples.

console.log(getMax(49, 10));
console.log(getMax(1, 2));

// This is needed for automated testing (more on that later)
module.exports = getMax;
