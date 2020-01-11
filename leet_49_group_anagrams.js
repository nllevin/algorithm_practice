// Given an array of strings, group anagrams together.

//   Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//   Output:
// [
//   ["ate", "eat", "tea"],
//   ["nat", "tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

const groupAnagrams = strs => {
  const groups = {};

  for (str of strs) {
    const chars = charSort(str);
    if (chars in groups) {
      groups[chars].push(str);
    } else {
      groups[chars] = [ str ];
    }
  }

  return Object.values(groups);
};

const charSort = str => {
  const charCounts = {};
  for (char of str) {
    if (char in charCounts) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }
  
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let sortedChars = "";
  for (char of alpha) {
    if (char in charCounts) {
      for (let i = 0; i < charCounts[char]; i++) {
        sortedChars += char;
      }
    }
  }

  return sortedChars;
}

console.log(charSort("banana")); // "aaabnn";
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));