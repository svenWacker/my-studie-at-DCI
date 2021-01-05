
function catName(name) {
    console.log("My cat's name is " + name);
  }
  
  catName("Tiger");

  
  /*
  The result of the code above is: "My cat's name is Tiger"
  */
 catName("Chloe");

 function catName(name) {
   console.log("My cat's name is " + name);
 }
 /*
 The result of the code above is: "My cat's name is Chloe"
 */

console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage
var num; // Declaration
num = 6; // Initialization
//console.log(num); 

num1 = 7; // Initialization
console.log(num1); // Throws ReferenceError exception
num1 = 7; // Initialization

// Example with let:
//a = 1; // initialization.
let a=1; // Throws ReferenceError: Cannot access 'a' before initialization
//a = 1; // initialization.

// Example with const:
//a = 1; // initialization.
const b=2; // Throws SyntaxError: Missing initializer in const declaration
//b = 1; // initialization.

// Example 1
// Only y is hoisted

var x = 1; // Initialize x, and if not already declared, declare it - but no hoisting as there is no var in the statement.
var y = 2;
console.log(x + " " + y); // '1 undefined'
// This prints value of y as undefined as JavaScript only hoists declarations
var y = 2; // Declare and Initialize y

// Example 2
// No hoisting, but since initialization also causes declaration (if not already declared), variables are available.

c = 'Cran'; // Initialize a
d = 'berry'; // Initialize b

console.log(c + "" + d); // 'Cranberry'