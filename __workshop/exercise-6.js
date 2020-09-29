// Exercise 6
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that accepts a list of numbers and returns a new list with
// all of the even numbers removed.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function removeEvens(list) {
  // list is an array of numbers
  // let newArray = [];
  // for (let i = 0; i <list.length; i++) {
  //   if (array[i] % 2 !== 0) {
  //     array.push(item[i])
  //   }
  //   return newArray;
  // }
  return newArray = list.filter(function (a) {
    return !(a % 2 === 0);
  });

}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Call the function to test your code.
console.log(removeEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Create more test examples.

console.log(removeEvents([3, 5, 4, 99, 98, 59, 2, 6]));
console.log(removeEvents([2, 4, 6, 8, 9]));

// This is needed for automated testing (more on that later)
module.exports = removeEvens;
