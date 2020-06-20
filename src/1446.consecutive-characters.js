/*
 * @lc app=leetcode id=1446 lang=javascript
 *
 * [1446] Consecutive Characters
 *
 * https://leetcode.com/problems/consecutive-characters/description/
 *
 * algorithms
 * Easy (63.26%)
 * Total Accepted:    9.7K
 * Total Submissions: 15.4K
 * Testcase Example:  '"leetcode"'
 *
 * Given a string s, the power of the string is the maximum length of a
 * non-empty substring that contains only one unique character.
 *
 * Return the power of the string.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "leetcode"
 * Output: 2
 * Explanation: The substring "ee" is of length 2 with the character 'e'
 * only.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "abbcccddddeeeeedcba"
 * Output: 5
 * Explanation: The substring "eeeee" is of length 5 with the character 'e'
 * only.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "triplepillooooow"
 * Output: 5
 *
 *
 * Example 4:
 *
 *
 * Input: s = "hooraaaaaaaaaaay"
 * Output: 11
 *
 *
 * Example 5:
 *
 *
 * Input: s = "tourist"
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 500
 * s contains only lowercase English letters.
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
const maxPower = function (s) {
  let max = 0
  let curr = 0
  let char
  for (const c of s) {
    if (c !== char) {
      max = Math.max(max, curr)
      curr = 1
      char = c
    } else {
      curr++
    }
  }
  return Math.max(max, curr)
}

const regExBased = s =>
  Math.max(
    ...s
      .replace(/(\w)\1*/g, matched => `${matched.length},`)
      .split(',')
      .map(a => Number(a) || 0)
  )

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#Description
// for why this split works the way it does
const betterRegExBased = s =>
  s.split(/((\w)\2*)/).reduce((max, str) => Math.max(max, str.length), 0)
const sameAsAboveWithNamedGroups = s =>
  s.split(/((?<char>\w)\k<char>*)/).reduce((max, str) => Math.max(max, str.length), 0)

module.exports = {
  maxPower,
  regExBased,
  betterRegExBased,
  sameAsAboveWithNamedGroups
}
