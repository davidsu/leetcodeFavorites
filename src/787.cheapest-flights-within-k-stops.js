/*
 * @lc app=leetcode id=787 lang=javascript
 *
 * [787] Cheapest Flights Within K Stops
 *
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/description/
 *
 * algorithms
 * Medium (37.53%)
 * Total Accepted:    76.8K
 * Total Submissions: 204.4K
 * Testcase Example:  '3\n[[0,1,100],[1,2,100],[0,2,500]]\n0\n2\n1'
 *
 * There are n cities connected by m flights. Each flight starts from city u
 * and arrives at v with a price w.
 *
 * Now given all the cities and flights, together with starting city src and
 * the destination dst, your task is to find the cheapest price from src to dst
 * with up to k stops. If there is no such route, output -1.
 *
 *
 * Example 1:
 * Input:
 * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
 * src = 0, dst = 2, k = 1
 * Output: 200
 * Explanation:
 * The graph looks like this:
 *
 *
 * The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as
 * marked red in the picture.
 *
 *
 * Example 2:
 * Input:
 * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
 * src = 0, dst = 2, k = 0
 * Output: 500
 * Explanation:
 * The graph looks like this:
 *
 *
 * The cheapest price from city 0 to city 2 with at most 0 stop costs 500, as
 * marked blue in the picture.
 *
 * Note:
 *
 *
 * The number of nodes n will be in range [1, 100], with nodes labeled from 0
 * to n - 1.
 * The size of flights will be in range [0, n * (n - 1) / 2].
 * The format of each flight will be (src, dst, price).
 * The price of each flight will be in the range [1, 10000].
 * k is in the range of [0, n - 1].
 * There will not be any duplicated flights or self cycles.
 *
 *
 */
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
/* eslint-disable eqeqeq */
const heap = (comparator = (a, b) => a - b) => {
  const arr = []
  const right = i => i * 2 + 2
  const left = i => i * 2 + 1
  const parent = i => Math.floor((i - 1) / 2)
  const swap = (i, j) => {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  const siftUp = i => {
    if (i > 0 && comparator(arr[i], arr[parent(i)]) > 0) {
      swap(i, parent(i))
      siftUp(parent(i))
    }
  }
  const siftDown = i => {
    const l = left(i)
    const r = right(i)
    let next = i
    if (r < arr.length && comparator(arr[r], arr[l]) > 0) next = r
    else if (l < arr.length) next = l
    if (next !== i && comparator(arr[next], arr[i]) > 0) {
      swap(i, next)
      siftDown(next)
    }
  }
  const add = el => {
    arr.push(el)
    siftUp(arr.length - 1)
    return arr
  }
  const pop = () => {
    if (arr.length === 1) return arr.pop()
    const retVal = arr[0]
    arr[0] = arr.pop()
    siftDown(0)
    return retVal
  }
  return {
    add,
    pop,
    get size() {
      return arr.length
    }
  }
}
const buildGraph = (n, flights) =>
  flights.reduce(
    (g, [src, dst, price]) => {
      g[src][dst] = price
      return g
    },
    Array.from({ length: n }, () => ({}))
  )

const findCheapestPrice = function (n, flights, src, dst, K) {
  const queue = heap(([, acost], [, bcost]) => -acost + bcost)
  const graph = buildGraph(n, flights)
  queue.add([src, 0, -1])
  while (queue.size) {
    const [id, cost, stops] = queue.pop()
    if (id == dst) return cost
    if (stops < K) {
      for (const [nextId, price] of Object.entries(graph[id])) {
        queue.add([nextId, price + cost, stops + 1])
      }
    }
  }
  return -1
}

module.exports = {
  findCheapestPrice
}
