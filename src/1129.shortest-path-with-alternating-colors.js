/*
 * @lc app=leetcode id=1129 lang=javascript
 *
 * [1129] Shortest Path with Alternating Colors
 *
 * https://leetcode.com/problems/shortest-path-with-alternating-colors/description/
 *
 * algorithms
 * Medium (38.83%)
 * Total Accepted:    12K
 * Total Submissions: 30.9K
 * Testcase Example:  '3\n[[0,1],[1,2]]\n[]'
 *
 * Consider a directed graph, with nodes labelled 0, 1, ..., n-1.  In this
 * graph, each edge is either red or blue, and there could be self-edges or
 * parallel edges.
 *
 * Each [i, j] in red_edges denotes a red directed edge from node i to node j.
 * Similarly, each [i, j] in blue_edges denotes a blue directed edge from node
 * i to node j.
 *
 * Return an array answer of length n, where each answer[X] is the length of
 * the shortest path from node 0 to node X such that the edge colors alternate
 * along the path (or -1 if such a path doesn't exist).
 *
 *
 * Example 1:
 * Input: n = 3, red_edges = [[0,1],[1,2]], blue_edges = []
 * Output: [0,1,-1]
 * Example 2:
 * Input: n = 3, red_edges = [[0,1]], blue_edges = [[2,1]]
 * Output: [0,1,-1]
 * Example 3:
 * Input: n = 3, red_edges = [[1,0]], blue_edges = [[2,1]]
 * Output: [0,-1,-1]
 * Example 4:
 * Input: n = 3, red_edges = [[0,1]], blue_edges = [[1,2]]
 * Output: [0,1,2]
 * Example 5:
 * Input: n = 3, red_edges = [[0,1],[0,2]], blue_edges = [[1,0]]
 * Output: [0,1,1]
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 100
 * red_edges.length <= 400
 * blue_edges.length <= 400
 * red_edges[i].length == blue_edges[i].length == 2
 * 0 <= red_edges[i][j], blue_edges[i][j] < n
 *
 */
/**
 * @param {number} n
 * @param {number[][]} red_edges
 * @param {number[][]} blue_edges
 * @return {number[]}
 */
// TODO: this is a belman ford implementation, nice but expensive
function relaxNieghbors(RED, BLUE, cost, neighbors, graph) {
  for (const color of [RED, BLUE]) {
    const otherColor = (color + 1) % 2
    if (cost[color] < Infinity) {
      for (const neighbor of neighbors[otherColor]) {
        graph[neighbor].cost[otherColor] = Math.min(
          graph[neighbor].cost[otherColor],
          cost[color] + 1
        )
      }
    }
  }
}

function buildGraph(n, redEdges, RED, blueEdges, BLUE) {
  const graph = Array.from({ length: n }, () => ({
    cost: [Infinity, Infinity],
    neighbors: [new Set(), new Set()]
  }))
  const fillGraph = (edges, color) => {
    edges.forEach(([src, dst]) => {
      graph[src].neighbors[color].add(dst)
    })
  }
  fillGraph(redEdges, RED)
  fillGraph(blueEdges, BLUE)
  return graph
}

const shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const BLUE = 0
  const RED = 1
  const graph = buildGraph(n, redEdges, RED, blueEdges, BLUE)
  graph[0].cost = [0, 0]
  let maxIterations = n - 1
  while (maxIterations--) {
    for (const { cost, neighbors } of graph) {
      relaxNieghbors(RED, BLUE, cost, neighbors, graph)
    }
  }
  return graph
    .map(({ cost }) => Math.min(cost[RED], cost[BLUE]))
    .map(cost => (cost === Infinity ? -1 : cost))
}

module.exports = {
  shortestAlternatingPaths
}
