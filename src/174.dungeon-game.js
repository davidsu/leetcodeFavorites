/*
 * @lc app=leetcode id=174 lang=javascript
 *
 * [174] Dungeon Game
 *
 * https://leetcode.com/problems/dungeon-game/description/
 *
 * algorithms
 * Hard (29.64%)
 * Total Accepted:    84.9K
 * Total Submissions: 286.4K
 * Testcase Example:  '[[-2,-3,3],[-5,-10,1],[10,30,-5]]'
 *
 * table.dungeon, .dungeon th, .dungeon td {
 * ⁠ border:3px solid black;
 * }
 *
 * ⁠.dungeon th, .dungeon td {
 * ⁠   text-align: center;
 * ⁠   height: 70px;
 * ⁠   width: 70px;
 * }
 *
 * The demons had captured the princess (P) and imprisoned her in the
 * bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid
 * out in a 2D grid. Our valiant knight (K) was initially positioned in the
 * top-left room and must fight his way through the dungeon to rescue the
 * princess.
 *
 * The knight has an initial health point represented by a positive integer. If
 * at any point his health point drops to 0 or below, he dies immediately.
 *
 * Some of the rooms are guarded by demons, so the knight loses health
 * (negative integers) upon entering these rooms; other rooms are either empty
 * (0's) or contain magic orbs that increase the knight's health (positive
 * integers).
 *
 * In order to reach the princess as quickly as possible, the knight decides to
 * move only rightward or downward in each step.
 *
 *
 *
 * Write a function to determine the knight's minimum initial health so that he
 * is able to rescue the princess.
 *
 * For example, given the dungeon below, the initial health of the knight must
 * be at least 7 if he follows the optimal path RIGHT-> RIGHT -> DOWN ->
 * DOWN.
 *
 *
 *
 *
 * -2 (K)
 * -3
 * 3
 *
 *
 * -5
 * -10
 * 1
 *
 *
 * 10
 * 30
 * -5 (P)
 *
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * The knight's health has no upper bound.
 * Any room can contain threats or power-ups, even the first room the knight
 * enters and the bottom-right room where the princess is imprisoned.
 *
 *
 */
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
// const print = dungeon =>
//   console.log(
//     dungeon.reduce((acc, r) => acc + r.join(',') + '\n', ''),
//     ''
//   )
const calculateMinimumHP = dungeon => {
  const rows = dungeon.length - 1
  const cols = dungeon[0].length - 1
  for (let row = rows; row > -1; row--) {
    for (let col = cols; col > -1; col--) {
      if (row === rows && col === cols) {
        dungeon[row][col] = Math.max(1, 1 - dungeon[row][col])
      } else if (row === rows) {
        dungeon[row][col] = Math.max(1, dungeon[row][col + 1] - dungeon[row][col])
      } else if (col === cols) {
        dungeon[row][col] = Math.max(1, dungeon[row + 1][col] - dungeon[row][col])
      } else {
        dungeon[row][col] = Math.max(
          1,
          Math.min(dungeon[row][col + 1], dungeon[row + 1][col]) - dungeon[row][col]
        )
      }
    }
  }
  return dungeon[0][0]
}
module.exports = {
  calculateMinimumHP
}
