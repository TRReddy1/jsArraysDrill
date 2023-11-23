const arr = require("../data");
const find = require("../find");

function cb(element, target) {
  return element === target;
}

const result = find(arr, cb, 6);
console.log(result);
