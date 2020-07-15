const testFuncs = require('../src/1007.minimum-domino-rotations-for-equal-row.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    const A = [2, 1, 2, 4, 2, 2]; const B = [5, 2, 6, 2, 3, 2]
    expect(testFunc(A, B)).toEqual(2)
  })
  it('case 20000', () => {
    const A = [3, 5, 1, 2, 3]; const B = [3, 6, 3, 3, 4]
    expect(testFunc(A, B)).toEqual(-1)
  })
  it('case 3', () => {
    const a = [1, 2, 2]
    const b = [2, 1, 1]
    expect(testFunc(a, b)).toBe(1)
  })
})
