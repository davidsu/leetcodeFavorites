/*
 * @lc app=leetcode id=368 lang=javascript
 *
 * [368] Largest Divisible Subset
 *
 * https://leetcode.com/problems/largest-divisible-subset/description/
 *
 * algorithms
 * Medium (36.31%)
 * Total Accepted:    61.1K
 * Total Submissions: 168.1K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a set of distinct positive integers, find the largest subset such that
 * every pair (Si, Sj) of elements in this subset satisfies:
 *
 * Si % Sj = 0 or Sj % Si = 0.
 *
 * If there are multiple solutions, return any subset is fine.
 *
 * Example 1:
 *
 *
 *
 * Input: [1,2,3]
 * Output: [1,2] (of course, [1,3] will also be ok)
 *
 *
 *
 * Example 2:
 *
 *
 * Input: [1,2,4,8]
 * Output: [1,2,4,8]
 *
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset2 = nums => {
  nums.sort((a, b) => b - a)
  const results = {}
  let result = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    results[num] = [num]
    for (let j = i - 1; j >= 0; j--) {
      const other = nums[j]
      if (
        other % num === 0 &&
        (results[num].length === 1 || results[other].length >= results[num].length)
      ) {
        results[num] = [num, ...results[other]]
      }
    }
    if (results[num].length > result.length) {
      result = results[num]
    }
  }
  return result
}

const reducer = (acc, num, i, nums) => {
  let curr = [num]
  for (let j = i - 1; j >= 0; j--) {
    if (nums[j] % num === 0 && (acc.dp[j].length >= curr.length || curr.length === 1)) {
      curr = [num, ...acc.dp[j]]
    }
  }
  if (curr.length > acc.result.length) {
    acc.result = curr
  }
  acc.dp[i] = curr
  return acc
}

const largestDivisibleSubset = nums =>
  nums.sort((a, b) => b - a).reduce(reducer, { result: [], dp: [] }).result
module.exports = {
  largestDivisibleSubset2,
  largestDivisibleSubset
}
