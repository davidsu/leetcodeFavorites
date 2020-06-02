/*
 * @lc app=leetcode id=886 lang=javascript
 *
 * [886] Possible Bipartition
 *
 * https://leetcode.com/problems/possible-bipartition/description/
 *
 * algorithms
 * Medium (43.39%)
 * Total Accepted:    22.6K
 * Total Submissions: 52.1K
 * Testcase Example:  '4\n[[1,2],[1,3],[2,4]]'
 *
 * Given a set of N people (numbered 1, 2, ..., N), we would like to split
 * everyone into two groups of any size.
 *
 * Each person may dislike some other people, and they should not go into the
 * same group.
 *
 * Formally, if dislikes[i] = [a, b], it means it is not allowed to put the
 * people numbered a and b into the same group.
 *
 * Return true if and only if it is possible to split everyone into two groups
 * in this way.
 *
 *
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
 * Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
 * Output: true
 * Explanation: group1 [1,4], group2 [2,3]
 *
 *
 *
 * Example 2:
 *
 *
 * Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
 * Output: false
 *
 *
 *
 * Example 3:
 *
 *
 * Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
 * Output: false
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= N <= 2000
 * 0 <= dislikes.length <= 10000
 * 1 <= dislikes[i][j] <= N
 * dislikes[i][0] < dislikes[i][1]
 * There does not exist i != j for which dislikes[i] == dislikes[j].
 *
 *
 *
 *
 *
 */
/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
const buildGraph = dislikes =>
  dislikes.reduce((g, [a, b]) => {
    g[a] = g[a] || new Set()
    g[b] = g[b] || new Set()
    g[a].add(b)
    g[b].add(a)
    return g
  }, {})

const canBuildGroups = (visited, g, group, person, hated) => {
  if (visited.has(person)) return true
  visited.add(person)
  if (!g[person]) return true
  for (const dislikes of g[person]) {
    if (group.has(dislikes)) return false
    hated.add(dislikes)
  }
  for (const next of g[person]) {
    if (!canBuildGroups(visited, g, hated, next, group)) return false
  }
  return true
}
const possibleBipartition = function (N, dislikes) {
  const g = buildGraph(dislikes)
  const visited = new Set()
  const g1 = new Set()
  const g2 = new Set()
  while (N > 0) {
    if (!canBuildGroups(visited, g, g1, N--, g2)) return false
  }
  return true
}

module.exports = {
  possibleBipartition
}
