// https://www.freecodecamp.org/learn/
// Basic JavaScript

var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
// function golfScore(par, strokes) {
//   // Only change code below this line
//   if (strokes == 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes == par - 1) {
//     return names[2];
//   } else if (strokes == par) {
//     return names[3];
//   } else if (strokes == par + 1) {
//     return names[4];
//   } else if (strokes == par + 2) {
//     return names[5];
//   } else {
//     return names[6];
//   }
//   // Only change code above this line
// }

// golfScore(5, 4);

function golfScore(par, strokes) {
  // Only change code below this line
  return strokes == 1
    ? names[0]
    : strokes <= par - 2
    ? names[1]
    : strokes == par - 1
    ? names[2]
    : strokes == par
    ? names[3]
    : strokes == par + 1
    ? names[4]
    : strokes == par + 2
    ? names[5]
    : strokes >= par + 3
    ? names[6]
    : "Change Me";
  // Only change code above this line
}
console.log(golfScore(5, 7));

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "Please enter a number between 1 and 4";
  }
  // Only change code above this line
  return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(1));
console.log(caseInSwitch(4));
console.log(caseInSwitch(7));

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      answer = "Please enter a number between 1 and 9";
  }
  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(1));
console.log(sequentialSizes(6));
console.log(sequentialSizes(10));

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = "Please enter a switching case";
  }
  // Only change code above this line
  return answer;
}
console.log(chainToSwitch(7));
console.log(chainToSwitch("bob"));
console.log(chainToSwitch(66));

function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // if (a < b) {
  //   return true;
  // } else {
  //   return false;
  // }
  // Only change code above this line
}
console.log(isLess(10, 15));

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));
console.log(abTest(-1, 2));
console.log(abTest(2, 2));
let count = 0;

console.log(`____________card count_____________`);
function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return console.log(count + " Bet");
  } else {
    return console.log(count + " Hold");
  }
  // Only change code above this line
}
// function cc(card) {
//   var pictures = /[JQKA]/;
//   if (card > 1 && card < 7) {
//     count++;
//   } else if (card === 10 || pictures.test(card)) {
//     count--;
//   }
//   if (count > 0) return console.log(count + " Bet");
//   return console.log(count + " Hold");
// }
cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

// Setup
var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};
var hatValue = testObj.hat; // Change this line
var shirtValue = testObj.shirt; // Change this line
console.log(hatValue);
console.log(shirtValue);

// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};
var entreeValue = testObj["an entree"]; // Change this line
var drinkValue = testObj["the drink"]; // Change this line
console.log(entreeValue);
console.log(drinkValue);

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};
var playerNumber = 16; // Change this line
var player = testObj[playerNumber]; // Change this line
console.log(testObj[playerNumber]);
playerNumber = 19;
console.log(testObj[playerNumber]);

var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog.name = "Happy Coder";
console.log(myDog.name);
myDog.bark = "woof";
delete myDog.tails;
console.log(myDog);

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}
console.log(phoneticLookup("charlie"));

function checkObj(obj, checkProp) {
  // Only change code below this line
  //   if(obj.hasOwnProperty(checkProp)){
  // return obj[checkProp]
  //   }else{
  //     return `Not found`;
  return obj.hasOwnProperty(checkProp) ? obj[checkProp] : `Not Found`;
  // Only change code above this line
}
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "house"));
