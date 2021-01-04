
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
let firstString = language[0];
console.log(firstString + language + firstString);
console.log(newString);


// 7. Create a new string from a given string, 
//taking the last 3 characters of the string and add them to both the front and back of the new string. 
//The string length must be 3 or more.
//// eg. of output: javascript => iptJavaScriptipt
let createString = language.substring(7, 10) + language + language.substring(7, 10);
console.log(createString);
let lastThree = language.substring(language.length - 3);
let newStr1 =lastThree + language + lastThree;
console.log(newStr1);

// 8. Create a variable and assign a string value to it. 
// Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.

let assignString = language.toUpperCase();
console.log(assignString);
let partOfAssign = assignString.includes("Java");
console.log(partOfAssign);
console.log(12 ==12 ? "cool" : "Not cool");


//9. Create a new string from a given string by changing the position of first and last characters. 
//The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
//let modlanguage = language.substring(1) + language[0];
//console.log(modlanguage);

let Js = language;
console.log(Js);
let firstJsChr = Js[0];
//JavaScript
let lastJsChr = Js.substring(Js.length -1);
let midJsStr = Js.substring(1, Js.length-1);
//let shortJsStr = Js.substring(1, Js.length -1);
let newLongJsStr = lastJsChr + midJsStr + firstJsChr;
console.log(newLongJsStr);


//10. Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. 
//Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”.
let firstGName = "Maria";
let shopName = "Casa Verde";
let job= "Manager";
console.log(
    `Hi I am Sven, my girlfriend is ${firstGName}, she is the owner of the ${shopName}, where I am the ${job}
    `);

//11. Declare a variable and assign the value “the quick brown fox” (all in lower case). 
//Capitalize the first letter of that string. Print the result to the console.

let foxStr = "the quick brown fox";
let foxUpper = foxStr[0].toUpperCase() + foxStr.substring(1);
console.log(foxUpper);

