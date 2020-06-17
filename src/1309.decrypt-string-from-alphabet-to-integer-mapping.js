/*
 * @lc app=leetcode id=1309 lang=javascript
 *
 * [1309] Decrypt String from Alphabet to Integer Mapping
 *
 * https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/description/
 *
 * algorithms
 * Easy (76.74%)
 * Total Accepted:    26K
 * Total Submissions: 33.9K
 * Testcase Example:  '"10#11#12"'
 *
 * Given a string s formed by digits ('0' - '9') and '#' . We want to map s to
 * English lowercase characters as follows:
 *
 *
 * Characters ('a' to 'i') are represented by ('1' to '9') respectively.
 * Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
 *
 *
 * Return the string formed after mapping.
 *
 * It's guaranteed that a unique mapping will always exist.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "10#11#12"
 * Output: "jkab"
 * Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "1326#"
 * Output: "acz"
 *
 *
 * Example 3:
 *
 *
 * Input: s = "25#"
 * Output: "y"
 *
 *
 * Example 4:
 *
 *
 * Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
 * Output: "abcdefghijklmnopqrstuvwxyz"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s[i] only contains digits letters ('0'-'9') and '#' letter.
 * s will be valid string such that mapping is always possible.
 *
 */
/**
 * @param {string} s
 * @return {string}
 */
// TODO: use String.match to simplify code
// see https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/discuss/595256/JavaScript-Solution-99-100-(using-regex)
/* eslint-disable prettier/prettier */
const a = 'a'.charCodeAt(0) - 1
const freqAlphabets = S =>
  S
    .replace(/(\d\d)#/g, (_, g1) => String.fromCharCode(a + Number(g1)))
    .replace(/(\d)/g, (_, g1) => String.fromCharCode(a + Number(g1)))
module.exports = {
  freqAlphabets
}
