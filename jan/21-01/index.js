console.log("---2021-01-21---");

const smileys = ["😎", "🤓", "🥳"];

function display(str) {
  console.log(str);
}
// Functions declarations as values:
// const functionName = function (parameters) { ... }
const sum = function (x, y) {
  return x + y;
};

// const functionName = (parameters) => { ... }
const print = (str) => {
  console.log(str);
};
sum(3, 4);

// Invoke the function
// function call before the function
// this style:
// login();
// function login() {
//   // some things
//   halloUser();
//   // more steps
// }
// function halloUser() {
//   return `Hi, welcome back.`;
// }

// Invoke the function in Es6 style
// function call (login) must be after the function.
const login = () => {
  // some things
  halloUser();
  // more steps
};
const halloUser = () => {
  return `Hi, welcome back.`;
};
login();
// call stack

// .map()
// for (let i=0;i>Array.length;i++)
const names = ["Zain", "Nancy", "Olga"];
const newArr = names.map((name, i) => {
  if (name == "Nancy") {
    console.log(`${name}, I don't like you`);
  } else {
    console.log(`this ${name} has index ${i}`);
  }
});

const cities = ["Eisenberg", "Berlin", "Weinheim"];
const newCity = cities.map((city, index) =>
  console.log(`${city} has index ${index}`)
);
// .reduce()
const numArr = [1, 2, 3, 4, 5, 6];
const reducer = numArr.reduce((acc, cur) => acc + cur, 1000);
console.log(reducer);

// break;
// Breaking out of a loop:
/*
T
TT
TTT
TTTT
*/
let TBox = "";
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 2; j++) {
    if (i == j) {
      break;
    } else {
      TBox += "T";
      console.log(TBox);
    }
  }
}

// continue;
// Skipping an iteration:
for (let i = 0; i <= 5; i++) {
  if (i == 4) {
    continue;
  } else {
    console.log(i);
  }
}

const arr1 = [2, 2, 2, 3, 3, 44, 55, 44, 55];
const cleanUp = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(cleanUp(arr1));
