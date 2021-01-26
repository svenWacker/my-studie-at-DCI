//Write a function that it returns
//“Two for me and one for you” when no arguments are passed
const twofer = (name = "you") => {
  console.log(`Two for me and one for ${name}`);
};
twofer("Fran");
twofer();

// Write a function  that it still calculates the power
// of a number even if the exp argument is not passed to it.
// The default exp should be set to 2.
const exponent = (num, exp = 2) => num ** exp;
//const exponent = (x, y = 2) => Math.pow(x, y);
console.log(exponent(3, 3)); // ---> 27
console.log(exponent(3)); // ---> 9

// Write a function that it returns the total amount of
// arguments passed to it.

const howManyArgs = (...args) => args.length;
console.log(howManyArgs()); // ---> 0
console.log(howManyArgs(1, false, "hello")); // ---> 3
console.log(howManyArgs("better")); // ---> 1

// Write a function which accepts any amount of numbers
// and return the sum of their addition
const sum = (...nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = +nums[i];
  }
  return result;
};
console.log(sum(1)); // ---> 1
console.log(sum(1, 15)); // ---> 16
console.log(sum(25, 25, 20)); // ---> 70

// Bonus: Write a function which accepts any amount of numbers
// and returns the average.
// e.g
const average = (...nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = +nums[i];
  }
  return result / nums.length;
};
console.log(average(0)); // ---> 0
console.log(average(1, 2)); // ---> 1.5
console.log(average(1, 3, 6, 10)); // ---> 5
console.log(average(12, 14, 16)); // ---> 14

// hackerSpeak
//console.log(hackerSpeak("javascript is cool"));
const hackerSpeak = (str) => {
  return str
    .toLowerCase()
    .split("")
    .map((chr) => {
      switch (chr) {
        case "a":
          return "4";
        case "o":
          return "0";
        case "e":
          return "4";
        case "s":
          return "4";
        case "i":
          return "4";
        default:
          return chr;
      }
    })
    .join("");
};
console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));
console.log();

const hackerSpeak2 = (statement) => {
  const leet = { a: 4, b: 3, i: 1, o: 0, s: 5 };
  const speak = (letter) =>
    leet.hasOwnProperty(letter) ? leet[letter] : letter;

  return statement.split("").map(speak).join("");
};
console.log(hackerSpeak2("javascript is cool"));

// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

//console.log(oddOrEven(3, 5, 2, 4));
const oddOrEven = (...args) => {
  return args.map((item) => (item % 2 == 0 ? ++item : --item));
};
console.log(oddOrEven(3, 5, 2, 4));
// how many chr in a str(not case sens)

// howManyStr(“I like pizza”,“p”) ->
const howManyStr = (str, chr) => {
  return str
    .toLowerCase()
    .split("")
    .filter((item) => item == chr).length;
};
console.log(howManyStr("I like pizza", "p"));
