// callbacks
function first(cb) {
  const funFunction = () => "Noooo"; // function isn't called
  return cb;
}
function cb() {
  return "fun";
}

console.log(first(cb()));

// map
const names = ["Zain", "Olga", "Nancy"];
// const heyNames = names.map((item, index) => `Hi ${item}, you live in ${index}`);
const heyNames = names.map((name) => `Hi ${name}`);
console.log(heyNames);

// reduce

// filter

// find

// for in

// for of
