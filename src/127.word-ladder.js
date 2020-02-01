/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 *
 * https://leetcode.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (25.65%)
 * Total Accepted:    351.5K
 * Total Submissions: 1.3M
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * Given two words (beginWord and endWord), and a dictionary's word list, find
 * the length of shortest transformation sequence from beginWord to endWord,
 * such that:
 *
 *
 * Only one letter can be changed at a time.
 * Each transformed word must exist in the word list. Note that beginWord is
 * not a transformed word.
 *
 *
 * Note:
 *
 *
 * Return 0 if there is no such transformation sequence.
 * All words have the same length.
 * All words contain only lowercase alphabetic characters.
 * You may assume no duplicates in the word list.
 * You may assume beginWord and endWord are non-empty and are not the same.
 *
 *
 * Example 1:
 *
 *
 * Input:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 *
 * Output: 5
 *
 * Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" ->
 * "dog" -> "cog",
 * return its length 5.
 *
 *
 * Example 2:
 *
 *
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 *
 * Output: 0
 *
 * Explanation: The endWord "cog" is not in wordList, therefore no possible
 * transformation.
 *
 *
 *
 *
 *
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const aToZ = new Array(26).fill(0).map((_, idx) => String.fromCharCode('a'.charCodeAt(0) + idx))

function * generateAllDistanceOneWords (word) {
    const wordArr = word.split('')
    for (const [idx, char] of Object.entries(wordArr)) {
        for (const replaceChar of aToZ) {
            if (char !== replaceChar) {
                wordArr[idx] = replaceChar
                yield wordArr.join('')
            }
        }
        wordArr[idx] = char
    }
}

var ladderLength = function (beginWord, endWord, wordList) {
    if (beginWord === endWord) return 0
    const next = [[beginWord, 1]]
    let idx = 0
    const unseen = new Set(wordList)
    while (idx < next.length) {
        const [curr, distance] = next[idx++]
        if (curr === endWord) return distance
        Array.from(generateAllDistanceOneWords(curr))
            .filter(candidate => unseen.has(candidate))
            .forEach(nextStep => {
                unseen.delete(nextStep)
                next.push([nextStep, distance + 1])
            })
    }
    return 0
}

module.exports = {
    testFunc: ladderLength
}
