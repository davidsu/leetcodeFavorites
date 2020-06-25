/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 *
 * https://leetcode.com/problems/find-the-duplicate-number/description/
 *
 * algorithms
 * Medium (53.75%)
 * Total Accepted:    325.6K
 * Total Submissions: 597.5K
 * Testcase Example:  '[1,3,4,2,2]'
 *
 * Given an array nums containing n + 1 integers where each integer is between
 * 1 and n (inclusive), prove that at least one duplicate number must exist.
 * Assume that there is only one duplicate number, find the duplicate one.
 *
 * Example 1:
 *
 *
 * Input: [1,3,4,2,2]
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: [3,1,3,4,2]
 * Output: 3
 *
 * Note:
 *
 *
 * You must not modify the array (assume the array is read only).
 * You must use only constant, O(1) extra space.
 * Your runtime complexity should be less than O(n^2).
 * There is only one duplicate number in the array, but it could be repeated
 * more than once.
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  let slow = 0
  let fast = 0
  do {
    fast = nums[nums[fast]]
    slow = nums[slow]
  } while (slow !== fast)
  slow = 0
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }
  return slow
}

module.exports = {
  findDuplicate
}
