/*
 * @lc app=leetcode id=1035 lang=javascript
 *
 * [1035] Uncrossed Lines
 *
 * https://leetcode.com/problems/uncrossed-lines/description/
 *
 * algorithms
 * Medium (55.62%)
 * Total Accepted:    33.4K
 * Total Submissions: 60K
 * Testcase Example:  '[1,4,2]\n[1,2,4]'
 *
 * We write the integers of A and B (in the order they are given) on two
 * separate horizontal lines.
 *
 * Now, we may draw connecting lines: a straight line connecting two numbers
 * A[i] and B[j] such that:
 *
 *
 * A[i] == B[j];
 * The line we draw does not intersect any other connecting (non-horizontal)
 * line.
 *
 *
 * Note that a connecting lines cannot intersect even at the endpoints: each
 * number can only belong to one connecting line.
 *
 * Return the maximum number of connecting lines we can draw in this way.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: A = [1,4,2], B = [1,2,4]
 * Output: 2
 * Explanation: We can draw 2 uncrossed lines as in the diagram.
 * We cannot draw 3 uncrossed lines, because the line from A[1]=4 to B[2]=4
 * will intersect the line from A[2]=2 to B[1]=2.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: A = [2,5,1,2,5], B = [10,5,2,1,5,2]
 * Output: 3
 *
 *
 *
 * Example 3:
 *
 *
 * Input: A = [1,3,7,1,7,5], B = [1,9,2,5,1]
 * Output: 2
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= A.length <= 500
 * 1 <= B.length <= 500
 * 1 <= A[i], B[i] <= 2000
 *
 *
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const maxUncrossedLinesWithSpaceOptimization = function (A, B, aStart = 0, bStart = 0) {
  const dp = new Array(B.length + 1).fill(0)
  for (let i = 1; i <= A.length; i++) {
    for (let j = 1, curr = 0, last = 0; j <= B.length; j++) {
      ;[last, curr] = [curr, dp[j]]
      if (A[i - 1] === B[j - 1]) {
        dp[j] = 1 + last
      } else {
        dp[j] = Math.max(dp[j - 1], dp[j])
      }
    }
  }
  return dp[B.length]
}

const maxUncrossedLines = function (A, B, aStart = 0, bStart = 0) {
  const matrix = new Array(A.length + 1).fill(0).map(() => new Array(B.length + 1).fill(0))
  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      if (A[i - 1] === B[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1
      } else {
        matrix[i][j] = Math.max(matrix[i][j - 1], matrix[i - 1][j])
      }
    }
  }
  return matrix[A.length][B.length]
}

module.exports = {
  maxUncrossedLines,
  maxUncrossedLinesWithSpaceOptimization
}
