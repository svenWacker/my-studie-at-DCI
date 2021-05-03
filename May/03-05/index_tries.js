let Js = "JavaScript";
let lastThree = Js.substring(Js.length - 3);
let newJsStr = lastThree + Js + lastThree;
console.log(newJsStr);

var globalVar = "This is global";
console.log(globalVar);
globalVar = "This is global plus";

function sub(x, y) {
  let local = "This is local";
  console.log(local);
  console.log(globalVar);
  globalVar = "This is global plus ++";
  return x - y;
}
console.log(sub(10, 4));
let modJsStr = Js.substring(1) + Js[0];
console.log(modJsStr);

let foxStr = "the quick brown fox";
let foxUpper = foxStr[0].toUpperCase() + foxStr.substring(1);
console.log(foxUpper);

let int1 = "122";
let int2 = "1.5";
console.log(int1 + " " + int2);
// isNaN
isNaN(int1) ? console.log("Yeah it's not a number") : console.log("Nope sorry");

let numb = 22;
let numX = numb % 2;
console.log(numX);
console.log(numX == 0 ? `${numb} is even` : `${numb} is odd`);

console.log(Math.max(2, 33, 434, 643, 123211, -212));

let isDog = "dog";
console.log(isDog ? "pat, pat" : "find me a dog to pat!");

let str = "20.4";
let strIntoNum = parseInt(str, 10); // always use pls
// 0,1,2,3,4,5,6,7,8,9 ->10
// 0,1 ->2
// 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F ->16
console.log("parseInt", strIntoNum);

function roundUp(num) {
  let result = Math.ceil(num);
  console.log(result);
}
roundUp(3321.32321);
roundUp(326.76);
roundUp(43.342);
// 4
// Round down
function roundDown(num) {
  let result = Math.floor(num);
  console.log(result);
}
roundDown(3321.32321);
roundDown(326.76);
roundDown(43.342);

let bool1, bool2, boo3;
bool1 = true;
bool2 = false;
console.log(bool1 && bool2 ? "cool" : "not cool");
console.log(bool1 || bool2 ? "cool" : "not cool");

const chrArr = ["a", "b", "c"];
// index
for (let i = 0; i < chrArr.length; i++) {
  //             a.toUpperCase() => A
  console.log(chrArr[i].toUpperCase());
}

const names = ["hadi", "nancy"];
// names[0][0]
let str2 = "";
for (let i = 0; i < names.length; i++) {
  //             a.toUpperCase() => A
  str2 = "";
  str2 = names[i][0].toUpperCase() + names[i].substring(1);
  console.log(str2);
}
// console.log(names[0]);

//console.log(1 == 11 ? "cool" : "nooooo");
let isSmart = false;
if (isSmart) {
  console.log("coool");
} else {
  console.log("nooooo");
}
let count = 0;
if (22 * 3 == 299 + 3) {
  count++;

  console.log("You are nice");
} else {
  count--;
  // \' \"  ignore
  // \n new line
  console.log("No that's \n this is new line");
}
for (let i = 1; i <= 10; i++) {
  // 1 * 1 = 1
  for (let j = 1; j <= 10; j++) {
    //  console.log(i + "*" + j + "=" + i*j);
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("--- new table");
  // something else
}
text = "";
for (let i = 0; i <= 10; ) {
  text += i + " ";
  i += 2;
}
console.log(text);

// countOccurrences("this is a string", "i") ➞ 3
const countOccurrences = (str, chr) => {
  let strIntoArr = str.split("");
  console.log(strIntoArr);
  let count = 0;
  for (let i = 0; i < strIntoArr.length; i++) {
    // i == i
    if (strIntoArr[i] == chr) {
      count++; // 2
    }
  }
  return count;
};

console.log(countOccurrences("this is a string", "i"));

const countOccurrences1 = (str3, letter) => str3.split(letter).length - 1;

console.log(countOccurrences1("this is a string with three i's", "i")); // 5
console.log(countOccurrences1("this is a string with three i's!!!", "o")); // 0

const names2 = ["Zain", "Nancy", "Olga"];
// .indexOf()
// Find the index of an item
console.log(names2.indexOf("Nancy"));
let pos = names2.indexOf("Nancy");
// console.log(typeof pos);
let n = 0;
// // .splice()
// // remove an item by the index number
let removedItemFromIndex = names2.splice(1, 1);
console.log(names2);
console.log(removedItemFromIndex);

const smileys = ["😎", "🤓", "🥳"];
let otherArr = smileys.slice(1, 3); // 2
console.log(smileys);
console.log(otherArr);

const findGreatest = (arr, num) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }
  return result.join(", ");
};

console.log(findGreatest([3, 4, 12, 44], 3));

let originalArray = [
  "JavaScript",
  "will",
  "turn",
  "your",
  "dreams",
  "into",
  "Reality",
];
let shallowCopyOg = originalArray.slice(-1); //

