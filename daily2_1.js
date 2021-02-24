const countDecode = str => {
  let count = 0;
  if (str.length === 1) {
    return count++;
  }
  const digs = str.split('');
  digs.forEach((dig, i) => {
    if (Number(dig) < 3) {
      count += countDecode(digs.slice(1).join(''))
      if (Number(digs[i + 1]) < 7) {
      }
    }
  })
  return count;
}
console.log(countDecode('1111'));