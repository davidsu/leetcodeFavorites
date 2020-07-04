/*
 * @lc app=leetcode id=670 lang=javascript
 *
 * [670] Maximum Swap
 *
 * https://leetcode.com/problems/maximum-swap/description/
 *
 * algorithms
 * Medium (43.15%)
 * Total Accepted:    65.4K
 * Total Submissions: 151.6K
 * Testcase Example:  '2736'
 *
 *
 * Given a non-negative integer, you could swap two digits at most once to get
 * the maximum valued number. Return the maximum valued number you could get.
 *
 *
 * Example 1:
 *
 * Input: 2736
 * Output: 7236
 * Explanation: Swap the number 2 and the number 7.
 *
 *
 *
 * Example 2:
 *
 * Input: 9973
 * Output: 9973
 * Explanation: No swap.
 *
 *
 *
 *
 * Note:
 *
 * The given number is in the range [0, 10^8]
 *
 *
 */
/**
 * @param {number} num
 * @return {number}
 */
// TODO: solve with O(n) single pass solution
const maximumSwap = num => {
  const numAsArray = num
    .toString(10)
    .split('')
    .map(a => +a)
  const sorted = numAsArray.map(a => a).sort((a, b) => b - a)
  const swapIdx = sorted.findIndex((num, idx) => num > numAsArray[idx])
  if (swapIdx === -1) return num
  let max = [numAsArray[swapIdx], swapIdx]
  for (let i = swapIdx + 1; i < numAsArray.length; i++) {
    if (numAsArray[i] >= max[0]) {
      max = [numAsArray[i], i]
    }
  }
  numAsArray[max[1]] = numAsArray[swapIdx]
  numAsArray[swapIdx] = max[0]
  return Number(numAsArray.join(''))
}

module.exports = {
  maximumSwap
}
