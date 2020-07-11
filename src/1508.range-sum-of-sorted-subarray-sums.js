/*
 * @lc app=leetcode id=1508 lang=javascript
 *
 * [1508] Range Sum of Sorted Subarray Sums
 *
 * https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/description/
 *
 * algorithms
 * Medium (74.11%)
 * Total Accepted:    3.9K
 * Total Submissions: 5.2K
 * Testcase Example:  '[1,2,3,4]\n4\n1\n5'
 *
 * Given the array nums consisting of n positive integers. You computed the sum
 * of all non-empty continous subarrays from the array and then sort them in
 * non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.
 *
 * Return the sum of the numbers from index left to index right (indexed from
 * 1), inclusive, in the new array. Since the answer can be a huge number
 * return it modulo 10^9 + 7.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3,4], n = 4, left = 1, right = 5
 * Output: 13
 * Explanation: All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. After
 * sorting them in non-decreasing order we have the new array [1, 2, 3, 3, 4,
 * 5, 6, 7, 9, 10]. The sum of the numbers from index le = 1 to ri = 5 is 1 + 2
 * + 3 + 3 + 4 = 13.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,4], n = 4, left = 3, right = 4
 * Output: 6
 * Explanation: The given array is the same as example 1. We have the new array
 * [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 3 to
 * ri = 4 is 3 + 3 = 6.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,2,3,4], n = 4, left = 1, right = 10
 * Output: 50
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^3
 * nums.length == n
 * 1 <= nums[i] <= 100
 * 1 <= left <= right <= n * (n + 1) / 2
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeSum = function (nums, n, left, right) {
  const all = []
  for (let i = 0; i < n; i++) {
    let sum = nums[i]
    all.push(sum)
    for (let j = i + 1; j < n; j++) {
      sum = sum + nums[j]
      all.push(sum)
    }
  }
  all.sort((a, b) => a - b)
  let sum = 0
  for (let i = left - 1; i < right; i++) {
    sum = (sum + all[i]) % 1000000007
  }
  return sum
}
module.exports = { rangeSum }
