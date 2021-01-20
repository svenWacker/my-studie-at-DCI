// Mark and John are trying to compare their BMI (Body Mass Index),
// which is calculated using the formula:
// BMI = mass / (height * height).
// (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
// 1. Store Mark’s and John’s mass and height in variables.
const markH = 1.65;
const markM = 85;
const johnH = 1.9;
const johnM = 120;

// 2. Calculate both their BMIs and store their BMIs in variables.
let markBMI = markM / (markH * markH);
let johnBMI = johnM / (johnH * johnH);
console.log(markBMI);
// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
let bool = markBMI > johnH;
console.log(`Is Mark's BMI higher than JOhn's? Why jes, it's ${bool}`);
// 4. Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
// 5. Create an if statement which prints the name and BMI of the person with the highest BMI.
if (markBMI > johnBMI) {
  console.log("Mark is the winner");
} else {
  console.log("John is the winner");
}
/*
const names = ["Mark", "John", "Sven"];
const height = [1.65, 1.8, 1.74];
const mass = [72.5, 85, 72];
const bmi = [2];
for (let i = 0; i < names.length; i++) {
  return (bmi = (mass / height) * height);
}
console.log(`
  ${names[i]} is ${height[i]}m tall, weights ${mass[i]} kg
  BMI: ${bmi}
  `);
*/

// Make a variable for firstName and age and give each variable values.
// Create an if/else statement to check whether the person’s age is less than 13.
// If so, print “firstName is a child”.
// If the age is equal to or more than 13 and less than 20,
// print “firstName is a teenager”.
// If the person’s age is equal to and more than 20 and less than 30,
// then print “firstName is a young adult”.
// If none of these conditions apply, print “firstName is a adult”.

let firstName = "Sven";
let age = 31;

const lifeStatus = (firstName, age) => {
  status = "";
  if (age < 13) {
    status = "child";
  } else if (age >= 13 && age < 20) {
    status = "teenager";
  } else if (age >= 20 && age < 30) {
    status = "young adult";
  } else {
    status = "adult";
  }
  console.log(status);
  return `${firstName} is a ${status}`;
};
//let firstName = "Sven";
//let age = 31;

console.log(firstName, age);

// Create a program that capitalizes the first letter of each element in an array of names. Examples:
// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// const names1 = ["matt", "sara", "lara"];
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// const names2 = ["samuel", "MARIA", "luke", "mary"];
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]
// const names3 = ["Cynthia", "Karen", "Jane", "Carrie"];
// for (let i = 0; i < names1.length; i++) {
//   console.log(names1[i][0].toUpperCase() + names1[i].slice(1));
// }
// for (let i = 0; i < names2.length; i++) {
//   console.log(names2[i][0].toUpperCase() + names2[i].slice(1).toLowerCase());
// }
// for (let i = 0; i < names3.length; i++) {
//   console.log(names2[i][0].toUpperCase() + names3[i].slice(1));
// }

// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
const names1 = ["matt", "sara", "lara"];
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
const names2 = ["samuel", "MARIA", "luke", "mary"];
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]
const names3 = ["Cynthia", "Karen", "Jane", "Carrie"];
const capatalize = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toUpperCase();
  }
  return arr;
};
console.log(capatalize(names1));
console.log(capatalize(names2));
console.log(capatalize(names3));

// Create an array of city names. Loop through the array and add the city names to a string. Examples:
// [Berlin, Paris, Prague, Rome] ➞ expected output: “Berlin, Paris, Prague, Rome”.
// const cities = ["Berlin", "Paris", "Prague", "Rome"];
// console.log(`"${cities[0]},  ${cities[1]}, ${cities[2]},  ${cities[3]}."`);
// for (let i = 0; i < cities.length; i++) {

const arrayToStr = (arr) => {
  let str = "";
  for (i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i == arr.length - 1) {
      str += ".";
    } else {
      str += ", ";
    }
  }
  return str;
};
console.log(arrayToStr(["Berlin", "Paris", "Prague", "Rome"]));

//   console.log(cities[i][0].toUpperCase() + cities[i].slice(1));
// }
// [Maria, Mike, Paul, Doven] ➞ expected output: “Hello Maria! Hello Mike! Hello Paul! Hello Doven!”
const names5 = ["Maria", "Mike", "Paul", "Doven"];
for (let i = 0; i < names5.length; i++) {
  console.log(`Hello ${names5[i]}! with index: ${i}`);
}

//const names5 = ["Maria", "Mike", "Paul", "Doven"];
const hallo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Hello ${arr[i]}! with index: ${i}`);
  }
};
hallo(names5);

// Create a program that changes a given array by
// adding 1 to each odd integer and subtracting 1 from each even integer.
// Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
const numes1 = [3, 5, 2, 4];
for (let i = 0; i < numes1.length; i++) {
  console.log(`${numes1[i] + 1}`);
}
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
const numes2 = [6, 9, 10, 20];
for (let i = 0; i < numes2.length; i++) {
  console.log(`${numes2[i] - 1}`);
}
// DRY
// const oddOrEven = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2) {
//       console.log(arr[i] - 1);
//     } else {
//       console.log(arr[i] + 1);
//     }
//   }
// };
// better:
const oddOrEven = (arr) => {
  let currentValue;
  for (let i = 0; i < arr.length; i++) {
    currentValue = arr[i];
    if (currentValue % 2) {
      console.log(currentValue - 1);
    } else {
      console.log(currentValue + 1);
    }
  }
};
