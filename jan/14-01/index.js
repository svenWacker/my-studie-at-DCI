// OVERVIEW

// let, const, var
let x = 10;
const personalId = 232425; //hoisting
var mainAdd = "Kerzenheim";
console.log(mainAdd);

// strings
//         0123456789
let str = "This is a long string.";
// bracket notations
console.log(str[10]);
// escaping spatial characters (\n, \', \)
let strWithChr = "Hi    \nI am  \nSven";
console.log(strWithChr);

// numbers
let y = 5;
console.log(x + y);
console.log(x * y);
let something = x * y + 12;
console.log(something);
let float = 22.5;

// typeof
console.log(typeof float);
console.log(typeof something);
console.log(typeof console);
console.log(typeof let);

// booleans
let bool = true;
console.log(bool);
let check = 12 < 20;
console.log(1 == 10);
let str1 = "Hello ";
let str2 = "World";
console.log("check =", check);
console.log(str1 + str2);

// conditions (===, !==, >=, <=, >, <)
console.log(!bool); // bool = true;
let bool2 = false;
console.log(1 !== 1);
let che = 1 < 12;
console.log(che); // true
// =, ==, ===
let age1 = 7;
let age2 = "7";
console.log("value check ==", age1 == age2);
console.log("value and type check ===", age1 === age2);

// ternary operator
console.log(true ? "I like" : "I don't like");
console.log(false ? "I like" : "I don't like");
console.log(1 < 2 ? "Yes" : "No");
console.log(age1 == age2 ? "Yes" : "No");
console.log(age1 === age2 ? "Yes" : "No");
console.log();

// JS methods from Math(.max, .min, .floor, .ceil, .random, )
console.log(Math.max(1, 2, 455, 6675, -3, -1));
console.log(Math.min(1, 2, 455, 6675, -3, -1));
let num1 = 33.5;
console.log(Math.floor(num1)); // 33
console.log(Math.ceil(num1)); // 34
// dice
console.log(Math.random());
console.log(Math.floor(Math.random() * 6) + 1);

// JS methods for str (.trim, .length, .includes, .split, .toUpperCase, .toLowerCase)
let str3 = "Hello my name is Sven";
let randomNum = Math.floor(Math.random() * str3.length);
console.log(str3[randomNum]);
firstName = "Sven     ";
lastName = "   Wacker  ";
console.log(firstName.length);
console.log(firstName.trim().length);
console.log(firstName.trim().toUpperCase());
// console.log(firstName.trim().toUpperCase().length); // makes not really sence
console.log(lastName.trim().toLowerCase());

let str4 = "Do we have an o inside?";
console.log(str4.includes("o"));
let str5 = "Hello World.My Name is Sven.Bye";
let strToArr = str5.split(".");
console.log(strToArr);

// if
// || or, && and
if (1 < 100) {
  console.log("Cool");
  console.log("🍏");
} else {
  console.log("Not cool");
}

// functions
function funName(num1, num2) {
  // arguments
  let sumNumbers = num1 + num2;
  return sumNumbers;
}
console.log(funName(1, 2)); //parameters
console.log(funName(3, 6));
// [square brackets] {curly brackets} (parenthesis)

// Es6 function
const functionName = () => {
  // console.log("I am an Es6 function");
  return "I am an Es6 function";
}; // ; as a professional after Es6 function
// functionName();
console.log(functionName());

// array
//              0       1         2          3        4
const names = ["Sven", "Niklas", "Kristin", "Maria", "Sila"];
console.log(names[1]);
let arrPlace = 1;
console.log(names[arrPlace]);
arrPlace++;
console.log(names[arrPlace]);

const numArr = [22, 52, 6544, 455, 67, 7853];
console.log(numArr[numArr.length - 1]);
// for loop
