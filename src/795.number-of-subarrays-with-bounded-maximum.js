/*
 * @lc app=leetcode id=795 lang=javascript
 *
 * [795] Number of Subarrays with Bounded Maximum
 *
 * https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/description/
 *
 * algorithms
 * Medium (45.83%)
 * Total Accepted:    17.4K
 * Total Submissions: 38K
 * Testcase Example:  '[2,1,4,3]\n2\n3'
 *
 * We are given an array A of positive integers, and two positive integers L
 * and R (L <= R).
 *
 * Return the number of (contiguous, non-empty) subarrays such that the value
 * of the maximum array element in that subarray is at least L and at most R.
 *
 *
 * Example :
 * Input:
 * A = [2, 1, 4, 3]
 * L = 2
 * R = 3
 * Output: 3
 * Explanation: There are three subarrays that meet the requirements: [2], [2,
 * 1], [3].
 *
 *
 * Note:
 *
 *
 * L, R  and A[i] will be an integer in the range [0, 10^9].
 * The length of A will be in the range of [1, 50000].
 *
 *
 */
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

const numSubarrayBoundedMax = function (A, L, R) {
  A.push(Infinity)
  const dp = A.map(n => (n <= R && n >= L ? 1 : 0))
  let result = 0
  for (let row = A.length - 1; row >= 0; row--) {
    if (A[row] <= R) {
      result += dp[row]
      for (let colOffset = 1; colOffset + row < A.length && A[row + colOffset] <= R; colOffset++) {
        if (dp[row + colOffset - 1] || (A[row + colOffset] >= L && dp[row + colOffset])) {
          dp[row + colOffset] = 1
          result += 1
        }
      }
    }
  }
  return result
}

module.exports = {
  numSubarrayBoundedMax
}
