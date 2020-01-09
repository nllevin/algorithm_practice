// Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero.

//   Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Note:

// Both dividend and divisor will be 32 - bit signed integers.
// The divisor will never be 0.
// Assume we are dealing with an environment which could only store integers within the 32 - bit signed integer range: [−231, 231 − 1].For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

// using an advanced version of division by subtraction:
const divide = (dividend, divisor) => {
  const [maxInt, minInt] = [Math.pow(2, 31) - 1, Math.pow(-2, 31)];
  
  const isNeg = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0);
  dividend = Math.abs(dividend);
  let denom = Math.abs(divisor);

  if (dividend < denom) return 0;

  let quot = 1;
  while (dividend >= denom + denom) {
    denom += denom;
    quot += quot;
  }

  quot += divide(dividend - denom, Math.abs(divisor));

  if (quot >= maxInt) {
    return isNeg ? minInt : maxInt;
  }

  return isNeg ? -quot : quot;
};

// using strings and effectively long division byhand:
// const divide = (dividend, divisor) => {
//   const isNeg = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0);
//   dividend = Math.abs(dividend);
//   divisor = Math.abs(divisor);

//   const dividendStr = String(dividend);
//   let partialDividendStr = "";
//   let quotStr = "";

//   for (let digitIdx = 0; digitIdx < dividendStr.length; digitIdx++) {
//     partialDividendStr += dividendStr[digitIdx];
//     let partialDividend = parseInt(partialDividendStr);

//     if (partialDividend < divisor) {
//       quotStr += "0";
//     } else {
//       let subQuot = 0;
//       while (partialDividend - divisor >= 0) {
//         partialDividend -= divisor;
//         subQuot++;
//       }
//       quotStr += subQuot;
//       partialDividendStr = String(partialDividend);
//     }
//   }

//   const quot = parseInt(quotStr);

//   const [maxInt, minInt] = [Math.pow(2, 31) - 1, Math.pow(-2, 31)];
//   if (quot >= maxInt) {
//     return isNeg ? minInt : maxInt;
//   }

//   return isNeg ? -quot : quot;
// };

console.log(divide(10, 3)); // 3
console.log(divide(7, -3)); // -2
console.log(divide(-2147483648, 2)); // -1073741824
