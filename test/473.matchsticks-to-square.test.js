const testFuncs = require('../src/473.matchsticks-to-square.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 1, 2, 2, 2])).toEqual(true)
  })
  it('case 2', () => {
    expect(testFunc([3, 3, 3, 3, 4])).toEqual(false)
  })
  it('case 3', () => {
    expect(testFunc([])).toEqual(false)
  })
  it('case 4', () => {
    expect(testFunc([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toEqual(true)
  })
  it('case 5', () => {
    expect(testFunc([5, 10, 9, 10, 3, 4, 7, 7, 4, 5, 5, 1, 3, 4, 2])).toEqual(false)
  })
})
