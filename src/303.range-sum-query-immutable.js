/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 *
 * https://leetcode.com/problems/range-sum-query-immutable/description/
 *
 * algorithms
 * Easy (43.60%)
 * Total Accepted:    194.3K
 * Total Submissions: 445.7K
 * Testcase Example:  '["NumArray","sumRange","sumRange","sumRange"]\n' +
  '[[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]'
 *
 * Given an integer array nums, find the sum of the elements between indices i
 * and j (i ≤ j), inclusive.
 * 
 * Example:
 * 
 * Given nums = [-2, 0, 3, -5, 2, -1]
 * 
 * sumRange(0, 2) -> 1
 * sumRange(2, 5) -> -1
 * sumRange(0, 5) -> -3
 * 
 * 
 * 
 * Note:
 * 
 * You may assume that the array does not change.
 * There are many calls to sumRange function.
 * 
 * 
 */
/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
  this.nums = nums
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
// TODO: sumRange should be an O(1) operation
NumArray.prototype.sumRange = function (i, j) {
  let result = 0
  while (i <= j) {
    result += this.nums[i++] || 0
  }
  return result
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

module.exports = {
  NumArray
}
