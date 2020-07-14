/*
 * @lc app=leetcode id=540 lang=javascript
 *
 * [540] Single Element in a Sorted Array
 *
 * https://leetcode.com/problems/single-element-in-a-sorted-array/description/
 *
 * algorithms
 * Medium (57.91%)
 * Total Accepted:    149.6K
 * Total Submissions: 258.3K
 * Testcase Example:  '[1,1,2,3,3,4,4,8,8]'
 *
 * You are given a sorted array consisting of only integers where every element
 * appears exactly twice, except for one element which appears exactly once.
 * Find this single element that appears only once.
 *
 * Follow up: Your solution should run in O(log n) time and O(1) space.
 *
 *
 * Example 1:
 * Input: nums = [1,1,2,3,3,4,4,8,8]
 * Output: 2
 * Example 2:
 * Input: nums = [3,3,7,7,10,11,11]
 * Output: 10
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * 0 <= nums[i] <= 10^5
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
  let high = nums.length
  let low = 0
  while (high > low) {
    let mid = Math.ceil((high + low) / 2)
    if (nums[mid - 1] === nums[mid]) mid--
    if (nums[mid + 1] !== nums[mid]) return nums[mid]
    if ((mid - low) & 1) high = mid - 1
    else low = mid + 2
  }
  return nums[low]
}

module.exports = {
  singleNonDuplicate
}
