/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 *
 * https://leetcode.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (22.91%)
 * Total Accepted:    342.2K
 * Total Submissions: 1.4M
 * Testcase Example:  '"12"'
 *
 * A message containing letters from A-Z is being encoded to numbers using the
 * following mapping:
 *
 *
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 *
 *
 * Given a non-empty string containing only digits, determine the total number
 * of ways to decode it.
 *
 * Example 1:
 *
 *
 * Input: "12"
 * Output: 2
 * Explanation: It could be decoded as "AB" (1 2) or "L" (12).
 *
 *
 * Example 2:
 *
 *
 * Input: "226"
 * Output: 3
 * Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2
 * 6).
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
  if (!s || /(^0+|[03-9]0)/.test(s)) return 0;
  const map = s.split('').map(() => 1);
  map.push(1);
  for (let i = s.length - 1; i >= 0; i--) {
    const num = parseInt(s[i]);
    const joined = num * 10 + parseInt(s[i + 1]);
    if (num === 0) {
      map[i] = 0;
    } else if (joined > 9 && joined < 27) {
      map[i] = map[i + 1] + map[i + 2];
    } else {
      map[i] = map[i + 1];
    }
  }
  return map[0];
};

module.exports = {
  numDecodings
};
