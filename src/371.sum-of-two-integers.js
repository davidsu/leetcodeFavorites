/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 *
 * https://leetcode.com/problems/sum-of-two-integers/description/
 *
 * algorithms
 * Easy (50.64%)
 * Total Accepted:    180.2K
 * Total Submissions: 355.8K
 * Testcase Example:  '1\n2'
 *
 * Calculate the sum of two integers a and b, but you are not allowed to use
 * the operator + and -.
 *
 *
 * Example 1:
 *
 *
 * Input: a = 1, b = 2
 * Output: 3
 *
 *
 *
 * Example 2:
 *
 *
 * Input: a = -2, b = 3
 * Output: 1
 *
 *
 *
 *
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// https://leetcode.com/problems/sum-of-two-integers/discuss/606544/Javascript%3A-Very-detailed-explanation-with-two-code-versions.-Enjoy!
const getSum = (a, b) => (b ? getSum(a ^ b, (a & b) << 1) : a)

module.exports = {
  getSum
}
