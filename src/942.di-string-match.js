/*
 * @lc app=leetcode id=942 lang=javascript
 *
 * [942] DI String Match
 *
 * https://leetcode.com/problems/di-string-match/description/
 *
 * algorithms
 * Easy (72.04%)
 * Total Accepted:    60.8K
 * Total Submissions: 84.4K
 * Testcase Example:  '"IDID"'
 *
 * Given a string S that only contains "I" (increase) or "D" (decrease), let N
 * = S.length.
 *
 * Return any permutation A of [0, 1, ..., N] such that for all i = 0, ...,
 * N-1:
 *
 *
 * If S[i] == "I", then A[i] < A[i+1]
 * If S[i] == "D", then A[i] > A[i+1]
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: "IDID"
 * Output: [0,4,1,3,2]
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "III"
 * Output: [0,1,2,3]
 *
 *
 *
 * Example 3:
 *
 *
 * Input: "DDI"
 * Output: [3,2,0,1]
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= S.length <= 10000
 * S only contains characters "I" or "D".
 *
 */
/**
 * @param {string} S
 * @return {number[]}
 */
// TODO: this is a bad working solution, think of the constraints and implement something more reasonable
const diStringMatch = function (S) {
  let curr = 0
  const result = [0]
  for (const c of S) {
    curr += c === 'I' ? 1 : -1
    result.push(curr)
  }
  const res = Array.from(result, (n, idx) => ({ n, idx }))
    .sort((a, b) => a.n - b.n)
    .map(({ n, idx }, i) => ({ idx, i }))
    .sort((a, b) => a.idx - b.idx)
    .map(({ i }) => i)
  return res
}

module.exports = {
  diStringMatch
}
