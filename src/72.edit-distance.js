/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 *
 * https://leetcode.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (42.48%)
 * Total Accepted:    261.5K
 * Total Submissions: 602.4K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * Given two words word1 and word2, find the minimum number of operations
 * required to convert word1 to word2.
 *
 * You have the following 3 operations permitted on a word:
 *
 *
 * Insert a character
 * Delete a character
 * Replace a character
 *
 *
 * Example 1:
 *
 *
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation:
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 *
 *
 * Example 2:
 *
 *
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation:
 * intention -> inention (remove 't')
 * inention -> enention (replace 'i' with 'e')
 * enention -> exention (replace 'n' with 'x')
 * exention -> exection (replace 'n' with 'c')
 * exection -> execution (insert 'u')
 *
 *
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
  const dp = new Array(word1.length + 1).fill(0).map((_, idx) => new Array(word2.length + 1).fill(idx))
  dp[0] = dp[0].map((_, idx) => idx)
  for (let row = 1; row <= word1.length; row++) {
    for (let col = 1; col <= word2.length; col++) {
      if (word1[row - 1] === word2[col - 1]) {
        dp[row][col] = dp[row - 1][col - 1]
      } else {
        dp[row][col] = Math.min(dp[row - 1][col], dp[row][col - 1], dp[row - 1][col - 1]) + 1
      }
    }
  }
  return dp[word1.length][word2.length]
}

module.exports = {
  minDistance
}
