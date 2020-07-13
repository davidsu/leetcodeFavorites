const testFuncs = require('../src/912.sort-an-array.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([5, 2, 3, 1])).toEqual([1, 2, 3, 5])
  })
  it('case 2', () => {
    expect(testFunc([5, 1, 1, 2, 0, 0])).toEqual([5, 1, 1, 2, 0, 0].sort((a, b) => a - b))
  })
})
