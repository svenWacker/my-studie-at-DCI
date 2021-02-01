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
