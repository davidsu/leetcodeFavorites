/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 *
 * https://leetcode.com/problems/sort-an-array/description/
 *
 * algorithms
 * Medium (63.65%)
 * Total Accepted:    80.1K
 * Total Submissions: 125.8K
 * Testcase Example:  '[5,2,3,1]'
 *
 * Given an array of integers nums, sort the array in ascending order.
 *
 *
 * Example 1:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 * Example 2:
 * Input: nums = [5,1,1,2,0,0]
 * Output: [0,0,1,1,2,5]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 50000
 * -50000 <= nums[i] <= 50000
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const merge = (left, right) => {
  const res = []
  let i = 0
  let j = 0
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i++])
    } else {
      res.push(right[j++])
    }
  }
  while (i < left.length) {
    res.push(left[i++])
  }
  while (j < right.length) {
    res.push(right[j++])
  }
  return res
}

const sort = (nums, low, high) => {
  if (low === high) return [nums[low]]
  if (low + 1 === high) {
    if (nums[low] > nums[high]) {
      return [nums[high], nums[low]]
    }
    return [nums[low], nums[high]]
  }
  const mid = Math.floor((low + high) / 2)
  const left = sort(nums, low, mid)
  const right = sort(nums, mid + 1, high)
  return merge(left, right)
}
const sortArray = function (nums) {
  const result = sort(nums, 0, nums.length - 1)
  return result
}

module.exports = {
  sortArray
}
