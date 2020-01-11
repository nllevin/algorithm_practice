// Implement pow(x, n), which calculates x raised to the power n(xn).

//   Example 1:

// Input: 2.00000, 10
// Output: 1024.00000
// Example 2:

// Input: 2.10000, 3
// Output: 9.26100
// Example 3:

// Input: 2.00000, -2
// Output: 0.25000
// Explanation: 2 - 2 = 1 / 22 = 1 / 4 = 0.25
// Note:

// -100.0 < x < 100.0
// n is a 32 - bit signed integer, within the range[−231, 231 − 1]

const myPow = (base, pow) => {
  if (pow === 0) return 1;
  
  const isNegPow = pow < 0;
  pow = Math.abs(pow);

  let res;
  if (pow % 2 === 0) {
    const subRes = myPow(base, pow / 2);
    res = subRes * subRes;
  } else {
    const subRes = myPow(base, Math.floor(pow / 2));
    res = base * subRes * subRes;
  }

  if (isNegPow) res = 1 / res;

  return res;
};

console.log(myPow(2.00000, 10)); // 1024
console.log(myPow(2.1, 3)); // 9.261
console.log(myPow(2, -2)); // 0.25