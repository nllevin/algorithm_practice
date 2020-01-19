// Given an unsorted array of integers, find the length of longest increasing subsequence.

//   Example:

// Input: [10, 9, 2, 5, 3, 7, 101, 18]
// Output: 4
// Explanation: The longest increasing subsequence is[2, 3, 7, 101], therefore the length is 4.
// Note:

// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity ?

const lengthOfLIS = nums => {
  if (!nums.length) return 0;

  const seqs = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num < seqs[0]) {
      seqs[0] = num;
    } else if (num > seqs[seqs.length - 1]) {
      seqs.push(num);
    } else {
      const seqIdx = findSeqIdx(seqs, num);
      seqs[seqIdx] = num;
    }
  }

  return seqs.length;
};

const findSeqIdx = (seqs, num) => {
  let left = -1;
  let right = seqs.length - 1;

  while (right > left + 1) {
    const mid = left + Math.floor((right - left) / 2);
    
    if (seqs[mid] < num) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return right;
};

// console.log(findSeqIdx([1, 3, 5], 0)); // 0
// console.log(findSeqIdx([1, 3, 5], 2)); // 0
// console.log(findSeqIdx([1, 3, 5], 4)); // 1
// console.log(findSeqIdx([1, 3, 5], 20)); // 2
// console.log(findSeqIdx([2], 2)); // 0

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS([10, 9, 2, 5, 3, 4])); // 3
console.log(lengthOfLIS([2, 2])); // 1
console.log(lengthOfLIS([4, 10, 4, 3, 8, 9])); // 3