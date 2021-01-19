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

const remDub = (numArr) => {
    let result =[];
    return numbers.indexOf(value) === index;
});

// print remDub array
console.log(remDub([1, 4, 4, 7, 7, 7]);
// [1, 6, 6, 9, 9];
// [2, 2, 2, 2, 2, 2];
// [5, 10, 15, 20, 25];
// array.filter((item, index) => {
//     console.log(
//       // a. Item
//       item,
//       // b. Index
//       index,
//       // c. indexOf
//       array.indexOf(item),
//       // d. Condition
//       array.indexOf(item) === index,
//     );
  
//     return array.indexOf(item) === index;
//   });