// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const firstNumber = parseFloat(numberOne);
const secondNumber = parseFloat(numberTwo);

const total = firstNumber + secondNumber;

console.log(total);
// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const thirdNumber = parseFloat(anotherNumberOne);
const fourthNumber = parseFloat(anotherNumberTwo);

const anotherTotal = thirdNumber + fourthNumber;

const formattedSum = anotherTotal.toFixed(2);

console.log(formattedSum);
// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const averageTotal = (one + two + three) / 3;
const formattedAverage = averageTotal.toFixed(5);

console.log(formattedAverage);
// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const lastChar = letters.charAt(2);

console.log(lastChar);
// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log(fact.replace("javascript", "Javascript"));
// --------------------------------------
