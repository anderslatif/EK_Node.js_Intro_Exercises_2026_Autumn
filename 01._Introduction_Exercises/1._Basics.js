// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";


// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

const greeting = `My first name is ${firstName} and my last name is ${lastName}`;
console.log(greeting);


// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2025";
const increment = 1;

// Add the year plus the increment
// The result should be 2026
// You cannot touch the first or the second line

const yearResultVersionOne = parseInt(year) + increment;
const yearResultVersionTwo = Number(year) + increment;
const yearResultVersionThree = + year + increment;

console.log(yearResultVersionOne);
console.log(yearResultVersionTwo);
console.log(yearResultVersionThree);

// Hvis man skriver:
console.log(parseInt("1234abc5")); // Den parser 1234 stopper ved abc printer ikke 5, fordi det kommer efter string
console.log(Number("1234abc")); // Giver fejl, NaN (Not a Number)



// --------------------------------------
