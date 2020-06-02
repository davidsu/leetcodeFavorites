/*
 * @lc app=leetcode id=728 lang=javascript
 *
 * [728] Self Dividing Numbers
 *
 * https://leetcode.com/problems/self-dividing-numbers/description/
 *
 * algorithms
 * Easy (73.67%)
 * Total Accepted:    120.1K
 * Total Submissions: 163K
 * Testcase Example:  '1\n22'
 *
 *
 * A self-dividing number is a number that is divisible by every digit it
 * contains.
 *
 * For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 ==
 * 0, and 128 % 8 == 0.
 *
 * Also, a self-dividing number is not allowed to contain the digit zero.
 *
 * Given a lower and upper number bound, output a list of every possible self
 * dividing number, including the bounds if possible.
 *
 * Example 1:
 *
 * Input:
 * left = 1, right = 22
 * Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
 *
 *
 *
 * Note:
 * The boundaries of each input argument are 1 .
 *
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const isSelfDividing = n =>
  String(n)
    .split('')
    .every(digit => Number(digit) && !(n % digit))

const selfDividingNumbers = (left, right) =>
  new Array(right - left + 1)
    .fill(0)
    .map((_, i) => left + i)
    .filter(isSelfDividing)

module.exports = {
  selfDividingNumbers
}
