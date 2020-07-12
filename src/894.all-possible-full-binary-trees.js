/*
 * @lc app=leetcode id=894 lang=javascript
 *
 * [894] All Possible Full Binary Trees
 *
 * https://leetcode.com/problems/all-possible-full-binary-trees/description/
 *
 * algorithms
 * Medium (74.74%)
 * Total Accepted:    36.2K
 * Total Submissions: 48.5K
 * Testcase Example:  '7'
 *
 * A full binary tree is a binary tree where each node has exactly 0 or 2
 * children.
 *
 * Return a list of all possible full binary trees with N nodes.  Each element
 * of the answer is the root node of one possible tree.
 *
 * Each node of each tree in the answer must have node.val = 0.
 *
 * You may return the final list of trees in any order.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: 7
 * Output:
 * [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
 * Explanation:
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= N <= 20
 *
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
const allPossibleFBT = function (N) {
  if (N === 1) return [{ val: 0, left: null, right: null }]
  const result = []
  N--
  for (let i = 1; i <= N; i += 2) {
    const lefts = allPossibleFBT(i)
    const rights = allPossibleFBT(N - i)
    for (let j = 0; j < rights.length; j++) {
      for (let k = 0; k < lefts.length; k++) {
        result.push({ val: 0, right: rights[j], left: lefts[k] })
      }
    }
  }
  return result
}

module.exports = {
  allPossibleFBT
}
