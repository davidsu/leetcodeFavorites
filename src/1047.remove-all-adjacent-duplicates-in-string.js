/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 *
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/
 *
 * algorithms
 * Easy (67.82%)
 * Total Accepted:    68.7K
 * Total Submissions: 101.3K
 * Testcase Example:  '"abbaca"'
 *
 * Given a string S of lowercase letters, a duplicate removal consists of
 * choosing two adjacent and equal letters, and removing them.
 *
 * We repeatedly make duplicate removals on S until we no longer can.
 *
 * Return the final string after all such duplicate removals have been made.
 * It is guaranteed the answer is unique.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: "abbaca"
 * Output: "ca"
 * Explanation:
 * For example, in "abbaca" we could remove "bb" since the letters are adjacent
 * and equal, and this is the only possible move.  The result of this move is
 * that the string is "aaca", of which only "aa" is possible, so the final
 * string is "ca".
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= S.length <= 20000
 * S consists only of English lowercase letters.
 *
 */
/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates2 = s => (/(.)\1/.test(s) ? removeDuplicates2(s.replace(/(.)\1/, '')) : s)
const removeDuplicates = s => {
  const result = []
  for (const c of s) {
    if (c === result[result.length - 1]) result.pop()
    else result.push(c)
  }
  return result.join('')
}

module.exports = {
  removeDuplicates,
  removeDuplicates2
}
