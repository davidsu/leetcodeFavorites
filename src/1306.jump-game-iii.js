/*
 * @lc app=leetcode id=1306 lang=javascript
 *
 * [1306] Jump Game III
 *
 * https://leetcode.com/problems/jump-game-iii/description/
 *
 * algorithms
 * Medium (60.42%)
 * Total Accepted:    25.5K
 * Total Submissions: 42.2K
 * Testcase Example:  '[4,2,3,0,3,1,2]\n5'
 *
 * Given an array of non-negative integers arr, you are initially positioned at
 * start index of the array. When you are at index i, you can jump to i +
 * arr[i] or i - arr[i], check if you can reach to any index with value 0.
 *
 * Notice that you can not jump outside of the array at any time.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [4,2,3,0,3,1,2], start = 5
 * Output: true
 * Explanation:
 * All possible ways to reach at index 3 with value 0 are:
 * index 5 -> index 4 -> index 1 -> index 3
 * index 5 -> index 6 -> index 4 -> index 1 -> index 3
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [4,2,3,0,3,1,2], start = 0
 * Output: true
 * Explanation:
 * One possible way to reach at index 3 with value 0 is:
 * index 0 -> index 4 -> index 1 -> index 3
 *
 *
 * Example 3:
 *
 *
 * Input: arr = [3,0,2,1,2], start = 2
 * Output: false
 * Explanation: There is no way to reach at index 1 with value 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 5 * 10^4
 * 0 <= arr[i] < arr.length
 * 0 <= start < arr.length
 *
 *
 */
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = function (arr, start) {
  const stack = [start]
  while (stack.length) {
    if (arr[stack[stack.length - 1]] === 0 || arr[stack[stack.length - 2]] === 0) return true
    const idx = stack.pop()
    const forward = idx + arr[idx]
    const back = idx - arr[idx]
    if (forward < arr.length && arr[forward] >= 0) {
      stack.push(forward)
      arr[forward] *= -1
    }
    if (back > -1 && arr[back] >= 0) {
      stack.push(back)
      arr[back] *= -1
    }
  }
  return false
}

module.exports = {
  canReach
}
