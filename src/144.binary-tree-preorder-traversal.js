/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (52.64%)
 * Total Accepted:    378.7K
 * Total Submissions: 719.4K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the preorder traversal of its nodes' values.
 *
 * Example:
 *
 *
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * Output: [1,2,3]
 *
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root) {
  if (!root) return []
  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
}

module.exports = {
  testFunc: preorderTraversal
}
