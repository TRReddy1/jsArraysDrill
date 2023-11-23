// Do NOT use .filter, to complete this function.
// Similar to `find` but you will return an array of all elements that passed the truth test
// Return an empty array if no elements pass the truth test

function filter(elements, cb, target) {
  let result = [];

  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i], target)) {
      result.push(elements[i]);
    }
  }

  return result;
}

module.exports = filter;
