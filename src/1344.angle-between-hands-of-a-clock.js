/*
 * @lc app=leetcode id=1344 lang=javascript
 *
 * [1344] Angle Between Hands of a Clock
 *
 * https://leetcode.com/problems/angle-between-hands-of-a-clock/description/
 *
 * algorithms
 * Medium (60.50%)
 * Total Accepted:    8.8K
 * Total Submissions: 14.6K
 * Testcase Example:  '12\n30'
 *
 * Given two numbers, hour and minutes. Return the smaller angle (in degrees)
 * formed between the hour and the minute hand.
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: hour = 12, minutes = 30
 * Output: 165
 *
 *
 * Example 2:
 *
 *
 *
 *
 * Input: hour = 3, minutes = 30
 * Output: 75
 *
 *
 * Example 3:
 *
 *
 *
 *
 * Input: hour = 3, minutes = 15
 * Output: 7.5
 *
 *
 * Example 4:
 *
 *
 * Input: hour = 4, minutes = 50
 * Output: 155
 *
 *
 * Example 5:
 *
 *
 * Input: hour = 12, minutes = 0
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= hour <= 12
 * 0 <= minutes <= 59
 * Answers within 10^-5 of the actual value will be accepted as correct.
 *
 *
 */
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
const angleClock = function (hour, minutes) {
  const hourFix = (minutes / 60) * 30
  const hourAngle = hour * 30 + hourFix
  const minAngle = minutes * 6
  const angle = Math.abs(hourAngle - minAngle)
  if (angle > 180) return 360 - angle
  return angle
}

module.exports = {
  angleClock
}
