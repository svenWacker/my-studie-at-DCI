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

// Solutions Hadi
onsole.log("____________________");
// Count characters only
// Create a function will calculate how many times empty space occurred in a given string by the user and print out only the characters number
// Example :
// emptySpaces("Hi i") -> 3
const emptySpaces = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      counter++;
    }
  }
  return str.length - counter;
};
console.log(emptySpaces("Hi i"));
console.log(emptySpaces("i    Hi i"));
const emptySpacesAdvancedVersion = (str) => {
  return str.split("").filter((chr) => chr != " ").length;
};
console.log(emptySpacesAdvancedVersion("Hi  "));
console.log("____________________");
// Need more money
// Create a function that will receive a (user name , salary and his/her kids names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.
// Examples :
// salaryCalculator("Fabi", 5000, "Zain", "Uschi");
// salaryCalculator("Olga", 4055, "Zain");

const salaryCalculator = (userName, salary, ...kids) => {
  let netto, percentValue;
  switch (kids.length) {
    case 0:
      percentValue = 0.55;
      break;
    case 1:
      percentValue = 0.3;
      break;
    case 2:
      percentValue = 0.25;
      break;
    default:
      percentValue = 0.2;
  }
  netto = salary - salary * percentValue;
  return `${userName} has ${kids.length} kids, so his/her salary after taxes ${netto}`;
};
console.log(salaryCalculator("Fabi", 5000, "Zain", "Uschi"));
console.log(salaryCalculator("Olga", 7000, "Zain"));
console.log(salaryCalculator("Jack", 200));
console.log("____________________");
// Call me
// Create a function that receive a text from user and check if the user has entered a phone number, and print that out.
// Note : phone number should be within the German network starts with (030 or 017) only and has 7 digits after the prefix number
// Examples :
// phone("Hi, call me on 030221A398 "); -> This is not a valid phone number 030221A398
// phone("Hi my number is 038 "); -> This is not a valid phone number 038

const phone = (str) => {
  let numberToCheck = str
    .split(" ")
    .find(
      (number) => number.slice(0, 3) == "030" || number.slice(0, 3) == "017"
    );
  if (numberToCheck == undefined) {
    return `Sorry, please enter your phone number.`;
  }
  if (numberToCheck.length == 10 && numberToCheck == parseInt(numberToCheck)) {
    //                                    "030" == 30 -> true
    return `Your phone number is ${numberToCheck}`;
  } else {
    return `This is not valid phone number ${numberToCheck}`;
  }
};
console.log(phone("hi 0302220000"));
console.log(phone("hi 030222Q000"));
console.log(phone("hi "));

console.log("____________________");
// IsBank
// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with DE and has 20 number after that.
// DExxxxxxxxxxxxxxxxxxxx
// Examples :
// bankChecker("Hi, why you need my bank account? "); -> There was no bank account in the text
// bankChecker("I delete, have bank DE"); -> This is not a valid bank account
// bankChecker("DE12100110013000400011")); -> The bank account DE12100110013000400011 is valid

const bankChecker = (str) => {
  let result = "";
  let counter = 0;
  let strToArr = str.split(" ");
  for (let i = 0; i < strToArr.length; i++) {
    let firstTwoChr = strToArr[i].slice(0, 2);
    let remainderStr = strToArr[i].slice(2);
    if (firstTwoChr == "DE") {
      if (remainderStr.length != 20 || isNaN(remainderStr)) {
        result = `This is not a valid bank account`;
        counter++;
      } else if (remainderStr.length == 20) {
        result = `The bank account DE${remainderStr}`;
        counter++;
      }
    }
  }
  if (counter == 0) {
    return `There was no bank account in the text`;
  }
  return result;
};
console.log(bankChecker("Hi my bank account is "));
console.log(bankChecker("Hi my DE22000022220000220022 account is "));
console.log("____________________");
// This is crazy
// Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".
// Examples :
// checkStr("Hi my name is HADI");
// checkStr("I like JavaScript");

const checkStr = (str) => {
  return str.toLowerCase().includes("javascript")
    ? "I know it's crazy 😉"
    : "Sorry, No JavaScript No FUN";
};
console.log(checkStr("Hi my name is HADI"));
console.log(checkStr("I like JaVAScriPT"));
console.log("____________________");
// Tell me my age
// Create a function that calculates the user age e.g. 2000 -> 20.
// tip try mdn for this one aka need some research
// Examples :
// age(1940) -> 81
// age(2022)) -> Please enter a valid year

