/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change 2
 *
 * https://leetcode.com/problems/coin-change-2/description/
 *
 * algorithms
 * Medium (47.55%)
 * Total Accepted:    89.6K
 * Total Submissions: 188.4K
 * Testcase Example:  '5\n[1,2,5]'
 *
 * You are given coins of different denominations and a total amount of money.
 * Write a function to compute the number of combinations that make up that
 * amount. You may assume that you have infinite number of each kind of
 * coin.
 *
 *
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: amount = 5, coins = [1, 2, 5]
 * Output: 4
 * Explanation: there are four ways to make up the amount:
 * 5=5
 * 5=2+2+1
 * 5=2+1+1+1
 * 5=1+1+1+1+1
 *
 *
 * Example 2:
 *
 *
 * Input: amount = 3, coins = [2]
 * Output: 0
 * Explanation: the amount of 3 cannot be made up just with coins of 2.
 *
 *
 * Example 3:
 *
 *
 * Input: amount = 10, coins = [10]
 * Output: 1
 *
 *
 *
 *
 * Note:
 *
 * You can assume that
 *
 *
 * 0 <= amount <= 5000
 * 1 <= coin <= 5000
 * the number of coins is less than 500
 * the answer is guaranteed to fit into signed 32-bit integer
 *
 *
 */
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// this is a terrible O(n^3) solution, can be made in O(n^2)
const change = function (amount, coins) {
  if (!amount) return 1
  if (!coins.length) return 0
  const dp = new Array(coins.length).fill(0).map(() => new Array(amount + 1).fill(0))
  for (let coinIdx = 0; coinIdx < coins.length; coinIdx++) {
    const coin = coins[coinIdx]
    for (let sum = 1; sum <= amount; sum++) {
      let result = 0
      if (sum === coin) {
        result = 1
      } else if (sum > coin) {
        const prevSum = sum - coin
        for (let prevIdx = 0; prevIdx <= coinIdx; prevIdx++) {
          result += dp[prevIdx][prevSum]
        }
      }
      dp[coinIdx][sum] = result
    }
  }
  let result = 0
  for (const end of dp) {
    result += end[amount]
  }
  return result
}

module.exports = {
  change
}
