// Events:
// User Events (interaction) and Browser Events (loading, etc...)
document.addEventListener("load", console.log("Hi"));
// Listening:
// Higher order functions aka functions that accept function (callbacks)
const divText = document.querySelector(".text");
const print = () => {
  divText.innerHTML += "Hi I am onclick from HTML <br>";
};
const btn = document.getElementById("more");
console.dir(btn);
btn.onclick = () => {
  divText.innerHTML += "Hi I am onclick from Javascript <br>";
};
const reset = () => {
  header.style.backgroundColor = "white";
};

// - Listening to user actions
//   `EventTarget.addEventListener(<namespace>, <callback>)`
// - Mouse Events:
// `click`, `mouseenter`, `mouseleave`
const header = document.querySelector("h1");
header.addEventListener("mouseenter", () => {
  header.style.backgroundColor = "orange";
});
header.addEventListener("mouseleave", reset);

// - Keyboard Events:
// `keydown`, `keyup`
function keyUp(e) {
  console.log(e);
  this.style.backgroundColor = "orange";
  if (e.code == "KeyS") alert("You are cool");
}
function keyDown(e) {
  this.style.backgroundColor = "blue";
}
function keyPress(e) {
  this.style.backgroundColor = "yellow";
}

const userInput = document.querySelector("#userInput");
userInput.addEventListener("keyup", keyUp);
userInput.addEventListener("keydown", keyDown);
userInput.addEventListener("keypress", keyPress);
