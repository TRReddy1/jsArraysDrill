const elements = [1, [2], [[3]], [[[4]]]];

const flatten = require("../flatten");

const result = flatten(elements);

console.log(result);
