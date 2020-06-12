/*
 * @lc app=leetcode id=697 lang=javascript
 *
 * [697] Degree of an Array
 *
 * https://leetcode.com/problems/degree-of-an-array/description/
 *
 * algorithms
 * Easy (53.47%)
 * Total Accepted:    80.1K
 * Total Submissions: 149.7K
 * Testcase Example:  '[1,2,2,3,1]'
 *
 * Given a non-empty array of non-negative integers nums, the degree of this
 * array is defined as the maximum frequency of any one of its elements.
 * Your task is to find the smallest possible length of a (contiguous) subarray
 * of nums, that has the same degree as nums.
 *
 * Example 1:
 *
 * Input: [1, 2, 2, 3, 1]
 * Output: 2
 * Explanation:
 * The input array has a degree of 2 because both elements 1 and 2 appear
 * twice.
 * Of the subarrays that have the same degree:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * The shortest length is 2. So return 2.
 *
 *
 *
 *
 * Example 2:
 *
 * Input: [1,2,2,3,1,4,2]
 * Output: 6
 *
 *
 *
 * Note:
 * nums.length will be between 1 and 50,000.
 * nums[i] will be an integer between 0 and 49,999.
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const isBetter = (candidate, best) => candidate.freq > best.freq || (candidate.freq === best.freq && candidate.total < best.total)
const findShortestSubArray = nums =>
  nums.reduce(
    (acc, num, idx) => {
      const curr = acc[num] || { freq: 0, start: idx }
      curr.freq++
      curr.total = idx - curr.start + 1
      acc[num] = curr
      if (isBetter(curr, acc)) {
        Object.assign(acc, curr)
      }
      return acc
    },
    { freq: 0, total: 0 }
  ).total

module.exports = {
  findShortestSubArray
}
