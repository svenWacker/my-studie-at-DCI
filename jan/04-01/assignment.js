
// first assignment 2021-01-04

// 1. Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
let longStr = "I can walk in the park all day!";
let partOfStr = longStr.substring(18, 22);
console.log(partOfStr);

//  2. Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
let oString ="Hello World";
let uString = oString.toUpperCase();
console.log(uString);
//console.log(oString.toLowerCase());
//console.log(oString.toUpperCase());

// 3. Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.
let species ="Earthlings";
let uSpecies = species.toLowerCase();
console.log(uSpecies);

//  4. Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.
let language ="JavaScript";
let partOfLanguage = language.substring(3, 6);
console.log(partOfLanguage);

//  5. Check if the sentence “nice shoes” contains the letter l.
let sentence = "nice shoes";
let partOfSentence = sentence.includes("I");
console.log(partOfSentence);

//  6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.
//let newString = language.substring(0, 1).toUpperCase() + language + language.substring(0, 1).toUpperCase();
let newString = language[0]+ language + language[0];
console.log(newString);