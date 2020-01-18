// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1, null, 2, 3]
// 1
// \
// 2
//   /
//   3

// Output: [1, 3, 2]
// Follow up: Recursive solution is trivial, could you do it iteratively ?

// iterative solution:
const inorderTraversal = root => {
  const res = [];
  const stack = [];
  let currNode = root;

  while (currNode || stack.length) {
    while (currNode) {
      stack.push(currNode);
      currNode = currNode.left;
    }
    currNode = stack.pop();
    res.push(currNode.val);
    currNode = currNode.right;
  }

  return res;
}

// recursive solution:
// const inorderTraversal = root => {
//   const res = [];
//   if (!root) return res;

//   if (root.left) res.push(...inorderTraversal(root.left));
//   res.push(root.val);
//   if (root.right) res.push(...inorderTraversal(root.right));

//   return res;
// };