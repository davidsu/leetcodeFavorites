/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 *
 * https://leetcode.com/problems/arranging-coins/description/
 *
 * algorithms
 * Easy (39.75%)
 * Total Accepted:    96.4K
 * Total Submissions: 242.4K
 * Testcase Example:  '5'
 *
 * You have a total of n coins that you want to form in a staircase shape,
 * where every k-th row must have exactly k coins.
 * ⁠
 * Given n, find the total number of full staircase rows that can be formed.
 *
 * n is a non-negative integer and fits within the range of a 32-bit signed
 * integer.
 *
 * Example 1:
 *
 * n = 5
 *
 * The coins can form the following rows:
 * ¤
 * ¤ ¤
 * ¤ ¤
 *
 * Because the 3rd row is incomplete, we return 2.
 *
 *
 *
 * Example 2:
 *
 * n = 8
 *
 * The coins can form the following rows:
 * ¤
 * ¤ ¤
 * ¤ ¤ ¤
 * ¤ ¤
 *
 * Because the 4th row is incomplete, we return 3.
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = n => {
  let low = 0
  let high = n
  while (low < high) {
    const mid = Math.ceil((low + high) / 2)
    if ((mid * (mid + 1)) / 2 > n) {
      high = mid - 1
    } else {
      low = mid
    }
  }
  return low
}

module.exports = {
  arrangeCoins
}
