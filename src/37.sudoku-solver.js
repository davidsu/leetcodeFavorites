/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 *
 * https://leetcode.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (38.86%)
 * Total Accepted:    163.4K
 * Total Submissions: 400.7K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 *
 * A sudoku solution must satisfy all of the following rules:
 *
 *
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the the digits 1-9 must occur exactly once in each of the 9 3x3
 * sub-boxes of the grid.
 *
 *
 * Empty cells are indicated by the character '.'.
 *
 *
 * A sudoku puzzle...
 *
 *
 * ...and its solution numbers marked in red.
 *
 * Note:
 *
 *
 * The given board contain only digits 1-9 and the character '.'.
 * You may assume that the given Sudoku puzzle will have a single unique
 * solution.
 * The given board size is always 9x9.
 *
 *
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// function printBoard (board, row, col) {
//     let result = '\n'
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             const more = (i === row && j === col) ? require('chalk').red(board[i][j]) : board[i][j]
//             result = result + ', ' + more
//         }
//         result = result + '\n'
//     }
//     // const result = board.reduce((acc, val, idx) => {
//     //     let result = `${acc}\n${val.join(', ')}`
//     //     if(idx == row) {
//     //         result = require('chalk').red(result)
//     //     }
//     //     return result
//     // }, '')
//     process.stdout.write(`${result}\n-------------------------------------------`)
// }
const solveSudoku = function (board) {
    function * colGenerator (col) {
        for (const row of board) {
            yield row[col]
        }
    }
    function * boxGenerator (row, col) {
        const rowStart = parseInt(row / 3)
        const colStart = parseInt(col / 3)
        for (let i = 0; i < 9; i++) {
            const _row = parseInt(i / 3) + (rowStart * 3)
            const _col = (i % 3) + (colStart * 3)
            yield board[_row][_col]
        }
    }

    function isValid (iterator) {
        const seen = new Set()
        for (const val of iterator) {
            if (seen.has(val) && val !== '.') { return false }
            seen.add(val)
        }
        return true
    }

    const isValidRow = row => isValid(board[row])
    const isValidCol = col => isValid(colGenerator(col))
    const isValidBox = (row, col) => isValid(boxGenerator(row, col))

    function solve (row = 0, col = 0) {
        if (row > 8) return true
        if (col > 8) return solve(row + 1, 0)
        for (; row < 9; row++) {
            for (; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let val = 1; val < 10; val++) {
                        board[row][col] = `${val}`
                        if (isValidRow(row) && isValidCol(col) && isValidBox(row, col) && solve(row, col + 1)) {
                            return true
                        }
                    }
                    board[row][col] = '.'
                    return false
                } else {
                    return solve(row, col + 1)
                }
            }
        }
    }
    solve()
}

module.exports = {
    solveSudoku
}
