const testFuncs = require('../src/154.find-minimum-in-rotated-sorted-array-ii.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 3, 5])).toEqual(1)
  })
  it('case 2', () => {
    expect(testFunc([2, 2, 2, 0, 1])).toEqual(0)
  })
  it('case 3', () => {
    expect(testFunc([1, 3, 3])).toEqual(1)
  })
})
