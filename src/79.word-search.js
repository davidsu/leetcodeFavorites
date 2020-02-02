/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 *
 * https://leetcode.com/problems/word-search/description/
 *
 * algorithms
 * Medium (32.44%)
 * Total Accepted:    330.9K
 * Total Submissions: 1M
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * Given a 2D board and a word, find if the word exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring. The
 * same letter cell may not be used more than once.
 *
 * Example:
 *
 *
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 *
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 *
 *
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist (board, word) {
    function calc (idx, i, j, seen) {
        // console.log({idx, i, j, c: word[idx], C: board[i] && board[i][j]})
        if (idx === word.length) return true
        const key = `${i},${j}`
        if (key in seen) return false
        if (!board[i] || board[i][j] !== word[idx]) return false
        const next = idx + 1
        seen[key] = true
        if (calc(next, i + 1, j, seen) ||
            calc(next, i - 1, j, seen) ||
            calc(next, i, j - 1, seen) ||
            calc(next, i, j + 1, seen)) return true
        delete seen[key]
        return false
    }
    for (const i of Object.keys(board)) {
        for (const j of Object.keys(board[i])) {
            if (calc(0, Number(i), Number(j), {})) return true
        }
    }
    return false
}

module.exports = {
    exist
}
