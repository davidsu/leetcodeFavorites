const testFuncs = require('../src/1509.minimum-difference-between-largest-and-smallest-value-in-three-moves.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([5, 3, 2, 4])).toEqual(0)
  })
  it('case 2', () => {
    expect(testFunc([1, 5, 0, 10, 14])).toBe(1)
  })
  it('case 3', () => {
    expect(testFunc([6, 6, 0, 1, 1, 4, 6])).toBe(2)
  })
  it('case 4', () => {
    expect(testFunc([1, 5, 6, 14, 15])).toBe(1)
  })
})
