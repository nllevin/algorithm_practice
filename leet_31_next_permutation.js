// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order(ie, sorted in ascending order).

// The replacement must be in -place and use only constant extra memory.

// Here are some examples.Inputs are in the left - hand column and its corresponding outputs are in the right - hand column.

// 1, 2, 3 → 1, 3, 2
// 3, 2, 1 → 1, 2, 3
// 1, 1, 5 → 1, 5, 1

// O(n):

const nextPermutation = nums => {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      let j = i + 1;
      while (nums[i] < nums[j + 1]) j++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      reverse(nums, i + 1);
      return;
    }
  }

  reverse(nums);
};

const reverse = (nums, start = 0) => {
  for (let i = 0; i < (nums.length - start) / 2; i++) {
    [nums[start + i], nums[nums.length - i - 1]] = [nums[nums.length - i - 1], nums[start + i]];
  }
}

// O(n^2), using insertion sort:
// const nextPermutation = nums => {
//   for (let i = nums.length - 2; i >= 0; i--) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] < nums[j]) {
//         [nums[i], nums[j]] = [nums[j], nums[i]];
//         return;
//       }
//     }
//     for (let j = i; j < nums.length - 1 && nums[j] > nums[j + 1]; j++) {
//       [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//     }
//   }
// };

nextPermutation([1, 2, 3]); // [1, 3, 2]
nextPermutation([3, 2, 1]); // [1, 2, 3]
nextPermutation([1, 1, 5]); // [1, 5, 1]
nextPermutation([1, 3, 2]); // [2, 1, 3]
nextPermutation([2, 3, 1]); // [3, 1, 2]