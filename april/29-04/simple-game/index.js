// What is Q key code? so here all the keys code you need to know
// https://keycode.info/
let hStandPoint = 0;
let vStandPoint = 0;
function goUp() {
  vStandPoint -= 10;
  mini.style.top = vStandPoint + "px";
}
function goDown() {
  vStandPoint += 10;
  mini.style.top = vStandPoint + "px";
}
function goRight() {
  hStandPoint += 10;
  mini.style.left = hStandPoint + "px";
}
function goLeft() {
  hStandPoint -= 10;
  mini.style.left = hStandPoint + "px";
}
function move(e) {
  console.log(e);
  if (e.code == "KeyW") goUp();
  if (e.code == "KeyA") goLeft();
  if (e.code == "KeyD") goRight();
  if (e.code == "KeyS") goDown();
  console.log(hStandPoint);
  console.log(vStandPoint);
  if (
    window.innerHeight / 4 <= vStandPoint &&
    window.innerWidth - 70 <= hStandPoint
  )
    alert("YOU WIN");
}
const mini = document.querySelector(".mini");
const body = document.querySelector("body");
body.addEventListener("keypress", move);
