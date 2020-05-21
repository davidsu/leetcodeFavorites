/*
 * @lc app=leetcode id=1277 lang=javascript
 *
 * [1277] Count Square Submatrices with All Ones
 *
 * https://leetcode.com/problems/count-square-submatrices-with-all-ones/description/
 *
 * algorithms
 * Medium (68.89%)
 * Total Accepted:    33.9K
 * Total Submissions: 47.3K
 * Testcase Example:  '[[0,1,1,1],[1,1,1,1],[0,1,1,1]]'
 *
 * Given a m * n matrix of ones and zeros, return how many square submatrices
 * have all ones.
 *
 *
 * Example 1:
 *
 *
 * Input: matrix =
 * [
 * [0,1,1,1],
 * [1,1,1,1],
 * [0,1,1,1]
 * ]
 * Output: 15
 * Explanation:
 * There are 10 squares of side 1.
 * There are 4 squares of side 2.
 * There is  1 square of side 3.
 * Total number of squares = 10 + 4 + 1 = 15.
 *
 *
 * Example 2:
 *
 *
 * Input: matrix =
 * [
 * ⁠ [1,0,1],
 * ⁠ [1,1,0],
 * ⁠ [1,1,0]
 * ]
 * Output: 7
 * Explanation:
 * There are 6 squares of side 1.
 * There is 1 square of side 2.
 * Total number of squares = 6 + 1 = 7.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 300
 * 1 <= arr[0].length <= 300
 * 0 <= arr[i][j] <= 1
 *
 *
 */
/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = function (matrix) {
    let result = 0
    const get = (i, j) => (matrix[i] && matrix[i][j]) || 0
    for (const i in matrix) {
        for (const j in matrix[i]) {
            if (matrix[i][j] === 1) { // eslint-disable-line eqeqeq
                matrix[i][j] += Math.min(get(i - 1, j), get(i, j - 1), get(i - 1, j - 1))
            }
            result += matrix[i][j]
        }
    }
    return result
}

module.exports = {
    countSquares
}
