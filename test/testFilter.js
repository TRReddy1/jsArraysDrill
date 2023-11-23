const arr = require("../data");
const filter = require("../filter");

function cb(element, target) {
  return element % target === 0;
}

console.log(filter(arr, cb, 2));
