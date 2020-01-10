// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees(clockwise).

//   Note:

// You have to rotate the image in -place, which means you have to modify the input 2D matrix directly.DO NOT allocate another 2D matrix and do the rotation.

//   Example 1:

// Given input matrix =
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ],

//   rotate the input matrix in -place such that it becomes:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]
// Example 2:

// Given input matrix =
//   [
//     [5, 1, 9, 11],
//     [2, 4, 8, 10],
//     [13, 3, 6, 7],
//     [15, 14, 12, 16]
//   ],

//   rotate the input matrix in -place such that it becomes:
// [
//   [15, 13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7, 10, 11]
// ]

// [i, j] => [j, n - i - 1]

const rotate = matrix => {
  const n = matrix.length;
  
  for (let row = 0; row < Math.floor(n / 2); row++) {
    for (let col = row; col < n - row - 1; col++) {
      let newRow = row;
      let newCol = col;
      let savedEl = matrix[row][col];

      for (let i = 0; i < 3; i++) {
        const currEl = savedEl;
        [newRow, newCol] = [newCol, n - newRow - 1];
        savedEl = matrix[newRow][newCol];
        matrix[newRow][newCol] = currEl;
      }

      matrix[row][col] = savedEl;
    }
  }
};

const a1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
rotate(a1);
// for (row of a1) console.log(row);

const a2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
];
rotate(a2);
// for (row of a2) console.log(row);

const a3 = [
  [1, 2],
  [3, 4]
];
rotate(a3)
for (row of a3) console.log(row);