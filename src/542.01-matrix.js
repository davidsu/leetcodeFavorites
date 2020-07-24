/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 *
 * https://leetcode.com/problems/01-matrix/description/
 *
 * algorithms
 * Medium (39.60%)
 * Total Accepted:    86.1K
 * Total Submissions: 217.3K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * Given a matrix consists of 0 and 1, find the distance of the nearest 0 for
 * each cell.
 *
 * The distance between two adjacent cells is 1.
 *
 *
 *
 * Example 1:
 *
 *
 * Input:
 * [[0,0,0],
 * ⁠[0,1,0],
 * ⁠[0,0,0]]
 *
 * Output:
 * [[0,0,0],
 * [0,1,0],
 * [0,0,0]]
 *
 *
 * Example 2:
 *
 *
 * Input:
 * [[0,0,0],
 * ⁠[0,1,0],
 * ⁠[1,1,1]]
 *
 * Output:
 * [[0,0,0],
 * ⁠[0,1,0],
 * ⁠[1,2,1]]
 *
 *
 *
 *
 * Note:
 *
 *
 * The number of elements of the given matrix will not exceed 10,000.
 * There are at least one 0 in the given matrix.
 * The cells are adjacent in only four directions: up, down, left and right.
 *
 *
 */
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function search(i, j, matrix, result) {
  const q = [[i, j, 0]]
  let finalDistance = Infinity
  const visited = new Set([[i, j].join(',')])
  while (q.length) {
    const [row, col, distance] = q.shift()
    if (matrix[row][col] === 0) return distance
    if (result[row][col] !== -1)
      finalDistance = Math.min(finalDistance, distance + result[row][col])
    else if (distance < finalDistance - 1) {
      ;[
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1]
      ]
        .filter(
          ([i, j]) =>
            i > -1 &&
            i < matrix.length &&
            j > -1 &&
            j < matrix[0].length &&
            !visited.has(`${i},${j}`)
        )
        .forEach(([i, j]) => {
          visited.add(`${i},${j}`)
          q.push([i, j, distance + 1])
        })
    }
  }
  return finalDistance
}
const updateMatrix = function (matrix) {
  const result = matrix.map(r => r.map(() => -1))
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      result[i][j] = search(i, j, matrix, result)
    }
  }
  return result
}

module.exports = {
  updateMatrix
}
