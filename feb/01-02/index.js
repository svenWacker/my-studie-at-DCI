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
