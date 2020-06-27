/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 *
 * https://leetcode.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (45.66%)
 * Total Accepted:    286.1K
 * Total Submissions: 619.2K
 * Testcase Example:  '12'
 *
 * Given a positive integer n, find the least number of perfect square numbers
 * (for example, 1, 4, 9, 16, ...) which sum to n.
 *
 * Example 1:
 *
 *
 * Input: n = 12
 * Output: 3
 * Explanation: 12 = 4 + 4 + 4.
 *
 * Example 2:
 *
 *
 * Input: n = 13
 * Output: 2
 * Explanation: 13 = 4 + 9.
 */
/**
 * @param {number} n
 * @return {number}
 */

const numSquares = function (n) {
  const dp = Array.from({ length: n + 1 }, () => n)
  dp[0] = 0
  dp[1] = 1
  for (let i = 1; i <= n; i++) {
    const sqrt = Math.sqrt(i)
    for (let j = 1; j <= sqrt; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }
  return dp[n]
}

module.exports = {
  numSquares
}
