// Exercise 13
//
// Write a function that takes accepts a string and a letter as arguments
// and returns the number of times that the letter appears in the string
//
// Example countChar("the amazing spiderman", "a") returns 3.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countChar(str, char) {
  // str and char are both strings

  let xCount = 0;

  let letterTest= str.split("");

  letterTest.forEach(function (a) {
    if (a === char) xCount += 1;
  });

  return xCount;

}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(countChar("BananaBabyBubbles", "a"));

// Create more test cases.

console.log(countChar("asdfasdfasdfasdfsss", "s"));
console.log(countChar("fffsss", "f"));

// This is needed for automated testing (more on that later)
module.exports = countChar;
