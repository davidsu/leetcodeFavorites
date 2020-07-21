const testFuncs = require('../src/1043.partition-array-for-maximum-sum.js')
describe.each(
  Object.entries(testFuncs)
)('%s', (_, testFunc) => {
  it('case 1', () => {
    expect(testFunc([1, 15, 7, 9, 2, 5, 10], 3)).toEqual(84)
  })
})
