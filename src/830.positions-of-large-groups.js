/*
 * @lc app=leetcode id=830 lang=javascript
 *
 * [830] Positions of Large Groups
 *
 * https://leetcode.com/problems/positions-of-large-groups/description/
 *
 * algorithms
 * Easy (49.15%)
 * Total Accepted:    40.5K
 * Total Submissions: 82.4K
 * Testcase Example:  '"abbxxxxzzy"'
 *
 * In a string S of lowercase letters, these letters form consecutive groups of
 * the same character.
 *
 * For example, a string like S = "abbxxxxzyy" has the groups "a", "bb",
 * "xxxx", "z" and "yy".
 *
 * Call a group large if it has 3 or more characters.  We would like the
 * starting and ending positions of every large group.
 *
 * The final answer should be in lexicographic order.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: "abbxxxxzzy"
 * Output: [[3,6]]
 * Explanation: "xxxx" is the single large group with starting  3 and ending
 * positions 6.
 *
 *
 * Example 2:
 *
 *
 * Input: "abc"
 * Output: []
 * Explanation: We have "a","b" and "c" but no large group.
 *
 *
 * Example 3:
 *
 *
 * Input: "abcdddeeeeaabbbcd"
 * Output: [[3,5],[6,9],[12,14]]
 *
 *
 *
 * Note:  1 <= S.length <= 1000
 *
 */
/**
 * @param {string} S
 * @return {number[][]}
 */
const largeGroupPositions = function (S) {
  const result = []
  for (let i = 0; i < S.length; i++) {
    const char = S[i]
    let j = i
    while (S[j + 1] === char) j++
    if (j - i > 1) result.push([i, j])
    i = j
  }
  return result
}
const largeGroupPositions1 = S =>
  Array.prototype.reduce.call(
    S + 'A',
    ({ start, result }, char, i) => {
      if (char !== S[start]) {
        if (i - start > 2) result.push([start, i - 1])
        start = i
      }
      return { result, start }
    },
    { start: 0, result: [] }
  ).result

const regexBased = S => {
  const regex = /(\w)\1{2,}/g
  const result = []
  let curr
  while ((curr = regex.exec(S))) {
    result.push([curr.index, curr.index + curr[0].length - 1])
  }
  return result
}
module.exports = {
  regexBased,
  largeGroupPositions1,
  largeGroupPositions
}
