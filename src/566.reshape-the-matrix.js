/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 *
 * https://leetcode.com/problems/reshape-the-matrix/description/
 *
 * algorithms
 * Easy (60.13%)
 * Total Accepted:    96.2K
 * Total Submissions: 160K
 * Testcase Example:  '[[1,2],[3,4]]\n1\n4'
 *
 * In MATLAB, there is a very useful function called 'reshape', which can
 * reshape a matrix into a new one with different size but keep its original
 * data.
 *
 *
 *
 * You're given a matrix represented by a two-dimensional array, and two
 * positive integers r and c representing the row number and column number of
 * the wanted reshaped matrix, respectively.
 *
 * ⁠The reshaped matrix need to be filled with all the elements of the original
 * matrix in the same row-traversing order as they were.
 *
 *
 *
 * If the 'reshape' operation with given parameters is possible and legal,
 * output the new reshaped matrix; Otherwise, output the original matrix.
 *
 *
 * Example 1:
 *
 * Input:
 * nums =
 * [[1,2],
 * ⁠[3,4]]
 * r = 1, c = 4
 * Output:
 * [[1,2,3,4]]
 * Explanation:The row-traversing of nums is [1,2,3,4]. The new reshaped matrix
 * is a 1 * 4 matrix, fill it row by row by using the previous list.
 *
 *
 *
 * Example 2:
 *
 * Input:
 * nums =
 * [[1,2],
 * ⁠[3,4]]
 * r = 2, c = 4
 * Output:
 * [[1,2],
 * ⁠[3,4]]
 * Explanation:There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So
 * output the original matrix.
 *
 *
 *
 * Note:
 *
 * The height and width of the given matrix is in range [1, 100].
 * The given r and c are all positive.
 *
 *
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// eslint-disable-next-line no-extend-native
Array.prototype.flat = function () {
  const result = []
  for (const a of this) {
    result.push(...a)
  }
  return result
}
const matrixReshape = function (nums, r, c) {
  if (nums.length * nums[0].length !== r * c) return nums
  const result = []
  const working = nums.flat()
  while (working.length) result.push(working.splice(0, c))
  return result
}

module.exports = {
  testFunc: matrixReshape
}
