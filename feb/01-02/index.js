// let, var, const local vs global
// global
// {
//     local
// }

// function inside functions
//
function main(num1, num2) {
  // outer function
  function second(n) {
    // inner function
    return n * n;
  }
  return second(num1) + second(num2);
}

console.log(main(2, 3));
console.log(main(3, 4));

// Nested copes: Accessing outer global variables

let nice = true;
const outerFunction = (x, y) => {
  let big = true;
  console.log(big + " outerFunction");
  const innerFunction = (num) => {
    big = false;
    nice = false;
    console.log(big + " innerFunction");
    return num + 10;
  };
  return innerFunction(x) + innerFunction(y);
};
console.log(outerFunction(3, 4));

// Closure
let number = 19;
function fun() {
  return number + number;
}
console.log(fun());
number = 1;
console.log(fun());

// self invoked function
// anonymous
// invoking == calling
// functions that return other function

const add = (() => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
})();
console.log(add());
console.log(add());
console.log(add());
// const add2 = (() => {})();

// SIAF
// self-invoking anonymous function
(function () {
  console.log(`Hi`);
})();

(() => {
  console.log(`Hi`);
})();

// IIAE
// immediately-invoking anonymous expression
const sum = ((x, y) => {
  return x + y;
})(2, 3);
console.log(sum);

// Write a function add that uses a closure that performs addition on arguments
// in two separate function calls
// add(2)(3)

const add2 = (a) => {
  return (b) => {
    return a + b;
  };
};
console.log(add2(2)(3));

// Write a function multiplier that uses a closure to perform multiplication.
// However, the outer function should be stored in a variable which is then called
function multiplier(num) {
  // outer function
  return (x) => x * num; //inner function
}
const times = multiplier(2)(5);
console.log(times);

(() => {})();
var all = 3;
(() => {
  let all = `hey`;
  console.log(all);
})();
console.log(all);

// Write a function that accepts several parameters and calculates the number of money
// that will have been saved as pension until a person retires.
// The function should be self invoked and should have the following parameters:

// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%

// If the person has already retired then the message ‘You’re already retired!’
// should be printed.

// If not, then the program should calculate how many years remain until the person retires,
// the monthly income and take a specific percent of this income every month as saved money.

// Example:
// A lady is 40 years old, she retires at 65,
// she earns $2000 per month and she saves the 5% of it.
// How much money will she have saved until she retires?
// Output: $30000

//const retireCalc =(currentAge, retireAge, monthWage, percent) => {
((currentAge, retireAge, monthWage, percent) => {
  if (currentAge >= retireAge) {
    console.log(`You’re already retired!`);
  } else {
    let yearsLeft = retireAge - currentAge;
    let monthLeft = yearsLeft * 12;
    let monthSave = (monthWage * percent) / 100;
    let totalSave = monthSave * monthLeft;
    console.log(
      `years to work: ${yearsLeft}, month to work: ${monthLeft}, your savings: ${totalSave}`
    );
  }
  // };
})(45, 60, 10000, 20);
(() => {})();
//retireCalc(45, 60, 10000, 20);

((currentAge, retireAge, monthlyWage, percent) => {
  if (currentAge >= retireAge) {
    console.log(`You’re already retired!`);
  } else {
    let yearsToSave = retireAge - currentAge;
    console.log(`years to work and save: ${yearsToSave}`);
    let monthsToSave = yearsToSave * 12;
    console.log(`Month to work: ${monthsToSave}`);
    let amountSavedByMonth = (monthlyWage * percent) / 100;
    let totalSave = amountSavedByMonth * monthsToSave;
    console.log(`Your savings: ${totalSave}`);
  }
})(45, 60, 10000, 10);
