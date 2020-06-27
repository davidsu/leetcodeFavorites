/*
 * @lc app=leetcode id=565 lang=javascript
 *
 * [565] Array Nesting
 *
 * https://leetcode.com/problems/array-nesting/description/
 *
 * algorithms
 * Medium (55.06%)
 * Total Accepted:    50.8K
 * Total Submissions: 92.2K
 * Testcase Example:  '[5,4,0,3,1,6,2]'
 *
 * A zero-indexed array A of length N contains all integers from 0 to N-1. Find
 * and return the longest length of set S, where S[i] = {A[i], A[A[i]],
 * A[A[A[i]]], ... } subjected to the rule below.
 *
 * Suppose the first element in S starts with the selection of element A[i] of
 * index = i, the next element in S should be A[A[i]], and then A[A[A[i]]]… By
 * that analogy, we stop adding right before a duplicate element occurs in
 * S.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: A = [5,4,0,3,1,6,2]
 * Output: 4
 * Explanation:
 * A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.
 *
 * One of the longest S[K]:
 * S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}
 *
 *
 *
 *
 * Note:
 *
 *
 * N is an integer within the range [1, 20,000].
 * The elements of A are all distinct.
 * Each element of A is an integer within the range [0, N-1].
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayNesting = function (nums) {
  const result = nums.map(() => -1)
  const visit = idx => {
    if (result[idx] === -1) {
      result[idx] = 0
      result[idx] = 1 + visit(nums[idx])
    }
    return result[idx]
  }

  let max = -1
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, visit(i))
  }
  return max
}

module.exports = {
  arrayNesting
}
