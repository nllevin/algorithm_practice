// Given a linked list, remove the n - th node from the end of list and return its head.

//   Example:

// Given linked list: 1 -> 2 -> 3 -> 4 -> 5, and n = 2.

// After removing the second node from the end, the linked list becomes 1 -> 2 -> 3 -> 5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass ?

const removeNthFromEnd = function(head, n) {
  if (!head.next) return null;

  const arr = [];
  let i = 0;
  let currNode = head;
  while (currNode) {
    arr[i] = currNode;
    currNode = currNode.next;
    i++;
  }

  if (n === arr.length) return head.next;

  arr[arr.length - n - 1].next = arr[arr.length - n + 1];
  return head;
};