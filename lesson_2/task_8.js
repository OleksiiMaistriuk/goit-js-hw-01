function reduceArray(array) {
  "use strict";
  let total = 0;
  for (let i = 0; i < array.length; i += 1) {
    const arr = array[i];
    total += arr;
  }

  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5
