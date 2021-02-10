const car = {
  brandName: "Ford",
  modelYear: 2021,
  priceWithVat: 40,
  colors: ["red", "black", "white"],
};

// Shallow copy for an object by using ...
const newCloneObj = { ...car };
// .assign() doesn't work? it works for cloning
// const newCloneObj = Object.assign(car);
console.log(newCloneObj);
newCloneObj.brandName = "BMW";
console.log(newCloneObj);
console.log(car);
newCloneObj.colors[0] = "orange";
console.log(car);
// Recursion
// factorial example
const factorial = (num) => {
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
// console.log(factorial(1));
// console.log(factorial(2));
console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
console.log(factorial(6));
// console.log(factorial(7));
// console.log(factorial(8));
console.log(factorial(9));
// console.log(factorial(10));
// console.log(factorial(11));
// console.log(factorial(12));

// Deep copy using recursion 🤭
function deepCopy(obj) {
  if (typeof obj == "object") {
    return Object.keys(obj)
      .map((key) => ({ [key]: deepCopy(obj[key]) }))
      .reduce((acc, cur) => Object.assign(acc, cur), {});
  } else if (typeof obj == "array") {
    return obj.map(deepCopy);
  }
  return obj;
}
const brandNewCloned = deepCopy(car);
console.log(brandNewCloned);

brandNewCloned.colors[2] = "silver";
console.log(car);
console.log(brandNewCloned);
