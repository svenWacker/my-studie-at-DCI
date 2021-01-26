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
// .map
// Converting an array to a different array: `Array.prototype.map(<function>)`

// .filter
// - Getting an array with items that aline with your condition: `Array.prototype.filter(<function>)`

// .find
// - Getting a the first item that aline with your condition : `Array.prototype.filter(<function>)`
//  Maybe more 😏
