/*
 * @lc app=leetcode id=967 lang=javascript
 *
 * [967] Numbers With Same Consecutive Differences
 *
 * https://leetcode.com/problems/numbers-with-same-consecutive-differences/description/
 *
 * algorithms
 * Medium (39.13%)
 * Total Accepted:    13.4K
 * Total Submissions: 34.3K
 * Testcase Example:  '3\n7'
 *
 * Return all non-negative integers of length N such that the absolute
 * difference between every two consecutive digits is K.
 *
 * Note that every number in the answer must not have leading zeros except for
 * the number 0 itself. For example, 01 has one leading zero and is invalid,
 * but 0 is valid.
 *
 * You may return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: N = 3, K = 7
 * Output: [181,292,707,818,929]
 * Explanation: Note that 070 is not a valid number, because it has leading
 * zeroes.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: N = 2, K = 1
 * Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= N <= 9
 * 0 <= K <= 9
 *
 *
 */
/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
const numsSameConsecDiff = function (N, K) {
  let result = []
  if (K === 0 && N > 1) {
    for (let i = 1; i < 10; i++) {
      let num = i
      for (let j = 1; j < N; j++) {
        num = num * 10 + i
      }
      result.push(num)
    }
    return result
  }
  for (let i = 1; i < 10; i++) {
    const next = [i]
    for (let len = 1; len < N; len++) {
      let loops = next.length
      while (loops-- && next.length) {
        const curr = next.shift()
        const prev = curr % 10
        const down = prev - K
        const up = prev + K
        if (down >= 0) {
          next.push(curr * 10 + down)
        }
        if (up < 10) {
          next.push(curr * 10 + prev + K)
        }
      }
    }
    result = result.concat(next)
  }
  if (N === 1) return [0, ...result]
  return result
}

module.exports = {
  numsSameConsecDiff
}
