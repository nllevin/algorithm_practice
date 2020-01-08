// Merge two sorted linked lists and return it as a new list.The new list should be made by splicing together the nodes of the first two lists.

//   Example:

// Input: 1 -> 2 -> 4, 1 -> 3 -> 4
// Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

const mergeTwoLists = function(l1, l2) {
  let newList, currNode;
  let node1 = l1;
  let node2 = l2;

  if (node1 && node2) {
    if (node1.val < node2.val) {
      newList = node1;
      node1 = node1.next;
    } else {
      newList = node2;
      node2 = node2.next;
    }
  } else {
    return node1 || node2;
  }

  currNode = newList;

  while (node1 && node2) {
    if (node1.val < node2.val) {
      currNode.next = node1;
      currNode = node1;
      node1 = node1.next;
    } else {
      currNode.next = node2;
      currNode = node2;
      node2 = node2.next;
    }
  }

  currNode.next = node1 || node2;

  return newList;
};