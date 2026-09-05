getRadnomInt(5, 10);

function getRadnomInt(min, max) {
  Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomIntAnonymousFunction = function (min, max) {
  Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomIntArrowFunction = (min, max) => {
  Math.floor(Math.random() * (max - min + 1) + min);
};

//1. opgave

///                            String, function
function genericActionPerformer(name, action) {
  return action(name);
}

function playingGuitar(name) {
  return `${name} is playing guitar`;
}

console.log(genericActionPerformer("Elias", playingGuitar));

//2. opgave

const watchingMovieAction = (name) => {
  return `${name} is watching a movie`;
};

console.log(watchingMovieAction("Elias"));

//3. opgave

console.log(genericActionPerformer("Jacob"), (name) => `${name} likes sailing`);
