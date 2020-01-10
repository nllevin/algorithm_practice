// Given an input string(s) and a pattern(p), implement wildcard pattern matching with support for '?' and '*'.

// '?' Matches any single character.
// '*' Matches any sequence of characters(including the empty sequence).
// The matching should cover the entire input string(not partial).

//   Note:

// s could be empty and contains only lowercase letters a - z.
// p could be empty and contains only lowercase letters a - z, and characters like ? or *.
//   Example 1:

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
//   Example 2:

// Input:
// s = "aa"
// p = "*"
// Output: true
// Explanation: '*' matches any sequence.
//   Example 3:

// Input:
// s = "cb"
// p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
//   Example 4:

// Input:
// s = "adceb"
// p = "*a*b"
// Output: true
// Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
//   Example 5:

// Input:
// s = "acdcb"
// p = "a*c?b"
// Output: false

const isMatch = (str, pat, memo = {}) => {
  if (!(str in memo)) memo[str] = {};
  if (pat in memo[str]) return memo[str][pat];
  if (!str && !pat) return true;

  const sChar = str[0];
  const pChar = pat[0];

  if (sChar === pChar || (sChar && pChar === "?")) {
    const res = isMatch(str.slice(1), pat.slice(1), memo);
    memo[str][pat] = res;
    return res;
  } else if (pChar === "*") {
    if (sChar) {
      const res = isMatch(str, pat.slice(1), memo) || isMatch(str.slice(1), pat, memo);
      memo[str][pat] = res;
      return res;
    } else {
      const res = isMatch(str, pat.slice(1), memo);
      memo[str][pat] = res;
      return res;
    }
  }
  
  return false;
};

console.log(isMatch("aa", "a")); // false
console.log(isMatch("aa", "*")); // true
console.log(isMatch("cb", "?a")); // false
console.log(isMatch("adceb", "*a*b")); // true
console.log(isMatch("acdcb", "a*c?b")); // false
console.log(isMatch("aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba", "a*******b")); // false
console.log(isMatch("aaaa", "*a?")); // true