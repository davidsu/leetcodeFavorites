/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (55.20%)
 * Total Accepted:    602.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * Given an array nums, write a function to move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 *
 * Example:
 *
 *
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Note:
 *
 *
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 *
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] === 0) {
      fast++;
    } else {
      nums[slow++] = nums[fast++];
    }
  }
  while (slow < nums.length) {
    nums[slow++] = 0;
  }
};
module.exports = { moveZeroes };
