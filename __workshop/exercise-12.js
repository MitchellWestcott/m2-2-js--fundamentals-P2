// Exercise 12
//
// Write a function that accepts an array of grades (numerical values), calculates the average
// and returns the appropriate letter grade. (see below)
//
// Here is how I calculate the grades
// less than 60 is an F
// less than 70 is an D
// less than 80 is an C
// less than 90 is an B
// less than or equal to 100 is an A
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function getLetterGrade(grades) {
  // grades is an array of numbers
  // let avCalc = grades.reduce(function (a, b) {
  //   return (a + b);
  // });
  // let averages = Math.round(avCalc / grades.length);

  // let finalGrade = "A";

  // if averages < 60 {
  //     let finalGrade = "F"
  //   } else if averages < 70 {
  //     let finalGrade = "D"
  //   } else if averages < 80 {
  //     let finalGrade = "C"
  //   } else if averages < 90 {
  //     let finalGrade = "B"
  //   } else if averages <= 100 {
  //     let finalGrade = "a"
  //   };

  // return finalGrade;

  let avCalc = grades.reduce(function (a, b) {
    return a +b;
  });

  let avRound = Math.round(avCalc / grades.length);

  let finalGrade = "A";

  if (avRound < 90) finalGrade = "B";
  if (avRound < 80) finalGrade = "C";
  if (avRound < 70) finalGrade = "D";
  if (avRound < 60) finalGrade = "F";


  return finalGrade;
};

// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Create more test cases.

console.log(getLetterGrade([77, 1, 99, 100, 4]));
console.log(getLetterGrade([50,50,50,90,100, 94]));

// This is needed for automated testing (more on that later)
module.exports = getLetterGrade;
