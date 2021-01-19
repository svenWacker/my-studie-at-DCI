console.log("---assigments-2021-01.19---");
// Repeat it.
// Create a program with two variables: “item” and “times”.
//Create a program that repeats the “item” as many times as specified by “times”.
// The first variable (“item”) is the item that needs repeating while the second argument (“times”) is the number of times the item is to be repeated. Print the result in an array. Examples:
// (“example”, 3) ➞ [“example”, “example”, “example”]

const repeat = (item, times) => {
  let result = [];
  for (i = 0; i < times; i++) {
    result.push(item);
  }
  return result;
};
console.log(repeat("Sven", 5));

// The Greater Numbers.
// Create a function which accepts two arguments:
// the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
// i.e.
// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10

const findGreatest = (arrNum, num) => {
  let result = [];
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > num) {
      result.push(arrNum[i]);
    }
  }
  return result.join(", ");
};
console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

// const xyz = (x, y, z) => {
//     let result;     // = [];
//     for ...
//     return result;
// }

// AEIOU:
// Vowels. Create a function that takes a string in its parameters
// and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4

const findVowels = (strArr) => {
  let vowelsCount = 0;
  let vowelsList = `aeiouAEIOU`;
  let str = strArr.toString();
  //loop through the string
  for (let i = 0; i <= str.length - 1; i++) {
    //if a vowel, add to vowel count
    if (vowelsList.indexOf(str[i]) !== -1) {
      //   ()
      //   str.charAt(i) == "a" ||
      //   str.charAt(i) == "e" ||
      //   str.charAt(i) == "i" ||
      //   str.charAt(i) == "o" ||
      //   str.charAt(i) == "u"
      // )
      vowelsCount += 1;
    }
  }
  return console.log(`NO of vowels: ${vowelsCount}`);
};
findVowels("this is a string");
findVowels("Hi my name is Sven");

// A set is a collection of unique items.
// A set can be formed from an array by removing all duplicate items.
// Create a program which transforms an array into a set of unique values.
// See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

// print remDub array
// console.log(remDub(1, 4, 4, 7, 7, 7);
// [1, 6, 6, 9, 9];
// [2, 2, 2, 2, 2, 2];
// [5, 10, 15, 20, 25];
const array = [1, 6, 6, 9, 9];
// [5, 10, 15, 20, 25];

const resultArr = array.filter((data, index) => {
  return array.indexOf(data) === index;
});
// console.log(resultArr(1, 6, 6, 9, 9));
console.log(resultArr);

// Dictionary. (take your time on this pls )
// also as tip you can use .includes()
// Create a function that takes an initial string and an array of words,
// and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:

const dictionary = (str, arr) => {
  let result = [];
  let userInput = str.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i].toLowerCase();

    if (currentValue.includes(userInput)) {
      result.push(currentValue);
    }
  }
  return result;
};
console.log(dictionary("bu", ["button", "breakfast", "border"])); // ➞ [“button”]
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])); // ➞ [“triplet”, “tries”, trip”]
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"])); // ➞ []

const dictionary2 = (str, arr) => {
  let result = [];
  let userInput = str.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i].toLowerCase();
    let shortStr = currentValue.substring(0, userInput.length);
    if (shortStr == userInput) {
      result.push(currentValue);
    }
  }
  return result;
};
console.log(dictionary2("bu", ["button", "breakfast", "border"])); // ➞ [“button”]
console.log(dictionary2("tri", ["triplet", "tries", "trip", "piano", "tree"])); // ➞ [“triplet”, “tries”, trip”]
console.log(dictionary2("beau", ["pastry", "delicious", "name", "boring"])); // ➞ [
