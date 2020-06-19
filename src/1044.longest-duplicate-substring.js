/*
 * @lc app=leetcode id=1044 lang=javascript
 *
 * [1044] Longest Duplicate Substring
 *
 * https://leetcode.com/problems/longest-duplicate-substring/description/
 *
 * algorithms
 * Hard (25.77%)
 * Total Accepted:    9K
 * Total Submissions: 34.9K
 * Testcase Example:  '"banana"'
 *
 * Given a string S, consider all duplicated substrings: (contiguous)
 * substrings of S that occur 2 or more times.  (The occurrences may overlap.)
 *
 * Return any duplicated substring that has the longest possible length.  (If S
 * does not have a duplicated substring, the answer is "".)
 *
 *
 *
 * Example 1:
 *
 *
 * Input: "banana"
 * Output: "ana"
 *
 *
 * Example 2:
 *
 *
 * Input: "abcd"
 * Output: ""
 *
 *
 *
 *
 * Note:
 *
 *
 * 2 <= S.length <= 10^5
 * S consists of lowercase English letters.
 *
 *
 */
/**
 * @param {string} S
 * @return {string}
 */
// TODO: time limit exceeded
function calc(S, start1, start2) {
  let len = 1
  while (start2 + len < S.length && S[start1 + len] === S[start2 + len]) len++
  return len
}
const longestDupSubstring = S => {
  const map = Array.prototype.reduce.call(
    S,
    (res, char, i) => {
      res[char] = res[char] || []
      res[char].push(i)
      return res
    },
    {}
  )
  let result = ''
  for (const idxs of Object.values(map)) {
    for (let i = 1; i < idxs.length; i++) {
      for (let j = 0; j + i < idxs.length; j++) {
        const [start1, start2] = [idxs[i], idxs[j]]
        if (S.length - start2 > result.length) {
          const len = calc(S, start1, start2)
          if (len > result.length) {
            result = S.substring(start1, start1 + len)
          }
        }
      }
    }
  }
  require('fs').writeFileSync('/tmp/a', result)
  return result
}

module.exports = {
  longestDupSubstring
}
