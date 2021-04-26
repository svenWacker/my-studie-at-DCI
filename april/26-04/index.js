const create = () => {
  // 1. step
  const newElement = document.createElement("div");

  const newText = document.createTextNode("I am a new element 😉");

  // 2. step
  // div                  // text
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};

const addToList = () => {
  let userData = document.querySelector("#userData").value;
  //   console.log(userData);
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
  } else {
    document.querySelector("#userData").placeholder = "Please Enter text first";
  }
};

// document.write("Hi I am text");
//document.write("<h1> Hi h1>");
