/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 *
 * https://leetcode.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (26.37%)
 * Total Accepted:    216.9K
 * Total Submissions: 822.8K
 * Testcase Example:  '"(()"'
 *
 * Given a string containing just the characters '(' and ')', find the length
 * of the longest valid (well-formed) parentheses substring.
 *
 * Example 1:
 *
 *
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 *
 *
 * Example 2:
 *
 *
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  const current = s.split('').map(() => 0);
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== ')') {
      current[i] = 0;
      continue;
    }
    if (s[i - 1] === '(') {
      current[i] = 2 + (current[i - 2] || 0);
    }
    if (current[i - 1] && s[i - current[i - 1] - 1] === '(') {
      current[i] = current[i - 1] + 2;
    }
    current[i] = current[i] + (current[i - current[i]] || 0);
  }
  return Math.max(...current, 0);
}

module.exports = {
  longestValidParentheses
};
