/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 *
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/description/
 *
 * algorithms
 * Easy (30.50%)
 * Total Accepted:    99.2K
 * Total Submissions: 323.4K
 * Testcase Example:  '[2,6,4,8,10,9,15]'
 *
 * Given an integer array, you need to find one continuous subarray that if you
 * only sort this subarray in ascending order, then the whole array will be
 * sorted in ascending order, too.
 *
 * You need to find the shortest such subarray and output its length.
 *
 * Example 1:
 *
 * Input: [2, 6, 4, 8, 10, 9, 15]
 * Output: 5
 * Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make
 * the whole array sorted in ascending order.
 *
 *
 *
 * Note:
 *
 * Then length of the input array is in range [1, 10,000].
 * The input array may contain duplicates, so ascending order here means .
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = function (nums) {
    const sorted = [...nums].sort((a, b) => a - b)
    let start = 0
    let end = nums.length - 1
    while (start < end && nums[start] === sorted[start]) start++
    while (end > start && nums[end] === sorted[end]) end--
    return end > start ? end - start + 1 : 0
}

module.exports = {
    findUnsortedSubarray
}
