// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";

console.log(`Hello my first name is ${firstName} and my last name is ${lastName}`);
console.log("First name:", firstName, "Last name:", lastName)

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif



// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2025";
const increment = 1;

// const newYear = parseInt(year) + increment

// Et ekstra plus foran year parser det også
// men er ikke super tydeligt for folk der ikke har god kendskab til JavaScript.
const newYearVersionThree = + year + increment;
console.log(newYearVersionThree);

console.log(Number(year) + increment);

console.log(parseInt("234324abc2"));
console.log(Number("234324abc2"));
// Add the year plus the increment
// The result should be 2026
// You cannot touch the first or the second line


// --------------------------------------
