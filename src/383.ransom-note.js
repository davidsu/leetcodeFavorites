/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 *
 * https://leetcode.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (51.79%)
 * Total Accepted:    174.2K
 * Total Submissions: 329K
 * Testcase Example:  '"a"\n"b"'
 *
 *
 * Given an arbitrary ransom note string and another string containing letters
 * from all the magazines, write a function that will return true if the
 * ransom
 * note can be constructed from the magazines ; otherwise, it will return
 * false.
 *
 *
 * Each letter in the magazine string can only be used once in your ransom
 * note.
 *
 *
 * Note:
 * You may assume that both strings contain only lowercase letters.
 *
 *
 *
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 *
 *
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const strToFrequency = (str) =>
  str.split('').reduce((acc, c) => {
    acc[c] = (acc[c] || 0) + 1
    return acc
  }, {})
const canConstruct = function (ransomNote, magazine) {
  const ransomFrequency = strToFrequency(ransomNote)
  const magazineFrequency = strToFrequency(magazine)
  for (const [c, freq] of Object.entries(ransomFrequency)) {
    if (!magazineFrequency[c] || magazineFrequency[c] < freq) {
      return false
    }
  }
  return true
}

module.exports = {
  testFunc: canConstruct
}
