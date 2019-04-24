/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head;

  const p = reverseList(head.next); //  tricky! return original tail
  head.next.next = head;
  head.next = null; //  tricky! every node do it but it's ok. 1 to n - 1 nodes'next will be modified
  return p;
};

