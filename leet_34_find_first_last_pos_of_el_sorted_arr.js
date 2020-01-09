// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

//   Example 1:

// Input: nums = [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]
// Example 2:

// Input: nums = [5, 7, 7, 8, 8, 10], target = 6
// Output: [-1, -1]

const searchRange = (nums, target) => {
  const lowerBound = lowerBinarySearch(nums, target);
  const upperBound = upperBinarySearch(nums, target);
  return [lowerBound, upperBound];
};

const binarySearch = (nums, target, start = 0, end = nums.length - 1) => {
  if (start > end) return -1;
  
  const midIdx = start + Math.floor((end - start) / 2);
  if (nums[midIdx] > target) {
    return binarySearch(nums, target, start, midIdx - 1);
  } else if (nums[midIdx] < target) {
    return binarySearch(nums, target, midIdx + 1, end);
  } else {
    return midIdx;
  }
};

const upperBinarySearch = (nums, target) => {
  let lastFoundIdx = binarySearch(nums, target);
  let upperBound = lastFoundIdx;
  
  while (lastFoundIdx !== -1) {
    lastFoundIdx = binarySearch(nums, target, lastFoundIdx + 1);
    if (lastFoundIdx !== -1) upperBound = lastFoundIdx;
  }

  return upperBound;
}

const lowerBinarySearch = (nums, target) => {
  let lastFoundIdx = binarySearch(nums, target);
  let lowestBound = lastFoundIdx;

  while (lastFoundIdx !== -1) {
    lastFoundIdx = binarySearch(nums, target, 0, lowestBound - 1);
    if (lastFoundIdx !== -1) lowestBound = lastFoundIdx;
  }

  return lowestBound;
}

// console.log(binarySearch([0, 1, 2, 3, 4], 0)); // 0
// console.log(binarySearch([0, 1, 2, 3, 4], 1)); // 1
// console.log(binarySearch([0, 1, 2, 3, 4], 2)); // 2
// console.log(binarySearch([0, 1, 2, 3, 4], 3)); // 3
// console.log(binarySearch([0, 1, 2, 3, 4], 4)); // 4
// console.log(binarySearch([0, 1, 2, 3, 4], 5)); // -1

console.log(lowerBinarySearch([5, 7, 7, 8, 8, 10], 8)); // 3
console.log(lowerBinarySearch([5, 7, 7, 8, 8, 10], 6)); // -1
console.log(upperBinarySearch([5, 7, 7, 8, 8, 10], 8)); // 4
console.log(upperBinarySearch([5, 7, 7, 8, 8, 10], 6)); // -1

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]