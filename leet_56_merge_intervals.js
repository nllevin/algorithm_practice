// Given a collection of intervals, merge all overlapping intervals.

//   Example 1:

// Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals[1, 3] and[2, 6] overlaps, merge them into[1, 6].
//   Example 2:

// Input: [[1, 4], [4, 5]]
// Output: [[1, 5]]
// Explanation: Intervals[1, 4] and[4, 5] are considered overlapping.
//   NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

// O(n^2) time, O(n) space:
// const merge = intervals => {
//   const mergeTracker = new Set();
//   for (let i = 0; i < intervals.length - 1; i++) {
//     let [firstMin, firstMax] = intervals[i];
//     for (let j = i + 1; j < intervals.length; j++) {
//       let [secondMin, secondMax] = intervals[j];
//       if (!(firstMin > secondMax || firstMax < secondMin)) {
//         const mergedInterval = [
//           Math.min(firstMin, secondMin), 
//           Math.max(firstMax, secondMax)
//         ];
//         mergeTracker.add(i);
//         intervals[j] = mergedInterval;
//       }
//     }
//   }

//   const mergedIntervals = [];
//   for (let i = 0; i < intervals.length; i++) {
//     if (mergeTracker.has(i)) continue;
//     mergedIntervals.push(intervals[i]);
//   }
//   return mergedIntervals;
// };

// implement O(n * log(n)) time solution with sorting!

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1, 4], [4, 5]])); // [[1,5]]
console.log(merge([[1, 4], [0, 2], [3, 5]])); // [[0,5]]
console.log(merge([[2, 3], [4, 6], [5, 7], [3, 4]])); // [[2,7]]