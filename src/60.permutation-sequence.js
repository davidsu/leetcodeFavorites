/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 *
 * https://leetcode.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (36.02%)
 * Total Accepted:    177K
 * Total Submissions: 489.5K
 * Testcase Example:  '3\n3'
 *
 * The set [1,2,3,...,n] contains a total of n! unique permutations.
 *
 * By listing and labeling all of the permutations in order, we get the
 * following sequence for n = 3:
 *
 *
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 *
 *
 * Given n and k, return the k^th permutation sequence.
 *
 * Note:
 *
 *
 * Given n will be between 1 and 9 inclusive.
 * Given k will be between 1 and n! inclusive.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 3, k = 3
 * Output: "213"
 *
 *
 * Example 2:
 *
 *
 * Input: n = 4, k = 9
 * Output: "2314"
 *
 *
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// TODO: this is brute force. How to find first number?
// (think number of permutations if first number is 1, if is 2...)
// repeat
const getPermutation = function (n, k) {
  const members = new Set(Array.from({ length: n }, (_, i) => i + 1))
  let count = 0
  const calc = (res, depth = 0) => {
    if (res.length === n) {
      count++
      return res
    }
    for (let i = 1; i <= n; i++) {
      if (members.has(i)) {
        members.delete(i)
        res.push(i)
        const result = calc(res, depth + 1)
        if (count === k) return result
        res.pop(res)
        members.add(i)
      }
    }
  }
  return calc([]).join('')
}

module.exports = {
  getPermutation
}
