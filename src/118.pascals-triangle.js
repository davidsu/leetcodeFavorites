/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (51.30%)
 * Total Accepted:    362.6K
 * Total Submissions: 706.6K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 *
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 *
 * Example:
 *
 *
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 *
 *
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const get = (arr = [], i) => arr[i] || 0
const generate = function (numRows) {
  const result = new Array(numRows)
  for (let i = 0; i < numRows; i++) {
    result[i] = new Array(i + 1)
      .fill(0)
      .map((val, idx) => get(result[i - 1], idx - 1) + get(result[i - 1], idx) || 1)
  }
  return result
}

module.exports = {
  generate
}
