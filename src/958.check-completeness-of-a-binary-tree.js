/*
 * @lc app=leetcode id=958 lang=javascript
 *
 * [958] Check Completeness of a Binary Tree
 *
 * https://leetcode.com/problems/check-completeness-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (51.71%)
 * Total Accepted:    48.2K
 * Total Submissions: 93.2K
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * Given a binary tree, determine if it is a complete binary tree.
 *
 * Definition of a complete binary tree from Wikipedia:
 * In a complete binary tree every level, except possibly the last, is
 * completely filled, and all nodes in the last level are as far left as
 * possible. It can have between 1 and 2^h nodes inclusive at the last level
 * h.
 *
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: [1,2,3,4,5,6]
 * Output: true
 * Explanation: Every level before the last is full (ie. levels with
 * node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are
 * as far left as possible.
 *
 *
 *
 * Example 2:
 *
 *
 *
 *
 * Input: [1,2,3,4,5,null,7]
 * Output: false
 * Explanation: The node with value 7 isn't as far left as possible.
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * The tree will have between 1 and 100 nodes.
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
 * @return {boolean}
 */
// TODO: this is soooo overly complicated. find the simple solution
let noMoreChildren
function visitLevel(curr) {
  let n = curr.length
  let onlyNull = false
  while (n--) {
    const node = curr.shift()
    if (!node) onlyNull = true
    else if (noMoreChildren && (node.left || node.right)) return false
    else if (!onlyNull) {
      curr.push(node.left)
      curr.push(node.right)
      noMoreChildren = noMoreChildren || !node.left || !node.right
    } else {
      return false
    }
  }
  return true
}
function isCompleteTree(root) {
  noMoreChildren = false
  const q = [root]
  while (q.length) {
    const wasValid = visitLevel(q)
    if (!wasValid) return false
  }
  return true
}

module.exports = {
  isCompleteTree
}
