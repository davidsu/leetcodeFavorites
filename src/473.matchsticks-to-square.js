/*
 * @lc app=leetcode id=473 lang=javascript
 *
 * [473] Matchsticks to Square
 *
 * https://leetcode.com/problems/matchsticks-to-square/description/
 *
 * algorithms
 * Medium (37.26%)
 * Total Accepted:    34.4K
 * Total Submissions: 92.3K
 * Testcase Example:  '[1,1,2,2,2]'
 *
 * Remember the story of Little Match Girl? By now, you know exactly what
 * matchsticks the little match girl has, please find out a way you can make
 * one square by using up all those matchsticks. You should not break any
 * stick, but you can link them up, and each matchstick must be used exactly
 * one time.
 *
 * ⁠Your input will be several matchsticks the girl has, represented with their
 * stick length. Your output will either be true or false, to represent whether
 * you could make one square using all the matchsticks the little match girl
 * has.
 *
 * Example 1:
 *
 * Input: [1,1,2,2,2]
 * Output: true
 *
 * Explanation: You can form a square with length 2, one side of the square
 * came two sticks with length 1.
 *
 *
 *
 * Example 2:
 *
 * Input: [3,3,3,3,4]
 * Output: false
 *
 * Explanation: You cannot find a way to form a square with all the
 * matchsticks.
 *
 *
 *
 * Note:
 *
 * The length sum of the given matchsticks is in the range of 0 to 10^9.
 * The length of the given matchstick array will not exceed 15.
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const makesquare = function (nums) {
  const groups = [0, 0, 0, 0]
  const side = nums.reduce((sum, num) => sum + num, 0) / 4
  if (Math.floor(side) !== side) return false
  nums.sort((a, b) => b - a)
  function calc(idx = 0) {
    if (nums.length === idx) {
      return true
    }
    const num = nums[idx]
    for (let i = 0; i < 4; i++) {
      if (groups[i] + num <= side) {
        groups[i] += num
        if (calc(idx + 1)) return true
        groups[i] -= num
      }
    }
    return false
  }
  return nums.length > 3 && calc()
}

module.exports = {
  makesquare
}
