/*
 * @lc app=leetcode id=833 lang=javascript
 *
 * [833] Find And Replace in String
 *
 * https://leetcode.com/problems/find-and-replace-in-string/description/
 *
 * algorithms
 * Medium (50.08%)
 * Total Accepted:    36.6K
 * Total Submissions: 73.1K
 * Testcase Example:  '"abcd"\n[0, 2]\n["a", "cd"]\n["eee", "ffff"]'
 *
 * To some string S, we will perform some replacement operations that replace
 * groups of letters with new ones (not necessarily the same size).
 *
 * Each replacement operation has 3 parameters: a starting index i, a source
 * word x and a target word y.  The rule is that if x starts at position i in
 * the original string S, then we will replace that occurrence of x with y.  If
 * not, we do nothing.
 *
 * For example, if we have S = "abcd" and we have some replacement operation i
 * = 2, x = "cd", y = "ffff", then because "cd" starts at position 2 in the
 * original string S, we will replace it with "ffff".
 *
 * Using another example on S = "abcd", if we have both the replacement
 * operation i = 0, x = "ab", y = "eee", as well as another replacement
 * operation i = 2, x = "ec", y = "ffff", this second operation does nothing
 * because in the original string S[2] = 'c', which doesn't match x[0] = 'e'.
 *
 * All these operations occur simultaneously.  It's guaranteed that there won't
 * be any overlap in replacement: for example, S = "abc", indexes = [0, 1],
 * sources = ["ab","bc"] is not a valid test case.
 *
 * Example 1:
 *
 *
 * Input: S = "abcd", indexes = [0,2], sources = ["a","cd"], targets =
 * ["eee","ffff"]
 * Output: "eeebffff"
 * Explanation: "a" starts at index 0 in S, so it's replaced by "eee".
 * "cd" starts at index 2 in S, so it's replaced by "ffff".
 *
 *
 * Example 2:
 *
 *
 * Input: S = "abcd", indexes = [0,2], sources = ["ab","ec"], targets =
 * ["eee","ffff"]
 * Output: "eeecd"
 * Explanation: "ab" starts at index 0 in S, so it's replaced by "eee".
 * "ec" doesn't starts at index 2 in the original S, so we do nothing.
 *
 *
 * Notes:
 *
 *
 * 0 <= indexes.length = sources.length = targets.length <= 100
 * 0 < indexes[i] < S.length <= 1000
 * All characters in given inputs are lowercase letters.
 *
 *
 *
 *
 */
/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */

const trieBased = function (S, indexes, sources, targets) {
  const trie = {}
  for (let i = 0; i < indexes.length; i++) {
    const idx = indexes[i]
    const source = sources[i]
    if (idx + source.length <= S.length) {
      trie[idx] = trie[idx] || {}
      let node = trie[idx]
      for (const char of source) {
        node[char] = node[char] || {}
        node = node[char]
      }
      node.target = targets[i]
      node.source = source
    }
  }
  const result = []
  for (let i = 0; i < S.length; i++) {
    let node = trie[i]
    let j = 0
    while (node && !node.source) {
      node = node[S[i + j]]
      j++
    }
    if (node) {
      result.push(node.target)
      i += node.source.length - 1
    } else {
      result.push(S[i])
    }
  }
  return result.join('')
}

const findReplaceString = function (S, indexes, sources, targets) {
  const substitutions = {}
  const isValid = (idx, source) => source === S.substring(idx, idx + source.length)
  for (let i = 0; i < indexes.length; i++) {
    const idx = indexes[i]
    const source = sources[i]
    if (idx + source.length <= S.length && isValid(idx, source)) {
      substitutions[idx] = [source.length, targets[i]]
    }
  }
  const result = []
  for (let i = 0; i < S.length; i++) {
    if (i in substitutions) {
      result.push(substitutions[i][1])
      i += substitutions[i][0] - 1
    } else {
      result.push(S[i])
    }
  }
  return result.join('')
}

module.exports = {
  findReplaceString,
  trieBased
}
