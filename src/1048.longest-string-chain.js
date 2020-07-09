/*
 * @lc app=leetcode id=1048 lang=javascript
 *
 * [1048] Longest String Chain
 *
 * https://leetcode.com/problems/longest-string-chain/description/
 *
 * algorithms
 * Medium (54.29%)
 * Total Accepted:    59.3K
 * Total Submissions: 109.2K
 * Testcase Example:  '["a","b","ba","bca","bda","bdca"]'
 *
 * Given a list of words, each word consists of English lowercase letters.
 *
 * Let's say word1 is a predecessor of word2 if and only if we can add exactly
 * one letter anywhere in word1 to make it equal to word2.  For example, "abc"
 * is a predecessor of "abac".
 *
 * A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >=
 * 1, where word_1 is a predecessor of word_2, word_2 is a predecessor of
 * word_3, and so on.
 *
 * Return the longest possible length of a word chain with words chosen from
 * the given list of words.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: ["a","b","ba","bca","bda","bdca"]
 * Output: 4
 * Explanation: one of the longest word chain is "a","ba","bda","bdca".
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= words.length <= 1000
 * 1 <= words[i].length <= 16
 * words[i] only consists of English lowercase letters.
 *
 *
 *
 *
 *
 */
/**
 * @param {string[]} words
 * @return {number}
 */
const longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length)
  let best = 0
  const trie = { chainLen: 0 }
  const trieAdd = (word, myBest) => {
    let node = trie
    for (const char of word) {
      if (!(char in node)) {
        node[char] = {}
      }
      node = node[char]
    }
    node.chainLen = myBest
  }
  const trieSearch = (word, needDelete = true, idx = 0, node = trie, seen = {}) => {
    if (idx === word.length && !needDelete && node && node.chainLen) {
      return node.chainLen + 1
    }
    if (seen[idx] && seen[idx].get(node)) return seen[idx].get(node)
    if (idx === word.length || !node) return 1
    let result
    if (needDelete)
      result = Math.max(
        trieSearch(word, false, idx + 1, node, seen),
        trieSearch(word, true, idx + 1, node[word[idx]], seen)
      )
    else result = trieSearch(word, needDelete, idx + 1, node[word[idx]], seen)
    seen[idx] = seen[idx] || new Map()
    seen[idx].set(node, result)
    return result
  }
  for (const word of words) {
    const myBest = trieSearch(word, trie)
    best = Math.max(best, myBest)
    trieAdd(word, myBest)
  }
  return best
}

module.exports = {
  longestStrChain
}
