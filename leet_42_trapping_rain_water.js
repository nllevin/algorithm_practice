// Given n non - negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


// The above elevation map is represented by array[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1].In this case, 6 units of rain water(blue section) are being trapped.Thanks Marcos for contributing this image!

// Example:

//   Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// Output: 6

// workable solution, O(n^2) because of recursive call
// const trap = (heights, start = 0) => {
//   let waterBeforeTallest = 0;
//   let waterBetweenTallestAndNextTallest = 0;
//   let tallestIdx = 0;
//   let tallest = 0;
//   let nextTallestIdx = 0;
//   let nextTallest = 0;
//   let numBlocksBetween = 0;

//   for (let i = start; i < heights.length; i++) {
//     const height = heights[i];

//     // can't start trapping water until reaching first height above 0
//     if (!tallest && height) {
//       tallestIdx = i;
//       tallest = height;
//       continue;
//     }

//     // if it's the tallest building we've seen so far, it will trap water
//     // between itself and the previously tallest building, minus blocks between
//     if (height >= tallest) {
//       waterBeforeTallest += tallest * (i - tallestIdx - 1) - numBlocksBetween;

//       waterBetweenTallestAndNextTallest = 0;
//       tallestIdx = i;
//       tallest = height;
//       nextTallest = 0;
//       numBlocksBetween = 0;

//     // if it's the next tallest building we've seen, it will trap water
//     // between itself and the tallest building, minus blocks between 
//     } else if (height >= nextTallest) {
//       waterBetweenTallestAndNextTallest = height * (i - tallestIdx - 1) - numBlocksBetween;
      
//       nextTallestIdx = i;
//       nextTallest = height;
//       numBlocksBetween += height;
//     } else {
//       numBlocksBetween += height;
//     }
//   }

//   // finally, check if there is more water trapped after the second tallest building
//   let waterAfterNextTallest = 0;
//   if (nextTallest) waterAfterNextTallest = trap(heights, nextTallestIdx);

//   return waterBeforeTallest + waterBetweenTallestAndNextTallest + waterAfterNextTallest;
// };

// better with a stack, O(n):
// const trap = heights => {
//   const stack = [];

//   let curr = 0;
//   let water = 0;

//   while (curr < heights.length) {
//     while (stack.length && heights[curr] >= heights[ stack[stack.length - 1] ]) {
//       const top = stack.pop();
//       if (stack.length) {
//         const dist = curr - stack[stack.length - 1] - 1;
//         water += dist * (Math.min(heights[curr], heights[ stack[stack.length - 1]]) - heights[top]);
//       }
//     }
//     stack.push(curr);
//     curr++;
//   }

//   return water;
// };

// better with dynamic programming, O(n):
// const trap = heights => {
//   const tallestFromLeft = new Array(heights.length).fill(0);
//   const tallestFromRight = new Array(heights.length).fill(0);

//   let tallest = 0;
//   for (let i = 0; i < heights.length; i++) {
//     if (heights[i] > tallest) tallest = heights[i];
//     tallestFromLeft[i] = tallest;
//   }

//   tallest = 0;
//   for (let i = heights.length - 1; i >= 0; i--) {
//     if (heights[i] > tallest) tallest = heights[i];
//     tallestFromRight[i] = tallest;
//   }

//   let water = 0;
//   for (let i = 0; i < heights.length; i++) {
//     const limitingBound = Math.min(tallestFromLeft[i], tallestFromRight[i]);
//     if (heights[i] < limitingBound) {
//       water += limitingBound - heights[i];
//     }
//   }

//   return water;
// };

// finally, using pointers for O(n) time and O(1) space:
const trap = heights => {
  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] > leftMax) {
        leftMax = heights[left];
      } else {
        water += leftMax - heights[left];
      }
      left++;
    } else {
      if (heights[right] > rightMax) {
        rightMax = heights[right];
      } else {
        water += rightMax - heights[right];
      }
      right--;
    }
  }

  return water;
};

console.log(trap([0, 3, 0, 1, 0, 2])); // 5
console.log(trap([0, 1, 0, 2])); // 1
console.log(trap([0, 1, 2])); // 0
console.log(trap([2, 1, 0, 1, 3])); // 4
console.log(trap([2, 1, 2])); // 1
console.log(trap([3, 2, 1, 2, 1])); // 1
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 1, 2])); // 1
console.log(trap([5, 4, 1, 2])); // 1