// A message containing letters from A - Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non - empty string containing only digits, determine the total number of ways to decode it.

//   Example 1:

// Input: "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L"(12).
//   Example 2:

// Input: "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF"(22 6), or "BBF"(2 2 6).

const numDecodings = (s, idx = 0, memo = {}) => {
  if (idx in memo) return memo[idx];
  if (idx < s.length && s[idx] === "0") return 0;
  if (idx >= s.length - 1) return 1;
  
  memo[idx + 1] = numDecodings(s, idx + 1, memo);
  
  if (s.slice(idx, idx + 2) <= 26) {
    memo[idx + 2] = numDecodings(s, idx + 2, memo);
    memo[idx] = memo[idx + 1] + memo[idx + 2];
  } else {
    memo[idx] = memo[idx + 1];
  }

  return memo[idx];
};

console.log(numDecodings("12")); // 2
console.log(numDecodings("226")); // 3
