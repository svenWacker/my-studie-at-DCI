// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("----------------");
for (let j = 0; j < 5; ) {
  console.log(j);

  j += 2;
}
console.log("----------------");
for (let i = 1; i <= 5; i++) {
  console.log(`this is number ${i}`);
}

console.log("----------------");
for (let i = 0; i < 5; i++) {
  if (i <= 1) {
    console.log(`there is ${i} star in the sky`);
  } else {
    console.log(`there are ${i} stars in the sky`);
  }
}

console.log("----------------");
for (let i = 5; i > 0; i--) {
  console.log(`i is now ${i}`);
}

console.log("----------------");
for (let i = 1; i <= 10; i++) {
  console.log(`4 * ${i}\t = ${i * 4}`);
}

console.log("----------------");
for (let i = 1; i <= 10; i++) {
  console.log(`\nthis is table ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${j} * ${i}\t = ${i * j}`);
  }
}
