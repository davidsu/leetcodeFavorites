/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 *
 * https://leetcode.com/problems/wildcard-matching/description/
 *
 * algorithms
 * Hard (23.40%)
 * Total Accepted:    216.3K
 * Total Submissions: 903.8K
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string (s) and a pattern (p), implement wildcard pattern
 * matching with support for '?' and '*'.
 *
 *
 * '?' Matches any single character.
 * '*' Matches any sequence of characters (including the empty sequence).
 *
 *
 * The matching should cover the entire input string (not partial).
 *
 * Note:
 *
 *
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters
 * like ? or *.
 *
 *
 * Example 1:
 *
 *
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 *
 *
 * Example 2:
 *
 *
 * Input:
 * s = "aa"
 * p = "*"
 * Output: true
 * Explanation: '*' matches any sequence.
 *
 *
 * Example 3:
 *
 *
 * Input:
 * s = "cb"
 * p = "?a"
 * Output: false
 * Explanation: '?' matches 'c', but the second letter is 'a', which does not
 * match 'b'.
 *
 *
 * Example 4:
 *
 *
 * Input:
 * s = "adceb"
 * p = "*a*b"
 * Output: true
 * Explanation: The first '*' matches the empty sequence, while the second '*'
 * matches the substring "dce".
 *
 *
 * Example 5:
 *
 *
 * Input:
 * s = "acdcb"
 * p = "a*c?b"
 * Output: false
 *
 *
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  const seen = new Set();
  const matchChar = (idxS, idxP) => s[idxS] === p[idxP] && matches(idxS + 1, idxP + 1);
  const matchSingle = (idxS, idxP) => p[idxP] === '?' && matches(idxS + 1, idxP + 1);
  const matchStar = (idxS, idxP) => p[idxP] === '*' && (matches(idxS + 1, idxP) || matches(idxS + 1, idxP + 1) || matches(idxS, idxP + 1));
  const matches = (idxS, idxP) => {
    const key = `${idxS},${idxP}`;
    if (seen.has(key)) return false;
    seen.add(key);
    if (idxS === s.length && idxP === p.length) return true;
    if (idxP === p.length) return false;
    if (idxS === s.length && p[idxP] !== '*') return false;
    if (idxS > s.length) return false;
    return matchChar(idxS, idxP) || matchSingle(idxS, idxP) || matchStar(idxS, idxP);
  };
  return matches(0, 0);
};

module.exports = {
  isMatch
};
