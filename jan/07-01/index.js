// 2021.01.07
// morning session

let x, y, z;
console.log(x);
x =4 ;
y = 5;
z = x + y;
console.log(Math.max(3, 5, 2, x, y, 100));
console.log(Math.min(x, y, z));

let str = "100.9";
let strIntoNum = parseInt(str,10); // always use pls
console.log("parseInt", strIntoNum);

// never use
let strIntoNum1 = +str;
console.log("+str", strIntoNum1);
// we don't use
let strIntoNum2 = str * 1;
console.log(" * 1", strIntoNum2);

let strIntoFloat = parseFloat(str);
console.log("parseFloat", strIntoFloat);

// multible math
console.log(((x + y) / (z + 2.44)) * 29 + x);
//
// number + string
let d, f, r;
d = "S";
f =33;
console.log(d + f);
// number + boolean
r = true; // true = 1, false = 0
console.log(f + r); // 33 + 1 =34; 33 + 0 = 33
// string + string
let str1 = "Hi";
let str2 = " I am Sven";
console.log(str1 + str2);
// ++ 
let a = 1;
console.log(a++);
console.log(a);
// --
let q = 3;
console.log(q--);
console.log(q);

// type of
console.log(typeof str1);
console.log(typeof x);
console.log(typeof console);
console.log(typeof console.log);
console.log(typeof Math.ceil);
// 3.444444444444
//(0.1 * 0.2)
console.log(0.1 * 0.2);
let floatNum1 = 0.1;
let floatNum2 = 0.2;
let result = floatNum1 * floatNum2;
console.log(result);
// toFixed()
let num = 4;
console.log(result.toFixed(3));
console.log(result.toFixed(num));

// tutoring payment
console.log(165 / (4 * 4));

// Math.random
// 0 -100 -> 0 - 99
//
// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10)+1);
// console.log(Math.floor(Math.random() * 49)+1);

// ==
// ! == 1 -> true
// 1 != 44 -> true
console.log(1 == 1);
console.log(1 != 10);
console.log(1 == 1 && 10 == 10);
// Logic gates
// and &&
// or ||
console.log(1 == 1 || ( 1 == 1 && 10 == 10));

let bool1, bool2, bool3;
bool1 = true;
bool2 = false;
console.log(bool1 && bool2 ? "cool" : "not cool");
console.log(bool1 || bool2 ? "cool" : "not cool");

// === ==
let numInStr = "10";
let numb = 10;
console.log(numInStr == numb ? "cool" : "not cool"); // comparing value
console.log(numInStr === numb ? "cool" : "not cool"); // comparing value and form
// 1 = true;
// 0 = false;
// "" = false;
// "something" = true;
// true = true;
// false = false;

// Create a program that prints a random integer from 1 - 6.
console.log(Math.floor(Math.random() * 6)+1);


  console.log();
  console.log("PI");
  console.log(Math.PI);
  console.log("Radius in mm");
  let radius = 5;

  console.log(radius);
  
  function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  console.log("Circumference in mm:");
  console.log(calculateCircumference(radius));
  console.log(calculateCircumference(radius).toFixed(2));

  function calculateSurface(radius) {
    //return Math.PI * radius*radius;
    return Math.PI * Math.pow(radius, 2);
  }
  console.log("Surface in mm²:");
  console.log(calculateSurface(radius));
  console.log(calculateSurface(radius).toFixed(2));
console.log(Math.pow(2, 31));

