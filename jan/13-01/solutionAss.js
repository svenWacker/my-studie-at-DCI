const isLEQZero = (num) => {
    return console.log(num <= 0);
};
isLEQZero(3);
isLEQZero(0);
isLEQZero(-4);
isLEQZero(10);

const dogAge = (dogYear) => {
    const humanYear = dogYear * 7;    ;
    return `Your doggy is ${humanYear} years old in dog years!`
    };
console.log(dogAge(4));
console.log(dogAge(10));
console.log(dogAge(8));