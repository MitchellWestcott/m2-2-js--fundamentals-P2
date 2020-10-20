// Exercise 16
//
// Write a JavaScript program that returns an array of ALL the numbers
// between two provided values, num1 and num2, that meet the following criteria.
//
// The sum of the cube of the digits of a number is equal to the number.
//
// e.g.
// 371 --> 3^3 + 7^3 + 1^3 = 371.

// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function findNumbers(num1, num2) {
  // num1 and num2 are Numbers

//make a variable that is the numbers between num1 and num2, use math.cube to cycle through

let newArray = [];

  for (let i = num1; i < num2; i++) {
    let newArray = i.toString().split("");
    // let mathTime = newArray.toString().split("");
    let theNums = 0;

    

    newArray.forEach(function (theNums) {

    })
  return Math.pow(newArray, newArray);
  }

  //let mathTime = newArray.toString().split("");
  // //return  console.log(typeof newArray);
  
  // return Math.pow(mathTime, mathTime);

}
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findNumbers(0, 1000));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = findNumbers;
