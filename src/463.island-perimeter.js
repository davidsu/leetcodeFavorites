/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 *
 * https://leetcode.com/problems/island-perimeter/description/
 *
 * algorithms
 * Easy (63.85%)
 * Total Accepted:    205.1K
 * Total Submissions: 316.8K
 * Testcase Example:  '[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]'
 *
 * You are given a map in form of a two-dimensional integer grid where 1
 * represents land and 0 represents water.
 *
 * Grid cells are connected horizontally/vertically (not diagonally). The grid
 * is completely surrounded by water, and there is exactly one island (i.e.,
 * one or more connected land cells).
 *
 * The island doesn't have "lakes" (water inside that isn't connected to the
 * water around the island). One cell is a square with side length 1. The grid
 * is rectangular, width and height don't exceed 100. Determine the perimeter
 * of the island.
 *
 *
 *
 * Example:
 *
 *
 * Input:
 * [[0,1,0,0],
 * ⁠[1,1,1,0],
 * ⁠[0,1,0,0],
 * ⁠[1,1,0,0]]
 *
 * Output: 16
 *
 * Explanation: The perimeter is the 16 yellow stripes in the image below:
 *
 *
 *
 *
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
const isWater = (grid, i, j) => !(grid[i] && grid[i][j])
const perimeter = (grid, i, j) =>
  !isWater(grid, i, j) &&
  isWater(grid, i - 1, j) +
    isWater(grid, i + 1, j) +
    isWater(grid, i, j - 1) +
    isWater(grid, i, j + 1)

const islandPerimeter = grid =>
  grid.reduce((sum, row, i) => sum + row.reduce((res, _, j) => res + perimeter(grid, i, j), 0), 0)

module.exports = {
  islandPerimeter
}
