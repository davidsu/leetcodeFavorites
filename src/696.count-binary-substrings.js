/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 *
 * https://leetcode.com/problems/count-binary-substrings/description/
 *
 * algorithms
 * Easy (54.27%)
 * Total Accepted:    35K
 * Total Submissions: 64.4K
 * Testcase Example:  '"00110"'
 *
 * Give a string s, count the number of non-empty (contiguous) substrings that
 * have the same number of 0's and 1's, and all the 0's and all the 1's in
 * these substrings are grouped consecutively.
 *
 * Substrings that occur multiple times are counted the number of times they
 * occur.
 *
 * Example 1:
 *
 * Input: "00110011"
 * Output: 6
 * Explanation: There are 6 substrings that have equal number of consecutive
 * 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
 * Notice that some of these substrings repeat and are counted the number of
 * times they occur.
 * Also, "00110011" is not a valid substring because all the 0's (and 1's) are
 * not grouped together.
 *
 *
 *
 * Example 2:
 *
 * Input: "10101"
 * Output: 4
 * Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal
 * number of consecutive 1's and 0's.
 *
 *
 *
 * Note:
 * s.length will be between 1 and 50,000.
 * s will only consist of "0" or "1" characters.
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function (s) {
  let idxs = [0, 0]
  let result = 0
  for (let idx = 0; idx < s.length; idx++) {
    if (s[idx] !== s[idx + 1]) {
      const [start, cont] = idxs
      const end = idx + 1
      result += Math.min(cont - start, end - cont)
      idxs = [cont, end]
    }
  }
  return result
}

const countBinarySubstrings2 = s =>
  s
    .replace(/01/g, '0,1')
    .replace(/10/g, '1,0')
    .split(',')
    .reduce((res, a, i, arr) => (i ? res + Math.min(a.length, arr[--i].length) : 0), 0)

module.exports = {
  testFunc: countBinarySubstrings,
  countBinarySubstrings2
}
