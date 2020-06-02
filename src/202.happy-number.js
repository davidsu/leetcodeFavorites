const squareSum = n => {
  let result = 0
  while (n) {
    result = result + (n % 10) * (n % 10)
    n = Math.floor(n / 10)
  }
  return result
}
const isHappy = function (n) {
  const seen = new Set()
  while (n !== 1) {
    if (seen.has(n)) return false
    seen.add(n)
    n = squareSum(n)
  }
  return true
}
module.exports = {
  isHappy
}
