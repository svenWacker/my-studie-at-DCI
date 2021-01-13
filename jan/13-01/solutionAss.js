// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:

// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false
const isLEQZero = (num) => {
    return num >= 0;
}
console.log(isLEQZero(3));
isLEQZero(0);
isLEQZero(-4);
isLEQZero(10);

const