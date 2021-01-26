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
const exponent = (x, y = 2) => Math.pow(x, y);
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
