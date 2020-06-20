/*
 * @lc app=leetcode id=809 lang=javascript
 *
 * [809] Expressive Words
 *
 * https://leetcode.com/problems/expressive-words/description/
 *
 * algorithms
 * Medium (47.11%)
 * Total Accepted:    38.9K
 * Total Submissions: 82.6K
 * Testcase Example:  '"heeellooo"\n["hello", "hi", "helo"]'
 *
 * Sometimes people repeat letters to represent extra feeling, such as "hello"
 * -> "heeellooo", "hi" -> "hiiii".  In these strings like "heeellooo", we have
 * groups of adjacent letters that are all the same:  "h", "eee", "ll", "ooo".
 *
 * For some given string S, a query word is stretchy if it can be made to be
 * equal to S by any number of applications of the following extension
 * operation: choose a group consisting of characters c, and add some number of
 * characters c to the group so that the size of the group is 3 or more.
 *
 * For example, starting with "hello", we could do an extension on the group
 * "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has
 * size less than 3.  Also, we could do another extension like "ll" -> "lllll"
 * to get "helllllooo".  If S = "helllllooo", then the query word "hello" would
 * be stretchy because of these two extension operations: query = "hello" ->
 * "hellooo" -> "helllllooo" = S.
 *
 * Given a list of query words, return the number of words that are
 * stretchy.
 *
 *
 *
 *
 * Example:
 * Input:
 * S = "heeellooo"
 * words = ["hello", "hi", "helo"]
 * Output: 1
 * Explanation:
 * We can extend "e" and "o" in the word "hello" to get "heeellooo".
 * We can't extend "helo" to get "heeellooo" because the group "ll" is not size
 * 3 or more.
 *
 *
 *
 *
 * Notes:
 *
 *
 * 0 <= len(S) <= 100.
 * 0 <= len(words) <= 100.
 * 0 <= len(words[i]) <= 100.
 * S and all words in words consist only of lowercase letters
 *
 *
 *
 *
 */
/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */

const toMap = str =>
  Array.prototype.reduce.call(
    str,
    (map, char, i) => {
      if (map[map.length - 1][0] === char) {
        map[map.length - 1][1]++
      } else {
        map.push([char, 1])
      }
      return map
    },
    [['', 0]]
  )

const canStretch = map1 => word => {
  const map2 = toMap(word)
  if (map1.length !== map2.length) return false
  for (let i = 0; i < map1.length; i++) {
    const [char, count] = map1[i]
    const [wChar, wCount] = map2[i]
    if (char !== wChar || wCount > count || (count < 3 && count !== wCount)) return false
  }
  return true
}
const expressiveWords = function (str, words) {
  const isStretchable = canStretch(toMap(str))
  return words.map(isStretchable).reduce((sum, curr) => sum + curr, 0)
}

module.exports = {
  expressiveWords
}
