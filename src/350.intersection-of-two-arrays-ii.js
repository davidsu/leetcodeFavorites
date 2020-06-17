/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 *
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (50.98%)
 * Total Accepted:    337.7K
 * Total Submissions: 662.4K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * Given two arrays, write a function to compute their intersection.
 *
 * Example 1:
 *
 *
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 *
 *
 *
 * Example 2:
 *
 *
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9]
 *
 *
 * Note:
 *
 *
 * Each element in the result should appear as many times as it shows in both
 * arrays.
 * The result can be in any order.
 *
 *
 * Follow up:
 *
 *
 * What if the given array is already sorted? How would you optimize your
 * algorithm?
 * What if nums1's size is small compared to nums2's size? Which algorithm is
 * better?
 * What if elements of nums2 are stored on disk, and the memory is limited such
 * that you cannot load all elements into the memory at once?
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const frequency = arr =>
  arr.reduce((freq, num) => {
    freq[num] = (freq[num] || 0) + 1
    return freq
  }, {})
const intersect = (nums1, nums2) => {
  const freq1 = frequency(nums1)
  const freq2 = frequency(nums2)
  const result = []
  for (const [num, freq] of Object.entries(freq1)) {
    const count = Math.min(freq, freq2[num] || 0)
    result.push(...Array.from({ length: count }, () => Number(num)))
  }
  return result
}
module.exports = {
  intersect
}
