/*
 * @lc app=leetcode id=241 lang=javascript
 *
 * [241] Different Ways to Add Parentheses
 *
 * https://leetcode.com/problems/different-ways-to-add-parentheses/description/
 *
 * algorithms
 * Medium (54.79%)
 * Total Accepted:    100.7K
 * Total Submissions: 183.8K
 * Testcase Example:  '"2-1-1"'
 *
 * Given a string of numbers and operators, return all possible results from
 * computing all the different possible ways to group numbers and operators.
 * The valid operators are +, - and *.
 *
 * Example 1:
 *
 *
 * Input: "2-1-1"
 * Output: [0, 2]
 * Explanation:
 * ((2-1)-1) = 0
 * (2-(1-1)) = 2
 *
 * Example 2:
 *
 *
 * Input: "2*3-4*5"
 * Output: [-34, -14, -10, -10, 10]
 * Explanation:
 * (2*(3-(4*5))) = -34
 * ((2*3)-(4*5)) = -14
 * ((2*(3-4))*5) = -10
 * (2*((3-4)*5)) = -10
 * (((2*3)-4)*5) = 10
 *
 */
/**
 * @param {string} input
 * @return {number[]}
 */
const regex = /[-*+]/
const diffWaysToCompute = function (input, seen = {}) {
  if (!regex.test(input)) return [+input]
  if (input in seen) return seen[input]
  const results = []
  for (let i = 0; i < input.length; i++) {
    if (regex.test(input[i])) {
      const left = diffWaysToCompute(input.substring(0, i), seen)
      const right = diffWaysToCompute(input.substring(i + 1, input.length), seen)
      for (let j = 0; j < left.length; j++) {
        for (let k = 0; k < right.length; k++) {
          switch (input[i]) {
            case '+':
              results.push(left[j] + right[k])
              break
            case '-':
              results.push(left[j] - right[k])
              break
            default:
              results.push(left[j] * right[k])
          }
        }
      }
    }
  }
  seen[input] = results
  return results
}

module.exports = {
  diffWaysToCompute
}
