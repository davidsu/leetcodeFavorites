const testFuncs = require('../src/1232.check-if-it-is-a-straight-line.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]])).toEqual(true)
  })
  it('case 2', () => {
    expect(testFunc([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]])).toEqual(false)
  })
  it('case 3', () => {
    expect(testFunc([[0, 0], [0, 1], [0, -1]])).toBe(true)
  })
  it('case 4', () => {
    expect(testFunc([[2, 4], [2, 5], [2, 8]])).toBe(true)
  })
})
