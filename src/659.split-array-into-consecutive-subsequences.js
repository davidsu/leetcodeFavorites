/*
 * @lc app=leetcode id=659 lang=javascript
 *
 * [659] Split Array into Consecutive Subsequences
 *
 * https://leetcode.com/problems/split-array-into-consecutive-subsequences/description/
 *
 * algorithms
 * Medium (43.27%)
 * Total Accepted:    41.1K
 * Total Submissions: 95K
 * Testcase Example:  '[1,2,3,3,4,5]'
 *
 * Given an array nums sorted in ascending order, return true if and only if
 * you can split it into 1 or more subsequences such that each subsequence
 * consists of consecutive integers and has length at least 3.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: [1,2,3,3,4,5]
 * Output: True
 * Explanation:
 * You can split them into two consecutive subsequences :
 * 1, 2, 3
 * 3, 4, 5
 *
 *
 *
 * Example 2:
 *
 *
 * Input: [1,2,3,3,4,4,5,5]
 * Output: True
 * Explanation:
 * You can split them into two consecutive subsequences :
 * 1, 2, 3, 4, 5
 * 3, 4, 5
 *
 *
 *
 * Example 3:
 *
 *
 * Input: [1,2,3,4,4,5]
 * Output: False
 *
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10000
 *
 *
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isPossible = function (nums) {
  const map = {}
  for (const num of nums) {
    let res = 1
    if (map[num]) {
      res = map[num].pop()
      if (map[num].length === 0) delete map[num]
      res++
    }
    map[num + 1] = map[num + 1] || []
    if (res > 2) map[num + 1].unshift(res)
    else map[num + 1].push(res)
  }
  // console.log(map)
  // console.log(result)
  for (const tmp of Object.values(map)) {
    if (tmp.some(len => len < 3)) return false
  }
  return true
}

module.exports = {
  isPossible
}
