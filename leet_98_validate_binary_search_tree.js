// Given a binary tree, determine if it is a valid binary search tree(BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


//   Example 1:

// 2
//   / \
// 1   3

// Input: [2, 1, 3]
// Output: true
// Example 2:

// 5
//   / \
// 1   4
//   / \
// 3   6

// Input: [5, 1, 4, null, null, 3, 6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// more efficient: 
const isValidBST = root => {
  if (!root) return true;

  let lastVal = -Infinity;
  const stack = [];
  let currNode = root;

  while (currNode || stack.length) {
    while (currNode) {
      stack.push(currNode);
      currNode = currNode.left;
    }
    currNode = stack.pop();
    if (currNode.val <= lastVal) {
      return false;
    } else {
      lastVal = currNode.val;
    }
    currNode = currNode.right;
  }
  
  return true;
};

// const isValidBST = root => {
//   if (!root) return true;

//   if (root.left) {
//     let greatestLeftChild = root.left;

//     while (greatestLeftChild.right) {
//       greatestLeftChild = greatestLeftChild.right;
//     }

//     if (greatestLeftChild.val >= root.val) return false;
//   }

//   if (root.right) {
//     let smallestRightChild = root.right;

//     while (smallestRightChild.left) {
//       smallestRightChild = smallestRightChild.left;
//     }

//     if (smallestRightChild.val <= root.val) return false;
//   }

//   return isValidBST(root.left) && isValidBST(root.right);
// };