/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (48.06%)
 * Total Accepted:    272.3K
 * Total Submissions: 566.5K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the k^th index row of the
 * Pascal's triangle.
 *
 * Note that the row index starts from 0.
 *
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 *
 * Example:
 *
 *
 * Input: 3
 * Output: [1,3,3,1]
 *
 *
 * Follow up:
 *
 * Could you optimize your algorithm to use only O(k) extra space?
 *
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  let [last, next] = [new Array(rowIndex + 1).fill(0), new Array(rowIndex + 1).fill(0)]
  last[0] = 1
  while (last[rowIndex] === 0) {
    for (let i = 0; last[i - 1] !== 0; i++) {
      next[i] = last[i] + (last[i - 1] || 0)
    }
    ;[next, last] = [last, next]
  }
  return last
}

module.exports = {
  getRow
}
