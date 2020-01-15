// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring.The same letter cell may not be used more than once.

//   Example:

// board =
//   [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E']
//   ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

const exist = (board, word) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] !== word[0]) continue;
      const firstTile = {
        row,
        col,
        wordIdx: 1,
        visited: [ `${row},${col}` ]
      }
      const stack = [ firstTile ];

      while (stack.length) {
        const { row, col, wordIdx, visited } = stack.pop();
        if (wordIdx === word.length) return true;

        if (
          row > 0 
          && board[row - 1][col] === word[wordIdx] 
          && !visited.includes(`${row - 1},${col}`)
        ) {
          const newVisited = visited.slice();
          newVisited.push(`${row - 1},${col}`);
          stack.push({
            row: row - 1,
            col,
            wordIdx: wordIdx + 1,
            visited: newVisited
          });
        }

        if (
          row < board.length - 1
          && board[row + 1][col] === word[wordIdx] 
          && !visited.includes(`${row + 1},${col}`)
        ) {
          const newVisited = visited.slice();
          newVisited.push(`${row + 1},${col}`);
          stack.push({
            row: row + 1,
            col,
            wordIdx: wordIdx + 1,
            visited: newVisited
          });
        }

        if (
          col > 0 
          && board[row][col - 1] === word[wordIdx] 
          && !visited.includes(`${row},${col - 1}`)
        ) {
          const newVisited = visited.slice();
          newVisited.push(`${row},${col - 1}`);
          stack.push({
            row,
            col: col - 1,
            wordIdx: wordIdx + 1,
            visited: newVisited
          });
        }

        if (
          col < board[0].length - 1
          && board[row][col + 1] === word[wordIdx] 
          && !visited.includes(`${row},${col + 1}`)
        ) {
          const newVisited = visited.slice();
          newVisited.push(`${row},${col + 1}`);
          stack.push({
            row,
            col: col + 1,
            wordIdx: wordIdx + 1,
            visited: newVisited
          });
        }
      }
    }
  }

  return false;
};

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];
console.log(exist(board, "ABCCED")); // true
console.log(exist(board, "SEE")); // true
console.log(exist(board, "ABCB")); // false