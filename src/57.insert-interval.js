/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 *
 * https://leetcode.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (31.82%)
 * Total Accepted:    196.1K
 * Total Submissions: 616.4K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * Given a set of non-overlapping intervals, insert a new interval into the
 * intervals (merge if necessary).
 *
 * You may assume that the intervals were initially sorted according to their
 * start times.
 *
 * Example 1:
 *
 *
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 *
 * Example 2:
 *
 *
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with
 * [3,5],[6,7],[8,10].
 *
 * NOTE: input types have been changed on April 15, 2019. Please reset to
 * default code definition to get new method signature.
 *
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  const shouldBeLast = !intervals.length || intervals[intervals.length - 1][1] < newInterval[0];
  if (shouldBeLast) return [...intervals, newInterval];
  const shouldBeFirst = intervals[0][0] > newInterval[1];
  if (shouldBeFirst) return [newInterval, ...intervals];
  let idx = 0;
  while (newInterval[0] > intervals[idx][1]) idx++;
  let end = idx;
  while (end < intervals.length && intervals[end][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[end][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[end][1], newInterval[1]);
    end++;
  }
  intervals.splice(idx, end - idx, newInterval);
  return intervals;
}

module.exports = {
  insert
};
