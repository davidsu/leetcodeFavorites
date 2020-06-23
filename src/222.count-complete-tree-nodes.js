/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
 *
 * https://leetcode.com/problems/count-complete-tree-nodes/description/
 *
 * algorithms
 * Medium (42.86%)
 * Total Accepted:    207.5K
 * Total Submissions: 476.9K
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * Given a complete binary tree, count the number of nodes.
 *
 * Note:
 *
 * Definition of a complete binary tree from Wikipedia:
 * In a complete binary tree every level, except possibly the last, is
 * completely filled, and all nodes in the last level are as far left as
 * possible. It can have between 1 and 2^h nodes inclusive at the last level
 * h.
 *
 * Example:
 *
 *
 * Input:
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * ⁠/ \  /
 * 4  5 6
 *
 * Output: 6
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
// TODO: this is potentially O(n) time. find a better way!!
const calcDepth = (root, depth = -1) => (root ? calcDepth(root.left, depth + 1) : depth)
const getMissing = (root, depth, currentDepth = 0) => {
  if (currentDepth === depth - 1) {
    if (!root.left) return { missing: 2, finished: false }
    return { finished: true, missing: root.right ? 0 : 1 }
  }
  const { finished, missing } = getMissing(root.right, depth, currentDepth + 1)
  if (finished) return { finished, missing }
  const { finished: leftFinished, missing: leftMissing } = getMissing(
    root.left,
    depth,
    currentDepth + 1
  )
  return { finished: leftFinished, missing: missing + leftMissing }
}

const countNodes = function (root) {
  if (!root) return 0
  const depth = calcDepth(root)
  if (depth < 1) return depth + 1
  const full = 2 * 2 ** depth - 1
  const { missing } = getMissing(root, depth)
  return full - missing
}

module.exports = {
  countNodes
}
