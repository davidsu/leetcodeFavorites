/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (43.66%)
 * Total Accepted:    466K
 * Total Submissions: 1M
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 * 
 * Constraints:
 * 
 * 
 * Each string consists only of '0' or '1' characters.
 * 1 <= a.length, b.length <= 10^4
 * Each string is either "0" or doesn't contain any leading zero.
 * 
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  if (a.length < b.length) return addBinary(b, a)
  const result = new Array(a.length)
  let carry = 0
  for (let i = a.length - 1, j = b.length - 1; i >= 0; i--, j--) {
	const next = +a[i] + (+b[j] || 0) + carry
	carry = (next & 2) >> 1
	result[i] = next & 1
  }
  if (carry) result.unshift(1)
  return result.join('')
}

module.exports = {
  addBinary
}
