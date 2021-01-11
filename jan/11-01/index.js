// old school function
// function print(str) {
//     console.log(str);
// };

// Es 6
const print = (str) => {
    console.log(str);
};

const display = (str) => {
    console.log(str);
};

print("Hi");
display("cool");
console.log(typeof print);

const sum = (x, y)=> x+y;
console.log(sum(3, 4));

const isBigger = (num1, num2) => num1 < num2;
console.log(isBigger(33, 43));

const printFullWord =(firstName,age,add)=> 
    console.log(`Hi ${firstName}, I am ${age}, I live in ${add}`);

printFullWord("Sven", 45, "Kerzenheim");
printFullWord("Maria", 46, "Bad Kreuznach");

let isLogged = false;
const login = () => {
    islogged = true;
}

login();

let name1= "Sven";
let name2= "Niklas";
let name3= "Maria";
let name4= "Sila";
console.log(`${name1}, ${name2}, ${name3}, ${name4}`);

let namesArr = ["Sven", "Niklas", "Maria", "Sila"];
console.log(namesArr[2]);
const numbers = [2, 0, 8, 3, 5, 1, 6, 4, 7, 9];
console.log(numbers[5]);

const hobbies = ["cycling", "painting", "music", "coding"];
// old
// console.log(hobbies[0]);
// console.log(hobbies[1]);
// console.log(hobbies[2]);
// console.log(hobbies[3]);
// dry
// let i = 0
// console.log(hobbies[i]);
// i++;
// console.log(hobbies[i]);
// i++;
// console.log(hobbies[i]);
// i++;
// console.log(hobbies[i]);
// i++;

// loops
// i = 0; length = 3 (i<=last is undefined)
for(let i = 0; i < hobbies.length; i++){
    console.log(hobbies[i]);
}

for(let i = 0; i <= 10; i++){
    console.log(i);
}
for(let i = 1; i <= 10; i++){
    // 1 * 1 = 1;
    console.log(`${i} * 1 = ${i * 1}`);
}