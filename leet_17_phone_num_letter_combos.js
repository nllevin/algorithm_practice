// Given a string containing digits from 2 - 9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters(just like on the telephone buttons) is given below.Note that 1 does not map to any letters.



//   Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//   Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.

const alphaNums = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};

const letterCombinations = function (numStr) {
  if (!numStr.length) return [];

  const res = [];
  let digit = numStr[0];
  let subCombos = letterCombinations(numStr.slice(1));
  subCombos = subCombos.length ? subCombos : [ "" ]; 
  alphaNums[digit].forEach(char => {
    subCombos.forEach(subCombo => {
      res.push(char + subCombo);
    });
  });

  return res;
};

console.log(letterCombinations("23")); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letterCombinations("")); // []