/*
 * @lc app=leetcode id=838 lang=javascript
 *
 * [838] Push Dominoes
 *
 * https://leetcode.com/problems/push-dominoes/description/
 *
 * algorithms
 * Medium (47.79%)
 * Total Accepted:    19.9K
 * Total Submissions: 41.7K
 * Testcase Example:  '".L.R...LR..L.."'
 *
 * There are N dominoes in a line, and we place each domino vertically
 * upright.
 *
 * In the beginning, we simultaneously push some of the dominoes either to the
 * left or to the right.
 *
 *
 *
 * After each second, each domino that is falling to the left pushes the
 * adjacent domino on the left.
 *
 * Similarly, the dominoes falling to the right push their adjacent dominoes
 * standing on the right.
 *
 * When a vertical domino has dominoes falling on it from both sides, it stays
 * still due to the balance of the forces.
 *
 * For the purposes of this question, we will consider that a falling domino
 * expends no additional force to a falling or already fallen domino.
 *
 * Given a string "S" representing the initial state. S[i] = 'L', if the i-th
 * domino has been pushed to the left; S[i] = 'R', if the i-th domino has been
 * pushed to the right; S[i] = '.', if the i-th domino has not been pushed.
 *
 * Return a string representing the final state.
 *
 * Example 1:
 *
 *
 * Input: ".L.R...LR..L.."
 * Output: "LL.RR.LLRRLL.."
 *
 *
 * Example 2:
 *
 *
 * Input: "RR.L"
 * Output: "RR.L"
 * Explanation: The first domino expends no additional force on the second
 * domino.
 *
 *
 * Note:
 *
 *
 * 0 <= N <= 10^5
 * String dominoes contains only 'L', 'R' and '.'
 *
 *
 */
/**
 * @param {string} dominoes
 * @return {string}
 */
function pushDominoes2(dominoes) {
  const result = Array.prototype.map.call(dominoes, state => [state, 0])
  const shouldFallRight = i => result[i - 1][0] === 'R' && dominoes[i] === '.'
  const fallRight = i => (result[i] = ['R', result[i - 1][1] + 1])
  const shouldFallLeft = i =>
    result[i + 1][0] === 'L' && (result[i][0] === '.' || result[i][1] > result[i + 1][1] + 1)
  const shouldStand = i => result[i + 1][0] === 'L' && result[i + 1][1] + 1 === result[i][1]
  const fallLeft = i => {
    result[i] = ['L', result[i + 1][1] + 1]
  }
  const stand = i => (result[i] = ['.', 0])
  for (let i = 1; i < dominoes.length; i++) {
    if (shouldFallRight(i)) fallRight(i)
  }
  for (let i = dominoes.length - 2; i > -1; i--) {
    if (shouldFallLeft(i)) fallLeft(i)
    else if (shouldStand(i)) stand(i)
  }
  return result.map(([state]) => state).join('')
}
// TODO: implement this same idea in a one pass solution
const pushDominoes = dominoes =>
  dominoes
    .replace(/(R\.+L)/g, (_, group) => {
      const mid = group.length % 2 ? '1' : ''
      const len = (group.length - mid.length) / 2
      return `${'R'.repeat(len)}${mid}${'L'.repeat(len)}`
    })
    .replace(/(\.+L)/g, (_, group) => 'L'.repeat(group.length))
    .replace(/(R\.+)/g, (_, group) => 'R'.repeat(group.length))
    .replace(/1/g, '.')

module.exports = {
  pushDominoes,
  pushDominoes2
}
