/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
 *
 * https://leetcode.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (28.00%)
 * Total Accepted:    214.3K
 * Total Submissions: 765.2K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, rotate the list to the right by k places, where k is
 * non-negative.
 *
 * Example 1:
 *
 *
 * Input: 1->2->3->4->5->NULL, k = 2
 * Output: 4->5->1->2->3->NULL
 * Explanation:
 * rotate 1 steps to the right: 5->1->2->3->4->NULL
 * rotate 2 steps to the right: 4->5->1->2->3->NULL
 *
 *
 * Example 2:
 *
 *
 * Input: 0->1->2->NULL, k = 4
 * Output: 2->0->1->NULL
 * Explanation:
 * rotate 1 steps to the right: 2->0->1->NULL
 * rotate 2 steps to the right: 1->2->0->NULL
 * rotate 3 steps to the right: 0->1->2->NULL
 * rotate 4 steps to the right: 2->0->1->NULL
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function getFast (head, k) {
    let fast = head
    let i = 0
    while (i < k && fast) {
        fast = fast.next
        i++
    }
    if (i < k) {
        return getFast(head, k % i)
    }
    return fast
}
const rotateRight = function (head, k) {
    let slow = head
    let fast = getFast(head, k)
    let retVal = head
    while (fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }
    if (fast) {
        fast.next = head
        retVal = slow.next
        slow.next = null
    }
    return retVal
}

module.exports = {
    testFunc: rotateRight
}
