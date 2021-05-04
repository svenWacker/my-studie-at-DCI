// Your Awesome questions 😎
// ++
let w = 10;
console.log(w++);
console.log(w);

console.log(++w);

// Math.random
console.log(Math.floor(Math.random() * 6) + 1);

// parseInt
let strIntoNum = parseInt("ff", 16);
console.log(strIntoNum);

// toFixed
let floatNum = 33.14673444576;
let shortNum = floatNum.toFixed(3);
//  spread operator
// in arrays
let arr1 = [23, 3, 44];
let biggerArr = [234, ...arr1];
// in function arguments
function human(name, age, ...hobbies) {
  console.log(
    `Hey ${name}, I hope you are enjoying your ${age}. you like very nice hobbies ${hobbies}`
  );
}

// Constructor function.
function Car(manufacture, model, hoursPower, prise) {
  this.manufacture = manufacture;
  this.model = model;
  this.hoursPower = hoursPower;
  this.prise = prise;
}
const myCar = new Car("bugatti", "Chiron", "1,479 hp", "$3 million");
// window.matchMedia("(max-width: XXXpx)")
/* const media = window.matchMedia("(max-width: 400px)");
console.log(media);
if (media.matches) {
  // mobile
  console.log("You are using mobile");
} else {
  // bigger screen
  console.log("You are using big screen");
}
*/
// - Classes in javascript
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  printData() {
    return `Hey ${this.name}, you are too old ${this.age}`;
  }
}
const me = new Person("Hadi", 31);
console.log(me.printData());
// closure
function init() {
  let secretWord = "You are cool"; // secretWord is a local variable created by init function
  function innerFunction() {
    // innerFunction() is a closure
    console.log(secretWord); // use variable declared in the parent function
  }
  return innerFunction();
}
init();
// SIAF
// self-invoking anonymous function
(function (x) {
  console.log("Hi");
})(33);
(() => {
  console.log("Hi");
})();
// IIFE
// Immediately-invoked Function Expression
const sum = ((x, y) => {
  return x + y;
})(3, 4);

console.log(sum);
// more practice about them
// https://github.com/Fbw-48/live-coding/blob/main/feb/01-02/index.js

// loops
const images = ["😎", "🤓", "🙄"];
const likes = [22, 344, 666];
for (let i = 0; i < images.length; i++) {
  console.log(`
____________
| this img ${images[i]}
| got ${likes[i]}
l____________
`);
}

// Array advanced methods (filter, find)
const numArr = [5, 12, 8, 130, 44];

const theOne = numArr.find((element) => element > 10);

console.log(theOne);

const names = ["Hadi", "Olga", "Sara", "Nancy", "ZainAnd"];

const resultArr = names.filter((name) => name.length > 5);

console.log(resultArr);

// $ as a selector
// https://dev.to/mrahmadawais/use-instead-of-document-queryselector-all-in-javascript-without-jquery-3ef1

// Promises
// Not there yet but very soon 😉

// charAt
const str1 = "Hadi";
console.log(str1.charAt(2));
// seal
const obj = {
  prop: 42,
};

Object.seal(obj);
obj.property1 = 33;
console.log(obj.prop);

delete obj.prop; // will not delete
console.log(obj.prop);

// assignment explain
function countLetters(str) {
  let arr = str.split("");
  let result = {};
  function countOccurrences(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === letter) {
        counter++;
      }
    }
    return counter;
  }
  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i];
    result[currentChar] = countOccurrences(str, currentChar);
  }
  return result;
}
countLetters("tree");
// apply
/*
let allComments = (element) => {
  let arr = [];
  element.childNodes.forEach((node) => {
    node.nodeType == 8
      ? arr.push(node)
      : arr.push.apply(arr, allComments(node));
  });
  return arr;
};
console.log(allComments(document));
*/
// Assignment not clear
/*
let result = 0;
let checkIdenticalNumbers = [];
for (let i = 0; i < pinSplit.length; i++) {
  result += parseInt(pinSplit[i]);
  if (pinSplit[0] !== pinSplit[i]) {
    checkIdenticalNumbers.push(pinSplit[i]);
  }
}
*/

// Assignment not clear
const factorial = (num) => {
  //console.log(num);
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
console.log(factorial(7));

// Assignment not clear
const geometricalSequence = () => {
  let str = "";
  for (let i = 1; i <= 256; ) {
    // if (i == 1) {
    // str += i;
    // i += i;
    // continue;
    // }
    str += `${i} `;
    i += i;
    // i+= i -> i + i
  }
  return str.trim();
};
console.log(geometricalSequence());

// if you explain why we need continue and trim here ?

// Recursion
// const factorial = (num) => {
//   //console.log(num);
//   if (num == 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// };
// console.log(factorial(7));

//
function createMatrix(num, str) {
  return Array(num)
    .fill()
    .map(() => Array(num).fill(str));
}
console.log(createMatrix(9, "*"));

// Great README example
// https://github.com/othneildrew/Best-README-Template

// splice
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

// splice(start, deleteCount, item1, item2, itemN)
// If deleteCount is omitted, or if its value is equal to or larger than array.length - start (that is, if it is equal to or greater than the number of elements left in the array, starting at start), then all the elements from start to the end of the array will be deleted.

// If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

// fill
// const newArr = new Array(size).fill(new Array(size).fill(char));

// return newArr;
// all array methods in one place
// https://github.com/Fbw-48/live-coding/blob/main/feb/08-02/index.js
// Objects
// https://github.com/Fbw-48/live-coding/blob/main/feb/11-02/index.js

// prototypes in javascript
// The prototype is an object that is associated with every functions and objects by default in JavaScript, which helps a lot when Inheriting functions or features from parent to child

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// What are the legal issues to consider when creating a web page?
// here are very nice article about legalisation but they aware every country has a different role and this is not a topic that you want to do it yourself. Please when you have this kind of product to put online find a lawyer to help you out.
// https://www.motocms.com/blog/en/website-legal-requirements/
// https://www.hallaminternet.com/internet-marketing-and-the-law-legal-issues-affecting-you-and-your-website/

// mobile events
/* 
touchstart
touchmove
touchend
click 
*/

// - get & set

// sorry

// GitHub SSH key
// https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh

// Git 101
// https://github.com/Fbw-48/lessons/blob/main/GIT-README.md

// creating elements in DOM

/* // 1. step
 const newElement = document.createElement("div");
 const newText = document.createTextNode("I am a new element 😉");
 // 2. step
 // div                  // text
 newElement.appendChild(newText);
 document.body.appendChild(newElement); */
