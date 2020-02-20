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
var canFinish = function (numCourses, prerequisites) {
    const courses = new Array(numCourses).fill(false)
    const graph = courses.map((_, course) => ({
        next: [],
        prerequisiteCount: 0
    }))
    for (const [course, prerequisite] of prerequisites) {
        graph[prerequisite].next.push(course)
        graph[course].prerequisiteCount++
    }
    const completed = graph.map((courseMap, id) => courseMap.prerequisiteCount ? -1 : id).filter(id => id !== -1)
    while (completed.length) {
        const course = completed.pop()
        courses[course] = true
        graph[course].next.forEach(nextCourse => {
            graph[nextCourse].prerequisiteCount--
            if (!graph[nextCourse].prerequisiteCount) {
                completed.push(nextCourse)
            }
        })
    }
    return courses.every(a => a)
}

module.exports = {
    canFinish
}
