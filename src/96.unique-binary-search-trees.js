/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 *
 * https://leetcode.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (50.87%)
 * Total Accepted:    285K
 * Total Submissions: 553K
 * Testcase Example:  '3'
 *
 * Given n, how many structurally unique BST's (binary search trees) that store
 * values 1 ... n?
 *
 * Example:
 *
 *
 * Input: 3
 * Output: 5
 * Explanation:
 * Given n = 3, there are a total of 5 unique BST's:
 *
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
  if (n < 3) return n
  const memo = [1, 1, 2]
  for (let i = 3; i <= n; i++) {
    const start = Math.ceil(i / 2)
    let result = 0
    for (let j = i - 1, k = 0; j >= start; j--, k++) {
      result += 2 * (memo[j] * memo[k])
    }
    if (i % 2) result += memo[Math.floor(i / 2)] * memo[Math.floor(i / 2)]
    memo[i] = result
  }
  return memo[n]
}

module.exports = {
  numTrees
}
