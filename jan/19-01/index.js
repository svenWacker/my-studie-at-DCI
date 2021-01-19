console.log("---2021-01-19---");

const names = ["Zain", "Nancy", "Olga"];
// const smileys = ["😎", "🤓", "🥳"];
// .length
// to get the number of elements in an array
console.log(names.length);
// .length -1
// to access the last item
console.log(names[names.length - 1]);

let cityName = [];
// console.log(cityName);
console.log(cityName.length);
cityName[0] = "Paris";
cityName[1] = "Berlin";
cityName[2] = "Dubai";
console.log(cityName);
// .join()
// create a string from an array

// .split()
// divide a string into an array

// .push()
// add an item
cityName.push("Hi");
cityName.push("Hi");
cityName.push("cool");
console.log(cityName);
// .pop()
// remove an item
cityName.pop();
cityName.pop();
let removeItem = cityName.pop();

console.log(cityName);
console.log(removeItem);
// .unshift()
// add an item to the beginning
cityName.unshift("Eisenberg");
console.log(cityName);
// .shift()
// remove an item to the beginning
let removeEle = cityName.shift();
// cityName.shift();
console.log(cityName);
console.log(removeEle);
// .indexOf()
// Find the index of an item
// const names = ["Zain", "Nancy", "Olga"];
console.log(names.indexOf("Nancy"));
let pos = names.indexOf("Nancy");
let n = 0;
// .splice()
// remove an item by the index number
//                          remove from pos, n items
let removedItemFromIndex = names.splice(pos, n);
console.log(names);
console.log(removedItemFromIndex);
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
let str = "Hello World, my name is Sven.";
// .split()
// divide a string from an array
let newArr = str.split(" "); // " " e.g. for words counting
console.log(newArr);
console.log(newArr.length);
// .join()
// create a string from an array
let newStr = newArr.join(" ");
console.log(newStr);

// .concat()
// merge two (or more) arrays
let arr1 = [1, 123, 235];
let arr2 = [34, 263, 355];
let arr3 = arr1.concat(arr2, [1, 2]);
console.log(arr3);

const add = ["Maria", "Sven"];
let fakeCopy = add; // reference to the original array
console.log(fakeCopy);
fakeCopy.push("Niklas");
console.log(add);
fakeCopy.pop();
console.log(add);
// .slice()
// to make a shallow copy
let shallowCopy = add.slice();
console.log(shallowCopy);
shallowCopy.push("Sila");
console.log(shallowCopy);
console.log(add);
const num = [0, 1, 2, 3, 4, 5];
let shallowNum = num.slice(2, 4); //2
console.log(shallowNum);

const smileys = ["😎", "🤓", "🥳"];
let otherArr = smileys.slice(0, 2);
console.log(otherArr);

let originalArray = [
  "JavaScript",
  "will",
  "turn",
  "your",
  "dreams",
  "into",
  "reality",
];
let shallowCopyOg = originalArray.slice(3, 5);
console.log(originalArray);
console.log(shallowCopyOg);
