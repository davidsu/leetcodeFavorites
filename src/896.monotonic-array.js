/*
 * @lc app=leetcode id=896 lang=javascript
 *
 * [896] Monotonic Array
 *
 * https://leetcode.com/problems/monotonic-array/description/
 *
 * algorithms
 * Easy (57.28%)
 * Total Accepted:    94.5K
 * Total Submissions: 164.9K
 * Testcase Example:  '[1,2,2,3]'
 *
 * An array is monotonic if it is either monotone increasing or monotone
 * decreasing.
 *
 * An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array
 * A is monotone decreasing if for all i <= j, A[i] >= A[j].
 *
 * Return true if and only if the given array A is monotonic.
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
 * Input: [1,2,2,3]
 * Output: true
 *
 *
 *
 * Example 2:
 *
 *
 * Input: [6,5,4,4]
 * Output: true
 *
 *
 *
 * Example 3:
 *
 *
 * Input: [1,3,2]
 * Output: false
 *
 *
 *
 * Example 4:
 *
 *
 * Input: [1,2,4,5]
 * Output: true
 *
 *
 *
 * Example 5:
 *
 *
 * Input: [1,1,1]
 * Output: true
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= A.length <= 50000
 * -100000 <= A[i] <= 100000
 *
 *
 *
 *
 *
 *
 *
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = function (A) {
  if (A.length < 3) return true
  if (A[0] > A[A.length - 1]) A.reverse()
  return A.every((num, idx) => num <= A[idx + 1] || idx === A.length - 1)
}

module.exports = {
  isMonotonic
}
