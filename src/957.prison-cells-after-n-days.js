/*
 * @lc app=leetcode id=957 lang=javascript
 *
 * [957] Prison Cells After N Days
 *
 * https://leetcode.com/problems/prison-cells-after-n-days/description/
 *
 * algorithms
 * Medium (39.61%)
 * Total Accepted:    53.6K
 * Total Submissions: 135.4K
 * Testcase Example:  '[0,1,0,1,1,0,0,1]\n7'
 *
 * There are 8 prison cells in a row, and each cell is either occupied or
 * vacant.
 *
 * Each day, whether the cell is occupied or vacant changes according to the
 * following rules:
 *
 *
 * If a cell has two adjacent neighbors that are both occupied or both vacant,
 * then the cell becomes occupied.
 * Otherwise, it becomes vacant.
 *
 *
 * (Note that because the prison is a row, the first and the last cells in the
 * row can't have two adjacent neighbors.)
 *
 * We describe the current state of the prison in the following way: cells[i]
 * == 1 if the i-th cell is occupied, else cells[i] == 0.
 *
 * Given the initial state of the prison, return the state of the prison after
 * N days (and N such changes described above.)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: cells = [0,1,0,1,1,0,0,1], N = 7
 * Output: [0,0,1,1,0,0,0,0]
 * Explanation:
 * The following table summarizes the state of the prison on each day:
 * Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
 * Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
 * Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
 * Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
 * Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
 * Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
 * Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
 * Day 7: [0, 0, 1, 1, 0, 0, 0, 0]
 *
 *
 *
 *
 * Example 2:
 *
 *
 * Input: cells = [1,0,0,1,0,0,1,0], N = 1000000000
 * Output: [0,0,1,1,1,1,1,0]
 *
 *
 *
 *
 * Note:
 *
 *
 * cells.length == 8
 * cells[i] is in {0, 1}
 * 1 <= N <= 10^9
 *
 *
 *
 *
 */
/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */

const prisonAfterNDays = function (cells, n) {
  const dayMap = []
  const seen = new Map()
  let j = 0
  while (j < n) {
    const cellsAsInt = parseInt(cells.join(''), 2)
    if (seen.has(cellsAsInt)) break
    seen.set(cellsAsInt, dayMap.length)
    dayMap.push(cellsAsInt)
    let last = cells[0]
    for (let i = 1; i < cells.length - 1; i++) {
      const next = last ^ cells[i + 1] ^ 1
      last = cells[i]
      cells[i] = next
    }
    cells[0] = cells[cells.length - 1] = 0
    j++
  }
  if (j === n) return cells
  const start = seen.get(parseInt(cells.join(''), 2))
  dayMap.splice(0, start)
  const end = (n - start) % dayMap.length
  return dayMap[end].toString(2).padStart(8, '0').split('').map(Number)
}

module.exports = {
  prisonAfterNDays
}
