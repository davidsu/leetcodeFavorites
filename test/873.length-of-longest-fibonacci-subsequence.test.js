const testFuncs = require('../src/873.length-of-longest-fibonacci-subsequence.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 2, 3, 4, 5, 6, 7, 8])).toEqual(5)
  })
  it('case 2', () => {
    expect(testFunc([1, 3, 7, 11, 12, 14, 18])).toBe(3)
  })
  it('case 3', () => {
    expect(testFunc([2, 4, 5, 6, 7, 8, 11, 13, 14, 15, 21, 22, 34])).toBe(5)
  })
})
