// Flattens a nested array (the nesting can be to any depth).
// Hint: You can solve this using recursion.
// Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

const result = [];

function flatten(elements) {
  for (let i = 0; i < elements.length; i++) {
    let currArr = elements[i];
    if (Array.isArray(currArr)) {
      flatten(currArr);
    } else {
      result.push(currArr);
    }
  }
  return result;
}

module.exports = flatten;
