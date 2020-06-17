/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
 *
 * https://leetcode.com/problems/find-mode-in-binary-search-tree/description/
 *
 * algorithms
 * Easy (41.78%)
 * Total Accepted:    82K
 * Total Submissions: 196.3K
 * Testcase Example:  '[1,null,2,2]'
 *
 * Given a binary search tree (BST) with duplicates, find all the mode(s) (the
 * most frequently occurred element) in the given BST.
 *
 * Assume a BST is defined as follows:
 *
 *
 * The left subtree of a node contains only nodes with keys less than or equal
 * to the node's key.
 * The right subtree of a node contains only nodes with keys greater than or
 * equal to the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 *
 *
 *
 * For example:
 * Given BST [1,null,2,2],
 *
 *
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  2
 *
 *
 *
 *
 * return [2].
 *
 * Note: If a tree has more than one mode, you can return them in any order.
 *
 * Follow up: Could you do that without using any extra space? (Assume that the
 * implicit stack space incurred due to recursion does not count).
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
 * @return {number[]}
 */
// TODO: suppose that equal values are allways linked together.
// implement with real O(1) space - hint: 2pass solution
const findMode = function (root) {
  if (!root) return []
  const q = [root]
  const freq = {}
  let max = 0
  while (q.length) {
    const node = q.pop()
    freq[node.val] = (freq[node.val] || 0) + 1
    max = Math.max(max, freq[node.val])
    if (node.left) q.push(node.left)
    if (node.right) q.push(node.right)
  }
  return Object.entries(freq)
    .filter(([num, frequency]) => frequency === max)
    .map(([num]) => +num)
}

module.exports = {
  findMode
}
