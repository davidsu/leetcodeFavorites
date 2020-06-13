/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 *
 * https://leetcode.com/problems/convert-a-number-to-hexadecimal/description/
 *
 * algorithms
 * Easy (43.48%)
 * Total Accepted:    63.5K
 * Total Submissions: 146K
 * Testcase Example:  '26'
 *
 *
 * Given an integer, write an algorithm to convert it to hexadecimal. For
 * negative integer, two’s complement method is used.
 *
 *
 * Note:
 *
 * All letters in hexadecimal (a-f) must be in lowercase.
 * The hexadecimal string must not contain extra leading 0s. If the number is
 * zero, it is represented by a single zero character '0'; otherwise, the first
 * character in the hexadecimal string will not be the zero character.
 * The given number is guaranteed to fit within the range of a 32-bit signed
 * integer.
 * You must not use any method provided by the library which converts/formats
 * the number to hex directly.
 *
 *
 *
 * Example 1:
 *
 * Input:
 * 26
 *
 * Output:
 * "1a"
 *
 *
 *
 * Example 2:
 *
 * Input:
 * -1
 *
 * Output:
 * "ffffffff"
 *
 *
 */
/**
 * @param {number} num
 * @return {string}
 */
const toHex16 = n => (n < 10 ? String(n) : String.fromCharCode('a'.charCodeAt(0) + n - 10))

const numToHex = num => (num ? numToHex(num >>> 4) + toHex16(num & 0xf) : '')

const toHex = num => (num ? numToHex(num) : '0')

const toHex1 = function (num) {
  let result = ''
  while (num) {
    result = toHex16(num & 0xf) + result
    num >>>= 4
  }
  return result || '0'
}

module.exports = {
  toHex,
  toHex1
}
