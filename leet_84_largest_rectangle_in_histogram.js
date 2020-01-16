// Given n non - negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.




// Above is a histogram where width of each bar is 1, given height = [2, 1, 5, 6, 2, 3].




// The largest rectangle is shown in the shaded area, which has area = 10 unit.



//   Example:

// Input: [2, 1, 5, 6, 2, 3]
// Output: 10

const largestRectangleArea = heights => {
  if (!heights.length) return 0;

  let maxArea = heights[0];
  let tallies = [ [heights[0], 1] ];
  
  for (let i = 1; i < heights.length; i++) {
    const currHeight = heights[i];
    const newTallies = [];

    for (tally of tallies) {
      const [height, count] = tally;
      if (height <= currHeight) {
        newTallies.push([height, count + 1]);
        const newArea = height * (count + 1);
        if (newArea > maxArea) maxArea = newArea;
      } else {
        newTallies.push([currHeight, count + 1]);
        const newArea = currHeight * (count + 1);
        if (newArea > maxArea) maxArea = newArea;
        break;
      }
    }

    if (currHeight > newTallies[newTallies.length - 1][0]) {
      newTallies.push([ currHeight, 1 ]);
      if (currHeight > maxArea) maxArea = currHeight;
    }
    tallies = newTallies;
  }

  return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
console.log(largestRectangleArea([0])); // 0
console.log(largestRectangleArea([0, 0, 0, 0, 0, 0, 0, 0, 2147483647])); // 2147483647
console.log(largestRectangleArea([0, 0, 0, 0, 0, 0, 0, 0, 2147483647, 1])); // 2147483647
console.log(largestRectangleArea([0, 0, 0, 0, 0, 0, 0, 0, 2147483647, 2147483647])); // 4294967294
console.log(largestRectangleArea([2, 1, 2])); // 3

// const largestRectangleArea = heights => {
//   let maxArea = 0;
//   let prevHeight = Infinity;
//   let tallies = {};

//   for (currHeight of heights) {
//     let newTallies = {};

//     for (let height = 1; height <= Math.min(currHeight, prevHeight); height++) {
//       newTallies[height] = tallies[height] || 0;
//       newTallies[height] += height;
//       if (newTallies[height] > maxArea) maxArea = newTallies[height];
//     }

//     newTallies[currHeight] = newTallies[currHeight] || currHeight;
//     if (newTallies[currHeight] > maxArea) maxArea = newTallies[currHeight];

//     prevHeight = currHeight;
//     tallies = newTallies;
//   }

//   return maxArea;
// };

// const largestRectangleArea = heights => {
//   if (!heights.length) return 0;

//   const maxAreas = {};
//   const runningTallies = {};
//   let maxHeight = 0;

//   for (height of heights) {
//     maxHeight = Math.max(maxHeight, height);

//     for (let otherHeight = 0; otherHeight <= maxHeight; otherHeight++) {
//       if (otherHeight > height) {
//         runningTallies[otherHeight] = 0;
//       } else if (!(otherHeight in runningTallies)) {
//         runningTallies[otherHeight] = otherHeight;
//         maxAreas[otherHeight] = otherHeight;
//       } else {
//         runningTallies[otherHeight] += otherHeight;
//         maxAreas[otherHeight] = Math.max(
//           maxAreas[otherHeight], 
//           runningTallies[otherHeight]
//         );
//       }
//     }
//   }

//   return Math.max(...Object.values(maxAreas));
// };