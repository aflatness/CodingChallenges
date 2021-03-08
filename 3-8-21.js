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