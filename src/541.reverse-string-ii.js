/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 *
 * https://leetcode.com/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (47.92%)
 * Total Accepted:    83.7K
 * Total Submissions: 174.7K
 * Testcase Example:  '"abcdefg"\n2'
 *
 *
 * Given a string and an integer k, you need to reverse the first k characters
 * for every 2k characters counting from the start of the string. If there are
 * less than k characters left, reverse all of them. If there are less than 2k
 * but greater than or equal to k characters, then reverse the first k
 * characters and left the other as original.
 *
 *
 * Example:
 *
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 *
 *
 *
 * Restrictions:
 *
 * ⁠The string consists of lower English letters only.
 * ⁠Length of the given string and k will in the range [1, 10000]
 *
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) =>
  s
    .replace(new RegExp(`(.{${k}})`, 'g'), '$1,')
    .split(',')
    .map((str, i) => (i % 2 ? str : str.split('').reverse().join('')))
    .join('')

module.exports = {
  reverseStr
}
