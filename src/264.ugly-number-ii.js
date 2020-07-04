/*
 * @lc app=leetcode id=264 lang=javascript
 *
 * [264] Ugly Number II
 *
 * https://leetcode.com/problems/ugly-number-ii/description/
 *
 * algorithms
 * Medium (39.74%)
 * Total Accepted:    148.9K
 * Total Submissions: 371.5K
 * Testcase Example:  '10'
 *
 * Write a program to find the n-th ugly number.
 *
 * Ugly numbers are positive numbers whose prime factors only include 2, 3,
 * 5.
 *
 * Example:
 *
 *
 * Input: n = 10
 * Output: 12
 * Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10
 * ugly numbers.
 *
 * Note:
 *
 *
 * 1 is typically treated as an ugly number.
 * n does not exceed 1690.
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
  const ugly = [1]
  const uglySet = new Set(ugly)
  const start = 0
  let max = 1
  while (ugly.length < n) {
    max *= 5
    for (const primitive of [5, 3, 2]) {
      for (let i = ugly.length - 1; i >= start; i--) {
        let curr = ugly[i] * primitive
        while (!uglySet.has(curr) && curr <= max) {
          ugly.push(curr)
          uglySet.add(curr)
          curr *= primitive
        }
      }
    }
  }
  ugly.sort((a, b) => a - b)
  return ugly[n - 1]
}

module.exports = {
  nthUglyNumber
}
