/*
 * @lc app=leetcode id=713 lang=javascript
 *
 * [713] Subarray Product Less Than K
 *
 * https://leetcode.com/problems/subarray-product-less-than-k/description/
 *
 * algorithms
 * Medium (38.81%)
 * Total Accepted:    55.9K
 * Total Submissions: 144.1K
 * Testcase Example:  '[10,5,2,6]\n100'
 *
 * Your are given an array of positive integers nums.
 * Count and print the number of (contiguous) subarrays where the product of
 * all the elements in the subarray is less than k.
 *
 * Example 1:
 *
 * Input: nums = [10, 5, 2, 6], k = 100
 * Output: 8
 * Explanation: The 8 subarrays that have product less than 100 are: [10], [5],
 * [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
 * Note that [10, 5, 2] is not included as the product of 100 is not strictly
 * less than k.
 *
 *
 *
 * Note:
 * 0 < nums.length .
 * 0 < nums[i] < 1000.
 * 0 .
 *
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = function (nums, k) {
  let low = 0
  let high = 0
  let result = 0
  let mul = 1
  while (high < nums.length) {
    while (low < high && nums[high] * mul >= k) {
      mul /= nums[low]
      low++
    }
    if (low === high) {
      result += k > nums[low] ? 1 : 0
    } else {
      result += high - low + 1
    }
    mul *= nums[high]
    high++
  }
  return result
}

module.exports = {
  numSubarrayProductLessThanK
}
