/*
 * @lc app=leetcode id=1004 lang=javascript
 *
 * [1004] Max Consecutive Ones III
 *
 * https://leetcode.com/problems/max-consecutive-ones-iii/description/
 *
 * algorithms
 * Medium (57.98%)
 * Total Accepted:    49K
 * Total Submissions: 84.4K
 * Testcase Example:  '[1,1,1,0,0,0,1,1,1,1,0]\n2'
 *
 * Given an array A of 0s and 1s, we may change up to K values from 0 to 1.
 *
 * Return the length of the longest (contiguous) subarray that contains only
 * 1s.
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
 * Output: 6
 * Explanation:
 * [1,1,1,0,0,1,1,1,1,1,1]
 * Bolded numbers were flipped from 0 to 1.  The longest subarray is
 * underlined.
 *
 *
 * Example 2:
 *
 *
 * Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
 * Output: 10
 * Explanation:
 * [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
 * Bolded numbers were flipped from 0 to 1.  The longest subarray is
 * underlined.
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= A.length <= 20000
 * 0 <= K <= A.length
 * A[i] is 0 or 1
 *
 *
 *
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const longestOnes = function (a, k) {
  let max = 0
  let count = k
  let zeroStart = -1
  let curr = 0
  while (curr < a.length) {
    if (a[curr] === 1) {
      max = Math.max(max, curr - zeroStart)
      curr++
    } else if (zeroStart < curr) {
      if (count > 0) {
        max = Math.max(max, curr - zeroStart)
        count--
        curr++
      } else {
        if (a[zeroStart + 1] === 0 && count < k) count++
        zeroStart++
      }
    } else {
      curr++
    }
  }
  return max
}

module.exports = {
  longestOnes
}
