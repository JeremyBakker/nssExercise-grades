// ***Instructions***

// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

//Declare the necessary variables
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var f = 0;

// Order values in the array
scores.sort();

// Loop through the array and determine how many of each grade
for (var i = 0; i < scores.length; i++) {
      if (scores[i] > 90 && scores[i] < 101)
        a = a + 1;
      else if (scores[i] > 80 && scores[i] < 91)
        b = b + 1;
      else if (scores[i] > 70 && scores[i] < 81)
        c = c + 1;
      else if (scores[i] > 60 && scores[i] < 71)
        d = d + 1;
      else
        f = f + 1;
}

// Log the number of each grade
console.log("There are " + a + " As.");
console.log("There are " + b + " Bs.");
console.log("There are " + c + " Cs.");
console.log("There are " + d + " Ds.");
console.log("There are " + f + " Fs.");

// Log the lowest grade
console.log("The lowest grade is " + scores[0] + ".");

// Log the highest grade
console.log("The highest grade is " + scores[scores.length - 1] + ".");

