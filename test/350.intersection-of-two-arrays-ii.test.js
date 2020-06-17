const testFuncs = require('../src/350.intersection-of-two-arrays-ii.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
  })
  it('case 2', () => {
    expect(testFunc([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9])
  })
})
