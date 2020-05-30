/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 *
 * https://leetcode.com/problems/base-7/description/
 *
 * algorithms
 * Easy (45.87%)
 * Total Accepted:    53.1K
 * Total Submissions: 115.8K
 * Testcase Example:  '100'
 *
 * Given an integer, return its base 7 string representation.
 *
 * Example 1:
 *
 * Input: 100
 * Output: "202"
 *
 *
 *
 * Example 2:
 *
 * Input: -7
 * Output: "-10"
 *
 *
 *
 * Note:
 * The input will be in range of [-1e7, 1e7].
 *
 */
/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = function (num) {
    if (!num) return '0'
    const sign = num < 0 ? '-' : ''
    num = Math.abs(num)
    const arr = []
    while (num) {
        arr.push(num % 7)
        num = Math.floor(num / 7)
    }
    return sign + arr.reverse().join('')
}

module.exports = {
    convertToBase7
}
