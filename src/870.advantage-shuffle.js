/*
 * @lc app=leetcode id=870 lang=javascript
 *
 * [870] Advantage Shuffle
 *
 * https://leetcode.com/problems/advantage-shuffle/description/
 *
 * algorithms
 * Medium (45.01%)
 * Total Accepted:    18.7K
 * Total Submissions: 41.6K
 * Testcase Example:  '[2,7,11,15]\n[1,10,4,11]'
 *
 * Given two arrays A and B of equal size, the advantage of A with respect to B
 * is the number of indices i for which A[i] > B[i].
 *
 * Return any permutation of A that maximizes its advantage with respect to
 * B.
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: A = [2,7,11,15], B = [1,10,4,11]
 * Output: [2,11,7,15]
 *
 *
 *
 * Example 2:
 *
 *
 * Input: A = [12,24,8,32], B = [13,25,32,11]
 * Output: [24,32,8,12]
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= A.length = B.length <= 10000
 * 0 <= A[i] <= 10^9
 * 0 <= B[i] <= 10^9
 *
 *
 *
 *
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const advantageCount = function (A, B) {
  const b = B.map((n, i) => ({ n, i })).sort((a, b) => a.n - b.n)
  const a = A.sort((a, b) => a - b)
  let low = 0
  let high = a.length - 1
  const result = Array.from({ length: A.length })
  while (b.length) {
    const biggestB = b.pop()
    if (a[high] > biggestB.n) result[biggestB.i] = a[high--]
    else result[biggestB.i] = a[low++]
  }
  return result
}

module.exports = {
  advantageCount
}
