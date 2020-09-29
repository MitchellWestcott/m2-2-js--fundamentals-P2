// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  // str is a string

//forEach element in the string to check to see if it === B, if yes, 
//count it somehow? 

  const indvLetters = str.split("");

  let bCount = 0;

  indvLetters.forEach(function (a) {
    if (a === "B") bCount += 1;
  });

  return bCount;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.

console.log(countBs("BabyBoomerByeBye"));

// This is needed for automated testing (more on that later)
module.exports = countBs;
