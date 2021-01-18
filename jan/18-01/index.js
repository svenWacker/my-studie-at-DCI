/*

// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("----------------");
for (let j = 0; j < 5; ) {
  console.log(j);

  j += 2;
}
console.log("----------------");
for (let i = 1; i <= 5; i++) {
  console.log(`this is number ${i}`);
}

console.log("----------------");
for (let i = 0; i < 5; i++) {
  if (i <= 1) {
    console.log(`there is ${i} star in the sky`);
  } else {
    console.log(`there are ${i} stars in the sky`);
  }
}

console.log("----------------");
for (let i = 5; i > 0; i--) {
  console.log(`i is now ${i}`);
}

console.log("----------------");
for (let i = 1; i <= 10; i++) {
  console.log(`4 * ${i}\t = ${i * 4}`);
}

console.log("----------------");
for (let i = 1; i <= 10; i++) {
  console.log(`\nthis is table ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${j} * ${i}\t = ${i * j}`);
  }
}

console.log("----------------");
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

console.log("----------------");
for (let i = 0; i <= 4; i++) {
  console.log("*".repeat(i));
}
console.log("----------------");
let drawShape = "";
for (let i = 0; i <= 4; i++) {
  drawShape = "";
  for (let j = 0; j <= i; j++) {
    drawShape += "+";
  }
  console.log(drawShape);
  drawShape = "";
}

const names = ["Sven", "Maria", "Niklas", "Sila"];
const work = ["WebDev", "Flowerist", "Schoolboy", "Student"];
for (let i = 0; i < names.length; i++) {
  console.log(`
   __________________________
  |                          
  | Hi, my name is ${names[i]},
  | I am a ${work[i]}.
  |__________________________
  `);
}
*/
let color = "red";
switch (color) {
  case "pink":
    isLogged = false;

    // more code
    console.log("cool this is pink");
    break;
  case "red":
    console.log("cool this is red");
    break;
  case "white":
    console.log("cool this is white");
    break;
  default:
    console.log("sorry you need to enter a color");
}
// more

let userKidsNumber = 11;
switch (userKidsNumber) {
  case 1:
    console.log("You are new parent with 1 child");
    break;
  case 2:
    console.log("You have 2 kids");
    break;
  case 3:
    console.log("You have 3 kids");
    break;
  case 4:
  case 5:
  case 6:
  case 7:
    console.log("You have many kids");
    break;
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
    console.log("You are really happy parents");
    break;
  default:
    console.log("Enter a number between 1 and 12");
}
