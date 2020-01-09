// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0, 1, 2, 4, 5, 6, 7] might become[4, 5, 6, 7, 0, 1, 2]).

// You are given a target value to search.If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
// Output: -1

const search = (nums, target) => {
  const pivotIdx = findPivot(nums);
  let [start, end] = [0, nums.length - 1];

  while (start <= end) {
    const midDist = Math.floor((end - start) / 2);
    const midIdx = (midDist + start + pivotIdx) % nums.length;

    if (nums[midIdx] > target) {
      end -= midDist || 1;
    } else if (nums[midIdx] < target) {
      start += midDist || 1;
    } else {
      return midIdx;
    }
  }

  return -1;
};

const findPivot = nums => {
  if (nums[0] < nums[nums.length - 1] || nums.length <= 1) return 0;
  let i = 0;
  let endIdx = nums.length - 1;

  while (true) {
    if (nums[i] > nums[i + 1]) return i + 1;

    const midIdx = i + Math.floor((endIdx - i) / 2);
    if (nums[midIdx] > nums[i]) {                                               // implies left of midIdx is all sorted
      i = midIdx;
    } else {                                                                    // implies pivot point is to the left of midIdx
      endIdx = midIdx;
    }
  }
};

// console.log(findPivot([3, 4, 5, 6, 7, 0, 1, 2])); // 5
// console.log(findPivot([4, 5, 6, 7, 0, 1, 2])); // 4
// console.log(findPivot([4, 5, 6, 7, 0, 2])); // 4
// console.log(findPivot([4, 5, 6, 7, 0])); // 4
// console.log(findPivot([5, 6, 7, 0, 1, 2])); // 3
// console.log(findPivot([6, 7, 0, 1, 2])); // 2
// console.log(findPivot([7, 0, 1, 2])); // 1
// console.log(findPivot([0, 1, 2, 4, 5, 6, 7])); // 0

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 1)); // 5
console.log(search([4, 5, 6, 7, 0, 1, 2], 6)); // 2
console.log(search([4, 5, 6, 7, 0, 1, 2], 7)); // 3
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([], 5)); // -1
console.log(search([1], 0)); // -1