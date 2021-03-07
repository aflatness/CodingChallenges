/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
*/

var maxProfit = function(prices) {
  let profit = 0;
  let bought = null;
  for (let i = 0; i < prices.length; i++) {
      if (bought === null && prices[i] < prices[i + 1]) {
          bought = prices[i];
      }
      if (bought !== null && (prices[i] > prices[i + 1] || i + 1 === prices.length)) {
          profit += (prices[i] - bought);
          bought = null;
      }
  }
  return profit;
};