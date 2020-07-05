const testFuncs = require('../src/974.subarray-sums-divisible-by-k.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([4, 5, 0, -2, -3, 1], 5)).toEqual(7)
  })
  it('case 2', () => {
    expect(testFunc([4, 5, 0, -2, -3, 1, 5, 0, -2, -3, 1], 5)).toBe(16)
  })
})
