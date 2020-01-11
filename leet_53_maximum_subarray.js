// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

//   Example:

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
//   Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

const maxSubArray = nums => {
  let maxSum = -Infinity;
  let runningTally = 0;

  for (num of nums) {
    runningTally += num;
    if (runningTally > maxSum) maxSum = runningTally;
    if (runningTally < 0) runningTally = 0;
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));