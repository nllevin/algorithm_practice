// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non - negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

//   Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since
// the decimal part is truncated, 2 is returned.

// O(sqrt(x)) time:
// const mySqrt = x => {
//   let res = 0;
//   while ((res + 1) * (res + 1) <= x) {
//     res++;
//   }
//   return res;
// };

// O(log(sqrt(x))) time (?):
const mySqrt = x => {
  if (!x) return 0;
  let res = 1;

  while (4 * res * res <= x) {
    res = 2 * res;
  }

  while ((res + 1) * (res + 1) <= x) {
    res++;
  }

  return res;
};

console.log(mySqrt(4)); // 2;
console.log(mySqrt(8)); // 2;
console.log(mySqrt(101)); // 10;
console.log(mySqrt(99999999999999999999)); // 10000000000;