/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 *
 * https://leetcode.com/problems/repeated-dna-sequences/description/
 *
 * algorithms
 * Medium (38.46%)
 * Total Accepted:    157.5K
 * Total Submissions: 409.4K
 * Testcase Example:  '"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"'
 *
 * All DNA is composed of a series of nucleotides abbreviated as A, C, G, and
 * T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to
 * identify repeated sequences within the DNA.
 *
 * Write a function to find all the 10-letter-long sequences (substrings) that
 * occur more than once in a DNA molecule.
 *
 * Example:
 *
 *
 * Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 *
 * Output: ["AAAAACCCCC", "CCCCCAAAAA"]
 *
 *
 */
/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function (s) {
  const seen = new Set()
  const repeated = new Set()
  for (let i = 0; i <= s.length - 10; i++) {
    const str = s.substring(i, i + 10)
    if (seen.has(str)) repeated.add(str)
    seen.add(str)
  }
  return [...repeated]
}

module.exports = {
  findRepeatedDnaSequences
}
