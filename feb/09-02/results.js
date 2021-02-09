// Add answers here

// Conditional Algorithms
// 1. Los or New?
// Create a function named "nameOfCity".
// If a string begins with "Los" or "New", then print the full string.
// If not, print "The city name does not begin with Los or New".
// Be careful of case sensitivity.

function nameOfCity(cityName) {
  const firstThreeChr = cityName.substring(0, 3).toLowerCase();
  if (firstThreeChr == "new" || firstThreeChr == "los") {
    return cityName;
  } else {
    return `The city name does not begin with Los or New`;
  }
}
console.log(nameOfCity("Los Angelos"));
console.log(nameOfCity("new York"));
console.log(nameOfCity("Berlin"));

// 2. isDivisible?
// Create a function named "isDivisible".
// The function should take an integer as an argument.
// If the integer is divisible by 100, then return true.
// If not, return false. Examples: 1 ➞ false, 1000 ➞ true, 100 ➞ true.

// function isDivisible(num1) {
//   return num1 % 100 ? false : true;
// }
const isDivisible = (num) => num % 100 == 0;
console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));

// 4. What's the weather?
// Use a ternary operator to complete this task.
// Create a function named "isRaining".
// If true, print "wet day - you need an umbrella".
// If false, print "dry day - leave your umbrella at home".

// function isRaining(bool) {
//   return bool == true
const isRaining = (bool) =>
  bool
    ? `wet day - you need an umbrella`
    : `dry day - leave your umbrella at home`;
// }
console.log(isRaining(true));
console.log(isRaining(false));

// 1. Sequence
// Create a function named "geometricalSequence" and use a loop to print the following sequence:
// 1 2 4 8 16 32 64 128 256. Concatenate each value to a string and return a string.

// function geometricalSequence(count) {
//   let result = [];
//   for (let i = 1; i < count; i++) {
//     result += i * 2;
//     return result;
//   }
// }
// console.log(geometricalSequence(5));

const geometricalSequence = () => {
  let str = "";
  for (let i = 1; i <= 256; ) {
    // if (i == 1) {
    //   str += i;
    //   i += i;
    //   continue;
    // }
    str += `${i} `;
    i += i;
  }
  return str.trim();
};
console.log(geometricalSequence());
// 2. Multiples
// Create a function named "multiplesOfThree" and use a loop to print the first five multiples of three: 3 6 9 12 15.
// Concatenate each value to a string and return a string.
// Math
// function multiplesOIfThree(count1) {
//   let result = [];
//   for (let i = 1; i < count1; i++) {
//     result += i * 3;
//     return result;
//   }
//   return result.join(", ");
// }

function multiplesOfThree() {
  let str = "";
  for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0) {
      str += `${i} `;
    }
  }
  return str.trim();
}
console.log(multiplesOfThree());

// 1. You've got the power
// Create a function named "powerOf" which takes an integer as an argument and returns the integer to the power of itself.
// You should use a Math Object to make the calculation.
// Examples:
//   powerOf(3) //27
//   powerOf(4) //256

const powerOf = (num3) => {
  let square = Math.pow(num3, num3);
  return square;
  // return Math.pow(num3, num3);
};
console.log(powerOf(3)); //27
console.log(powerOf(4)); //256

// Problem Solving

// 1. How many?
// Create a function named "vowelCount" that accepts a string as an argument.
// Check how many vowels the string contains, if any. Return the vowel count of the string.
// Examples:

// vowelCount("hello"); // 2
// vowelCount("test"); // 1
// vowelCount("fbw"); // 0

// const vowelCount = (str) => {
//   let counter = 0;
//   let vowelArr = ["a", "e", "o", "i", "u"];
//   for (i = 0; i < str.length; i++) {
//     for (j = 0; j < vowelArr.length; j++) {
//       if (str[i].includes(vowelArr[j])) {
//         counter++;
//       }
//     }
//   }
//   return counter;
// };

function vowelCount(string) {
  const vo = "aeiou";
  const str = string.toLowerCase();
  let counter = 0;
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < vo.length; j++) {
      if (str[i] == vo[j]) {
        counter++;
      }
    }
  }
  return counter;
}
console.log(vowelCount("hello"));
console.log(vowelCount("test"));
console.log(vowelCount("fbw"));

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
