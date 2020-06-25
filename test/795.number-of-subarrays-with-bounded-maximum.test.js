const testFuncs = require('../src/795.number-of-subarrays-with-bounded-maximum.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([2, 1, 4, 3], 2, 3)).toEqual(3)
  })
  it('case 2', () => {
    expect(testFunc([2, 1, 4, 1, 3], 2, 3)).toEqual(4)
  })
  it('case 3', () => {
    expect(testFunc([2, 1, 1, 3], 2, 3)).toEqual(7)
  })
  it('case 4', () => {
    expect(testFunc([73, 55, 36, 5, 55, 14, 9, 7, 72, 52], 32, 69)).toEqual(22)
  })
})
