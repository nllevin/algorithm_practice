// Given a matrix of m x n elements(m rows, n columns), return all elements of the matrix in spiral order.

//   Example 1:

// Input:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ]
// Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

const spiralOrder = matrix => {
  if (!matrix.length) return [];

  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  const res = [];
  let row = 0;
  let col = 0;
  let dir = matrix[0].length > 1 ? "R" : "D";

  while (res.length < matrix.length * matrix[0].length) {
    res.push(matrix[row][col]);

  if (dir === "R") {                                                            // moving across the top
      col++;
      if (col === right) {
        top++;
        dir = "D";
      }
    } else if (dir === "D") {                                                   // moving down the right side
      row++;
      if (row === bottom) {
        right--;
        dir = "L";
      }
    } else if (dir === "L") {                                                   // moving across the bottom
      col--;
      if (col === left) {
        bottom--;
        dir = "U";
      }
    } else {                                                                    // moving up the left side
      row--;
      if (row === top) {
        left++;
        dir = "R";
      }
    }
  }

  return res;
};

console.log(spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));  // [1,2,3,6,9,8,7,4,5]

console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
])); // [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(spiralOrder([
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
])); // [1,2,3,4,5,6,7,8,9,10,20,19,18,17,16,15,14,13,12,11]

console.log(spiralOrder([
  [3],
  [2]
])) // [3, 2]