// Exercise 15
//
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.
//
// Hint: consider using .filter(), .indexOf() and .lastIndexOf()
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function filterNonUnique(arr) {
  // arr is an array of values of any type

  return arr.filter(function (a) {
    return arr.indexOf(a) === arr.lastIndexOf(a);
  });

}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(filterNonUnique([1, 2, 3, 3, 4, 5, 6, 7, 7, 8]));

// Create more test cases.

console.log(filterNonUnique([1, 1, 1, 1, 4]));
console.log(filterNonUnique([2,3,4,5,6,6,6]));

// This is needed for automated testing (more on that later)
module.exports = filterNonUnique;
