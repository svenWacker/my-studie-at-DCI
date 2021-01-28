const phone = (str) => {
  let numberToCheck = str
    .split(" ")
    .find((str) => str.slice(0, 3) == "030" || "017");
  if (numberToCheck == undefined) {
    return `Sorry, please enter a phone number.`;
  }
  if (numberToCheck.length == 10 && numberToCheck == parseInt(numberToCheck)) {
    return `Your phone number is ${numberToCheck}`;
  } else {
    return `This is not a valid phone number ${numberToCheck}`;
  }
};
console.log(phone("Hi call me on 0302210398 "));
console.log(phone("Hi call me on 0176207233"));
// **Seasons** Create a function that accepts a text from user
// and check if the user has entered a month name,
// if so print out that month and in which season it is.

// I will be nice again to you and offer the arrays 😉
// const seasons = ["Winter", "Spring", "Summer", "Autumn"];
// console.log(seasons[0]);
const checkSeasons = (str) => {
  const months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "jun",
    "july",
    "august",
    "september",
    "october",
    "november",
  ];
  const seasons = ["Winter", "Spring", "Summer", "Autumn"];
  // let lowerStr = str.toLowerCase(); //.split(" ");
  // let month = 0;
  // let result;
  // for (let i = 0; i < months.length; i++) {
  //   if (months[i].includes(lowerStr)) {
  //     return (months[i] = month);
  //   }
  //   if ((month = 11 || 0 || 1)) {
  //     result = `${seasons[0]}`;
  //   } else if ((month = 2 || 3 || 4)) {
  //     result = `${seasons[1]}`;
  //   } else if ((month = 5 || 6 || 7)) {
  //     result = `${seasons[2]}`;
  //   } else if ((month = 8 || 9 || 10)) {
  //     result = `${seasons[3]}`;
  //   } else;
  // }
  // return console.log(result);
  let month = str
    .toLowerCase()
    .split(" ")
    .filter((word) => months.includes(word))
    .join("");
  console.log(month);
};
console.log(checkSeasons("Today is may the 14th."));
console.log(checkSeasons("Today is january the 27th."));
