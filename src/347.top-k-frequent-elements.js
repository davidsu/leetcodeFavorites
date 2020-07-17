/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (60.40%)
 * Total Accepted:    404.5K
 * Total Submissions: 666.5K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * Given a non-empty array of integers, return the k most frequent elements.
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 *
 * Note:
 *
 *
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Your algorithm's time complexity must be better than O(n log n), where n is
 * the array's size.
 * It's guaranteed that the answer is unique, in other words the set of the top
 * k frequent elements is unique.
 * You can return the answer in any order.
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const freq = [new Set()]
  const map = {}
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1
    if (freq.length === map[num]) {
      freq.push(new Set())
    }
    freq[map[num]].add(num)
    freq[map[num] - 1].delete(num)
  }
  let result = []
  while (result.length < k) {
    result = result.concat([...freq.pop()])
  }
  while (result.length > k) {
    result.pop()
  }
  return result
}

module.exports = {
  topKFrequent
}
