/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 *
 * https://leetcode.com/problems/course-schedule/description/
 *
 * algorithms
 * Medium (39.34%)
 * Total Accepted:    312.6K
 * Total Submissions: 769.8K
 * Testcase Example:  '2\n[[1,0]]'
 *
 * There are a total of n courses you have to take, labeled from 0 to n-1.
 *
 * Some courses may have prerequisites, for example to take course 0 you have
 * to first take course 1, which is expressed as a pair: [0,1]
 *
 * Given the total number of courses and a list of prerequisite pairs, is it
 * possible for you to finish all courses?
 *
 * Example 1:
 *
 *
 * Input: 2, [[1,0]]
 * Output: true
 * Explanation: There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0. So it is possible.
 *
 * Example 2:
 *
 *
 * Input: 2, [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0, and to take course 0 you
 * should
 * also have finished course 1. So it is impossible.
 *
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
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  const g = new Array(numCourses).fill(0).map(() => new Set())
  for (const [course, needs] of prerequisites) {
    g[course].add(needs)
  }
  const dfs = (course) => {
    if (!g[course].size) return true
    if (g[course].visited) return false
    g[course].visited = true
    for (const needs of g[course]) {
      if (!dfs(needs)) return false
      g[course].delete(needs)
    }
    return true
  }
  return g.reduce((doable, _, course) => doable && dfs(course), true)
}

function betterPerformance(_, prerequisites) {
  const courses = prerequisites.reduce((acc, [course, pre]) => {
    acc[course] = acc[course] || { next: [], prerequisiteCount: 0, id: course }
    acc[pre] = acc[pre] || { next: [], prerequisiteCount: 0, id: pre }
    acc[course].prerequisiteCount++
    acc[pre].next.push(course)
    return acc
  }, {})
  const coursesArr = Object.values(courses)
  const completed = coursesArr.filter(({ prerequisiteCount }) => !prerequisiteCount)
  while (completed.length) {
    const { next, id } = completed.pop()
    delete courses[id]
    next.forEach((nextCourse) => {
      const course = courses[nextCourse]
      course.prerequisiteCount--
      if (!course.prerequisiteCount) {
        completed.push(course)
      }
    })
  }
  return !Object.keys(courses).length
}
module.exports = {
  betterPerformance,
  canFinish
}
