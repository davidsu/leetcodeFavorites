/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 *
 * https://leetcode.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (26.35%)
 * Total Accepted:    205.6K
 * Total Submissions: 780.1K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions
 * surrounded by 'X'.
 *
 * A region is captured by flipping all 'O's into 'X's in that surrounded
 * region.
 *
 * Example:
 *
 *
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 *
 *
 * After running your function, the board should be:
 *
 *
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 *
 *
 * Explanation:
 *
 * Surrounded regions shouldn’t be on the border, which means that any 'O' on
 * the border of the board are not flipped to 'X'. Any 'O' that is not on the
 * border and it is not connected to an 'O' on the border will be flipped to
 * 'X'. Two cells are connected if they are adjacent cells connected
 * horizontally or vertically.
 *
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const followPath = (board, i, j) => {
  const q = [[i, j]]
  while (q.length) {
    const [i, j] = q.pop()
    if (board[i][j] === 'O') {
      board[i][j] = 0
      i > 0 && q.push([i - 1, j])
      i < board.length - 1 && q.push([i + 1, j])
      q.push([i, j - 1])
      q.push([i, j + 1])
    }
  }
}
function* forEachCombination(m, n) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      yield [i, j]
    }
  }
}

const setNonCapture = board => {
  for (const [i, j] of forEachCombination(board.length, board[0].length)) {
    if (i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1) {
      followPath(board, i, j)
    }
  }
}
const fixBoard = board => {
  for (const [i, j] of forEachCombination(board.length, board[0].length)) {
    board[i][j] = board[i][j] ? 'X' : 'O'
  }
}
const solve = function (board) {
  if (board && board.length) {
    setNonCapture(board)
    fixBoard(board)
  }
}

module.exports = {
  solve
}
