/*
 * @lc app=leetcode id=791 lang=javascript
 *
 * [791] Custom Sort String
 *
 * https://leetcode.com/problems/custom-sort-string/description/
 *
 * algorithms
 * Medium (65.72%)
 * Total Accepted:    62.8K
 * Total Submissions: 95.6K
 * Testcase Example:  '"cba"\n"abcd"'
 *
 * S and T are strings composed of lowercase letters. In S, no letter occurs
 * more than once.
 *
 * S was sorted in some custom order previously. We want to permute the
 * characters of T so that they match the order that S was sorted. More
 * specifically, if x occurs before y in S, then x should occur before y in the
 * returned string.
 *
 * Return any permutation of T (as a string) that satisfies this property.
 *
 *
 * Example :
 * Input:
 * S = "cba"
 * T = "abcd"
 * Output: "cbad"
 * Explanation:
 * "a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b",
 * and "a".
 * Since "d" does not appear in S, it can be at any position in T. "dcba",
 * "cdba", "cbda" are also valid outputs.
 *
 *
 *
 *
 * Note:
 *
 *
 * S has length at most 26, and no character is repeated in S.
 * T has length at most 200.
 * S and T consist of lowercase letters only.
 *
 *
 */
/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
const customSortString = function (S, T) {
  const map = Array.prototype.reduce.call(S, (m, char, i) => m.set(char, i), new Map())
  return T.split('')
    .sort((a, b) => (map.has(a) && map.has(b) ? map.get(a) - map.get(b) : map.has(b) ? 1 : -1))
    .join('')
}

module.exports = {
  customSortString
}
