/*
 * @lc app=leetcode id=1438 lang=javascript
 *
 * [1438] Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 *
 * https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/description/
 *
 * algorithms
 * Medium (40.50%)
 * Total Accepted:    11.7K
 * Total Submissions: 28.9K
 * Testcase Example:  '[8,2,4,7]\r\n4\r'
 *
 * Given an array of integers nums and an integer limit, return the size of the
 * longest continuous subarray such that the absolute difference between any
 * two elements is less than or equal to limit.
 *
 * In case there is no subarray satisfying the given condition return 0.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [8,2,4,7], limit = 4
 * Output: 2
 * Explanation: All subarrays are:
 * [8] with maximum absolute diff |8-8| = 0 <= 4.
 * [8,2] with maximum absolute diff |8-2| = 6 > 4.
 * [8,2,4] with maximum absolute diff |8-2| = 6 > 4.
 * [8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
 * [2] with maximum absolute diff |2-2| = 0 <= 4.
 * [2,4] with maximum absolute diff |2-4| = 2 <= 4.
 * [2,4,7] with maximum absolute diff |2-7| = 5 > 4.
 * [4] with maximum absolute diff |4-4| = 0 <= 4.
 * [4,7] with maximum absolute diff |4-7| = 3 <= 4.
 * [7] with maximum absolute diff |7-7| = 0 <= 4.
 * Therefore, the size of the longest subarray is 2.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [10,1,2,4,7,2], limit = 5
 * Output: 4
 * Explanation: The subarray [2,4,7,2] is the longest since the maximum
 * absolute diff is |2-7| = 5 <= 5.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [4,2,2,2,4,4,2,2], limit = 0
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^9
 * 0 <= limit <= 10^9
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const longestSubarray = function (nums, limit) {
  const minDeque = []
  const maxDeque = []
  let result = 0
  for (let i = 0, start = 0; i < nums.length; i++) {
    while (minDeque.length && nums[minDeque[minDeque.length - 1]] > nums[i]) minDeque.pop()
    while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] < nums[i]) maxDeque.pop()
    minDeque.push(i)
    maxDeque.push(i)
    while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
      if (minDeque[0] === start) minDeque.shift()
      if (maxDeque[0] === start) maxDeque.shift()
      start++
    }
    result = Math.max(result, i - start + 1)
  }
  return result
}

module.exports = {
  longestSubarray
}
