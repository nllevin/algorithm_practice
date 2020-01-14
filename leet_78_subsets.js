// Given a set of distinct integers, nums, return all possible subsets(the power set).

//   Note: The solution set must not contain duplicate subsets.

//     Example:

// Input: nums = [1, 2, 3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1, 2, 3],
//   [1, 3],
//   [2, 3],
//   [1, 2],
//   []
// ]

const subsets = nums => {
  if (!nums.length) return [ [] ];

  const lastEl = nums.pop();
  const subRes = subsets(nums);
  const newSubsets = subRes.map(subset => {
    const newSubset = subset.slice();
    newSubset.push(lastEl);
    return newSubset;
  });
  return subRes.concat(newSubsets, []);
};

console.log(subsets([])); // [ [] ]
console.log(subsets([1])); // [ [1], [] ]

console.log(subsets([1, 2, 3]));
// [
//   [3],
//   [1],
//   [2],
//   [1, 2, 3],
//   [1, 3],
//   [2, 3],
//   [1, 2],
//   []
// ]