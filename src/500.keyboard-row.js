/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 *
 * https://leetcode.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (64.25%)
 * Total Accepted:    108.5K
 * Total Submissions: 168.8K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * Given a List of words, return the words that can be typed using letters of
 * alphabet on only one row's of American keyboard like the image
 * below.
 *
 *
 *
 *
 *
 *
 * Example:
 *
 *
 * Input: ["Hello", "Alaska", "Dad", "Peace"]
 * Output: ["Alaska", "Dad"]
 *
 *
 *
 *
 * Note:
 *
 *
 * You may use one character in the keyboard more than once.
 * You may assume the input string will only contain letters of alphabet.
 *
 *
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
  const sets = [
    'QWERTYUIOP{}qwertyuiop[]',
    'asdfghjkl;\'\\ASDFGHJKL:"|',
    'ZXCVBNM<>?zxcvbnm,./',
    '1234567890--=!@#$%^&*()____+~`'
  ].map(a => new Set(a.split('')))
  return words.filter(w => sets.find(s => w.split('').every(c => s.has(c))))
}

module.exports = {
  findWords
}
