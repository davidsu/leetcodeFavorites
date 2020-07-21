/*
 * @lc app=leetcode id=859 lang=javascript
 *
 * [859] Buddy Strings
 *
 * https://leetcode.com/problems/buddy-strings/description/
 *
 * algorithms
 * Easy (27.50%)
 * Total Accepted:    45.9K
 * Total Submissions: 167.1K
 * Testcase Example:  '"ab"\n"ba"'
 *
 * Given two strings A and B of lowercase letters, return true if and only if
 * we can swap two letters in A so that the result equals B.
 *
 *
 *
 * Example 1:
 *
 *
 *
 * Input: A = "ab", B = "ba"
 * Output: true
 *
 *
 *
 * Example 2:
 *
 *
 * Input: A = "ab", B = "ab"
 * Output: false
 *
 *
 *
 * Example 3:
 *
 *
 * Input: A = "aa", B = "aa"
 * Output: true
 *
 *
 *
 * Example 4:
 *
 *
 * Input: A = "aaaaaaabc", B = "aaaaaaacb"
 * Output: true
 *
 *
 *
 * Example 5:
 *
 *
 * Input: A = "", B = "aa"
 * Output: false
 *
 *
 *
 *
 *
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= A.length <= 20000
 * 0 <= B.length <= 20000
 * A and B consist only of lowercase letters.
 *
 *
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

const buddyStrings = function (A, B) {
  if (A.length !== B.length || A.length < 2) return false
  if (A === B) return A.length !== new Set(A.split('')).size
  const diff = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) diff.push(i)
  }
  if (diff.length !== 2) return false
  return A[diff[1]] === B[diff[0]] && A[diff[0]] === B[diff[1]]
}

module.exports = {
  buddyStrings
}
