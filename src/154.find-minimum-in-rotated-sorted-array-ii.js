/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 *
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/description/
 *
 * algorithms
 * Hard (40.55%)
 * Total Accepted:    178.3K
 * Total Submissions: 439.6K
 * Testcase Example:  '[1,3,5]'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 *
 * (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 *
 * Find the minimum element.
 *
 * The array may contain duplicates.
 *
 * Example 1:
 *
 *
 * Input: [1,3,5]
 * Output: 1
 *
 * Example 2:
 *
 *
 * Input: [2,2,2,0,1]
 * Output: 0
 *
 * Note:
 *
 *
 * This is a follow up problem to Find Minimum in Rotated Sorted Array.
 * Would allow duplicates affect the run-time complexity? How and why?
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums, high = nums.length - 1, low = 0) {
  if (high === low) return nums[low]
  const mid = Math.floor((high + low) / 2)
  if (nums[mid] > nums[high]) return findMin(nums, high, mid + 1)
  if (nums[mid] < nums[low]) return findMin(nums, mid, low + 1)
  return Math.min(findMin(nums, mid, low), findMin(nums, high, mid + 1))
}

module.exports = {
  findMin
}
