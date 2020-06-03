/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 *
 * https://leetcode.com/problems/reverse-only-letters/description/
 *
 * algorithms
 * Easy (57.55%)
 * Total Accepted:    52.5K
 * Total Submissions: 91.2K
 * Testcase Example:  '"ab-cd"'
 *
 * Given a string S, return the "reversed" string where all characters that are
 * not a letter stay in the same place, and all letters reverse their
 * positions.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: "ab-cd"
 * Output: "dc-ba"
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "a-bC-dEf-ghIj"
 * Output: "j-Ih-gfE-dCba"
 *
 *
 *
 * Example 3:
 *
 *
 * Input: "Test1ng-Leet=code-Q!"
 * Output: "Qedo1ct-eeLg=ntse-T!"
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * S.length <= 100
 * 33 <= S[i].ASCIIcode <= 122
 * S doesn't contain \ or "
 *
 *
 *
 *
 *
 */
/**
 * @param {string} S
 * @return {string}
 */
const isLetterRegex = /[a-zA-Z]/
const isLetter = c => isLetterRegex.test(c)
const reverseOnlyLetters = str => {
  const arr = str.split('')
  let low = 0
  let high = arr.length - 1
  while (low < high) {
    if (isLetter(arr[low]) && isLetter(arr[high])) {
      ;[arr[low], arr[high]] = [arr[high], arr[low]]
      low++
      high--
    } else {
      if (!isLetter(arr[low])) low++
      if (!isLetter(arr[high])) high--
    }
  }
  return arr.join('')
}

module.exports = {
  reverseOnlyLetters
}
