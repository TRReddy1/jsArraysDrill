// Do NOT use .includes, to complete this function.
// Look through each value in `elements` and pass each element to `cb`.
// If `cb` returns `true` then return that element.
// Return `undefined` if no elements pass the truth test.

function find(elements, cb, target) {
  let result;
  for (let i = 0; i < elements.length; i++) {
    result = cb(elements[i], target);
    if (result) {
      return elements[i];
    }
  }
  return undefined;
}
module.exports = find;
