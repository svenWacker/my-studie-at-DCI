const car = {
  brandName: "Ford",
  modelYear: 2021,
  priceWithVat: 40,
  colors: ["red", "black", "white"],
};

// Shallow copy for an object by using ...
// const newCloneObj = { ...car };
// .assign() doesn't work? it works for cloning
const newCloneObj = Object.assign({}, car);
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
console.log(factorial(3));
console.log(factorial(6));
console.log(factorial(9));

// Deep copy using recursion 🤭
// use for free :)
function deepCopy(obj) {
  if (typeof obj == "object") {
    return Object.keys(obj)
      .map((key) => ({ [key]: deepCopy(obj[key]) })) // [{},{},{},{}]
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

// const arrayInObject = deepCopy(["Hello", "World"]);
const arrayInObject = deepCopy([{ name: "Sven" }, { name: "Maria" }]);
console.log(arrayInObject);

// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:

const scoreArr = [
  { tile: "N", score: 1 },
  { tile: "N", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
function scrabbleScore(arr) {
  return arr.reduce((acc, cur) => acc + cur.score, 0);
}
console.log(scrabbleScore(scoreArr));

let person = {
  name: "John",
  job: "teacher",
};
// Expected Output:
// {“John”: name, “teacher”: job}

// const objPerson = (obj) => {
//   return Object.entries(obj).reduce((res, cur) => {
//     return {
//       ...res,
//       ...cur,
//     };
//   }, {});
// };

const objPerson = (obj) => {
  var new_obj = {};
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      new_obj[obj[prop]] = prop;
    }
  }

  return new_obj;
};
console.log(objPerson(person));

// function objPerson(obj) {
//   Object.keys(obj).reduce(function (obj, key) {
//     obj[data[key]] = key;
//     return obj;
//   }, {});
// }
// console.log(objPerson(person));

// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [[“a”, “b”, “c”], [1, 2, 3]]
// {key: true} ➞ [[“key”], [true]]
