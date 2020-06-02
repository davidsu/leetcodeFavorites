/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 *
 * https://leetcode.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (41.43%)
 * Total Accepted:    213.1K
 * Total Submissions: 514.4K
 * Testcase Example:  '16'
 *
 * Given a positive integer num, write a function which returns True if num is
 * a perfect square else False.
 *
 * Follow up: Do not use any built-in library function such as sqrt.
 *
 *
 * Example 1:
 * Input: num = 16
 * Output: true
 * Example 2:
 * Input: num = 14
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= num <= 2^31 - 1
 *
 *
 */
/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
  let low = 1
  let high = num
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const sqr = mid * mid
    if (sqr < num) {
      low = mid + 1
    } else if (sqr > num) {
      high = mid - 1
    } else {
      return true
    }
  }
  return false
}

module.exports = {
  isPerfectSquare
}
