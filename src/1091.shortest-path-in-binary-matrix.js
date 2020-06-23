/*
 * @lc app=leetcode id=1091 lang=javascript
 *
 * [1091] Shortest Path in Binary Matrix
 *
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/description/
 *
 * algorithms
 * Medium (37.83%)
 * Total Accepted:    26.3K
 * Total Submissions: 69.5K
 * Testcase Example:  '[[0,1],[1,0]]'
 *
 * In an N by N square grid, each cell is either empty (0) or blocked (1).
 *
 * A clear path from top-left to bottom-right has length k if and only if it is
 * composed of cells C_1, C_2, ..., C_k such that:
 *
 *
 * Adjacent cells C_i and C_{i+1} are connected 8-directionally (ie., they are
 * different and share an edge or corner)
 * C_1 is at location (0, 0) (ie. has value grid[0][0])
 * C_k is at location (N-1, N-1) (ie. has value grid[N-1][N-1])
 * If C_i is located at (r, c), then grid[r][c] is empty (ie. grid[r][c] ==
 * 0).
 *
 *
 * Return the length of the shortest such clear path from top-left to
 * bottom-right.  If such a path does not exist, return -1.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: [[0,1],[1,0]]
 *
 *
 * Output: 2
 *
 *
 *
 *
 * Example 2:
 *
 *
 * Input: [[0,0,0],[1,1,0],[1,1,0]]
 *
 *
 * Output: 4
 *
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= grid.length == grid[0].length <= 100
 * grid[r][c] is 0 or 1
 *
 *
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = function (grid) {
  if (!grid.length || !grid[0].length || grid[0][0]) return -1
  // const printGrid = () => console.log(grid.reduce((res, curr) => `${res}\n${curr.join(', ')}`, ''))
  const isEmptyCell = ([i, j]) => grid[i] && grid[i][j] === 0
  const neighbours = (i, j) =>
    [
      [i - 1, j],
      [i - 1, j - 1],
      [i - 1, j + 1],
      [i, j - 1],
      [i, j + 1],
      [i + 1, j],
      [i + 1, j - 1],
      [i + 1, j + 1]
    ].filter(isEmptyCell)
  const q = [[0, 0, 1]]
  while (q.length) {
    const [i, j, len] = q.shift()
    if (i === grid.length - 1 && j === grid[0].length - 1) return len
    const nextLen = len + 1
    const next = neighbours(i, j)
    for (const [nextI, nextJ] of next) {
      grid[nextI][nextJ] = 2
      q.push([nextI, nextJ, nextLen])
    }
  }
  // printGrid()
  return -1
}

module.exports = {
  shortestPathBinaryMatrix
}
