const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;
let userNumber = 0;
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput");
const numberSystem = document.querySelector("#numberSystem");

function registerUserValue(e) {
  console.dir(e.target.value);
  userNumber = e.target.value;
}

function convert() {
  let base;
  console.log(number.value);
  switch (number.value) {
    case "binary":
      base = 2;
      break;
    case "hexadecimal":
      base = 16;
      break;
    default:
      base = 10;
  }
  result.innerHTML = `${parseInt(userNumber, base)}`;
}

number.addEventListener("change", convert);
userInput.addEventListener("keyup", registerUserValue);
