const arr = require("../data");
const reduce = require("../reduce");

function cb(startingValue, element) {
  return startingValue + element;
}

console.log(reduce(arr, cb));
