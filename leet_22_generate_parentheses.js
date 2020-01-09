// Given n pairs of parentheses, write a function to generate all combinations of well - formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

const generateParenthesis = n => {
  let strs = {
    "": {
      open: 0,
      closed: 0
    }
  };

  for (let i = 0; i < 2 * n; i++) {
    const newStrs = {};

    for (str in strs) {
      const parens = strs[str];

      if (parens.open < n) {
        newStrs[str + "("] = {
          open: parens.open + 1,
          closed: parens.closed
        };
      }

      if (parens.closed < parens.open) {
        newStrs[str + ")"] = {
          open: parens.open,
          closed: parens.closed + 1
        };
      }
    }

    strs = newStrs;
  }

  return Object.keys(strs);
};

console.log(generateParenthesis(1)); // ["()"]
console.log(generateParenthesis(2)); // ["(())", "()()"]
console.log(generateParenthesis(3)); // ["((()))", "(()())", "(())()", "()(())", "()()()"]