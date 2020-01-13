// A robot is located at the top - left corner of a m x n grid(marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time.The robot is trying to reach the bottom - right corner of the grid(marked 'Finish' in the diagram below).

// How many possible unique paths are there ?


//   Above is a 7 x 3 grid.How many possible unique paths are there ?

//     Note : m and n will be at most 100.

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top - left corner, there are a total of 3 ways to reach the bottom - right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// Example 2:

// Input: m = 7, n = 3
// Output: 28


// memoized:
const uniquePaths = (m, n, memo = {}) => {
  if (m === 1 && n === 1) return 1;
  const key = String(m) + "," + String(n);
  if (key in memo) return memo[key];

  let count = 0;
  if (m > 1) {
    const subRes = uniquePaths(m - 1, n, memo);
    const key = String(m - 1) + "," + String(n);
    memo[key] = subRes;
    count += subRes;
  }
  if (n > 1) {
    const subRes = uniquePaths(m, n - 1, memo);
    const key = String(m) + "," + String(n - 1);
    memo[key] = subRes;
    count += subRes;
  }
  return count;
};

// without memoization:
// const uniquePaths = (m, n) => {
//   if (m === 1 && n === 1) return 1;

//   let count = 0;
//   if (m > 1) count += uniquePaths(m - 1, n);
//   if (n > 1) count += uniquePaths(m, n - 1);
//   return count;
// }

console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(7, 3)); // 28
console.log(uniquePaths(23, 12)); // 193536720