const testFuncs = require('../src/1389.create-target-array-in-the-given-order.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])).toEqual([0, 4, 1, 3, 2])
  })
  it('case 2', () => {
    expect(testFunc([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])).toEqual([0, 1, 2, 3, 4])
  })
  fit('case 3', () => {
    expect(testFunc([4, 2, 4, 3, 2], [0, 0, 1, 3, 1])).toEqual([2, 2, 4, 4, 3])
  })
})
