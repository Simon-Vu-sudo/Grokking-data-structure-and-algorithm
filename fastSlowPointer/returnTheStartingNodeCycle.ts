/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head, fast = head;
  while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if(slow.val === fast.val) {
          slow = head;
          while(slow.val !== fast.val) {
              slow = slow.next;
              fast = fast.next;
          }
          return slow;
      }
  }
  return null
};