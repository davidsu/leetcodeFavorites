/*
 * @lc app=leetcode id=863 lang=javascript
 *
 * [863] All Nodes Distance K in Binary Tree
 *
 * https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/
 *
 * algorithms
 * Medium (54.69%)
 * Total Accepted:    73.4K
 * Total Submissions: 134.2K
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n2'
 *
 * We are given a binary tree (with root node root), a target node, and an
 * integer value K.
 *
 * Return a list of the values of all nodes that have a distance K from the
 * target node.  The answer can be returned in any order.
 *
 *
 *
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2
 *
 * Output: [7,4,1]
 *
 * Explanation:
 * The nodes that are a distance 2 from the target node (with value 5)
 * have values 7, 4, and 1.
 *
 *
 *
 * Note that the inputs "root" and "target" are actually TreeNodes.
 * The descriptions of the inputs above are just serializations of these
 * objects.
 *
 *
 *
 *
 * Note:
 *
 *
 * The given tree is non-empty.
 * Each node in the tree has unique values 0 <= node.val <= 500.
 * The target node is a node in the tree.
 * 0 <= K <= 1000.
 *
 *
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
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
const setParents = root => {
  const stack = [[root, null]]
  while (stack.length) {
    const [node, p] = stack.pop()
    node.p = p
    if (node.left) stack.push([node.left, node])
    if (node.right) stack.push([node.right, node])
  }
}
const distanceK = function (root, target, K) {
  setParents(root)
  const stack = [[target, 0, true, true, true]]
  const result = []
  while (stack.length) {
    const [node, distance, visitParent, visitLeft, visitRight] = stack.pop()
    const { p, left, right, val } = node
    if (distance === K) result.push(val)
    else {
      if (visitParent && p) stack.push([p, distance + 1, true, p.left !== node, p.right !== node])
      if (visitLeft && left) stack.push([left, distance + 1, false, true, true])
      if (visitRight && right) stack.push([right, distance + 1, false, true, true])
    }
  }
  return result
}

module.exports = {
  distanceK
}
