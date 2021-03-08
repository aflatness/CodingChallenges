/*
Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k. If such a subset cannot be made, then return null.

Integers can appear more than once in the list. You may assume all numbers in the list are positive.

For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.
*/

const sumToK = (arr, k, values = []) => {
  let found = false;
  let total = values.reduce((m, v) => m += v, 0)
  if (total === k) {
    return total;
  }
  if (total > k) {
    return false;
  }
  arr.forEach((v, i) => {
    if (total + v <= k && !found) {
      const res = sumToK(arr.slice(i + 1), k, [...values, v]);
      if (res === k) {
        values = [...values, v];
        found = true;
      }
      if (Array.isArray(res)) {
        values = res;
        found = true;
      }
    }
  });
  return found ? values : null;
}