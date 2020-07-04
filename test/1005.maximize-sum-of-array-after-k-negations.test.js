const testFuncs = require('../src/1005.maximize-sum-of-array-after-k-negations.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([4, 3, 2], 1)).toEqual(5)
  })
  it('case 2', () => {
    expect(testFunc([3, -1, 0, 2], 3)).toBe(6)
  })
  it('case 3', () => {
    expect(testFunc([2, -3, -1, 5, -4], 2)).toBe(13)
  })
  it('case 4', () => {
    expect(testFunc([-8, 3, -5, -3, -5, -2], 6)).toBe(22)
  })
})
