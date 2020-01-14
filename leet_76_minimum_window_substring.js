// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

//   Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

const minWindow = (str, subStr) => {
  const targetChars = {};
  const charTracker = {};
  for (char of subStr) {
    if (char in targetChars) {
      targetChars[char]++;
    } else {
      targetChars[char] = 1;
      charTracker[char] = [];
    }
  }

  const queue = [];
  let queueIdx = 0;
  let numCharsSeen = 0;
  let bestLeft, bestRight;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char in targetChars) {
      if (charTracker[char].length < targetChars[char]) {
        numCharsSeen++;
      }
      charTracker[char].push(i);
      if (charTracker[char].length > targetChars[char]) charTracker[char].shift();

      queue.push(i);
      while (queue[queueIdx] < charTracker[ str[queue[queueIdx]] ][0]) {
        queueIdx++;
      }

      if (numCharsSeen === subStr.length) {
        const [left, right] = [queue[queueIdx], queue[queue.length - 1]];

        if ((!bestLeft && !bestRight) || (right - left < bestRight - bestLeft)) {
          bestLeft = left;
          bestRight = right;
        } 
      }
    }
  }

  let window = "";
  for (let i = bestLeft; i <= bestRight; i++) {
    window += str[i];
  }
  return window;
}

console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindow("ADOBEODEBAN", "ABC")); // ""
console.log(minWindow("aa", "aa")); // "aa"