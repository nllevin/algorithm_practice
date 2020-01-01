// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.

//   Note:

// The solution set must not contain duplicate triplets.

//   Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

//   A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// O(n^3) => too slow
// const threeSum = function(nums) {
//   const res = [];
//   const tracker = new Set();

//   for (let i = 0; i < nums.length - 2; i++) {
//     const num1 = nums[i];
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       const num2 = nums[j];
//       for (let k = j + 1; k < nums.length; k++) {
//         const num3 = nums[k];
//         if (num1 + num2 + num3 === 0) {
//           const sortedNums = [num1, num2, num3].sort();
//           const sortedNumsStr = String(sortedNums);
//           if (!tracker.has(sortedNumsStr)) {
//             tracker.add(sortedNumsStr);
//             res.push(sortedNums);
//           }
//         }
//       }
//     }
//   }

//   return res;
// };

// O(n^2 * log n) => too slow!
// const threeSum = function (nums) {
//   const res = [];
//   const tracker = new Set();
//   nums.sort((a, b) => Math.sign(a - b));

//   for (let i = 0; i < nums.length - 2; i++) {
//     const num1 = nums[i];

//     for (let j = i + 1; j < nums.length - 1; j++) {
//       const num2 = nums[j];
//       const num3 = 0 - (num1 + num2);

//       if (binarySearch(nums, num3, j + 1)) {
//         const sortedNums = [num1, num2, num3].sort();
//         const sortedNumsStr = String(sortedNums);
//         if (!tracker.has(sortedNumsStr)) {
//           tracker.add(sortedNumsStr);
//           res.push(sortedNums);
//         }
//       }
//     }
//   }

//   return res;
// };

// const binarySearch = (nums, target, start = 0, end = nums.length) => {
//   debugger;
//   if (start >= end) return false;
//   const probeIdx = Math.floor((end - start) / 2) + start;

//   if (nums[probeIdx] < target) {
//     return binarySearch(nums, target, probeIdx + 1, end);
//   } else if (nums[probeIdx] > target) {
//     return binarySearch(nums, target, start, probeIdx);
//   } else {
//     return true;
//   }
// };

// O(n^2): still too slow
// const threeSum = function(nums) {
//   const res = [];
//   const tracker = new Set();

//   const numCounts = {};
//   nums.forEach(num => {
//     if (numCounts[num]) {
//       numCounts[num]++;
//     } else {
//       numCounts[num] = 1;
//     }
//   });

//   const twoSums = {};
//   for (let i = 0; i < nums.length - 1; i++) {
//     const num1 = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       const num2 = nums[j];
//       const sum = num1 + num2;
//       if (twoSums[sum]) {
//         twoSums[sum].push([num1, num2]);
//       } else {
//         twoSums[sum] = [ [num1, num2] ];
//       }
//     }
//   }

//   Object.keys(twoSums).forEach(sum => {
//     const num3 = -sum;
//     if (numCounts[num3]) {
//       twoSums[sum].forEach(doublet => {
//         const triplet = doublet.concat([num3]).sort();
//         const tripletStr = String(triplet);

//         if (!tracker.has(tripletStr)) {
//           const subCounts = {};
//           triplet.forEach(num => {
//             if (subCounts[num]) {
//               subCounts[num]++;
//             } else {
//               subCounts[num] = 1;
//             }
//           });

//           if (Object.keys(subCounts).every(num => subCounts[num] <= numCounts[num])) {
//             tracker.add(tripletStr);
//             res.push(triplet);
//           }
//         }
//       });
//     }
//   });

//   return res;
// }

const threeSum = function(nums) {
  const res = [];

  nums.sort((a, b) => Math.sign(a - b));

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const num1 = nums[i];
    let k = nums.length - 1;

    for (let j = i + 1; j < nums.length - 1; j++) {
      const num2 = nums[j];
      let num3 = nums[k];
      const sum = num1 + num2;

      while (k > j && sum + num3 >= 0) {
        if (num3 + sum === 0) {
          const triplet = [num1, num2, num3];
          const prevTriplet = res[res.length - 1];
          if (!res.length || !triplet.every((_, idx) => triplet[idx] === prevTriplet[idx])) {
            res.push(triplet);
          }
        }

        k--;
        num3 = nums[k];
      }
    }
  }

  return res;
};

console.log(threeSum([-1, 0, 1])); // [-1, 0, 1]
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, 0, 1], [-1, -1, 2]]
console.log(threeSum([1, 2, -2, -1])); // []
console.log(threeSum([-13, 5, 13, 0])); // [[-13, 0, 13]]
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])); // [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]