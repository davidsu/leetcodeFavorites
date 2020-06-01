/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (51.90%)
 * Total Accepted:    473.2K
 * Total Submissions: 897K
 * Testcase Example:  '"leetcode"'
 *
 *
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
 *
 * Examples:
 *
 * s = "leetcode"
 * return 0.
 *
 * s = "loveleetcode",
 * return 2.
 *
 *
 *
 *
 * Note: You may assume the string contain only lowercase letters.
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const sArr = s.split('');
  const frequencies = sArr.reduce((acc, c) => {
    acc[c] = (acc[c] || 0) + 1;
    return acc;
  }, {});
  return sArr.findIndex((c) => frequencies[c] === 1);
};

module.exports = {
  firstUniqChar
};
