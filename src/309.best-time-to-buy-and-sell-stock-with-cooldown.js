/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
 *
 * algorithms
 * Medium (46.10%)
 * Total Accepted:    141.4K
 * Total Submissions: 303.9K
 * Testcase Example:  '[1,2,3,0,2]'
 *
 * Say you have an array for which the i^th element is the price of a given
 * stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many
 * transactions as you like (ie, buy one and sell one share of the stock
 * multiple times) with the following restrictions:
 *
 *
 * You may not engage in multiple transactions at the same time (ie, you must
 * sell the stock before you buy again).
 * After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1
 * day)
 *
 *
 * Example:
 *
 *
 * Input: [1,2,3,0,2]
 * Output: 3
 * Explanation: transactions = [buy, sell, cooldown, buy, sell]
 *
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// TODO: O(n) runtime
function calc(prices, start = 0, result = Array(prices.length)) {
  if (start > prices.length - 1) return 0
  if (result[start] !== undefined) return result[start]
  let profit = 0
  for (let i = start + 1; i < result.length; i++) {
    profit = Math.max(profit, prices[i] - prices[start] + calc(prices, i + 2, result))
  }
  result[start] = Math.max(profit, calc(prices, start + 1, result))
  return result[start]
}
const maxProfit = function (prices) {
  const result = Array(prices.length)
  const res = calc(prices, 0, result)
  return res
}

function maxProfit2(prices) {
  const result = new Array(prices.length)
  result[result.length - 1] = 0
  for (let i = prices.length - 2; i >= 0; i--) {
    result[i] = result[i + 1]
    for (let j = i + 1; j < prices.length; j++) {
      result[i] = Math.max(prices[j] - prices[i] + (result[j + 2] || 0), result[i])
    }
  }
  return result[0]
}

module.exports = {
  maxProfit2,
  maxProfit
}
