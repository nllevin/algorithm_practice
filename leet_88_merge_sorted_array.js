// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

//   Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space(size that is greater or equal to m + n) to hold additional elements from nums2.
//   Example:

// Input:
// nums1 = [1, 2, 3, 0, 0, 0], m = 3
// nums2 = [2, 5, 6], n = 3

// Output: [1, 2, 2, 3, 5, 6]

const merge = function(nums1, m, nums2, n) {
  let idx1 = m - 1;
  let idx2 = n - 1;

  for (let sortedIdx = m + n - 1; sortedIdx >= 0; sortedIdx--) {
    if (idx1 >= 0 && idx2 >= 0) {
      const [num1, num2] = [nums1[idx1], nums2[idx2]];
      if (num1 > num2) {
        nums1[sortedIdx] = num1;
        idx1--;
      } else {
        nums1[sortedIdx] = num2;
        idx2--;
      }
    } else if (idx2 >= 0) {
      nums1[sortedIdx] = nums2[idx2];
      idx2--;
    } else {
      break;
    }
  }
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1, 2, 2, 3, 5, 6]