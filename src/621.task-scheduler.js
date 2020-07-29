/*
 * @lc app=leetcode id=621 lang=javascript
 *
 * [621] Task Scheduler
 *
 * https://leetcode.com/problems/task-scheduler/description/
 *
 * algorithms
 * Medium (48.18%)
 * Total Accepted:    175.4K
 * Total Submissions: 358.1K
 * Testcase Example:  '["A","A","A","B","B","B"]\n2'
 *
 * You are given a char array representing tasks CPU need to do. It contains
 * capital letters A to Z where each letter represents a different task. Tasks
 * could be done without the original order of the array. Each task is done in
 * one unit of time. For each unit of time, the CPU could complete either one
 * task or just be idle.
 *
 * However, there is a non-negative integer n that represents the cooldown
 * period between two same tasks (the same letter in the array), that is that
 * there must be at least n units of time between any two same tasks.
 *
 * You need to return the least number of units of times that the CPU will take
 * to finish all the given tasks.
 *
 *
 * Example 1:
 *
 *
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 * Explanation:
 * A -> B -> idle -> A -> B -> idle -> A -> B
 * There is at least 2 units of time between any two same tasks.
 *
 *
 * Example 2:
 *
 *
 * Input: tasks = ["A","A","A","B","B","B"], n = 0
 * Output: 6
 * Explanation: On this case any permutation of size 6 would work since n = 0.
 * ["A","A","A","B","B","B"]
 * ["A","B","A","B","A","B"]
 * ["B","B","B","A","A","A"]
 * ...
 * And so on.
 *
 *
 * Example 3:
 *
 *
 * Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
 * Output: 16
 * Explanation:
 * One possible solution is
 * A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle
 * -> idle -> A
 *
 *
 *
 * Constraints:
 *
 *
 * The number of tasks is in the range [1, 10000].
 * The integer n is in the range [0, 100].
 *
 *
 */
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
  const freq = {}
  for (const task of tasks) {
    freq[task] = (freq[task] || 0) + 1
  }
  const sortedGroups = Object.values(freq).sort((acount, bcount) => acount - bcount)
  const groups = sortedGroups.pop() - 1
  const total = sortedGroups.reduce((sum, a) => a + sum - (a > groups), 0)
  const fill = Math.floor(total / n)
  if (fill < groups) {
    const missing = (groups - fill) * n
    const rest = total - fill * n
    return tasks.length + (missing - rest)
  }
  return tasks.length
}

module.exports = {
  leastInterval
}
