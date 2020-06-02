/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 *
 * https://leetcode.com/problems/basic-calculator/description/
 *
 * algorithms
 * Hard (35.94%)
 * Total Accepted:    153.1K
 * Total Submissions: 423.7K
 * Testcase Example:  '"1 + 1"'
 *
 * Implement a basic calculator to evaluate a simple expression string.
 *
 * The expression string may contain open ( and closing parentheses ), the plus
 * + or minus sign -, non-negative integers and empty spaces  .
 *
 * Example 1:
 *
 *
 * Input: "1 + 1"
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: " 2-1 + 2 "
 * Output: 3
 *
 * Example 3:
 *
 *
 * Input: "(1+(4+5+2)-3)+(6+8)"
 * Output: 23
 * Note:
 *
 *
 * You may assume that the given expression is always valid.
 * Do not use the eval built-in library function.
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
function pop(stack) {
  let result = 0
  while (stack.length) {
    const n = stack.pop()
    if (n === '(') return result
    result += n
  }
  return result
}
const getResult = (s, i) => {
  const stack = []
  const isNum = /\d/
  let sign
  let num
  const reset = () => {
    sign = 1
    num = 0
  }
  reset()
  while (i < s.length) {
    const c = s[i]
    if (c === '(') {
      const { result, i: j } = getResult(s, i + 1)
      stack.push(result * sign)
      i = j
      reset()
    } else if (isNum.test(c)) {
      num = num * 10 + Number(c)
    } else {
      stack.push(num * sign)
      reset()
      if (c === '-') {
        sign = -1
      } else if (c === ')') {
        return { result: pop(stack), i }
      }
    }
    i++
  }
  stack.push(num * sign)
  return pop(stack)
}
const calculate = function (s) {
  const work = s.replace(/\s+/g, '')
  return getResult(work, 0)
}

module.exports = {
  calculate
}
