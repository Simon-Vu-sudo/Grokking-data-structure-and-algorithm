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

class ListNode {
       val: number
       next: ListNode | null
       constructor(val?: number, next?: ListNode | null) {
           this.val = (val===undefined ? 0 : val)
           this.next = (next===undefined ? null : next)
       }
   }

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

function isPalindrome(head: any): boolean {
  if(!head) return false;
  let slow = head, fast = head;

  while(fast !== null && fast.next !== null) {
          slow = slow.next;
          fast = fast.next.next;
  }

  let prev: any = null;
  while(slow !== null) {
    let tempNextHead = slow.next;
    slow.next = prev;
    prev = slow;
    slow = tempNextHead;
  }

  while(prev !== null && head !== null) {
    if(prev.val !== head.val) return false;

      prev = prev.next;
      head = head.next;
  }

  return true;
}

function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  
  const head = new ListNode(arr[0]);
  let current = head;
  
  for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
  }
  
  return head;
}


// Test cases
function runTests() {
  const testCases = [
      { input: [1,0,3,4,0,1], expected: false},
  ];
  
  let passedTests = 0;
  
  for (const test of testCases) {
      const linkedList = createLinkedList(test.input);
      const result = isPalindrome(linkedList);
      
      console.log(`Input: [${test.input}]`);
      console.log(`Expected: ${test.expected}, Got: ${result}`);
      console.log(`Result: ${result === test.expected ? 'PASS' : 'FAIL'}`);
      console.log('---');
      
      if (result === test.expected) passedTests++;
  }
  
  console.log(`Passed ${passedTests}/${testCases.length} tests`);
}

// Run the tests
runTests();