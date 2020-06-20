/*
 * @lc app=leetcode id=1128 lang=javascript
 *
 * [1128] Number of Equivalent Domino Pairs
 *
 * https://leetcode.com/problems/number-of-equivalent-domino-pairs/description/
 *
 * algorithms
 * Easy (47.50%)
 * Total Accepted:    20.8K
 * Total Submissions: 43.7K
 * Testcase Example:  '[[1,2],[2,1],[3,4],[5,6]]'
 *
 * Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j]
 * = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that
 * is, one domino can be rotated to be equal to another domino.
 *
 * Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length,
 * and dominoes[i] is equivalent to dominoes[j].
 *
 *
 * Example 1:
 * Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
 * Output: 1
 *
 *
 * Constraints:
 *
 *
 * 1 <= dominoes.length <= 40000
 * 1 <= dominoes[i][j] <= 9
 *
 */
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const frequency = dominoes =>
  dominoes.reduce((m, [n1, n2]) => {
    const key = Math.max(n1, n2) * 10 + Math.min(n1, n2)
    m[key] = (m[key] || 0) + 1
    return m
  }, {})
const frequencyToTotalReducer = (result, count) => result + (count * (count - 1)) / 2
const numEquivDominoPairs = dominoes =>
  Object.values(frequency(dominoes)).reduce(frequencyToTotalReducer, 0)

module.exports = {
  numEquivDominoPairs
}
