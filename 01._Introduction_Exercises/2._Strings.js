// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const numberOneParsed = Number(numberOne);
const numberTwoParsed = Number(numberTwo);


console.log(numberOneParsed + numberTwoParsed);

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherNumberOneParsed = parseFloat(anotherNumberOne);
const anotherNumberTwoParsed = parseFloat(anotherNumberTwo);

const anotherNumberSum = anotherNumberOneParsed + anotherNumberTwoParsed;

console.log(anotherNumberSum.toFixed(2));
// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const sumExerciseFive = one + two + three;
const AvgSumExerciseFive = sumExerciseFive / 3;

console.log (AvgSumExerciseFive.toFixed(5));



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const position = letters.indexOf("c");

console.log(position)


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript


const newFact = fact.replace("javascript", "Javascript")
console.log(newFact)
// --------------------------------------



