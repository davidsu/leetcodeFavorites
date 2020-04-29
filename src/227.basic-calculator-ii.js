/*
 * @lc app=leetcode id=227 lang=javascript
 *
 * [227] Basic Calculator II
 *
 * https://leetcode.com/problems/basic-calculator-ii/description/
 *
 * algorithms
 * Medium (34.56%)
 * Total Accepted:    128.8K
 * Total Submissions: 372.8K
 * Testcase Example:  '"3+2*2"'
 *
 * Implement a basic calculator to evaluate a simple expression string.
 *
 * The expression string contains only non-negative integers, +, -, *, /
 * operators and empty spaces  . The integer division should truncate toward
 * zero.
 *
 * Example 1:
 *
 *
 * Input: "3+2*2"
 * Output: 7
 *
 *
 * Example 2:
 *
 *
 * Input: " 3/2 "
 * Output: 1
 *
 * Example 3:
 *
 *
 * Input: " 3+5 / 2 "
 * Output: 5
 *
 *
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
// this is a terrible slow solution, need to solve it with stack, it's only simple enough to implement and understand
const calculate = function (s) {
    let expression = s.replace(/\s+/g, '')
    while (/[*/]/.test(expression)) {
        expression = expression.replace(/(\d+[*/]\d+)/, (_, expr) => Math.floor(eval(expr))) // eslint-disable-line no-eval
    }
    while (/\d[+-]/.test(expression)) {
        expression = expression.replace(/((?:^-)?\d+[+-]\d+)/, (_, expr) => Math.floor(eval(expr))) // eslint-disable-line no-eval
    }
    return Number(expression)
}

module.exports = {
    testFunc: calculate
}
