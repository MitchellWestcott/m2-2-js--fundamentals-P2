// Exercise 1.6
//
// Write a function that accepts an array of strings and a string.
// It should return the array without the string.
//
// Example:
// removeStringFromArray(["I", "bacon", "you", "she"], "bacon") should return ["I", "you", "she"]
//
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function removeStringFromArray(array, string) {
  // complete the function
  // let newString = string.replace('');
  // return array;
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] !== string) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

//let newNames = string.split(' ');
//return newNames.slice(1, -1);

// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(removeStringFromArray(["I", "bacon", "you", "she"], "bacon"));

// Create more test examples.

console.log(
  removeStringFromArray(
    ["word", "another word", "more words", "alright now"],
    "bye"
  )
);

// This is needed for automated testing (more on that later)
module.exports = removeStringFromArray;
