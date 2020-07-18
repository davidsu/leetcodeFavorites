/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 *
 * https://leetcode.com/problems/course-schedule-ii/description/
 *
 * algorithms
 * Medium (39.65%)
 * Total Accepted:    265.8K
 * Total Submissions: 665.8K
 * Testcase Example:  '2\n[[1,0]]'
 *
 * There are a total of n courses you have to take, labeled from 0 to n-1.
 *
 * Some courses may have prerequisites, for example to take course 0 you have
 * to first take course 1, which is expressed as a pair: [0,1]
 *
 * Given the total number of courses and a list of prerequisite pairs, return
 * the ordering of courses you should take to finish all courses.
 *
 * There may be multiple correct orders, you just need to return one of them.
 * If it is impossible to finish all courses, return an empty array.
 *
 * Example 1:
 *
 *
 * Input: 2, [[1,0]]
 * Output: [0,1]
 * Explanation: There are a total of 2 courses to take. To take course 1 you
 * should have finished
 * course 0. So the correct course order is [0,1] .
 *
 * Example 2:
 *
 *
 * Input: 4, [[1,0],[2,0],[3,1],[3,2]]
 * Output: [0,1,2,3] or [0,2,1,3]
 * Explanation: There are a total of 4 courses to take. To take course 3 you
 * should have finished both
 * ⁠            courses 1 and 2. Both courses 1 and 2 should be taken after you
 * finished course 0.
 * So one correct course order is [0,1,2,3]. Another correct ordering is
 * [0,2,1,3] .
 *
 * Note:
 *
 *
 * The input prerequisites is a graph represented by a list of edges, not
 * adjacency matrices. Read more about how a graph is represented.
 * You may assume that there are no duplicate edges in the input
 * prerequisites.
 *
 *
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const dfs = (graph, course, visited) => {
  if (!graph[course]) return [course]
  if (visited.has(course)) return null
  visited.add(course)
  let result = []
  for (const pre of graph[course]) {
    if (graph[pre]) {
      const before = dfs(graph, pre, visited)
      if (!before) return null
      else result = result.concat(before)
    }
  }
  graph[course] = undefined
  result.push(course)
  return result
}
const findOrder = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => [])
  for (const [course, pre] of prerequisites) {
    graph[course].push(pre)
  }
  let result = []
  for (let i = 0; i < numCourses; i++) {
    if (graph[i]) {
      const more = dfs(graph, i, new Set())
      if (!more) return []
      else result = result.concat(more)
    }
  }
  return result
}

const findOrderBFS = function (numCourses, prerequisites) {
  const preCount = Array.from({ length: numCourses }, () => 0)
  const courses = Array.from({ length: numCourses }, () => [])
  prerequisites.forEach(([course, pre]) => {
    preCount[course]++
    courses[pre].push(course)
  })
  const result = []
  preCount.forEach((count, i) => !count && result.push(i))
  let i = 0
  while (result.length < numCourses && i < result.length) {
    for (const pre of courses[result[i++]]) {
      preCount[pre]--
      if (!preCount[pre]) result.push(pre)
    }
  }
  if (result.length === numCourses) return result
  return []
}

module.exports = {
  findOrder,
  findOrderBFS
}
