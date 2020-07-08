/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (26.25%)
 * Total Accepted:    919K
 * Total Submissions: 3.5M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 *
 * Note:
 *
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const results = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] !== nums[i - 1]) {
      let low = i + 1
      let high = nums.length - 1
      const target = -nums[i]
      while (low < high) {
        if (nums[low] + nums[high] === target) {
          const [one, two, three] = results[results.length - 1] || []
          if (nums[i] !== one || nums[low] !== two || nums[high] !== three) {
            results.push([nums[i], nums[low], nums[high]])
          }
          low++
          high--
        } else if (nums[low] + nums[high] < target) {
          low++
        } else {
          high--
        }
      }
    }
  }
  return results
}

module.exports = {
  threeSum
}
