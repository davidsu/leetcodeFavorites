/*
 * @lc app=leetcode id=1315 lang=javascript
 *
 * [1315] Sum of Nodes with Even-Valued Grandparent
 *
 * https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/description/
 *
 * algorithms
 * Medium (83.61%)
 * Total Accepted:    24.6K
 * Total Submissions: 29.4K
 * Testcase Example:  '[6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]'
 *
 * Given a binary tree, return the sum of values of nodes with even-valued
 * grandparent.  (A grandparent of a node is the parent of its parent, if it
 * exists.)
 *
 * If there are no nodes with an even-valued grandparent, return 0.
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
 * Output: 18
 * Explanation: The red nodes are the nodes with even-value grandparent while
 * the blue nodes are the even-value grandparents.
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is between 1 and 10^4.
 * The value of nodes is between 1 and 100.
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
const sumEvenGrandparent = node => {
  const stack = [{ node }]
  let result = 0
  while (stack.length) {
    const { node, parent, grandparent } = stack.pop()
    if (grandparent && !(grandparent.val & 1)) result += node.val
    if (node.left) stack.push({ node: node.left, parent: node, grandparent: parent })
    if (node.right) stack.push({ node: node.right, parent: node, grandparent: parent })
  }
  return result
}

module.exports = {
  sumEvenGrandparent
}
