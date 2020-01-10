// Given an unsorted integer array, find the smallest missing positive integer.

//   Example 1:

// Input: [1, 2, 0]
// Output: 3
// Example 2:

// Input: [3, 4, -1, 1]
// Output: 2
// Example 3:

// Input: [7, 8, 9, 11, 12]
// Output: 1
// Note:

// Your algorithm should run in O(n) time and uses constant extra space.

// possibly worse than O(n) time:
// const firstMissingPositive = nums => {
//   let sorted = false;
//   while (!sorted) {
//     sorted = true;
//     for (let i = 0; i < nums.length; i++) {
//       const num = nums[i];
//       if (num > 0 && num <= nums.length && nums[num - 1] !== num) {
//         [nums[i], nums[num - 1]] = [nums[num - 1], nums[i]];
//         sorted = false;
//       }
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== i + 1) return i + 1;
//   }
  
//   return nums.length + 1;
// };

// better:
const firstMissingPositive = nums => {
  let posCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      [nums[i], nums[posCount]] = [nums[posCount], nums[i]];
      posCount++;
    }
  }

  for (let i = 0; i < posCount; i++) {
    const num = Math.abs(nums[i]);
    if (num <= nums.length && nums[num - 1] > 0) {
      nums[num - 1] = -nums[num - 1];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) return i + 1;
  }
  
  return posCount + 1;
}

console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
console.log(firstMissingPositive([1, 1])); // 2
console.log(firstMissingPositive([])); // 1
console.log(firstMissingPositive([1])); // 2