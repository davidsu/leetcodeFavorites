/*
 * @lc app=leetcode id=919 lang=javascript
 *
 * [919] Complete Binary Tree Inserter
 *
 * https://leetcode.com/problems/complete-binary-tree-inserter/description/
 *
 * algorithms
 * Medium (56.79%)
 * Total Accepted:    15.1K
 * Total Submissions: 26.6K
 * Testcase Example:  '["CBTInserter","insert","get_root"]\n[[[1]],[2],[]]'
 *
 * A complete binary tree is a binary tree in which every level, except
 * possibly the last, is completely filled, and all nodes are as far left as
 * possible.
 *
 * Write a data structure CBTInserter that is initialized with a complete
 * binary tree and supports the following operations:
 *
 *
 * CBTInserter(TreeNode root) initializes the data structure on a given tree
 * with head node root;
 * CBTInserter.insert(int v) will insert a TreeNode into the tree with value
 * node.val = v so that the tree remains complete, and returns the value of the
 * parent of the inserted TreeNode;
 * CBTInserter.get_root() will return the head node of the tree.
 *
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
 * Input: inputs = ["CBTInserter","insert","get_root"], inputs = [[[1]],[2],[]]
 * Output: [null,1,[1,2]]
 *
 *
 *
 * Example 2:
 *
 *
 * Input: inputs = ["CBTInserter","insert","insert","get_root"], inputs =
 * [[[1,2,3,4,5,6]],[7],[8],[]]
 * Output: [null,3,4,[1,2,3,4,5,6,7,8]]
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * The initial given tree is complete and contains between 1 and 1000
 * nodes.
 * CBTInserter.insert is called at most 10000 times per test case.
 * Every value of a given or inserted node is between 0 and 5000.
 *
 *
 *
 *
 *
 *
 *
 *
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
 */
const CBTInserter = function (root) {
  this.root = root
  let curr = root
  const queue = [root]
  while (curr) {
    curr = queue[0].right ? queue.shift() : queue[0]
    if (curr.left) queue.push(curr.left)
    if (curr.right) queue.push(curr.right)
    if (!curr.right) curr = undefined
  }
  this.q = queue
}

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  const node = {
    val,
    left: null,
    right: null
  }
  this.q.push(node)
  const parent = this.q[0]
  if (!parent.left) {
    parent.left = node
  } else {
    parent.right = node
    this.q.shift()
  }
  return parent.val
}

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */

module.exports = {
  CBTInserter
}
