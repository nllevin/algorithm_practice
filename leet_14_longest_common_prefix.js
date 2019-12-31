// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

//   Example 1:

// Input: ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//   Note:

// All given inputs are in lowercase letters a - z.

const longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let res = "";
  let i = 0;
  let char;

  while (char = strs[0][i]) {
    if (strs.every(str => str[i] === char)) {
      res += char;
      i++;
    } else {
      return res;
    }
  }

  return res;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix([])); // ""
console.log(longestCommonPrefix([""])); // ""