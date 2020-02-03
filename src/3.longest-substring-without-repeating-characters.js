/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.88%)
 * Total Accepted:    1.3M
 * Total Submissions: 4.4M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 *
 * Example 3:
 *
 *
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 *
 *
 *
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring (s = '') {
    if (s.length < 2) return s.length
    const { best } = s.split('')
        .reduce((calc, char, idx) => {
            if (calc[char] >= calc.start) {
                calc.start = calc[char]
            }
            calc.best = Math.max(calc.best, idx - calc.start)
            calc[char] = idx
            return calc
        }, { best: 0, start: -1 })
    return best
};

module.exports = {
    lengthOfLongestSubstring
}
