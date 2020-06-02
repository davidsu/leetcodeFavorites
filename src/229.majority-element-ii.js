/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 *
 * https://leetcode.com/problems/majority-element-ii/description/
 *
 * algorithms
 * Medium (33.15%)
 * Total Accepted:    112.8K
 * Total Submissions: 340.4K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an integer array of size n, find all elements that appear more than ⌊
 * n/3 ⌋ times.
 *
 * Note: The algorithm should run in linear time and in O(1) space.
 *
 * Example 1:
 *
 *
 * Input: [3,2,3]
 * Output: [3]
 *
 * Example 2:
 *
 *
 * Input: [1,1,1,3,3,2,2,2]
 * Output: [1,2]
 *
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const count = (arr, num) => arr.reduce((result, value) => (value === num ? result + 1 : result), 0)
const counter = (num = 0, count = 0) => ({ num, count })
function majorityElement(nums) {
  let count1 = counter()
  let count2 = counter()
  for (const num of nums) {
    if (num === count1.num) {
      count1.count++
    } else if (num === count2.num) {
      count2.count++
    } else if (!count1.count) {
      count1 = counter(num, 1)
    } else if (!count2.count) {
      count2 = counter(num, 1)
    } else {
      count1.count--
      count2.count--
    }
  }
  const result = []
  const threshold = nums.length / 3
  if (count(nums, count1.num) > threshold) {
    result.push(count1.num)
  }
  if (count(nums, count2.num) > threshold && count2.num !== count1.num) {
    result.push(count2.num)
  }
  return result
}

module.exports = {
  testFunc: majorityElement
}
