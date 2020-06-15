/*
 * @lc app=leetcode id=892 lang=javascript
 *
 * [892] Surface Area of 3D Shapes
 *
 * https://leetcode.com/problems/surface-area-of-3d-shapes/description/
 *
 * algorithms
 * Easy (58.45%)
 * Total Accepted:    17.5K
 * Total Submissions: 30K
 * Testcase Example:  '[[2]]'
 *
 * On a N * N grid, we place some 1 * 1 * 1 cubes.
 *
 * Each value v = grid[i][j] represents a tower of v cubes placed on top of
 * grid cell (i, j).
 *
 * Return the total surface area of the resulting shapes.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: [[2]]
 * Output: 10
 *
 *
 *
 * Example 2:
 *
 *
 * Input: [[1,2],[3,4]]
 * Output: 34
 *
 *
 *
 * Example 3:
 *
 *
 * Input: [[1,0],[0,2]]
 * Output: 16
 *
 *
 *
 * Example 4:
 *
 *
 * Input: [[1,1,1],[1,0,1],[1,1,1]]
 * Output: 32
 *
 *
 *
 * Example 5:
 *
 *
 * Input: [[2,2,2],[2,1,2],[2,2,2]]
 * Output: 46
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= N <= 50
 * 0 <= grid[i][j] <= 50
 *
 *
 *
 *
 *
 *
 *
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
const surfaceArea = function (grid) {
  const cellValue = (i, j) => (grid[i] && grid[i][j]) || 0
  let result = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const curr = cellValue(i, j)
      if (curr) {
        const compensate = 2 * Math.min(cellValue(i - 1, j), curr) + 2 * Math.min(cellValue(i, j - 1), curr)
        result += curr * 4 + 2 - compensate
      }
    }
  }
  return result
}

const cellValue = (grid, i, j) => (grid[i] && grid[i][j]) || 0
const itemReducer = (grid, i) => (res, curr, j) => {
  if (!curr) return res
  const compensate = 2 * Math.min(cellValue(grid, i - 1, j), curr) + 2 * Math.min(cellValue(grid, i, j - 1), curr)
  return res + curr * 4 + 2 - compensate
}
const rowReducer = grid => (result, arr, i) => arr.reduce(itemReducer(grid, i), result)
const surfaceArea2 = grid => grid.reduce(rowReducer(grid), 0)

module.exports = {
  surfaceArea,
  surfaceArea2
}
