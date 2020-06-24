/*
 * @lc app=leetcode id=1209 lang=javascript
 *
 * [1209] Remove All Adjacent Duplicates in String II
 *
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/description/
 *
 * algorithms
 * Medium (56.26%)
 * Total Accepted:    26.4K
 * Total Submissions: 46.9K
 * Testcase Example:  '"abcd"\n2'
 *
 * Given a string s, a k duplicate removal consists of choosing k adjacent and
 * equal letters from s and removing them causing the left and the right side
 * of the deleted substring to concatenate together.
 *
 * We repeatedly make k duplicate removals on s until we no longer can.
 *
 * Return the final string after all such duplicate removals have been made.
 *
 * It is guaranteed that the answer is unique.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abcd", k = 2
 * Output: "abcd"
 * Explanation: There's nothing to delete.
 *
 * Example 2:
 *
 *
 * Input: s = "deeedbbcccbdaa", k = 3
 * Output: "aa"
 * Explanation:
 * First delete "eee" and "ccc", get "ddbbbdaa"
 * Then delete "bbb", get "dddaa"
 * Finally delete "ddd", get "aa"
 *
 * Example 3:
 *
 *
 * Input: s = "pbbcggttciiippooaais", k = 2
 * Output: "ps"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * 2 <= k <= 10^4
 * s only contains lower case English letters.
 *
 *
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// TODO: both solutions are bad
// find a O(n) time and space
const removeDuplicates = function (s, k) {
  if (k === 0) return s
  if (k === 1) return ''
  const reg = new RegExp(`(.)\\1{${k - 1}}`, 'g')
  let a = s
  while ((a = s.replace(reg, '')) !== s) s = a
  return s
}
const removeDuplicates2 = function (s, k) {
  const map = Array.from({ length: s.length }, (_, i) => i + 1)
  map[-1] = 0
  let doWork = true
  while (doWork) {
    doWork = false
    let count = 0
    let start = -1
    let end = -1
    let prev = -1
    while (end < s.length) {
      if (s[start] === s[end]) {
        count++
        if (count === k) {
          doWork = true
          map[prev] = map[end]
          start = end = map[end]
          count = 0
        } else {
          end = map[end]
        }
      } else {
        if (start === end && prev === start) {
          start = end = map[end]
        }
        while (start !== end) {
          prev = start
          start = map[start]
        }
        count = 0
      }
    }
  }
  const result = []
  let j = map[-1]
  while (j < map.length) {
    result.push(s[j])
    j = map[j]
  }
  return result.join('')
}

module.exports = {
  removeDuplicates,
  removeDuplicates2
}
