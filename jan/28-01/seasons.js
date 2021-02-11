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
  const currentSeason = (monthName) => {
    switch (months.indexOf(monthName)) {
      case 0 || 1 || 2:
        //   case 1:
        //   case 2:
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
    }
  };
  let month = str
    .toLowerCase()
    .split(" ")
    .filter((word) => months.includes(word))
    .join("");
  console.log(month);
  return month == ""
    ? `No month in text`
    : `you have entered${month}, which is in ${currentSeason(month)}`;
};
console.log(checkSeasons("Today is may the 14th."));
console.log(checkSeasons("Today is january the 27th."));
