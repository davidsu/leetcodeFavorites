/*
 * @lc app=leetcode id=332 lang=javascript
 *
 * [332] Reconstruct Itinerary
 *
 * https://leetcode.com/problems/reconstruct-itinerary/description/
 *
 * algorithms
 * Medium (32.61%)
 * Total Accepted:    95.4K
 * Total Submissions: 292.5K
 * Testcase Example:  '[["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]'
 *
 * Given a list of airline tickets represented by pairs of departure and
 * arrival airports [from, to], reconstruct the itinerary in order. All of the
 * tickets belong to a man who departs from JFK. Thus, the itinerary must begin
 * with JFK.
 *
 * Note:
 *
 *
 * If there are multiple valid itineraries, you should return the itinerary
 * that has the smallest lexical order when read as a single string. For
 * example, the itinerary ["JFK", "LGA"] has a smaller lexical order than
 * ["JFK", "LGB"].
 * All airports are represented by three capital letters (IATA code).
 * You may assume all tickets form at least one valid itinerary.
 *
 *
 * Example 1:
 *
 *
 * Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
 * Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
 *
 *
 * Example 2:
 *
 *
 * Input:
 * [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
 * Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
 * Explanation: Another possible reconstruction is
 * ["JFK","SFO","ATL","JFK","ATL","SFO"].
 * But it is larger in lexical order.
 *
 *
 */
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = function (tickets) {
  const graph = tickets.reduce((acc, [origin, dest]) => {
    Object.assign(acc, {
      [origin]: acc[origin] || { destinies: [], visited: new Set() },
      [dest]: acc[dest] || { destinies: [], visited: new Set() }
    })
    acc[origin].destinies.push(dest)
    return acc
  }, {})
  for (const { destinies } of Object.values(graph)) destinies.sort()

  const path = ['JFK']
  function traverse() {
    if (path.length === tickets.length + 1) return true
    const orig = path[path.length - 1]
    const { destinies, visited } = graph[orig]
    for (let i = 0; i < destinies.length; i++) {
      if (!visited.has(i)) {
        visited.add(i)
        path.push(destinies[i])
        if (traverse()) return true
        path.pop()
        visited.delete(i)
      }
    }
  }
  traverse()
  return path
}

// elegant solution by https://leetcode.com/problems/reconstruct-itinerary/discuss/437594/super-easy-and-clean-Javascript-(Greedy)-DFS-with-detailed-explanations
const findItinerary2 = function (tickets) {
  const map = {}
  const res = []
  for (let i = 0; i < tickets.length; i++) {
    const dep = tickets[i][0]
    const des = tickets[i][1]
    if (map[dep]) {
      map[dep].push(des)
    } else {
      map[dep] = [des]
    }
  }
  for (const loc in map) {
    map[loc].sort()
  }
  const dfs = function (node) {
    const des = map[node]
    // eslint-disable-next-line no-unmodified-loop-condition
    while (des && des.length > 0) {
      dfs(des.shift())
    }
    res.push(node)
  }
  dfs('JFK')
  return res.reverse()
}
module.exports = {
  findItinerary,
  findItinerary2
}
