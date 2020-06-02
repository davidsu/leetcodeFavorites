/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (33.20%)
 * Total Accepted:    564.3K
 * Total Submissions: 1.7M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 *
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 *
 * You are given a target value to search. If found in the array return its
 * index, otherwise return -1.
 *
 * You may assume no duplicate exists in the array.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * Example 1:
 *
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  function findStart() {
    let low = 0
    let high = nums.length - 1
    while (low < high) {
      const mid = Math.floor((low + high) / 2)
      if (nums[mid] > nums[mid + 1]) return mid + 1
      if (nums[mid] > nums[low]) {
        low = mid + 1
      } else {
        high = mid
      }
    }
    return 0
  }
  function offsetSearch(offset) {
    let low = offset
    let high = nums.length + offset - 1
    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      const realMid = mid % nums.length
      if (nums[realMid] < target) {
        low = mid + 1
      } else if (nums[realMid] > target) {
        high = mid - 1
      } else {
        return realMid
      }
    }
    return -1
  }
  const start = findStart()
  return offsetSearch(start)
}

module.exports = {
  search
}
