/*
 * @lc app=leetcode id=357 lang=javascript
 *
 * [357] Count Numbers with Unique Digits
 *
 * https://leetcode.com/problems/count-numbers-with-unique-digits/description/
 *
 * algorithms
 * Medium (48.08%)
 * Total Accepted:    75.4K
 * Total Submissions: 156.8K
 * Testcase Example:  '2'
 *
 * Given a non-negative integer n, count all numbers with unique digits, x,
 * where 0 ≤ x < 10^n.
 *
 *
 * Example:
 *
 *
 * Input: 2
 * Output: 91
 * Explanation: The answer should be the total numbers in the range of 0 ≤ x <
 * 100,
 * excluding 11,22,33,44,55,66,77,88,99
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = function (n) {
  let fact = 9
  let result = 1
  for (let i = 9; i >= 0 && n > 0; i--, n--) {
    result += fact
    fact *= i
  }
  return result
}

module.exports = {
  countNumbersWithUniqueDigits
}
