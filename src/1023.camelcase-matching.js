/*
 * @lc app=leetcode id=1023 lang=javascript
 *
 * [1023] Camelcase Matching
 *
 * https://leetcode.com/problems/camelcase-matching/description/
 *
 * algorithms
 * Medium (56.73%)
 * Total Accepted:    17.1K
 * Total Submissions: 30.1K
 * Testcase Example:  '["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"]\n"FB"'
 *
 * A query word matches a given pattern if we can insert lowercase letters to
 * the pattern word so that it equals the query. (We may insert each character
 * at any position, and may insert 0 characters.)
 *
 * Given a list of queries, and a pattern, return an answer list of booleans,
 * where answer[i] is true if and only if queries[i] matches the pattern.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: queries =
 * ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern =
 * "FB"
 * Output: [true,false,true,true,false]
 * Explanation:
 * "FooBar" can be generated like this "F" + "oo" + "B" + "ar".
 * "FootBall" can be generated like this "F" + "oot" + "B" + "all".
 * "FrameBuffer" can be generated like this "F" + "rame" + "B" + "uffer".
 *
 * Example 2:
 *
 *
 * Input: queries =
 * ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern =
 * "FoBa"
 * Output: [true,false,true,false,false]
 * Explanation:
 * "FooBar" can be generated like this "Fo" + "o" + "Ba" + "r".
 * "FootBall" can be generated like this "Fo" + "ot" + "Ba" + "ll".
 *
 *
 * Example 3:
 *
 *
 * Input: queries =
 * ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern =
 * "FoBaT"
 * Output: [false,true,false,false,false]
 * Explanation:
 * "FooBarTest" can be generated like this "Fo" + "o" + "Ba" + "r" + "T" +
 * "est".
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= queries.length <= 100
 * 1 <= queries[i].length <= 100
 * 1 <= pattern.length <= 100
 * All strings consists only of lower and upper case English letters.
 *
 *
 */
/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
const getMatches = (query, idx, trie, set = new Set()) => {
  if (idx === query.length) {
    if (trie.word) set.add(trie.word)
  }
  for (const c in trie) {
    if (c === query[idx]) {
      getMatches(query, idx + 1, trie[c], set)
    } else if (c !== c.toUpperCase()) {
      getMatches(query, idx, trie[c], set)
    }
  }
  return set
}
const camelMatch = function (queries, pattern) {
  const trie = {}
  for (const word of queries) {
    let node = trie
    for (const char of word) {
      node[char] = node[char] || {}
      node = node[char]
    }
    node.leaf = true
    node.word = word
  }
  const valids = getMatches(pattern, 0, trie)
  return queries.map(word => valids.has(word))
}

module.exports = {
  camelMatch
}
