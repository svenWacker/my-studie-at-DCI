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
//
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext
//
let text2 = document.getElementById("divA").textContent;
// The text variable is now: 'This is some text!'
document.getElementById("divA").textContent = "This text is different!";
// The HTML for divA is now:
// <div id="divA">This text is different!</div>
//
//
//
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
// Different types of notes
document.nodeType === Node.DOCUMENT_NODE; // true
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true

document.createDocumentFragment().nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true

var p = document.createElement("p");
p.textContent = "Once upon a time…";

p.nodeType === Node.ELEMENT_NODE; // true
p.firstChild.nodeType === Node.TEXT_NODE; // true

// Comments
var node = document.documentElement.firstChild;
if (node.nodeType !== Node.COMMENT_NODE) {
  console.warn("You should comment your code!");
} else console.log(node);
