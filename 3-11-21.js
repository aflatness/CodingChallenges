// Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7 (inclusive).

const rand7 = () => {
  let num = rand5() + rand5();
  while (num > 7) {
    num = rand5() + rand5();
  }
  return num;
}

const rand5 = () => Math.ceil(Math.random() * 5);

console.log(rand7());