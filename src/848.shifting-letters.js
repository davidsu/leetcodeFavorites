/*
 * @lc app=leetcode id=848 lang=javascript
 *
 * [848] Shifting Letters
 *
 * https://leetcode.com/problems/shifting-letters/description/
 *
 * algorithms
 * Medium (44.17%)
 * Total Accepted:    22.5K
 * Total Submissions: 51K
 * Testcase Example:  '"abc"\n[3,5,9]'
 *
 * We have a string S of lowercase letters, and an integer array shifts.
 *
 * Call the shift of a letter, the next letter in the alphabet, (wrapping
 * around so that 'z' becomes 'a').
 *
 * For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
 *
 * Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x
 * times.
 *
 * Return the final string after all such shifts to S are applied.
 *
 * Example 1:
 *
 *
 * Input: S = "abc", shifts = [3,5,9]
 * Output: "rpl"
 * Explanation:
 * We start with "abc".
 * After shifting the first 1 letters of S by 3, we have "dbc".
 * After shifting the first 2 letters of S by 5, we have "igc".
 * After shifting the first 3 letters of S by 9, we have "rpl", the answer.
 *
 *
 * Note:
 *
 *
 * 1 <= S.length = shifts.length <= 20000
 * 0 <= shifts[i] <= 10 ^ 9
 *
 *
 */
/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
const shiftingLetters = function (S, shifts) {
  const a = 'a'.charCodeAt(0)
  const max = 'z'.charCodeAt(0) - a + 1
  for (let i = shifts.length - 2; i >= 0; i--) {
    shifts[i] += shifts[i + 1]
  }
  return Array.prototype.map
    .call(S, (char, i) => String.fromCharCode(((char.charCodeAt(0) - a + shifts[i]) % max) + a))
    .join('')
}

module.exports = {
  shiftingLetters
}
