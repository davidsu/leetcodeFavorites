/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (42.21%)
 * Total Accepted:    173.5K
 * Total Submissions: 411K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 *
 * Example 1:
 *
 *
 * Input: "hello"
 * Output: "holle"
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "leetcode"
 * Output: "leotcede"
 *
 *
 * Note:
 * The vowels does not include the letter "y".
 *
 *
 *
 */
/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels (s = '') {
    const working = s.split('')
    let low = -1; let high = s.length
    const swap = (i, j) => { [working[i], working[j]] = [working[j], working[i]] }
    while (++low < --high) {
        while (!/[aeiou]/i.test(working[low]) && low < high) low++
        while (!/[aeiou]/i.test(working[high]) && high > low) high--
        swap(high, low)
    }
    return working.join('')
};

function functionalReverseVowels (s) {
    const regex = /[aeiou]/i
    const vowels = s.split('').filter(c => regex.test(c))
    return s.split('').map(c => regex.test(c) ? vowels.pop() : c).join('')
};
module.exports = {
    reverseVowels,
    functionalReverseVowels
}
