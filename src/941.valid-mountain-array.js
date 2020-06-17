/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 *
 * https://leetcode.com/problems/valid-mountain-array/description/
 *
 * algorithms
 * Easy (34.25%)
 * Total Accepted:    53.4K
 * Total Submissions: 155.9K
 * Testcase Example:  '[2,1]'
 *
 * Given an array A of integers, return true if and only if it is a valid
 * mountain array.
 *
 * Recall that A is a mountain array if and only if:
 *
 *
 * A.length >= 3
 * There exists some i with 0 < i < A.length - 1 such that:
 *
 * A[0] < A[1] < ... A[i-1] < A[i]
 * A[i] > A[i+1] > ... > A[A.length - 1]
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
 * Input: [2,1]
 * Output: false
 *
 *
 *
 * Example 2:
 *
 *
 * Input: [3,5,5]
 * Output: false
 *
 *
 *
 * Example 3:
 *
 *
 * Input: [0,3,2,1]
 * Output: true
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * 0 <= A.length <= 10000
 * 0 <= A[i] <= 10000
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
const validMountainArray = function (A) {
  let low = 0
  let high = A.length - 1
  while (low < high && (A[low] < A[low + 1] || A[high] < A[high - 1])) {
    if (A[low] < A[low + 1]) low++
    if (A[high] < A[high - 1]) high--
  }
  return low === high && A[low] > A[low - 1] && A[high] > A[high + 1]
}

module.exports = {
  validMountainArray
}