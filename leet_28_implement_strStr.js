// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or - 1 if needle is not part of haystack.

//   Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string ? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string.This is consistent to C's strstr() and Java's indexOf().

const strStr = (haystack, needle) => {
  if (!needle.length) return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }

  return -1;
};

console.log(strStr("hello", "ll")); // 2
console.log(strStr("aaaaa", "bba")); // -1
console.log(strStr("a", "a")); // 0