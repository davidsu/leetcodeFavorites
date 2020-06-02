/*
 * @lc app=leetcode id=1232 lang=javascript
 *
 * [1232] Check If It Is a Straight Line
 *
 * https://leetcode.com/problems/check-if-it-is-a-straight-line/description/
 *
 * algorithms
 * Easy (47.23%)
 * Total Accepted:    73.3K
 * Total Submissions: 155.5K
 * Testcase Example:  '[[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]'
 *
 * You are given an array coordinates, coordinates[i] = [x, y], where [x, y]
 * represents the coordinate of a point. Check if these points make a straight
 * line in the XY plane.
 *
 *
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 *
 *
 * Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= coordinates.length <= 1000
 * coordinates[i].length == 2
 * -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
 * coordinates contains no duplicate point.
 *
 *
 */
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const getY = (x, m, b) => x * m + b
const getM = ([x1, y1], [x2, y2]) => (y1 - y2) / (x1 - x2)
const getB = (x, y, m) => y - x * m
const checkStraightLine = function (coordinates) {
  if (coordinates.length < 3) return true
  if (coordinates[0][0] === coordinates[1][0]) return coordinates.every(([x]) => x === coordinates[0][0])
  const m = getM(coordinates[0], coordinates[1])
  const b = getB(coordinates[0][0], coordinates[0][1], m)
  return coordinates.every(([x, y]) => y === getY(x, m, b))
}

module.exports = {
  checkStraightLine
}
