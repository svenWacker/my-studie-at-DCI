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
const numArr = [2, 3, 4, 5, 6, 7, 8];
// const totalArr = numArr.reduce((acc, cur) => acc + cur, 0);
const reducer = (acc, cur) => acc + cur;
const totalArr = numArr.reduce(reducer, 0);
console.log(totalArr);

// Example:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}
const countLettersAdv = (str) => {
  let arr = str.trim().toLowerCase().split("");
  //console.log(arr);
  let result = arr.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  return result;
};
//console.log(countLettersAdv("tree"));

// filter
const filterArr = names.filter((name) => name.length == 5); //new array and store
console.log(filterArr);

// find
const findVal = names.find((item) => item.length == 4); // find only the first item which fullfil the
console.log(findVal);

// fill (no callback)

const numbers = [2, 3, 45, 56, , 67, 4, 9];
numbers.fill(3, 4, 6);
console.log(numbers);
// numbers.fill(3, 4);
// console.log(numbers);
// numbers.fill(3);
// console.log(numbers);

// some
const isEven = (item) => item % 2 == 0;
console.log(numbers.some(isEven));

// every

const isBigger = (item) => item > 45;
console.log(numbers.every(isBigger));

// sort
const alpha = ["a", "b", "c", "C"]; // UTF -16
console.log(alpha.sort());

const words = ["hi", "a", "web", "development"];
// console.log(words.sort((a, b) => a.length - b.length));
// console.log(words.sort((a, b) => b.length - a.length));
// const sortedArr = words.sort((a, b) => a.length - b.length);
const sortedArr = words.sort((a, b) => b.length - a.length);
console.log(sortedArr);

console.log([1, 3, 5, 2, 6, 4].sort((a, b) => b - a));

function zodiac(yearStr) {
  let arr = yearStr.split("-");
  console.log(arr);
  const result = {
    birthDay: arr[0],
    birthMonth: arr[1],
    birthYear: arr[2],
    yourZodiac: function () {
      data = [
        { signName: "Not real day!", from: "0000" },
        { signName: "Capricorn", from: "0101" },
        { signName: "Aquarius", from: "0121" },
        { signName: "Pisces", from: "0220" },
        { signName: "Aries", from: "0321" },
        { signName: "Taurus", from: "0421" },
        { signName: "Gemini", from: "0521" },
        { signName: "Cancer", from: "0622" },
        { signName: "Leo", from: "0723" },
        { signName: "Virgo", from: "0824" },
        { signName: "Libra", from: "0924" },
        { signName: "Scorpio", from: "1024" },
        { signName: "Sagittarius", from: "1123" },
        { signName: "Capricorn", from: "1222" },
        { signName: "Not real day!", from: "1232" },
        { signName: "empty", from: "0000" },
      ];
      // if (this.birthday > 31 || this.birthMonth>12){
      //   return `This mis not a valid date`
      // }
      let monthDay = this.birthMonth + this.birthDay;

      // 1123
      let i = 0;
      while (monthDay >= data[i].from && i < data.length) {
        i++;
      }
      let yourZodiacName = data[i - 1].signName;
      return `Your zodiac sign is ${yourZodiacName}`;
    },
  };
  return result.yourZodiac();
}

console.log(zodiac("14-05-1975"));
console.log(zodiac("00-00-0000"));

// for in
const person = [
  {
    userName: "Zain",
    age: 22,
    add: "H",
  },
  {
    userName: "Olga",
    age: 32,
    add: "H",
  },
  {
    userName: "Nancy",
    age: 42,
    add: "H",
  },
];
// for (prop in person) {
//   console.log(`${prop} : ${person[prop]}`);
// }
const [userName] = person;
console.log(userName);
// for of
