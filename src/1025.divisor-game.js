/*
 * @lc app=leetcode id=1025 lang=javascript
 *
 * [1025] Divisor Game
 *
 * https://leetcode.com/problems/divisor-game/description/
 *
 * algorithms
 * Easy (65.99%)
 * Total Accepted:    52.5K
 * Total Submissions: 79.6K
 * Testcase Example:  '2'
 *
 * Alice and Bob take turns playing a game, with Alice starting first.
 *
 * Initially, there is a number N on the chalkboard.  On each player's turn,
 * that player makes a move consisting of:
 *
 *
 * Choosing any x with 0 < x < N and N % x == 0.
 * Replacing the number N on the chalkboard with N - x.
 *
 *
 * Also, if a player cannot make a move, they lose the game.
 *
 * Return True if and only if Alice wins the game, assuming both players play
 * optimally.
 *
 *
 *
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: 2
 * Output: true
 * Explanation: Alice chooses 1, and Bob has no more moves.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: 3
 * Output: false
 * Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more
 * moves.
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= N <= 1000
 *
 *
 *
 */
/**
 * @param {number} N
 * @return {boolean}
 */
// TODO: this is brute force, there's a cute logical solution for this
const createDivisors = N => {
  const max = N / 2
  const result = []
  for (let i = 1; i <= max; i++) {
    if (N % i === 0) result.push(i)
  }
  return result
}

const divisorGame = function (N) {
  const dp = [true, false, true]
  for (let i = 3; i <= N; i++) {
    const divisors = createDivisors(i)
    dp.push(divisors.some(divisor => dp[i - divisor] === false))
  }
  return dp[N]
}

module.exports = {
  divisorGame
}
