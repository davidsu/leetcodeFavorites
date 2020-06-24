/*
 * @lc app=leetcode id=652 lang=javascript
 *
 * [652] Find Duplicate Subtrees
 *
 * https://leetcode.com/problems/find-duplicate-subtrees/description/
 *
 * algorithms
 * Medium (49.73%)
 * Total Accepted:    59.6K
 * Total Submissions: 119.9K
 * Testcase Example:  '[1,2,3,4,null,2,4,null,null,4]'
 *
 * Given a binary tree, return all duplicate subtrees. For each kind of
 * duplicate subtrees, you only need to return the root node of any one of
 * them.
 *
 * Two trees are duplicate if they have the same structure with same node
 * values.
 *
 * Example 1:
 *
 *
 * ⁠       1
 * ⁠      / \
 * ⁠     2   3
 * ⁠    /   / \
 * ⁠   4   2   4
 * ⁠      /
 * ⁠     4
 *
 *
 * The following are two duplicate subtrees:
 *
 *
 * ⁠     2
 * ⁠    /
 * ⁠   4
 *
 *
 * and
 *
 *
 * ⁠   4
 *
 * Therefore, you need to return above trees' root in the form of a list.
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
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function (root) {
  if (!root) return []
  const q = [root]
  const result = []
  const seen = new Map()
  while (q.length) {
    const node = q.pop()
    const serialized = JSON.stringify(node)
    seen.set(serialized, (seen.get(serialized) || 0) + 1)
    if (seen.has(serialized) && seen.get(serialized) === 2) {
      result.push(node)
      seen.set(serialized, 2)
    }
    if (node.left) q.push(node.left)
    if (node.right) q.push(node.right)
  }
  return result
}

module.exports = {
  findDuplicateSubtrees
}
