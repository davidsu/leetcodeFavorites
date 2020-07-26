/*
 * @lc app=leetcode id=1361 lang=javascript
 *
 * [1361] Validate Binary Tree Nodes
 *
 * https://leetcode.com/problems/validate-binary-tree-nodes/description/
 *
 * algorithms
 * Medium (49.32%)
 * Total Accepted:    12.1K
 * Total Submissions: 24.5K
 * Testcase Example:  '4\n[1,-1,3,-1]\n[2,-1,-1,-1]'
 *
 * You have n binary tree nodes numbered from 0 to n - 1 where node i has two
 * children leftChild[i] and rightChild[i], return true if and only if all the
 * given nodes form exactly one valid binary tree.
 *
 * If node i has no left child then leftChild[i] will equal -1, similarly for
 * the right child.
 *
 * Note that the nodes have no values and that we only use the node numbers in
 * this problem.
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 *
 *
 * Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]
 * Output: false
 *
 *
 * Example 3:
 *
 *
 *
 *
 * Input: n = 2, leftChild = [1,0], rightChild = [-1,-1]
 * Output: false
 *
 *
 * Example 4:
 *
 *
 *
 *
 * Input: n = 6, leftChild = [1,-1,-1,4,-1,-1], rightChild = [2,-1,-1,5,-1,-1]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 10^4
 * leftChild.length == rightChild.length == n
 * -1 <= leftChild[i], rightChild[i] <= n - 1
 *
 *
 */
/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
const validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  if (n === 0) return true
  if (n === 1) return leftChild[0] === -1 && rightChild[0] === -1
  const parents = new Array(n)
  const used = new Set()
  for (let i = 0; i < leftChild.length; i++) {
    if (leftChild[i] !== -1) {
      if (parents[leftChild[i]] !== undefined) return false
      parents[leftChild[i]] = i
      used.add(i)
      used.add(leftChild[i])
    }
  }
  for (let i = 0; i < rightChild.length; i++) {
    if (rightChild[i] !== -1) {
      if (parents[rightChild[i]] !== undefined && parents[rightChild[i]] !== i) return false
      parents[rightChild[i]] = i
      used.add(i)
      used.add(rightChild[i])
    }
  }
  if (used.size !== n) return false
  let foundRoot = false
  for (let i = 0; i < n; i++) {
    if (parents[i] === undefined && foundRoot) return false
    else if (parents[i] === undefined) foundRoot = true
  }
  return foundRoot
}

module.exports = {
  validateBinaryTreeNodes
}
