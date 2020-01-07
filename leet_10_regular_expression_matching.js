// Given an input string(s) and a pattern(p), implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string(not partial).

//   Note:

// s could be empty and contains only lowercase letters a - z.
// p could be empty and contains only lowercase letters a - z, and characters like.or *.
//   Example 1:

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
//   Example 2:

// Input:
// s = "aa"
// p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'.Therefore, by repeating 'a' once, it becomes "aa".
//   Example 3:

// Input:
// s = "ab"
// p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
//   Example 4:

// Input:
// s = "aab"
// p = "c*a*b"
// Output: true
// Explanation: c can be repeated 0 times, a can be repeated 1 time.Therefore, it matches "aab".
//   Example 5:

// Input:
// s = "mississippi"
// p = "mis*is*p*."
// Output: false

const isMatch = function(str, pat, sIdx = 0, pIdx = 0, memo = {}) {
  if (sIdx === str.length && pIdx === pat.length) return true;

  if (!(sIdx in memo)) memo[sIdx] = {};
  if (pIdx in memo[sIdx]) return memo[sIdx][pIdx];

  const sChar = str[sIdx];
  const pChar = pat[pIdx];
  if (pat[pIdx + 1] === "*") {
    if (sChar === pChar || (sChar && pChar === ".")) {
      // if wildcard and chars match, test 0 or 1+ matching chars
      const res = isMatch(str, pat, sIdx, pIdx + 2, memo) || isMatch(str, pat, sIdx + 1, pIdx, memo);
      memo[sIdx][pIdx] = res;
      return res;
    } else {
      // if wildcard and chars do not match, then forced to take 0
      const res = isMatch(str, pat, sIdx, pIdx + 2, memo);
      memo[sIdx][pIdx] = res;
      return res;
    }
  } else {
    if (sChar === pChar || (sChar && pChar === ".")) {
      const res = isMatch(str, pat, sIdx + 1, pIdx + 1, memo);
      memo[sIdx][pIdx] = res;
      return res;
    } else {
      return false;
    }
  }
};

console.log(isMatch("aa", "a")); // false
console.log(isMatch("aa", "a*")); // true
console.log(isMatch("ab", ".*")); // true
console.log(isMatch("ab", "c*a*b")); // true
console.log(isMatch("mississippi", "mis*is*p*")); // false
console.log(isMatch("ab", ".*c")); // false
console.log(isMatch("aaa", "a*a")); // true
console.log(isMatch("aaa", "ab*a*c*a")); // true
console.log(isMatch("aaa", "aaaa")); // false
console.log(isMatch("bbbba", ".*a*a")); // true
console.log(isMatch("ab", ".*..")); // true
console.log(isMatch("a", ".*..a*")); // false
console.log(isMatch("a", "ab*")); // true
console.log(isMatch("bcabcbcaccabcbb", "a*a*c*a*.*a*c*bc*.")); // true



// const isMatch = function(s, p) {
//   let sIdx = 0;
//   let pIdx = 0;
//   let currWild = "";
//   let minChars = 0;
//   while (pIdx < p.length) {
//     let char = p[pIdx];
//     let nextChar =  p[pIdx + 1];

//     if (char === ".") {
//       if (nextChar && nextChar === "*") {
//         currWild = ".";
//         sIdx = s.length;
//         pIdx += 2;
//       } else {
//         minChars++;
//         pIdx++;
//         sIdx++;
//       }
//     } else {
//       if (nextChar && nextChar === "*") {
//         pIdx += 2;
//         while (s[sIdx] === char) {
//           currWild = char;
//           sIdx++;
//         }
//       } else if (s[sIdx] === char) {
//         currWild = "";
//         minChars++;
//         pIdx++;
//         sIdx++;
//       } else if (char === currWild || (currWild === "." && s[s.length - 1] === char)) {
//         pIdx++;
//       } else {
//         return false;
//       }
//     }
//   }

//   return sIdx >= s.length && s.length >= minChars;
// };