/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (37.07%)
 * Total Accepted:    349K
 * Total Submissions: 921K
 * Testcase Example:  '[1,2]'
 *
 * Given a singly linked list, determine if it is a palindrome.
 *
 * Example 1:
 *
 *
 * Input: 1->2
 * Output: false
 *
 * Example 2:
 *
 *
 * Input: 1->2->2->1
 * Output: true
 *
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */
const reverse = (head, prev = null) => {
  const next = head.next;
  head.next = prev;
  return next ? reverse(next, head) : head;
};
const isPalindrome = function (head) {
  if (!head || !head.next) return true;
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = reverse(slow.next);
  slow = slow.next;
  while (slow && head.val === slow.val) {
    slow = slow.next;
    head = head.next;
  }
  return !slow;
};

module.exports = {
  isPalindrome
};
