/*
 * @lc app=leetcode id=406 lang=javascript
 *
 * [406] Queue Reconstruction by Height
 *
 * https://leetcode.com/problems/queue-reconstruction-by-height/description/
 *
 * algorithms
 * Medium (64.08%)
 * Total Accepted:    121.1K
 * Total Submissions: 189K
 * Testcase Example:  '[[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]'
 *
 * Suppose you have a random list of people standing in a queue. Each person is
 * described by a pair of integers (h, k), where h is the height of the person
 * and k is the number of people in front of this person who have a height
 * greater than or equal to h. Write an algorithm to reconstruct the queue.
 *
 * Note:
 * The number of people is less than 1,100.
 *
 *
 * Example
 *
 *
 * Input:
 * [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
 *
 * Output:
 * [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
 *
 *
 *
 *
 */
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function (people) {
  if (!people.length) return people

  people.sort(([h1, c1], [h2, c2]) => c1 - c2 || h1 - h2).reverse()
  const result = [people.pop()]
  while (people.length) {
    const person = people.pop()
    const height = person[0]
    let count = person[1]
    let idx = 0
    while (count) {
      if (result[idx][0] >= height) {
        count--
      }
      idx++
    }
    while (idx < result.length && result[idx][0] < height) idx++
    result.splice(idx, 0, person)
  }
  return result
}

module.exports = {
  reconstructQueue
}
