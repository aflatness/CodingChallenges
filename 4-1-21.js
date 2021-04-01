//Assume you have access to a function toss_biased() which returns 0 or 1 with a probability that's not 50-50 (but also not 0-100 or 100-0). You do not know the bias of the coin.

//Write a function to simulate an unbiased coin toss.

const toss_biased = (biase1) => {
  const biase2 = Math.random();

  return biase1 < biase2 ? 0 : 1;
}

const toss_unbiased = () => {
  const biase = Math.random(); //.657

  let coin1 = toss_biased(biase);
  let coin2 = toss_biased(biase);

  while (coin1 === coin2) {
    coin1 = toss_biased(biase);
    coin2 = toss_biased(biase);
  }

  return coin1;
}