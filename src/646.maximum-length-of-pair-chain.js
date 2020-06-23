/*
 * @lc app=leetcode id=646 lang=javascript
 *
 * [646] Maximum Length of Pair Chain
 *
 * https://leetcode.com/problems/maximum-length-of-pair-chain/description/
 *
 * algorithms
 * Medium (51.10%)
 * Total Accepted:    54.1K
 * Total Submissions: 105.9K
 * Testcase Example:  '[[1,2], [2,3], [3,4]]'
 *
 *
 * You are given n pairs of numbers. In every pair, the first number is always
 * smaller than the second number.
 *
 *
 *
 * Now, we define a pair (c, d) can follow another pair (a, b) if and only if b
 * < c. Chain of pairs can be formed in this fashion.
 *
 *
 *
 * Given a set of pairs, find the length longest chain which can be formed. You
 * needn't use up all the given pairs. You can select pairs in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: [[1,2], [2,3], [3,4]]
 * Output: 2
 * Explanation: The longest chain is [1,2] -> [3,4]
 *
 *
 *
 * Note:
 *
 * The number of given pairs will be in the range [1, 1000].
 *
 *
 */
/**
 * @param {number[][]} pairs
 * @return {number}
 */
// TODO: find a sort + greedy solution of O(nlgn)
const findLongestChain = function (pairs) {
  pairs = pairs.sort(([a1, a2], [b1, b2]) => a1 - b1 || a2 - b2).map(p => [...p, 1])
  let max = pairs.length ? 1 : 0
  for (let i = 0; i < pairs.length; i++) {
    const [, end, count] = pairs[i]
    for (let j = pairs.length - 1; j > 0 && pairs[j][0] > end; j--) {
      pairs[j][2] = Math.max(pairs[j][2], count + 1)
      max = Math.max(max, pairs[j][2])
    }
  }
  return max
}

module.exports = {
  findLongestChain
}
