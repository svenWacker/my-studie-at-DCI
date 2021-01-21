console.log("---2021-01-21---");

const names = ["Zain", "Nancy", "Olga"];
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

// break;
// Breaking out of a loop:

// continue;
// Skipping an iteration:

// .map()

// .reduce()
