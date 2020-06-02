/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/
 *
 * algorithms
 * Medium (42.58%)
 * Total Accepted:    193.4K
 * Total Submissions: 454.2K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given a singly linked list where elements are sorted in ascending order,
 * convert it to a height balanced BST.
 *
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more
 * than 1.
 *
 * Example:
 *
 *
 * Given the sorted linked list: [-10,-3,0,5,9],
 *
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following
 * height balanced BST:
 *
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

// elegant solution here
// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/discuss/502147/Easy-to-understand-Javascript-solution
const toArray = (head) => (head ? [head.val, ...toArray(head.next)] : [])
function withAuxiliaryArray(head) {
  const arr = toArray(head)
  function arrayToBst(start, end) {
    if (start > end) return null
    const idx = parseInt((start + end) / 2)
    return {
      val: arr[idx],
      left: arrayToBst(start, idx - 1),
      right: arrayToBst(idx + 1, end)
    }
  }
  return arrayToBst(0, arr.length - 1)
}

module.exports = {
  withAuxiliaryArray
}
