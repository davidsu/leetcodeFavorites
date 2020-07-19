const testFuncs = require('../src/954.array-of-doubled-pairs.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([3, 1, 3, 6])).toEqual(false)
  })
  it('case 2', () => {
    expect(testFunc([2, 1, 2, 6])).toEqual(false)
  })
  it('case 3', () => {
    expect(testFunc([4, -2, 2, -4])).toBe(true)
  })
  it('case 4', () => {
    expect(testFunc([1, 2, 4, 16, 8, 4])).toBe(false)
  })
})
