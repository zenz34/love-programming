/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function(head) {
  // base case
  if (head === null || head.next === null) {
    return head;
  }

  // logic
  const nextNext = head.next.next;
  const next = head.next;
  next.next = head;
  head.next = swapPairs(nextNext);

  // return
  return next;
};

