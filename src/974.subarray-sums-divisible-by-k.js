/*
 * @lc app=leetcode id=974 lang=javascript
 *
 * [974] Subarray Sums Divisible by K
 *
 * https://leetcode.com/problems/subarray-sums-divisible-by-k/description/
 *
 * algorithms
 * Medium (48.28%)
 * Total Accepted:    32.3K
 * Total Submissions: 66.9K
 * Testcase Example:  '[4,5,0,-2,-3,1]\n5'
 *
 * Given an array A of integers, return the number of (contiguous, non-empty)
 * subarrays that have a sum divisible by K.
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: A = [4,5,0,-2,-3,1], K = 5
 * Output: 7
 * Explanation: There are 7 subarrays with a sum divisible by K = 5:
 * [4, 5, 0, -2, -3, 1],
 * [5, 0, -2, -3],
 * [0, -2, -3],
 * [-2, -3]
 * [5, 0],
 * [0],
 * [5],
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= A.length <= 30000
 * -10000 <= A[i] <= 10000
 * 2 <= K <= 10000
 *
 *
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

const subarraysDivByK = function (a, k) {
  const resCount = new Map([[0, 1]])
  let sum = 0
  let count = 0
  for (const num of a) {
    sum = (((sum + num) % k) + k) % k
    if (resCount.get(sum)) count += resCount.get(sum)
    resCount.set(sum, (resCount.get(sum) || 0) + 1)
  }
  return count
}
module.exports = {
  subarraysDivByK
}
