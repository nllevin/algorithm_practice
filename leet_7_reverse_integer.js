// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

const reverse = function (x) {
  const abs = Math.abs(x);
  const sign = Math.sign(x);
  const numDigits = Math.floor(Math.log10(abs)) + 1;
  if (numDigits <= 1) return x;

  const mod = abs % 10;
  const remainder = Math.floor(abs / 10);

  const result = sign * (Math.pow(10, numDigits - 1) * mod + reverse(remainder));

  return Math.abs(result) < Math.pow(2, 31) - 1 ? result : 0;
}

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21