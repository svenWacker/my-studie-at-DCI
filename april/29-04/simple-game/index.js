// What is Q key code? so here all the keys code you need to know
// https://keycode.info/
let hStandPoint = 0;
let vStandPoint = 0;
function goUp() {
  hStandPoint += 10;
  mini.style.top = hStandPoint + "px";
}
function goDown() {
  hStandPoint -= 10;
  mini.style.top = hStandPoint + "px";
}
function goRight() {
  vStandPoint += 10;
  mini.style.left = vStandPoint + "px";
}
function goLeft() {
  vStandPoint -= 10;
  mini.style.left = vStandPoint + "px";
}
