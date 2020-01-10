// Given a collection of distinct integers, return all possible permutations.

//   Example:

// Input: [1, 2, 3]
// Output:
// [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ]

// const permute = nums => {
//   if (!nums.length) return [ [] ];

//   const lastEl = nums.pop();
//   const subPerms = permute(nums);
//   const perms = [];

//   for (subPerm of subPerms) {
//     for (let i = 0; i <= subPerm.length; i++) {
//       const newPerm = [
//         ...subPerm.slice(0, i),
//         lastEl,
//         ...subPerm.slice(i)
//       ];
//       perms.push(newPerm);
//     }
//   }

//   return perms;
// };

// alternate:
const permute = nums => {
  if (!nums.length) return [ [] ];

  const perms = [];
  for (let i = 0; i < nums.length; i++) {
    const lastEl = nums[i];

    const otherNums = nums.slice();
    otherNums.splice(i, 1);
    const subPerms = permute(otherNums);

    const newPerms = subPerms.map(subPerm => {
      subPerm.push(lastEl);
      return subPerm;
    });
    
    perms.push(...newPerms);
  }

  return perms;
}

console.log(permute([])); // [ [] ]
console.log(permute([1])); // [ [1] ]
console.log(permute([1, 2])); // [ [1, 2], [2, 1] ]
console.log(permute([1, 2, 3])); 