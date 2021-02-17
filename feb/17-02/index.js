// 20210217
// 3 types of errors (compilation aka compiler fails to compile, runtime, logic)
// try catch will find the runtime errors but not the parse errors like typo or syntax problems

// most of the error are coming from other places like working with data
// `try { ... } catch (e) { ... }`

// try --> to test a block of code
// catch --> to handel the error
// throw --> to create a custom errors
// finally --> to execute a code after try regardless of the result

// logic error
let userAge = 25;
if (userAge == 24) {
  console.log("Cool, you are the best");
}
let userName = "";
try {
  let userAdd = "Berlin";
  // cool();
  // if (userName == "") throw "Sorry, I need a userName";
  if (userAge > 21) throw "Sorry, you are not a kid anymore";
  console.log("I am try");
} catch (err) {
  console.log("There was an error: " + err);
} finally {
  console.log("I will run anyway");
}
console.log("Hi");

function printData() {
  console.log("I am wining");
}

// const timerDisplay = setTimeout(printData, 3000);
const timerDisplay = setTimeout(() => console.log("I am wining"), 3000);

// We will learn after HTML
//
// callbacks
// Promise
// async/await
// RxJs
// and a lot more 😎
