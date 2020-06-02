/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  let max = -Math.pow(2, 31)
  let sum = 0
  for (const num of nums) {
    sum += num
    max = Math.max(max, sum)
    if (sum < 0) {
      sum = 0
    }
  }
  return max
}

module.exports = { maxSubArray }
