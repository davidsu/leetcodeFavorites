/*
 * @lc app=leetcode id=593 lang=javascript
 *
 * [593] Valid Square
 *
 * https://leetcode.com/problems/valid-square/description/
 *
 * algorithms
 * Medium (42.87%)
 * Total Accepted:    34.4K
 * Total Submissions: 80.2K
 * Testcase Example:  '[0,0]\n[1,1]\n[1,0]\n[0,1]'
 *
 * Given the coordinates of four points in 2D space, return whether the four
 * points could construct a square.
 *
 * The coordinate (x,y) of a point is represented by an integer array with two
 * integers.
 *
 * Example:
 *
 *
 * Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
 * Output: True
 *
 *
 *
 *
 * Note:
 *
 *
 * All the input integers are in the range [-10000, 10000].
 * A valid square has four equal sides with positive length and four equal
 * angles (90-degree angles).
 * Input points have no order.
 *
 *
 *
 *
 */
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
const isValidSquare = (p1, p2, p3, p4) => {
  if (p1[0] === p2[0] && p1[1] === p2[1]) return false
  if (
    Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) !==
    Math.pow(p3[0] - p4[0], 2) + Math.pow(p3[1] - p4[1], 2)
  )
    return false
  if (
    Math.pow(p1[0] - p3[0], 2) + Math.pow(p1[1] - p3[1], 2) !==
    Math.pow(p2[0] - p4[0], 2) + Math.pow(p2[1] - p4[1], 2)
  )
    return false
  if (
    Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) !==
    Math.pow(p2[0] - p4[0], 2) + Math.pow(p2[1] - p4[1], 2)
  )
    return false
  if (
    Math.pow(p1[0] - p4[0], 2) + Math.pow(p1[1] - p4[1], 2) !==
    Math.pow(p2[0] - p3[0], 2) + Math.pow(p2[1] - p3[1], 2)
  )
    return false
  return true
}

const combinations = (points, used = [false, false, false, false]) => {
  if (used.every(a => a)) return []
  const result = []
  points.forEach((point, i) => {
    if (!used[i]) {
      used[i] = true
      const comb = combinations(points, used)
      if (comb.length) {
        comb.forEach(comb => {
          result.push([point, ...comb])
        })
      } else {
        result.push([point])
      }
      used[i] = false
    }
  })
  return result
}

const validSquare = function (p1, p2, p3, p4) {
  for (const comb of combinations([p1, p2, p3, p4])) {
    if (isValidSquare(...comb)) {
      return true
    }
  }
  return false
}

module.exports = {
  validSquare
}
