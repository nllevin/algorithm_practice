// Given a string containing just the characters '(' and ')', find the length of the longest valid(well - formed) parentheses substring.

//   Example 1:

// Input: "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()"
// Example 2:

// Input: ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()"

// O(n) time, O(1) space:
const longestValidParentheses = s => {
  let longest = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      longest = Math.max(longest, 2 * right);
    } else if (right > left) {
      left = 0;
      right = 0;
    }
  }

  left = 0;
  right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "(") {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      longest = Math.max(longest, 2 * right);
    } else if (left > right) {
      left = 0;
      right = 0;
    }
  }

  return longest;
};

// O(n), using a stack:
// const longestValidParentheses = s => {
//   const stack = [ -1 ];
//   let longest = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       stack.push(i);
//     } else {
//       stack.pop();
//       if (!stack.length) {
//         stack.push(i);
//       } else {
//         longest = Math.max(longest, i - stack[stack.length - 1]);
//       }
//     }
//   }

//   return longest;
// };

console.log(longestValidParentheses("(()")); // 2
console.log(longestValidParentheses(")()())")); // 4

// O(n), using tabulation:
// const longestValidParentheses = s => {
//   if (!s.length) return 0;

//   const table = new Array(s.length).fill(0);

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       continue;
//     } else if (s[i - 1] === "(") {
//       table[i] = 2 + (table[i - 2] || 0);
//     } else if (s[i - table[i - 1] - 1] === "(") {
//       table[i] = 2 + table[i - 1] + (table[i - table[i - 1] - 2] || 0);
//     }                                                             
//   }

//   return Math.max(...table);
// };

// O(n^2):
// const longestValidParentheses = s => {
//   let longest = 0;
//   for (let start = 0; start < s.length - 1; start++) {
//     if (s[start] === ")") continue;

//     let count = 1;
//     for (let end = start + 1; end < s.length; end++) {
//       if (s[end] === "(") {
//         count++;
//       } else {
//         count--;
//       }

//       if (count === 0 && end - start + 1 > longest) {
//         longest = end - start + 1;
//       }
//       if (count < 0) break;
//     }
//   }

//   return longest;
// };

// O(n^3), too slow:
// const longestValidParentheses = s => {
//   let longest = 0;

//   for (let start = 0; start < s.length; start++) {
//     for (let end = s.length - 1; end > start + longest; end--) {
//       if (isValidParentheses(s, start, end) && end - start + 1 > longest) {
//         longest = end - start + 1;
//       }
//     }
//   }
//   return longest;
// };

// const isValidParentheses = (s, start = 0, end = s.length - 1) => {
//   let count = 0;

//   for (let i = start; i <= end; i++) {
//     const char = s[i];
//     if (char === "(") {
//       count++;
//     } else if (--count < 0) {
//       return false;
//     }
//   }

//   return count === 0;
// };

// console.log(isValidParentheses("(()")); // false
// console.log(isValidParentheses("()")); // true
// console.log(isValidParentheses(")()())")); // false
// console.log(isValidParentheses("()())")); // false
// console.log(isValidParentheses("()()")); // true