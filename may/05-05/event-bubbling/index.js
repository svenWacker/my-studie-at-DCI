// Event Bubbling

const list = document.querySelector(".container ul");
list.addEventListener("click", function (e) {
  //   console.log(e.target.className);
  if (e.target.className == "delete") {
    let li = e.target.parentElement;
    console.log(li);
    list.removeChild(li);
  }
  if (e.target.className == "Hadi") {
    console.log("You are");
  }
});

const hide = document.querySelector("#hide");
hide.addEventListener("change", () => {
  if (hide.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
});

// farther more about that
// event.stopPropagation();
//https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
// also don't forget this cool thing
// classList
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#examples
