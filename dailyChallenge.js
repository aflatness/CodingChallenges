//input Array of all whole ints
//Output: Lowest positive number
//EdgeCases: //empty array, return 1

const findSmallest = array => {
  return array.reduce((m, i) => {
    return i === m ? m + 1 : m;
  }, 1)
}

let array = [];
for (i = 1; i <= 100000; i++) {
  array.push(i);
}
console.log(findSmallest(array));
