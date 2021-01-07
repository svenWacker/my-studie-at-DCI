console.log(x);
var x;
//x = 100;
//x = null;
//x = true;
//X = undefined;
x = "Hello World";
console.log(x);
console.log(typeof x);
sum(3, 4);
sum(3900, 334);

function sum(x, y){
    var z = x + y;
    console.log(z);
    return x + y;
}
let bool = 1;
bool ? console.log("cool") : console.log("Not cool");

// bracket notation [0]
let str = "Sven";
console.log(str[0]);
console.log(str[str.length - 1]);

// .trim()
let longStr = "     Hi I am Sven    ";
console.log(longStr.trim());

function display(str) {
    console.log(str);
}
display("Zain");

// Numbers
let y = 3;
let w = 44;
// + - * /
console.log(y % w);
// (123) (23.4)
let int1 = "144";
//let int1 = "Sven";
let int2 = 1.5;
let int3 = "1.5";
console.log(int1 + " " + int2);
// isNaN
isNaN(int1)? console.log("Yeah it's not a number") : console.log("A number");
isNaN(int2)? console.log("Yeah it's not a number") : console.log("A number");
let intSum1 = int1 + int2;
console.log(intSum1);
let newNum = parseInt(int1, 10);
console.log(newNum);
let intSum2 = newNum + int2;
console.log(intSum2);
console.log(int3);
let newFloat = parseFloat(int3);
console.log(newFloat);

//1. Create two variables.
// One variable should contain a string value and
//the other should contain a number. Concatenate the string and the number.

let int4 = "5";
let int5 = 6;
console.log(int4 + int5);
console.log(parseFloat(int4) + int5);

//2. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
//33, 40, 2,1,22
let numb = 33;
let numX = numb % 2;
console.log(numX);
console.log(numX == 0 ? `${numb} is even` : `${numb} is odd`);

function oddOrEven(num) {
    return num % 2 ==0 ? "even" : "odd";
}
console.log(oddOrEven(40));
console.log(oddOrEven(2));
console.log(oddOrEven(1));
console.log(oddOrEven(22));

int4%2 == 0 ? console.log("even") : console.log("odd");
int5%2 == 0 ? console.log("even") : console.log("odd");

// *+ - /
let a = 3;
let b = 2;
let sum1 = a + b;
let div = a / b;
let mul = a * b;
let sub = a - b;
console.log(sum1, div, mul, sub);

// ++ --
++a;
b--;
//**
let power = 2 ** 2;
console.log(power);
// Math.floor()
// 3,33
let float1 = 1.6;
let realInt = Math.floor(float1);
console.log(realInt);
// Math.ceil()
let realInt2 = Math.ceil(float1);
console.log(realInt2);
// Math max()
console.log(Math.max(2, 33, 434, 643, 12311, -232));
// Math min()
console.log(Math.min(2, 33, 434, 643, 12311, -232));

// Create a variable with the value of “123”. Convert it to a number.
let test1 ="123";
let test2 = parseInt(test1);
console.log(test1);
console.log(test2);

// Create a variablewith the value of “130.7". Convert it to a number.
let test3 ="130.7";
let test4 = parseFloat(test3);
console.log(test3);
console.log(test4);
// Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
let isDog = false;
console.log(isDog? "past, pat" : "find me a dog to pat!");

function roughScale(x, base) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0; }
    return parsed * 100;
  }
  
  console.log(roughScale(' 0xF', 16));
  // expected output: 1500
  
  console.log(roughScale('321', 2));
  // expected output: 0

