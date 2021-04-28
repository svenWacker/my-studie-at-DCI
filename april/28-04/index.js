// Traversing
//  Node vs Element Nodes

const ele = document.querySelector("#second").previousElementSibling;
console.log(ele);
const ele2 = document.querySelector("body").previousSibling;
console.log(ele2);
// firstChild
const mainText = document.querySelector("#text").firstElementChild;
console.log(mainText.textContent);

// textContent gets the content of all elements, including <script> and <style> elements. In contrast.
// innerText only shows “human-readable” elements.
// more on that
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText

// nodeType list, 1: div, p. 8: comment
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

// more on parentNode
//https://developer.mozilla.org/en-US/docs/Web/API/ParentNode
// nodeName, nodeType, id, innerText
// closest
let text = document.querySelector("span");
let closetEle = text.closest(".cool");
console.log(closetEle);

// matches
let names = document.querySelectorAll("li");
names.forEach((name) => {
  console.log(name); // shows all li
  if (name.matches(".teacher"))
    // grabbing the class="teacher"
    console.log(`${name.textContent} is a teacher for FBW 48-1`); // output with grabbing the text content
});
// querySelector
const allChildren = document.querySelector("body").children; // "ul" gives you all children
console.log(allChildren);

let menuList = document.getElementById("menu");
console.log(menuList.firstElementChild);
console.log(menuList.lastElementChild);

//
