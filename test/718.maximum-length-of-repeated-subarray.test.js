const testFuncs = require('../src/718.maximum-length-of-repeated-subarray.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const A = [1, 2, 3, 2, 1]
    const B = [3, 2, 1, 4, 7]
    expect(testFunc(A, B)).toEqual(3)
  })
  it('case 2', () => {
    const A = [0, 1, 1, 1, 1]
    const B = [1, 0, 1]
    expect(testFunc(A, B)).toBe(2)
  })
})
