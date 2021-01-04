
// first assignment 2021-01-04
// 1
let longStr = "I can walk in the park all day";
let partOfStr = longStr.substring(18, 22);
console.log(partOfStr);

// 2
let oString ="Hello World";
let uString = oString.toUpperCase();
console.log(uString);

// 3
let species ="Earthlings";
let uSpecies = species.toLowerCase();
console.log(uSpecies);

// 4 substring
let language ="JavaScript";
let partOfLanguage = language.substring(3, 6);
console.log(partOfLanguage);

// 5
let sentence = "nice shoes";
let partOfSentence = sentence.includes("I");
console.log(partOfSentence);

//6

let newString = language.substring(0, 1).toUpperCase() + language + language.substring(9, 10).toUpperCase();
console.log(newString);