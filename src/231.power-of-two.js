/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 *
 * https://leetcode.com/problems/power-of-two/description/
 *
 * algorithms
 * Easy (43.01%)
 * Total Accepted:    289.7K
 * Total Submissions: 673.5K
 * Testcase Example:  '1'
 *
 * Given an integer, write a function to determine if it is a power of two.
 *
 * Example 1:
 *
 *
 * Input: 1
 * Output: true
 * Explanation: 2^0 = 1
 *
 *
 * Example 2:
 *
 *
 * Input: 16
 * Output: true
 * Explanation: 2^4 = 16
 *
 * Example 3:
 *
 *
 * Input: 218
 * Output: false
 *
 */
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  let low = 0
  let high = 64
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const curr = Math.pow(2, mid)
    if (curr === n) return true
    if (curr < n) low = mid + 1
    else high = mid - 1
  }
  return false
}

const bitwise = n => n > 0 && !(n & (n - 1))

module.exports = {
  isPowerOfTwo,
  bitwise
}
