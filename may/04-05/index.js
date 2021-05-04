const result = document.querySelector(".result");
const form = document.querySelector("form");
const header = document.querySelector("h1");

// showMsg
function newUser() {
  result.innerHTML += "Hey, welcome again 😇";
}
function winDowLoad() {
  //alert("Hi");
  setInterval(newUser, 1000);
}
window.addEventListener("load", winDowLoad);
