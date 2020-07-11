const testFuncs = require('../src/1186.maximum-subarray-sum-with-one-deletion.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, -2, 0, 3])).toEqual(4)
  })
  it('case 2', () => {
    expect(testFunc([1, -2, -2, 3])).toBe(3)
  })
  it('case 3', () => {
    expect(testFunc([-1, -1, -1, -1])).toBe(-1)
  })
  it('case 4', () => {
    expect(testFunc([2, 1, -2, -5, -2])).toBe(3)
  })
})
