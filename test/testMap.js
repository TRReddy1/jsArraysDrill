const arr = require("../data");
const map = require("../map");

function cb(number) {
  return number * number;
}

console.log(map(arr, cb));