console.log(shallowCopyOg);
console.log(originalArray);

// Dictionary.
//  Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:
// dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞ [“button”]
// dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞ [“triplet”, “tries”, trip”]
// dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞ []

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
console.log(dictionary("bo", ["cool", "Bool", "nool", "doOOol"]));
console.log(dictionary("bolll", ["cool", "nool", "doOOol"]));
// other way to do it :)
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

console.log(dictionary2("bo", ["cool", "Bool", "nool", "doOOol"])); // [ 'bool' ]
console.log(dictionary2("bo", ["ooBol", "nool", "doOOol"])); // empty array

const findVowels = (str) => {
  let counter = 0;
  let vowelArr = ["a", "e", "o", "i", "u"];
  let newStr = str.toLowerCase();
  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < vowelArr.length; j++) {
      if (newStr[i].includes(vowelArr[j])) {
        counter++;
      }
    }
  }
  return counter;
};
console.log(findVowels("Hi this is nice party, will be"));

const namesArr = ["Zain", "Olga", "Nancy"];
const cities = ["Berlin", "Paris"];
const newArr = namesArr.map((name, i) => {
  if (name == "Nancy") {
    console.log("I don't Like you");
  }
  console.log(`The name ${name} has index ${i}`);
});
const arr1 = [2, 2, 2, 3, 3, 44, 55, 44, 55];
const cleanUp = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(cleanUp(arr1));

const arr3 = ["Hi", "I", "You"];
const cloneArr = [101, ...arr3, "super nice"];
cloneArr[0] = "cool";
console.log(cloneArr);
console.log(arr3);

const sum = (x, y) => x + y;
console.log(sum(2, 4));
const printFunThingsToDo = (userName, age, ...arr) => {
  console.log(arr);
  console.log(`Hi ${userName} I am ${age}, you like ${arr}`);
};
printFunThingsToDo(
  "Hadi",
  31,
  "Coding",
  "Cooking",
  "Do fun things",
  "Cool draws"
);

const twoFor = (who = "you") => `Two for me and one for ${who}`;
console.log(twoFor("Zain"));
console.log(twoFor());

const car = {
  brandName: "Audi",
  modelYear: "2021",
  priseWithVAT: 20,
  colors: ["red", "black", "white"],
};

function deepCopy(obj) {
  // check if it's array
  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }
  // check it it's object
  if (typeof obj == "object") {
    return (
      Object.keys(obj)
        //                    userName: deepCopy("Hadi")
        .map((key) => {
          console.log(deepCopy(obj[key]));
          return { [key]: deepCopy(obj[key]) };
        }) // [{},{},{},{}]
        .reduce((acc, cur) => Object.assign(acc, cur), {})
    );
  }
  // return the obj and if was no object or no array return the argument itself
  return obj;
}
const brandNewCloned = deepCopy([{ name: "Hadi" }, { name: "Zain" }]);
console.log(brandNewCloned);
const deepCopyObj = deepCopy(car);
console.log(deepCopyObj);
//brandNewCloned.colors[2] = "Pink";
console.log(car);
const newObj = Object.assign({}, car);
newObj.brandName = "Bugatti";
console.log(car);

let first = { firstName: "John", lastName: "Vooo" };
let last = { lastName: "Smith" };
// Expected output:
// {firstName: "John", lastName: "Smith"}
const makeItIntoOne = (obj1, obj2) => {
  return Object.assign(obj1, obj2);
};
console.log(makeItIntoOne(first, last));

const twoArrFromAnObj = (obj) => {
  const keysArr = Object.keys(obj);
  const ValArr = Object.values(obj);
  return [keysArr, ValArr];
};

console.log(twoArrFromAnObj({ a: 1, b: 2, c: 3 }));

// TV app
class Tv {
  constructor(_brand, _channel = 1, _volume = 10) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  incVolume() {
    // increase the volume
    if (this.volume < 100) {
      this.volume++;
      console.log(this.volume);
    } else {
      console.log("This is too much");
    }
  }
  decVolume() {
    // decrease the volume
    if (this.volume > 0) {
      this.volume--;
      console.log(this.volume);
    } else {
      console.log("NO sound");
    }
  }
  rest() {
    // volume and channel
    this.channel = 1;
    this.volume = 10;
  }
  randomChannel() {
    // max 50
    this.channel = Math.floor(Math.random() * 50) + 1;
    console.log(`you are watching channel ${this.channel}`);
  }
  display() {
    return `This Tv ${this.brand}, had ${this.channel} channels and the volume is on ${this.volume}`;
  }
}

const samsung = new Tv("SAMSUNG");
console.log(samsung);

samsung.incVolume();
samsung.decVolume();

const apple = new Tv("Apple", 30, 100);
console.log(apple);
