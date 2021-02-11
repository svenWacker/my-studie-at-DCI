console.log("---2021-01-20---");

const names = ["Zain", "Nancy", "Olga"];
const smileys = ["😎", "🤓", "🥳"];

// 1st way
const arr1 = [];
arr1.push("Hi");
console.log(arr1);
const arr2 = ["Good", "Day"];

// new Array
const arr3 = new Array();
console.log(arr3);

//.of()
let newArr = Array.of(1, 44, 55, 6);
console.log(newArr);

// .sort()
// to sort the elements in an array
// will use the UTF-16 code
let alpha = ["c", "b", "a", "A", "1", "$"];
let newSortedAlpha = alpha.sort();
console.log(newSortedAlpha);

// .reverse() (20-01 assignment)
// to reverse an array aka first is last and last is first
let crazyArr = ["3", "55", "2"];
let crazyArrRe = crazyArr.reverse();
console.log(crazyArrRe);
newArr = ["A", "B", "c", "D"];
console.log(newArr.reverse());

// .isArray()
// true or false
let bool = Array.isArray([]);
console.log(bool);

// .lastIndexOf()
// will start searching backwards
// -1 means nothing been found
const arr4 = ["go", "we", "Home", "we", "I"];
console.log(arr4.lastIndexOf("we"));
console.log(arr4.lastIndexOf("Sven")); // -1 not here
// case sensitive! .toLowerCase
let arr5 = ["Hi", "I", "you", "you", "i"];
console.log(arr5.lastIndexOf("Sven"));
console.log(arr5.lastIndexOf("you"));

// .fill()
// (what,from,to) => (0,2,3)
let arr6 = [0, 1, 2, 3, 4, 5, 6];
// let newArr6 = arr6.fill(101, 2, arr6.length - 2);
let newArr6 = arr6.fill(101, 2);
console.log(newArr6);

// do
let counter = 0; // 11
do {
  // do will do the loop min 1 time
  console.log(counter);
  counter++;
} while (counter <= 10);

// while
let loopOne = 0;
while (loopOne < 5) {
  // console.log(loopOne);
  loopOne++;
  console.log(loopOne);
}

// for
for (i = 0; i < 5; ) {
  // i++;
  console.log(i);
  i++;
}

// AEIOU:
// Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4

const findVowels = (str) => {
  let counter = 0;
  let vowelArr = ["a", "e", "o", "i", "u"];
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < vowelArr.length; j++) {
      if (str[i].includes(vowelArr[j])) {
        counter++;
      }
    }
  }
  return counter;
};
console.log(findVowels("Hiiii"));

// No Duplicates!
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

const cleanUp = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      // ! not
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(cleanUp([1, 4, 4, 7, 7, 7]));
console.log(cleanUp([1, 6, 6, 9, 9]));
console.log(cleanUp([2, 2, 2, 2, 2, 2]));
console.log(cleanUp([5, 10, 15, 20, 25]));
