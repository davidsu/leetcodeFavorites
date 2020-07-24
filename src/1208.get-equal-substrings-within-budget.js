/*
 * @lc app=leetcode id=1208 lang=javascript
 *
 * [1208] Get Equal Substrings Within Budget
 *
 * https://leetcode.com/problems/get-equal-substrings-within-budget/description/
 *
 * algorithms
 * Medium (41.38%)
 * Total Accepted:    14.5K
 * Total Submissions: 35K
 * Testcase Example:  '"abcd"\n"bcdf"\n3'
 *
 * You are given two strings s and t of the same length. You want to change s
 * to t. Changing the i-th character of s to i-th character of t costs |s[i] -
 * t[i]| that is, the absolute difference between the ASCII values of the
 * characters.
 *
 * You are also given an integer maxCost.
 *
 * Return the maximum length of a substring of s that can be changed to be the
 * same as the corresponding substring of twith a cost less than or equal to
 * maxCost.
 *
 * If there is no substring from s that can be changed to its corresponding
 * substring from t, return 0.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abcd", t = "bcdf", maxCost = 3
 * Output: 3
 * Explanation: "abc" of s can change to "bcd". That costs 3, so the maximum
 * length is 3.
 *
 * Example 2:
 *
 *
 * Input: s = "abcd", t = "cdef", maxCost = 3
 * Output: 1
 * Explanation: Each character in s costs 2 to change to charactor in t, so the
 * maximum length is 1.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "abcd", t = "acde", maxCost = 0
 * Output: 1
 * Explanation: You can't make any change, so the maximum length is 1.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, t.length <= 10^5
 * 0 <= maxCost <= 10^6
 * s and t only contain lower case English letters.
 *
 *
 */
/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
const equalSubstring = function (s, t, maxCost) {
  let low = 0
  let max = 0
  let cost = 0
  for (let i = 0; s.length - low + 1 > max && i < s.length; i++) {
    cost += Math.abs(s.charCodeAt(i) - t.charCodeAt(i))
    while (cost > maxCost) {
      cost -= Math.abs(s.charCodeAt(low) - t.charCodeAt(low))
      low++
    }
    max = Math.max(max, i - low + 1)
  }
  return max
}

module.exports = {
  equalSubstring
}
