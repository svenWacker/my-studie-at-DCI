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

// mixed arrays
const mixedArr = ["Hi", 1234, true];
console.log(typeof mixedArr);
for(let i = 0; i < mixedArr.length; i++){
    console.log(mixedArr[i]);
}
const chrArr = ["a", "b", "c"];
for(let i = 0; i < chrArr.length; i++){
    console.log(chrArr[i].toUpperCase());
}

const names = ["sven", "maria", "niklas"];
for(let i = 0; i < names.length; i++){
    console.log(names[i][0].toUpperCase()+names[i].slice(1));
    //let str = "";
    //str = names[i][0].toUpperCase() + names[i].substring(1));
}
//console.log(names[0]);

//console.log(1 == 11 ? "cool" : "no");
let isSmart = false;
if (isSmart){
    console.log("cool")
}else{
    console.log("no");
}
let count = 0;
if (22 * 3 == 299 +3) {
    count++;

    console.log("You are right");
} else{
count--;
// \' \" ignore
// \n new line
console.log("No that's \n this is a new lineYou are right");
}

// functions, if else, objects, scopes all with {}
// arrays, strings []
// if conditions, method, conditions function calls ()

let a = true;
let b = false;
let c = 11 ==23;
if ((a == b && c !=a ) || c == a) {
    console.log("Makes sence");
}else {
    console.log("Makes no sence");
}
// The odd/even reporter. 
// Write a program that will iterate from 0 to 20. For each iteration,
// it will check if the current number is even or odd, 
// and report that to the screen (e.g. “2 is even”).
for(let i = 0; i <= 20; i++)
{
    if (i % 2 == 0){
        console.log(`${i} is even`);
    }
    else{ 
        console.log(`${i} is odd`);
    }
}

// Write programs that produce the following outputs:
// 100 200 300 400 500 600 700 800 900 1000
console.log("----------");
let text = "";
for(let i = 100; i <= 1000;i+=100){
        text += i + " ";
    }

console.log(text);
// 0 2 4 6 8 10
console.log("----------");
text = "";
for(let i = 0; i <= 10;i+=2){
    //if(i % 2 == 0){
        text += i + " ";
    //}
}
console.log(text);

// 3 6 9 12 15
console.log("----------");
text = "";
for(let i = 1; i <= 15;i++){
    if(i % 3 == 0){
        text += i + " ";
    }
}
console.log(text);

// 9 8 7 6 5 4 3 2 1 0
console.log("----------");
text = "";
for(let i = 9; i >=0 ;i--){
        text += i + " ";
    }
console.log(text);
// 1 1 1 2 2 2 3 3 3 4 4 4
// console.log("----------");
// text = "";
// let textArr ="";
// for(let i = 1; i <=4 ;i++){
//     for(let j = 0; j < 3 ;j++){
//         text += i + " ";
// }

//    }
// console.log(textArr);
console.log("----------");
text = "";
let countNum = 0;
for(let i = 1; i <=4; ){
    text += i + " ";
    if (countNum !== 0 && countNum % 3 ===0){
        i++
        countNum = 0;
    }
    countNum++;
}
console.log(text);

// // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
console.log("----------");
text = "";
textArr ="";
for(let i = 0; i <=4 ;i++){
//     for(let j = 0; j <= 4 ;j++){
     text += i + " ";
     }
// }
textArr = (`${text}${text}${text}`);
console.log(textArr);


// for(let i = 1; i <= 10; i++){
//     // 1 * 1 = 1;
//     for(let j = 1; j <= 10 ;j++){
//     console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log("next table");
// }


let st = "Hi this is me";
let stToArr = st.split(" ");
console.log(stToArr);
let backtoSt = stToArr.join(" ");
console.log(backtoSt);

console.log("Hi".repeat(3));
console.log("----------");
text = "";
let count1 = 0; //Idea is to create a counter, and to increment it each time of printing
let n= 10;
for (let i = 0; i <= n; i++) { //Loops n times
    for (let j = 0; j < i; j++) { //Loops i times
        if (count1 <  n) {
        console.log(" "+i+" ");
        count1++;//Prints 1 one time, 2 two times, etc. stops if reached n number
        }
    }
}


console.log("----------");
text = "";
countNum >= 0;
for(let i = 1; i <=4; ){
    text += " " + i + i + i;
    //if (countNum !== 0 && countNum % 3 === 0){
        i++;
    //    countNum = 0;
    //}
    //countNum++;
}
console.log(text);

