/*
 * @lc app=leetcode id=836 lang=javascript
 *
 * [836] Rectangle Overlap
 *
 * https://leetcode.com/problems/rectangle-overlap/description/
 *
 * algorithms
 * Easy (48.95%)
 * Total Accepted:    47.7K
 * Total Submissions: 97.5K
 * Testcase Example:  '[0,0,2,2]\n[1,1,3,3]'
 *
 * A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are
 * the coordinates of its bottom-left corner, and (x2, y2) are the coordinates
 * of its top-right corner.
 *
 * Two rectangles overlap if the area of their intersection is positive.  To be
 * clear, two rectangles that only touch at the corner or edges do not
 * overlap.
 *
 * Given two (axis-aligned) rectangles, return whether they overlap.
 *
 * Example 1:
 *
 *
 * Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
 * Output: false
 *
 *
 * Notes:
 *
 *
 * Both rectangles rec1 and rec2 are lists of 4 integers.
 * All coordinates in rectangles will be between -10^9 and 10^9.
 *
 *
 */
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = function ([ax1, ay1, ax2, ay2], [bx1, by1, bx2, by2]) {
  if (bx1 >= ax2 || ax1 >= bx2) return false
  if (by1 >= ay2 || ay1 >= by2) return false
  if (ax1 === ax2 || ay1 === ay2 || bx1 === bx2 || by1 === by2) return false
  return true
}

module.exports = {
  isRectangleOverlap
}
