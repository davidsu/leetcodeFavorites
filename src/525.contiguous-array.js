/*
 * @lc app=leetcode id=525 lang=javascript
 *
 * [525] Contiguous Array
 *
 * https://leetcode.com/problems/contiguous-array/description/
 *
 * algorithms
 * Medium (40.09%)
 * Total Accepted:    144.5K
 * Total Submissions: 346K
 * Testcase Example:  '[0,1]'
 *
 * Given a binary array, find the maximum length of a contiguous subarray with
 * equal number of 0 and 1.
 *
 *
 * Example 1:
 *
 * Input: [0,1]
 * Output: 2
 * Explanation: [0, 1] is the longest contiguous subarray with equal number of
 * 0 and 1.
 *
 *
 *
 * Example 2:
 *
 * Input: [0,1,0]
 * Output: 2
 * Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal
 * number of 0 and 1.
 *
 *
 *
 * Note:
 * The length of the given binary array will not exceed 50,000.
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = nums => nums
    .map(v => v || -1)
    .reduce(({ max, hash, count }, num, i) => {
        count += num
        if (count in hash) max = Math.max(max, i - hash[count])
        else hash[count] = i
        return { max, hash, count }
    }, { max: 0, hash: { 0: -1 }, count: 0 }).max || 0

module.exports = {
    findMaxLength
}
