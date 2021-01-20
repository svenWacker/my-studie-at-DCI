/*const isLEQZero = (num) => {
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
*/

// console.log("First shape");
// let text = "";
// let chr = "O"
// for(let i = 1; i <=8;i++){
//     text += "x" + chr + "  ";
//     console.log(text);
//     }

let text = '';
for (let i = 4; i >= 1; i--) {
   // i < 4 ? text += '\n': null;
    for (let j = 1; j <= i; j++) {
        text += '*';
    }
}
console.log(text);
