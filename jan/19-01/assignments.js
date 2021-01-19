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
