// Given a set of candidate numbers(candidates)(without duplicates) and a target number(target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

//   Note:

// All numbers(including target) will be positive integers.
// The solution set must not contain duplicate combinations.
//   Example 1:

// Input: candidates = [2, 3, 6, 7], target = 7,
//   A solution set is:
// [
//   [7],
//   [2, 2, 3]
// ]
// Example 2:

// Input: candidates = [2, 3, 5], target = 8,
//   A solution set is:
// [
//   [2, 2, 2, 2],
//   [2, 3, 3],
//   [3, 5]
// ]

const combinationSum = (candidates, target, startIdx = 0, memo = {}) => {
  const key = String(target) + "," + String(startIdx);
  if (key in memo) return memo[key];

  let combos = [];
  for (let i = startIdx; i < candidates.length; i++) {
    const candidate = candidates[i];
    if (candidate === target) {
      combos.push([candidate]);
    } else if (candidate < target) {
      let subResult = combinationSum(candidates, target - candidate, i, memo);
      subResult = subResult.map(combo => combo.concat([candidate]));
      combos.push(...subResult);
    }
  }

  memo[key] = combos;
  return combos;
};

// console.log(combinationSum([5], 5)); // [[5]]
// console.log(combinationSum([1, 5], 5)); // [[1, 1, 1, 1, 1], [5]]
// console.log(combinationSum([3, 6, 7], 3)); // [[3]]
// console.log(combinationSum([2, 3], 1)); // []
// console.log(combinationSum([2, 3], 3)); // [[3]]
console.log(combinationSum([2, 3], 5)); // [[2, 3]]
console.log(combinationSum([2, 3, 6, 7], 7)); // [[7], [2, 2, 3]]
console.log(combinationSum([2, 3, 5], 8)); // [[2, 2, 2, 2], [2, 3, 3], [3, 5]]