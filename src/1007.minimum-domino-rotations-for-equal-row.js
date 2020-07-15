/*
 * @lc app=leetcode id=1007 lang=javascript
 *
 * [1007] Minimum Domino Rotations For Equal Row
 *
 * https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/description/
 *
 * algorithms
 * Medium (49.89%)
 * Total Accepted:    81.4K
 * Total Submissions: 163.2K
 * Testcase Example:  '[2,1,2,4,2,2]\n[5,2,6,2,3,2]'
 *
 * In a row of dominoes, A[i] and B[i] represent the top and bottom halves of
 * the i-th domino.  (A domino is a tile with two numbers from 1 to 6 - one on
 * each half of the tile.)
 *
 * We may rotate the i-th domino, so that A[i] and B[i] swap values.
 *
 * Return the minimum number of rotations so that all the values in A are the
 * same, or all the values in B are the same.
 *
 * If it cannot be done, return -1.
 *
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
 * Output: 2
 * Explanation:
 * The first figure represents the dominoes as given by A and B: before we do
 * any rotations.
 * If we rotate the second and fourth dominoes, we can make every value in the
 * top row equal to 2, as indicated by the second figure.
 *
 *
 * Example 2:
 *
 *
 * Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
 * Output: -1
 * Explanation:
 * In this case, it is not possible to rotate the dominoes to make one row of
 * values equal.
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= A[i], B[i] <= 6
 * 2 <= A.length == B.length <= 20000
 *
 *
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const calc = (A, B) => {
  const val = A[0]
  let rotateUp = 0
  let rotateDown = 0
  for (let i = 0; i < A.length && (rotateDown !== Infinity || rotateUp !== Infinity); i++) {
    if (A[i] !== val) {
      if (B[i] === val) {
        rotateUp++
      } else {
        rotateUp = Infinity
      }
    }
    if (B[i] !== val) {
      if (A[i] === val) {
        rotateDown++
      } else {
        rotateDown = Infinity
      }
    }
  }
  return Math.min(rotateUp, rotateDown)
}
const minDominoRotations = function (A, B) {
  const result = Math.min(calc(A, B), calc(B, A))
  if (result === Infinity) {
    return -1
  }
  return result
}

module.exports = {
  minDominoRotations
}
