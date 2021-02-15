const today = new Date();
console.log(today);
console.log(Date());

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  printData() {
    return `Hey ${this.name}, you are too old ${this.age}`;
  }
}
// const newBuddy = new Person("Steel", 21);
// console.log(newBuddy.printData());
// extends && super
// extends and super()
// extends --> inheriting the methods from the Original class which being called
// super --> gets access to the parent's properties and methods

class Kid extends Person {
  constructor(_name, _age, _height = 0) {
    super(_name, _age);
    this.height = _height;
  }
  show() {
    return `this is a kid class from Person, ${this.name}`;
  }
}

const zain = new Kid("Zain", 21);
console.log(zain);
console.log(zain.show());
// Date

// UTC Coordinated Universal Time
// CET Central European Time
// GMT Greenwich Mean Time
// More about that https://24timezones.com/#/map

let time = new Date().getMonth();
console.log(Date());

// A pandigital number contains all digits (0-9) at least once.
// Write a function that takes an integer, returning true if the integer is pandigital,
// and false otherwise.

// const isPandigital = (num) => {
//   let numbers = "0123456789".split("");
//   arr = num.toString().split("");
//   let newArr = [];
//   //   for (let i = 0; i < arr.length; i++) {
//   //     for (let j = 0; j < numbers.length; j++) {
//   //       if (arr[i].includes(numbers[j]) && !newArr.includes(arr[i])) {
//   //         newArr.push(arr[i]);
//   //       }
//   //     }
//   //   }

// other way
//   arr.forEach((num) => {
//     numbers.forEach((el) => {
//       if (num.includes(el) && !newArr.includes(num)) {
//         newArr.push(num);
//       }
//     });
//   });
//   return newArr.sort().join("") == numbers.sort().join("");
// };
// console.log(isPandigital(1234560789));

// third way
// const  isPandigital = (num)=> {
//   let numToArr = num.toString().split("").sort();
//   let filteredArr = numToArr.filter((el, i) => numToArr.indexOf(el) == i);
//   return filteredArr.join("") == "0123456789";
// }
// console.log(isPandigital(123334567890));
// console.log(isPandigital(90864523148909));

// Binary converter, convert any given number to binary.
// Bounce : your code should be using one line only
// Example :
// 20 -> 10100
// 10-> 1010
// 44-> 101100
const binary = (num) => num.toString(2);
console.log(binary(10));

const binary2 = (num) => {
  return parseInt(num, 2);
};
console.log(binary2(10));
