const isLEQZero = (num) => {
    return console.log(num <= 0);
};
isLEQZero(3);
isLEQZero(0);
isLEQZero(-4);
isLEQZero(10);

const dogAge = (dogYear) => {
    const humanYear = dogYear * 7;    ;
    return console.log(`Your doggy is ${humanYear} years old in dog years!`);
    //return `Your doggy is ${humanYear} years old in dog years!`;
};
dogAge(4);
dogAge(10);
dogAge(8);