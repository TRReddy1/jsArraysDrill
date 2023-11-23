const arr = require("../data");
const each = require("../each");

function cb(element, index) {
  console.log(`Element at index ${index} : ${element}`);
}

each(arr, cb);
