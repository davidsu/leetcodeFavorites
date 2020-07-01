const testFuncs = require('../src/1403.minimum-subsequence-in-non-increasing-order.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([4, 3, 10, 9, 8])).toEqual([10, 9])
  })
  it('case 2', () => {
    expect(testFunc([4, 4, 7, 6, 7])).toEqual([7, 7, 6])
  })
  it('case 3', () => {
    expect(testFunc([6])).toEqual([6])
  })
})
