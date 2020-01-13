// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in -place.

//   Example 1:

// Input:
// [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1]
// ]
// Output:
// [
//   [1, 0, 1],
//   [0, 0, 0],
//   [1, 0, 1]
// ]
// Example 2:

// Input:
// [
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5]
// ]
// Output:
// [
//   [0, 0, 0, 0],
//   [0, 4, 5, 0],
//   [0, 3, 1, 0]
// ]
// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution ?

// O(m * n * (m + n)) time, O(1) space:
// const setZeroes = matrix => {
//   for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix[0].length; col++) {
//       if (!matrix[row][col]) {
//         for (let i = 0; i < matrix.length; i++) {
//           if (matrix[i][col]) matrix[i][col] = "*";
//         }

//         for (let j = 0; j < matrix[0].length; j++) {
//           if (matrix[row][j]) matrix[row][j] = "*";
//         }
//       }
//     }
//   }

//   for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix[0].length; col++) {
//       if (matrix[row][col] === "*") matrix[row][col] = 0;
//     }
//   }

//   return matrix;
// };

// O(m * n) time, O(1) space:
const setZeroes = matrix => {
  let firstRow, firstCol;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (!matrix[row][col]) {
        if (!row) firstRow = true;
        if (!col) firstCol = true;

        if (row && col) {
          matrix[0][col] = 0;
          matrix[row][0] = 0;
        }
      }
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (!matrix[row][0] || !matrix[0][col]) {
        matrix[row][col] = 0;
      }
    }
  }

  if (firstRow) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0;
    }
  }

  if (firstCol) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }

  return matrix;
};

console.log(setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]));
// [
//   [1, 0, 1],
//   [0, 0, 0],
//   [1, 0, 1]
// ]

console.log(setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
]));
// [
//   [0, 0, 0, 0],
//   [0, 4, 5, 0],
//   [0, 3, 1, 0]
// ]