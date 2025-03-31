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

function isPalindrome(head: any): boolean {
  if(head === null || head.next === null) {
      return true;
  }

  let slow = head, fast = head;
  while(fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  }

  let reversedSecondHaft: any = reverseLinkedList(slow)
  
  console.log(head);
  console.log(reversedSecondHaft);

  while(reversedSecondHaft !== null && head !== null) {
    console.log(head.val);
    console.log(reversedSecondHaft.val);
      if(head.val !== reversedSecondHaft.val) return false;

      head = head.next
      reversedSecondHaft = reversedSecondHaft.next;
  }

  if(head === null || reversedSecondHaft === null) return true; 

  return false;
};

function reverseLinkedList(head: ListNode | null): ListNode {
  let prev: any = null;
  while(head !== null) {
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
  }

  return prev;
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
      { input: [1,2,2,1], expected: true},
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