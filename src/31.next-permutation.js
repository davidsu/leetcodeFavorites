/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 *
 * https://leetcode.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (31.08%)
 * Total Accepted:    318.6K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,3]'
 *
 * Implement next permutation, which rearranges numbers into the
 * lexicographically next greater permutation of numbers.
 *
 * If such arrangement is not possible, it must rearrange it as the lowest
 * possible order (ie, sorted in ascending order).
 *
 * The replacement must be in-place and use only constant extra memory.
 *
 * Here are some examples. Inputs are in the left-hand column and its
 * corresponding outputs are in the right-hand column.
 *
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 *
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
  if (!nums || nums.length < 2) return nums
  const getLastOutOfOrder = () => {
    let last = nums.length - 1
    while (last > 0 && nums[last] <= nums[last - 1]) last--
    return last ? last - 1 : -1
  }
  const lastOutOfOrder = getLastOutOfOrder()
  if (lastOutOfOrder === -1) {
    nums.reverse()
    return nums
  }
  // everything up to outOfOrder should stay as is
  const prefix = nums.splice(0, lastOutOfOrder)

  const suffix = []

  // takeWhile not nextBigger
  while (nums[nums.length - 1] <= nums[0]) suffix.push(nums.pop())
  suffix.push(nums.shift())

  // newDivisor is nextBigger
  const newDivisor = nums.pop()
  const result = [...prefix, newDivisor, ...suffix, ...nums.reverse()]

  // reconstruct nums
  nums.length = 0
  nums.push(...result)
  return nums
}

module.exports = {
  nextPermutation
}
