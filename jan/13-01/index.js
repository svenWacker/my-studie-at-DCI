/*//
const names = ["Hello"];
console.log(names[0][2]); // von [0] place [3] = l

//
const functionName = () =>{
    return "you are cool"
}
console.log(functionName());
//
for (let i = 1; i < 100;){
    console.log(i);
    i += 20;
}
*/
/*
numbersCount();
Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
  12345
  1234
  123
  12
  1
*/
const numbersCountBack = () => { 
  let text = "";
  for(let i = 5; i >=0;i--){
      // something
      text = "";
      for(let j =1; j<=i; j++){
            // something
            text += j;
        }
      // something
      console.log(text);
    }
};
numbersCountBack();

let userData = "";
const saveData =(userName = "No name", kids =0)=>{
  userData = userName;

}
saveData("Sven");
console.log(userData);

const countOccurences = (str, letter) => {
  let result = str.split("");
  //console.log(result);
  let counter = 0;
  for (let i = 0; i < result.length; i++){
    if (result[i] == letter) {
      counter++;
    }
  }
  return counter;
}
console.log(countOccurences("This is a string", "i")); // 3
console.log(countOccurences("xoxoxoxoxoxoxo", "o")); // 7
console.log(countOccurences("x", "y")); // 0

const passwordGen = () => {
  let pw ="";
  let pwLength = 30;
  const pwChar = "abcdefghijklmnopqrstuvwxyzäöüABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ0123456789!§%&/()=?<>@€$#*+-_°^";
  for (let i = 0; i <=pwLength; i++) {
    pw += pwChar.charAt(Math.floor(Math.random() * pwChar.length));
  }
  console.log(pw);
};
passwordGen();
passwordGen();
passwordGen();