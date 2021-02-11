console.log(`---2021-01-26---`);

// parameters: Naming and order
const userPrint = (name, add, age) => {
  console.log(`Hi ${name}\nYour address: ${add}\nYour age: ${age}`);
};
userPrint("Sven", "Eisenberg", 45);

// default value
const halloUser = (userName = "Zain") => {
  console.log(`Hi ${userName}`);
};
halloUser();
halloUser("Sven");

// Spread syntax ...
// ...array
const arr = ["Hi", "I", "You"];
const cloneArr = ["cool", ...arr[2][1], "super cool"];
cloneArr[0] = "first";
console.log(cloneArr);
console.log(arr);
// ...args
//const sum = (r, s, t, u, v, w, x, y, z) => r + s + t + u + v + w + x + y + z;
const sum = (x, y) => x + y;
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
const printFunThingsTodo = (userName, ...args) => {
  console.log(args);
  console.log(`Hi ${userName}, you like ${args}`);
};
printFunThingsTodo("Sven", "coding", "cooking", "cycling");

// const multiSum = (...nums) =>
//   nums.map(function (x) {+= x});
// console.log(multiSum(1, 2, 3, 4, 5));

// cool functions
(function printMyName(x, y) {
  console.log(`Hi I am a cool function ${x + y}`);
})(2, 3);

const books = ["one Day", "one more thing", "Done by me"];
// .map
// Converting an array to a different array: `Array.prototype.map(<function>)`
//const printBook = books.map((item, index) => `${index}. title ${item}`);
const printLabel = (item, index) => `${index}. title ${item}`;
const printBook = books.map(printLabel);
console.log(printBook);
//console.log(books);
const numbs = ["1", "2", "3"];
const nums = numbs.map((item) => parseInt(item));
console.log(nums);

// .reduce
// Getting a in single output value
const reducer = (acc, cur) => acc + cur;
const resultArr = [2, 3, 1, 3].reduce(reducer); // .reduce(reducer, startingValue)
console.log(resultArr);

// .filter
// - Getting an array with items that aline with your condition: `Array.prototype.filter(<function>)`
const names = ["Sven", "Maria", "Niklas", "Sila"];
const filArr = names.filter((name) => name.length > 4);
console.log(filArr);

// .find
// - Getting a the first item that aline with your condition : `Array.prototype.filter(<function>)`
const coolNumbers = [1, 2, 11, 3, 4, 5, 6, 7];
const biggerThanFive = coolNumbers.find((num) => num > 3);
console.log(biggerThanFive);

//  Maybe more 😏
// sumNumbers
// Write a function which accepts any amount of numbers
// and return the sum of their addition
const sumNumbers = (...args) => {
  return args.reduce((acc, cur) => acc + cur);
  //   return args.reduce((acc, cur) => {
  //     return acc + cur;
  //   });
};
console.log(sumNumbers(1)); // ---> 1
console.log(sumNumbers(1, 15)); // ---> 16
console.log(sumNumbers(25, 25, 20)); // ---> 70

// toCamelCase

const toCamelCase = (str) => {
  // cool_fun_stuff ->coolFunStuff
  let strToArr = str.toLowerCase().split("_");
  let result = strToArr.map((item, i) =>
    i < 1 ? item : item[0].toUpperCase() + item.slice(1)
  );
  return result.join("");
};
console.log(toCamelCase("cool_fun_stuff"));
// hackerSpeak
// const hackerSpeak = (str) => {
//   let strToArr = str.split();
//   let result = strToArr.map((item, i) => {
//     i == "a"
//       ? item
//       : (item[i] =
//           "4" || i == "i"
//             ? item
//             : (item[i] =
//                 "1" || i == "o"
//                   ? item
//                   : (item[i] =
//                       "0" || i == "e"
//                         ? item
//                         : (item[i] =
//                             "3" || i == "s" ? item : (item[i] = "5")))));
//   });
//   return result.join();
// };
// console.log(hackerSpeak("javascript is cool"));
// console.log(hackerSpeak("programming is fun"));
// console.log(hackerSpeak("become a coder"));
// console.log();

const hackerSpeak2 = (statement) => {
  const leet = { a: 4, b: 3, i: 1, o: 0, s: 5 };
  const speak = (letter) =>
    leet.hasOwnProperty(letter) ? leet[letter] : letter;

  return statement.split("").map(speak).join("");
};
console.log(hackerSpeak2("javascript is cool"));

// odds and even
