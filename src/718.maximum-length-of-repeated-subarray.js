/*
 * @lc app=leetcode id=718 lang=javascript
 *
 * [718] Maximum Length of Repeated Subarray
 *
 * https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/
 *
 * algorithms
 * Medium (49.22%)
 * Total Accepted:    62K
 * Total Submissions: 126K
 * Testcase Example:  '[1,2,3,2,1]\n[3,2,1,4,7]'
 *
 * Given two integer arrays A and B, return the maximum length of an subarray
 * that appears in both arrays.
 *
 * Example 1:
 *
 *
 * Input:
 * A: [1,2,3,2,1]
 * B: [3,2,1,4,7]
 * Output: 3
 * Explanation:
 * The repeated subarray with maximum length is [3, 2, 1].
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= len(A), len(B) <= 1000
 * 0 <= A[i], B[i] < 100
 *
 *
 *
 *
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

const findLength = function (A, B) {
  const dp = Array.from({ length: A.length + 1 }, () => new Array(B.length + 1))
  let max = 0
  for (let i = 0; i <= A.length; i++) {
    for (let j = 0; j <= B.length; j++) {
      if (i === 0 || j === 0 || A[i - 1] !== B[j - 1]) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i - 1][j - 1] + 1
        max = Math.max(max, dp[i][j])
      }
    }
  }
  return max
}

module.exports = {
  findLength
}
