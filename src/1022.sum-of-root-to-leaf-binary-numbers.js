/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
 *
 * https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/description/
 *
 * algorithms
 * Easy (66.10%)
 * Total Accepted:    37.5K
 * Total Submissions: 56.7K
 * Testcase Example:  '[1,0,1,0,1,0,1]'
 *
 * Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path
 * represents a binary number starting with the most significant bit.  For
 * example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent
 * 01101 in binary, which is 13.
 *
 * For all leaves in the tree, consider the numbers represented by the path
 * from the root to that leaf.
 *
 * Return the sum of these numbers.
 *
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: [1,0,1,0,1,0,1]
 * Output: 22
 * Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
 *
 *
 *
 *
 * Note:
 *
 *
 * The number of nodes in the tree is between 1 and 1000.
 * node.val is 0 or 1.
 * The answer will not exceed 2^31 - 1.
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
 * @param {TreeNode} root
 * @return {number}
 */
const sumroottoleaf = function (root) {
  const q = []
  const vals = []
  const peek = () => q[q.length - 1]
  const isLeaf = node => !node.left && !node.right
  while (q.length || root) {
    if (root) {
      q.push(root)
      root = root.left
    } else {
      const parent = peek()
      if (!parent.isVisited && isLeaf(parent)) {
        vals.push(q.map(a => a.val).join(''))
      }
      if (!parent.isVisited) {
        parent.isVisited = true
        root = parent.right
      } else {
        q.pop()
      }
    }
  }
  return vals.reduce((total, n) => total + parseInt(n, 2), 0)
}

module.exports = {
  sumroottoleaf
}
