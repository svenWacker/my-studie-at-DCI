// old life with no objects

let firstName = "Sven";
let lastName = "Wacker";
let userAge = 45;
console.log(`${firstName}\n${lastName}\n${userAge}`);

// Objects
// const <namespace> = {<key 1>: <value 1>, <key 2>: <value 2>, ... }
const obj = {
  name1: "Sven",
  name2: "Niklas",
  name3: "Maria",
};
console.log(obj);
const userObj = {
  name: "Sven",
  lastName: "Wacker",
  age: 45,
  add: "Kerzenheim",
  act: ["draw", "music", "code"],
  fat: false,
};
console.log(userObj.name);
console.log(typeof userObj);
console.log(typeof userObj.name);
// Accesssing properties
// 1-with (dot notation)
console.log(userObj.act[2]);
// 2-with (bracket notation)
console.log(userObj["act"][0]);
// filling up objects
const obj2 = {}; // new empty object
console.log(typeof obj2); // object
//
obj2.name = "Sven"; // for reading
//
obj2["age"] = 45; // for filling up - better coding
//
console.log(obj2);
// declaring a class Object
const save = new Object();
console.log(save);
// similar declaring a class Array
const arr = new Array();
console.log(arr);

// cool for 😎
for (let prop in userObj) {
  console.log(`userobj.${prop} : ${userObj[prop]}`);
}

// Tell me more about you
const person = {
  userName: "Sven",
  lastName: "Wacker",
  age: 45,
  birthYear: 1975,
  gender: "Male",
  height: 173,
  print: function () {
    console.log(
      //`I am ${person.userName}, my age is ${person.age}, because I was born in ${person.birthYear}.`
      `I am ${this.userName}, my age is ${this.age}, because I was born in ${this.birthYear}.`
    );
  },
  old: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  },
};
person.print();
console.log(person.old());

// Object.keys
console.log(Object.keys(person));

// Object.values
console.log(Object.values(person));

// Object.assign
const obj3 = { kids: 4, cars: 100 };
const obj4 = { colors: ["blue", "green", "grey"], pet: "fish" };
const totalObjects = Object.assign({ name: "Sven" }, obj3, obj4);
console.log(totalObjects);

//Object.defineProperty()
const newPersonObject = {};
Object.defineProperty(newPersonObject, "bike", {
  value: 22,
  writable: false, //true,
});
console.log(newPersonObject.bike);
newPersonObject.bike = 35;
console.log(newPersonObject.bike);
//Object.defineProperties()
Object.defineProperties(newPersonObject, {
  p1: {
    value: "cool",
    writable: false,
  },
  p2: {
    value: 22,
    writable: false,
  },
  p3: {
    value: 22,
    writable: false,
  },
});
console.log(newPersonObject.p1);

const person2 = {
  name: "Sven",
  age: 45,
  city: "Kerzenheim",
};
for (let prop in person2) {
  console.log(`${prop} : ${person2[prop]}`);
}
console.log();

const objPro = (obj) => {
  return Object.keys(obj);
};
console.log(objPro(person2));
console.log(objPro(person));

const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: 48,
  print: function () {
    console.log(
      `I am ${this.firstName} ${this.lastName}, is in class ${this.class}.`
    );
  },
};
student.print();
console.log();

const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};
const objVal = (obj) => {
  return Object.values(obj);
};

console.log(objVal(getObjectValues));

let student2 = {
  name: "Mike",
  class: "4A",
  course: "English",
};
const objStudent = (obj) => {
  //return Object.keys(obj);
  return Object.values(obj);
};
console.log(objStudent(student2));

const objectToArray = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};
function getKeysAndValues(obj) {
  return Object.entries(obj);
}
console.log(getKeysAndValues(objectToArray));

// delete
delete objectToArray.cats;
console.log(objectToArray);
