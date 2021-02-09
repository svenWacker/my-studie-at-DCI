// Objects
const obj1 = {};
obj1["name"] = "Olga";
console.log(obj1);

const obj2 = {
  userName: "Sven",
};
console.log(obj2);

const obj3 = new Object();
const person = {
  userName: "Sven",
  age: 45,
  add: "Eisenberg",
};
const arr = Object.entries(person);
console.log(arr);

// [[],[],[],[]]
const arrOfArr = [
  [33, 2],
  [22, 3],
  [44, 11],
  [51, 55],
];
console.log(arrOfArr[2][1]);

const objects = [
  { firstName: "Sven", lastName: "Wacker" },
  {
    firstName: "Maria",
    lastName: "Dardis",
    printOut: function () {
      console.log("Hi");
    },
  },
];
objects[1].printOut();

objects[1]["printOut"]();

// integers, string, bool
let x = 3;
let z = x;
console.log(x);
z = 10;
console.log(z);
// clone coz NO Reference

// Objects
const car = {
  name: "Ford",
  year: "2020",
  color: "silver",
};
const newCar = car; // ref
newCar.name = "BMW";
console.log(car);

// shallowCopy 1
const names = ["Olga", "Zain", "Jack", "Nancy"];
const namesClone = [...names];
namesClone[0] = "Sven";
console.log(names);
console.log(namesClone);

// shallowCopy 2
const newCloneArr = [].concat(names);
console.log(newCloneArr);

// shallowCopy 3
const lastWay = names.slice(0);
lastWay[0] = "Cool";
console.log(lastWay);

const objectToArray = {
  A: 1,
  B: 2,
  C: 3,
};
//   [["A", 1], ["B", 2], ["C", 3]]

function getKeysAndValues(obj) {
  return Object.entries(obj);
}
console.log(getKeysAndValues(objectToArray));

const objectToArray2 = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};
function getKeysAndValues(obj) {
  return Object.entries(obj);
}
console.log(getKeysAndValues(objectToArray2));

let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};
//   Expected output:
//   ["name", "class", "course"]

const objStudent = (obj) => {
  return Object.keys(obj);
};
console.log(objStudent(student));

//   Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
//   Example

let first = { firstName: "John" };
let last = { lastName: "Smith" };

//   Expected output:
//   {firstName: "John", lastName: "Smith"}
// var fullName = { ...first, ...last };
// console.log(fullName);
const fullName = Object.assign({}, first, last);
console.log(fullName);
