/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 *
 * https://leetcode.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (28.83%)
 * Total Accepted:    219.5K
 * Total Submissions: 741.7K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 *
 * Each element in the array represents your maximum jump length at that
 * position.
 *
 * Your goal is to reach the last index in the minimum number of jumps.
 *
 * Example:
 *
 *
 * Input: [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
 * ⁠   Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Note:
 *
 * You can assume that you can always reach the last index.
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  let jumps = 0;
  let nextIdx = 0;
  while (nextIdx < nums.length - 1) {
    jumps++;
    const idx = nextIdx;
    if (idx + nums[idx] >= nums.length - 1) {
      break;
    }
    let bestNext = idx;
    for (let jumpSize = nums[idx]; jumpSize > 0; jumpSize--) {
      const jumpStart = idx + jumpSize;
      if (nums[jumpStart] + jumpStart > bestNext) {
        nextIdx = jumpStart;
        bestNext = nums[jumpStart] + jumpStart;
      }
    }
  }
  return jumps;
}

module.exports = {
  jump
};
