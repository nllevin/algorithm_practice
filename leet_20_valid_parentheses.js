// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//   Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

//   Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

const isValid = function(str) {
  const parens = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (parens[char]) {
      stack.push(char);
    } else if (parens[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true