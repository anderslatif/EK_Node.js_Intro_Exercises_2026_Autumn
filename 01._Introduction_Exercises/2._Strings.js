// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

let result = Number(numberOne) + Number(numberTwo);
console.log(result) // OUTPUT => 3.4


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

result = (Number(anotherNumberOne) + Number(anotherNumberTwo)).toFixed(2)
console.log(result) //OUTPUT => 3.40

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
const average = ((one + two + three)/3).toFixed(5)
console.log(average) //OUTPUT => 51.00000



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const character = letters[2];
console.log(character) //OUTPUT => c




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const newString = fact.replace('javascript', 'Javascript');
console.log(newString); //OUTPUT => You are learning Javascript!



// --------------------------------------



