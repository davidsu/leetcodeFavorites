/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (41.11%)
 * Total Accepted:    189.2K
 * Total Submissions: 441.5K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 *
 * Note:
 * You may assume that duplicates do not exist in the tree.
 *
 * For example, given
 *
 *
 * inorder = [9,3,15,20,7]
 * postorder = [9,15,7,20,3]
 *
 * Return the following binary tree:
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const findRootIdx = (inorder, startIdx, endIdx, rootVal) => {
    let runner = startIdx
    while (runner <= endIdx) {
        if (inorder[runner] === rootVal) {
            return runner
        }
        runner++
    }
    return -1
}

function buildTree (inorder, postorder, startIdx = 0, endIdx = inorder.length - 1) {
    if (!postorder.length || startIdx > endIdx) return null
    const rootVal = postorder.pop()
    const inOrderRootIdx = findRootIdx(inorder, startIdx, endIdx, rootVal)

    const root = {
        val: rootVal,
        right: buildTree(inorder, postorder, inOrderRootIdx + 1, endIdx),
        left: buildTree(inorder, postorder, startIdx, inOrderRootIdx - 1)
    }

    return root
}

module.exports = {
    buildTree
}
