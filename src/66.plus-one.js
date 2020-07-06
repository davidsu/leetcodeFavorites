/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (42.21%)
 * Total Accepted:    616.2K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 *
 * Example 1:
 *
 *
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 *
 * Example 2:
 *
 *
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 *
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let carry = 1
  let i = digits.length
  while (carry && --i >= 0) {
    const sum = digits[i] + 1
    digits[i] = sum % 10
    carry = Math.floor(sum / 10)
  }
  if (carry) return [1, ...digits]
  return digits
}

module.exports = {
  plusOne
}
