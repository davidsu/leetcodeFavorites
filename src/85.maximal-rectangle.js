/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 *
 * https://leetcode.com/problems/maximal-rectangle/description/
 *
 * algorithms
 * Hard (34.62%)
 * Total Accepted:    135.9K
 * Total Submissions: 392.7K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle
 * containing only 1's and return its area.
 *
 * Example:
 *
 *
 * Input:
 * [
 * ⁠ ["1","0","1","0","0"],
 * ⁠ ["1","0","1","1","1"],
 * ⁠ ["1","1","1","1","1"],
 * ⁠ ["1","0","0","1","0"]
 * ]
 * Output: 6
 *
 *
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
const indexes = (arr) => arr.map((_, idx) => idx)

function maximalRectangle(matrix) {
  const expandRight = (row, col, max) => (matrix[row][col] === '1' && col <= max ? expandRight(row, col + 1, max) || col : col - 1)

  const expand = ([startRow, startCol], row = startRow, col = startCol, max = matrix[0].length - 1) => {
    if (matrix[row] && matrix[row][col] === '1') {
      const nextCol = expandRight(row, col, max)
      const count = (row - startRow + 1) * (nextCol - startCol + 1)
      return Math.max(count, expand([startRow, startCol], row + 1, col, nextCol))
    }
    return 0
  }

  function* allBests() {
    for (const row of indexes(matrix)) {
      for (const col of indexes(matrix[row])) {
        yield expand([row, col])
      }
    }
    yield 0
  }

  return Math.max(...Array.from(allBests()))
}

module.exports = {
  maximalRectangle
}
