# Live-coding Javascript

[04/01/2021](jan/04-01/index.js)
Introduction Javascript :
Expressions:

- String expressions
- Mathematical expressions
- Boolean expressions: comparison operators
- Data type
- Conditional expressions: the ternary operator
  Statements
- Definition of statement: `;`
- Hello world: `console.log(<expression>)`
- Comments
- Syntax Debugging I
  Variables:
- Variables
- Declaration and assignment
- A word about naming conventions
- Empty variables
- Syntax debugging II
  Basic String Methods:
- Converting case with:
  toUpperCase(), toLowerCase()
- Extracting parts of a string
- Checking if a string is inside another string: includes()
- Removing padding spaces: trim()
  String:
- Getting the length of a string: length”

[05/01/2021](jan/05-01/index.js) - Review

Data types :
String:

- Escaping special chars
- Syntax debugging IV
- String interpolation: template literals, using expressions within strings
- Syntax debugging V: Unclosed qutation marks
- Syntax debugging VI: Unclosed brackets
  Number:
- Combining strings and numbers with +
- Integers vs. Floats
- Converting strings into Numbers
- Using modulo”"
  Math:
- Rounding up with `Math.ceil()`
- Rounding down with `Math.floor()`
- Maximum and minimum with `Math.max()`, `Math.min()`
  Number Pitfalls:
- Dealing with NaN: `isNaN(<expression>)`, `typeof NaN`

[07/01/2021](jan/07-01/index.js)

Boolean:

- Boolean inversion with `!`
  Logical Thinking II:
- What is an Algorithm?
- Analyzing problems: Input and Output
- Coming up with solutions: writing algorithms
  Decisions:
- Conditional algorithms
- The conditional statement: `if(<boolean>){ ... }`
- Syntax debugging VIII: Unclosed curly braces
- The default case: `else { ... }`”

Expressions:

- Data type: the unary operator `typeof`
  Math:
- Getting random numbers with `Math.random()`
- Math. (other Math methods explained by students)
  Number Pitfalls:
- Very long numbers: `e`, rounding errors
- Dealing with rounding errors: `Number.prototype.toFixed()`
  Logical Thinking I:
- Simple preposition analysis
- Logical operators
- Truth tables primer
  Boolean:
- Truthy and falsy values
- Type conversion
- Syntax debugging VII
- Short circuit assignment: Assigning variable fallback with `||`

[11/01/2021](jan/11-01/index.js)

Declaring:

- Functions declarations as values:
  `const <function name> = function(<parameters>){ ... }`
- Arrow function shorthand:
  `const <function name> = (<parameters>) => { ... }`

[12/01/2021](jan/12-01/assignments.js)
Assignments

[13/01/2021](jan/13-01/index.js)
Review from last topics

[14/01/2021](jan/14-01/index.js)
JavaScript 101

[18/01/2021](jan/18-01/index.js)
Conditional Repetition:

Numerical Repetition:

- Repeating code blocks a set number of times:
  `for(<initial state>, <end condition>, <step>){ ... }`
- Breaking out of a loop: `break;`
- Skipping an iteration: `continue;`
- Complex iterations: Nesting `for` loops
  Array: Saving multiple values in one name
- Assigning array literals:
  `const <array name> = [<value 1>, <value 2>, ...]`
- Accessing array items with square brackets”

[19/01/2021](jan/19-01/index.js)

- Assigning array literals:
  `const <array name> = [<value 1>, <value 2>, ...]`
- Accessing array items with square brackets
- Re-assigning array items with square brackets
- `const`s and array items
  Basic Array methods:
- Finding Items: `Array.prototype.indexOf(<item>)`
- Adding items: `Array.prototype.push()`, `Array.prototype.unshift()`
- Removing items: `Array.prototype.pop()`, `Array.prototype.shift()`
- Manipulating arrays: `Array.prototype.reverse()`

[20/01/2021](jan/20-01/index.js)
More Array methods

Function Scope:

- Parameters scope
- Declaring variables in functions
- Global vs. Local scope: Variable reassignment in functions
- Reading a program IV (reading functions only when they are called)
- Repeating code blocks on a condition:
  `while(<boolean>){ ... }`, `do { ... } while (<boolean>);`
- Counting iterations: the counter variable, `++`, `--`
- Reading a program III (keeping track of state).

[21/01/2021](jan/21-01/index.js)
Declaring:

- Functions declarations as values:
  `const <function name> = function(<parameters>){ ... }`
- Arrow function shorthand:
  `const <function name> = (<parameters>) => { ... }`
  Advanced Array methods:
- Higher order functions II:
  Functions that accept function values (callbacks)
- Converting an array to a single value: `Array.prototype.reduce(<function>)`

[25/01/2021](jan/21-01/index.js)
Assignments

[26/01/2021](jan/26-01/index.js)
Function Scope:

- Parameters scope
- Declaring variables in functions
- Global vs. Local scope: Variable reassignment in functions
- Reading a program IV (reading functions only when they are called)

Clones vs. References:

- Shallow cloning objects and arrays: the spread operator `...`

Advanced Parameters:

- Default parameter values:
  `function(<parameter> = <default value>) { ... }`
- Variable number of arguments: Rest params - `...args`

[28/01/2021](jan/28-01/index.js)
Assignments

[01/02/2021](feb/01-02/index.js)
Review from previous topics (functions, methods, arrays, loops)

Block Scope:

- Scope definition: difference between var, let, const Closure:
- Declaring functions inside functions
- Nested scopes: Accessing outer variables
- First definition of closure: A function that contains at least one variable, and one nested scope
- Encapsulation: Isolating scopes with IIFE vs. SIAF”

[02/02/2021](feb/02-02/index.js)
Objects

- Object literals: Property definition
  `const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }`
- Accessing properties with bracket notation (no variables)
- Accessing properties with dot notation
  Object Scope:
- Methods definition
- Using methods: Review of used methods so far
- Creating methods
  Conversion and iterations:
- Iterating over objects: `for(let <property name> in <object name>){ ... }`
- Property names to array: `Object.keys(<object>)`
- Accessing properties with bracket notation (w. vars)
- Property values to array: `Object.values(<object>)`



[08/02/2021](feb/08-02/index.js)
- callbacks
- Array advanced methods(map,filter,reduce, sort, every, some)
- Loops, SIAF, IIFE , closure, 



[09/02/2021](feb/09-02/index.js)
- Clones vs. References

[10/02/2021](feb/10-02/index.js)
Nesting arrays and objects:

- Nesting and iterating over objects in arrays
  Clones vs. References:
- Simple values are always clones: String, Number, Boolean
- Objects are references by default: Array and object literals
- Shallow cloning objects and arrays: the spread operator `...`
- Deep cloning objects and arrays: recursive function

[11/02/2021](feb/11-02/index.js)
-  Destructuring objects as function parameters

