/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 *
 * https://leetcode.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (36.63%)
 * Total Accepted:    182.1K
 * Total Submissions: 497.2K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * Given a pattern and a string str, find if str follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in str.
 *
 * Example 1:
 *
 *
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 *
 * Example 2:
 *
 *
 * Input:pattern = "abba", str = "dog cat cat fish"
 * Output: false
 *
 * Example 3:
 *
 *
 * Input: pattern = "aaaa", str = "dog cat cat dog"
 * Output: false
 *
 * Example 4:
 *
 *
 * Input: pattern = "abba", str = "dog dog dog dog"
 * Output: false
 *
 * Notes:
 * You may assume pattern contains only lowercase letters, and str contains
 * lowercase letters that may be separated by a single space.
 *
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const valid = (key, value, map) => {
  if (map[key] && map[key] !== value) {
    return false
  }
  return true
}

const wordPattern = function (pattern, str) {
  const strArr = str.split(' ')
  const map = {}
  const invert = {}
  const addMap = (k1, k2) => {
    map[k1] = k2
    invert[k2] = k1
  }
  for (let i = 0; i < strArr.length; i++) {
    if (!valid(strArr[i], pattern[i], map) || !valid(pattern[i], strArr[i], invert)) {
      return false
    }
    addMap(strArr[i], pattern[i])
  }
  return pattern.length === strArr.length
}

module.exports = {
  wordPattern
}
