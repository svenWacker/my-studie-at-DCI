// module exports

// 1
// exports.sum = (a, b) => a + b;
// exports.sub = (a, b) => a - b;
// exports.multi = (a, b) => a * b;

// 2
// module.exports = {
//   sum: (a, b) => a + b,
//   sub: (a, b) => a - b,
//   multi: (a, b) => a * b,
// };

// 3
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const multi = (a, b) => a * b;
module.exports = { sum, sub, multi };
