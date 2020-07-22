/*
 * @lc app=leetcode id=1405 lang=javascript
 *
 * [1405] Longest Happy String
 *
 * https://leetcode.com/problems/longest-happy-string/description/
 *
 * algorithms
 * Medium (47.91%)
 * Total Accepted:    9.4K
 * Total Submissions: 19.6K
 * Testcase Example:  '1\n1\n7'
 *
 * A string is called happy if it does not have any of the strings 'aaa', 'bbb'
 * or 'ccc' as a substring.
 *
 * Given three integers a, b and c, return any string s, which satisfies
 * following conditions:
 *
 *
 * s is happy and longest possible.
 * s contains at most a occurrences of the letter 'a', at most b occurrences of
 * the letter 'b' and at most c occurrences of the letter 'c'.
 * s will only contain 'a', 'b' and 'c' letters.
 *
 *
 * If there is no such string s return the empty string "".
 *
 *
 * Example 1:
 *
 *
 * Input: a = 1, b = 1, c = 7
 * Output: "ccaccbcc"
 * Explanation: "ccbccacc" would also be a correct answer.
 *
 *
 * Example 2:
 *
 *
 * Input: a = 2, b = 2, c = 1
 * Output: "aabbc"
 *
 *
 * Example 3:
 *
 *
 * Input: a = 7, b = 1, c = 0
 * Output: "aabaa"
 * Explanation: It's the only correct answer in this case.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= a, b, c <= 100
 * a + b + c > 0
 *
 *
 */
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
const longestDiverseString = function (a, b, c) {
  const len = a + b + c
  const chars = [
    ['a', a],
    ['b', b],
    ['c', c]
  ]
  const result = []
  while (result.length < len) {
    const i = result.length
    chars.sort(([c1, c1count], [c2, c2count]) => c2count - c1count)
    const char =
      result[i - 1] === result[i - 2] && result[i - 1] === chars[0][0] ? chars[1] : chars[0]
    if (char[1] === 0) break
    result.push(char[0])
    char[1]--
  }
  return result.join('')
}

module.exports = {
  longestDiverseString
}
