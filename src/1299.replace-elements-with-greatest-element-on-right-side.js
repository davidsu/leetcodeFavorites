/*
 * @lc app=leetcode id=1299 lang=javascript
 *
 * [1299] Replace Elements with Greatest Element on Right Side
 *
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/description/
 *
 * algorithms
 * Easy (76.56%)
 * Total Accepted:    44.1K
 * Total Submissions: 57.6K
 * Testcase Example:  '[17,18,5,4,6,1]'
 *
 * Given an array arr, replace every element in that array with the greatest
 * element among the elements to its right, and replace the last element with
 * -1.
 *
 * After doing so, return the array.
 *
 *
 * Example 1:
 * Input: arr = [17,18,5,4,6,1]
 * Output: [18,6,6,6,1,-1]
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 10^4
 * 1 <= arr[i] <= 10^5
 *
 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = arr =>
  arr
    .reverse()
    .reduce(
      ({ res, max }, n) => {
        res.push(max)
        max = Math.max(max, n)
        return { res, max }
      },
      { res: [], max: -1 }
    )
    .res.reverse()
module.exports = {
  replaceElements
}
