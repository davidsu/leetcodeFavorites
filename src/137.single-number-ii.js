/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 *
 * https://leetcode.com/problems/single-number-ii/description/
 *
 * algorithms
 * Medium (49.66%)
 * Total Accepted:    228K
 * Total Submissions: 448.1K
 * Testcase Example:  '[2,2,3,2]'
 *
 * Given a non-empty array of integers, every element appears three times
 * except for one, which appears exactly once. Find that single one.
 *
 * Note:
 *
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 *
 * Example 1:
 *
 *
 * Input: [2,2,3,2]
 * Output: 3
 *
 *
 * Example 2:
 *
 *
 * Input: [0,1,0,1,0,1,99]
 * Output: 99
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let mask = 1
  let result = 0
  for (let i = 0; i < 32; i++) {
    const count = nums.reduce((sum, num) => sum + (mask & num ? 1 : 0), 0)
    if (count % 3) result |= mask
    mask <<= 1
  }
  return result
}

module.exports = {
  singleNumber
}
