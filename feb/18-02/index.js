// Data Structure

//Objects
const profileData = {
  name: "Steel",
  surname: "Von",
  age: 13,
  city: "Paris",
};

// Convert Object -> Array
const convertObjectToArray = (obj) => Object.entries(obj);

const myObj = {
  1: 10,
  2: 20,
  3: 30,
};

console.log(convertObjectToArray(myObj));

// Convert Array Data
const convertArrayData = (arr) => {
  arr.pop();
  let reversed = arr.reverse();
  reversed.push("milk");
  return reversed;
};

const drinks = ["coffee", "tea", "juice"];
console.log(convertArrayData(drinks));

// Nested Arrays
const createGrid = (size, char) => {
  //   let grid = [];
  //   for (let i = 0; i < size; i++) {
  //     grid.push([]);
  //     for (let j = 0; j < size; j++) {
  //       grid[i].push(char);
  //     }
  //   }
  //   return grid;
  const newArr = new Array(size).fill(new Array(size).fill(char));
  return newArr;
};
console.log(createGrid(3, "*"));

// Word Converter
const wordConverter = (arr, suffix) => arr.map((word) => (word += suffix));

let adjectives = ["smart", "kind", "sweet", "small", "clear"];
console.log(wordConverter(adjectives, "er"));

//Hour Tracking

const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];

const calculateHours = (hours) => {
  return hours.reduce((total, hours) => total + (hours.end - hours.start), 0);
  // return hours.reduce((acc, cur) => acc + (cur.end - cur.start), 0);
};

console.log(calculateHours(hourTracking));

// Classes
class Course {
  constructor(_teacher, _type, _number) {
    this.teacher = _teacher;
    this.type = _type;
    this.number = _number;
  }
  spaceNeeded() {
    let result = this.number * 2;
    return `The classroom should be ${result}m².`;
  }
  details() {
    return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`;
  }
}

let course = new Course("Hadi", "web development", 21);
console.log(course.spaceNeeded());
console.log(course.details());

// Problem Solving

function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(capitalizeFirstLetter("hey there"));

// Validate Pin
function validPin(pinCode) {
  const number = Number(pinCode);
  //checks if pin is not a number
  if (isNaN(number)) {
    return false;
  }

  const pinSplit = pinCode.split("");
  const lengthOfPin = 4;
  //checks pin length
  if (pinSplit.length !== lengthOfPin) {
    return false;
  }
  //checks if last value is odd or even
  if (parseInt(pinCode[lengthOfPin - 1]) % 2 !== 0) {
    return false;
  }
  let result = 0;
  let checkIdenticalNumbers = [];
  for (let i = 0; i < pinSplit.length; i++) {
    result += parseInt(pinSplit[i]);
    if (pinSplit[0] !== pinSplit[i]) {
      checkIdenticalNumbers.push(pinSplit[i]);
    }
  }
  //checks if all numbers are identical
  if (checkIdenticalNumbers.length === 0) {
    return false;
  }
  //checks if total value of pin is less than 5
  if (result < 5) {
    return false;
  }
  return true;
}
console.log(validPin("1100"));
console.log(validPin("1230"));
