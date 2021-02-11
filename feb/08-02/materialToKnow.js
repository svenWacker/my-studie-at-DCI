// From 14-01-2021

// let, const, var
let x = 10;
const personalId = 2525252; // ho
var mainAdd = "Berlin";
// strings
//         012345567910
let str = "This is a long.";
// bracket notions
console.log(str[10]);
// Escaping spatial characters (\n , \' , \" )
let strWithChr = "I'am   \n Hi";
console.log(strWithChr);
// numbers
let y = 5;
console.log(x + y); // 10 + 5 = 15
let something;
console.log(something);
let float; //
float = 22.5; //
// typeof
console.log(typeof float);
console.log(typeof something);
console.log(typeof console);

// booleans
let bool = true;
console.log("bool = ", bool);

let check = 12 < 20;
console.log(1 == 100);
let str1 = "Hi ";
let str2 = "I am Hadi";
console.log("check =", check);
console.log(str1 + str2);
// conditions (===, !==, >=, <=, >, <)
// =
// ==
// ==
console.log(!bool);
let bool2 = false;
console.log(1 !== 1);
let che = 1 < 12;
console.log(che);
let age = 12;
let age2 = "12";
console.log(" value check == ", age == age2); // true
console.log(" value and type check === ", age === age2); // false

// ternary Operator
console.log(true ? "I like apple 🍏" : "Hi cool I like pizza 🍕");
console.log(1868677 < 100 ? "yeahhh" : "Noooo");
let varStr1 = "😏";
let varStr2 = "🙄";
let resultStr = 1 < 55 ? varStr1 : varStr2;

console.log(resultStr);

// Js methods from Math(.max , .min  , .floor , .ceil ,random   )

console.log(Math.max(22, 3, 45, 555, -1)); // 6675
console.log(Math.min(1, 2, 455, 6675, 2, -1)); // -1
let num1 = 33.5;
console.log(Math.floor(num1)); //33
console.log(Math.ceil(num1)); //34
// -3 -2 -1 0 1 2 3

let str3 = "Hi";
let userName = "Hadi ";
let lastName = "Nsreeny     ";
console.log(str3.trim());
console.log(str3.length);
//                           floor (0.444 * 2)
let randomNum = Math.floor(Math.random() * str3.length);
console.log(str3[randomNum]); //
// Js methods for str (.trim , .length , .includes , .split , .toUpperCase , .toLowerCase)
userName = "Hadi    ";
lastName = "Nsreeny     ";
//                Nsreeny.toUpperCase()
let newLastName = lastName.trim().toUpperCase();
console.log(newLastName);
console.log(lastName);
console.log("Hi");
console.log(Math.floor(1.22) / Math.random());

let str4 = "Hi I like. I need a  🍣. I want to sleep. ";
console.log(str4.includes("ooooo"));
let strToArr = str4.split(".");
console.log(strToArr);
//console.log(userName.length);
// if
// || or, && and
if (1 == 122 || 1 == 1) {
  console.log("hi");
  x = 2 + 3;
  console.log("🍏");
} else {
  console.log("Not cool");
}

// if (con)
//{
//     // correct
// } else {
// not true
//}
console.log("Hiiii");
// functions
function funName(num1, num2) {
  // num1 = 3333; NEVER DO THAT IN YOUR LIFE 😭

  console.log(num1);
  let sumNumbers = 5555 + num1 * num2;
  return sumNumbers;
}
// [    ] {    }   ( ) <> ; : , . - _ / \ ! ? @ %  $
console.log(funName(44, 33));
// Es6 function
const functionName = () => {
  return `I am Es6 function 😉`;
};
console.log(functionName());
// array
//               0        1      2
const names = ["Zain", "Olga", "Nancy"];
console.log(names[1]);
let number1 = 1;
//
console.log(names[number1]); // console.log(names[1])
number1++; // 2
console.log(names[number1]);
const NumArr = [22, 33, 55, 6754, 2, 22, 4, 55, 677, 432, 2];
console.log(NumArr[NumArr.length - 1]);
// for loop
let bOne = 33;
let billOneTip = 1.1;
result = `bOne ${Math.floor(bOne * billOneTip)} `;
console.log(result);

const arr2 = [123, 3556, 245];
for (i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

let box;
for (i = 0; i < 5; i++) {
  box = "";
  for (j = 0; j < i; j++) {
    box += "*";
  }
  console.log(box);
}
let text = "Hi";
console.log(text);
text += "something";
console.log(text);
text = "";
console.log(text);
text = "c";
text += "o";
text += "o";
text += "l";
text += " ";
console.log(text.length);
text = "c";
text += "o";
text += "o";
text += "l";
console.log(text.length);
