const testFuncs = require('../src/1331.rank-transform-of-an-array.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([40, 10, 20, 30])).toEqual([4, 1, 2, 3])
  })
  it('case 2', () => {
    expect(testFunc([100, 100, 100])).toEqual([1, 1, 1])
  })
  it('case 3', () => {
    expect(testFunc([37, 12, 28, 9, 100, 56, 80, 5, 12])).toEqual([5, 3, 4, 2, 8, 6, 7, 1, 3])
  })
})
