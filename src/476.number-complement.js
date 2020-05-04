/*
 * @lc app=leetcode id=476 lang=javascript
 *
 * [476] Number Complement
 *
 * https://leetcode.com/problems/number-complement/description/
 *
 * algorithms
 * Easy (63.37%)
 * Total Accepted:    162.1K
 * Total Submissions: 251.4K
 * Testcase Example:  '5'
 *
 * Given a positive integer, output its complement number. The complement
 * strategy is to flip the bits of its binary representation.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: 5
 * Output: 2
 * Explanation: The binary representation of 5 is 101 (no leading zero bits),
 * and its complement is 010. So you need to output 2.
 *
 *
 *
 *
 * Example 2:
 *
 *
 * Input: 1
 * Output: 0
 * Explanation: The binary representation of 1 is 1 (no leading zero bits), and
 * its complement is 0. So you need to output 0.
 *
 *
 *
 *
 * Note:
 *
 *
 * The given integer is guaranteed to fit within the range of a 32-bit signed
 * integer.
 * You could assume no leading zero bit in the integer’s binary
 * representation.
 * This question is the same as 1009:
 * https://leetcode.com/problems/complement-of-base-10-integer/
 *
 *
 */
/**
 * @param {number} num
 * @return {number}
 */
const naive = num => parseInt((num >>> 0).toString(2).split('').map(Number).map(a => ((a + 1) % 2)).join(''), 2)
const better = num => {
    let mask = 1
    while (mask < num) {
        mask = (mask << 1) | 1
    }
    return num ^ mask
}

module.exports = {
    naive,
    better
}
