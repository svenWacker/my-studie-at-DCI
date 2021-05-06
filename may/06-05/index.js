// Blocking vs Non-Blocking code
// Blocking code
// blocking code(loops, console.log, loading files )
// Non-blocking code

console.log("Hi");
console.log("cool");

window.setTimeout(() => {
  console.log("Hi there this is a time out");
}, 1000);
console.log("I can run first, even I am after the time out");
// Promises
// Promises are very similar to callbacks but they are a little bit clean on writing
// Promises are the best solution if you want to do something that takes a long time to be done and you don't want your app to wait for it to be done, so it will work on the background, Like downloading an image or a video from another server

// Promisify setTimeout
