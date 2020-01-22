// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

// You have the following 3 operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse(replace 'h' with 'r')
// rorse -> rose(remove 'r')
// rose -> ros(remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention(remove 't')
// inention -> enention(replace 'i' with 'e')
// enention -> exention(replace 'n' with 'x')
// exention -> exection(replace 'n' with 'c')
// exection -> execution(insert 'u')

// tabulation, O(n * m):
const minDistance = (word1, word2) => {
  if (!word1.length || !word2.length) return word1.length || word2.length;

  const table = Array.from({ length: word1.length + 1 }, () => (
    new Array(word2.length + 1).fill(0)
  ));
  for (let row = 0; row < table.length; row++) table[row][0] = row;
  for (let col = 0; col < table[0].length; col++) table[0][col] = col;
  
  for (let row = 1; row < table.length; row++) {
    for (let col = 1; col < table[0].length; col++) {
      let substitutionCost = 1;
      if (word1[row - 1] === word2[col - 1]) {
        substitutionCost = 0;
      }
      table[row][col] = Math.min(
        table[row - 1][col] + 1,                                                // deletion
        table[row][col - 1] + 1,                                                // insertion
        table[row - 1][col - 1] + substitutionCost                              // substitution
      );
    }
  }

  return table[word1.length][word2.length];
};

// recursive, memoization, O(n * m):
// const minDistance = (word1, word2, start1 = 0, start2 = 0, memo = {}) => {
//   const key = `${start1},${start2}`;
//   if (key in memo) return memo[key];

//   if (start2 === word2.length) return word1.length - start1;
//   if (start1 === word1.length) return word2.length - start2;

//   const [char1, char2] = [word1[start1], word2[start2]];
//   if (char1 === char2) {
//     memo[key] = minDistance(word1, word2, start1 + 1, start2 + 1, memo);
//     return memo[key];
//   } else {
//     memo[key] = 1 + Math.min(
//       minDistance(word1, word2, start1 + 1, start2, memo),                      // deletion
//       minDistance(word1, word2, start1, start2 + 1, memo),                      // insertion
//       minDistance(word1, word2, start1 + 1, start2 + 1, memo)                   // change
//     );
//     if (start1 === 0 && start2 === 0) console.log(Object.keys(memo).length);
//     return memo[key];
//   }
// };

console.log(minDistance("horse", "ros")); // 3
console.log(minDistance("intention", "execution")); // 5