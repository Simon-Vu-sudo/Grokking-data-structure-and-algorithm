// Propblem:
// Given the head of a Singly LinkedList,
// write a function to determine if the LinkedList has a cycle in it or not.

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// const has_cycle = function (head) {
//   let fastPointer = head,
//     slowPointer = head;
//   while (fastPointer && slowPointer) {
//     fastPointer = fastPointer.next.next;
//     slowPointer = slowPointer.next;
//     if (fastPointer === slowPointer) return true;
//   }
//   return false;
// };

// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);

// head.next.next.next.next.next.next = head.next.next;
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);

// head.next.next.next.next.next.next = head.next.next.next;
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);

// Propblem:
// Given the head of a Singly LinkedList,
// write a function to determine the length of a cycle.

class NodeEx2 {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const cycle_length = function (headEx) {
  let fastPointer = headEx,
    slowPointer = headEx;
  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    if (fastPointer === slowPointer) {
      return count_cycle_length(slowPointer);
    }
  }
  return 0;
};

const count_cycle_length = (node) => {
  let current = node;
  let count = 0;
  while (true) {
    console.log(current.value);
    current = current.next;
    count++;
    if (current === node) break;
  }
  return count;
};

let headEx2 = new NodeEx2(1);
headEx2.next = new NodeEx2(2);
headEx2.next.next = new NodeEx2(3);
headEx2.next.next.next = new NodeEx2(4);
headEx2.next.next.next.next = new NodeEx2(5);
headEx2.next.next.next.next.next = new NodeEx2(6);

console.log(`LinkedList has cycle: ${cycle_length(headEx2)}`);

headEx2.next.next.next.next.next.next = headEx2.next.next;
console.log(`LinkedList has cycle: ${cycle_length(headEx2)}`);

headEx2.next.next.next.next.next.next = headEx2.next.next.next;
console.log(`LinkedList has cycle: ${cycle_length(headEx2)}`);
