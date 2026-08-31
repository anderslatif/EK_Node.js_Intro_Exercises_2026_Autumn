// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const greetings = { message: "Hello, earthling! I bring peace." };

// Log the message 

console.log(greetings.message);

// --------------------------------------
// Exercise 2 - Defining an object.

// Create an object that has your name and age. 

const person = { name: "Morten", age: 28};

// --------------------------------------
// Exercise 3 - Add a key-value pair

const stackOverflow = { moderators: 20};


// make a rule called isAllowed and let the value be true

const isAllowed = stackOverflow.moderators>10;

console.log(isAllowed);


// --------------------------------------
// Exercise 4 - Remove a property

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

thisSong.about = "Just a tribute";

console.log(thisSong)

delete thisSong.description;  

console.log(thisSong);

// --------------------------------------


