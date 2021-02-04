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
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

// golfScore(5, 4);

// function golfScore(par, strokes) {
//   // Only change code below this line
//   return strokes == 1
//     ? names[0]
//     : strokes <= par - 2
//     ? names[1]
//     : strokes == par - 1
//     ? names[2]
//     : strokes == par
//     ? names[3]
//     : strokes == par + 1
//     ? names[4]
//     : strokes == par + 2
//     ? names[5]
//     : strokes >= par + 3
//     ? names[6]
//     : "Change Me";
//   // Only change code above this line
// }
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

var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  // Add a record here
  {
    artist: "Daft Punk",
    title: "Homework",
    release_year: 1997,
    formats: ["CD", "Cassette", "LP"],
    gold: true,
  },
];
// Access the myStorage object and assign the contents of the glove box property
// to the gloveBoxContents variable. Use dot notation for all properties where possible,
// otherwise use bracket notation.
// Setup
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
console.log(gloveBoxContents);

// Setup
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line
console.log(secondTree);

// Setup
var collection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
// function updateRecords(object, id, prop, value) {
//   if (value === '') delete object[id][prop];
//   else if (prop === 'tracks') {
//     object[id][prop] = object[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
//     object[id][prop].push(value);
//   } else {
//     object[id][prop] = value;
//   }
//   return object;
// }

function updateRecords(object, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && !object[id].hasOwnProperty("tracks")) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop];
  }
  return object;
}
updateRecords(collection, 5439, "artist", "ABBA"); // artist should be ABBA
updateRecords(collection, 5439, "tracks", "Take a Chance on Me"); // tracks should have Take a Chance on Me as the last element.
updateRecords(collection, 2548, "artist", ""); //  artist should not be set
updateRecords(collection, 1245, "tracks", "Addicted to Love"); // tracks should have Addicted to Love as the last element.
updateRecords(collection, 2468, "tracks", "Free"); // tracks should have 1999 as the first element.
updateRecords(collection, 2548, "tracks", ""); //  tracks should not be set
updateRecords(collection, 1245, "albumTitle", "Riptide"); //  albumTitle should be Riptide

// Setup
var myArray = [];
var i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray);
console.log();

myArray = [];
for (let i = 1; i <= 6; i++) {
  myArray.push(i);
}
console.log(myArray);
console.log();

myArray = [];
// Odd No
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray);

// Setup
var myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
  console.log(total);
}

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
);
console.log(multiplyAll([[1], [2], [3]]));
console.log(
  multiplyAll([
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9],
  ])
);

// Setup
var myArray = [];
var i = 10;
// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i <= 10);

console.log(myArray);
console.log(i);

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
console.log(sum([1], 0)); // should equal 0.
console.log(sum([2, 3, 4], 1)); // should equal 2.
console.log(sum([2, 3, 4, 5], 3)); // should equal 9.

// Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName")); // should return "Vos"
console.log(lookUpProfile("Sherlock", "likes")); // should return ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry", "likes")); // should return an array
console.log(lookUpProfile("Bob", "number")); // should return "No such contact"
console.log(lookUpProfile("Bob", "potato")); // should return "No such contact"
console.log(lookUpProfile("Akira", "address")); // should return "No such property"

// function lookUpProfile(firstName, prop) {
//   let contact = contacts.find((x) => x.firstName === firstName)
//   return contact ? (contact.hasOwnProperty(prop) ? contact[prop] : "No such property") : "No such contact”;
// }

// function lookUpProfile(name, prop){
//   const fnMatch = contacts.filter(cont => cont.firstName === name);
//   return fnMatch.length ? (fnMatch[0][prop] ? fnMatch[0][prop] : "No such property") : "No such contact";
// }

// function lookUpProfile(name, prop){
//   // Only change code below this line
//           const contact = contacts.filter(cont => cont.firstName === name);
//           return contact.length ? (contact[0][prop] ? contact[0][prop] : "No such property") : "No such contact";
//   // }
//   // Only change code above this line
//   }
function randomFraction() {
  return Math.random();
}
console.log(randomFraction());

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
console.log(randomRange(1, 6));
console.log(randomRange(1, 9));
console.log(randomRange(1, 12));

function convertToInteger(str) {
  return parseInt(str, 10);
}
console.log(convertToInteger("56"));

function convertToInteger(str) {
  return parseInt(str, 2); //binary
}
console.log(convertToInteger("10011"));

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
console.log(checkEqual(1, 2));

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(10));
console.log(checkSign(-5));
console.log(checkSign(0));

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const arr = countdown(n - 1);
//     arr.splice(0, 0, n);
//     return arr;
//   }
// }

// function countdown(n){
//   return n < 1 ? [] : [n].concat(countdown(n - 1));
// }

// function countdown(n){
//   return n < 1 ? [] : [n, ...countdown(n - 1)];
// }

console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    let num = rangeOfNumbers(startNum, endNum - 1);
    num.push(endNum);
    return num;
  }
}
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));

// function rangeOfNumbers(startNum, endNum) {
//   return startNum === endNum
//     ? [startNum]
//     : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
// }

// function rangeOfNumbers(startNum, endNum) {
//   return startNum === endNum
//     ? [startNum]
//     : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
// }