const age = (year) => {
  const currentYear = new Date().getFullYear();
  const userAge = currentYear - parseInt(year);
  if (userAge > 0 && userAge <= 115) {
    return userAge;
  } else {
    return "Please enter a valid year";
  }
};
console.log(age("1929Hadi"));
console.log(age(1200));
console.log("____________________");
// Seasons
// Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.
// I will be nice again to you and offer the arrays 😉
// const months = [ "december", "january", "february", "march", "april", "may", "jun", "july", "august", "september", "october", "november" ];
// const seasons = ["Winter", "Spring", "Summer", "Autumn"];
// Examples :
// monthCheck("I love Jun"); -> Jun is in Summer
// monthCheck("We need Kartoffel"); -> We couldn’t find any month in your text, sorry try again

const monthCheck = (str) => {
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
  ];
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];
  const currentSe = (monthName) => {
    switch (months.indexOf(monthName)) {
      case 0:
      case 1:
      case 2:
        return seasons[0];
      case 3:
      case 4:
      case 5:
        return seasons[1];
      case 6:
      case 7:
      case 8:
        return seasons[2];
      case 9:
      case 10:
      case 11:
        return seasons[3];
      default:
        return `something went wrong`;
    }
  };
  let month = str
    .toLowerCase()
    .split(" ")
    .filter((word) => months.includes(word))
    .join("");
  return month == ""
    ? `We couldn’t find any month in your text, sorry try again`
    : `You have entered ${month}, which is in ${currentSe(month)}`;
};
console.log(monthCheck("I love June"));
console.log(monthCheck("We need Kartoffel"));

console.log("____________________");
// Student level check
// Create a function will calculate a student degrees for 6 subjects, if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)
// Example :
// studentAverage(99, 44, 44, 80, 80, 98, 89);
// function average(...notes) average(2,4,5,6,77) Dos not mean function average(notes=[])  average(2,2)

function average(...notes) {
  let notesResult = Math.floor(
    notes.reduce((acc, cur) => acc + cur) / notes.length
  );
  let result = "";
  if (notesResult > 90) {
    result = `A+`;
  } else if (notesResult >= 85 && notesResult <= 90) {
    result = `A`;
  } else if (notesResult >= 80 && notesResult <= 84) {
    result = `B`;
  } else if (notesResult >= 70 && notesResult <= 79) {
    result = `C`;
  } else if (notesResult < 70) {
    result = `F`;
  } else {
    return `Sorry something went wrong`;
  }
  return `${notesResult} percent is ${result}`;
}

console.log(average(99, 44, 44, 80, 80, 98, 89));

console.log("____________________");
// Tell me more
// Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// print all the user input adding the greeting part and more text turning that input into a readable text.
// If one of his activities was dance or party add "you are cool" to your outputted text.
// Examples :
// userData("Zain", 22, "Kurfürstendamm", "dance", "party");
// userData("Olga", 40, "potsdamer platz", "party");
// userData("Nancy", 33, "viktoria luise platz", "swimming");

function userData(userName, age, address, ...activities) {
  let result = `Hey ${userName}, really nice to live in ${address}, hope you are having a lot of fun in your ${age}, it is nice to do ${activities.join(
    ", "
  )} `;
  if (activities.includes("dance") || activities.includes("party")) {
    result += "Oh BTW You are cool";
  }
  return result;
}
console.log(userData("Zain", 22, "Kurfürstendamm", "dance", "party"));
console.log(userData("Olga", 40, "potsdamer platz", "party"));
console.log(userData("Nancy", 33, "viktoria luise platz", "swimming"));
console.log("____________________");
// Validate Email
// Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.
// Examples :
// validate("contact@hadi-nsreeny.com") -> This is valid email address, thank you
// validate("@hadi-nsreeny.com") -> Sorry, invalid email address

function validate(email) {
  let atPos;
  let dotPos;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      atPos = i;
    }
    if (email[i] === ".") {
      dotPos = i;
    }
  }
  if (atPos > 0 && dotPos > atPos) {
    return `${email} is valid.`;
  } else {
    return `${email} is invalid.`;
  }
}

console.log(validate("contact@hadi-nsreeny.com"));
console.log(validate("@hadi-nsreeny.com"));
