// Merge k sorted linked lists and return it as one sorted list.Analyze and describe its complexity.

//   Example:

// Input:
// [
//   1 -> 4 -> 5,
//   1 -> 3 -> 4,
//   2 -> 6
// ]
// Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

const mergeKLists = lists => {
  let mergedList, currNode;
  const nodes = lists.slice();

  while (nodes.some(node => node)) {        // continue as long as one list has unmerged nodes left
    let minVal = Infinity;
    let minNodeIdx;

    for (let i = 0; i < nodes.length; i++) {                       // check the next node in every list to find next lowest node
      const node = nodes[i];

      if (node && node.val < minVal) {
        minVal = node.val;
        minNodeIdx = i;
      }
    }

    const minNode = nodes[minNodeIdx];
    if (mergedList) {
      currNode.next = nodes[minNodeIdx];
      currNode = minNode;
    } else {
      mergedList = nodes[minNodeIdx];
      currNode = mergedList;
    }
    nodes[minNodeIdx] = minNode.next;
  }

  return mergedList || null;                            // return null if nothing to merge
};


// time complexity: O(n * m), where n is the total number of nodes and m is the number of lists
// space complexity: O(n), for new list