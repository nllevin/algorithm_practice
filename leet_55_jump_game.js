// Given an array of non - negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

//   Example 1:

// Input: [2, 3, 1, 1, 4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
//   Example 2:

// Input: [3, 2, 1, 0, 4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what.Its maximum
// jump length is 0, which makes it impossible to reach the last index.

// O(n^2) time, O(n) space using tabulation:
// const canJump = nums => {
//   if (nums.length <= 1) return true;

//   const table = new Array(nums.length).fill(false);
//   table[0] = true;

//   for (let start = 0; start < nums.length; start++) {
//     if (!table[start]) return false;
//     const numSteps = nums[start];
//     for (let end = start + 1; end <= start + numSteps; end++) {
//       if (end === nums.length - 1) return true;
//       table[end] = true;
//     }
//   }
// };

// O(n) time, O(1) space:
const canJump = nums => {
  let maxPosReached = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxPosReached) return false;
    if (i + nums[i] > maxPosReached) maxPosReached = i + nums[i];
    if (maxPosReached >= nums.length - 1) return true;
  }
}

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false