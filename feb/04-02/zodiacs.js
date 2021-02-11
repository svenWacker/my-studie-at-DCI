function findZodiacSign(day, month) {
  var zodiacSigns = [
    "capricorn",
    "aquarius",
    "pisces",
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
  ];

  if ((month == 0 && day <= 19) || (month == 11 && day >= 22)) {
    return zodiacSigns[0];
  } else if ((month == 0 && day >= 20) || (month == 1 && day <= 18)) {
    return zodiacSigns[1];
  } else if ((month == 1 && day >= 19) || (month == 2 && day <= 20)) {
    return zodiacSigns[2];
  } else if ((month == 2 && day >= 21) || (month == 3 && day <= 19)) {
    return zodiacSigns[3];
  } else if ((month == 3 && day >= 20) || (month == 4 && day <= 20)) {
    return zodiacSigns[4];
  } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return zodiacSigns[5];
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 22)) {
    return zodiacSigns[6];
  } else if ((month == 6 && day >= 23) || (month == 7 && day <= 22)) {
    return zodiacSigns[7];
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    return zodiacSigns[8];
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return zodiacSigns[9];
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 21)) {
    return zodiacSigns[10];
  } else if ((month == 10 && day >= 22) || (month == 11 && day <= 21)) {
    return zodiacSigns[11];
  }
}

function zodiac(day, month) {
  // returns the zodiac sign according to day and month ( https://coursesweb.net/ )
  var zodiac = [
    "",
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
  ];
  var last_day = ["", 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  return day > last_day[month] ? zodiac[month * 1 + 1] : zodiac[month];
}

var z_sign = zodiac(15, 10); // 15 - October

document.write(z_sign); // Libra

function calculate(f) {
  var zodiac = {
    Capricorn1: { m: 0, d: 20 },
    Aquarius: { m: 1, d: 19 },
    Pisces: { m: 2, d: 20 },
    Aries: { m: 3, d: 20 },
    Taurus: { m: 4, d: 21 },
    Gemini: { m: 5, d: 21 },
    Cancer: { m: 6, d: 22 },
    Leo: { m: 7, d: 22 },
    Virgo: { m: 8, d: 23 },
    Libra: { m: 9, d: 23 },
    Scorpio: { m: 10, d: 22 },
    Saggitarius: { m: 11, d: 21 },
    Capricorn2: { m: 11, d: 31 },
  };
  var born = f["birthdate"].value;
  born = born.match(/\//) ? born.split("/") : born.split(".");
  var yyyy = Number(born[2]);
  var mm = Number(born[1]) - 1;
  var dd = Number(born[0]);
  var bornDate = new Date(yyyy, mm, dd),
    zodiacEnd,
    astrologicalSign;
  for (z in zodiac) {
    zodiacEnd = new Date(yyyy, zodiac[z]["m"], zodiac[z]["d"]);
    if (bornDate <= zodiacEnd) {
      astrologicalSign = z;
      break;
    }
  }
  astrologicalSign.match(/\d/)
    ? (astrologicalSign = astrologicalSign.replace(/\d/g, ""))
    : null;
  var spanSign = document.getElementById("sign");
  spanSign.innerHTML = astrologicalSign;
  return false;
}

//{ signName: "Capricorn", from: "0101" },

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
        { signName: "Aquarius", from: "0120" },
        { signName: "Pisces", from: "0220" },
        { signName: "Aries", from: "0321" },
        { signName: "Taurus", from: "0421" },
        { signName: "Gemini", from: "0521" },
        { signName: "Cancer", from: "0622" },
        { signName: "Leo", from: "0723" },
        { signName: "Virgo", from: "0823" },
        { signName: "Libra", from: "0924" },
        { signName: "Scorpio", from: "1023" },
        { signName: "Sagittarius", from: "1123" },
        { signName: "Capricorn", from: "1222" },
        { signName: "Not real day!", from: "1232" },
        { signName: "empty", from: "1232" },
      ];
      // Extra Protection
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
      return `Your Zodiac sign name ${yourZodiacName}`;
    },
  };
  return result.yourZodiac();
}
console.log(zodiac("14-05-1975"));
